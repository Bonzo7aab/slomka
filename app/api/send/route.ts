"use client"

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { name, email, phone, message } = await request.json();
  console.log('bb', name)
  const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bonzo7aab@gmail.com',
      subject: `Email od ${email}`,
      text: 'Wysyłka maila zadziałała',
      react: EmailTemplate({ name, email, phone, message })
    });

    if(error) Response.json(error);

    return Response.json({ message: 'Email send successfully' });
}
