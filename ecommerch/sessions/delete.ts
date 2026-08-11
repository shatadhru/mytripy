"use server";

import { cookies } from "next/headers";
import { createHash } from "crypto";
import { Database } from "../db";

const deleteSession = async () => {
  // Get cookie
  const cookieStore = await cookies();

  const sessionToken = cookieStore.get("ec_session")?.value;

  // No session
  if (!sessionToken) {
    return;
  }

  // Hash token
  const hashedToken = createHash("sha256").update(sessionToken).digest("hex");

  // Sessions collection
  const sessions = await Database({
    collectionName: "sessions",
  });

  try {
    // Delete session from database
    await sessions.delete({
      token: hashedToken,
    });

    // Delete cookie
    cookieStore.delete("ec_session");

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    console.error("DELETE SESSION ERROR:", error);

    throw new Error("Failed to delete session");
  }
};

export default deleteSession;
