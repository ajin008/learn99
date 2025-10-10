import { supabaseServer } from "@/lib/config/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { moduleId, email } = await req.json();
    const supabase = supabaseServer();

    // Fetch completed_modules array
    const { data, error } = await supabase
      .from("user_modules")
      .select("completed_modules")
      .eq("user_email", email)
      .single();

    if (error) throw error;

    const completed = data?.completed_modules?.includes(moduleId) ?? false;

    return NextResponse.json({ completed });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
