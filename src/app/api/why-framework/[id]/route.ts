import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/why-framework/[id] - Get single pillar by id or slug
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const pillar = await prisma.whyFramework.findFirst({
      where: { OR: [{ id: params.id }, { slug: params.id }] },
    });
    if (!pillar) {
      return NextResponse.json({ success: false, error: "Pillar not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: pillar });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// PUT /api/why-framework/[id] - Update pillar (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const pillar = await prisma.whyFramework.update({
      where: { id: params.id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: pillar });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/why-framework/[id] - Delete pillar (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.whyFramework.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Pillar deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
