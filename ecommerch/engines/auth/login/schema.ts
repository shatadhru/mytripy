import * as z from "zod";

export const loginSchema = z.object({
  password: z.string().min(8),

  identifier: z
    .string()
    .trim()
    .transform((value) => {
      // যদি email format হয়
      if (value.includes("@")) {
        return value.toLowerCase();
      }

      // username হলে
      return value;
    }),
});

export type LoginInput = z.infer<typeof loginSchema>;
