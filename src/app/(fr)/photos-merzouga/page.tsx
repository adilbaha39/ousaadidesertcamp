import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/galerie.css'

export const metadata: Metadata = {
  title: { absolute: "Photos Merzouga : Galerie du Désert & du Camp | Ousaadi" },
  description: "Merzouga photos : découvrez en images le camp de luxe Ousaadi, ses tentes, sa cuisine, les dunes de Merzouga, les dromadaires et les soirées autour du feu.",
  alternates: { canonical: "/photos-merzouga", languages: { fr: "/photos-merzouga", en: "/en/photos-merzouga", es: "/es/fotos-merzouga", ar: "/ar/photos-merzouga", 'x-default': "/photos-merzouga" } },
  openGraph: { title: "Photos Merzouga : Galerie du Désert & du Camp | Ousaadi", description: "Photos du camp de luxe Ousaadi, des tentes, des dunes de Merzouga et des soirées autour du feu.", url: "/photos-merzouga", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Photos Merzouga : Galerie du Désert & du Camp | Ousaadi", description: "Photos du camp de luxe Ousaadi, des tentes, des dunes de Merzouga et des soirées autour du feu." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/galerie-hero-img.webp",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Luxury desert camp à Merzouga, Maroc : tentes luxueuses, cuisine marocaine, dromadaires, 4x4 et nuits étoilées.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "Merzouga, Maroc",
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "CollectionPage",
      "name": "Merzouga photos : galerie du camp Ousaadi"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://osaadiluxurydesertcamp.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Galerie",
          "item": "https://osaadiluxurydesertcamp.com/photos-merzouga"
        }
      ]
    }
  ]
}

