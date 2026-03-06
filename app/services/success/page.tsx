import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your photo editing order has been received.',
}

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center flex flex-col items-center gap-6">
        <Image
          src="/logos/logo-light.png"
          alt="ISO100 Photography"
          width={80}
          height={80}
          className="rounded-full mb-2"
        />

        <div className="w-16 h-16 bg-iso-plum/40 flex items-center justify-center">
          <svg className="w-8 h-8 text-iso-rose" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="font-playfair text-4xl text-iso-blush">Order confirmed!</h1>

        <p className="text-iso-muted leading-relaxed">
          Thank you for your order. You&apos;ll receive a confirmation email shortly with instructions on how to share your photos for editing.
        </p>

        <p className="text-iso-muted text-sm">
          Questions? <Link href="/contact" className="text-iso-rose hover:text-iso-blush transition-colors">Get in touch</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/services" className="btn-outline">Back to Services</Link>
          <Link href="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    </section>
  )
}
