import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/apropos.css'

export const metadata: Metadata = {
  title: { absolute: "Sobre Ousaadi | Historia de Nuestro Campamento en Merzouga" },
  description: "Conozca Ousaadi, campamento en el desierto de Merzouga inspirado en la cultura marroquí: confort auténtico, cálida hospitalidad y un entorno único.",
  alternates: { canonical: "/es/campamento-lujo-merzouga", languages: { fr: "/merzouga-luxury-desert-camp", en: "/en/merzouga-luxury-desert-camp", es: "/es/campamento-lujo-merzouga", ar: "/ar/merzouga-luxury-desert-camp", 'x-default': "/merzouga-luxury-desert-camp" } },
  openGraph: { title: "Sobre Ousaadi | Historia de Nuestro Campamento en Merzouga", description: "Conozca Ousaadi, campamento en el desierto de Merzouga inspirado en la cultura marroquí: confort auténtico, cálida hospitalidad y un entorno único.", url: "/es/campamento-lujo-merzouga", siteName: SITE.name, locale: 'es_ES', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Sobre Ousaadi | Historia de Nuestro Campamento en Merzouga", description: "Conozca Ousaadi, campamento en el desierto de Merzouga inspirado en la cultura marroquí: confort auténtico, cálida hospitalidad y un entorno único." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/apropos-hero-img.webp",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Campamento de lujo en Merzouga, Marruecos: jaimas confortables, cocina marroquí, paseos en camello, excursiones en 4x4 y noches estrelladas.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "Merzouga, Marruecos",
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "AboutPage",
      "name": "Sobre Ousaadi | Historia de Nuestro Campamento en Merzouga",
      "url": "https://osaadiluxurydesertcamp.com/es/campamento-lujo-merzouga",
      "inLanguage": "es"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://osaadiluxurydesertcamp.com/es"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sobre nosotros",
          "item": "https://osaadiluxurydesertcamp.com/es/campamento-lujo-merzouga"
        }
      ]
    }
  ]
}

