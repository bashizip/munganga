# Groupe Munganga S.A.R.L. — Site web

Site vitrine de **Groupe Munganga** (la santé moderne en RDC), converti du
fichier statique `index.html` en application **React + Vite + Tailwind CSS**.

## Démarrage

```bash
npm install
npm run dev        # développement (http://localhost:5173)
npm run build      # build de production (dossier dist/)
npm run preview    # prévisualiser le build de production
```

## Structure

- `src/components/` — Header, Hero, Pôles, Dokta na Ndaku, Contact, Footer
- `src/components/Reveal.jsx` — animation d'apparition au défilement
- `src/components/Icon.jsx` — wrapper pour les icônes Material Symbols
- `tailwind.config.js` — tokens de design (couleurs, typographies, espacements)

## Notes

- Le mode sombre est disponible via le bouton 🌙/☀️ de l'en-tête (préférence
  sauvegardée dans `localStorage`).
- Le formulaire de contact est une démonstration front-end : à relier à un
  backend ou à un service d'envoi d'emails pour la production.
