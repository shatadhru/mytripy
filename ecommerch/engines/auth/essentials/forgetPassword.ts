"use server";
import * as z from "zod";
import crypto from "crypto";
import ecomconfig from "@/ecom.config";
import { Database } from "@/ecommerch/db";
import { sendEmail } from "@/ecommerch/email/send";

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .email()
    .trim()
    .transform((email) => email.toLowerCase()),
});

type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;

const authForgotPassword = async (input: ForgotPasswordInput) => {
  try {
    const validated = ForgotPasswordSchema.parse(input);

    const token = crypto.randomBytes(32).toString("hex");

    // Create a Reset Password Link
    const resetPasswordLink = `${ecomconfig.baseurl}/reset-password?token=${token}`;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Save the token in Database
    const user = await Database({ collectionName: "users" });
    const db = await Database({ collectionName: "tokens" });

    const ckuserexist = await user.findOne({
      email: validated.email,
    });

    if (!ckuserexist) {
      return {
        success: true,
        message:
          "If an account with that email exists, we've sent a password reset link.",
      };
    }

    await db.deleteMany({
      email: validated.email,
    });

    const now = new Date();

    await db.create({
      userId: ckuserexist._id,
      email: validated.email,
      token: hashedToken,
      type: "password-reset",
      createdAt: now,
      expiresAt: new Date(now.getTime() + 1000 * 60 * 30),
    });

    // Send the Reset Password Link to User Email

    try {
      await sendEmail({
        to: validated.email,
        subject: "Reset your password",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Password Reset</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:40px 16px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" role="presentation"
style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

<tr>
<td style="padding:48px 40px 20px;text-align:center;">

<div
style="
width:64px;
height:64px;
margin:auto;
border-radius:16px;
background:#111827;
color:white;
font-size:30px;
line-height:64px;
font-weight:bold;
">

</div>

<h1
style="
margin:28px 0 12px;
font-size:30px;
font-weight:700;
color:#111827;
line-height:1.3;
">
Reset Your Password
</h1>

<p
style="
margin:0;
font-size:16px;
line-height:28px;
color:#6b7280;
">
We received a request to reset the password for your account.
Click the button below to choose a new password.
</p>

</td>
</tr>

<tr>
<td align="center" style="padding:20px 40px;">

<a
href="${resetPasswordLink}"
style="
display:inline-block;
background:#111827;
color:#ffffff;
text-decoration:none;
padding:16px 34px;
border-radius:12px;
font-size:16px;
font-weight:600;
">
Reset Password
</a>

</td>
</tr>

<tr>
<td style="padding:12px 40px 36px;">

<p style="font-size:14px;color:#6b7280;line-height:24px;margin:0 0 12px;">
Or copy and paste this link into your browser:
</p>

<p
style="
word-break:break-all;
font-size:14px;
color:#2563eb;
margin:0;
line-height:24px;
">
${resetPasswordLink}
</p>

</td>
</tr>

<tr>
<td
style="
padding:28px 40px;
background:#f9fafb;
border-top:1px solid #e5e7eb;
">

<p style="margin:0 0 10px;font-size:15px;font-weight:600;color:#111827;">
Didn't request this?
</p>

<p style="margin:0;font-size:14px;line-height:24px;color:#6b7280;">
If you didn't request a password reset, you can safely ignore this email.
Your password won't change until you create a new one.
</p>

<p
style="
margin-top:24px;
font-size:13px;
color:#9ca3af;
">
This password reset link will expire in <strong>30 minutes</strong>.
</p>

</td>
</tr>

</table>

<p
style="
margin-top:24px;
font-size:13px;
color:#9ca3af;
text-align:center;
">
© 2026 ${ecomconfig.app.name} || ${ecomconfig.app.version} . All rights reserved.
</p>

</td>
</tr>
</table>

</body>
</html>
`,
      });
    } catch {
      await db.deleteMany({
        email: validated.email,
        type: "password-reset",
      });

      throw new Error("Failed to send email");
    }

    return {
      success: true,
      message:
        "If an account with that email exists, we've sent a password reset link.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};

export default authForgotPassword;
