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

// GET /api/case-studies - List published case studies (optional ?slug= filter)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const caseStudies = await prisma.caseStudy.findMany({
      where: {
        status: "published",
        ...(slug ? { slug } : {}),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: caseStudies });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch case studies" },
      { status: 500 }
    );
  }
}

// POST /api/case-studies - Create a new case study (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const caseStudy = await prisma.caseStudy.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.storyTitle || "untitled"),
        storyTitle: body.storyTitle || "",
        breadcrumbTitle: body.breadcrumbTitle || "",
        categoryBadge: body.categoryBadge || "",
        headerImageUrl: body.headerImageUrl || "",
        mainHeading: body.mainHeading || "",
        testimonialQuote: body.testimonialQuote || "",
        keyResults: body.keyResults || [],
        implementationSteps: Array.isArray(body.implementationSteps) ? body.implementationSteps : [],
        sections: body.sections || [],
        status: body.status || "published",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: caseStudy }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create case study" },
      { status: 500 }
    );
  }
}
