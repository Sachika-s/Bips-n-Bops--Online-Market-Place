import z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});


export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    username: z
        .string()
        .min(3,"Username must be at least 3 characters" )
        .max(62, "Username must be less than 62 characters ")
        .regex(
            /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
            "Username can only contain lowercase letters, numbers and hyphens. Must start and end with a letter or number"
        )
        //[username].shop.com, format of the hyperlink
        .refine(
            (val) => !val.includes("--"),
            "Username cannot contain consecutive dashes"
        )
        .transform((val) => val.toLowerCase()),




    })