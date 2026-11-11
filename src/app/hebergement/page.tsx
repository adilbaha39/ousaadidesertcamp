import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/hebergement.css'

export const metadata: Metadata = {
  title: { absolute: "Tentes de Luxe à Merzouga | Merzouga Luxury Camp – Ousadi" },
  description: "Ousadi, luxury camp à Merzouga : tentes luxueuses, traditionnelles et premium, literie confortable, salle de bain. Réservez votre camp de luxe sur WhatsApp.",
  alternates: { canonical: "/hebergement" },
  openGraph: { title: "Tentes de Luxe à Merzouga | Merzouga Luxury Camp – Ousadi", description: "Ousadi, luxury camp à Merzouga : tentes luxueuses, traditionnelles et premium, literie confortable, salle de bain. Réservez votre camp de luxe sur WhatsApp.", url: "/hebergement", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Tentes de Luxe à Merzouga | Merzouga Luxury Camp – Ousadi", description: "Ousadi, luxury camp à Merzouga : tentes luxueuses, traditionnelles et premium, literie confortable, salle de bain. Réservez votre camp de luxe sur WhatsApp." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousadi Luxury Desert Camp",
      "description": "Luxury desert camp à Merzouga, Maroc : tentes luxueuses, traditionnelles et premium, cuisine marocaine, balades à dromadaire, excursions 4x4 et nuits étoilées.",
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
          "name": "Hébergement",
          "item": "https://osaadiluxurydesertcamp.com/hebergement"
        }
      ]
    }
  ]
}

