import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  email: string;
}

export async function POST(req: Request) {
  try {
    const { email }: EmailRequest = await req.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter with secure configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Subscription" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVE_TO_EMAIL,
      subject: 'New Blog Subscriber',
      html: `
        <h3>New Subscription</h3>
        <p>Email: ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ 
      message: 'Subscription successful!' 
    });

  } catch (error: unknown) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}