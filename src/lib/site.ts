export const SITE = {
  name: 'Ousadi Luxury Desert Camp',
  url: 'https://osaadiluxurydesertcamp.com',
  whatsapp: '212661175228', // format international, sans +
  phone: '+212 661 175 228',
  email: 'osaadiluxurydesertcamp@gmail.com',
}

export const wa = (msg: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`

export const routes = ['/', '/hebergement', '/experiences', '/galerie', '/apropos', '/contact']
