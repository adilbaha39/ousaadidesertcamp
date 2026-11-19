import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/home.css'

export const metadata: Metadata = {
  title: { absolute: "Campamento de Lujo en Merzouga | Ousaadi Desert Camp" },
  description: "Ousaadi, campamento de lujo en el desierto de Merzouga: jaimas confortables, cocina marroquí, excursiones en camello y 4x4, noches estrelladas. Reserve por WhatsApp.",
  alternates: { canonical: "/es", languages: { fr: "/", en: "/en", es: "/es", ar: "/ar", 'x-default': "/" } },
  openGraph: { title: "Campamento de Lujo en Merzouga | Ousaadi Desert Camp", description: "Ousaadi, campamento de lujo en el desierto de Merzouga: jaimas confortables, cocina marroquí, excursiones en camello y 4x4, noches estrelladas. Reserve por WhatsApp.", url: "/es", siteName: SITE.name, locale: 'es_ES', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Campamento de Lujo en Merzouga | Ousaadi Desert Camp", description: "Ousaadi, campamento de lujo en el desierto de Merzouga: jaimas confortables, cocina marroquí, excursiones en camello y 4x4, noches estrelladas. Reserve por WhatsApp." },
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
      "@type": "WebPage",
      "name": "Campamento de Lujo en Merzouga | Ousaadi Desert Camp",
      "url": "https://osaadiluxurydesertcamp.com/es",
      "inLanguage": "es"
    }
  ]
}

