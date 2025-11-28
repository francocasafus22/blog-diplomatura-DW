import z from "zod"

export const loginSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message: "Email inválido"}),
    password: z.string().min(1, {message: "La contraseña es obligatoria"})
})


export const editProfileSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    username: z.string().min(1, {message: "Username is required"})
})

export const editProfileImageSchema = z.object({
    image: z.any().refine(files=>files?.length > 0, "Image is required")
})

export const editProfileBannerSchema = z.object({
    banner: z.any().refine(files=>files?.length > 0, "Banner is required")
})