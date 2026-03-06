'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-iso-black/95 backdrop-blur-md border-b border-iso-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <Image
            src="/logos/logo-light.png"
            alt="ISO100 Photography"
            width={52}
            height={52}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-playfair text-iso-blush text-lg tracking-wide hidden sm:block">
            ISO100
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                pathname === href
                  ? 'text-iso-rose'
                  : 'text-iso-muted hover:text-iso-blush'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary text-xs px-5 py-2.5">
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span
            className={`block w-6 h-px bg-iso-blush transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-iso-blush transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-iso-blush transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-iso-black/98 border-t border-iso-border transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base tracking-wider uppercase transition-colors duration-200 ${
                pathname === href
                  ? 'text-iso-rose'
                  : 'text-iso-muted hover:text-iso-blush'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary text-sm mt-2 w-full text-center">
            Book a Session
          </Link>
        </nav>
      </div>
    </header>
  )
}
