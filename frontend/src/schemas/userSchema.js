import z from "zod"

export const loginSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message: "Email inválido"}),
    password: z.string().min(1, {message: "La contraseña es obligatoria"})
})