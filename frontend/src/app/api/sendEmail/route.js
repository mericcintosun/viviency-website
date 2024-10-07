import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const emailContent = `
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone || "Not provided"}\n
      Message:\n${message}
    `;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Çevresel değişkenler eksik: EMAIL_USER veya EMAIL_PASS tanımlanmamış.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "mericcintosunn@gmail.com", 
      subject: `Yeni Mesaj: ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mail gönderme hatası: ", error);
    return NextResponse.json(
      {
        success: false,
        error: "E-posta gönderilemedi, lütfen daha sonra tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
