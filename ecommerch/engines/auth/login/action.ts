"use server";

import { LoginInput } from "./schema";
import LoginManager from "./login";

export async function authLogin(input: LoginInput) {
  const response = await LoginManager(input);

  return response;
}
