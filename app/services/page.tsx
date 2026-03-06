'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '@/lib/services'

export default function ServicesPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  async function handlePurchase(serviceId: string) {
    setLoadingId(serviceId)
    setErrorMsg('')

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceId }),
      })

      let data: { url?: string; error?: string }
      try {
        data = await res.json()
      } catch {
        throw new Error(`Server error (${res.status}). Check the terminal for details.`)
      }

      if (!res.ok) {
        throw new Error(data.error || `Request failed with status ${res.status}.`)
      }

      if (!data.url) {
        throw new Error('No checkout URL returned from Stripe.')
      }

      window.location.href = data.url
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.'
      console.error('[Checkout error]', message)
      setErrorMsg(message)
      setLoadingId(null)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Services &amp; Shop</span>
          <h1 className="section-title">Photo editing services</h1>
          <p className="text-iso-muted mt-4 max-w-xl leading-relaxed">
            Professional retouching and editing services. Order online and receive your edited images delivered to your inbox.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`card p-8 flex flex-col relative transition-all duration-300 hover:border-iso-plum ${
                  service.featured ? 'border-iso-rose' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-iso-rose" />
                )}
                {service.featured && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase text-iso-black bg-iso-rose px-2 py-1">
                    Popular
                  </span>
                )}

                <div className="mb-6">
                  <p className="font-playfair text-2xl text-iso-blush mb-1">{service.name}</p>
                  <p className="text-iso-rose text-3xl font-light">{service.priceDisplay}</p>
                </div>

                <p className="text-iso-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-iso-muted">
                      <svg className="w-4 h-4 text-iso-rose flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(service.id)}
                  disabled={loadingId !== null}
                  className={`w-full py-3 text-sm tracking-wider uppercase font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    service.featured
                      ? 'bg-iso-rose text-iso-black hover:bg-iso-blush'
                      : 'border border-iso-rose text-iso-rose hover:bg-iso-rose hover:text-iso-black'
                  }`}
                >
                  {loadingId === service.id ? 'Redirecting to checkout…' : 'Purchase'}
                </button>

                {errorMsg && loadingId === null && (
                  <p className="mt-3 text-red-400 text-xs text-center">{errorMsg}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-iso-dark border-t border-iso-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Process</span>
            <h2 className="section-title">How it works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose a service', desc: 'Select the editing package that fits your needs.' },
              { step: '02', title: 'Secure checkout', desc: 'Complete payment via Stripe — safe and encrypted.' },
              { step: '03', title: 'Upload your photos', desc: "You'll receive instructions to share your images." },
              { step: '04', title: 'Receive your edits', desc: 'Delivered to your inbox within the stated timeframe.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <span className="font-playfair text-4xl text-iso-plum/60 block mb-4">{step}</span>
                <p className="text-iso-blush text-sm font-medium mb-2">{title}</p>
                <p className="text-iso-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secure payment badge */}
      <section className="py-12 px-6 border-t border-iso-border text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <svg className="w-5 h-5 text-iso-muted" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <p className="text-iso-muted text-sm">
            All payments are processed securely by{' '}
            <span className="text-iso-rose">Stripe</span>. Your card details are never stored.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-iso-dark border-t border-iso-border text-center">
        <p className="text-iso-muted text-sm mb-4">
          Not sure which service is right for you?
        </p>
        <Link href="/contact" className="btn-outline text-sm">
          Ask a Question
        </Link>
      </section>
    </>
  )
}
