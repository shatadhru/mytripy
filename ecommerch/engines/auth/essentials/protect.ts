"use server";

import { redirect } from "next/navigation";
import getCurrentUser from "../../../sessions/getCurrentUSer";

type ProtectOptions = {
  role?: string | string[];
  redirectTo?: string;
};

const protect = async (options?: ProtectOptions) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect(options?.redirectTo ?? "/login");
  }

  if (options?.role) {
    const roles = Array.isArray(options.role) ? options.role : [options.role];

    if (!roles.includes(user.roles)) {
      redirect("/");
    }
  }

  return user;
};

export default protect;
