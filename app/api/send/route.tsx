import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { name, email, message, subject, company } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error: sendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kyereofosuhene@gmail.com',
      replyTo: email,
      subject: subject || 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${name} (${email})</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div>${message.replace(/\n/g, '<br>')}</div>
      `,
    });

    if (sendError) {
      console.error('Resend API error:', sendError);
      return NextResponse.json(
        { error: sendError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully!',
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
