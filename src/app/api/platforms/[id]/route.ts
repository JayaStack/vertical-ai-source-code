import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/platforms/[id] - Get single platform by id or slug
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const platform = await prisma.platformOs.findFirst({
      where: { OR: [{ id: params.id }, { slug: params.id }] },
    });
    if (!platform) {
      return NextResponse.json({ success: false, error: "Platform not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: platform });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// PUT /api/platforms/[id] - Update platform (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const platform = await prisma.platformOs.update({
      where: { id: params.id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: platform });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/platforms/[id] - Delete platform (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.platformOs.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Platform deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
