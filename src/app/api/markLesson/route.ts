import { supabaseServer } from "@/lib/config/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { moduleId, email } = await req.json();
    const supabase = supabaseServer();

    // Ensure row exists for the user
    await supabase.from("user_modules").upsert({ user_email: email }).eq("user_email", email);

    // Append moduleId to completed_modules array
    const { data, error } = await supabase.rpc("append_module", {
      user_email_input: email,
      module_id_input: moduleId,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
