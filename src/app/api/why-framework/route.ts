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

// GET /api/why-framework - List published pillars (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let pillars = await fetchCmsResource("/api/public/why-framework", "frameworks");
    pillars = pillars.filter((p: any) => p.status === "published");
    if (slug) pillars = pillars.filter((p: any) => p.slug === slug);

    return NextResponse.json({ success: true, data: pillars });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch pillars" },
      { status: 500 }
    );
  }
}

// POST /api/why-framework - Create a new pillar (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const pillar = await prisma.whyFramework.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.heroBannerText || "untitled"),
        categoryBadge: body.categoryBadge || "",
        heroBannerText: body.heroBannerText || "",
        mainHeading: body.mainHeading || "",
        introDescription: body.introDescription || "",
        heroBannerImageUrl: body.heroBannerImageUrl || "",
        featuredContentImageUrl: body.featuredContentImageUrl || "",
        sec1Tag: body.sec1Tag || "",
        sec1Heading: body.sec1Heading || "",
        sec1Text: body.sec1Text || "",
        sec2Tag: body.sec2Tag || "",
        sec2Heading: body.sec2Heading || "",
        sec2Text: body.sec2Text || "",
        componentsHeading: body.componentsHeading || "",
        componentsSubheading: body.componentsSubheading || "",
        capabilities: Array.isArray(body.capabilities) ? body.capabilities : [],
        sec3Tag: body.sec3Tag || "",
        sec3Heading: body.sec3Heading || "",
        sec3Text: body.sec3Text || "",
        results: body.results || [],
        status: body.status || "published",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: pillar }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create pillar" },
      { status: 500 }
    );
  }
}
