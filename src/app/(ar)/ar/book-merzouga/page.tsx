import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/contact-ar.css'

export const metadata: Metadata = {
  title: { absolute: "احجز مخيم في مرزوكة | اتصل بنا والحجز — Ousaadi" },
  description: "احجز مخيمك في مرزوكة مع Ousaadi: تواصل معنا عبر واتساب على الرقم +212 661 175 228. مخيم صحراوي فاخر في مرزوكة، المغرب، يستقبلكم كل يوم على مدار الساعة.",
  alternates: { canonical: "/ar/book-merzouga", languages: { fr: "/reservation-merzouga", en: "/en/book-merzouga", es: "/es/reservar-merzouga", ar: "/ar/book-merzouga", 'x-default': "/reservation-merzouga" } },
  openGraph: { title: "احجز مخيم في مرزوكة | اتصل بنا والحجز — Ousaadi", description: "احجز مخيمك في مرزوكة مع Ousaadi: تواصل معنا عبر واتساب على الرقم +212 661 175 228. مخيم صحراوي فاخر في مرزوكة، المغرب، يستقبلكم كل يوم على مدار الساعة.", url: "/ar/book-merzouga", siteName: SITE.name, locale: 'ar_AR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "احجز مخيم في مرزوكة | اتصل بنا والحجز — Ousaadi", description: "احجز مخيمك في مرزوكة مع Ousaadi: تواصل معنا عبر واتساب على الرقم +212 661 175 228. مخيم صحراوي فاخر في مرزوكة، المغرب، يستقبلكم كل يوم على مدار الساعة." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
  "image": "https://osaadiluxurydesertcamp.com/images/contact-hero-img.webp",
      "name": "Ousaadi Luxury Desert Camp",
      "description": "مخيم صحراوي فاخر في مرزوكة، المغرب: خيام مريحة ومطبخ مغربي وجولات على الجمال ورحلات 4x4 وليالٍ مرصعة بالنجوم.",
      "telephone": "+212661175228",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Merzouga",
        "addressCountry": "MA"
      },
      "areaServed": "مرزوكة، المغرب",
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
      "name": "احجز مخيم في مرزوكة | اتصل بنا والحجز — Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/ar/book-merzouga",
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
          "name": "اتصل بنا",
          "item": "https://osaadiluxurydesertcamp.com/ar/book-merzouga"
        }
      ]
    }
  ]
}

const faq = [
  { q: "كيف أحجز في مخيم Ousaadi؟", a: "أسهل طريقة هي مراسلتنا عبر واتساب مع ذكر التواريخ وعدد الأشخاص." },
  { q: "كيف يمكنني التواصل معكم؟", a: "عبر واتساب أو الهاتف أو البريد الإلكتروني، والتفاصيل في قسم معلوماتنا." },
  { q: "هل أنتم متاحون كل يوم؟", a: "نعم، نحن متاحون كل يوم على مدار الساعة." },
  { q: "أين يقع المخيم وكيف أصل إليه؟", a: "يقع مخيمنا في مرزوكة، في قلب الصحراء المغربية، بالقرب من الكثبان الكبيرة، ويسهل الوصول إليه بالسيارة من أرفود." },
  { q: "ماذا أذكر في طلب الحجز؟", a: "التواريخ، وعدد الأشخاص، ونوع الخيمة المطلوب (فاخرة أو تقليدية أو بريميوم)، والأنشطة التي تهمكم." },
  { q: "هل يمكنني حجز الأنشطة مع الخيمة؟", a: "نعم، أخبرونا بالأنشطة التي تريدونها (الجمل، 4x4، التزلج على الرمال، سهرة حول النار…) وندرجها ضمن إقامتكم." },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
}

