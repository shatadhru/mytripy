"use client";

import { toast } from "@/components/ui/toast";
import { Loginschema } from "../schema";
import { authLogin } from "@/ecommerch/engines/auth/login/action";

export const login = async (email: string, password: string) => {
  const result = Loginschema.safeParse({ email, password });

  if (!result.success) {
    toast.add({
      type: "error",
      description: result.error.issues[0]?.message ?? "Please check your input.",
      priority: "high",
    });

    return false;
  }

  try {
    await authLogin({
      identifier: result.data.email,
      password: result.data.password,
    });

    toast.add({
      type: "success",
      description: "Successfully signed in.",
    });

    return true;
  } catch (error) {
    toast.add({
      type: "error",
      description:
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again.",
      priority: "high",
    });

    return false;
  }
};