export const SITE = {
  name: 'Ousaadi Luxury Desert Camp',
  url: 'https://osaadiluxurydesertcamp.com',
  whatsapp: '212661175228', // format international, sans +
  phone: '+212 661 175 228',
  email: 'osaadiluxurydesertcamp@gmail.com',
}

export const LAST_MOD = '2026-11-28'

export const wa = (msg: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`

export const routes = ['/', '/tentes-de-luxe-merzouga', '/excursions-merzouga', '/photos-merzouga', '/merzouga-luxury-desert-camp', '/reservation-merzouga', '/en', '/en/luxury-tents-merzouga', '/en/excursions-merzouga', '/en/photos-merzouga', '/en/merzouga-luxury-desert-camp', '/en/book-merzouga', '/es', '/es/tiendas-de-lujo-merzouga', '/es/excursiones-merzouga', '/es/fotos-merzouga', '/es/campamento-lujo-merzouga', '/es/reservar-merzouga', '/ar', '/ar/luxury-tents-merzouga', '/ar/excursions-merzouga', '/ar/photos-merzouga', '/ar/merzouga-luxury-desert-camp', '/ar/book-merzouga']

// groupes de traductions [fr, en, es, ar]
export const groups: [string, string, string, string][] = [
  ['/', '/en', '/es', '/ar'],
  ['/tentes-de-luxe-merzouga', '/en/luxury-tents-merzouga', '/es/tiendas-de-lujo-merzouga', '/ar/luxury-tents-merzouga'],
  ['/excursions-merzouga', '/en/excursions-merzouga', '/es/excursiones-merzouga', '/ar/excursions-merzouga'],
  ['/photos-merzouga', '/en/photos-merzouga', '/es/fotos-merzouga', '/ar/photos-merzouga'],
  ['/merzouga-luxury-desert-camp', '/en/merzouga-luxury-desert-camp', '/es/campamento-lujo-merzouga', '/ar/merzouga-luxury-desert-camp'],
  ['/reservation-merzouga', '/en/book-merzouga', '/es/reservar-merzouga', '/ar/book-merzouga'],
]
