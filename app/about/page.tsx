import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Zamira Schatschneider — the photographer behind ISO100 Photography.',
}

const values = [
  {
    title: 'Authenticity',
    description: 'Every session is guided by your story. I create space for real emotion, not posed perfection.',
  },
  {
    title: 'Craft',
    description: 'From composition to colour grade, every detail is considered. The difference is in the care.',
  },
  {
    title: 'Connection',
    description: 'I believe great photography comes from genuine human connection. You will always feel at ease.',
  },
]

const stats = [
  { value: '40+', label: 'Sessions Completed' },
  { value: '2', label: 'Years of Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
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
                <p className="text-iso-muted text-xs tracking-[0.2em] uppercase mt-1">Photographer &amp; Retoucher</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-label">About</span>
            <h1 className="section-title mb-6">
              The person<br />
              <span className="italic text-iso-rose">behind the lens</span>
            </h1>
            <div className="space-y-5 text-iso-muted leading-relaxed">
              <p>
                I&apos;m Zamira — a photographer driven by the belief that every moment deserves to be remembered with beauty and truth.
              </p>
              <p>
                My journey started with a borrowed film camera and a curiosity I couldn&apos;t shake. Years later, that same curiosity shapes every session I lead — an endless search for the light, the expression, the split second that reveals something real.
              </p>
              <p>
                ISO100 Photography is named for the clearest, most faithful film speed — and that&apos;s exactly my philosophy. Clear vision. True colour. No noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-iso-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-5xl text-iso-rose mb-2">{value}</p>
              <p className="text-iso-muted text-sm tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">My Approach</span>
            <h2 className="section-title">What guides my work</h2>
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
          <span className="section-label">Style &amp; Equipment</span>
          <h2 className="section-title mb-8">How I shoot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {[
              { label: 'Style', value: 'Natural, editorial, cinematic' },
              { label: 'Preferred Light', value: 'Golden hour, window light' },
              { label: 'Format', value: 'Digital + medium format film' },
              { label: 'Editing', value: 'Lightroom, Capture One' },
            ].map(({ label, value }) => (
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
          Let&apos;s work<br />
          <span className="italic text-iso-rose">together</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="btn-primary">Book a Session</Link>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
