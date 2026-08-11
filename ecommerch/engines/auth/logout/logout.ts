"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import deleteSession from "@/ecommerch/sessions/delete";

const authLogout = async () => {
  await deleteSession();

  redirect("/login");
};

export default authLogout;
