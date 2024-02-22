import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'bonzo7aab@gmail.com',
        subject: `Email od ${email}`,
        text: 'Wysyłka maila zadziałała',
        react: EmailTemplate({ name, email, phone, message })
      });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
