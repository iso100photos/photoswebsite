'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export default function BookingPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 bg-iso-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/logos/logo-light.png"
            alt="ISO100 Photography"
            width={72}
            height={72}
            className="rounded-full mx-auto mb-8"
          />
          <span className="section-label">{t.booking.label}</span>
          <h1 className="section-title mb-5">{t.booking.heading}</h1>
          <p className="text-iso-muted leading-relaxed max-w-lg mx-auto">
            {t.booking.description}
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-12 px-6 border-b border-iso-border">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.booking.steps.map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 items-start">
              <span className="font-playfair text-3xl text-iso-plum leading-none flex-shrink-0">{step}</span>
              <div>
                <p className="text-iso-blush text-sm font-medium mb-1">{title}</p>
                <p className="text-iso-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cal.com embed */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <iframe
              src="https://cal.com/zamira-schatschneider-1fpevp?theme=dark&brandColor=C9A0AB&backgroundColor=0C0809&foregroundColor=F0E3DF"
              width="100%"
              height="820"
              frameBorder="0"
              title="Book a session with ISO100 Photography"
              className="block"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 px-6 bg-iso-dark border-t border-iso-border text-center">
        <p className="text-iso-muted text-sm mb-4">
          {t.booking.question}
        </p>
        <a href="/contact" className="btn-outline text-sm">
          {t.booking.cta}
        </a>
      </section>
    </>
  )
}
