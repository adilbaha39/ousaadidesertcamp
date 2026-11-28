import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/experiences.css'

export const metadata: Metadata = {
  title: { absolute: "Excursión Desierto de Merzouga: Camello y 4x4 | Ousaadi" },
  description: "Reserve su excursión por el desierto de Merzouga con Ousaadi: paseo en camello, 4x4 por las dunas del Erg Chebbi, sandboard, atardecer y noches de estrellas.",
  alternates: { canonical: "/es/excursiones-merzouga", languages: { fr: "/excursions-merzouga", en: "/en/excursions-merzouga", es: "/es/excursiones-merzouga", ar: "/ar/excursions-merzouga", 'x-default': "/excursions-merzouga" } },
  openGraph: { title: "Excursión Desierto de Merzouga: Camello y 4x4 | Ousaadi", description: "Reserve su excursión por el desierto de Merzouga con Ousaadi: paseo en camello, 4x4 por las dunas del Erg Chebbi, sandboard, atardecer y noches de estrellas.", url: "/es/excursiones-merzouga", siteName: SITE.name, locale: 'es_ES', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Excursión Desierto de Merzouga: Camello y 4x4 | Ousaadi", description: "Reserve su excursión por el desierto de Merzouga con Ousaadi: paseo en camello, 4x4 por las dunas del Erg Chebbi, sandboard, atardecer y noches de estrellas." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/experiences-hero-img.webp",
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
          "name": "Experiencias",
          "item": "https://osaadiluxurydesertcamp.com/es/excursiones-merzouga"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "Excursión Desierto de Merzouga: Camello y 4x4 | Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/es/excursiones-merzouga",
      "inLanguage": "es"
    }
  ]
}

