import { NextRequest, NextResponse } from 'next/server'

// To send real emails, install and configure a provider such as Resend (resend.com):
//   npm install resend
//   Add RESEND_API_KEY to your .env.local and Vercel environment variables
// Then replace the console.log below with your email send call.

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // Log submission (replace this block with your email provider call)
    console.log('[Contact Form Submission]', {
      name,
      email,
      phone: phone || '—',
      subject,
      message,
      receivedAt: new Date().toISOString(),
    })

    // Example Resend integration (uncomment when ready):
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'zamira@yourdomain.com',
    //   subject: `New enquiry: ${subject}`,
    //   text: `From: ${name} <${email}>\nPhone: ${phone}\n\n${message}`,
    // })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
