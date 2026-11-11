# Ousadi Luxury Desert Camp — site Next.js

Next.js (App Router) + TypeScript. 6 pages : `/`, `/hebergement`, `/experiences`, `/galerie`, `/apropos`, `/contact`.

## Lancer
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Node 20.9+ requis. Déploiement conseillé : Vercel (importer le repo GitHub, aucun réglage).

## Où modifier
- `src/lib/site.ts` : numéro WhatsApp, email, lien Google Maps, domaine (utilisés partout : liens, sitemap, robots, canonical).
- `src/app/<page>/page.tsx` : contenu + `metadata` (title, description, Open Graph) + JSON-LD de chaque page.
- `src/styles/<page>.css` : styles de la page (tous préfixés `.pg-<page>`, aucun conflit entre pages).
- `src/components/PageEffects.tsx` : menu mobile, header au scroll, animations, filtres + lightbox de la galerie.
- `public/images/` : photos (noms de fichiers descriptifs pour le SEO d'image).

## SEO inclus
Metadata par page, canonical, Open Graph + Twitter, `og:image` générée (`opengraph-image.tsx`), JSON-LD (Campground, Breadcrumb, ContactPage…), `sitemap.xml` et `robots.txt` générés, `lang="fr"`, polices `next/font` (sans requête externe), images `next/image` (AVIF/WebP, lazy), cache long pour `/images`, page 404 en `noindex`.

## À faire après mise en ligne
1. Remplacer les liens Facebook / Instagram / Tripadvisor / YouTube (actuellement les sites génériques) dans les `page.tsx`.
2. Ajouter le domaine dans Google Search Console et soumettre `https://osaadiluxurydesertcamp.com/sitemap.xml`.
3. Vérifier la fiche Google Business Profile : même nom, adresse et téléphone que sur le site.
