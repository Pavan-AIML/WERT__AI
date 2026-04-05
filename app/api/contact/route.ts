import { NextResponse } from "next/server";

import { getSupabaseAdmin } from "@/lib/supabase-admin";

const MAX_LEN = 4000;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { name, email, company, body: message } = body as Record<
    string,
    unknown
  >;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(company) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { error: "Name, email, company, and message are required." },
      { status: 400 },
    );
  }

  if (message.length > MAX_LEN) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      body: message.trim(),
    });
    if (error) {
      console.error("[contact] database insert failed", error.message);
      return NextResponse.json(
        { error: "Could not save your message. Please try again later." },
        { status: 500 },
      );
    }
  }

  // Hook for email provider (Resend, SendGrid, etc.):
  // await sendContactEmail({ name, email, company, message });
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", { name, email, company, message: message.slice(0, 200) });
  }

  return NextResponse.json({ ok: true });
}
