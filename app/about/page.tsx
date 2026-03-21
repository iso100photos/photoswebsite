'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const stats = [
  { value: '40+', labelKey: 'sessions' as const },
  { value: '2', labelKey: 'years' as const },
  { value: '100%', labelKey: 'satisfaction' as const },
]

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { title: t.about.values.authenticity.title, description: t.about.values.authenticity.desc },
    { title: t.about.values.craft.title, description: t.about.values.craft.desc },
    { title: t.about.values.connection.title, description: t.about.values.connection.desc },
  ]

  const equipment = [
    { label: t.about.equipment.style.label, value: t.about.equipment.style.value },
    { label: t.about.equipment.light.label, value: t.about.equipment.light.value },
    { label: t.about.equipment.format.label, value: t.about.equipment.format.value },
    { label: t.about.equipment.editing.label, value: t.about.equipment.editing.value },
  ]

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Brand image */}
          <div className="order-2 lg:order-1 self-start">
            <Image
              src="/about-brand.png"
              alt="ISO100 Photography — brand identity"
              width={1300}
              height={921}
              className="w-full h-auto block"
              priority
            />

            {/* Name below image */}
            <div className="flex items-center gap-4 mt-5 pl-1">
              <div className="w-px h-10 bg-iso-rose flex-shrink-0" />
              <div>
                <p className="font-playfair text-iso-blush text-xl leading-snug">Zamira Schatschneider</p>
                <p className="text-iso-muted text-xs tracking-[0.2em] uppercase mt-1">{t.about.header.title}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-label">{t.about.header.label}</span>
            <h1 className="section-title mb-6">
              {t.about.header.line1}<br />
              <span className="italic text-iso-rose">{t.about.header.line2}</span>
            </h1>
            <div className="space-y-5 text-iso-muted leading-relaxed">
              <p>{t.about.header.bio1}</p>
              <p>{t.about.header.bio2}</p>
              <p>{t.about.header.bio3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-iso-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, labelKey }) => (
            <div key={labelKey} className="text-center">
              <p className="font-playfair text-5xl text-iso-rose mb-2">{value}</p>
              <p className="text-iso-muted text-sm tracking-wide uppercase">{t.about.stats[labelKey]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">{t.about.values.label}</span>
            <h2 className="section-title">{t.about.values.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, description }) => (
              <div key={title} className="card p-8">
                <div className="w-10 h-px bg-iso-rose mb-6" />
                <h3 className="font-playfair text-2xl text-iso-blush mb-4">{title}</h3>
                <p className="text-iso-muted leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment / style section */}
      <section className="py-24 px-6 bg-iso-dark border-t border-iso-border">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label">{t.about.equipment.label}</span>
          <h2 className="section-title mb-8">{t.about.equipment.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {equipment.map(({ label, value }) => (
              <div key={label} className="card p-6">
                <p className="text-iso-rose text-xs tracking-[0.2em] uppercase mb-2">{label}</p>
                <p className="text-iso-blush">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="section-title mb-6">
          {t.about.cta.line1}<br />
          <span className="italic text-iso-rose">{t.about.cta.line2}</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="btn-primary">{t.about.cta.book}</Link>
          <Link href="/contact" className="btn-outline">{t.about.cta.contact}</Link>
        </div>
      </section>
    </>
  )
}
