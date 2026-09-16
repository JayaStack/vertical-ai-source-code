import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/platforms - List published platforms (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let platforms = await fetchCmsResource("/api/public/platform-os", "platforms");
    platforms = platforms.filter((p: any) => p.status === "published");
    if (slug) platforms = platforms.filter((p: any) => p.slug === slug);

    return NextResponse.json({ success: true, data: platforms });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch platforms" },
      { status: 500 }
    );
  }
}
