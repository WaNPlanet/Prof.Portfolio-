import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send notification to yourself
    await resend.emails.send({
      from: 'newsletter@yourdomain.com', // Change to your verified domain
      to: process.env.ADMIN_EMAIL || 'kyereofosuhene@gmail.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>Email: ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });

    // Send confirmation to subscriber (optional)
    await resend.emails.send({
      from: 'newsletter@yourdomain.com',
      to: email,
      subject: 'Thanks for subscribing!',
      html: `
        <h2>Welcome to our newsletter!</h2>
        <p>You've successfully subscribed with ${email}</p>
        <p>We'll keep you updated with our latest content.</p>
      `,
    });

    return NextResponse.json(
      { message: 'Thank you for subscribing!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}