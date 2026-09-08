import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scopeKey = searchParams.get("scopeKey");

    const faqs = await prisma.faq.findMany({
      where: {
        status: "published",
        ...(scopeKey ? { scopeKey } : {}),
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ success: true, data: faqs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