const faq = [
  { q: "¿Qué es el campamento Ousaadi?", a: "Ousaadi Luxury Desert Camp es un campamento de lujo en el desierto de Merzouga, en Marruecos, con jaimas confortables, cocina marroquí y actividades en las dunas." },
  { q: "¿Dónde está el campamento?", a: "En el desierto de Merzouga, en el sureste de Marruecos, a los pies de las dunas del Erg Chebbi." },
  { q: "¿Qué hace auténtica la experiencia?", a: "Una cálida hospitalidad marroquí, cocina tradicional, té de menta y momentos compartidos alrededor del fuego, en un entorno inspirado en la cultura marroquí." },
  { q: "¿Qué alojamientos hay disponibles?", a: "Jaimas de lujo, jaimas tradicionales y jaimas premium." },
  { q: "¿Cómo se reserva?", a: "Por WhatsApp, indicándonos las fechas y el número de viajeros." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function SobreNosotrosPageEs() {
  return (
    <div className="pg-apropos" id="top">
      <link rel="preload" as="image" href="/images/apropos-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 96 42"><path d="M2 38 22 20l8 8 14-22 12 18 8-8 8 14 6-4 16 14z M44 6l-4 7 4-2 4 4 3-6zM56 24l4-5 5 5" fill="none" stroke="currentColor" /></symbol>
      <symbol id="tent" viewBox="0 0 24 24"><path d="M3 20 12 4l9 16zM12 20v-9M8 20l4-9 4 9" fill="currentColor" /></symbol>
      <symbol id="star" viewBox="0 0 24 24"><path d="m12 2 3 7 7 .6-5.400 4.700L18.200 22 12 18l-6.200 4 1.600-7.700L2 9.600 9 9z" fill="currentColor" /></symbol>
      <symbol id="gem" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6" /></symbol>
      <symbol id="lotus" viewBox="0 0 24 24"><path d="M12 4c3 3 3 9 0 13-3-4-3-10 0-13zM4 8c4 0 7 4 8 9-4 0-7-3-8-9zM20 8c-4 0-7 4-8 9 4 0 7-3 8-9zM2 13c4 1 7 3 10 6M22 13c-4 1-7 3-10 6M6 20h12" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.500" /><circle cx="16.800" cy="7.200" r=".9" fill="currentColor" /></symbol>
      <symbol id="ta" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3.500" /><circle cx="17" cy="14" r="3.500" /><path d="M2 10c3-3 17-3 20 0M12 8c-3 0-5 1-6 2M12 8c3 0 5 1 6 2" /><circle cx="7" cy="14" r="1" fill="currentColor" /><circle cx="17" cy="14" r="1" fill="currentColor" /></symbol>
      <symbol id="pin" viewBox="0 0 24 24"><path d="M12 22s7-6.500 7-12a7 7 0 0 0-14 0c0 5.500 7 12 7 12z" fill="currentColor" /><circle cx="12" cy="10" r="2.500" fill="#4a0c1a" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/es" aria-label="Ousaadi Luxury Desert Camp — inicio"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navegación principal"><ul>
      <li><Link href="/es">Inicio</Link></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><a href="#top" className="active">Sobre nosotros</a></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">ES ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <button className="burger" id="bg" aria-label="Abrir el menú" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Jaimas del campamento Ousaadi iluminadas con faroles en Merzouga"></div>
      <div className="hero-txt"><h1>Sobre Ousaadi</h1>
      <p>Una experiencia auténtica en nuestro campamento en el desierto de Merzouga, en el corazón del Sahara marroquí</p><div className="hl"><i></i></div></div>
      </section>
      <section className="story rv">
      <i className="pat"></i>
      <div><h2>Nuestra historia</h2><div className="dl"><i></i></div>
      <p>OUSAADI Luxury Desert Camp es mucho más que un campamento: es una invitación a descubrir la magia del desierto de Merzouga.</p>
      <p>Inspirado en la cultura marroquí y en la belleza infinita del Sahara, nuestro campamento en el desierto de Merzouga le ofrece una experiencia única que combina confort, autenticidad y una cálida hospitalidad.</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a></div>
      <figure><Image src="/images/caravane-de-dromadaires-dans-les-dunes-de-merzouga-au-coucher-du-solei.webp" width={1040} height={524} sizes="(max-width: 1000px) 100vw, 50vw" alt="Caravana de camellos en las dunas de Merzouga al atardecer" /></figure>
      </section>
      {/* À compléter avec l’histoire réelle du camp (fondateur, année de création, famille, équipe) : renforce la confiance (E-E-A-T) */}
      <section className="seo rv">
      <h2>Un campamento en el desierto de Merzouga pensado para vivir el Sáhara</h2>
      <p>Ousaadi es un campamento de lujo en Merzouga, a los pies de las dunas del Erg Chebbi, en el sureste de Marruecos. Nuestra idea es sencilla: que viva el Sáhara marroquí en un entorno confortable, sin perder nada de su autenticidad.</p>
      <p>Nuestras jaimas de lujo, tradicionales y premium, la cocina marroquí, los paseos en camello, las excursiones en 4x4 y las veladas alrededor del fuego componen una estancia pensada con el espíritu de la hospitalidad marroquí.</p>
      </section>
      <section className="why rv">
      <h2>¿Por qué elegir OUSAADI en Merzouga?</h2><div className="dl"><i></i></div>
      <div className="cards">
      <div className="cd"><div><svg className="i"><use href="#tent" /></svg>Un entorno único en el Sahara</div></div>
      <div className="cd"><div><svg className="i"><use href="#star" /></svg>Una cálida hospitalidad marroquí</div></div>
      <div className="cd"><div><svg className="i"><use href="#gem" /></svg>Alojamiento confortable</div></div>
      <div className="cd"><div><svg className="i"><use href="#lotus" /></svg>Experiencias inolvidables</div></div>
      </div>
      </section>
      <section className="seo choose rv">
      <h2>Lo que le espera en el campamento Ousaadi</h2>
      <div className="cols c2">
      <article><h3>Un entorno único en el Sáhara</h3><p>Las dunas del Erg Chebbi, el silencio del desierto y un cielo estrellado lejos de la contaminación lumínica: el escenario de su estancia en Merzouga.</p></article>
      <article><h3>Una cálida hospitalidad marroquí</h3><p>Un equipo atento, desde su primer mensaje por WhatsApp hasta su despedida, con té de menta y la cordialidad marroquí.</p></article>
      <article><h3>Alojamiento confortable</h3><p>Tres tipos de jaimas, de lujo, tradicionales y premium, con camas confortables y baño.</p></article>
      <article><h3>Experiencias inolvidables</h3><p>Paseo en camello, excursión en 4x4, sandboard, puesta de sol, observación de estrellas y velada alrededor del fuego.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>Preguntas frecuentes sobre el campamento Ousaadi</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="pat"></i>
      <div className="tx"><h2>Viva la magia del desierto <em>con OUSAADI Luxury Desert Camp en Merzouga</em></h2>
      <p>Una aventura auténtica, un recuerdo para toda la vida…</p>
      <a className="btn gold" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar ahora</a></div>
      <div className="pic" role="img" aria-label="Salón marroquí dentro de una jaima en el campamento de lujo de Merzouga"></div>
      <svg className="cv" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M24 0C15 28 8 56 0 100" fill="none" stroke="#ecc473" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/es" aria-label="Inicio"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/es">Inicio</Link></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><a href="#top">Sobre nosotros</a></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul>
      
      <div className="loc"><svg className="i"><use href="#pin" /></svg>Merzouga, Marruecos</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
