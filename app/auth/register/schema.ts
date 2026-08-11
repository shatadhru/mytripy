import * as z from "zod";
export const RegisterSchema = z
  .object({
    username: z.string().trim().min(3),

    email: z
      .string()
      .trim()
      .email()
      .transform((email) => email.toLowerCase()),

    password: z.string().min(8),

    confirmPassword: z.string(),

    firstName: z.string().trim().optional(),

    lastName: z.string().trim().optional(),

    phone: z.string().trim().optional(),

    imageUrl: z.string().url().optional(),
    roles: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type RegisterInput = z.infer<typeof RegisterSchema>;
