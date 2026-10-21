const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton?.setAttribute('aria-expanded', 'false'); navigation?.classList.remove('is-open'); }
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation?.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

// Les ancres gardent leur comportement natif et immédiat, sans animation.
const dialog = document.querySelector('.gallery-dialog');
if (dialog) {
  const image = dialog.querySelector('.gallery-image');
  const counter = dialog.querySelector('.gallery-counter');
  let photos = [], index = 0, opener;
  const captions = {
    1: ['Avant rénovation', 'Dépose de la baignoire', 'Préparation de la douche', 'Douche carrelée', 'Meuble vasque', 'Salle de bains rénovée', 'Vue d’ensemble après rénovation'],
    2: ['Cuisine en travaux', 'Ouverture des cloisons', 'Préparation des cloisons', 'Détail du chantier', 'Détail du chantier', 'Préparation de l’espace cuisine', 'Aménagement en cours', 'Pose de la cuisine', 'Cuisine aménagée', 'Vue d’ensemble de la cuisine', 'Meubles et évier', 'Cuisine terminée']
  };
  function show() { image.src = photos[index].src; image.alt = photos[index].alt; counter.textContent = photos[index].alt; }
  document.querySelectorAll('.gallery-open').forEach(button => button.addEventListener('click', () => {
    opener = button; const id = Number(button.dataset.gallery);
    photos = captions[id].map((alt, i) => ({src: `assets/chantier-${id}/p${i + 1}.jpg`, alt})); index = 0;
    dialog.querySelector('#gallery-title').textContent = id === 1 ? 'La salle de bains — les étapes' : 'La cuisine — les étapes';
    show(); dialog.showModal(); document.body.classList.add('dialog-open');
  }));
  function step(direction) { index = (index + direction + photos.length) % photos.length; show(); }
  dialog.querySelector('.gallery-prev').addEventListener('click', () => step(-1));
  dialog.querySelector('.gallery-next').addEventListener('click', () => step(1));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
  });
}
const formLink = document.querySelector('#quote-form-link');
if (formLink) {
  const url = window.GALIANA_CONFIG?.googleFormUrl?.trim();
  try {
    const parsed = new URL(url);
    const googleForm = parsed.protocol === 'https:' && ((parsed.hostname === 'forms.gle' && parsed.pathname.length > 1) || (parsed.hostname === 'docs.google.com' && parsed.pathname.startsWith('/forms/')));
    if (googleForm) {
      formLink.href = parsed.href; formLink.hidden = false;
      document.querySelector('#quote-form-placeholder').hidden = true;
      document.querySelector('#form-status').textContent = 'Le formulaire s’ouvre dans un nouvel onglet.';
    }
  } catch { /* L’état de maquette reste visible tant que le lien n’est pas renseigné. */ }
}
