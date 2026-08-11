"use server";

import * as z from "zod";
import crypto from "crypto";
import ecomconfig from "@/ecom.config";

const ResetPasswordSchema = z.object({
  token: z.string().uuid(),
  password: z.string().min(8),
});

type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;

const authResetPassword = async (input: ResetPasswordInput) => {
  const validated = ResetPasswordSchema.parse(input);

  // Verify the token and reset the password in the database

  // Send a confirmation email to the user
};

export default authResetPassword;
