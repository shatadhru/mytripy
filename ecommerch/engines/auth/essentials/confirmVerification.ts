"use server";

import * as z from "zod";
import crypto from "crypto";

import { Database } from "@/ecommerch/db";

const ConfirmEmailSchema = z.object({
  token: z.string().min(1),
});

type ConfirmEmailInput = z.infer<typeof ConfirmEmailSchema>;

const authConfirmEmail = async (input: ConfirmEmailInput) => {
  // Validate input
  const { token } = ConfirmEmailSchema.parse(input);

  // Hash incoming token
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const tokens = await Database({
    collectionName: "tokens",
  });

  // Find verification token
  const verification = await tokens.findOne({
    token: hashedToken,
    type: "email_verification",
  });

  if (!verification) {
    throw new Error("Invalid verification link.");
  }

  // Check expiration
  if (verification.expiresAt < new Date()) {
    await tokens.delete({
      token: hashedToken,
    });

    throw new Error("Verification link has expired.");
  }

  const users = await Database({
    collectionName: "users",
  });

  // Find user
  const user = await users.findOne({
    email: verification.email,
  });

  if (!user) {
    await tokens.delete({
      token: hashedToken,
    });

    throw new Error("User not found.");
  }

  // Already verified
  if (user.emailVerified) {
    await tokens.delete({
      token: hashedToken,
    });

    return {
      success: true,
      message: "Email already verified.",
    };
  }

  // Update user
  await users.update(
    {
      email: verification.email,
    },
    {
      emailVerified: true,
      updatedAt: new Date(),
    },
  );

  // Delete verification token
  await tokens.delete({
    token: hashedToken,
  });

  return {
    success: true,
    message: "Email verified successfully.",
  };
};

export default authConfirmEmail;
