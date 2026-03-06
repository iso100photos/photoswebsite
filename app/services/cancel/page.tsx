import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Cancelled',
}

export default function CancelPage() {
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

        <div className="w-16 h-16 bg-iso-card flex items-center justify-center border border-iso-border">
          <svg className="w-8 h-8 text-iso-muted" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="font-playfair text-4xl text-iso-blush">Order cancelled</h1>

        <p className="text-iso-muted leading-relaxed">
          Your order was cancelled and you have not been charged. If you have any questions or ran into an issue, please don&apos;t hesitate to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/services" className="btn-primary">Try Again</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
