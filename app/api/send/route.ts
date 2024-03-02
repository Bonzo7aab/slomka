import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactUserEmail from '@/app/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextResponse) {
    const data = await req.json()
    const { username, email, phone, message } = data;

    try {
        const data = await resend.emails.send({
            from: 'Filmsmk.pl - Kontakt <contact@filmsmk.pl>',
            to: ['bonzo7aab@gmail.com'],
            subject: `Kontakt od ${username}`,
            text: 'Email from filmsmk.pl contact form',
            react: ContactUserEmail({
                username,
                email,
                phone,
                message
            }),
        });
    
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
