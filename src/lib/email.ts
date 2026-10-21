// src/lib/email.ts
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Target recipient email where notification should be delivered
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || "";

// Sender email configured in Resend (default onboarding address works instantly for testing)
export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
