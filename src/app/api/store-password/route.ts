import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/config/supabaseServer";

export async function POST(req: Request) {
  try {
    const { password, email } = await req.json();

    if (!password || !email) {
      return NextResponse.json({ error: "Password and email required" }, { status: 400 });
    }

    const supabase = supabaseServer();

    // Update user's password by email
    const { data, error } = await supabase
      .from("users")
      .update({ password })
      .eq("email", email)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
