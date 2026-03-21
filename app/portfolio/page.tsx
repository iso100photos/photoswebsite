'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const photos = [
  // Portraits
  { src: '/gallery/portraits/01_dsc02987.jpg', category: 'portraits' },
  { src: '/gallery/portraits/02_dsc06008__2_.jpg', category: 'portraits' },
  { src: '/gallery/portraits/03_dsc07542.jpg', category: 'portraits' },
  // Personal Branding
  { src: '/gallery/personal-branding/01_dsc04542.jpg', category: 'personal-branding' },
  { src: '/gallery/personal-branding/02_dsc05862.jpg', category: 'personal-branding' },
  { src: '/gallery/personal-branding/03_dsc05877.jpg', category: 'personal-branding' },
  { src: '/gallery/personal-branding/04_dsc07423.jpg', category: 'personal-branding' },
  // Lifestyle
  { src: '/gallery/lifestyle/01_dsc02902.jpg', category: 'lifestyle' },
  { src: '/gallery/lifestyle/02_dsc04631.jpg', category: 'lifestyle' },
  { src: '/gallery/lifestyle/03_lifestyle.jpg', category: 'lifestyle' },
  // Graduations
  { src: '/gallery/graduations/01_dsc08502.jpg', category: 'graduations' },
  { src: '/gallery/graduations/02_dsc08515.jpg', category: 'graduations' },
  // Architecture
  { src: '/gallery/architecture/01_dsc04126.jpg', category: 'architecture' },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: t.portfolio.categories.all },
    { id: 'portraits', label: t.portfolio.categories.portraits },
    { id: 'personal-branding', label: t.portfolio.categories['personal-branding'] },
    { id: 'lifestyle', label: t.portfolio.categories.lifestyle },
    { id: 'graduations', label: t.portfolio.categories.graduations },
    { id: 'architecture', label: t.portfolio.categories.architecture },
  ]

  const filtered = active === 'all' ? photos : photos.filter((p) => p.category === active)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])
  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const categoryLabel = (cat: string) =>
    t.portfolio.categories[cat as keyof typeof t.portfolio.categories] ?? cat

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">{t.portfolio.label}</span>
          <h1 className="section-title">{t.portfolio.heading}</h1>
          <p className="text-iso-muted mt-4 max-w-xl leading-relaxed">
            {t.portfolio.description}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-40 bg-iso-black/90 backdrop-blur-md border-b border-iso-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-5 py-1.5 text-xs tracking-[0.15em] uppercase border transition-all duration-200 ${
                active === id
                  ? 'bg-iso-rose text-iso-black border-iso-rose'
                  : 'border-iso-border text-iso-muted hover:border-iso-rose hover:text-iso-rose'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                onClick={() => setLightboxIndex(i)}
                className="break-inside-avoid mb-4 relative overflow-hidden group w-full text-left cursor-zoom-in"
              >
                <Image
                  src={photo.src}
                  alt={categoryLabel(photo.category)}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-iso-black/0 group-hover:bg-iso-black/40 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase text-iso-rose">
                    {categoryLabel(photo.category)}
                  </span>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-iso-muted text-center py-20">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-iso-dark border-t border-iso-border text-center">
        <span className="section-label">{t.portfolio.cta.label}</span>
        <h2 className="section-title mb-6">{t.portfolio.cta.heading}</h2>
        <Link href="/booking" className="btn-primary">{t.portfolio.cta.button}</Link>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-iso-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full mx-4 max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={categoryLabel(filtered[lightboxIndex].category)}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto max-w-full object-contain"
              priority
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs tracking-[0.2em] uppercase text-iso-rose">
                {categoryLabel(filtered[lightboxIndex].category)}
              </span>
            </div>
          </div>

          <button onClick={closeLightbox} className="absolute top-6 right-6 text-iso-muted hover:text-iso-blush transition-colors" aria-label="Close">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 text-iso-muted hover:text-iso-blush transition-colors p-2" aria-label="Previous">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 text-iso-muted hover:text-iso-blush transition-colors p-2" aria-label="Next">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-iso-muted text-xs tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  )
}
