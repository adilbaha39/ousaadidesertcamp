import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/hebergement.css'

export const metadata: Metadata = {
  title: { absolute: "Campamento de Lujo en Merzouga | Jaimas de Lujo — Ousaadi" },
  description: "Alójese en Ousaadi, campamento de lujo en Merzouga: jaimas de lujo, tradicionales y premium con camas confortables y vistas al desierto. Reserve por WhatsApp.",
  alternates: { canonical: "/es/tiendas-de-lujo-merzouga", languages: { fr: "/tentes-de-luxe-merzouga", en: "/en/luxury-tents-merzouga", es: "/es/tiendas-de-lujo-merzouga", ar: "/ar/luxury-tents-merzouga", 'x-default': "/hebergement" } },
  openGraph: { title: "Campamento de Lujo en Merzouga | Jaimas de Lujo — Ousaadi", description: "Alójese en Ousaadi, campamento de lujo en Merzouga: jaimas de lujo, tradicionales y premium con camas confortables y vistas al desierto. Reserve por WhatsApp.", url: "/es/tiendas-de-lujo-merzouga", siteName: SITE.name, locale: 'es_ES', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Campamento de Lujo en Merzouga | Jaimas de Lujo — Ousaadi", description: "Alójese en Ousaadi, campamento de lujo en Merzouga: jaimas de lujo, tradicionales y premium con camas confortables y vistas al desierto. Reserve por WhatsApp." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
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
          "name": "Alojamiento",
          "item": "https://osaadiluxurydesertcamp.com/es/tiendas-de-lujo-merzouga"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "Campamento de Lujo en Merzouga | Jaimas de Lujo — Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/es/tiendas-de-lujo-merzouga",
      "inLanguage": "es"
    }
  ]
}

export default function AlojamientoPageEs() {
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
      <Link className="logo" href="/es" aria-label="Ousaadi Luxury Desert Camp — inicio"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navegación principal"><ul>
      <li><Link href="/es">Inicio</Link></li><li><a href="#top" className="active">Alojamiento</a></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">ES ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una jaima en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <button className="burger" id="bg" aria-label="Abrir el menú" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Interior de una jaima de lujo en Merzouga"></div>
      <div className="hero-txt"><h1>Campamento de Lujo en Merzouga</h1><div className="hl"><i></i></div>
      <p>Jaimas confortables y elegantes para una estancia inolvidable en nuestro campamento de lujo, en el corazón del Sahara marroquí.</p></div>
      </section>
      <section className="rows">
      <i className="orn tr" style={{top:"25%"}}></i><i className="orn tr" style={{top:"68%",height:"clamp(110px,17vw,230px)"}}></i><i className="orn tl" style={{top:"38%",opacity:".3"}}></i>
      <article className="row rv">
      <div className="pic"><div className="p1"><Image src="/images/tente-luxueuse-avec-lits-confortables-et-fauteuils-camp-de-luxe-a-merz.webp" width={942} height={544} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima de lujo con camas confortables y sillones, campamento de lujo en Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Jaimas de Lujo</h2>
      <p>Disfrute de un confort excepcional en nuestras amplias jaimas de Merzouga, decoradas con gusto en un auténtico estilo marroquí.</p>
      <div className="fe"><div><svg className="i"><use href="#bed" /></svg>Camas confortables</div><div><svg className="i"><use href="#shower" /></svg>Baño (privado o compartido)</div><div><svg className="i"><use href="#snow" /></svg>Confort óptimo</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hola, me gustaría recibir más información sobre las Jaimas de Lujo en Merzouga.")}>Saber más <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      </article>
      <article className="row rev rv">
      <div className="pic"><div className="p2"><Image src="/images/tente-traditionnelle-avec-lits-bordeaux-camp-ousaadi-a-merzouga.webp" width={1064} height={534} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima tradicional con camas burdeos, campamento Ousaadi en Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Jaimas Tradicionales</h2>
      <p>Viva la experiencia auténtica del desierto de Merzouga en nuestras jaimas tradicionales, que unen sencillez y encanto marroquí.</p>
      <div className="fe"><div><svg className="i"><use href="#tent" /></svg>Espacio amplio</div><div><svg className="i"><use href="#users" /></svg>Ideal para familias</div><div><svg className="i"><use href="#leaf" /></svg>Vistas al desierto</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hola, me gustaría recibir más información sobre las Jaimas Tradicionales.")}>Saber más <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      <article className="row rv">
      <div className="pic"><div className="p3"><Image src="/images/tente-premium-eclairee-au-crepuscule-desert-luxury-camp-merzouga.webp" width={952} height={484} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima premium iluminada al atardecer, campamento de lujo en Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Jaimas Premium</h2>
      <p>Descubra nuestras jaimas premium, en un campamento de lujo en Merzouga pensado para una experiencia única entre lujo y naturaleza.</p>
      <div className="fe"><div><svg className="i"><use href="#gem" /></svg>Diseño elegante</div><div><svg className="i"><use href="#bed" /></svg>Gran confort</div><div><svg className="i"><use href="#star" /></svg>Ambiente único</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hola, me gustaría recibir más información sobre las Jaimas Premium.")}>Saber más <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      </section>
      <section className="eq rv"><i className="orn tl"></i><i className="orn tr"></i>
      <h3>Equipamiento &amp; Confort</h3>
      <ul>
      <li><svg className="i"><use href="#bed" /></svg>Camas confortables</li>
      <li><svg className="i"><use href="#shower" /></svg>Baño</li>
      </ul>
      </section>
      <section className="cta" id="contact">
      <h3>Reserve su estancia ahora</h3><p>y viva una inolvidable experiencia en el desierto de Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una jaima en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <div className="lant2" aria-hidden="true"></div>
      </section>
      </main>
      <footer>
      <div className="ft">
      <Link className="logo" href="/es" aria-label="Inicio"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/es">Inicio</Link></li><li><a href="#top">Alojamiento</a></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una jaima en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. Todos los derechos reservados.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Vista previa de la imagen"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
