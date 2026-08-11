"use server";

import RegisterManager from "./register";
import { type RegisterInput } from "./schema";

export async function authRegister(input: RegisterInput) {
  const response = await RegisterManager(input);

  return response;
}
