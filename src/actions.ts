'use server'

import { z } from 'zod'
import { Contact, contactSchema } from './lib/validation'
import nodemailer from 'nodemailer'

export const sendMail = async (data: Contact) => {
    try {
        const { email, message, name, subject } = contactSchema.parse(data)

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: subject,
            html: `
            <h1>${name}</h1>
            <h2>${email}</h2>
            <br />
            <p>${message}</p>
        `,
        }

        await transporter.sendMail(mailOptions)

        return {
            success: true,
            error: null,
        }
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            }
        }

        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: error.errors.map((err) => err.message).join(', '),
            }
        }

        return {
            success: false,
            error: 'An error occurred. Please try again later.',
        }
    }
}
