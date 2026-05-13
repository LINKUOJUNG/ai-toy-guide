import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { url, platform } = await request.json();
  // TODO: Save to Supabase - increment click_count
  console.log(`Affiliate click: ${platform} - ${url}`);
  return NextResponse.json({ success: true });
}
