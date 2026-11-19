import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/galerie.css'

export const metadata: Metadata = {
  title: { absolute: "Merzouga Photos: Camp & Desert Gallery | Ousaadi" },
  description: "Merzouga photos: discover our camp, tents, dunes, camels and campfire evenings in pictures. Ousaadi luxury desert camp, Morocco.",
  alternates: { canonical: "/en/photos-merzouga", languages: { fr: "/photos-merzouga", en: "/en/photos-merzouga", es: "/es/fotos-merzouga", ar: "/ar/photos-merzouga", 'x-default': "/galerie" } },
  openGraph: { title: "Merzouga Photos: Camp & Desert Gallery | Ousaadi", description: "Merzouga photos: discover our camp, tents, dunes, camels and campfire evenings in pictures. Ousaadi luxury desert camp, Morocco.", url: "/en/photos-merzouga", siteName: SITE.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Merzouga Photos: Camp & Desert Gallery | Ousaadi", description: "Merzouga photos: discover our camp, tents, dunes, camels and campfire evenings in pictures. Ousaadi luxury desert camp, Morocco." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Luxury desert camp in Merzouga, Morocco: comfortable tents, Moroccan cuisine and desert experiences.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "Merzouga, Morocco",
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "CollectionPage",
      "name": "Merzouga Photos: Camp & Desert Gallery | Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/en/photos-merzouga",
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://osaadiluxurydesertcamp.com/en"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://osaadiluxurydesertcamp.com/en/photos-merzouga"
        }
      ]
    }
  ]
}

export default function GalleryPageEn() {
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
      <Link className="logo" href="/en" aria-label="Ousaadi Luxury Desert Camp — home"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Main navigation"><ul>
      <li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><a href="#top" className="active">Gallery</a></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">EN ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <button className="burger" id="bg" aria-label="Open menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Ousaadi luxury camp lit by lanterns in Merzouga"></div>
      <i className="orn tl"></i><i className="orn tr"></i><i className="orn bl" style={{bottom:"-6%"}}></i>
      <div className="hero-txt"><div><svg className="i cam"><use href="#cam" /></svg><h1>Merzouga Photos</h1><div className="hl"><i></i></div>
      <p>Discover in pictures the magic of our camp and the Merzouga dunes</p></div></div>
      </section>
      <nav className="filters" id="filters" aria-label="Filter photos">
      <button className="chip on" data-f="all"><svg className="i"><use href="#diam" /></svg>View all</button>
      <button className="chip" data-f="camp"><svg className="i"><use href="#tent" /></svg>The Camp</button>
      <button className="chip" data-f="tentes"><svg className="i"><use href="#bed" /></svg>The Tents</button>
      <button className="chip" data-f="activites"><svg className="i"><use href="#camel" /></svg>Activities</button>
      <button className="chip" data-f="desert"><svg className="i"><use href="#dune" /></svg>The Desert</button>
      </nav>
      <section className="grid" id="gallery" aria-label="Photos of the camp and desert in Merzouga">
      <button className="ph" data-cat="camp"><Image src="/images/allee-du-camp-ousaadi-illuminee-de-lanternes-photo-du-camp-de-merzouga.webp" width={632} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Ousaadi camp pathway lit by lanterns, Merzouga camp photo" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/tente-de-luxe-avec-lit-bordeaux-au-camp-ousaadi-merzouga.webp" width={596} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="Luxury tent with a burgundy bed at Ousaadi camp, Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/restaurant-sous-tente-du-camp-de-luxe-de-merzouga.webp" width={618} height={432} sizes="(max-width: 1000px) 100vw, 50vw" alt="Restaurant tent at the luxury camp in Merzouga" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/caravane-de-dromadaires-au-coucher-du-soleil-desert-de-merzouga.webp" width={634} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Camel caravan at sunset, Merzouga desert" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/tente-restaurant-eclairee-au-crepuscule-camp-ousaadi-merzouga.webp" width={590} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Restaurant tent lit up at dusk, Ousaadi camp Merzouga" /></button>
      <button className="ph" data-cat="desert"><Image src="/images/coucher-de-soleil-sur-les-dunes-de-merzouga.webp" width={622} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="Sunset over the Merzouga dunes" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/chambre-en-tente-de-luxe-aux-lits-bordeaux-luxury-desert-camp-merzouga.webp" width={634} height={408} sizes="(max-width: 1000px) 100vw, 50vw" alt="Luxury tent bedroom with burgundy beds, luxury desert camp Merzouga" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/lanternes-marocaines-blanches-dans-le-camp-de-merzouga-la-nuit.webp" width={590} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="White Moroccan lanterns at the Merzouga camp at night" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/feu-de-camp-et-coussins-rouges-sous-les-etoiles-camp-ousaadi-a-merzoug.webp" width={620} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="Campfire and red cushions under the stars, Ousaadi camp in Merzouga" /></button>
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="dunes" aria-hidden="true"></div><div className="lant" aria-hidden="true"></div>
      <i className="orn bl"></i><i className="orn br"></i>
      <h2>An unforgettable experience in the heart of the Merzouga desert</h2><div className="d"></div>
      <a className="btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <i className="orn bl" style={{opacity:".4"}}></i><i className="orn br" style={{opacity:".4"}}></i>
      <div className="ft">
      <Link className="logo" href="/en" aria-label="Home"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><a href="#top">Gallery</a></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. All rights reserved.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Photo preview"><img alt="" /><button id="lbx" aria-label="Close">✕</button><button id="lbp" aria-label="Previous photo">‹</button><button id="lbn" aria-label="Next photo">›</button><div id="lbc"></div></div>
      <PageEffects />
    </div>
  )
}
