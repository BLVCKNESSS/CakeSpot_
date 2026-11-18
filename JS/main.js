// ===== CAKE SPOT — SCRIPT COMMUN (panier, navigation, animations) =====
document.documentElement.classList.add('js');

const CAKESPOT_PHONE = '237686019392';
const CART_KEY = 'cakespot_cart_v2';
const LEGACY_CART_KEY = 'cakespot_cart';
const ORDER_KEY = 'cakespot_order';
const CART_MAX_LINES = 50;
const CART_MAX_QTY = 99;
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

// Racine du site, déduite de l'emplacement de ce script (<racine>/JS/main.js).
// Fonctionne à la racine d'un domaine, dans un sous-dossier ou en file://.
const SITE_ROOT = (() => {
  try {
    const src = document.currentScript && document.currentScript.src;
    if (src) return new URL('../', src).href;
  } catch { /* ignore */ }
  return new URL('/', window.location.href).href;
})();

// ===== UTILITAIRES =====
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"'`]/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;'
  }[ch]));
}

// Chemin d'image -> URL absolue sûre (refuse javascript:, etc.)
function resolveAssetUrl(path) {
  if (!path) return '';
  const raw = String(path).trim();
  if (/^data:image\/(png|jpe?g|gif|webp|avif|svg\+xml)[;,]/i.test(raw)) return raw;
  const cleaned = raw.replace(/^(\.\.\/)+/, '').replace(/^\.?\//, '');
  try {
    const url = /^[a-z][a-z0-9+.-]*:/i.test(raw) ? new URL(raw) : new URL(cleaned, SITE_ROOT);
    return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

// Miniature 480px (images/thumbs) pour les images locales du catalogue
function thumbUrl(url) {
  const base = `${SITE_ROOT}images/optimized/`;
  return url && url.startsWith(base) ? `${SITE_ROOT}images/thumbs/${url.slice(base.length)}` : url;
}

function formatPrice(value) {
  return String(value || '').replace(/\s+/g, ' ');
}

function formatFcfa(n) {
  return `${Math.round(n).toLocaleString('fr-FR').replace(/ | /g, ' ')} Frs`;
}

function getPrixNum(prixStr) {
  const num = parseInt(String(prixStr || '').replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? 0 : num;
}

function storageGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* stockage indisponible */ }
}

const PLACEHOLDER_IMG = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect fill="#f6ece2" width="400" height="400"/><text x="200" y="230" text-anchor="middle" font-size="120">🎂</text></svg>'
);

// Remplace toute image cassée par un visuel neutre
document.addEventListener('error', (event) => {
  const img = event.target;
  if (img instanceof HTMLImageElement && img.dataset.fallback !== 'done' && img.closest('[data-img-fallback]')) {
    img.dataset.fallback = 'done';
    img.removeAttribute('srcset');
    img.src = PLACEHOLDER_IMG;
  }
}, true);

// ===== PANIER : DONNÉES =====
function lineKey(id, saveur, note) {
  return [id, saveur || '', note || ''].join('|');
}

function sanitizeLine(item) {
  if (!item || typeof item !== 'object') return null;
  const id = String(item.id ?? '').slice(0, 64);
  if (!id) return null;
  const saveur = String(item.saveur ?? '').slice(0, 60);
  const note = String(item.note ?? '').slice(0, 300);
  const prix = String(item.prix ?? '').slice(0, 40);
  const prixNum = Number.isFinite(Number(item.prixNum)) && Number(item.prixNum) > 0 ? Number(item.prixNum) : getPrixNum(prix);
  return {
    key: lineKey(id, saveur, note),
    id,
    nom: String(item.nom ?? '').slice(0, 120),
    prix,
    prixNum,
    img: resolveAssetUrl(item.img),
    categorie: String(item.categorie ?? '').slice(0, 60),
    details: String(item.details ?? '').slice(0, 200),
    saveur,
    note,
    qty: Math.min(CART_MAX_QTY, Math.max(1, parseInt(item.qty, 10) || 1)),
  };
}

function loadCart() {
  let lines = storageGet(CART_KEY, null);
  if (!Array.isArray(lines)) {
    // Migration de l'ancien panier (v1) : les détails contenaient saveur et note
    const legacy = storageGet(LEGACY_CART_KEY, []);
    lines = Array.isArray(legacy) ? legacy.map(it => {
      const details = String(it?.details || '');
      const saveur = (details.match(/Saveur : ([^|]+)/) || [])[1];
      const note = (details.match(/Note : (.+)$/) || [])[1];
      return { ...it, details: details.split(' | ')[0], saveur: saveur?.trim(), note: note?.trim() };
    }) : [];
    try { localStorage.removeItem(LEGACY_CART_KEY); } catch { /* ignore */ }
  }
  const merged = new Map();
  for (const raw of lines) {
    const line = sanitizeLine(raw);
    if (!line) continue;
    const existing = merged.get(line.key);
    if (existing) existing.qty = Math.min(CART_MAX_QTY, existing.qty + line.qty);
    else merged.set(line.key, line);
  }
  return [...merged.values()].slice(0, CART_MAX_LINES);
}

let cart = loadCart();
let lastRemoved = null;

function saveCart() {
  storageSet(CART_KEY, cart);
  renderCart();
  updateCartCount(true);
}

function getCartTotals() {
  let count = 0, total = 0, quoteLines = 0;
  for (const line of cart) {
    count += line.qty;
    if (line.prixNum > 0) total += line.prixNum * line.qty;
    else quoteLines++;
  }
  return { count, total, quoteLines, lines: cart.length };
}

/**
 * Ajoute un produit au panier.
 * product: { id, nom, prix, prixNum, img, categorie, details }
 * options: { qty, saveur, note, sourceImg (élément <img> pour l'animation) }
 */
function addToCart(product, options = {}) {
  const line = sanitizeLine({ ...product, qty: options.qty || 1, saveur: options.saveur, note: options.note });
  if (!line) return false;
  const existing = cart.find(l => l.key === line.key);
  if (existing) {
    existing.qty = Math.min(CART_MAX_QTY, existing.qty + line.qty);
  } else {
    if (cart.length >= CART_MAX_LINES) { showToast('Panier plein : finalisez d’abord votre commande.'); return false; }
    cart.push(line);
  }
  if (options.sourceImg) flyToCart(options.sourceImg);
  saveCart();
  showToast(`${line.nom} ajouté au panier`, { label: 'Voir', onClick: openCart });
  return true;
}

function setLineQty(key, qty) {
  const line = cart.find(l => l.key === key);
  if (!line) return;
  if (qty <= 0) { removeLine(key); return; }
  line.qty = Math.min(CART_MAX_QTY, qty);
  saveCart();
}

function removeLine(key) {
  const index = cart.findIndex(l => l.key === key);
  if (index < 0) return;
  const [removed] = cart.splice(index, 1);
  lastRemoved = { line: removed, index };
  const el = document.querySelector(`.cart-item[data-key="${CSS.escape(key)}"]`);
  const finish = () => {
    saveCart();
    showToast(`${removed.nom} retiré`, { label: 'Annuler', onClick: undoRemove });
  };
  if (el && !REDUCED_MOTION.matches) {
    el.classList.add('removing');
    setTimeout(finish, 220);
  } else {
    finish();
  }
}

function undoRemove() {
  if (!lastRemoved) return;
  const { line, index } = lastRemoved;
  lastRemoved = null;
  if (cart.some(l => l.key === line.key)) return;
  cart.splice(Math.min(index, cart.length), 0, line);
  saveCart();
  hideToast();
}

let clearConfirmTimer = null;
function clearCart(button) {
  if (!button.classList.contains('confirm')) {
    button.classList.add('confirm');
    button.textContent = 'Confirmer ?';
    clearTimeout(clearConfirmTimer);
    clearConfirmTimer = setTimeout(() => { button.classList.remove('confirm'); button.textContent = 'Vider'; }, 3000);
    return;
  }
  clearTimeout(clearConfirmTimer);
  cart = [];
  lastRemoved = null;
  saveCart();
  showToast('Panier vidé');
}

// Synchronisation entre onglets
window.addEventListener('storage', (event) => {
  if (event.key === CART_KEY) {
    cart = loadCart();
    renderCart();
    updateCartCount(false);
  }
});

// ===== PANIER : INFOS DE COMMANDE =====
function getOrderInfo() {
  const info = storageGet(ORDER_KEY, {});
  return {
    nom: String(info.nom || '').slice(0, 80),
    date: /^\d{4}-\d{2}-\d{2}$/.test(info.date || '') ? info.date : '',
    mode: info.mode === 'retrait' ? 'retrait' : 'livraison',
    adresse: String(info.adresse || '').slice(0, 160),
  };
}

function readOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return getOrderInfo();
  const info = {
    nom: (form.elements.orderName?.value || '').trim().slice(0, 80),
    date: form.elements.orderDate?.value || '',
    mode: form.elements.orderMode?.value === 'retrait' ? 'retrait' : 'livraison',
    adresse: (form.elements.orderAddress?.value || '').trim().slice(0, 160),
  };
  storageSet(ORDER_KEY, info);
  return info;
}

function fillOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;
  const info = getOrderInfo();
  form.elements.orderName.value = info.nom;
  form.elements.orderDate.value = info.date;
  form.elements.orderAddress.value = info.adresse;
  const radio = form.querySelector(`input[name="orderMode"][value="${info.mode}"]`);
  if (radio) radio.checked = true;
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  form.elements.orderDate.min = today.toISOString().slice(0, 10);
  toggleAddressField();
}

function toggleAddressField() {
  const form = document.getElementById('orderForm');
  if (!form) return;
  const wrap = document.getElementById('orderAddressWrap');
  if (wrap) wrap.hidden = form.elements.orderMode.value === 'retrait';
}

// ===== PANIER : AFFICHAGE =====
function updateCartCount(bump) {
  const { count } = getCartTotals();
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    if (bump && !REDUCED_MOTION.matches) {
      el.classList.remove('bump');
      void el.offsetWidth;
      el.classList.add('bump');
    }
  });
  document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
    btn.setAttribute('aria-label', `Ouvrir le panier (${count} article${count > 1 ? 's' : ''})`);
  });
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const sub = document.getElementById('cartSubtitle');
  if (!body) return;
  const totals = getCartTotals();
  if (sub) sub.textContent = totals.count ? `${totals.count} article${totals.count > 1 ? 's' : ''}` : '';

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        ${typeof icon === 'function' ? icon('cake-candles') : ''}
        <p>Votre panier est vide</p>
        <a class="btn-primary" href="${escapeHtml(new URL('Pages/Catalogue.html', SITE_ROOT).href)}">Parcourir le catalogue</a>
      </div>`;
    if (footer) footer.hidden = true;
    return;
  }

  if (footer) footer.hidden = false;
  body.innerHTML = `<ul class="cart-items" data-img-fallback>${cart.map(line => {
    const unit = line.prixNum > 0 ? formatFcfa(line.prixNum) : formatPrice(line.prix || 'Sur devis');
    const lineTotal = line.prixNum > 0 ? formatFcfa(line.prixNum * line.qty) : 'Sur devis';
    const extras = [line.saveur && `Saveur : ${line.saveur}`, line.note && `Note : ${line.note}`].filter(Boolean).join(' · ');
    return `
    <li class="cart-item" data-key="${escapeHtml(line.key)}">
      <img src="${escapeHtml(thumbUrl(line.img) || PLACEHOLDER_IMG)}" alt="" class="cart-item-img" width="76" height="76" loading="lazy" decoding="async">
      <div class="cart-item-info">
        <h3 class="cart-item-name">${escapeHtml(line.nom)}</h3>
        ${extras ? `<p class="cart-item-details">${escapeHtml(extras)}</p>` : ''}
        <p class="cart-item-price">${escapeHtml(lineTotal)} ${line.qty > 1 && line.prixNum > 0 ? `<span class="cart-item-unit">(${escapeHtml(unit)} × ${line.qty})</span>` : ''}</p>
        <div class="qty" role="group" aria-label="Quantité de ${escapeHtml(line.nom)}">
          <button type="button" class="qty-btn" data-qty-key="${escapeHtml(line.key)}" data-delta="-1" aria-label="Retirer un ${escapeHtml(line.nom)}">${icon('minus')}</button>
          <span class="qty-val" aria-live="polite">${line.qty}</span>
          <button type="button" class="qty-btn" data-qty-key="${escapeHtml(line.key)}" data-delta="1" aria-label="Ajouter un ${escapeHtml(line.nom)}" ${line.qty >= CART_MAX_QTY ? 'disabled' : ''}>${icon('plus')}</button>
        </div>
      </div>
      <button type="button" class="cart-item-remove" data-remove-key="${escapeHtml(line.key)}" aria-label="Supprimer ${escapeHtml(line.nom)} du panier">${icon('trash-can')}</button>
    </li>`;
  }).join('')}</ul>`;

  const sumCount = document.getElementById('cartSumCount');
  const sumQuote = document.getElementById('cartSumQuote');
  const totalEl = document.getElementById('cartTotal');
  if (sumCount) sumCount.textContent = `${totals.count}`;
  if (sumQuote) {
    sumQuote.parentElement.hidden = totals.quoteLines === 0;
    sumQuote.textContent = `${totals.quoteLines} article${totals.quoteLines > 1 ? 's' : ''}`;
  }
  if (totalEl) totalEl.textContent = totals.total > 0 ? formatFcfa(totals.total) : 'Sur devis';
}

// ===== DIALOGS (panier, modale, lightbox) =====
const dialogOpeners = new WeakMap();

function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  dialogOpeners.set(dialog, document.activeElement);
  dialog.classList.remove('closing');
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
  document.body.classList.add('no-scroll');
}

function closeDialog(dialog) {
  if (!dialog || !dialog.open || dialog.classList.contains('closing')) return;
  const done = () => {
    dialog.classList.remove('closing');
    if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('no-scroll');
    const opener = dialogOpeners.get(dialog);
    if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
  };
  if (REDUCED_MOTION.matches) { done(); return; }
  dialog.classList.add('closing');
  let finished = false;
  const finish = () => { if (!finished) { finished = true; done(); } };
  dialog.addEventListener('animationend', finish, { once: true });
  setTimeout(finish, 400);
}

function setupDialog(dialog) {
  if (!dialog) return;
  // Échap : fermeture animée
  dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeDialog(dialog); });
  // Clic sur le fond (hors du contenu)
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    const inside = event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
    if (!inside || dialog.classList.contains('lightbox')) closeDialog(dialog);
  });
}

function openCart() {
  const panel = document.getElementById('cartPanel');
  if (!panel) return;
  renderCart();
  fillOrderForm();
  openDialog(panel);
}
function closeCart() { closeDialog(document.getElementById('cartPanel')); }
function toggleCart() {
  const panel = document.getElementById('cartPanel');
  if (panel?.open) closeCart(); else openCart();
}

// ===== WHATSAPP =====
function openWhatsApp(message) {
  const url = `https://wa.me/${CAKESPOT_PHONE}?text=${encodeURIComponent(message)}`;
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win) window.location.href = url;
}

