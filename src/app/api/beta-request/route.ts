// src/app/api/beta-request/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "../../../lib/supabase";
import { resend, NOTIFICATION_EMAIL, SENDER_EMAIL } from "../../../lib/email";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  organization: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }
    const { name, email, organization } = parsed.data;

    // 1. Save to Supabase if configured
    if (isSupabaseConfigured) {
      const { error } = await supabase.from("beta_requests").insert({
        full_name: name,
        email,
        organization,
        role: "unspecified",
        ml_task: "unspecified",
        model_status: "unspecified",
        test_description: "Submitted via landing page",
        ip_hash: "N/A",
        consent: true,
      });
      if (error) {
        console.error("Supabase beta_requests error:", error);
      }
    } else {
      console.warn("Supabase is not configured. Saving skipped.");
    }

    // 2. Send notification email to admin if Resend is configured
    if (resend && NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: SENDER_EMAIL,
          to: NOTIFICATION_EMAIL,
          replyTo: email,
          subject: `🚀 New Beta Request from ${name}`,
          html: `
            <h2>New DriftWatch Beta Access Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `,
        });
      } catch (mailError) {
        console.error("Resend notification error:", mailError);
      }
    }

    return NextResponse.json({ message: "Beta request recorded successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
