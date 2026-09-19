import { NextResponse } from "next/server";
import { CMS_API_URL } from "@/lib/cms-api";

export async function GET() {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/about-us`, { cache: "no-store" });
    if (!res.ok) throw new Error(`CMS request failed (${res.status})`);
    const json = await res.json();
    return NextResponse.json({ success: true, data: json.about });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch about-us" },
      { status: 500 }
    );
  }
}
