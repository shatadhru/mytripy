"use server";

import { cookies } from "next/headers";
import { createHash } from "crypto";
import { Database } from "../db";

const getSession = async () => {
  const cookieStore = await cookies();

  const sessionToken = cookieStore.get("ec_session")?.value;

  if (!sessionToken) {
    return null;
  }

  const hashedToken = createHash("sha256").update(sessionToken).digest("hex");

  const sessions = await Database({
    collectionName: "sessions",
  });

  try {
    const session = await sessions.findOne({
      token: hashedToken,
    });

    return session;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getSession;
