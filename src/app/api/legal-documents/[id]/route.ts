import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";
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

// PUT /api/legal-documents/[id] - Update legal document (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const document = await prisma.legalDocument.update({
      where: { id: params.id },
      data: {
        ...body,
        lastUpdated: body.lastUpdated ? new Date(body.lastUpdated) : undefined,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: document });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/legal-documents/[id] - Delete legal document (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.legalDocument.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Legal document deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
