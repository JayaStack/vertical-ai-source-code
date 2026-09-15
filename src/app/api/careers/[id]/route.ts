import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const DB_FILE = path.join(process.cwd(), "src", "data", "careers-db.json");

interface Career {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience?: string;
  salary: string;
  description: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

async function readDB(): Promise<Career[]> {
  const data = await readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
}

// GET /api/careers/[id] - Get single career (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const careers = await readDB();
    const career = careers.find((c) => c.id === id || c.slug === id);

    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: career });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to read career" },
      { status: 500 }
    );
  }
}
