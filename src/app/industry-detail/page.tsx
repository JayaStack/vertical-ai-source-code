import { permanentRedirect } from "next/navigation";

// Legacy URL (?slug=) redirected to the new path-based route.
export default async function LegacyIndustryDetailRedirect({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  permanentRedirect(slug ? `/industry/${slug}` : "/");
}