function getShareableImageUrl(image) {
  const url = resolveAssetUrl(image);
  return /^https?:/i.test(url) ? url : '';
}

function formatDateFr(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function sendToWhatsApp() {
  if (cart.length === 0) return;
  const info = readOrderForm();
  if (!info.nom) {
    const details = document.getElementById('orderDetails');
    if (details) details.open = true;
    const field = document.getElementById('orderName');
    field?.focus();
    showToast('Indiquez votre nom pour finaliser la commande.');
    return;
  }
  if (info.mode === 'livraison' && !info.adresse) {
    document.getElementById('orderAddress')?.focus();
    showToast('Indiquez le quartier ou l’adresse de livraison.');
    return;
  }

  const totals = getCartTotals();
  let msg = '🎂 *COMMANDE CAKE SPOT*\n━━━━━━━━━━━━━━━━━━━━\n\n';
  cart.forEach((line, i) => {
    msg += `*${i + 1}. ${line.nom}* × ${line.qty}\n`;
    msg += `   Prix : ${line.prixNum > 0 ? formatFcfa(line.prixNum) : (line.prix || 'Sur devis')}`;
    msg += line.prixNum > 0 && line.qty > 1 ? ` (sous-total ${formatFcfa(line.prixNum * line.qty)})\n` : '\n';
    if (line.saveur) msg += `   Saveur : ${line.saveur}\n`;
    if (line.note) msg += `   Personnalisation : ${line.note}\n`;
    if (line.categorie) msg += `   Catégorie : ${line.categorie.replace(/_/g, ' ')}\n`;
    const imageUrl = getShareableImageUrl(line.img);
    if (imageUrl) msg += `   Photo : ${imageUrl}\n`;
    msg += '\n';
  });
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += totals.total > 0 ? `*TOTAL ESTIMÉ : ${formatFcfa(totals.total)}*` : '*TOTAL : sur devis*';
  if (totals.quoteLines && totals.total > 0) msg += ` (+ ${totals.quoteLines} article(s) sur devis)`;
  msg += '\n\n';
  msg += `*Nom :* ${info.nom}\n`;
  if (info.date) msg += `*Date souhaitée :* ${formatDateFr(info.date)}\n`;
  msg += `*Mode :* ${info.mode === 'retrait' ? 'Retrait sur place' : 'Livraison'}\n`;
  if (info.mode === 'livraison') msg += `*Adresse :* ${info.adresse}\n`;
  msg += '\nMerci de me confirmer la disponibilité et les détails. 🙏';
  openWhatsApp(msg);
}

// ===== ANIMATION « VOL VERS LE PANIER » =====
function flyToCart(sourceImg) {
  if (REDUCED_MOTION.matches || !sourceImg || typeof sourceImg.animate !== 'function') return;
  const target = document.querySelector('.header [data-action="open-cart"]');
  if (!target) return;
  const from = sourceImg.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (!from.width || !to.width) return;
  const clone = document.createElement('img');
  clone.src = sourceImg.currentSrc || sourceImg.src;
  clone.alt = '';
  clone.className = 'fly-img';
  const size = Math.min(from.width, from.height, 140);
  Object.assign(clone.style, { width: `${size}px`, height: `${size}px`, left: `${from.left + (from.width - size) / 2}px`, top: `${from.top + (from.height - size) / 2}px` });
  document.body.appendChild(clone);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  clone.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${dx * 0.6}px, ${dy * 0.6 - 60}px) scale(0.55)`, opacity: 0.9, offset: 0.6 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.12)`, opacity: 0.2 },
  ], { duration: 750, easing: 'cubic-bezier(.5,0,.75,0)' }).onfinish = () => clone.remove();
}

