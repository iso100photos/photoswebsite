import Image from 'next/image'
import Link from 'next/link'

const featuredWork = [
  { id: 1, gradient: 'from-rose-950 via-stone-900 to-zinc-950', aspect: 'aspect-[3/4]', label: 'Portraits' },
  { id: 2, gradient: 'from-zinc-900 via-stone-800 to-neutral-950', aspect: 'aspect-square', label: 'Events' },
  { id: 3, gradient: 'from-stone-900 via-rose-950 to-zinc-900', aspect: 'aspect-[4/3]', label: 'Editorial' },
  { id: 4, gradient: 'from-neutral-900 via-zinc-800 to-stone-950', aspect: 'aspect-[3/4]', label: 'Weddings' },
]

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: 'Portrait Sessions',
    description: 'Intimate, beautifully lit portrait sessions tailored to reveal your authentic self.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Event Coverage',
    description: 'Full-day event documentation capturing every candid moment and milestone.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Photo Editing',
    description: 'Professional retouching and colour grading to bring your images to life.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-iso-black via-iso-dark to-iso-black" />
        <div className="absolute inset-0 bg-gradient-radial from-iso-plum/20 via-transparent to-transparent" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#C9A0AB 1px, transparent 1px), linear-gradient(90deg, #C9A0AB 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-[fadeInDown_0.8s_ease_both]">
            <Image
              src="/logos/logo-light.png"
              alt="ISO100 Photography"
              width={160}
              height={160}
              className="rounded-full mx-auto"
              priority
            />
          </div>

          <span className="section-label">Professional Photography</span>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-iso-blush leading-[1.1] mb-6">
            Every frame,<br />
            <span className="italic text-iso-rose">a story.</span>
          </h1>

          <p className="text-iso-muted text-lg leading-relaxed mb-10 max-w-lg">
            ISO100 Photography — capturing the moments that matter most, with artistry and intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
            <Link href="/booking" className="btn-outline">
              Book a Session
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-iso-muted">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-iso-muted to-transparent" />
        </div>
      </section>

      {/* Services overview */}
      <section className="py-28 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Photography services<br />built around you</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card p-8 group hover:border-iso-plum transition-colors duration-300"
              >
                <div className="text-iso-rose mb-5 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl text-iso-blush mb-3">{service.title}</h3>
                <p className="text-iso-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="section-title">Recent projects</h2>
            </div>
            <Link href="/portfolio" className="text-iso-rose text-sm tracking-wider hover:text-iso-blush transition-colors duration-200 whitespace-nowrap">
              View full portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredWork.map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className={`relative overflow-hidden group bg-gradient-to-br ${item.gradient} ${item.aspect}`}
              >
                <div className="absolute inset-0 bg-iso-black/0 group-hover:bg-iso-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase text-iso-rose">{item.label}</span>
                </div>
                {/* Photo placeholder indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg className="w-10 h-10 text-iso-rose" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Placeholder portrait */}
          <div className="relative aspect-[3/4] bg-gradient-to-br from-iso-plum via-iso-card to-iso-dark overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Image
                src="/logos/logo-dark.png"
                alt="ISO100 Photography"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <span className="section-label">About the Photographer</span>
            <h2 className="section-title mb-6">
              Zamira<br />
              <span className="italic text-iso-rose">Schatschneider</span>
            </h2>
            <p className="text-iso-muted leading-relaxed mb-5">
              With a passion for light, emotion, and storytelling, I create photographs that feel as natural as the moments they preserve. Based wherever the light is best.
            </p>
            <p className="text-iso-muted leading-relaxed mb-8">
              ISO100 Photography was born from the belief that every person, every event, every second deserves to be remembered beautifully.
            </p>
            <Link href="/about" className="btn-outline">
              Read My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6 bg-iso-plum/30 border-y border-iso-border">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logos/logo-light.png"
            alt="ISO100 Photography"
            width={80}
            height={80}
            className="rounded-full mx-auto mb-8 opacity-80"
          />
          <h2 className="section-title mb-5">
            Ready to create<br />
            <span className="italic text-iso-rose">something beautiful?</span>
          </h2>
          <p className="text-iso-muted leading-relaxed mb-10 max-w-md mx-auto">
            Book your session online — choose a time that works for you and let&apos;s make something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Schedule a Session
            </Link>
            <Link href="/contact" className="btn-outline">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