const faq = [
  { q: "¿Qué actividades se pueden hacer en el desierto de Merzouga con Ousaadi?", a: "Paseo en camello, excursión en 4x4 por el Erg Chebbi, sandboard, puesta de sol, observación de estrellas y velada alrededor del fuego." },
  { q: "¿Cómo se reserva una excursión?", a: "Por WhatsApp: indíquenos las fechas, el número de personas y las actividades que le interesan." },
  { q: "¿Cuál es el mejor momento para el paseo en camello?", a: "Muchos viajeros lo eligen al atardecer, cuando la luz dorada sobre las dunas es más hermosa. Pregúntenos el horario que mejor encaja con su estancia." },
  { q: "¿Se pueden ver las estrellas desde el campamento?", a: "Sí, el campamento está en pleno desierto, lejos de la contaminación lumínica, lo que ofrece un cielo estrellado excepcional." },
  { q: "¿La comida del campamento es marroquí?", a: "Sí: cocina marroquí preparada con esmero, té de menta y comidas al aire libre." },
  { q: "¿Dónde se realizan las excursiones?", a: "En el desierto de Merzouga, sobre las dunas del Erg Chebbi, en el sureste de Marruecos." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function ExperienciasPageEs() {
  return (
    <div className="pg-experiences" id="top">
      <link rel="preload" as="image" href="/images/experiences-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 46 32"><path d="M3 29 23 5l20 24z M13 29 23 14l10 15M23 5v-3M18 29l5-9 5 9" fill="none" stroke="currentColor" /></symbol>
      <symbol id="camel" viewBox="0 0 24 24"><path d="M2 21v-6l2-1 1-5 3 3 3-1 2-5 3 1 1 4 4 2v8h-1.500v-6l-1.500-.5V21H15v-5H9v5H7.500v-5L5 16v5z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="suv" viewBox="0 0 24 24"><path d="M3 15l1.500-5.500h13L21 15v4H3zM6 10V7h10l1.500 3M3 15h18" /><circle cx="7.500" cy="19" r="2" /><circle cx="16.500" cy="19" r="2" /></symbol>
      <symbol id="board" viewBox="0 0 24 24"><rect x="1.500" y="9" width="21" height="6" rx="3" transform="rotate(-45 12 12)" /><path d="m9 15 1-1" /></symbol>
      <symbol id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.900 4.900 7 7M17 17l2.100 2.100M4.900 19.100 7 17M17 7l2.100-2.100" /></symbol>
      <symbol id="scope" viewBox="0 0 24 24"><path d="m3 14 11-6 2 4L5 18zM14 8l6-3M9 17l-2 5M12 15.500l3 6.500M18 4l1.500 3" /></symbol>
      <symbol id="fire" viewBox="0 0 24 24"><path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-8-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 11 0 5 3 9 7 9z" /><path d="M12 22c-2 0-3-1.500-3-3 0-2 2-3 3-5 1 2 3 3 3 5 0 1.500-1 3-3 3z" /></symbol>
      <symbol id="cloche" viewBox="0 0 24 24"><path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 8V6M10 6h4" /></symbol>
      <symbol id="cup" viewBox="0 0 24 24"><path d="M4 10h13v3a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6zM17 11h2a2 2 0 0 1 0 5h-2M9 3c0 1.500 1 1.500 1 3M13 3c0 1.500 1 1.500 1 3" /></symbol>
      <symbol id="table" viewBox="0 0 24 24"><path d="M4 10h16M7 10v10M17 10v10M3 5v9M21 5v9M3 8h3M18 8h3" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#2a0910" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/es" aria-label="Ousaadi Luxury Desert Camp — inicio"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navegación principal"><ul>
      <li><Link href="/es">Inicio</Link></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><a href="#top" className="active">Experiencias</a></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">ES ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <button className="burger" id="bg" aria-label="Abrir el menú" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Caravana de camellos al atardecer en el desierto de Merzouga"></div>
      <i className="orn tl"></i>
      <div className="hero-txt"><h1>Excursión por el Desierto de Merzouga</h1>
      <p>Viva momentos inolvidables en el corazón del Sahara</p><div className="hl"><i></i></div></div>
      </section>
      <section className="seo rv">
      <h2>Excursiones y actividades en el desierto de Merzouga</h2>
      <p>En el campamento Ousaadi, el desierto de Merzouga se vive del día a la noche: paseo en camello por las dunas doradas, excursión en 4x4 por el Erg Chebbi, sandboard, puesta de sol, observación de estrellas y velada alrededor del fuego. Cada actividad se reserva fácilmente como parte de su estancia en el campamento.</p>
      <p>Escríbanos por WhatsApp indicando sus fechas, el número de personas y las actividades que desea, y organizaremos su programa.</p>
      </section>
      <section className="cards" aria-label="Actividades en el desierto de Merzouga">
      <i className="orn tl" style={{top:"-10px"}}></i><i className="orn tr" style={{top:"-10px"}}></i>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar un paseo en camello en Merzouga.")}><div className="in"><Image src="/images/balade-a-dos-de-dromadaire-dans-les-dunes-de-merzouga.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Paseo en camello por las dunas de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#camel" /></svg>Paseo en Camello</h3><p>Explore las doradas dunas de Merzouga a lomos de un camello.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una excursión en 4x4 por el desierto de Merzouga.")}><div className="in"><Image src="/images/excursion-en-4x4-dans-les-dunes-de-lerg-chebbi-a-merzouga-15659f.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Excursión en 4x4 por las dunas del Erg Chebbi, Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#suv" /></svg>Excursión en 4x4 por Merzouga</h3><p>Emprenda una aventura por las dunas del Erg Chebbi.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una sesión de sandboard en Merzouga.")}><div className="in"><Image src="/images/sandboard-sur-les-dunes-de-merzouga.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Sandboard en las dunas de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#board" /></svg>Sandboard</h3><p>Viva la emoción deslizándose por las dunas.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría saber más sobre la puesta de sol en el desierto de Merzouga.")}><div className="in"><Image src="/images/coucher-de-soleil-sur-le-desert-de-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Puesta de sol sobre el desierto de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#sun" /></svg>Puesta de Sol</h3><p>Contemple una puesta de sol impresionante sobre las dunas de Merzouga.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una noche de observación de estrellas en Merzouga.")}><div className="in"><Image src="/images/ciel-etoile-au-dessus-du-camp-de-luxe-de-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Cielo estrellado sobre el campamento de lujo de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#scope" /></svg>Observación de Estrellas</h3><p>Contemple un cielo estrellado único en el desierto de Merzouga.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una velada alrededor del fuego en Merzouga.")}><div className="in"><Image src="/images/soiree-autour-du-feu-de-camp-sous-les-etoiles-camp-ousaadi-a-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Velada junto a la hoguera bajo las estrellas, campamento Ousaadi en Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#fire" /></svg>Velada Alrededor del Fuego</h3><p>Comparta momentos cálidos bajo las estrellas.</p></div></div></a>
      </section>
      <section className="cul rv">
      <div className="pic"><Image src="/images/table-dressee-sous-la-tente-restaurant-du-camp-ousaadi-cuisine-marocai.webp" width={994} height={506} sizes="(max-width: 1000px) 100vw, 50vw" alt="Mesa servida en la carpa restaurante del campamento Ousaadi, cocina marroquí en Merzouga" /></div>
      <div className="t"><h2 className="t">Una Experiencia Gastronómica Auténtica</h2>
      <p>Disfrute de una deliciosa cocina marroquí, preparada con esmero para enriquecer su estancia en el desierto de Merzouga.</p>
      <div className="cf"><div><span className="ci"><svg className="i"><use href="#cloche" /></svg></span>Cocina<br />Marroquí</div><div><span className="ci"><svg className="i"><use href="#cup" /></svg></span>Té de Menta</div><div><span className="ci"><svg className="i"><use href="#table" /></svg></span>Comidas al Aire Libre</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hola, me gustaría saber más sobre la cocina marroquí del campamento Ousaadi en Merzouga.")}>Descubra nuestra cocina <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      <i className="orn bl" style={{bottom:"-20px",right:"0",left:"auto",transform:"scale(-1)"}}></i>
      </section>
      <section className="seo choose rv">
      <h2>Nuestras actividades en el desierto de Merzouga</h2>
      <div className="cols">
      <article><h3>Paseo en camello</h3><p>Explore las doradas dunas de Merzouga a lomos de un camello, una forma tradicional y tranquila de descubrir el desierto.</p></article>
      <article><h3>Excursión en 4x4 por Merzouga</h3><p>Emprenda una aventura en 4x4 por las dunas del Erg Chebbi y los paisajes del Sáhara.</p></article>
      <article><h3>Sandboard</h3><p>Deslícese por las dunas de Merzouga y viva la emoción sobre la arena.</p></article>
      <article><h3>Puesta de sol</h3><p>Contemple desde las dunas de Merzouga un espectáculo impresionante, cuando el desierto se tiñe de dorado.</p></article>
      <article><h3>Observación de estrellas</h3><p>Lejos de la contaminación lumínica, el cielo estrellado del desierto de Merzouga es único.</p></article>
      <article><h3>Velada alrededor del fuego</h3><p>Reúnase alrededor de la hoguera y comparta momentos cálidos bajo las estrellas.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>Preguntas frecuentes sobre las excursiones en Merzouga</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="bg ll" aria-hidden="true"></div><div className="bg rr" aria-hidden="true"></div><div className="bg tl2" aria-hidden="true"></div><div className="bg tr2" aria-hidden="true"></div><div className="bg tc2" aria-hidden="true"></div>
      <h2>¿Listo para una aventura inolvidable?</h2><p>Reserve ahora y descubra la magia de una excursión por el desierto de Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/es" aria-label="Inicio"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/es">Inicio</Link></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><a href="#top">Experiencias</a></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. Todos los derechos reservados.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Vista previa de la imagen"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
