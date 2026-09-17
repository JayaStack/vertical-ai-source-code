import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import JobDetailClient from "./JobDetailClient";

async function getPublishedJob(slug: string) {
  const jobs = await fetchCmsResource("/api/public/careers", "jobs");
  const job: any = jobs.find((j: any) => j.slug === slug && j.status === "published");
  return job || null;
}

export async function generateStaticParams() {
  try {
    const jobs = await fetchCmsResource("/api/public/careers", "jobs");
    return jobs
      .filter((j: any) => j.status === "published")
      .map((j: any) => ({ slug: j.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getPublishedJob(slug);
  if (!job) return {};

  const title = `${job.title} | The Vertical AI`;
  const description =
    job.description ||
    `Join The Vertical AI as a ${job.title} in ${job.category}. ${job.location} · ${job.type}.`;
  const canonical = `${SITE_URL}/careers/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      siteName: "The Vertical AI",
      url: canonical,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  };
}

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  contract: "CONTRACTOR",
  internship: "INTERN",
  temporary: "TEMPORARY",
};

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getPublishedJob(slug);

  if (!job) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.title,
    datePosted: job.createdAt || undefined,
    employmentType: EMPLOYMENT_TYPE_MAP[String(job.type || "").toLowerCase()] || undefined,
    hiringOrganization: {
      "@type": "Organization",
      name: "The Vertical AI",
      sameAs: SITE_URL,
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
          },
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobDetailClient />
    </>
  );
}
