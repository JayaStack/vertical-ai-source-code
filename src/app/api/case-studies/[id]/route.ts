import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/case-studies/[id] - Get single case study by id or slug
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const caseStudy = await prisma.caseStudy.findFirst({
      where: { OR: [{ id: params.id }, { slug: params.id }] },
    });
    if (!caseStudy) {
      return NextResponse.json({ success: false, error: "Case study not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: caseStudy });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// PUT /api/case-studies/[id] - Update case study (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const caseStudy = await prisma.caseStudy.update({
      where: { id: params.id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: caseStudy });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/case-studies/[id] - Delete case study (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.caseStudy.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Case study deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
