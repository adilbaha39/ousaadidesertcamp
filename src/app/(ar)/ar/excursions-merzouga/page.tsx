import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageEffects from '@/components/PageEffects'
import { SITE, wa } from '@/lib/site'
import '@/styles/experiences-ar.css'

export const metadata: Metadata = {
  title: { absolute: "رحلات صحراء مرزوكة: الجمال و4x4 والتزلج على الرمال | Ousaadi" },
  description: "احجز رحلتك في صحراء مرزوكة مع Ousaadi: جولة على الجمال، رحلة 4x4 بين كثبان عرق الشبي، تزلج على الرمال، غروب الشمس وليالٍ مرصعة بالنجوم.",
  alternates: { canonical: "/ar/excursions-merzouga", languages: { fr: "/excursions-merzouga", en: "/en/excursions-merzouga", es: "/es/excursiones-merzouga", ar: "/ar/excursions-merzouga", 'x-default': "/experiences" } },
  openGraph: { title: "رحلات صحراء مرزوكة: الجمال و4x4 والتزلج على الرمال | Ousaadi", description: "احجز رحلتك في صحراء مرزوكة مع Ousaadi: جولة على الجمال، رحلة 4x4 بين كثبان عرق الشبي، تزلج على الرمال، غروب الشمس وليالٍ مرصعة بالنجوم.", url: "/ar/excursions-merzouga", siteName: SITE.name, locale: 'ar_AR', type: 'website' },
  twitter: { card: 'summary_large_image', title: "رحلات صحراء مرزوكة: الجمال و4x4 والتزلج على الرمال | Ousaadi", description: "احجز رحلتك في صحراء مرزوكة مع Ousaadi: جولة على الجمال، رحلة 4x4 بين كثبان عرق الشبي، تزلج على الرمال، غروب الشمس وليالٍ مرصعة بالنجوم." },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Campground",
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
          "name": "التجارب",
          "item": "https://osaadiluxurydesertcamp.com/ar/excursions-merzouga"
        }
      ]
    },
    {
      "@type": "WebPage",
      "name": "رحلات صحراء مرزوكة: الجمال و4x4 والتزلج على الرمال | Ousaadi",
      "url": "https://osaadiluxurydesertcamp.com/ar/excursions-merzouga",
      "inLanguage": "ar"
    }
  ]
}

