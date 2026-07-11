'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const slides = [
  { src: '/gallery/africa-tanzania/02_dsc00092.jpg', categoryKey: 'africa-tanzania' },
  { src: '/gallery/portraits/01_dsc02987.jpg', categoryKey: 'portraits' },
  { src: '/gallery/landscapes/01_landscape.png', categoryKey: 'landscapes' },
  { src: '/gallery/personal-branding/02_dsc05862.jpg', categoryKey: 'personal-branding' },
  { src: '/gallery/africa-tanzania/07_dsc00417.jpg', categoryKey: 'africa-tanzania' },
  { src: '/gallery/lifestyle/03_lifestyle.jpg', categoryKey: 'lifestyle' },
  { src: '/gallery/landscapes/03_landscape.png', categoryKey: 'landscapes' },
  { src: '/gallery/graduations/01_dsc08502.jpg', categoryKey: 'graduations' },
  { src: '/gallery/africa-tanzania/12_dsc00865.jpg', categoryKey: 'africa-tanzania' },
  { src: '/gallery/architecture/01_dsc04126.jpg', categoryKey: 'architecture' },
]

const INTERVAL_MS = 5000

export default function FeaturedCarousel() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length)
  }, [])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const categoryLabel = (key: string) =>
    t.portfolio.categories[key as keyof typeof t.portfolio.categories] ?? key

  return (
    <div
      className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden group bg-iso-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Link
          key={slide.src}
          href="/portfolio"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.src}
            alt={categoryLabel(slide.categoryKey)}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iso-black/80 via-iso-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-xs tracking-[0.2em] uppercase text-iso-rose">
              {categoryLabel(slide.categoryKey)}
            </span>
          </div>
        </Link>
      ))}

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.preventDefault(); prev() }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-iso-blush/80 hover:text-iso-rose transition-colors p-2 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.preventDefault(); next() }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-iso-blush/80 hover:text-iso-rose transition-colors p-2 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); goTo(i) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-iso-rose w-5' : 'bg-iso-blush/40 hover:bg-iso-blush/70 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
