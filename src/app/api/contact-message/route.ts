// src/app/api/contact-message/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "../../../lib/supabase";
import { resend, NOTIFICATION_EMAIL, SENDER_EMAIL } from "../../../lib/email";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  topic: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const { name, email, message, topic } = parsed.data;

    // 1. Save to Supabase if configured
    if (isSupabaseConfigured) {
      const { error } = await supabase.from("contact_messages").insert({
        name,
        email,
        message,
        topic: topic || "General Inquiry",
        ip_hash: "N/A",
        consent: true,
      });
      if (error) {
        console.error("Supabase contact_messages error:", error);
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
          subject: `📩 New Contact Message from ${name} [${topic || "General"}]`,
          html: `
            <h2>New DriftWatch Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Topic:</strong> ${topic || "General Inquiry"}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #3B5BDB;white-space:pre-wrap;">${message}</blockquote>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `,
        });
      } catch (mailError) {
        console.error("Resend notification error:", mailError);
      }
    }

    return NextResponse.json({ message: "Contact message saved successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
