import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/blogs/[id] - Get single blog (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const blogs = await fetchCmsResource("/api/public/blogs", "blogs");
    const blog = blogs.find((b: any) => b.id === params.id || b.slug === params.id);
    if (!blog) return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
