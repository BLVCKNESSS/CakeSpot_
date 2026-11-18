// Applique le thème choisi AVANT le premier affichage (évite le flash clair -> sombre).
// Chargé de façon synchrone dans <head> ; doit rester minuscule.
(function () {
  try {
    var t = localStorage.getItem('cakespot_theme');
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  } catch (e) { /* stockage indisponible : on suit le système */ }
})();
