import { jobListings } from "@/data/careers";
import JobDetailClient from "./JobDetailClient";

export function generateStaticParams() {
  return jobListings.map((job) => ({ slug: job.slug }));
}

export default function JobDetailPage() {
  return <JobDetailClient />;
}
