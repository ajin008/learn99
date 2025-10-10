// app/api/getCompletedModules/route.ts
import { supabaseServer } from "@/lib/config/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const supabase = supabaseServer();

    const { data, error } = await supabase
      .from("user_modules")
      .select("completed_modules")
      .eq("user_email", email)
      .maybeSingle();

    if (error) throw error;

    return NextResponse.json({
      completedModules: data?.completed_modules || [],
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
