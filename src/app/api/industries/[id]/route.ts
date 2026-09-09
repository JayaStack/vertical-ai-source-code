import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/industries/[id] - Get single industry by id or slug
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const industry = await prisma.industry.findFirst({
      where: { OR: [{ id: params.id }, { slug: params.id }] },
    });
    if (!industry) {
      return NextResponse.json({ success: false, error: "Industry not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: industry });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// PUT /api/industries/[id] - Update industry (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const industry = await prisma.industry.update({
      where: { id: params.id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: industry });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/industries/[id] - Delete industry (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.industry.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Industry deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