export default function HomePageEs() {
  return (
    <div className="pg-home" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 46 32"><path d="M3 29 23 5l20 24z M13 29 23 14l10 15M23 5v-3M18 29l5-9 5 9" fill="none" stroke="currentColor" /></symbol>
      <symbol id="tent" viewBox="0 0 24 24"><path d="M3 20 12 4l9 16zM12 20v-8M8 20l4-8 4 8" /></symbol>
      <symbol id="bowl" viewBox="0 0 24 24"><path d="M4 12h16a8 8 0 0 1-16 0zM8 9c0-2 1.500-2 1.500-4M12 9c0-2 1.500-2 1.500-4M16 9c0-2 1.500-2 1.500-4" /></symbol>
      <symbol id="camel" viewBox="0 0 24 24"><path d="M2 21v-6l2-1 1-5 3 3 3-1 2-5 3 1 1 4 4 2v8h-1.500v-6l-1.500-.5V21H15v-5H9v5H7.500v-5L5 16v5z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="suv" viewBox="0 0 24 24"><path d="M3 15l1.500-5.500h13L21 15v4H3zM6 10V7h10l1.500 3M3 15h18" /><circle cx="7.500" cy="19" r="2" fill="#fbe8c8" /><circle cx="16.500" cy="19" r="2" fill="#fbe8c8" /></symbol>
      <symbol id="star" viewBox="0 0 24 24"><path d="m12 2 3 7 7 .6-5.400 4.700L18.200 22 12 18l-6.200 4 1.600-7.700L2 9.600 9 9z" fill="currentColor" /></symbol>
      <symbol id="gem" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6" /></symbol>
      <symbol id="shield" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.500 9-8 11-4.500-2-8-6-8-11V5zM8.500 12l2.500 2.500 4.500-5" /></symbol>
      <symbol id="snow" viewBox="0 0 24 24"><path d="M12 2v20M3.300 7l17.400 10M3.300 17 20.700 7M9 4l3 2 3-2M9 20l3-2 3 2M3 10l3 .5L5 13.500M21 10l-3 .5 1 3" /></symbol>
      <symbol id="heart" viewBox="0 0 24 24"><path d="M12 21s-8-5.500-8-11a4.500 4.500 0 0 1 8-2.500A4.500 4.500 0 0 1 20 10c0 5.500-8 11-8 11z" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="dn" viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#1c070b" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <a className="logo" href="#top" aria-label="Ousaadi Luxury Desert Camp"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></a>
      <nav id="nav" aria-label="Navegación principal"><ul>
      <li><a href="#top" className="active">Inicio</a></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul></nav>
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
      <div className="hero-img" role="img" aria-label="Jaimas del campamento iluminadas al atardecer en Merzouga"></div>
      <i className="orn tl"></i>
      <div className="hero-txt">
      <div className="eyebrow">Viva una experiencia única en el desierto de Merzouga</div>
      <h1>OUSAADI</h1><h2>LUXURY DESERT CAMP</h2>
      <p>Una estancia inolvidable en un campamento en el desierto de Merzouga, en el corazón de Marruecos</p>
      <div className="acts"><a className="btn wine" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <a className="btn ghost" href="#alojamiento">Descubrir el campamento <svg className="i" style={{fontSize:"18px"}}><use href="#dn" /></svg></a></div>
      </div>
      <i className="orn bl" style={{bottom:"-2%"}}></i><i className="orn br" style={{bottom:"-2%"}}></i>
      </section>
      <section className="feat rv">
      <div><svg className="i"><use href="#tent" /></svg>Jaimas Confortables</div>
      <div><svg className="i"><use href="#bowl" /></svg>Cocina Marroquí</div>
      <div><svg className="i"><use href="#camel" /></svg>Paseos en Camello</div>
      <div><svg className="i"><use href="#suv" /></svg>Excursiones en 4x4</div>
      <div><svg className="i"><use href="#star" /></svg>Cielo Estrellado</div>
      </section>
      <section className="hb rv" id="alojamiento">
      <div><div className="ln"></div><h3 className="t">Nuestro Alojamiento en Merzouga</h3>
      <p>Elegantes y confortables jaimas de lujo para una estancia auténtica en el desierto de Merzouga.</p>
      <Link className="btn wine" href="/es/tiendas-de-lujo-merzouga" style={{fontSize:"14px",padding:"10px 20px"}}>Ver las Jaimas <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></Link></div>
      <div className="rooms">
      <div className="ph"><Image src="/images/tente-de-luxe-avec-lits-blancs-et-lanterne-a-merzouga.webp" width={420} height={390} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima de lujo con camas blancas y un farol en Merzouga" /></div>
      <div className="ph"><Image src="/images/tente-avec-lit-bordeaux-au-camp-ousaadi-merzouga.webp" width={470} height={420} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima con cama burdeos en el campamento Ousaadi, Merzouga" /></div>
      <div className="ph"><Image src="/images/tente-avec-lit-bleu-marine-luxury-desert-camp-merzouga.webp" width={372} height={450} sizes="(max-width: 1000px) 100vw, 50vw" alt="Jaima con cama azul marino, campamento de lujo en Merzouga" /></div>
      </div>
      </section>
      <section className="exp rv" id="experiences">
      <i className="orn tl" style={{top:"-40px"}}></i><i className="orn tr" style={{top:"-40px"}}></i>
      <h3 className="t">Experiencias en el Desierto de Merzouga</h3>
      <p>Paseos en camello, excursiones en 4x4 por las dunas del Erg Chebbi, hogueras y noches estrelladas</p>
      <h4 className="sr">Fotos de Merzouga: nuestro campamento y el desierto</h4>
      <div className="gal" id="galeria">
      <div className="ph"><Image src="/images/balade-a-dromadaire-au-coucher-du-soleil-dans-le-desert-de-merzouga.webp" width={474} height={274} sizes="(max-width: 1000px) 100vw, 50vw" alt="Paseo en camello al atardecer en el desierto de Merzouga" /></div>
      <div className="ph"><Image src="/images/allee-du-camp-ousaadi-eclairee-par-des-lanternes-merzouga.webp" width={456} height={284} sizes="(max-width: 1000px) 100vw, 50vw" alt="Camino del campamento Ousaadi iluminado con faroles, Merzouga" /></div>
      <div className="ph"><Image src="/images/excursion-en-4x4-dans-les-dunes-de-lerg-chebbi-a-merzouga.webp" width={452} height={284} sizes="(max-width: 1000px) 100vw, 50vw" alt="Excursión en 4x4 por las dunas del Erg Chebbi, Merzouga" /></div>
      <div className="ph"><Image src="/images/feu-de-camp-et-nuit-etoilee-au-camp-de-luxe-de-merzouga.webp" width={450} height={300} sizes="(max-width: 1000px) 100vw, 50vw" alt="Hoguera y noche estrellada en un campamento de lujo en Merzouga" /></div>
      </div>
      </section>
      <section className="why rv" id="sobre-nosotros">
      <i className="orn tl"></i><i className="orn br" style={{bottom:"0"}}></i>
      <div><h3 className="t">¿Por qué elegir OUSAADI en Merzouga?</h3><p>Su campamento de lujo en Merzouga: una experiencia auténtica y una cálida bienvenida</p></div>
      <ul>
      <li><svg className="i"><use href="#gem" /></svg>Confort<br />&amp; Elegancia</li>
      <li><svg className="i"><use href="#shield" /></svg>Autenticidad<br />Marroquí</li>
      <li><svg className="i"><use href="#snow" /></svg>Naturaleza<br />Preservada</li>
      <li><svg className="i"><use href="#heart" /></svg>Hospitalidad<br />Excepcional</li>
      </ul>
      </section>
      <section className="cta" id="contact">
      <h3>Reserve ahora su estancia en el campamento</h3><p>y viva una aventura inolvidable en el desierto de Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
      <div className="lant" aria-hidden="true"></div>
      </section>
      </main>
      <footer>
      <div className="ft">
      <a className="logo" href="#top" aria-label="Retour en haut"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></a>
      <ul><li><a href="#top">Inicio</a></li><li><Link href="/es/tiendas-de-lujo-merzouga">Alojamiento</Link></li><li><Link href="/es/excursiones-merzouga">Experiencias</Link></li><li><Link href="/es/fotos-merzouga">Galería</Link></li><li><Link href="/es/campamento-lujo-merzouga">Sobre nosotros</Link></li><li><Link href="/es/reservar-merzouga">Contacto</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hola, me gustaría reservar una estancia en el campamento Ousaadi en Merzouga.")}><svg className="i"><use href="#wa" /></svg>Reservar por WhatsApp</a>
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
