import { NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/careers - List all published careers (via the admin CMS public API)
export async function GET() {
  try {
    const careers = await fetchCmsResource("/api/public/careers", "jobs");
    return NextResponse.json({ success: true, data: careers });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to read careers" },
      { status: 500 }
    );
  }
}
