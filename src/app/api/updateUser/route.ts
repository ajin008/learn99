// src/app/api/updateUser/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/config/supabaseServer";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const supabase = supabaseServer();

    const updates: Record<string, any> = {};
    if (username) updates.username = username;
    if (password) updates.password = password;

    const { data, error } = await supabase
      .from("users")
      .update(updates)
      .eq("email", email)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: data,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
