import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Book a Session',
  description: 'Schedule your photography session with ISO100 Photography.',
}

export default function BookingPage() {
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
          <span className="section-label">Scheduling</span>
          <h1 className="section-title mb-5">Book a Session</h1>
          <p className="text-iso-muted leading-relaxed max-w-lg mx-auto">
            Choose a date and time that works for you. Once booked, you&apos;ll receive a confirmation email with everything you need to know before your session.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-12 px-6 border-b border-iso-border">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Pick a time',
              desc: 'Select from available slots using the scheduler below.',
            },
            {
              step: '02',
              title: 'Confirm details',
              desc: 'Fill in a few short details about your session and vision.',
            },
            {
              step: '03',
              title: 'See you then',
              desc: "You'll receive a confirmation email with session prep notes.",
            },
          ].map(({ step, title, desc }) => (
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
          <div className="border border-iso-border overflow-hidden">
            <iframe
              src="https://cal.com/zamira-schatschneider-1fpevp"
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
          Have questions before booking?
        </p>
        <a href="/contact" className="btn-outline text-sm">
          Get in Touch First
        </a>
      </section>
    </>
  )
}
