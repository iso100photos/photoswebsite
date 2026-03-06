import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center gap-6">
        <Image
          src="/logos/logo-light.png"
          alt="ISO100 Photography"
          width={80}
          height={80}
          className="rounded-full opacity-60"
        />
        <p className="font-playfair text-8xl text-iso-plum">404</p>
        <h1 className="font-playfair text-3xl text-iso-blush">Page not found</h1>
        <p className="text-iso-muted text-sm max-w-xs">
          This frame is empty. The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary mt-4">Back to Home</Link>
      </div>
    </section>
  )
}