const faq = [
  { q: "Où ont été prises ces photos ?", a: "Au camp Ousaadi et dans le désert de Merzouga, au sud-est du Maroc, près des dunes de l’erg Chebbi." },
  { q: "Puis-je voir d’autres photos des tentes ?", a: "Oui, découvrez nos trois types de tentes sur la page Hébergement, ou demandez-nous d’autres photos sur WhatsApp." },
  { q: "Quelles activités voit-on dans la galerie ?", a: "Des balades à dromadaire, des excursions en 4x4, des balades en quad et des soirées autour du feu de camp." },
  { q: "Comment réserver après avoir vu les photos ?", a: "Par WhatsApp, en nous indiquant vos dates et le nombre de personnes." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function GaleriePage() {
  return (
    <div className="pg-galerie" id="top">
      <link rel="preload" as="image" href="/images/galerie-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 46 32"><path d="M3 29 23 5l20 24z M13 29 23 14l10 15M23 5v-3M18 29l5-9 5 9" fill="none" stroke="currentColor" /></symbol>
      <symbol id="diam" viewBox="0 0 24 24"><path d="M12 2l10 10-10 10L2 12zM12 7l5 5-5 5-5-5z" /></symbol>
      <symbol id="tent" viewBox="0 0 24 24"><path d="M3 20 12 4l9 16zM12 20v-8M8 20l4-8 4 8" fill="currentColor" /></symbol>
      <symbol id="bed" viewBox="0 0 24 24"><path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6M7 12.500a1.800 1.800 0 1 0 0-.1" /></symbol>
      <symbol id="camel" viewBox="0 0 24 24"><path d="M2 21v-6l2-1 1-5 3 3 3-1 2-5 3 1 1 4 4 2v8h-1.500v-6l-1.500-.5V21H15v-5H9v5H7.500v-5L5 16v5z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="dune" viewBox="0 0 24 24"><path d="M1 19 9 8l4 5 3-4 8 10z" fill="currentColor" /></symbol>
      <symbol id="cam" viewBox="0 0 24 24"><path d="M3 8h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13.500" r="4" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#34091a" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/" aria-label="Ousaadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><Link href="/tentes-de-luxe-merzouga">Hébergement</Link></li><li><Link href="/excursions-merzouga">Expériences</Link></li><li><a href="#top" className="active">Galerie</a></li><li><Link href="/merzouga-luxury-desert-camp">À propos</Link></li><li><Link href="/reservation-merzouga">Contact</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">FR ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Camp de luxe Ousaadi illuminé de lanternes à Merzouga"></div>
      <i className="orn tl"></i><i className="orn tr"></i><i className="orn bl" style={{bottom:"-6%"}}></i>
      <div className="hero-txt"><div><svg className="i cam"><use href="#cam" /></svg><h1>Notre Galerie</h1><div className="hl"><i></i></div>
      <p>Découvrez en photos la magie de notre camp et des dunes de Merzouga</p></div></div>
      </section>
      <nav className="filters" id="filters" aria-label="Filtrer les photos">
      <button className="chip on" data-f="all"><svg className="i"><use href="#diam" /></svg>Tout voir</button>
      <button className="chip" data-f="camp"><svg className="i"><use href="#tent" /></svg>Le Camp</button>
      <button className="chip" data-f="tentes"><svg className="i"><use href="#bed" /></svg>Les Tentes</button>
      <button className="chip" data-f="activites"><svg className="i"><use href="#camel" /></svg>Les Activités</button>
      <button className="chip" data-f="desert"><svg className="i"><use href="#dune" /></svg>Le Désert</button>
      </nav>
      <section className="grid" id="galerie" aria-label="Photos du camp et du désert de Merzouga">
      <button className="ph" data-cat="camp"><Image src="/images/allee-du-camp-ousaadi-illuminee-de-lanternes-photo-du-camp-de-merzouga.webp" width={632} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Allée du camp Ousaadi illuminée de lanternes, photo du camp de Merzouga" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/tente-de-luxe-avec-lit-bordeaux-au-camp-ousaadi-merzouga.webp" width={596} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente de luxe avec lit bordeaux au camp Ousaadi, Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/restaurant-sous-tente-du-camp-de-luxe-de-merzouga.webp" width={618} height={432} sizes="(max-width: 1000px) 100vw, 50vw" alt="Restaurant sous tente du camp de luxe de Merzouga" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/caravane-de-dromadaires-au-coucher-du-soleil-desert-de-merzouga.webp" width={634} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Caravane de dromadaires au coucher du soleil, désert de Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/tente-restaurant-eclairee-au-crepuscule-camp-ousaadi-merzouga.webp" width={590} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente restaurant éclairée au crépuscule, camp Ousaadi Merzouga" /></button>
      <button className="ph" data-cat="desert"><Image src="/images/coucher-de-soleil-sur-les-dunes-de-merzouga.webp" width={622} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Coucher de soleil sur les dunes de Merzouga" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/chambre-en-tente-de-luxe-aux-lits-bordeaux-luxury-desert-camp-merzouga.webp" width={634} height={408} sizes="(max-width: 1000px) 100vw, 50vw" alt="Chambre en tente de luxe aux lits bordeaux, luxury desert camp Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/lanternes-marocaines-blanches-dans-le-camp-de-merzouga-la-nuit.webp" width={590} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="Lanternes marocaines blanches dans le camp de Merzouga la nuit" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/feu-de-camp-et-coussins-rouges-sous-les-etoiles-camp-ousaadi-a-merzoug.webp" width={620} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="Feu de camp et coussins rouges sous les étoiles, camp Ousaadi à Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/coeur-coucher-soleil.webp" width={600} height={600} sizes="(max-width: 1000px) 100vw, 50vw" alt="Cœur en bois au coucher du soleil, dunes de Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/allee-tapis-rouge-nuit.webp" width={600} height={800} sizes="(max-width: 1000px) 100vw, 50vw" alt="Allée avec tapis rouge et lanternes la nuit, camp Ousaadi" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/4x4-toyota-dunes.webp" width={700} height={500} sizes="(max-width: 1000px) 100vw, 50vw" alt="Excursion 4x4 Toyota dans les dunes de Merzouga" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/quads-dunes.webp" width={700} height={500} sizes="(max-width: 1000px) 100vw, 50vw" alt="Balade en quad dans les dunes de Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/soiree-feu-camp.webp" width={700} height={500} sizes="(max-width: 1000px) 100vw, 50vw" alt="Soirée autour du feu de camp au camp Ousaadi" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/buffet-restaurant.webp" width={700} height={500} sizes="(max-width: 1000px) 100vw, 50vw" alt="Buffet marocain au restaurant du camp Ousaadi" /></button>
      </section>
      <section className="seo rv">
      <h2>Photos du camp Ousaadi et du désert de Merzouga</h2>
      <p>Cette galerie rassemble des photos du camp Ousaadi et du désert de Merzouga : les tentes aux lits confortables, les allées éclairées de lanternes, le restaurant sous tente, les dromadaires au coucher du soleil, les excursions en 4x4 et en quad dans les dunes et les soirées autour du feu.</p>
      <p>Utilisez les filtres pour parcourir le camp, les tentes, les activités ou le désert, puis écrivez-nous sur WhatsApp pour réserver votre séjour.</p>
      </section>
      <section className="seo choose rv">
      <h2>Ce que vous découvrirez en images</h2>
      <div className="cols c2">
      <article><h3>Le Camp</h3><p>Allées illuminées de lanternes, tapis rouge, restaurant sous tente et buffet marocain : l’ambiance du camp Ousaadi, de jour comme de nuit.</p></article>
      <article><h3>Les Tentes</h3><p>Des tentes de luxe aux lits bordeaux, pensées pour allier confort et décor marocain.</p></article>
      <article><h3>Les Activités</h3><p>Caravanes de dromadaires, excursions en 4x4, balades en quad et soirées autour du feu de camp sous les étoiles.</p></article>
      <article><h3>Le Désert</h3><p>Les dunes de Merzouga au coucher du soleil, entre sable doré et grands espaces.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>Questions fréquentes sur les photos de Merzouga</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="dunes" aria-hidden="true"></div><div className="lant" aria-hidden="true"></div>
      <i className="orn bl"></i><i className="orn br"></i>
      <h2>Une expérience inoubliable au cœur du désert de Merzouga</h2><div className="d"></div>
      <a className="btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <i className="orn bl" style={{opacity:".4"}}></i><i className="orn br" style={{opacity:".4"}}></i>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><Link href="/tentes-de-luxe-merzouga">Hébergement</Link></li><li><Link href="/excursions-merzouga">Expériences</Link></li><li><a href="#top">Galerie</a></li><li><Link href="/merzouga-luxury-desert-camp">À propos</Link></li><li><Link href="/reservation-merzouga">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. Tous droits réservés.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Aperçu de la photo"><img alt="" /><button id="lbx" aria-label="Fermer">✕</button><button id="lbp" aria-label="Photo précédente">‹</button><button id="lbn" aria-label="Photo suivante">›</button><div id="lbc"></div></div>
      <PageEffects />
    </div>
  )
}
