import { supabaseServer } from "@/lib/config/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { lessonId } = await req.json();
    const supabase = supabaseServer();

    const { data, error } = await supabase
      .from("lesson_materials")
      .select("video_url, screenshots")
      .eq("lesson_id", lessonId)
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
