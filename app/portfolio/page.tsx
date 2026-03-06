'use client'

import { useState } from 'react'
import Link from 'next/link'

// Replace these placeholder items with real photo imports or next/image src paths
const photos = [
  { id: 1, category: 'portraits', gradient: 'from-rose-950 via-stone-900 to-zinc-950', aspect: 'aspect-[3/4]', title: 'Natural Light Portrait' },
  { id: 2, category: 'events', gradient: 'from-zinc-900 via-stone-800 to-neutral-950', aspect: 'aspect-square', title: 'Evening Celebration' },
  { id: 3, category: 'editorial', gradient: 'from-stone-900 via-rose-950 to-zinc-900', aspect: 'aspect-[2/3]', title: 'Studio Editorial' },
  { id: 4, category: 'weddings', gradient: 'from-neutral-900 via-zinc-800 to-stone-950', aspect: 'aspect-[3/4]', title: 'Golden Hour Wedding' },
  { id: 5, category: 'portraits', gradient: 'from-zinc-950 via-rose-900 to-stone-950', aspect: 'aspect-square', title: 'Outdoor Portrait' },
  { id: 6, category: 'editorial', gradient: 'from-stone-800 via-neutral-900 to-zinc-950', aspect: 'aspect-[4/3]', title: 'Fashion Editorial' },
  { id: 7, category: 'events', gradient: 'from-rose-900 via-zinc-900 to-stone-950', aspect: 'aspect-[2/3]', title: 'Corporate Event' },
  { id: 8, category: 'weddings', gradient: 'from-neutral-950 via-stone-900 to-rose-950', aspect: 'aspect-square', title: 'Ceremony Details' },
  { id: 9, category: 'portraits', gradient: 'from-zinc-900 via-rose-950 to-neutral-950', aspect: 'aspect-[3/4]', title: 'Studio Portrait' },
  { id: 10, category: 'events', gradient: 'from-stone-950 via-zinc-800 to-rose-900', aspect: 'aspect-[4/3]', title: 'Birthday Party' },
  { id: 11, category: 'weddings', gradient: 'from-rose-950 via-neutral-900 to-zinc-950', aspect: 'aspect-[3/4]', title: 'Bridal Session' },
  { id: 12, category: 'editorial', gradient: 'from-zinc-800 via-stone-900 to-neutral-950', aspect: 'aspect-square', title: 'Lifestyle Shot' },
]

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'events', label: 'Events' },
  { id: 'editorial', label: 'Editorial' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Work</span>
          <h1 className="section-title">Portfolio</h1>
          <p className="text-iso-muted mt-4 max-w-xl leading-relaxed">
            A selection of portraits, events, weddings, and editorial work. Each image is a moment worth preserving.
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

      {/* Gallery – CSS columns masonry */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className={`break-inside-avoid mb-4 relative overflow-hidden group bg-gradient-to-br ${photo.gradient} ${photo.aspect}`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-iso-black/0 group-hover:bg-iso-black/50 transition-colors duration-300" />

                {/* Caption */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                  <span className="text-xs tracking-[0.2em] uppercase text-iso-rose mb-2">
                    {photo.category}
                  </span>
                  <span className="font-playfair text-iso-blush text-lg">{photo.title}</span>
                </div>

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <svg className="w-12 h-12 text-iso-rose" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-iso-muted text-center py-20">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* How to add photos note (dev only) */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto border border-dashed border-iso-border p-8 text-center">
          <p className="text-iso-muted text-sm mb-2">
            <span className="text-iso-rose font-medium">Developer note:</span> Replace the gradient placeholders above with real photos.
          </p>
          <p className="text-iso-muted text-xs">
            Add your images to <code className="text-iso-rose">/public/gallery/</code> and update the{' '}
            <code className="text-iso-rose">photos</code> array in{' '}
            <code className="text-iso-rose">app/portfolio/page.tsx</code> with{' '}
            <code className="text-iso-rose">src</code> fields, then swap the gradient divs for{' '}
            <code className="text-iso-rose">next/image</code> components.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-iso-dark border-t border-iso-border text-center">
        <span className="section-label">Ready?</span>
        <h2 className="section-title mb-6">Let&apos;s create together</h2>
        <Link href="/booking" className="btn-primary">
          Book Your Session
        </Link>
      </section>
    </>
  )
}
