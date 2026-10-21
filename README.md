# Galiana Brice Rénovation — maquette

Maquette statique destinée à valider la direction artistique avant reconstruction sous WordPress chez IONOS.

## Pages

- `index.html` : Accueil, Prestations, Réalisations, À propos, Contact.
- `devis.html` : page dédiée au devis gratuit, avec ouverture du Google Form.
- Les ancres sont immédiates, sans défilement animé.

## Google Form

Renseigner le lien public dans `config.js`, à la propriété `googleFormUrl`. Formats acceptés : `https://forms.gle/...` et `https://docs.google.com/forms/...`.

En l’absence de lien, le bouton reste désactivé avec une mention explicite de maquette. Aucun formulaire n’est envoyé par cette maquette.

## Direction artistique

Bordeaux `#591c1b`, beige doré `#b8a075`, ivoire `#f8f5ef`, cadres fins. Le logo GB est extrait de la carte de visite fournie, sans redessin. Polices Cormorant Garamond et DM Sans (Google Fonts, avec polices de secours locales).

## Photos

Les 19 photos transmises sont conservées sous `assets/chantier-1` et `assets/chantier-2`. Les galeries permettent de consulter la progression de chaque chantier. Aucun avis, diplôme, délai ni assurance n’a été inventé.

## Prévisualisation

Ouvrir `index.html` dans un navigateur ou servir ce dossier avec un serveur HTTP statique. Aucun outil de compilation ni dépendance ne sont nécessaires.

## GitHub Pages

Dans le dépôt : Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

La maquette contient `noindex,nofollow`. Préparer les mentions légales et la politique de confidentialité avec les informations validées de l’entreprise avant le lancement du site définitif. Les avis réels seront ajoutés après leur collecte.
