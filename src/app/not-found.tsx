import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: { absolute: 'Page introuvable | Ousadi Luxury Desert Camp' }, robots: { index: false, follow: true } }

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#4a0c1a', color: '#f3e6cf', textAlign: 'center', padding: 24, fontFamily: 'Georgia, serif' }}>
      <div>
        <h1 style={{ fontSize: 44, margin: 0, color: '#ecc473' }}>Page introuvable</h1>
        <p style={{ fontSize: 20 }}>Cette page n’existe pas ou a été déplacée.</p>
        <Link href="/" style={{ color: '#ecc473', textDecoration: 'underline' }}>Retour à l’accueil</Link>
      </div>
    </main>
  )
}
