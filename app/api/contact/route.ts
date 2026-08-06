import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      projectType,
      message,
    } = body;

    // Basic validation
    if (!name || !phone || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"RISE Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Website Lead — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;">
          <h2 style="color:#B08A47;">New Website Inquiry</h2>

          <table style="border-collapse:collapse;width:100%;">
            <tr>
              <td style="padding:8px 0;"><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;"><strong>Phone:</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;"><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;"><strong>Project Type:</strong></td>
              <td>${projectType}</td>
            </tr>
          </table>

          <hr style="margin:28px 0;">

          <h3 style="margin-bottom:10px;">Project Details</h3>

          <p style="white-space:pre-line;line-height:1.7;">
            ${message}
          </p>

          <hr style="margin:28px 0;">

          <p style="font-size:13px;color:#666;">
            This inquiry was submitted through the
            RISE Remodeling & Renovations website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error("Contact Form Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}