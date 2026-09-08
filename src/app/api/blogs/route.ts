import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../auth";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// GET /api/blogs - List all published blogs
export async function GET() {
  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create a new blog (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const blog = await prisma.blogPost.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.title || "untitled"),
        title: body.title,
        bannerUrl: body.bannerUrl || "",
        outline: body.outline || "",
        content: body.content || "",
        readingTime: body.readingTime || "5 min",
        keyTakeaways: Array.isArray(body.keyTakeaways) ? body.keyTakeaways : [],
        author: body.author || "Admin",
        category: body.category || "AI Insights",
        tags: Array.isArray(body.tags) ? body.tags : [],
        status: body.status || "published",
        publishedAt: body.status === "published" ? new Date() : null,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create blog" },
      { status: 500 }
    );
  }
}
