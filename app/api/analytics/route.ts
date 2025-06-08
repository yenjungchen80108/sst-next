// app/api/analytics/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("📊 Web Vitals received:", body);
  return NextResponse.json({ success: true });
}
