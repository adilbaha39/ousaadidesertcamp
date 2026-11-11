import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/galerie.css'

export const metadata: Metadata = {
  title: { absolute: "Merzouga Photos : Galerie du Camp & du Désert | Ousadi" },
  description: "Merzouga photos : découvrez en images le camp de luxe Ousadi, ses tentes, sa cuisine, les dunes de Merzouga, les dromadaires et les soirées autour du feu.",
  alternates: { canonical: "/galerie" },
  openGraph: { title: "Merzouga Photos : Galerie du Camp & du Désert | Ousadi", description: "Photos du camp de luxe Ousadi, des tentes, des dunes de Merzouga et des soirées autour du feu.", url: "/galerie", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Merzouga Photos : Galerie du Camp & du Désert | Ousadi", description: "Photos du camp de luxe Ousadi, des tentes, des dunes de Merzouga et des soirées autour du feu." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousadi Luxury Desert Camp",
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
      "name": "Merzouga photos : galerie du camp Ousadi"
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
          "item": "https://osaadiluxurydesertcamp.com/galerie"
        }
      ]
    }
  ]
}

export default function GaleriePage() {
  return (
    <div className="pg-galerie" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <Link className="logo" href="/" aria-label="Ousadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><Link href="/experiences">Expériences</Link></li><li><a href="#top" className="active">Galerie</a></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul></nav>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Camp de luxe Ousadi illuminé de lanternes à Merzouga"></div>
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
      <button className="ph" data-cat="camp"><Image src="/images/allee-du-camp-ousadi-illuminee-de-lanternes-photo-du-camp-de-merzouga.jpg" width={632} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Allée du camp Ousadi illuminée de lanternes, photo du camp de Merzouga" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/tente-de-luxe-avec-lit-bordeaux-au-camp-ousadi-merzouga.jpg" width={596} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente de luxe avec lit bordeaux au camp Ousadi, Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/restaurant-sous-tente-du-camp-de-luxe-de-merzouga.jpg" width={618} height={432} sizes="(max-width: 1000px) 100vw, 50vw" alt="Restaurant sous tente du camp de luxe de Merzouga" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/caravane-de-dromadaires-au-coucher-du-soleil-desert-de-merzouga.jpg" width={634} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Caravane de dromadaires au coucher du soleil, désert de Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/tente-restaurant-eclairee-au-crepuscule-camp-ousadi-merzouga.jpg" width={590} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente restaurant éclairée au crépuscule, camp Ousadi Merzouga" /></button>
      <button className="ph" data-cat="desert"><Image src="/images/coucher-de-soleil-sur-les-dunes-de-merzouga.jpg" width={622} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Coucher de soleil sur les dunes de Merzouga" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/chambre-en-tente-de-luxe-aux-lits-bordeaux-luxury-desert-camp-merzouga.jpg" width={634} height={408} sizes="(max-width: 1000px) 100vw, 50vw" alt="Chambre en tente de luxe aux lits bordeaux, luxury desert camp Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/lanternes-marocaines-blanches-dans-le-camp-de-merzouga-la-nuit.jpg" width={590} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="Lanternes marocaines blanches dans le camp de Merzouga la nuit" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/feu-de-camp-et-coussins-rouges-sous-les-etoiles-camp-ousadi-a-merzouga.jpg" width={620} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="Feu de camp et coussins rouges sous les étoiles, camp Ousadi à Merzouga" /></button>
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="dunes" aria-hidden="true"></div><div className="lant" aria-hidden="true"></div>
      <i className="orn bl"></i><i className="orn br"></i>
      <h2>Une expérience inoubliable au cœur du désert de Merzouga</h2><div className="d"></div>
      <a className="btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <i className="orn bl" style={{opacity:".4"}}></i><i className="orn br" style={{opacity:".4"}}></i>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><Link href="/experiences">Expériences</Link></li><li><a href="#top">Galerie</a></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousadi Luxury Desert Camp. Tous droits réservés.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Aperçu de la photo"><img alt="" /><button id="lbx" aria-label="Fermer">✕</button><button id="lbp" aria-label="Photo précédente">‹</button><button id="lbn" aria-label="Photo suivante">›</button><div id="lbc"></div></div>
      <PageEffects />
    </div>
  )
}
