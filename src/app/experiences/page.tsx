import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/experiences.css'

export const metadata: Metadata = {
  title: { absolute: "Désert de Merzouga : Excursions & Activités | Ousadi Desert Camp" },
  description: "Désert de Merzouga : balade à dromadaire, excursion 4x4 dans l’erg Chebbi, sandboard, coucher de soleil et nuits étoilées avec Ousadi. Réservez sur WhatsApp.",
  alternates: { canonical: "/experiences" },
  openGraph: { title: "Désert de Merzouga : Excursions & Activités | Ousadi Desert Camp", description: "Balade à dromadaire, excursion 4x4 dans l’erg Chebbi, sandboard, coucher de soleil et nuits étoilées dans le désert de Merzouga.", url: "/experiences", siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "Désert de Merzouga : Excursions & Activités | Ousadi Desert Camp", description: "Balade à dromadaire, excursion 4x4 dans l’erg Chebbi, sandboard, coucher de soleil et nuits étoilées dans le désert de Merzouga." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
      "name": "Ousadi Luxury Desert Camp",
      "description": "Luxury desert camp à Merzouga, Maroc : balade à dromadaire, excursion 4x4, sandboard, coucher de soleil, observation des étoiles et cuisine marocaine.",
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
          "name": "Expériences",
          "item": "https://osaadiluxurydesertcamp.com/experiences"
        }
      ]
    }
  ]
}

export default function ExperiencesPage() {
  return (
    <div className="pg-experiences" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <Link className="logo" href="/" aria-label="Ousadi Luxury Desert Camp — accueil"><svg className="i lm"><use href="#logo" /></svg><b>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="Navigation principale"><ul>
      <li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><a href="#top" className="active">Expériences</a></li><li><Link href="/galerie">Galerie</Link></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul></nav>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <button className="burger" id="bg" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="Caravane de dromadaires au coucher du soleil dans le désert de Merzouga"></div>
      <i className="orn tl"></i>
      <div className="hero-txt"><h1>Nos Expériences</h1>
      <p>Vivez des moments inoubliables au cœur du désert de Merzouga</p><div className="hl"><i></i></div></div>
      </section>
      <section className="cards" aria-label="Activités dans le désert de Merzouga">
      <i className="orn tl" style={{top:"-10px"}}></i><i className="orn tr" style={{top:"-10px"}}></i>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une balade à dromadaire à Merzouga.")}><div className="in"><Image src="/images/balade-a-dos-de-dromadaire-dans-les-dunes-de-merzouga.jpg" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Balade à dos de dromadaire dans les dunes de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#camel" /></svg>Balade à Dos de Dromadaire</h3><p>Explorez les dunes dorées de Merzouga à dos de dromadaire.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une excursion 4x4 à Merzouga.")}><div className="in"><Image src="/images/excursion-en-4x4-dans-les-dunes-de-lerg-chebbi-a-merzouga-15659f.jpg" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Excursion en 4x4 dans les dunes de l’erg Chebbi à Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#suv" /></svg>Excursion 4x4 à Merzouga</h3><p>Partez à l’aventure dans les dunes de l’erg Chebbi.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une session de sandboard à Merzouga.")}><div className="in"><Image src="/images/sandboard-sur-les-dunes-de-merzouga.jpg" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="Sandboard sur les dunes de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#board" /></svg>Sandboard</h3><p>Vivez des sensations fortes sur les dunes.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite en savoir plus sur le coucher de soleil dans le désert de Merzouga.")}><div className="in"><Image src="/images/coucher-de-soleil-sur-le-desert-de-merzouga.jpg" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Coucher de soleil sur le désert de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#sun" /></svg>Coucher de Soleil</h3><p>Admirez, sur les dunes de Merzouga, un spectacle à couper le souffle.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une soirée d'observation des étoiles à Merzouga.")}><div className="in"><Image src="/images/ciel-etoile-au-dessus-du-camp-de-luxe-de-merzouga.jpg" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Ciel étoilé au-dessus du camp de luxe de Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#scope" /></svg>Observation des Étoiles</h3><p>Contemplez un ciel étoilé unique dans le désert de Merzouga.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver une soirée autour du feu à Merzouga.")}><div className="in"><Image src="/images/soiree-autour-du-feu-de-camp-sous-les-etoiles-camp-ousadi-a-merzouga.jpg" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="Soirée autour du feu de camp sous les étoiles, camp Ousadi à Merzouga" />
      <div className="tx"><h3><svg className="i"><use href="#fire" /></svg>Soirée Autour du Feu</h3><p>Partagez des moments chaleureux sous les étoiles.</p></div></div></a>
      </section>
      <section className="cul rv">
      <div className="pic"><Image src="/images/table-dressee-sous-la-tente-restaurant-du-camp-ousadi-cuisine-marocain.jpg" width={994} height={506} sizes="(max-width: 1000px) 100vw, 50vw" alt="Table dressée sous la tente restaurant du camp Ousadi, cuisine marocaine à Merzouga" /></div>
      <div className="t"><h2 className="t">Une Expérience Culinaire Authentique</h2>
      <p>Savourez une délicieuse cuisine marocaine, préparée avec soin pour enrichir votre séjour dans le désert de Merzouga.</p>
      <div className="cf"><div><span className="ci"><svg className="i"><use href="#cloche" /></svg></span>Cuisine<br />Marocaine</div><div><span className="ci"><svg className="i"><use href="#cup" /></svg></span>Thé à la Menthe</div><div><span className="ci"><svg className="i"><use href="#table" /></svg></span>Repas en Plein Air</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite en savoir plus sur la cuisine marocaine du camp Ousadi à Merzouga.")}>Découvrir notre cuisine <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      <i className="orn bl" style={{bottom:"-20px",right:"0",left:"auto",transform:"scale(-1)"}}></i>
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="bg ll" aria-hidden="true"></div><div className="bg rr" aria-hidden="true"></div><div className="bg tl2" aria-hidden="true"></div><div className="bg tr2" aria-hidden="true"></div><div className="bg tc2" aria-hidden="true"></div>
      <h2>Prêt pour une aventure inoubliable ?</h2><p>Réservez dès maintenant votre séjour au cœur du désert de Merzouga</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/" aria-label="Accueil"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/">Accueil</Link></li><li><Link href="/hebergement">Hébergement</Link></li><li><a href="#top">Expériences</a></li><li><Link href="/galerie">Galerie</Link></li><li><Link href="/apropos">À propos</Link></li><li><Link href="/contact">Contact</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("Bonjour, je souhaite réserver un séjour au camp Ousadi à Merzouga.")}><svg className="i"><use href="#wa" /></svg>Réserver sur WhatsApp</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousadi Luxury Desert Camp. Tous droits réservés.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="Aperçu de l'image"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
