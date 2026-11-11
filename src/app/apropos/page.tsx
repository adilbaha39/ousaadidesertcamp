import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/apropos.css'

export const metadata: Metadata = {
  title: { absolute: "Merzouga Luxury Desert Camp : Notre Histoire | Ousadi" },
  description: "Ousadi, merzouga luxury desert camp : découvrez notre histoire, notre hospitalité marocaine et un camp authentique au cœur du désert de Merzouga, Maroc.",
  alternates: { canonical: "/apropos" },
  openGraph: { title: "Merzouga Luxury Desert Camp : Notre Histoire | Ousadi", description: "Un camp de luxe authentique au cœur du désert de Merzouga : confort, authenticité et hospitalité marocaine.", url: "/apropos", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Merzouga Luxury Desert Camp : Notre Histoire | Ousadi", description: "Un camp de luxe authentique au cœur du désert de Merzouga : confort, authenticité et hospitalité marocaine." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousadi Luxury Desert Camp",
      "description": "Merzouga luxury desert camp : tentes confortables, hospitalité marocaine et expériences authentiques dans le désert.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "Merzouga, Maroc",
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "AboutPage",
      "name": "À propos du camp Ousadi, Merzouga"
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
          "name": "À propos",
          "item": "https://osaadiluxurydesertcamp.com/apropos"
        }
      ]
    }
  ]
}

export default function AProposPage() {
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
      <Link className="logo" href="/" aria-label="Ousadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><Link href="/experiences">Expériences</Link></li><li><Link href="/galerie">Galerie</Link></li><li><a href="#top" className="active">À propos</a></li><li><Link href="/contact">Contact</Link></li></ul></nav>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Tentes du camp Ousadi éclairées de lanternes à Merzouga"></div>
      <div className="hero-txt"><h1>À propos</h1>
      <p>Une expérience authentique au cœur du désert marocain de Merzouga</p><div className="hl"><i></i></div></div>
      </section>
      <section className="story rv">
      <i className="pat"></i>
      <div><h2>Notre histoire</h2><div className="dl"><i></i></div>
      <p>OUSADI Luxury Desert Camp est bien plus qu’un campement, c’est une invitation à découvrir la magie du désert de Merzouga.</p>
      <p>Inspiré par la culture marocaine et la beauté infinie du Sahara, notre luxury desert camp à Merzouga vous offre une expérience unique, alliant confort, authenticité et hospitalité chaleureuse.</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a></div>
      <figure><Image src="/images/caravane-de-dromadaires-dans-les-dunes-de-merzouga-au-coucher-du-solei.jpg" width={1040} height={524} sizes="(max-width: 1000px) 100vw, 50vw" alt="Caravane de dromadaires dans les dunes de Merzouga au coucher du soleil" /></figure>
      </section>
      <section className="why rv">
      <h2>Pourquoi choisir OUSADI à Merzouga ?</h2><div className="dl"><i></i></div>
      <div className="cards">
      <div className="cd"><div><svg className="i"><use href="#tent" /></svg>Un cadre unique au Sahara</div></div>
      <div className="cd"><div><svg className="i"><use href="#star" /></svg>Une hospitalité marocaine chaleureuse</div></div>
      <div className="cd"><div><svg className="i"><use href="#gem" /></svg>Un hébergement confortable</div></div>
      <div className="cd"><div><svg className="i"><use href="#lotus" /></svg>Des expériences inoubliables</div></div>
      </div>
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="pat"></i>
      <div className="tx"><h2>Vivez la magie du désert <em>avec OUSADI Luxury Desert Camp à Merzouga</em></h2>
      <p>Une aventure authentique, un souvenir pour la vie…</p>
      <a className="btn gold" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver dès maintenant</a></div>
      <div className="pic" role="img" aria-label="Salon marocain sous tente au camp de luxe de Merzouga"></div>
      <svg className="cv" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M24 0C15 28 8 56 0 100" fill="none" stroke="#ecc473" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><Link href="/experiences">Expériences</Link></li><li><Link href="/galerie">Galerie</Link></li><li><a href="#top">À propos</a></li><li><Link href="/contact">Contact</Link></li></ul>
      <div className="soc"><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="Tripadvisor"><svg className="i"><use href="#ta" /></svg></a></div>
      <div className="loc"><svg className="i"><use href="#pin" /></svg>Merzouga, Maroc</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
