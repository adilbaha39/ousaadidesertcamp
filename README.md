# Ousaadi Luxury Desert Camp — site Next.js

Next.js (App Router) + TypeScript. Version française : `/`, `/hebergement`, `/experiences`, `/galerie`, `/apropos`, `/contact`. Version anglaise (6 pages) : `/en`, `/en/accommodation`, `/en/experiences`, `/en/gallery`, `/en/about`, `/en/contact`.
Version espagnole (6 pages) : `/es`, `/es/alojamiento`, `/es/experiencias`, `/es/galeria`, `/es/sobre-nosotros`, `/es/contacto`.
Version arabe RTL (6 pages) : `/ar`, `/ar/accommodation`, `/ar/experiences`, `/ar/gallery`, `/ar/about`, `/ar/contact`.

Quatre layouts racine : `src/app/(fr)`, `(en)`, `(es)` et `(ar)` (chacun avec son `<html lang>`; l'arabe avec `dir="rtl"` et les polices Amiri + Cairo). `hreflang` fr/en/es/ar/x-default entre les pages équivalentes (metadata + sitemap), sélecteur de langue FR · EN · ES · AR dans le header.

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

## Version anglaise
Mots-clés par page : `/en` → merzouga desert camp · `/en/accommodation` → merzouga luxury desert camp · `/en/experiences` → merzouga desert excursion · `/en/gallery` → merzouga photos · `/en/about` → merzouga desert camp (angle « histoire », titre différent de l'accueil) · `/en/contact` → book merzouga desert camp.
Chaque page FR/EN a son bouton de langue (FR ↔ EN), ses `hreflang` (metadata + sitemap) et son canonical.

## Version espagnole
Mots-clés (traduits des mots-clés anglais, **non validés dans Semrush** : à vérifier avec le volume réel en Espagne) : `/es` → campamento en el desierto de Merzouga · `/es/alojamiento` → campamento de lujo en Merzouga · `/es/experiencias` → excursión desierto de Merzouga · `/es/galeria` → fotos de Merzouga · `/es/sobre-nosotros` → campamento en el desierto de Merzouga (angle « historia ») · `/es/contacto` → reservar campamento en Merzouga.
Vocabulaire : « jaima » pour les tentes (terme usuel pour les tentes marocaines), vouvoiement (« usted »).

## Version arabe (RTL)
Mots-clés (dérivés des mots-clés anglais, **non validés** : à vérifier dans Semrush pour les pays arabophones) : `/ar` → مخيم مرزوكة الصحراوي · `/ar/accommodation` → مخيم فاخر في مرزوكة · `/ar/experiences` → رحلات صحراء مرزوكة · `/ar/gallery` → صور مرزوكة · `/ar/about` → مخيم مرزوكة الصحراوي (angle « قصة ») · `/ar/contact` → احجز مخيم في مرزوكة.
Le CSS arabe est **généré automatiquement** par miroir du CSS français (`src/styles/*-ar.css` : left/right, paddings, dégradés, clip-path inversés ; espacement des lettres et italique retirés pour l'arabe). Le nom de marque reste en lettres latines (Ousaadi). Téléphone et email restent en `dir="ltr"`. Les images Open Graph arabes sont en caractères latins (police par défaut sans glyphes arabes).
