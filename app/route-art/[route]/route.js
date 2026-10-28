import { ImageResponse } from 'next/og'
import React from 'react'

const h = React.createElement

// Own artwork for Kilimanjaro route cards: dark blue contour map, the route
// as a dotted line to the summit, route name and usual days.
const ROUTES = {
  machame: { name: 'Machame Route', days: '6-7 days', color: '#f97316', ang: 205 },
  lemosho: { name: 'Lemosho Route', days: '6-8 days', color: '#facc15', ang: 160 },
  umbwe: { name: 'Umbwe Route', days: '6-7 days', color: '#4ade80', ang: 115 },
  marangu: { name: 'Marangu Route', days: '5-6 days', color: '#22d3ee', ang: 25 },
  rongai: { name: 'Rongai Route', days: '6-7 days', color: '#f9a8d4', ang: -25 },
  northern: { name: 'Northern Circuit Route', days: '8 days', color: '#ffffff', ang: -70 },
}
const FALLBACK = { name: 'Kilimanjaro Climb', days: '', color: '#f97316', ang: 205 }

const W = 1200
const H = 800
const CX = 840
const CY = 400

function wobble(k, th) {
  return 1 + 0.1 * Math.sin(2 * th + k * 0.12 + 0.4) + 0.07 * Math.sin(3 * th + 1.7 - k * 0.05) + 0.04 * Math.sin(5 * th + k * 0.2)
}

function contourPath(k) {
  const base = 34 * k
  let d = ''
  for (let i = 0; i <= 120; i++) {
    const th = (i / 120) * Math.PI * 2
    const r = base * wobble(k, th)
    const x = CX + r * Math.cos(th)
    const y = CY + r * 0.82 * Math.sin(th)
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1)
  }
  return d + 'Z'
}

export async function GET(request, { params }) {
  const { route } = await params
  const r = ROUTES[String(route || '').toLowerCase()] || FALLBACK

  const th = (r.ang * Math.PI) / 180
  const R = 520
  const sx = CX + R * Math.cos(th) * 0.9
  const sy = CY + R * 0.82 * Math.sin(th)
  const mx = (sx + CX) / 2 - Math.sin(th) * 90
  const my = (sy + CY) / 2 + Math.cos(th) * 90

  const dots = []
  for (let i = 0; i <= 36; i++) {
    const t = i / 36
    const x = (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * CX
    const y = (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * CY
    dots.push(h('circle', { key: 'd' + i, cx: x.toFixed(1), cy: y.toFixed(1), r: 7, fill: r.color }))
  }

  const lines = []
  for (let k = 1; k <= 24; k++) {
    lines.push(
      h('path', {
        key: 'c' + k,
        d: contourPath(k),
        fill: 'none',
        stroke: k % 5 === 0 ? 'rgba(127,179,217,0.6)' : 'rgba(127,179,217,0.28)',
        strokeWidth: k % 5 === 0 ? 3 : 1.6,
      })
    )
  }

  const art = h(
    'svg',
    { width: W, height: H, viewBox: `0 0 ${W} ${H}`, style: { position: 'absolute', left: 0, top: 0 } },
    ...lines,
    ...dots,
    h('polygon', { points: `${CX},${CY - 26} ${CX + 24},${CY + 16} ${CX - 24},${CY + 16}`, fill: '#ffffff' })
  )

  const text = h(
    'div',
    { style: { position: 'absolute', left: 110, top: 250, display: 'flex', flexDirection: 'column', width: 620 } },
    h('div', { style: { fontSize: 30, letterSpacing: 6, color: '#f3c58a', display: 'flex' } }, 'MOUNT KILIMANJARO'),
    h('div', { style: { fontSize: 84, fontWeight: 800, lineHeight: 1.0, color: '#ffffff', marginTop: 14, textTransform: 'uppercase', display: 'flex' } }, r.name),
    r.days
      ? h('div', { style: { display: 'flex', alignItems: 'center', marginTop: 22 } },
          h('div', { style: { width: 22, height: 22, borderRadius: 11, background: r.color, marginRight: 14, display: 'flex' } }),
          h('div', { style: { fontSize: 38, color: '#ffffff', display: 'flex' } }, 'Usually ' + r.days))
      : null
  )

  return new ImageResponse(
    h('div', { style: { width: W, height: H, display: 'flex', position: 'relative', background: '#10253a', fontFamily: 'sans-serif' } }, art, text),
    { width: W, height: H, headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=86400' } }
  )
}
