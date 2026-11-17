// ===== CAKE SPOT — CART SYSTEM =====

// Cart State
let cart = JSON.parse(localStorage.getItem('cakespot_cart') || '[]');
let cartRenderQueued = false;

function formatPrice(value) {
  return String(value || '').replace(/\s+/g, ' ');
}

function saveCart() {
  localStorage.setItem('cakespot_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const counts = document.querySelectorAll('#cartCount');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  counts.forEach(el => {
    el.textContent = total;
    el.style.transform = 'scale(1.3)';
    setTimeout(() => el.style.transform = '', 200);
  });
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartCount();
  queueCartRender();
  showToast(`🎂 ${product.nom} ajouté au panier !`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  queueCartRender();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  queueCartRender();
}

function getPrixNum(prixStr) {
  const num = parseInt(prixStr.replace(/[^0-9]/g, ''));
  return isNaN(num) ? 0 : num;
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + getPrixNum(item.prix) * item.qty, 0);
}

function getShareableImageUrl(image) {
  if (!image) return '';
  if (image.startsWith('data:')) return '';
  try { return new URL(image, document.baseURI).href; } catch { return image; }
}

function getCataloguePath() {
  // Works from any depth: index (root) or Pages/* (one level deep)
  const path = window.location.pathname;
  const inPages = path.includes('/Pages/');
  return inPages ? './Catalogue.html' : './Pages/Catalogue.html';
}

function queueCartRender() {
  if (cartRenderQueued) return;
  cartRenderQueued = true;
  requestAnimationFrame(() => { cartRenderQueued = false; renderCart(); });
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cake-candles"></i>
        <p>Votre panier est vide</p>
        <a href="${getCataloguePath()}">Parcourir le catalogue</a>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.nom}" class="cart-item-img" loading="lazy" decoding="async" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22><rect fill=%22%23f9e%22 width=%2280%22 height=%2280%22/><text x=%2240%22 y=%2248%22 text-anchor=%22middle%22 font-size=%2232%22>🎂</text></svg>'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nom}</div>
        <div class="cart-item-details">${item.details || ''}</div>
        <div class="cart-item-price">${formatPrice(item.prix)}</div>
        <div class="cart-qty">
          <button class="qty-btn" data-qty-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-qty-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove-id="${item.id}" title="Supprimer">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  const total = getCartTotal();
  if (totalEl) totalEl.textContent = total > 0 ? total.toLocaleString('fr-FR') + ' Frs' : 'Prix sur devis';
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  if (!panel) return;
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function sendToWhatsApp() {
  if (cart.length === 0) return;
  const phone = '+237686019392';

  let msg = '🎂 *COMMANDE CAKE SPOT*\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n\n';

  cart.forEach((item, i) => {
    msg += `*${i + 1}. ${item.nom}*\n`;
    msg += `   Quantité : ${item.qty}\n`;
    msg += `   Prix unitaire : ${item.prix}\n`;
    const imageUrl = getShareableImageUrl(item.img);
    if (imageUrl) msg += `   Photo : ${imageUrl}\n`;
    msg += `   Sous-total : ${getPrixNum(item.prix) > 0 ? (getPrixNum(item.prix) * item.qty).toLocaleString('fr-FR') + ' Frs' : 'À confirmer'}\n`;
    if (item.details) {
      msg += `   Détails : ${item.details}\n`;
    }
    if (item.categorie) {
      msg += `   Catégorie : ${item.categorie}\n`;
    }
    msg += '\n';
  });

  const total = getCartTotal();
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += total > 0
    ? `*TOTAL ESTIMÉ : ${total.toLocaleString('fr-FR')} Frs*\n`
    : '*TOTAL : À confirmer sur devis*\n';
  msg += '\nMerci de me contacter pour confirmer ma commande et les détails de livraison. 🙏';

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
  updateCartCount();
  queueCartRender();
  document.getElementById('cartItems')?.addEventListener('click', (event) => {
    const qty = event.target.closest('[data-qty-id]');
    if (qty) { changeQty(qty.dataset.qtyId, Number(qty.dataset.delta)); return; }
    const remove = event.target.closest('[data-remove-id]');
    if (remove) removeFromCart(remove.dataset.removeId);
  });
});
