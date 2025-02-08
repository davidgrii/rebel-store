import nodemailer from 'nodemailer'
import { NextRequest } from 'next/server'

type IForm = {
  name: string
  email: string
  phoneNumber?: string
  message?: string
  agreeToTerms: boolean
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phoneNumber, message }: IForm = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `Jazzo Studio have a new message from ${name}`,
      text: `From ${email}\nPhone: ${phoneNumber}\n\nMessage: ${message} `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      return new Response(JSON.stringify({ error: 'Unknown error occurred' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }
}
