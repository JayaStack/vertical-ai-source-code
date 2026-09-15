import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../auth";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { fetchCmsResource } from "@/lib/cms-api";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// GET /api/legal-documents - List published legal documents (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let documents = await fetchCmsResource("/api/public/legal", "documents");
    documents = documents.filter((d: any) => d.status === "published");
    if (slug) documents = documents.filter((d: any) => d.slug === slug);

    return NextResponse.json({ success: true, data: documents });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch legal documents" },
      { status: 500 }
    );
  }
}

// POST /api/legal-documents - Create a new legal document (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const document = await prisma.legalDocument.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.title || "untitled"),
        title: body.title || "",
        supportEmail: body.supportEmail || "",
        bannerUrl: body.bannerUrl || "",
        content: body.content || "",
        lastUpdated: body.lastUpdated ? new Date(body.lastUpdated) : null,
        status: body.status || "published",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: document }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create legal document" },
      { status: 500 }
    );
  }
}
