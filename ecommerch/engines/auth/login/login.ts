"use server";

import * as z from "zod";
import * as argon2 from "argon2";
import CreateSession from "@/ecommerch/sessions/create";
import { cookies } from "next/headers";
import { type LoginInput, loginSchema } from "./schema";
import { Database } from "@/ecommerch/db";

const LoginManager = async (input: LoginInput) => {
  try {
    // Validate input
    const validated = loginSchema.parse(input);

    // Users collection
    const users = await Database({
      collectionName: "users",
    });

    // Find user
    const user = await users.findOne({
      $or: [
        { email: validated.identifier.toLowerCase() },
        { username: validated.identifier },
      ],
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Verify password
    const isPasswordValid = await argon2.verify(
      user.password,
      validated.password,
    );

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const session = await CreateSession({
      userId: user._id.toString(),
    });

    const cookieStore = await cookies();

    cookieStore.set({
      name: "ec_session",
      value: session.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: session.expiresAt,
    });

    return {
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  } catch (error) {
    console.error(error);

    throw new Error(error instanceof Error ? error.message : "Login failed");
  }
};

export default LoginManager;
