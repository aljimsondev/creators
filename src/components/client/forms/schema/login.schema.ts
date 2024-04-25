import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(8).max(50).email("Please enter a valid email address!"),
  password: z.string().min(8).max(50),
});
