import * as z from "zod";

export const signupSchema = z.object({
  email: z.string().min(8).max(50).email("Please enter a valid email address!"),
  password: z.string().min(8).max(50),
  confirmPassword: z.string().min(8).max(50),
});
