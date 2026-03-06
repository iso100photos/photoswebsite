import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { SERVICES } from '@/lib/services'

export async function POST(request: NextRequest) {
  try {
    const { serviceId } = await request.json()

    const service = SERVICES.find((s) => s.id === serviceId)
    if (!service) {
      return NextResponse.json({ error: 'Service not found.' }, { status: 404 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: service.price,
            product_data: {
              name: service.name,
              description: service.description,
              images: [`${baseUrl}/logos/logo-light.png`],
            },
          },
        },
      ],
      success_url: `${baseUrl}/services/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/services/cancel`,
      metadata: {
        serviceId: service.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[Stripe] Checkout session error:', err)
    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again.' },
      { status: 500 }
    )
  }
}
