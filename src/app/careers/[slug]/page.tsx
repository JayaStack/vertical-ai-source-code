import { readFile } from "fs/promises";
import path from "path";
import JobDetailClient from "./JobDetailClient";

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), "src", "data", "careers-db.json");
    const data = await readFile(dbPath, "utf-8");
    const careers = JSON.parse(data);
    return careers.map((job: { slug: string }) => ({ slug: job.slug }));
  } catch {
    return [];
  }
}

export default function JobDetailPage() {
  return <JobDetailClient />;
}
