import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/galerie-ar.css'

export const metadata: Metadata = {
  title: { absolute: "صور مرزوكة: معرض المخيم والصحراء | Ousaadi" },
  description: "صور مرزوكة: اكتشف مخيمنا وخيامنا وكثبان الصحراء والجمال وسهرات النار بالصور. Ousaadi مخيم صحراوي فاخر في المغرب.",
  alternates: { canonical: "/ar/photos-merzouga", languages: { fr: "/photos-merzouga", en: "/en/photos-merzouga", es: "/es/fotos-merzouga", ar: "/ar/photos-merzouga", 'x-default': "/photos-merzouga" } },
  openGraph: { title: "صور مرزوكة: معرض المخيم والصحراء | Ousaadi", description: "صور مرزوكة: اكتشف مخيمنا وخيامنا وكثبان الصحراء والجمال وسهرات النار بالصور. Ousaadi مخيم صحراوي فاخر في المغرب.", url: "/ar/photos-merzouga", siteName: SITE.name, locale: 'ar_AR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "صور مرزوكة: معرض المخيم والصحراء | Ousaadi", description: "صور مرزوكة: اكتشف مخيمنا وخيامنا وكثبان الصحراء والجمال وسهرات النار بالصور. Ousaadi مخيم صحراوي فاخر في المغرب." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/galerie-hero-img.webp",
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
      "@type": "CollectionPage",
      "name": "صور مرزوكة: معرض المخيم والصحراء | Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/ar/photos-merzouga",
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
          "name": "المعرض",
          "item": "https://osaadiluxurydesertcamp.com/ar/photos-merzouga"
        }
      ]
    }
  ]
}

