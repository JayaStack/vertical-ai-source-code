import { NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/testimonials - List published testimonials (via the admin CMS public API)
export async function GET() {
  try {
    let testimonials = await fetchCmsResource("/api/public/testimonials", "testimonials");
    testimonials = testimonials.filter((t: any) => t.status === "published");
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
