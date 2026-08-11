"use client";

import { toast } from "@/components/ui/toast";
import { RegisterSchema } from "../schema";
import {authRegister} from "@/ecommerch/engines/auth/register/action";

const register = async (data :any) => {
  try {
    const validated = await RegisterSchema.parseAsync(data);

    const response = await authRegister(validated);

    toast.add({
      type: "success",
      description: "Account created successfully.",
    });

    return response;

  } catch (error) {
    const description =
      error instanceof Error
        ? error.message
        : "Failed to create account.";

    toast.add({
      type: "error",
      description,
      priority: "high",
    });

    throw error;
  }
};


export default register;