const faq = [
  { q: "أين التُقطت هذه الصور؟", a: "في مخيم Ousaadi وصحراء مرزوكة، جنوب شرق المغرب، قرب كثبان عرق الشبي." },
  { q: "هل يمكنني رؤية صور أخرى للخيام؟", a: "نعم، اكتشفوا أنواع الخيام الثلاثة في صفحة الإقامة، أو اطلبوا منا صورًا إضافية عبر واتساب." },
  { q: "ما الأنشطة التي تظهر في المعرض؟", a: "جولات على الجمال، ورحلات 4x4، وجولات الكواد، وسهرات حول النار." },
  { q: "كيف أحجز بعد مشاهدة الصور؟", a: "عبر واتساب، بإرسال التواريخ وعدد الأشخاص." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function GalleryPageAr() {
  return (
    <div className="pg-galerie-ar" id="top">
      <link rel="preload" as="image" href="/images/galerie-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 46 32"><path d="M3 29 23 5l20 24z M13 29 23 14l10 15M23 5v-3M18 29l5-9 5 9" fill="none" stroke="currentColor" /></symbol>
      <symbol id="diam" viewBox="0 0 24 24"><path d="M12 2l10 10-10 10L2 12zM12 7l5 5-5 5-5-5z" /></symbol>
      <symbol id="tent" viewBox="0 0 24 24"><path d="M3 20 12 4l9 16zM12 20v-8M8 20l4-8 4 8" fill="currentColor" /></symbol>
      <symbol id="bed" viewBox="0 0 24 24"><path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6M7 12.500a1.800 1.800 0 1 0 0-.1" /></symbol>
      <symbol id="camel" viewBox="0 0 24 24"><path d="M2 21v-6l2-1 1-5 3 3 3-1 2-5 3 1 1 4 4 2v8h-1.500v-6l-1.500-.5V21H15v-5H9v5H7.500v-5L5 16v5z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="dune" viewBox="0 0 24 24"><path d="M1 19 9 8l4 5 3-4 8 10z" fill="currentColor" /></symbol>
      <symbol id="cam" viewBox="0 0 24 24"><path d="M3 8h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13.500" r="4" /></symbol>
      <symbol id="wa" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3z" /><path d="M9 7.800c-.6 1 0 3 2 5s4 2.600 5.200 2l.4-1.600-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="rt" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" /></symbol>
      <symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none" /></symbol>
      <symbol id="yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#34091a" stroke="none" /></symbol>
      </svg>
      <header id="hd">
      <Link className="logo" href="/ar" aria-label="Ousaadi Luxury Desert Camp — الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="التنقل الرئيسي"><ul>
      <li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><a href="#top" className="active">المعرض</a></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul></nav>
      <div className="lang-switch">
      <button className="lang-btn" aria-label="Language" aria-expanded="false">AR ▾</button>
      <div className="lang-menu">
        <a href="/" hrefLang="fr" lang="fr">FR</a>
        <a href="/en" hrefLang="en" lang="en">EN</a>
        <a href="/es" hrefLang="es" lang="es">ES</a>
        <a href="/ar" hrefLang="ar" lang="ar">AR</a>
      </div>
    </div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      <button className="burger" id="bg" aria-label="فتح القائمة" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="مخيم Ousaadi الفاخر مضاء بالفوانيس في مرزوكة"></div>
      <i className="orn tl"></i><i className="orn tr"></i><i className="orn bl" style={{bottom:"-6%"}}></i>
      <div className="hero-txt"><div><svg className="i cam"><use href="#cam" /></svg><h1>صور مرزوكة</h1><div className="hl"><i></i></div>
      <p>اكتشف بالصور سحر مخيمنا وكثبان مرزوكة</p></div></div>
      </section>
      <nav className="filters" id="filters" aria-label="تصفية الصور">
      <button className="chip on" data-f="all"><svg className="i"><use href="#diam" /></svg>عرض الكل</button>
      <button className="chip" data-f="camp"><svg className="i"><use href="#tent" /></svg>المخيم</button>
      <button className="chip" data-f="tentes"><svg className="i"><use href="#bed" /></svg>الخيام</button>
      <button className="chip" data-f="activites"><svg className="i"><use href="#camel" /></svg>الأنشطة</button>
      <button className="chip" data-f="desert"><svg className="i"><use href="#dune" /></svg>الصحراء</button>
      </nav>
      <section className="grid" id="gallery" aria-label="صور المخيم والصحراء في مرزوكة">
      <button className="ph" data-cat="camp"><Image src="/images/allee-du-camp-ousaadi-illuminee-de-lanternes-photo-du-camp-de-merzouga.webp" width={632} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="ممر مخيم Ousaadi مضاء بالفوانيس، صورة من مخيم مرزوكة" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/tente-de-luxe-avec-lit-bordeaux-au-camp-ousaadi-merzouga.webp" width={596} height={430} sizes="(max-width: 1000px) 100vw, 50vw" alt="خيمة فاخرة بسرير بوردو في مخيم Ousaadi، مرزوكة" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/restaurant-sous-tente-du-camp-de-luxe-de-merzouga.webp" width={618} height={432} sizes="(max-width: 1000px) 100vw, 50vw" alt="خيمة المطعم في المخيم الفاخر بمرزوكة" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/caravane-de-dromadaires-au-coucher-du-soleil-desert-de-merzouga.webp" width={634} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="قافلة جمال عند الغروب، صحراء مرزوكة" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/tente-restaurant-eclairee-au-crepuscule-camp-ousaadi-merzouga.webp" width={590} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="خيمة المطعم مضاءة عند الغروب، مخيم Ousaadi مرزوكة" /></button>
      <button className="ph" data-cat="desert"><Image src="/images/coucher-de-soleil-sur-les-dunes-de-merzouga.webp" width={622} height={392} sizes="(max-width: 1000px) 100vw, 50vw" alt="غروب الشمس فوق كثبان مرزوكة" /></button>
      <button className="ph" data-cat="tentes"><Image src="/images/chambre-en-tente-de-luxe-aux-lits-bordeaux-luxury-desert-camp-merzouga.webp" width={634} height={408} sizes="(max-width: 1000px) 100vw, 50vw" alt="غرفة نوم في خيمة فاخرة بأسرّة بوردو، مخيم صحراوي فاخر في مرزوكة" /></button>
      <button className="ph" data-cat="camp"><Image src="/images/lanternes-marocaines-blanches-dans-le-camp-de-merzouga-la-nuit.webp" width={590} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="فوانيس مغربية بيضاء في مخيم مرزوكة ليلًا" /></button>
      <button className="ph" data-cat="activites"><Image src="/images/feu-de-camp-et-coussins-rouges-sous-les-etoiles-camp-ousaadi-a-merzoug.webp" width={620} height={412} sizes="(max-width: 1000px) 100vw, 50vw" alt="نار المخيم ووسائد حمراء تحت النجوم، مخيم Ousaadi في مرزوكة" /></button>
      </section>
      <section className="seo rv">
      <h2>صور مخيم Ousaadi وصحراء مرزوكة</h2>
      <p>يجمع هذا المعرض صورًا لمخيم Ousaadi وصحراء مرزوكة: الخيام ذات الأسرّة المريحة، والممرات المضاءة بالفوانيس، ومطعم الخيمة، والجمال عند الغروب، ورحلات 4x4 والكواد بين الكثبان، وسهرات حول النار.</p>
      <p>استخدموا المرشحات لتصفح المخيم والخيام والأنشطة والصحراء، ثم راسلونا عبر واتساب لحجز إقامتكم.</p>
      </section>
      <section className="seo choose rv">
      <h2>ما ستكتشفونه في الصور</h2>
      <div className="cols c2">
      <article><h3>المخيم</h3><p>ممرات مضاءة بالفوانيس، وسجادة حمراء، ومطعم تحت الخيمة، وبوفيه مغربي: أجواء مخيم Ousaadi نهارًا وليلًا.</p></article>
      <article><h3>الخيام</h3><p>خيام فاخرة بأسرّة بلون العنابي، صُمّمت لتجمع بين الراحة والديكور المغربي.</p></article>
      <article><h3>الأنشطة</h3><p>قوافل الجمال، ورحلات 4x4، وجولات الكواد، وسهرات حول النار تحت النجوم.</p></article>
      <article><h3>الصحراء</h3><p>كثبان مرزوكة عند الغروب، بين الرمال الذهبية والمساحات الشاسعة.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>أسئلة شائعة حول صور مرزوكة</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="dunes" aria-hidden="true"></div><div className="lant" aria-hidden="true"></div>
      <i className="orn bl"></i><i className="orn br"></i>
      <h2>تجربة لا تُنسى في قلب صحراء مرزوكة</h2><div className="d"></div>
      <a className="btn" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <i className="orn bl" style={{opacity:".4"}}></i><i className="orn br" style={{opacity:".4"}}></i>
      <div className="ft">
      <Link className="logo" href="/ar" aria-label="الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><a href="#top">المعرض</a></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. جميع الحقوق محفوظة.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="معاينة الصورة"><img alt="" /><button id="lbx" aria-label="إغلاق">✕</button><button id="lbp" aria-label="الصورة السابقة">›</button><button id="lbn" aria-label="الصورة التالية">‹</button><div id="lbc"></div></div>
      <PageEffects />
    </div>
  )
}
