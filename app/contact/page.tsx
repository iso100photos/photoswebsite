'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Something went wrong. Please try again.')
      setFormState('success')
      form.reset()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setFormState('error')
    }
  }

  const infoItems = [
    {
      label: t.contact.info.bookLabel,
      value: t.contact.info.bookValue,
      href: '/booking',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      ),
    },
    {
      label: t.contact.info.responseLabel,
      value: t.contact.info.responseValue,
      href: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      label: t.contact.info.instagramLabel,
      value: '@__iso100',
      href: 'https://www.instagram.com/__iso100',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      ),
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">{t.contact.label}</span>
          <h1 className="section-title">{t.contact.heading}</h1>
          <p className="text-iso-muted mt-4 max-w-xl leading-relaxed">
            {t.contact.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="/logos/logo-light.png"
                alt="ISO100 Photography"
                width={64}
                height={64}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <p className="font-playfair text-iso-blush text-lg">ISO100 Photography</p>
                <p className="text-iso-muted text-sm">Zamira Schatschneider</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {infoItems.map(({ label, value, href, icon }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-iso-plum/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-iso-rose" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-iso-muted mb-1">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-iso-blush text-sm hover:text-iso-rose transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-iso-blush text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {formState === 'success' ? (
              <div className="card p-12 text-center flex flex-col items-center gap-5">
                <div className="w-16 h-16 bg-iso-plum/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-iso-rose" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-playfair text-2xl text-iso-blush">{t.contact.success.heading}</h2>
                <p className="text-iso-muted text-sm leading-relaxed max-w-sm">
                  {t.contact.success.body}
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="btn-outline mt-4"
                >
                  {t.contact.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-iso-muted mb-2" htmlFor="name">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-iso-dark border border-iso-border text-iso-blush px-4 py-3 text-sm placeholder:text-iso-muted/50 focus:outline-none focus:border-iso-rose transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-iso-muted mb-2" htmlFor="email">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-iso-dark border border-iso-border text-iso-blush px-4 py-3 text-sm placeholder:text-iso-muted/50 focus:outline-none focus:border-iso-rose transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-iso-muted mb-2" htmlFor="phone">
                      {t.contact.form.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-iso-dark border border-iso-border text-iso-blush px-4 py-3 text-sm placeholder:text-iso-muted/50 focus:outline-none focus:border-iso-rose transition-colors"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-iso-muted mb-2" htmlFor="subject">
                      {t.contact.form.subjectLabel} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-iso-dark border border-iso-border text-iso-blush px-4 py-3 text-sm focus:outline-none focus:border-iso-rose transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t.contact.form.subjectDefault}</option>
                      <option value="booking">{t.contact.form.subjects.booking}</option>
                      <option value="editing">{t.contact.form.subjects.editing}</option>
                      <option value="pricing">{t.contact.form.subjects.pricing}</option>
                      <option value="collaboration">{t.contact.form.subjects.collaboration}</option>
                      <option value="other">{t.contact.form.subjects.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-iso-muted mb-2" htmlFor="message">
                    {t.contact.form.messageLabel} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-iso-dark border border-iso-border text-iso-blush px-4 py-3 text-sm placeholder:text-iso-muted/50 focus:outline-none focus:border-iso-rose transition-colors resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? t.contact.form.sending : t.contact.form.submit}
                </button>

                <p className="text-iso-muted text-xs text-center">
                  {t.contact.form.note}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
