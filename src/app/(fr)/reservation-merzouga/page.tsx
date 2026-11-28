import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/contact.css'

export const metadata: Metadata = {
  title: { absolute: "Réservation Camp Merzouga | Contact Ousaadi Desert Camp" },
  description: "Réserver camp Merzouga : contactez Ousaadi sur WhatsApp au +212 661 175 228. Camp de luxe dans le désert de Merzouga, accueil chaleureux tous les jours, 24h/24.",
  alternates: { canonical: "/reservation-merzouga", languages: { fr: "/reservation-merzouga", en: "/en/book-merzouga", es: "/es/reservar-merzouga", ar: "/ar/book-merzouga", 'x-default': "/reservation-merzouga" } },
  openGraph: { title: "Réservation Camp Merzouga | Contact Ousaadi Desert Camp", description: "Réservez votre séjour au camp Ousaadi, dans le désert de Merzouga, directement sur WhatsApp.", url: "/reservation-merzouga", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Réservation Camp Merzouga | Contact Ousaadi Desert Camp", description: "Réservez votre séjour au camp Ousaadi, dans le désert de Merzouga, directement sur WhatsApp." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/contact-hero-img.webp",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Camp de luxe à Merzouga, Maroc. Réservation directe sur WhatsApp.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "Merzouga, Maroc",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212661175228",
        "contactType": "reservations",
        "availableLanguage": [
          "French",
          "English",
          "Arabic"
        ]
      },
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "ContactPage",
      "name": "Contact et réservation — camp Ousaadi, Merzouga"
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
          "name": "Contact",
          "item": "https://osaadiluxurydesertcamp.com/reservation-merzouga"
        }
      ]
    }
  ]
}

