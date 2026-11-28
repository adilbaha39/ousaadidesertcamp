import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/apropos-ar.css'

export const metadata: Metadata = {
  title: { absolute: "من نحن | قصة مخيم مرزوكة الصحراوي Ousaadi" },
  description: "تعرف على قصة Ousaadi، مخيم صحراوي في مرزوكة مستوحى من الثقافة المغربية: راحة أصيلة، ضيافة دافئة وموقع فريد في الصحراء الكبرى.",
  alternates: { canonical: "/ar/merzouga-luxury-desert-camp", languages: { fr: "/merzouga-luxury-desert-camp", en: "/en/merzouga-luxury-desert-camp", es: "/es/campamento-lujo-merzouga", ar: "/ar/merzouga-luxury-desert-camp", 'x-default': "/merzouga-luxury-desert-camp" } },
  openGraph: { title: "من نحن | قصة مخيم مرزوكة الصحراوي Ousaadi", description: "تعرف على قصة Ousaadi، مخيم صحراوي في مرزوكة مستوحى من الثقافة المغربية: راحة أصيلة، ضيافة دافئة وموقع فريد في الصحراء الكبرى.", url: "/ar/merzouga-luxury-desert-camp", siteName: SITE.name, locale: 'ar_AR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "من نحن | قصة مخيم مرزوكة الصحراوي Ousaadi", description: "تعرف على قصة Ousaadi، مخيم صحراوي في مرزوكة مستوحى من الثقافة المغربية: راحة أصيلة، ضيافة دافئة وموقع فريد في الصحراء الكبرى." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/apropos-hero-img.webp",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "مخيم صحراوي فاخر في مرزوكة، المغرب: خيام مريحة ومطبخ مغربي وجولات على الجمال ورحلات 4x4 وليالٍ مرصعة بالنجوم.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "مرزوكة، المغرب",
      "url": "https://osaadiluxurydesertcamp.com/",
      "email": "osaadiluxurydesertcamp@gmail.com",
    },
    {
      "@type": "AboutPage",
      "name": "من نحن | قصة مخيم مرزوكة الصحراوي Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/ar/merzouga-luxury-desert-camp",
      "inLanguage": "ar"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://osaadiluxurydesertcamp.com/ar"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "من نحن",
          "item": "https://osaadiluxurydesertcamp.com/ar/merzouga-luxury-desert-camp"
        }
      ]
    }
  ]
}

