import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-playfair', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-inter', display: 'swap' })

export const fontVars = `${playfair.variable} ${cormorant.variable} ${inter.variable}`
