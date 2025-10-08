import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/config/supabaseServer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const supabase = supabaseServer();

    const { error } = await supabase.from("users").delete().eq("email", email);

    if (error) {
      console.error("Delete user error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const res = NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });

    res.cookies.set("userEmail", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return res;
  } catch (err: any) {
    console.error("Delete API error:", err.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
