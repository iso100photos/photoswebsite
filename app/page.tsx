'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const featuredWork = [
  { src: '/gallery/portraits/01_dsc02987.jpg', categoryKey: 'portraits' },
  { src: '/gallery/personal-branding/02_dsc05862.jpg', categoryKey: 'personal-branding' },
  { src: '/gallery/lifestyle/03_lifestyle.jpg', categoryKey: 'lifestyle' },
  { src: '/gallery/graduations/01_dsc08502.jpg', categoryKey: 'graduations' },
  { src: '/gallery/landscapes/01_landscape.png', categoryKey: 'landscapes' },
  { src: '/gallery/landscapes/02_landscape.png', categoryKey: 'landscapes' },
  { src: '/gallery/landscapes/03_landscape.png', categoryKey: 'landscapes' },
  { src: '/gallery/landscapes/04_landscape.png', categoryKey: 'landscapes' },
]

const serviceIcons = [
  (
    <svg key="portrait" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  ),
  (
    <svg key="events" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  (
    <svg key="editing" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
]

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    { icon: serviceIcons[0], title: t.home.servicesSection.portrait.title, description: t.home.servicesSection.portrait.desc },
    { icon: serviceIcons[1], title: t.home.servicesSection.events.title, description: t.home.servicesSection.events.desc },
    { icon: serviceIcons[2], title: t.home.servicesSection.editing.title, description: t.home.servicesSection.editing.desc },
  ]

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

          <span className="section-label">{t.home.hero.label}</span>

          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-iso-blush leading-[1.1] mb-6">
            {t.home.hero.line1}<br />
            <span className="italic text-iso-rose">{t.home.hero.line2}</span>
          </h1>

          <p className="text-iso-muted text-lg leading-relaxed mb-10 max-w-lg">
            {t.home.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary">
              {t.home.hero.cta1}
            </Link>
            <Link href="/booking" className="btn-outline">
              {t.home.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-iso-muted">
          <span className="text-xs tracking-[0.2em] uppercase">{t.home.hero.scroll}</span>
          <div className="w-px h-10 bg-gradient-to-b from-iso-muted to-transparent" />
        </div>
      </section>

      {/* Services overview */}
      <section className="py-28 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">{t.home.servicesSection.label}</span>
            <h2 className="section-title">
              {t.home.servicesSection.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
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
              {t.home.servicesSection.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">{t.home.featured.label}</span>
              <h2 className="section-title">{t.home.featured.heading}</h2>
            </div>
            <Link href="/portfolio" className="text-iso-rose text-sm tracking-wider hover:text-iso-blush transition-colors duration-200 whitespace-nowrap">
              {t.home.featured.link}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredWork.map((item) => (
              <Link
                key={item.src}
                href="/portfolio"
                className="relative overflow-hidden group aspect-[3/4]"
              >
                <Image
                  src={item.src}
                  alt={t.portfolio.categories[item.categoryKey as keyof typeof t.portfolio.categories]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-iso-black/0 group-hover:bg-iso-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase text-iso-rose">
                    {t.portfolio.categories[item.categoryKey as keyof typeof t.portfolio.categories]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 px-6 bg-iso-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Brand image — matches about page */}
          <div className="self-start">
            <Image
              src="/about-brand.png"
              alt="ISO100 Photography — brand identity"
              width={1300}
              height={921}
              className="w-full h-auto block"
            />
            <div className="flex items-center gap-4 mt-5 pl-1">
              <div className="w-px h-10 bg-iso-rose flex-shrink-0" />
              <div>
                <p className="font-playfair text-iso-blush text-xl leading-snug">Zamira Schatschneider</p>
                <p className="text-iso-muted text-xs tracking-[0.2em] uppercase mt-1">{t.about.header.title}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">{t.home.aboutTeaser.label}</span>
            <h2 className="section-title mb-6">
              {t.home.aboutTeaser.line1}<br />
              <span className="italic text-iso-rose">{t.home.aboutTeaser.line2}</span>
            </h2>
            <p className="text-iso-muted leading-relaxed mb-5">
              {t.home.aboutTeaser.bio1}
            </p>
            <p className="text-iso-muted leading-relaxed mb-8">
              {t.home.aboutTeaser.bio2}
            </p>
            <Link href="/about" className="btn-outline">
              {t.home.aboutTeaser.cta}
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
            {t.home.cta.line1}<br />
            <span className="italic text-iso-rose">{t.home.cta.line2}</span>
          </h2>
          <p className="text-iso-muted leading-relaxed mb-10 max-w-md mx-auto">
            {t.home.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              {t.home.cta.cta1}
            </Link>
            <Link href="/contact" className="btn-outline">
              {t.home.cta.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
