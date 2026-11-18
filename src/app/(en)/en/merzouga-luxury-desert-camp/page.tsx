import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/apropos.css'

export const metadata: Metadata = {
  title: { absolute: "About Ousaadi | Our Merzouga Desert Camp Story" },
  description: "Discover the story behind Ousaadi, a Merzouga desert camp inspired by Moroccan culture: authentic comfort, warm hospitality and a unique setting in the Sahara.",
  alternates: { canonical: "/en/merzouga-luxury-desert-camp", languages: { fr: "/merzouga-luxury-desert-camp", en: "/en/merzouga-luxury-desert-camp", es: "/es/campamento-lujo-merzouga", ar: "/ar/merzouga-luxury-desert-camp", 'x-default': "/apropos" } },
  openGraph: { title: "About Ousaadi | Our Merzouga Desert Camp Story", description: "Discover the story behind Ousaadi, a Merzouga desert camp inspired by Moroccan culture: authentic comfort, warm hospitality and a unique setting in the Sahara.", url: "/en/merzouga-luxury-desert-camp", siteName: SITE.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: "About Ousaadi | Our Merzouga Desert Camp Story", description: "Discover the story behind Ousaadi, a Merzouga desert camp inspired by Moroccan culture: authentic comfort, warm hospitality and a unique setting in the Sahara." },
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
      "@type": "AboutPage",
      "name": "About Ousaadi | Our Merzouga Desert Camp Story",
      "url": "https://osaadiluxurydesertcamp.com/en/merzouga-luxury-desert-camp",
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
          "name": "About",
          "item": "https://osaadiluxurydesertcamp.com/en/merzouga-luxury-desert-camp"
        }
      ]
    }
  ]
}

export default function AboutPageEn() {
  return (
    <div className="pg-apropos" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <Link className="logo" href="/en" aria-label="Ousaadi Luxury Desert Camp — home"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Main navigation"><ul>
      <li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><a href="#top" className="active">About</a></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul></nav>
      <div className="langs" role="group" aria-label="Language"><a href="/merzouga-luxury-desert-camp" hrefLang="fr" lang="fr">FR</a><a href="/en/merzouga-luxury-desert-camp" hrefLang="en" lang="en" className="on" aria-current="true">EN</a><a href="/es/campamento-lujo-merzouga" hrefLang="es" lang="es">ES</a><a href="/ar/merzouga-luxury-desert-camp" hrefLang="ar" lang="ar">AR</a></div>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a>
      <button className="burger" id="bg" aria-label="Open menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Ousaadi camp tents lit by lanterns in Merzouga"></div>
      <div className="hero-txt"><h1>About Ousaadi</h1>
      <p>An authentic experience at our Merzouga desert camp, in the heart of the Moroccan Sahara</p><div className="hl"><i></i></div></div>
      </section>
      <section className="story rv">
      <i className="pat"></i>
      <div><h2>Our Story</h2><div className="dl"><i></i></div>
      <p>OUSAADI Luxury Desert Camp is much more than a campsite: it is an invitation to discover the magic of the Merzouga desert.</p>
      <p>Inspired by Moroccan culture and the endless beauty of the Sahara, our Merzouga desert camp offers a unique experience that combines comfort, authenticity and warm hospitality.</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book on WhatsApp</a></div>
      <figure><Image src="/images/caravane-de-dromadaires-dans-les-dunes-de-merzouga-au-coucher-du-solei.webp" width={1040} height={524} sizes="(max-width: 1000px) 100vw, 50vw" alt="Camel caravan in the Merzouga dunes at sunset" /></figure>
      </section>
      <section className="why rv">
      <h2>Why choose OUSAADI in Merzouga?</h2><div className="dl"><i></i></div>
      <div className="cards">
      <div className="cd"><div><svg className="i"><use href="#tent" /></svg>A unique setting in the Sahara</div></div>
      <div className="cd"><div><svg className="i"><use href="#star" /></svg>Warm Moroccan hospitality</div></div>
      <div className="cd"><div><svg className="i"><use href="#gem" /></svg>Comfortable accommodation</div></div>
      <div className="cd"><div><svg className="i"><use href="#lotus" /></svg>Unforgettable experiences</div></div>
      </div>
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="pat"></i>
      <div className="tx"><h2>Experience the magic of the desert <em>with OUSAADI Luxury Desert Camp in Merzouga</em></h2>
      <p>An authentic adventure, a memory for life…</p>
      <a className="btn gold" target="_blank" rel="noopener" href={wa("Hello, I would like to book a stay at Ousaadi desert camp in Merzouga.")}><svg className="i"><use href="#wa" /></svg>Book now</a></div>
      <div className="pic" role="img" aria-label="Moroccan lounge inside a tent at the luxury camp in Merzouga"></div>
      <svg className="cv" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M24 0C15 28 8 56 0 100" fill="none" stroke="#ecc473" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/en" aria-label="Home"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/en">Home</Link></li><li><Link href="/en/luxury-tents-merzouga">Accommodation</Link></li><li><Link href="/en/excursions-merzouga">Experiences</Link></li><li><Link href="/en/photos-merzouga">Gallery</Link></li><li><a href="#top">About</a></li><li><Link href="/en/book-merzouga">Contact</Link></li></ul>
      <div className="soc"><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="Tripadvisor"><svg className="i"><use href="#ta" /></svg></a></div>
      <div className="loc"><svg className="i"><use href="#pin" /></svg>Merzouga, Morocco</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
