(() => {
  const content = {
    mentions: {
      title: 'Mentions légales',
      html: '<p>Cette rubrique est en préparation. Les mentions légales complètes seront ajoutées avant la mise en ligne du site définitif.</p><dl><dt>Éditeur</dt><dd>Brice Galiana — Entrepreneur individuel</dd><dt>SIRET</dt><dd>978 635 589 00010</dd><dt>Création du site</dt><dd>K. Lopez</dd></dl>'
    },
    confidentialite: {
      title: 'Confidentialité',
      html: '<p>La politique de confidentialité sera ajoutée ici avant la mise en service du formulaire de demande de devis.</p><p>Elle précisera les données recueillies, leur utilisation, leur durée de conservation et la manière d’exercer vos droits.</p>'
    },
    conditions: {
      title: 'Conditions générales',
      html: '<h3>Conditions générales de vente</h3><p>Les conditions applicables aux devis et aux prestations seront ajoutées ici après leur rédaction et leur validation.</p><p>Ce texte de préparation ne constitue pas des conditions générales de vente.</p>'
    },
    utilisation: {
      title: 'Conditions d’utilisation',
      html: '<p>Les conditions d’utilisation du site seront ajoutées dans cette rubrique avant sa mise en ligne définitive.</p>'
    },
    cookies: {
      title: 'Cookies et confidentialité',
      html: '<p>Aucun cookie publicitaire ni outil de mesure d’audience n’est activé par cette maquette.</p><p>Le navigateur mémorise uniquement la fermeture du message d’information pendant six mois, sur cet appareil. Vous pouvez réafficher ce message à tout moment avec le lien « Cookies » en pied de page.</p><p>Si des services supplémentaires sont ajoutés au site définitif, cette information et les réglages seront adaptés en conséquence.</p>'
    }
  };
  const legal = document.createElement('dialog');
  legal.className = 'legal-dialog';
  legal.setAttribute('aria-labelledby', 'legal-dialog-title');
  legal.innerHTML = '<div class="legal-dialog-header"><h2 id="legal-dialog-title"></h2><button type="button" class="legal-dialog-close" aria-label="Fermer les informations">Fermer ×</button></div><div class="legal-dialog-content"></div>';
  document.body.append(legal);
  let opener;
  function openLegal(key, trigger) {
    const item = content[key];
    if (!item) return;
    opener = trigger;
    legal.querySelector('#legal-dialog-title').textContent = item.title;
    legal.querySelector('.legal-dialog-content').innerHTML = item.html;
    legal.showModal();
  }
  document.querySelectorAll('[data-legal]').forEach(button => button.addEventListener('click', () => openLegal(button.dataset.legal, button)));
  legal.querySelector('.legal-dialog-close').addEventListener('click', () => legal.close());
  legal.addEventListener('click', event => { if (event.target === legal) legal.close(); });
  legal.addEventListener('close', () => opener?.focus());

  const key = 'gb-cookie-notice-v1';
  const notice = document.createElement('section');
  notice.className = 'cookie-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-labelledby', 'cookie-notice-title');
  notice.innerHTML = '<button type="button" class="cookie-notice-close" aria-label="Fermer le message cookies">×</button><h2 id="cookie-notice-title">Cookies & confidentialité</h2><p>Aucun cookie publicitaire ni outil de mesure d’audience n’est activé sur cette maquette. Seule la fermeture de ce message est mémorisée sur votre appareil.</p><div class="cookie-notice-actions"><button type="button" class="button" data-cookie-dismiss>Continuer</button><button type="button" class="button button-secondary" data-cookie-details>En savoir plus</button></div>';
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    notice.hidden = !!saved && saved.expires > Date.now();
  } catch { notice.hidden = false; }
  document.body.append(notice);
  function dismiss() {
    try { localStorage.setItem(key, JSON.stringify({expires: Date.now() + 180 * 24 * 60 * 60 * 1000})); } catch { /* La navigation reste possible si le stockage est bloqué. */ }
    notice.hidden = true;
  }
  notice.querySelector('[data-cookie-dismiss]').addEventListener('click', dismiss);
  notice.querySelector('.cookie-notice-close').addEventListener('click', dismiss);
  notice.querySelector('[data-cookie-details]').addEventListener('click', event => openLegal('cookies', event.currentTarget));
  document.querySelectorAll('[data-cookie-settings]').forEach(button => button.addEventListener('click', () => {
    notice.hidden = false;
    notice.querySelector('[data-cookie-dismiss]').focus();
  }));
})();
