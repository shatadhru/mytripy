"use server";

import { NextRequest, NextResponse } from "next/server";

import ecomconfig from "@/ecom.config";
import getSession from "@/ecommerch/sessions/get";
import getCurrentUser from "@/ecommerch/sessions/getCurrentUSer";

const authMiddleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  // Public routes
  if (ecomconfig.auth.publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Session
  const session = await getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Current user
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Guest routes
  if (ecomconfig.auth.publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
};

export default authMiddleware;
