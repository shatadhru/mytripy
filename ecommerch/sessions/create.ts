"use server";

import * as z from "zod";
import { createHash, randomBytes } from "crypto";
import { headers } from "next/headers";
// @ts-ignore
import ms from "ms";
import { UAParser } from "ua-parser-js";
import { Database } from "../db";

const SessionCreateSchema = z.object({
  userId: z.string(),
});

type SessionCreateInput = z.infer<typeof SessionCreateSchema>;

const CreateSession = async (input: SessionCreateInput) => {
  const validated = SessionCreateSchema.parse(input);

  const sessions = await Database({
    collectionName: "sessions",
  });

  const sessionToken = randomBytes(32).toString("hex");

  const hashedToken = createHash("sha256").update(sessionToken).digest("hex");

  const expiresAt = new Date(Date.now() + ms("2h"));

  // Request headers
  const requestHeaders = await headers();

  const userAgent = requestHeaders.get("user-agent") ?? "Unknown";

  const forwardedFor = requestHeaders.get("x-forwarded-for");
  const realIp = requestHeaders.get("x-real-ip");

  const ip = forwardedFor?.split(",")[0]?.trim() ?? realIp ?? "Unknown";

  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  const browser = result.browser.name ?? "Unknown";
  const browserVersion = result.browser.version ?? "";
  const os = result.os.name ?? "Unknown";
  const osVersion = result.os.version ?? "";
  const deviceType = result.device.type ?? "desktop";
  const deviceVendor = result.device.vendor ?? "";
  const deviceModel = result.device.model ?? "";

  try {
    await sessions.create({
      token: hashedToken,
      userId: validated.userId,

      ip,
      userAgent,

      browser,
      browserVersion,

      os,
      osVersion,

      deviceType,
      deviceVendor,
      deviceModel,

      createdAt: new Date(),
      expiresAt,
      lastActivityAt: new Date(),
    });

    return {
      token: sessionToken,
      expiresAt,
    };
  } catch (error) {
    console.error("SESSION CREATE ERROR:", error);
    throw new Error("Failed to create session");
  }
};

export default CreateSession;