const faq = [
  { q: "Comment réserver le camp Ousaadi ?", a: "Le plus simple est de nous écrire sur WhatsApp au +212 661 175 228 en indiquant vos dates et le nombre de personnes." },
  { q: "Comment vous contacter ?", a: "Par WhatsApp ou par téléphone au +212 661 175 228, ou par email à osaadiluxurydesertcamp@gmail.com." },
  { q: "Êtes-vous joignables tous les jours ?", a: "Oui, nous sommes disponibles tous les jours, 24h/24." },
  { q: "Où se trouve le camp et comment y accéder ?", a: "Notre camp est situé à Merzouga, au cœur du désert marocain, à proximité des grandes dunes, et il est facilement accessible depuis Erfoud, en voiture." },
  { q: "Que dois-je indiquer dans ma demande de réservation ?", a: "Vos dates, le nombre de personnes, le type de tente souhaité (luxueuse, traditionnelle ou premium) et les activités qui vous intéressent." },
  { q: "Puis-je réserver des activités en même temps que ma tente ?", a: "Oui, précisez-nous les activités souhaitées (dromadaire, 4x4, sandboard, soirée autour du feu…) et nous les intégrons à votre séjour." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function ContactPage() {
  return (
    <div className="pg-contact" id="top">
      <link rel="preload" as="image" href="/images/contact-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 96 42"><path d="M2 38 22 20l8 8 14-22 12 18 8-8 8 14 6-4 16 14z M44 6l-4 7 4-2 4 4 3-6zM56 24l4-5 5 5" fill="none" stroke="currentColor" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="pin" viewBox="0 0 24 24"><path d="M12 22s7-6.500 7-12a7 7 0 0 0-14 0c0 5.500 7 12 7 12z" fill="currentColor" /><circle cx="12" cy="10" r="2.500" fill="#4a0c1a" stroke="none" /></symbol>
      <symbol id="phone" viewBox="0 0 24 24"><path d="M6.500 3 9 3l1.500 4.500-2 1.500a11 11 0 0 0 6.500 6.500l1.500-2 4.500 1.500v2.500A2.500 2.500 0 0 1 18.500 20 15.500 15.500 0 0 1 4 5.500 2.500 2.500 0 0 1 6.500 3z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" stroke="none" /><path d="m3.500 7 8.500 6.500L20.500 7" stroke="#4a0c1a" strokeWidth="1.600" /></symbol>
      <symbol id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.500 2" /></symbol>
      <symbol id="chk" viewBox="0 0 24 24"><path d="m5 12.500 4.500 4.500L19 7.500" strokeWidth="2.600" /></symbol>
      <symbol id="star8" viewBox="0 0 24 24"><path d="M12 2l2.600 5.400 5.900-.9-3 5.200 3 5.200-5.900-.9L12 22l-2.600-5.400-5.900.9 3-5.200-3-5.200 5.900.9z" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" /><path d="M13.500 20v-6.500H16l.4-2.800h-2.900V9c0-.8.3-1.400 1.500-1.400H16.500V5.200c-.3 0-1.200-.1-2.200-.1-2.200 0-3.700 1.300-3.700 3.800v1.800H8v2.800h2.600V20z" fill="#4a0c1a" stroke="none" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="3.800" stroke="#4a0c1a" strokeWidth="1.800" /><circle cx="17" cy="7" r="1" fill="#4a0c1a" stroke="none" /></symbol>
      <symbol id="ta" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3.500" /><circle cx="17" cy="14" r="3.500" /><path d="M2 10c3-3 17-3 20 0M12 8c-3 0-5 1-6 2M12 8c3 0 5 1 6 2" /><circle cx="7" cy="14" r="1" fill="currentColor" /><circle cx="17" cy="14" r="1" fill="currentColor" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/" aria-label="Ousaadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><Link href="/tentes-de-luxe-merzouga">Hébergement</Link></li><li><Link href="/excursions-merzouga">Expériences</Link></li><li><Link href="/photos-merzouga">Galerie</Link></li><li><Link href="/merzouga-luxury-desert-camp">À propos</Link></li><li><a href="#top" className="active">Contact</a></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">FR ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Allée du camp Ousaadi éclairée de lanternes à Merzouga"></div>
      <div className="hero-txt"><h1>Contact &amp; <span>Réservation</span></h1>
      <p>Votre aventure dans le désert de Merzouga commence ici…</p><div className="hl"><i></i></div>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="Réserver le camp de Merzouga sur WhatsApp" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a></div>
      </section>
      <section className="seo rv">
      <h2>Réserver votre séjour au camp Ousaadi à Merzouga</h2>
      <p>Pour réserver au camp Ousaadi, le plus simple est de nous écrire sur WhatsApp. Nous sommes disponibles tous les jours, 24h/24 : indiquez-nous vos dates, le nombre de personnes, le type de tente (luxueuse, traditionnelle ou premium) et les activités qui vous intéressent.</p>
      <p>Nous vous répondons avec les disponibilités et les tarifs, puis nous organisons votre arrivée dans le désert de Merzouga.</p>
      </section>
      <section className="info rv">
      <div><h2>Nos Informations</h2><div className="dl"><i></i></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#pin" /></svg></div><div><b>Notre Emplacement</b><span>Merzouga, Maroc</span></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#phone" /></svg></div><div><b>Téléphone / WhatsApp</b><a href="tel:+212661175228">+212 661 175 228</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#mail" /></svg></div><div><b>Email</b><a id="mail" href={`mailto:${SITE.email}`}>osaadiluxurydesertcamp@gmail.com</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#clock" /></svg></div><div><b>Disponibilité</b><span>Tous les jours, 24h/24</span></div></div></div>
      <div className="book"><i className="orn tr" style={{opacity:".4"}}></i>
      <h2><svg className="i"><use href="#wa" /></svg>Réservez dès maintenant</h2>
      <p className="l">Cliquez sur le bouton ci-dessous pour nous contacter directement sur WhatsApp.</p>
      <a className="btn green" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp <svg className="i" style={{fontSize:"20px"}}><use href="#rt" /></svg></a>
      <div className="sep"><svg className="i"><use href="#star8" /></svg></div>
      <small>Nous serons ravis de vous accueillir dans notre camp</small></div>
      </section>
      <Image src="/images/dromadaires-dans-les-dunes-au-coucher-du-soleil-desert-de-merzouga.webp" width={2048} height={144} sizes="(max-width: 1000px) 100vw, 50vw" className="dunes" alt="Dromadaires dans les dunes au coucher du soleil, désert de Merzouga" />
      <section className="find rv">
      
      <div className="t"><h2>Comment nous trouver ?</h2><div className="dl"><i></i></div>
      <p>Notre camp est situé à Merzouga, au cœur du désert marocain, facilement accessible depuis Erfoud.</p>
      <ul><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>À proximité des grandes dunes</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>Accès facile en voiture</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>Accueil chaleureux sur place</li></ul></div>
      <div className="lant" aria-hidden="true"></div>
      </section>
      <section className="seo choose rv">
      <h2>Comment réserver votre camp à Merzouga en 3 étapes</h2>
      <div className="cols">
      <article><h3>1. Écrivez-nous</h3><p>Contactez-nous par WhatsApp, par téléphone ou par email, tous les jours, 24h/24.</p></article>
      <article><h3>2. Précisez votre séjour</h3><p>Indiquez vos dates, le nombre de voyageurs, le type de tente souhaité et les activités qui vous tentent.</p></article>
      <article><h3>3. Préparez votre arrivée</h3><p>Nous vous répondons avec les disponibilités et les tarifs, puis nous organisons votre arrivée à Merzouga.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>Questions fréquentes sur la réservation à Merzouga</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="orn tl"></i><i className="orn tr"></i><div className="cam" aria-hidden="true"></div>
      <h2>Prêt pour une expérience inoubliable ?</h2>
      <p>Réservez dès maintenant et vivez la magie du désert de Merzouga.</p>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="Réserver le camp de Merzouga sur WhatsApp" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousaadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><Link href="/tentes-de-luxe-merzouga">Hébergement</Link></li><li><Link href="/excursions-merzouga">Expériences</Link></li><li><Link href="/photos-merzouga">Galerie</Link></li><li><Link href="/merzouga-luxury-desert-camp">À propos</Link></li><li><a href="#top">Contact</a></li></ul>
      
      <div className="loc"><svg className="i"><use href="#pin" /></svg>Merzouga, Maroc</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
