import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

function clinicHtml(name: string, email: string, phone: string | undefined, message: string) {
  return `
    <div style="font-family: Georgia, serif; color: #1C1C1E; max-width: 560px; padding: 32px;">
      <h2 style="margin-bottom: 24px; font-size: 20px;">New Consultation Request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #6B6B6B; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B6B6B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #6B6B6B;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #6B6B6B; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    </div>
  `;
}

function patientHtml(name: string) {
  return `
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
  `;
}

async function sendViaGmail(
  name: string, email: string, phone: string | undefined, message: string, clinicEmail: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `Pranava Clinic <${process.env.GMAIL_USER}>`,
    to: clinicEmail,
    replyTo: email,
    subject: `New consultation request — ${name}`,
    html: clinicHtml(name, email, phone, message),
  });

  await transporter.sendMail({
    from: `Pranava Skin Clinic <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "We've received your message — Pranava Skin Clinic",
    html: patientHtml(name),
  });
}

async function sendViaResend(
  name: string, email: string, phone: string | undefined, message: string, clinicEmail: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Pranava Website <onboarding@resend.dev>",
    to: [clinicEmail],
    replyTo: email,
    subject: `New consultation request — ${name}`,
    html: clinicHtml(name, email, phone, message),
  });

  await resend.emails.send({
    from: "Pranava Skin Clinic <onboarding@resend.dev>",
    to: [email],
    subject: "We've received your message — Pranava Skin Clinic",
    html: patientHtml(name),
  });
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
  if (!clinicEmail) {
    console.error("Missing CONTACT_EMAIL env var");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const hasGmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  const hasResend = !!process.env.RESEND_API_KEY;

  if (!hasGmail && !hasResend) {
    console.error("No email provider configured");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  try {
    if (hasGmail) {
      try {
        await sendViaGmail(name, email, phone, message, clinicEmail);
      } catch (gmailErr) {
        console.error("Gmail failed, trying Resend fallback:", gmailErr);
        if (!hasResend) throw gmailErr;
        await sendViaResend(name, email, phone, message, clinicEmail);
      }
    } else {
      await sendViaResend(name, email, phone, message, clinicEmail);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("All email providers failed:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
