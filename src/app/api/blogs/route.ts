import { NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/blogs - List all published blogs (via the admin CMS public API)
export async function GET() {
  try {
    const blogs = await fetchCmsResource("/api/public/blogs", "blogs");
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