export default function ExperiencesPageAr() {
  return (
    <div className="pg-experiences-ar" id="top">
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
      <Link className="logo" href="/ar" aria-label="Ousaadi Luxury Desert Camp — الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <nav id="nav" aria-label="التنقل الرئيسي"><ul>
      <li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><a href="#top" className="active">التجارب</a></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul></nav>
      <div className="langs" role="group" aria-label="اللغة"><a href="/excursions-merzouga" hrefLang="fr" lang="fr">FR</a><a href="/en/excursions-merzouga" hrefLang="en" lang="en">EN</a><a href="/es/excursiones-merzouga" hrefLang="es" lang="es">ES</a><a href="/ar/excursions-merzouga" hrefLang="ar" lang="ar" className="on" aria-current="true">AR</a></div>
      <a className="btn wine hd-btn" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      <button className="burger" id="bg" aria-label="فتح القائمة" aria-expanded="false">☰</button>
      </header>
      <main>
      <section className="hero">
      <div className="hero-img" role="img" aria-label="قافلة جمال عند الغروب في صحراء مرزوكة"></div>
      <i className="orn tl"></i>
      <div className="hero-txt"><h1>رحلات صحراء مرزوكة</h1>
      <p>عش لحظات لا تُنسى في قلب الصحراء الكبرى</p><div className="hl"><i></i></div></div>
      </section>
      <section className="cards" aria-label="أنشطة في صحراء مرزوكة">
      <i className="orn tl" style={{top:"-10px"}}></i><i className="orn tr" style={{top:"-10px"}}></i>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز جولة على الجمال في مرزوكة.")}><div className="in"><Image src="/images/balade-a-dos-de-dromadaire-dans-les-dunes-de-merzouga.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="جولة على الجمال بين كثبان مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#camel" /></svg>جولة على ظهر الجمل</h3><p>استكشف كثبان مرزوكة الذهبية على ظهر جمل.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز رحلة 4x4 في صحراء مرزوكة.")}><div className="in"><Image src="/images/excursion-en-4x4-dans-les-dunes-de-lerg-chebbi-a-merzouga-15659f.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="رحلة 4x4 بين كثبان عرق الشبي في مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#suv" /></svg>رحلة 4x4 في مرزوكة</h3><p>انطلق في مغامرة عبر كثبان عرق الشبي.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز جلسة تزلج على الرمال في مرزوكة.")}><div className="in"><Image src="/images/sandboard-sur-les-dunes-de-merzouga.webp" width={580} height={310} sizes="(max-width: 1000px) 100vw, 50vw" alt="التزلج على كثبان مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#board" /></svg>التزلج على الرمال</h3><p>عش لحظات مثيرة وأنت تنزلق فوق الكثبان.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ معرفة المزيد عن غروب الشمس في صحراء مرزوكة.")}><div className="in"><Image src="/images/coucher-de-soleil-sur-le-desert-de-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="غروب الشمس فوق صحراء مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#sun" /></svg>غروب الشمس</h3><p>شاهد غروبًا خلابًا للشمس فوق كثبان مرزوكة.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز أمسية لرصد النجوم في مرزوكة.")}><div className="in"><Image src="/images/ciel-etoile-au-dessus-du-camp-de-luxe-de-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="سماء مرصعة بالنجوم فوق المخيم الفاخر في مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#scope" /></svg>رصد النجوم</h3><p>تأمل سماءً مرصعة بالنجوم فريدة في صحراء مرزوكة.</p></div></div></a>
      <a className="card rv" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز سهرة حول النار في مرزوكة.")}><div className="in"><Image src="/images/soiree-autour-du-feu-de-camp-sous-les-etoiles-camp-ousaadi-a-merzouga.webp" width={580} height={306} sizes="(max-width: 1000px) 100vw, 50vw" alt="سهرة حول نار المخيم تحت النجوم، مخيم Ousaadi في مرزوكة" />
      <div className="tx"><h3><svg className="i"><use href="#fire" /></svg>سهرة حول النار</h3><p>شارك لحظات دافئة تحت النجوم.</p></div></div></a>
      </section>
      <section className="cul rv">
      <div className="pic"><Image src="/images/table-dressee-sous-la-tente-restaurant-du-camp-ousaadi-cuisine-marocai.webp" width={994} height={506} sizes="(max-width: 1000px) 100vw, 50vw" alt="مائدة معدّة في خيمة المطعم بمخيم Ousaadi، مطبخ مغربي في مرزوكة" /></div>
      <div className="t"><h2 className="t">تجربة طهي أصيلة</h2>
      <p>استمتع بمطبخ مغربي شهي، يُحضّر بعناية لإثراء إقامتك في صحراء مرزوكة.</p>
      <div className="cf"><div><span className="ci"><svg className="i"><use href="#cloche" /></svg></span>مطبخ<br />مغربي</div><div><span className="ci"><svg className="i"><use href="#cup" /></svg></span>شاي بالنعناع</div><div><span className="ci"><svg className="i"><use href="#table" /></svg></span>وجبات في الهواء الطلق</div></div>
      <a className="btn wine more" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ معرفة المزيد عن المطبخ المغربي في مخيم Ousaadi بمرزوكة.")}>اكتشف مطبخنا <svg className="i" style={{fontSize:"16px"}}><use href="#rt" /></svg></a></div>
      <div className="lant" aria-hidden="true"></div>
      <i className="orn bl" style={{bottom:"-20px",left:"0",right:"auto",transform:"scaleY(-1)"}}></i>
      </section>
      </main>
      <section className="cta" id="contact">
      <div className="bg ll" aria-hidden="true"></div><div className="bg rr" aria-hidden="true"></div><div className="bg tl2" aria-hidden="true"></div><div className="bg tr2" aria-hidden="true"></div><div className="bg tc2" aria-hidden="true"></div>
      <h2>هل أنت مستعد لمغامرة لا تُنسى؟</h2><p>احجز الآن واكتشف سحر رحلة في صحراء مرزوكة</p>
      <a className="btn wine" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      </section>
      <footer>
      <div className="ft">
      <Link className="logo" href="/ar" aria-label="الرئيسية"><svg className="i lm"><use href="#logo" /></svg><b style={{fontSize:"28px"}}>OUSAADI</b><small>LUXURY DESERT CAMP</small></Link>
      <ul><li><Link href="/ar">الرئيسية</Link></li><li><Link href="/ar/luxury-tents-merzouga">الإقامة</Link></li><li><a href="#top">التجارب</a></li><li><Link href="/ar/photos-merzouga">المعرض</Link></li><li><Link href="/ar/merzouga-luxury-desert-camp">من نحن</Link></li><li><Link href="/ar/book-merzouga">اتصل بنا</Link></li></ul>
      <a className="wa" target="_blank" rel="noopener" href={wa("مرحبًا، أودّ حجز إقامة في مخيم Ousaadi في مرزوكة.")}><svg className="i"><use href="#wa" /></svg>احجز عبر واتساب</a>
      <div className="soc"><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg className="i"><use href="#ig" /></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg className="i"><use href="#fb" /></svg></a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg className="i"><use href="#yt" /></svg></a></div>
      </div>
      <div className="fl"><i></i></div>
      <p className="cp">© 2025 Ousaadi Luxury Desert Camp. جميع الحقوق محفوظة.</p>
      </footer>
      <div id="lb" role="dialog" aria-label="معاينة الصورة"><img alt="" /></div>
      <PageEffects />
    </div>
  )
}
