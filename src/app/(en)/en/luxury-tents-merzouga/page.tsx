import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/hebergement.css'

export const metadata: Metadata = {
  title: { absolute: "Merzouga Luxury Desert Camp | Luxury Tents in Merzouga" },
  description: "Stay at Ousaadi, a luxury desert camp in Merzouga: luxury, traditional and premium tents with comfortable beds and desert views. Book on WhatsApp.",
  alternates: { canonical: "/en/luxury-tents-merzouga", languages: { fr: "/tentes-de-luxe-merzouga", en: "/en/luxury-tents-merzouga", es: "/es/tiendas-de-lujo-merzouga", ar: "/ar/luxury-tents-merzouga", 'x-default': "/hebergement" } },
  openGraph: { title: "Merzouga Luxury Desert Camp | Luxury Tents in Merzouga", description: "Stay at Ousaadi, a luxury desert camp in Merzouga: luxury, traditional and premium tents with comfortable beds and desert views. Book on WhatsApp.", url: "/en/luxury-tents-merzouga", siteName: SITE.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Merzouga Luxury Desert Camp | Luxury Tents in Merzouga", description: "Stay at Ousaadi, a luxury desert camp in Merzouga: luxury, traditional and premium tents with comfortable beds and desert views. Book on WhatsApp." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Luxury desert camp in Merzouga, Morocco: luxury, traditional and premium tents, Moroccan cuisine and desert experiences.",
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
          "name": "Accommodation",
          "item": "https://osaadiluxurydesertcamp.com/en/luxury-tents-merzouga"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "Merzouga Luxury Desert Camp | Luxury Tents in Merzouga",
      "url": "https://osaadiluxurydesertcamp.com/en/luxury-tents-merzouga",
      "inLanguage": "en"
    }
  ]
}

export default function AccommodationPageEn() {
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
      <Link className="logo" href="/en" aria-label="Ousaadi Luxury Desert Camp — home"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Main navigation"><ul>
      <li><Link href="/en">Home</Link></li><li><a href="#top" className="active">Accommodation</a></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">EN ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a tent at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <button className="burger" id="bg" aria-label="Open menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Inside a luxury tent in Merzouga"></div>
      <div className="hero-txt"><h1>Merzouga Luxury Desert Camp</h1><div className="hl"><i></i></div>
      <p>Comfortable, elegant tents for an unforgettable stay at our luxury desert camp, in the heart of the Moroccan Sahara.</p></div>
      </section>
      <section className="rows">
      <i className="orn tr" style={{top:"25%"}}></i><i className="orn tr" style={{top:"68%",height:"clamp(110px,17vw,230px)"}}></i><i className="orn tl" style={{top:"38%",opacity:".3"}}></i>
      <article className="row rv">
      <div className="pic"><div className="p1"><Image src="/images/tente-luxueuse-avec-lits-confortables-et-fauteuils-camp-de-luxe-a-merz.webp" width={942} height={544} sizes="(max-width: 1000px) 100vw, 50vw" alt="Luxury tent with comfortable beds and armchairs, luxury camp in Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Luxury Tents</h2>
      <p>Enjoy exceptional comfort in our spacious Merzouga tents, tastefully decorated in an authentic Moroccan style.</p>
      <div className="fe"><div><svg className="i"><use href="#bed" /></svg>Comfortable beds</div><div><svg className="i"><use href="#shower" /></svg>Bathroom (private or shared)</div><div><svg className="i"><use href="#snow" /></svg>Optimal comfort</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hello, I would like more information about the Luxury Tents in Merzouga.")}>Learn more <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      </article>
      <article className="row rev rv">
      <div className="pic"><div className="p2"><Image src="/images/tente-traditionnelle-avec-lits-bordeaux-camp-ousaadi-a-merzouga.webp" width={1064} height={534} sizes="(max-width: 1000px) 100vw, 50vw" alt="Traditional tent with burgundy beds, Ousaadi camp in Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Traditional Tents</h2>
      <p>Experience the authentic Merzouga desert in our traditional tents, combining simplicity and Moroccan charm.</p>
      <div className="fe"><div><svg className="i"><use href="#tent" /></svg>Spacious interior</div><div><svg className="i"><use href="#users" /></svg>Ideal for families</div><div><svg className="i"><use href="#leaf" /></svg>Desert views</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hello, I would like more information about the Traditional Tents.")}>Learn more <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      <article className="row rv">
      <div className="pic"><div className="p3"><Image src="/images/tente-premium-eclairee-au-crepuscule-desert-luxury-camp-merzouga.webp" width={952} height={484} sizes="(max-width: 1000px) 100vw, 50vw" alt="Premium tent lit up at dusk, luxury desert camp Merzouga" /></div></div>
      <div className="txt"><div className="ln"></div><h2 className="t">Premium Tents</h2>
      <p>Discover our premium tents at a Merzouga luxury desert camp, designed for a unique blend of luxury and nature.</p>
      <div className="fe"><div><svg className="i"><use href="#gem" /></svg>Elegant design</div><div><svg className="i"><use href="#bed" /></svg>Great comfort</div><div><svg className="i"><use href="#star" /></svg>Unique atmosphere</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Hello, I would like more information about the Premium Tents.")}>Learn more <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      </article>
      </section>
      <section className="eq rv"><i className="orn tl"></i><i className="orn tr"></i>
      <h3>Amenities &amp; Comfort</h3>
      <ul>
      <li><svg className="i"><use href="#bed" /></svg>Comfortable beds</li>
      <li><svg className="i"><use href="#shower" /></svg>Bathroom</li>
      </ul>
      </section>
      <section className="cta" id="contact">
      <h3>Book your stay now</h3><p>and live an unforgettable desert experience in Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hello, I would like to book a tent at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <div className="lant2" aria-hidden="true"></div>
      </section>
      </main>
      <footer>
      <div className="ft">
      <Link className="logo" href="/en" aria-label="Home"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/en">Home</Link></li><li><a href="#top">Accommodation</a></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hello, I would like to book a tent at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. All rights reserved.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Image preview"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
