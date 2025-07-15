import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  name?: string;
  email: string;
  message: string;
  subject?: string;
  company?: string;
}

interface ErrorResponse {
  error: string;
}

export async function POST(request: Request) {
  try {
    // Get form data from request
    const formData: FormData = await request.json();
    
    // Validate required fields
    if (!formData.email || !formData.email.includes('@')) {
      return NextResponse.json<ErrorResponse>(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (!formData.message || formData.message.trim().length < 10) {
      return NextResponse.json<ErrorResponse>(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Email credentials are not configured');
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format email content
    const emailText = `
      New Contact Form Submission
      --------------------------
      Name: ${formData.name || 'Not provided'}
      Email: ${formData.email}
      Company: ${formData.company || 'Not provided'}
      Subject: ${formData.subject || 'No subject specified'}
      
      Message:
      ${formData.message}
    `;

    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <table>
        <tr><td><strong>Name:</strong></td><td>${formData.name || 'Not provided'}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${formData.email}</td></tr>
        <tr><td><strong>Company:</strong></td><td>${formData.company || 'Not provided'}</td></tr>
        <tr><td><strong>Subject:</strong></td><td>${formData.subject || 'No subject specified'}</td></tr>
      </table>
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: formData.subject || 'New Contact Form Submission',
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send message. Please try again later.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json<ErrorResponse>(
      { error: errorMessage },
      { status: 500 }
    );
  }
}