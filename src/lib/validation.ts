import { z } from 'zod'

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, {
            message: "Don't be shy, tell me your full name (min 2 characters)",
        })
        .max(128, {
            message: "That's a long name, no? (max 128 characters)",
        }),
    subject: z
        .string({
            message: 'You forgot to add a subject',
        })
        .trim()
        .min(2, {
            message: 'Please provide a subject (min 2 characters)',
        })
        .max(256, {
            message:
                "That isn't a subject, that's a novel (max 256 characters)",
        }),
    email: z
        .string({
            message: 'You sure an empty email is the way to go?',
        })
        .email({
            message: 'Hmm, that email address looks a bit off',
        }),
    message: z
        .string()
        .trim()
        .min(5, {
            message: 'Come on, you can write more than that (min 5 characters)',
        })
        .max(2048, {
            message: 'That is one long message (max 2048 characters)',
        }),
})

export type Contact = z.infer<typeof contactSchema>
