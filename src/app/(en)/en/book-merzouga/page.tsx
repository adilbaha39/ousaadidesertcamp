import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/contact.css'

export const metadata: Metadata = {
  title: { absolute: "Book Merzouga Luxury Desert Camp | Contact Ousaadi" },
  description: "Book Merzouga desert camp with Ousaadi: contact us on WhatsApp at +212 661 175 228. Luxury desert camp in Merzouga, Morocco, open every day, 24/7.",
  alternates: { canonical: "/en/book-merzouga", languages: { fr: "/reservation-merzouga", en: "/en/book-merzouga", es: "/es/reservar-merzouga", ar: "/ar/book-merzouga", 'x-default': "/contact" } },
  openGraph: { title: "Book Merzouga Luxury Desert Camp | Contact Ousaadi", description: "Book Merzouga desert camp with Ousaadi: contact us on WhatsApp at +212 661 175 228. Luxury desert camp in Merzouga, Morocco, open every day, 24/7.", url: "/en/book-merzouga", siteName: SITE.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Book Merzouga Luxury Desert Camp | Contact Ousaadi", description: "Book Merzouga desert camp with Ousaadi: contact us on WhatsApp at +212 661 175 228. Luxury desert camp in Merzouga, Morocco, open every day, 24/7." },
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
      "name": "Book Merzouga Luxury Desert Camp | Contact Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/en/book-merzouga",
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
          "name": "Contact",
          "item": "https://osaadiluxurydesertcamp.com/en/book-merzouga"
        }
      ]
    }
  ]
}

export default function ContactPageEn() {
  return (
    <div className="pg-contact" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <Link className="logo" href="/en" aria-label="Ousaadi Luxury Desert Camp — home"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Main navigation"><ul>
      <li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><a href="#top" className="active">Contact</a></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">EN ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <button className="burger" id="bg" aria-label="Open menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Ousaadi camp pathway lit by lanterns in Merzouga"></div>
      <div className="hero-txt"><h1>Contact &amp; <span>Reservation</span></h1>
      <p>Your adventure in the Merzouga desert starts here…</p><div className="hl"><i></i></div>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="Book Merzouga desert camp on WhatsApp" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a></div>
      </section>
      <section className="info rv">
      <div><h2>Our Information</h2><div className="dl"><i></i></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#pin" /></svg></div><div><b>Our Location</b><span>Merzouga, Morocco</span></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#phone" /></svg></div><div><b>Phone / WhatsApp</b><a href="tel:+212661175228">+212 661 175 228</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#mail" /></svg></div><div><b>Email</b><a id="mail" href={`mailto:${SITE.email}`}>osaadiluxurydesertcamp@gmail.com</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#clock" /></svg></div><div><b>Availability</b><span>Every day, 24/7</span></div></div></div>
      <div className="book"><i className="orn tr" style={{opacity:".4"}}></i>
      <h2><svg className="i"><use href="#wa" /></svg>Book your stay now</h2>
      <p className="l">Click the button below to contact us directly on WhatsApp.</p>
      <a className="btn green" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp <svg className="i" style={{fontSize:"20px"}}><use href="#rt" /></svg></a>
      <div className="sep"><svg className="i"><use href="#star8" /></svg></div>
      <small>We look forward to welcoming you to our camp</small></div>
      </section>
      <Image src="/images/dromadaires-dans-les-dunes-au-coucher-du-soleil-desert-de-merzouga.webp" width={2048} height={144} sizes="(max-width: 1000px) 100vw, 50vw" className="dunes" alt="Camels on the dunes at sunset, Merzouga desert" />
      <section className="find rv">
      <div className="map"><iframe title="Map of Ousaadi camp in Merzouga, Morocco" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Ousaadi%20desert%20camp%2C%20Merzouga&amp;t=k&amp;z=13&amp;output=embed"></iframe>
      </div>
      <div className="t"><h2>How to find us</h2><div className="dl"><i></i></div>
      <p>Our camp is located in Merzouga, in the heart of the Moroccan desert, easily accessible from Erfoud.</p>
      <ul><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>Close to the big dunes</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>Easy access by car</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>Warm welcome on site</li></ul></div>
      <div className="lant" aria-hidden="true"></div>
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="orn tl"></i><i className="orn tr"></i><div className="cam" aria-hidden="true"></div>
      <h2>Ready for an unforgettable experience?</h2>
      <p>Book your Merzouga desert camp stay now and live the magic of the desert.</p>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="Book Merzouga desert camp on WhatsApp" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/en" aria-label="Home"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><Link href="/en/merzouga-luxury-desert-camp">About</Link></li><li><a href="#top">Contact</a></li></ul>
      <div className="soc"><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="Tripadvisor"><svg className="i"><use href="#ta" /></svg></a></div>
      <div className="loc"><svg className="i"><use href="#pin" /></svg>Merzouga, Morocco</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
