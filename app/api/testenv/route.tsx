// ✅ Correct: Exporting GET handler
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    env: {
      emailUser: process.env.EMAIL_USER ? 'configured' : 'missing',
      emailPass: process.env.EMAIL_PASSWORD ? 'configured' : 'missing',
    },
  });
}