// ===== TOAST & ANNONCES =====
let toastTimer = null;
let toastAction = null;
function showToast(message, action) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const text = toast.querySelector('.toast-text');
  const btn = toast.querySelector('.toast-action');
  if (text) text.textContent = message; else toast.textContent = message;
  toastAction = action?.onClick || null;
  if (btn) {
    btn.hidden = !action;
    if (action) btn.textContent = action.label;
  }
  toast.classList.add('show');
  announce(message);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, action ? 5000 : 3000);
}
function hideToast() {
  document.getElementById('toast')?.classList.remove('show');
  toastAction = null;
}
function announce(message) {
  const live = document.getElementById('srStatus');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => { live.textContent = message; }, 50);
}

// ===== EN-TÊTE & NAVIGATION =====
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 30);
    scrollTicking = false;
  });
}, { passive: true });

function setMobileNav(open) {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}

// ===== APPARITION AU DÉFILEMENT =====
function setupReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  if (!('IntersectionObserver' in window) || REDUCED_MOTION.matches) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

// ===== TRANSITIONS ENTRE PAGES =====
function setupPageTransitions() {
  const veil = document.createElement('div');
  veil.className = 'page-transition';
  veil.setAttribute('aria-hidden', 'true');
  document.body.appendChild(veil);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download') || REDUCED_MOTION.matches) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === window.location.pathname && url.search === window.location.search) return;
    event.preventDefault();
    document.documentElement.classList.add('is-leaving');
    setTimeout(() => { window.location.href = url.href; }, 220);
  });
  // Retour arrière (cache bfcache) : on retire le voile
  window.addEventListener('pageshow', () => document.documentElement.classList.remove('is-leaving'));
}

