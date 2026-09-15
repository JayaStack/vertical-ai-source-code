import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/legal-documents/[id] - Get single legal document by id or slug (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const documents = await fetchCmsResource("/api/public/legal", "documents");
    const document = documents.find((d: any) => d.id === params.id || d.slug === params.id);
    if (!document) {
      return NextResponse.json({ success: false, error: "Legal document not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: document });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
