// src/app/api/beta-request/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "../../../lib/supabase";
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

    if (!isSupabaseConfigured) {
      console.warn("Supabase is not configured. Define NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
      return NextResponse.json({ message: "Beta request recorded (Demo mode: Supabase not configured)" }, { status: 200 });
    }

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
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    return NextResponse.json({ message: "Beta request recorded" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
