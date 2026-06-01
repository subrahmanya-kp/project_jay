import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const clinicEmail = process.env.CONTACT_EMAIL;
  if (!clinicEmail || !process.env.RESEND_API_KEY) {
    console.error("Missing CONTACT_EMAIL or RESEND_API_KEY env vars");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Notification to clinic
    await resend.emails.send({
      from: "Pranava Website <no-reply@pranavaskin.com>",
      to: [clinicEmail],
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; color: #1C1C1E; max-width: 560px; padding: 32px;">
          <h2 style="margin-bottom: 24px; font-size: 20px;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6B6B6B; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #6B6B6B;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #6B6B6B; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td></tr>
          </table>
        </div>
      `,
    });

    // Confirmation to patient
    await resend.emails.send({
      from: "Pranava Skin Clinic <no-reply@pranavaskin.com>",
      to: [email],
      subject: "We've received your message — Pranava Skin Clinic",
      html: `
        <div style="font-family: Georgia, serif; color: #1C1C1E; max-width: 560px; padding: 32px;">
          <h2 style="margin-bottom: 16px; font-size: 20px;">Thank you, ${name}.</h2>
          <p style="font-family: system-ui, sans-serif; color: #6B6B6B; line-height: 1.6; margin-bottom: 16px;">
            We have received your message and will be in touch within one business day to confirm your consultation.
          </p>
          <p style="font-family: system-ui, sans-serif; color: #6B6B6B; line-height: 1.6; margin-bottom: 24px;">
            If your concern is urgent, please call us directly at <strong>+91 9483127354</strong>.
          </p>
          <hr style="border: none; border-top: 1px solid #E2DDD8; margin: 24px 0;" />
          <p style="font-family: system-ui, sans-serif; font-size: 12px; color: #9B9B9B;">
            Pranava Skin, Hair and Aesthetics Clinic · Bangalore, Karnataka<br>
            This is a confirmation email. Please do not reply — instead call or use the contact form on our website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