// ===== THÈME CLAIR / SOMBRE =====
const THEME_KEY = 'cakespot_theme';
const DARK_QUERY = window.matchMedia('(prefers-color-scheme: dark)');

function getStoredTheme() {
  try { const t = localStorage.getItem(THEME_KEY); return t === 'dark' || t === 'light' ? t : null; } catch { return null; }
}
function currentTheme() {
  return document.documentElement.getAttribute('data-theme') || (DARK_QUERY.matches ? 'dark' : 'light');
}
function syncThemeUi() {
  const dark = currentTheme() === 'dark';
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(dark));
    btn.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
    btn.title = dark ? 'Thème clair' : 'Thème sombre';
  });
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    meta.setAttribute('content', dark ? '#16100c' : '#3d1f0d');
    meta.removeAttribute('media');
  });
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  syncThemeUi();
  announce(theme === 'dark' ? 'Thème sombre activé' : 'Thème clair activé');
}
function toggleTheme(button) {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const root = document.documentElement;
  // Révélation circulaire depuis le bouton (View Transitions API), sinon fondu des couleurs
  if (document.startViewTransition && !REDUCED_MOTION.matches && button) {
    const r = button.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(() => applyTheme(next));
    vt.ready.then(() => {
      root.animate({ opacity: [1, 1] }, { duration: 550, pseudoElement: '::view-transition-old(root)' });
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`], opacity: [1, 1] },
        { duration: 550, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
    return;
  }
  if (!REDUCED_MOTION.matches) {
    root.classList.add('theme-switching');
    setTimeout(() => root.classList.remove('theme-switching'), 500);
  }
  applyTheme(next);
}
// Si le visiteur n'a rien choisi, on suit le système en direct
DARK_QUERY.addEventListener?.('change', () => { if (!getStoredTheme()) syncThemeUi(); });
// Synchronisation entre onglets
window.addEventListener('storage', (event) => {
  if (event.key !== THEME_KEY) return;
  if (event.newValue === 'dark' || event.newValue === 'light') document.documentElement.setAttribute('data-theme', event.newValue);
  else document.documentElement.removeAttribute('data-theme');
  syncThemeUi();
});

// ===== ACTIONS DÉCLARATIVES (data-action) =====
const ACTIONS = {
  'open-cart': () => openCart(),
  'close-cart': () => closeCart(),
  'toggle-cart': () => toggleCart(),
  'send-whatsapp': () => sendToWhatsApp(),
  'clear-cart': (el) => clearCart(el),
  'toggle-theme': (el) => toggleTheme(el),
};

document.addEventListener('DOMContentLoaded', () => {
  // Navigation mobile
  const toggle = document.getElementById('menuToggle');
  toggle?.addEventListener('click', () => setMobileNav(toggle.getAttribute('aria-expanded') !== 'true'));
  document.getElementById('mobileNav')?.addEventListener('click', (e) => { if (e.target.closest('a')) setMobileNav(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMobileNav(false); });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#mobileNav') && !e.target.closest('#menuToggle')) setMobileNav(false);
  });

  // Actions
  document.addEventListener('click', (event) => {
    const el = event.target.closest('[data-action]');
    if (!el) return;
    const handler = ACTIONS[el.dataset.action];
    if (handler) { event.preventDefault(); handler(el, event); }
  });

  // Toast
  document.querySelector('#toast .toast-action')?.addEventListener('click', () => {
    const fn = toastAction;
    hideToast();
    if (fn) fn();
  });

  // Liens externes : jamais d'accès à window.opener
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    const rel = new Set((a.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener'); rel.add('noreferrer');
    a.setAttribute('rel', [...rel].join(' '));
  });

  // Panier
  setupDialog(document.getElementById('cartPanel'));
  document.getElementById('cartBody')?.addEventListener('click', (event) => {
    const qty = event.target.closest('[data-qty-key]');
    if (qty) {
      const line = cart.find(l => l.key === qty.dataset.qtyKey);
      if (line) setLineQty(line.key, line.qty + Number(qty.dataset.delta));
      return;
    }
    const remove = event.target.closest('[data-remove-key]');
    if (remove) removeLine(remove.dataset.removeKey);
  });
  const orderForm = document.getElementById('orderForm');
  orderForm?.addEventListener('input', readOrderForm);
  orderForm?.addEventListener('change', () => { readOrderForm(); toggleAddressField(); });
  orderForm?.addEventListener('submit', (e) => { e.preventDefault(); sendToWhatsApp(); });

  syncThemeUi();
  updateCartCount(false);
  renderCart();
  setupReveal();
  setupPageTransitions();
});
