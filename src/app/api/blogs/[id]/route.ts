import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/blogs/[id] - Get single blog
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const blog = await prisma.blogPost.findFirst({
      where: { OR: [{ id: params.id }, { slug: params.id }] },
    });
    if (!blog) return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// PUT /api/blogs/[id] - Update blog (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const blog = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        ...body,
        publishedAt: body.status === "published" ? new Date() : null,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete blog (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.blogPost.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
