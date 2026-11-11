import { ImageResponse } from 'next/og'

export const alt = 'Ousadi Luxury Desert Camp — Merzouga, Maroc'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg,#4a0c1a,#7a1c28 60%,#c5602f)', color: '#f3e6cf' }}>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: 8, color: '#ecc473' }}>OUSADI</div>
        <div style={{ fontSize: 40, letterSpacing: 10, marginTop: 6 }}>LUXURY DESERT CAMP</div>
        <div style={{ width: 160, height: 3, background: '#ecc473', margin: '34px 0' }} />
        <div style={{ fontSize: 38, fontStyle: 'italic' }}>Camp de luxe dans le désert de Merzouga, Maroc</div>
      </div>
    ),
    size,
  )
}