export default function HebergementPage() {
  return (
    <div className="pg-hebergement" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 46 32"><path d="M3 29 23 5l20 24z M13 29 23 14l10 15M23 5v-3M18 29l5-9 5 9" fill="none" stroke="currentColor" /></symbol>
      <symbol id="tent" viewBox="0 0 24 24"><path d="M3 20 12 4l9 16zM12 20v-8M8 20l4-8 4 8" /></symbol>
      <symbol id="bed" viewBox="0 0 24 24"><path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6M7 12.500a1.800 1.800 0 1 0 0-.1" /></symbol>
      <symbol id="shower" viewBox="0 0 24 24"><path d="M5 21V8a4 4 0 0 1 4-4h2M5 8h0M11 4a6 6 0 0 1 6 6H8a6 6 0 0 1 3-6zM9 13v1M12 13v2M15 13v1M10 17v1M13 17v1M16 17v1" /></symbol>
      <symbol id="snow" viewBox="0 0 24 24"><path d="M12 2v20M3.300 7l17.400 10M3.300 17 20.700 7M9 4l3 2 3-2M9 20l3-2 3 2M3 10l3 .5L5 13.500M21 10l-3 .5 1 3" /></symbol>
      <symbol id="users" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3" fill="currentColor" /><circle cx="5" cy="9" r="2.200" fill="currentColor" /><circle cx="19" cy="9" r="2.200" fill="currentColor" /><path d="M6 20v-3a6 6 0 0 1 12 0v3zM1 17c0-2 1.500-3.500 4-3.500M23 17c0-2-1.500-3.500-4-3.500" fill="currentColor" /></symbol>
      <symbol id="leaf" viewBox="0 0 24 24"><path d="M5 21c0-10 5-16 16-17 0 11-5 16-14 16M5 21c2-5 5-8 9-10M12 3c-1 4-3 6-6 7" /></symbol>
      <symbol id="gem" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6" /></symbol>
      <symbol id="star" viewBox="0 0 24 24"><path d="m12 2 3 7 7 .6-5.400 4.700L18.200 22 12 18l-6.200 4 1.600-7.700L2 9.600 9 9z" fill="currentColor" /></symbol>
      <symbol id="wifi" viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0M5 12.500a10 10 0 0 1 14 0M8.500 16a5 5 0 0 1 7 0M12 19.500h.01" /></symbol>
      <symbol id="heat" viewBox="0 0 24 24"><path d="M7 3c-2 3 2 4 0 8s2 4 0 8M12 3c-2 3 2 4 0 8s2 4 0 8M17 3c-2 3 2 4 0 8s2 4 0 8M4 22h16" /></symbol>
      <symbol id="terr" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 18 0zM12 12v8M8 20h8M7 12c0-3 2-6 5-8M17 12c0-3-2-6-5-8" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#1c070b" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/" aria-label="Ousadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><a href="#top" className="active">Hébergement</a></li><li><Link href="/experiences">Expériences</Link></li><li><Link href="/galerie">Galerie</Link></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul></nav>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une tente au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Intérieur d'une tente de luxe à Merzouga"></div>
      <div className="hero-txt"><h1>Nos Hébergements à Merzouga</h1><div className="hl"><i></i></div>
      <p>Des tentes confortables et élégantes pour un séjour inoubliable dans notre luxury camp, au cœur du désert de Merzouga.</p></div>
      </section>
      <section className="rows">
      <i className="orn tr" style={{top:"25%"}}></i><i className="orn tr" style={{top:"68%",height:"clamp(110px,17vw,230px)"}}></i><i className="orn tl" style={{top:"38%",opacity:".3"}}></i>
      <article className="row rv">
      <div className="pic"><div className="p1"><Image src="/images/tente-luxueuse-avec-lits-confortables-et-fauteuils-camp-de-luxe-a-merz.jpg" width={942} height={544} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente luxueuse avec lits confortables et fauteuils, camp de luxe à Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Tentes Luxueuses</h2>
      <p>Profitez d’un confort exceptionnel dans nos tentes spacieuses à Merzouga, décorées avec goût dans un style marocain authentique.</p>
      <div className="fe"><div><svg className="i"><use href="#bed" /></svg>Lits confortables</div><div><svg className="i"><use href="#shower" /></svg>Salle de bain (privée/dépendante)</div><div><svg className="i"><use href="#snow" /></svg>Confort optimal</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite plus d'informations sur les Tentes Luxueuses à Merzouga.")}>En savoir plus <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      </article>
      <article className="row rev rv">
      <div className="pic"><div className="p2"><Image src="/images/tente-traditionnelle-avec-lits-bordeaux-camp-ousadi-a-merzouga.jpg" width={1064} height={534} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente traditionnelle avec lits bordeaux, camp Ousadi à Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Tentes Traditionnelles</h2>
      <p>Vivez l’expérience authentique du désert de Merzouga dans nos tentes traditionnelles, alliant simplicité et charme marocain.</p>
      <div className="fe"><div><svg className="i"><use href="#tent" /></svg>Espace spacieux</div><div><svg className="i"><use href="#users" /></svg>Idéal pour les familles</div><div><svg className="i"><use href="#leaf" /></svg>Vue sur le désert</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite plus d'informations sur les Tentes Traditionnelles.")}>En savoir plus <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      <article className="row rv">
      <div className="pic"><div className="p3"><Image src="/images/tente-premium-eclairee-au-crepuscule-desert-luxury-camp-merzouga.jpg" width={952} height={484} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tente premium éclairée au crépuscule, desert luxury camp Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Tentes Premium</h2>
      <p>Découvrez nos tentes premium, un desert luxury camp à Merzouga conçu pour une expérience unique entre luxe et nature.</p>
      <div className="fe"><div><svg className="i"><use href="#gem" /></svg>Design élégant</div><div><svg className="i"><use href="#bed" /></svg>Grand confort</div><div><svg className="i"><use href="#star" /></svg>Ambiance unique</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite plus d'informations sur les Tentes Premium.")}>En savoir plus <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      </section>
      <section className="eq rv"><i className="orn tl"></i><i className="orn tr"></i>
      <h3>Équipements &amp; Confort</h3>
      <ul>
      <li><svg className="i"><use href="#bed" /></svg>Lits confortables</li>
      <li><svg className="i"><use href="#shower" /></svg>Salle de bain</li>
      </ul>
      </section>
      <section className="cta" id="contact">
      <h3>Réservez dès maintenant votre séjour</h3><p>et vivez une expérience désertique inoubliable à Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une tente au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <div className="lant2" aria-hidden="true"></div>
      </section>
      </main>
      <footer>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><a href="#top">Hébergement</a></li><li><Link href="/experiences">Expériences</Link></li><li><Link href="/galerie">Galerie</Link></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une tente au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousadi Luxury Desert Camp. Tous droits réservés.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Aperçu de l'image"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
