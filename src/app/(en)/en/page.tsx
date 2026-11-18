import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/home.css'

export const metadata: Metadata = {
  title: { absolute: "Merzouga Luxury Desert Camp | Ousaadi, Morocco" },
  description: "Ousaadi Merzouga luxury desert camp in Morocco: comfortable tents, Moroccan cuisine, camel rides, 4x4 excursions and starry nights in the Sahara. Book on WhatsApp.",
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en", es: "/es", ar: "/ar", 'x-default': "/" } },
  openGraph: { title: "Merzouga Luxury Desert Camp | Ousaadi, Morocco", description: "Ousaadi Merzouga luxury desert camp in Morocco: comfortable tents, Moroccan cuisine, camel rides, 4x4 excursions and starry nights in the Sahara. Book on WhatsApp.", url: "/en", siteName: SITE.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Merzouga Luxury Desert Camp | Ousaadi, Morocco", description: "Ousaadi Merzouga luxury desert camp in Morocco: comfortable tents, Moroccan cuisine, camel rides, 4x4 excursions and starry nights in the Sahara. Book on WhatsApp." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "Luxury Merzouga desert camp in Morocco: comfortable tents, Moroccan cuisine, camel rides, 4x4 desert excursions and starry nights.",
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
      "@type": "WebPage",
      "name": "Merzouga Luxury Desert Camp | Ousaadi, Morocco",
      "url": "https://osaadiluxurydesertcamp.com/en",
      "inLanguage": "en"
    }
  ]
}

export default function HomePageEn() {
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
      <a className="logo" href="#top" aria-label="Ousaadi Luxury Desert Camp — home"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></a>
      <nav id="nav" aria-label="Main navigation"><ul>
      <li><a href="#top" className="active">Home</a></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul></nav>
      <div className="langs" role="group" aria-label="Language"><a href="/" hrefLang="fr" lang="fr">FR</a><a href="/en" hrefLang="en" lang="en" className="on" aria-current="true">EN</a><a href="/es" hrefLang="es" lang="es">ES</a><a href="/ar" hrefLang="ar" lang="ar">AR</a></div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <button className="burger" id="bg" aria-label="Open menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Camp tents lit up at dusk in Merzouga"></div>
      <i className="orn tl"></i>
      <div className="hero-txt">
      <div className="eyebrow">Live a unique experience in the Merzouga desert</div>
      <h1>OUSAADI</h1><h2>LUXURY DESERT CAMP</h2>
      <p>An unforgettable stay at a Merzouga desert camp in the heart of Morocco</p>
      <div className="acts"><a className="btn wine" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <a className="btn ghost" href="#accommodation">Discover the Camp <svg className="i" style={{fontSize:"18px"}}><use href="#dn" /></svg></a></div>
      </div>
      <i className="orn bl" style={{bottom:"-2%"}}></i><i className="orn br" style={{bottom:"-2%"}}></i>
      </section>
      <section className="feat rv">
      <div><svg className="i"><use href="#tent" /></svg>Comfortable Tents</div>
      <div><svg className="i"><use href="#bowl" /></svg>Moroccan Cuisine</div>
      <div><svg className="i"><use href="#camel" /></svg>Camel Treks</div>
      <div><svg className="i"><use href="#suv" /></svg>4x4 Excursions</div>
      <div><svg className="i"><use href="#star" /></svg>Starry Skies</div>
      </section>
      <section className="hb rv" id="accommodation">
      <div><div className="ln"></div><h3 className="t">Our Accommodation in Merzouga</h3>
      <p>Elegant, comfortable luxury tents for an authentic stay in the Merzouga desert.</p>
      <Link className="btn wine" href="/en/luxury-tents-merzouga" style={{fontSize:"14px",padding:"10px 20px"}}>See the Tents <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></Link></div>
      <div className="rooms">
      <div className="ph"><Image src="/images/tente-de-luxe-avec-lits-blancs-et-lanterne-a-merzouga.webp" width={420} height={390} sizes="(max-width: 1000px) 100vw, 50vw" alt="Luxury tent with white beds and a lantern in Merzouga" /></div>
      <div className="ph"><Image src="/images/tente-avec-lit-bordeaux-au-camp-ousaadi-merzouga.webp" width={470} height={420} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tent with a burgundy bed at Ousaadi camp, Merzouga" /></div>
      <div className="ph"><Image src="/images/tente-avec-lit-bleu-marine-luxury-desert-camp-merzouga.webp" width={372} height={450} sizes="(max-width: 1000px) 100vw, 50vw" alt="Tent with a navy blue bed, luxury desert camp Merzouga" /></div>
      </div>
      </section>
      <section className="exp rv" id="experiences">
      <i className="orn tl" style={{top:"-40px"}}></i><i className="orn tr" style={{top:"-40px"}}></i>
      <h3 className="t">Merzouga Desert Excursions &amp; Experiences</h3>
      <p>Camel treks, 4x4 desert excursions across the Erg Chebbi dunes, campfires and starry nights</p>
      <h4 className="sr">Merzouga photos: our camp and the desert</h4>
      <div className="gal" id="gallery">
      <div className="ph"><Image src="/images/balade-a-dromadaire-au-coucher-du-soleil-dans-le-desert-de-merzouga.webp" width={474} height={274} sizes="(max-width: 1000px) 100vw, 50vw" alt="Camel trek at sunset in the Merzouga desert" /></div>
      <div className="ph"><Image src="/images/allee-du-camp-ousaadi-eclairee-par-des-lanternes-merzouga.webp" width={456} height={284} sizes="(max-width: 1000px) 100vw, 50vw" alt="Ousaadi camp pathway lit by lanterns, Merzouga" /></div>
      <div className="ph"><Image src="/images/excursion-en-4x4-dans-les-dunes-de-lerg-chebbi-a-merzouga.webp" width={452} height={284} sizes="(max-width: 1000px) 100vw, 50vw" alt="4x4 desert excursion on the Erg Chebbi dunes, Merzouga" /></div>
      <div className="ph"><Image src="/images/feu-de-camp-et-nuit-etoilee-au-camp-de-luxe-de-merzouga.webp" width={450} height={300} sizes="(max-width: 1000px) 100vw, 50vw" alt="Campfire and starry night at a luxury camp in Merzouga" /></div>
      </div>
      </section>
      <section className="why rv" id="about">
      <i className="orn tl"></i><i className="orn br" style={{bottom:"0"}}></i>
      <div><h3 className="t">Why Choose OUSAADI in Merzouga?</h3><p>Your luxury Merzouga desert camp: an authentic experience and a warm welcome</p></div>
      <ul>
      <li><svg className="i"><use href="#gem" /></svg>Comfort<br />&amp; Elegance</li>
      <li><svg className="i"><use href="#shield" /></svg>Moroccan<br />Authenticity</li>
      <li><svg className="i"><use href="#snow" /></svg>Preserved<br />Nature</li>
      <li><svg className="i"><use href="#heart" /></svg>Exceptional<br />Hospitality</li>
      </ul>
      </section>
      <section className="cta" id="contact">
      <h3>Book your Merzouga desert camp stay now</h3><p>and live an unforgettable adventure in the Merzouga desert</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <div className="lant" aria-hidden="true"></div>
      </section>
      </main>
      <footer>
      <div className="ft">
      <a className="logo" href="#top" aria-label="Back to top"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></a>
      <ul><li><a href="#top">Home</a></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. All rights reserved.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Image preview"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
