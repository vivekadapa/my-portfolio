import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }

    try {
        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your preferred email service
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Send the email
        await transporter.sendMail({
            from: email,
            to: 'vivekchaitana1324@gmail.com', // Your email address
            subject: 'New Job Inquiry',
            text: `Someone wants to connect with you for work. Their email is: ${email}`,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
