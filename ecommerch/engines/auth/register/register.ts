"use server";

import * as argon2 from "argon2";
import ecomconfig from "@/ecom.config";
import { Database } from "@/ecommerch/db";
import { RegisterInput, RegisterSchema } from "./schema";
import { sendEmail } from "@/ecommerch/email/send";
import authVerifyEmail from "../essentials/verifyEmail";

const RegisterManager = async (input: RegisterInput) => {
  try {
    // Validate input
    const validated = RegisterSchema.parse(input);

    // Users collection
    const users = await Database({
      collectionName: "users",
    });

    // Check email
    const emailExists = await users.findOne({
      email: validated.email,
    });

    if (emailExists) {
      throw new Error("Email already exists");
    }

    // Check username
    const usernameExists = await users.findOne({
      username: validated.username,
    });

    if (usernameExists) {
      throw new Error("Username already exists");
    }

    const passwordHash = await argon2.hash(validated.password, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });

    // User data
    const userData = {
      username: validated.username,
      email: validated.email,
      password: passwordHash,
      firstName: validated.firstName,
      lastName: validated.lastName,
      phone: validated.phone,
      imageUrl: validated.imageUrl,
      roles: [ecomconfig.auth.defaultRole],
      emailVerified: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: null,
    };

    // Save user
    const user = await users.create(userData);
    await authVerifyEmail({
      email: userData.email,
    });

    console.log("Registratpon successsful");
    return {
      success: true,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("Registration Error:", error);

    throw new Error(
      error instanceof Error ? error.message : "Registration failed",
    );
  }
};

export default RegisterManager;
