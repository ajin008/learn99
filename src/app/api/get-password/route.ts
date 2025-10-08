import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/config/supabaseServer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const supabase = supabaseServer();

    // find the user in DB
    const { data: user, error } = await supabase
      .from("users")
      .select("email, password")
      .eq("email", email)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "No account found with this email" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      email: user.email,
      password: user.password,
    });
  } catch (err: any) {
    console.error("Password retrieval error:", err.message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