export default function ContactPageAr() {
  return (
    <div className="pg-contact-ar" id="top">
      <link rel="preload" as="image" href="/images/contact-hero-img.webp" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
      <Link className="logo" href="/ar" aria-label="Ousaadi Luxury Desert Camp — الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="التنقل الرئيسي"><ul>
      <li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><a href="#top" className="active">اتصل بنا</a></li></ul></nav>
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
      <div className="hero-img" role="img" aria-label="ممر مخيم Ousaadi مضاء بالفوانيس في مرزوكة"></div>
      <div className="hero-txt"><h1>اتصل بنا <span>واحجز</span></h1>
      <p>مغامرتك في صحراء مرزوكة تبدأ من هنا…</p><div className="hl"><i></i></div>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="احجز مخيم مرزوكة عبر واتساب" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a></div>
      </section>
      <section className="seo rv">
      <h2>احجزوا إقامتكم في مخيم Ousaadi بمرزوكة</h2>
      <p>أسهل طريقة للحجز في مخيم Ousaadi هي مراسلتنا عبر واتساب. نحن متاحون كل يوم على مدار الساعة: أخبرونا بالتواريخ وعدد الأشخاص ونوع الخيمة (فاخرة أو تقليدية أو بريميوم) والأنشطة التي تهمكم.</p>
      <p>نرد عليكم بالتوفر والأسعار، ثم ننظم وصولكم إلى صحراء مرزوكة.</p>
      </section>
      <section className="info rv">
      <div><h2>معلوماتنا</h2><div className="dl"><i></i></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#pin" /></svg></div><div><b>موقعنا</b><span>مرزوكة، المغرب</span></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#phone" /></svg></div><div><b>الهاتف / واتساب</b><a href="tel:+212661175228">+212 661 175 228</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#mail" /></svg></div><div><b>Email</b><a id="mail" href={`mailto:${SITE.email}`}>osaadiluxurydesertcamp@gmail.com</a></div></div>
      <div className="row"><div className="ic"><svg className="i"><use href="#clock" /></svg></div><div><b>التوفر</b><span>كل يوم، على مدار الساعة</span></div></div></div>
      <div className="book"><i className="orn tr" style={{opacity:".4"}}></i>
      <h2><svg className="i"><use href="#wa" /></svg>احجز إقامتك الآن</h2>
      <p className="l">انقر على الزر أدناه للتواصل معنا مباشرة عبر واتساب.</p>
      <a className="btn green" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب <svg className="i" style={{fontSize:"20px"}}><use href="#rt" /></svg></a>
      <div className="sep"><svg className="i"><use href="#star8" /></svg></div>
      <small>يسعدنا استقبالكم في مخيمنا</small></div>
      </section>
      <Image src="/images/dromadaires-dans-les-dunes-au-coucher-du-soleil-desert-de-merzouga.webp" width={2048} height={144} sizes="(max-width: 1000px) 100vw, 50vw" className="dunes" alt="جمال على الكثبان عند الغروب، صحراء مرزوكة" />
      <section className="find rv">
      
      <div className="t"><h2>كيف تجدنا</h2><div className="dl"><i></i></div>
      <p>يقع مخيمنا في مرزوكة، في قلب الصحراء المغربية، ويسهل الوصول إليه من أرفود.</p>
      <ul><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>بالقرب من الكثبان الكبيرة</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>وصول سهل بالسيارة</li><li><i><svg className="i" style={{fontSize:"15px"}}><use href="#chk" /></svg></i>استقبال دافئ في عين المكان</li></ul></div>
      <div className="lant" aria-hidden="true"></div>
      </section>
      <section className="seo choose rv">
      <h2>كيف تحجزون مخيمكم في مرزوكة في 3 خطوات</h2>
      <div className="cols">
      <article><h3>1. راسلونا</h3><p>تواصلوا معنا عبر واتساب أو الهاتف أو البريد الإلكتروني، كل يوم على مدار الساعة.</p></article>
      <article><h3>2. حددوا إقامتكم</h3><p>أخبرونا بالتواريخ وعدد المسافرين ونوع الخيمة المطلوب والأنشطة التي تودون القيام بها.</p></article>
      <article><h3>3. استعدوا للوصول</h3><p>نرد عليكم بالتوفر والأسعار، ثم ننظم وصولكم إلى مرزوكة.</p></article>
      </div>
      </section>
      <section className="seo faq rv" id="faq">
      <h2>أسئلة شائعة حول الحجز في مرزوكة</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      </section>
      </main>
      <section className="cta" id="contact">
      <i className="orn tl"></i><i className="orn tr"></i><div className="cam" aria-hidden="true"></div>
      <h2>هل أنت مستعد لتجربة لا تُنسى؟</h2>
      <p>احجز مخيمك في مرزوكة الآن وعش سحر الصحراء.</p>
      <a className="btn gold" target="_blank" rel="noopener" aria-label="احجز مخيم مرزوكة عبر واتساب" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب <svg className="i" style={{fontSize:"18px"}}><use href="#rt" /></svg></a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/ar" aria-label="الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"26px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><Link href="/ar/excursions-merzouga">التجارب</Link></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><a href="#top">اتصل بنا</a></li></ul>
      
      <div className="loc"><svg className="i"><use href="#pin" /></svg>مرزوكة، المغرب</div>
      </div>
      </footer>
      <PageEffects />
    </div>
  )
}
