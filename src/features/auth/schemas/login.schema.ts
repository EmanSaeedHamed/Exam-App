import * as z from "zod";

export const loginSchema = z.object({
    username: z.string().nonempty("Your username is required").min(3,"min legth is 3 characters").max(15,"max length is 15 characters"),
    password: z.string().nonempty("Your password is required").min(6,"min legth is 6 characters")

})

export type TLoginSchema = z.infer<typeof loginSchema>;



