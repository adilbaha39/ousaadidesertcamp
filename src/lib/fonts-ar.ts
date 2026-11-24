import { Amiri, Cairo } from 'next/font/google'

const amiri = Amiri({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-amiri', display: 'swap' })
const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['500', '600'], variable: '--font-cairo', display: 'swap' })

export const fontVars = `${amiri.variable} ${cairo.variable}`
