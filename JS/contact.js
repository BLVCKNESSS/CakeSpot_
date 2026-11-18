// ===== CAKE SPOT — FORMULAIRE DE CONTACT =====
// Le formulaire n'envoie rien à un serveur : il prépare un message WhatsApp.

function setFieldError(id, message) {
  const field = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  if (field) field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (error) error.textContent = message || '';
  return !message;
}

function readField(form, name, max) {
  return String(form.elements[name]?.value || '').trim().slice(0, max);
}

function sendContact(form) {
  const fname = readField(form, 'fname', 60);
  const lname = readField(form, 'lname', 60);
  const phone = readField(form, 'phone', 20).replace(/[^\d+ ()-]/g, '');
  const email = readField(form, 'email', 120);
  const orderType = readField(form, 'orderType', 80);
  const message = readField(form, 'message', 1500);

  const checks = [
    setFieldError('fname', fname ? '' : 'Veuillez indiquer votre nom.'),
    setFieldError('phone', !phone || phone.replace(/\D/g, '').length >= 8 ? '' : 'Numéro de téléphone trop court.'),
    setFieldError('email', !email || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? '' : 'Adresse email invalide.'),
    setFieldError('message', message ? '' : 'Décrivez votre projet en quelques mots.'),
  ];
  if (checks.includes(false)) {
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  let msg = `📩 *MESSAGE CAKE SPOT*\n\n`;
  msg += `*Nom :* ${fname} ${lname}\n`;
  if (phone) msg += `*Téléphone :* ${phone}\n`;
  if (email) msg += `*Email :* ${email}\n`;
  if (orderType) msg += `*Type de commande :* ${orderType}\n`;
  msg += `\n*Message :*\n${message}`;
  msg += `\n\nBonjour Cake Spot, j'attends votre réponse. Merci !`;
  openWhatsApp(msg);
  showToast('WhatsApp s’ouvre avec votre message prêt à envoyer.');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (event) => { event.preventDefault(); sendContact(form); });
  form.addEventListener('input', (event) => {
    if (event.target.getAttribute('aria-invalid') === 'true') setFieldError(event.target.id, '');
  });
});
