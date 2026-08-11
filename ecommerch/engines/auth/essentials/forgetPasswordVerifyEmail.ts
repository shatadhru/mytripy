"use server";

import { Database } from "@/ecommerch/db";
import * as z from "zod";
import crypto from "crypto";
import * as argon2 from "argon2";

const forgetPasswordVerifySchema = z
  .object({
    token: z.string().trim().min(1),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type ForgetPasswordVerifySchema = z.infer<typeof forgetPasswordVerifySchema>;

const forgetPasswordVerify = async (input: ForgetPasswordVerifySchema) => {
  try {
    const validated = forgetPasswordVerifySchema.parse(input);

    const hashedToken = crypto
      .createHash("sha256")
      .update(validated.token)
      .digest("hex");

    const users = await Database({
      collectionName: "users",
    });

    const tokenDB = await Database({
      collectionName: "tokens",
    });

    const sessionDB = await Database({
      collectionName: "sessions",
    });

    // Find Reset Token
    const tokenDoc = await tokenDB.findOne({
      token: hashedToken,
      type: "password-reset",
    });

    if (!tokenDoc) {
      return {
        success: false,
        message: "Invalid or expired reset link.",
      };
    }

    // Check Expiry
    if (new Date(tokenDoc.expiresAt) < new Date()) {
      await tokenDB.delete({
        _id: tokenDoc._id,
      });

      return {
        success: false,
        message: "Reset link has expired.",
      };
    }

    // Find User
    const user = await users.findOne({
      _id: tokenDoc.userId,
    });

    if (!user) {
      await tokenDB.delete({
        _id: tokenDoc._id,
      });

      return {
        success: false,
        message: "User not found.",
      };
    }

    // Hash New Password
    const hashedPassword = await argon2.hash(validated.password, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 1,
    });

    // Update Password
    await users.update(
      {
        _id: user._id,
      },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      },
    );

    // Logout From All Devices
    await sessionDB.deleteMany({
      userId: user._id,
    });

    // Delete Used Token
    await tokenDB.delete({
      _id: tokenDoc._id,
    });

    return {
      success: true,
      message: "Password reset successfully.",
    };
  } catch (error) {
    console.error("Forgot Password Verify Error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};

export default forgetPasswordVerify;