const faq = [
  { q: "ما هو مخيم Ousaadi؟", a: "Ousaadi Luxury Desert Camp مخيم صحراوي فاخر في صحراء مرزوكة بالمغرب، يوفر خيامًا مريحة ومطبخًا مغربيًا وأنشطة فوق الكثبان." },
  { q: "أين يقع المخيم؟", a: "في صحراء مرزوكة، جنوب شرق المغرب، عند أقدام كثبان عرق الشبي." },
  { q: "ما الذي يجعل التجربة أصيلة؟", a: "ضيافة مغربية دافئة، ومطبخ تقليدي، وشاي بالنعناع، ولحظات تُقتسم حول النار، في أجواء مستوحاة من الثقافة المغربية." },
  { q: "ما أنواع الإقامة المتاحة؟", a: "خيام فاخرة، وخيام تقليدية، وخيام بريميوم." },
  { q: "كيف أحجز؟", a: "عبر واتساب، بإرسال التواريخ وعدد المسافرين." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function AboutPageAr() {
  return (
    <div className="pg-apropos-ar" id="top">
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
      <Link className="logo" href="/ar" aria-label="Ousaadi Luxury Desert Camp — الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="التنقل الرئيسي"><ul>
      <li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><a href="#top" className="active">من نحن</a></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">AR ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn gold hd-btn" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      <button className="burger" id="bg" aria-label="فتح القائمة" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="خيام مخيم Ousaadi مضاءة بالفوانيس في مرزوكة"></div>
      <div className="hero-txt"><h1>عن Ousaadi</h1>
      <p>تجربة أصيلة في مخيمنا الصحراوي بمرزوكة، في قلب الصحراء المغربية</p><div className="hl"><i></i></div></div>
      </section>
      <section className="story rv">
      <i className="pat"></i>
      <div><h2>قصتنا</h2><div className="dl"><i></i></div>
      <p>مخيم OUSAADI الصحراوي الفاخر أكثر من مجرد مخيم: إنه دعوة لاكتشاف سحر صحراء مرزوكة.</p>
      <p>مستوحى من الثقافة المغربية وجمال الصحراء الكبرى اللامتناهي، يقدم لك مخيمنا الصحراوي في مرزوكة تجربة فريدة تجمع بين الراحة والأصالة والضيافة الدافئة.</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a></div>
      <figure><Image src="/images/caravane-de-dromadaires-dans-les-dunes-de-merzouga-au-coucher-du-solei.webp" width={1040} height={524} sizes="(max-width: 1000px) 100vw, 50vw" alt="قافلة جمال بين كثبان مرزوكة عند الغروب" /></figure>
      </section>
      {/* À compléter avec l’histoire réelle du camp (fondateur, année de création, famille, équipe) : renforce la confiance (E-E-A-T) */}
      <section className="seo rv">
      <h2>مخيم صحراوي في مرزوكة صُمّم ليُعاش</h2>
      <p>Ousaadi مخيم صحراوي فاخر في مرزوكة، عند أقدام كثبان عرق الشبي جنوب شرق المغرب. فكرتنا بسيطة: أن نتيح لكم عيش الصحراء المغربية في أجواء مريحة دون أن تفقد شيئًا من أصالتها.</p>
      <p>خيامنا الفاخرة والتقليدية وبريميوم، ومطبخنا المغربي، وجولاتنا على الجمال، ورحلات 4x4، وسهراتنا حول النار تشكّل إقامة مبنية على روح الضيافة المغربية.</p>
      </section>
      <section className="why rv">
      <h2>لماذا تختار OUSAADI في مرزوكة؟</h2><div className="dl"><i></i></div>
      <div className="cards">
      <div className="cd"><div><svg className="i"><use href="#tent" /></svg>موقع فريد في الصحراء الكبرى</div></div>
      <div className="cd"><div><svg className="i"><use href="#star" /></svg>ضيافة مغربية دافئة</div></div>
      <div className="cd"><div><svg className="i"><use href="#gem" /></svg>إقامة مريحة</div></div>
      <div className="cd"><div><svg className="i"><use href="#lotus" /></svg>تجارب لا تُنسى</div></div>
      </div>
      </section>
      <section className="seo choose rv">
      <h2>ما ينتظركم في مخيم Ousaadi</h2>
      <div className="cols c2">
      <article><h3>إطار فريد في الصحراء</h3><p>كثبان عرق الشبي، وصمت الصحراء، وسماء مرصعة بالنجوم بعيدة عن التلوث الضوئي: هذا هو إطار إقامتكم في مرزوكة.</p></article>
      <article><h3>ضيافة مغربية دافئة</h3><p>فريق يصغي إليكم، من أول رسالة على واتساب حتى لحظة المغادرة، مع الشاي بالنعناع والود المغربي.</p></article>
      <article><h3>إقامة مريحة</h3><p>ثلاثة أنواع من الخيام: الفاخرة والتقليدية وبريميوم، بأسرّة مريحة وحمام.</p></article>
      <article><h3>تجارب لا تُنسى</h3><p>جولة على الجمال، ورحلة 4x4، والتزلج على الرمال، وغروب الشمس، ورصد النجوم، وسهرة حول النار.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>أسئلة شائعة حول مخيم Ousaadi</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="pat"></i>
      <div className="tx"><h2>عش سحر الصحراء <em>مع مخيم OUSAADI الصحراوي الفاخر في مرزوكة</em></h2>
      <p>مغامرة أصيلة وذكرى للأبد…</p>
      <a className="btn gold" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز الآن</a></div>
      <div className="pic" role="img" aria-label="صالون مغربي داخل خيمة في المخيم الفاخر بمرزوكة"></div>
      <svg className="cv" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M24 0C15 28 8 56 0 100" fill="none" stroke="#ecc473" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/ar" aria-label="الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><a href="#top">من نحن</a></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul>
      
      <div className="loc"><svg className="i"><use href="#pin" /></svg>مرزوكة، المغرب</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
