"use server";

import * as z from "zod";
import crypto from "crypto";

import ecomconfig from "@/ecom.config";
import { Database } from "@/ecommerch/db";
import { sendEmail } from "@/ecommerch/email/send";

const VerifyEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .transform((email) => email.toLowerCase()),
});

type VerifyEmailInput = z.infer<typeof VerifyEmailSchema>;

const TOKEN_EXPIRY = 30 * 60 * 1000; // 30 minutes

const authVerifyEmail = async (input: VerifyEmailInput) => {
  const { email } = VerifyEmailSchema.parse(input);

  const users = await Database({
    collectionName: "users",
  });

  const user = await users.findOne({ email });

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.emailVerified) {
    return {
      success: true,
      message: "Email is already verified.",
    };
  }

  const tokens = await Database({
    collectionName: "tokens",
  });

  // Remove previous verification tokens
  await tokens.deleteMany({
    email,
    type: "email_verification",
  });

  const token = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  await tokens.create({
    userId: user._id,
    email,
    token: hashedToken,
    type: "email_verification",
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + TOKEN_EXPIRY),
  });

  const verifyLink = `${ecomconfig.baseurl}/verify-email?token=${token}`;

  await sendEmail({
    to: email,
    subject: "Verify your email address",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Verify your email</title>
</head>

<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#202124;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e5e5e5;border-radius:12px;padding:40px;">

<tr>
<td>

<h2 style="margin-top:0;">Verify your email</h2>

<p>
Thank you for creating your account.
Please verify your email address to continue.
</p>

<p style="text-align:center;margin:40px 0;">
<a
href="${verifyLink}"
style="
background:#0f62fe;
color:#fff;
padding:14px 30px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
display:inline-block;
">
Verify Email
</a>
</p>

<p>If the button doesn't work, use this link:</p>

<p style="word-break:break-all;">
${verifyLink}
</p>

<hr style="margin:40px 0;border:none;border-top:1px solid #eee;">

<h4>Security Notice</h4>

<p style="font-size:13px;color:#666;">
Never share your verification link with anyone.
Always verify you are visiting our official website before entering sensitive information.
</p>

<h4>Disclaimer</h4>

<p style="font-size:13px;color:#666;">
This email was sent automatically. Please do not reply to this message.
Use of our services is subject to our Terms of Service and Privacy Policy.
</p>

<p style="font-size:12px;color:#999;text-align:center;margin-top:40px;">
© 2026 ${ecomconfig.app.name ?? "Your Company"}. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
  });

  return {
    success: true,
    message: "Verification email sent successfully.",
  };
};

export default authVerifyEmail;
