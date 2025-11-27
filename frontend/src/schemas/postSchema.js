import {z} from "zod"

export const newNoteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    body: z.string().min(1, "Body is required"),
    tags: z.array(z.string()).or(z.string().refine((val)=>val.trim()=="",{message: "Press Enter to add the tag"})).transform(val=>{if(typeof val === "string")return []; return val}).optional().default([])
}); 