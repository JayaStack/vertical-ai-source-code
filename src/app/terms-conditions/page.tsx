import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import PageHero from "@/components/landing-page/page-hero";
import prisma from "@/lib/prisma";

export default async function TermsOfService() {
  const doc = await prisma.legalDocument.findFirst({
    where: { slug: "terms-conditions", status: "published" },
  });

  const title = doc?.title || "Terms of Service";
  const lastUpdated = doc?.lastUpdated
    ? new Date(doc.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";
  const supportEmail = doc?.supportEmail || "info@thevertical.ai";

  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title={title}
        backgroundImage={doc?.bannerUrl || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"}
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        {lastUpdated && (
          <div className="mb-12 border-b border-gray-100 pb-8">
            <p className="text-gray-500 text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>
        )}

        <div
          className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8"
          dangerouslySetInnerHTML={{ __html: doc?.content || "" }}
        />

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Need legal clarification?</h3>
          <p className="text-blue-800">
            Contact our legal department at <a href={`mailto:${supportEmail}`} className="font-medium underline hover:text-blue-600 transition-colors">{supportEmail}</a>.
          </p>
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
