'use client'

import { useEffect } from 'react'

/**
 * Comportements interactifs partagés par toutes les pages :
 * en-tête au scroll, menu mobile, animations au scroll, filtres + lightbox de la galerie.
 * Le contenu des pages reste rendu côté serveur (HTML complet pour le SEO).
 */
export default function PageEffects() {
  useEffect(() => {
    const ac = new AbortController()
    const { signal } = ac
    const timers: number[] = []
    const $ = <T extends Element>(s: string) => document.querySelector<T>(s)

    // --- En-tête : fond au scroll
    const hd = $('#hd')
    if (hd) {
      const onScroll = () => hd.classList.toggle('scrolled', window.scrollY > 40)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true, signal })
    }

    // --- Menu mobile
    const nav = $('#nav')
    const burger = $<HTMLButtonElement>('#bg')
    if (nav && burger) {
      const close = () => {
        nav.classList.remove('open')
        burger.textContent = '\u2630'
        burger.setAttribute('aria-expanded', 'false')
      }
      burger.addEventListener('click', () => {
        const open = nav.classList.toggle('open')
        burger.textContent = open ? '\u2715' : '\u2630'
        burger.setAttribute('aria-expanded', String(open))
      }, { signal })
      nav.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) close() }, { signal })
    }

    // --- Animations au scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))

    // --- Filtres de la galerie
    const gallery = Array.from(document.querySelectorAll<HTMLElement>('.grid .ph[data-cat]'))
    const chips = Array.from(document.querySelectorAll<HTMLElement>('.chip'))
    chips.forEach((chip) => chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.toggle('on', c === chip))
      const f = chip.dataset.f
      gallery.forEach((p) => {
        const show = f === 'all' || p.dataset.cat === f
        if (show) {
          p.hidden = false
          requestAnimationFrame(() => p.classList.remove('out'))
        } else {
          p.classList.add('out')
          timers.push(window.setTimeout(() => { if (p.classList.contains('out')) p.hidden = true }, 350))
        }
      })
    }, { signal }))

    // --- Lightbox (galerie avec navigation, ou simple aperçu ailleurs)
    const lb = $<HTMLElement>('#lb')
    if (lb) {
      const big = lb.querySelector<HTMLImageElement>('img')!
      const counter = $<HTMLElement>('#lbc')
      const raw = (im: HTMLImageElement) => {
        try {
          const u = new URL(im.currentSrc || im.src, window.location.href)
          return u.pathname === '/_next/image' ? (u.searchParams.get('url') ?? im.src) : im.src
        } catch { return im.src }
      }
      const isGallery = gallery.length > 0
      const imgs = (): HTMLImageElement[] => isGallery
        ? gallery.filter((p) => !p.hidden).map((p) => p.querySelector('img')!)
        : Array.from(document.querySelectorAll<HTMLImageElement>('.ph img, .cul .pic img'))
      let cur = 0
      const show = (i: number) => {
        const list = imgs(); if (!list.length) return
        cur = (i + list.length) % list.length
        big.src = raw(list[cur]); big.alt = list[cur].alt
        if (counter) counter.textContent = `${cur + 1} / ${list.length}`
      }
      const hide = () => lb.classList.remove('on')
      document.querySelectorAll<HTMLImageElement>('.ph img, .cul .pic img').forEach((im) => {
        im.addEventListener('click', () => { show(imgs().indexOf(im)); lb.classList.add('on') }, { signal })
      })
      $('#lbp')?.addEventListener('click', (e) => { e.stopPropagation(); show(cur - 1) }, { signal })
      $('#lbn')?.addEventListener('click', (e) => { e.stopPropagation(); show(cur + 1) }, { signal })
      $('#lbx')?.addEventListener('click', hide, { signal })
      lb.addEventListener('click', (e) => { if (e.target === lb) hide() }, { signal })
      window.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('on')) return
        if (e.key === 'Escape') hide()
        if (isGallery && e.key === 'ArrowLeft') show(cur - 1)
        if (isGallery && e.key === 'ArrowRight') show(cur + 1)
      }, { signal })
    }

    return () => { ac.abort(); io.disconnect(); timers.forEach(clearTimeout) }
  }, [])

  return null
}
