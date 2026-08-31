import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import PageHero from "@/components/landing-page/page-hero";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="Terms of Service"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
        backgroundText="Terms"
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <p className="text-gray-500 text-lg">
            Last updated: March 13, 2026
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and The Vertical AI ("we," "us" or "our"), concerning your access to and use of our AI-native enterprise orchestration software and related agents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Access and Use</h2>
            <p className="leading-relaxed mb-4">
              We grant you a non-exclusive, non-transferable, revocable license to access the The Vertical AI platform strictly in accordance with our terms. As a user, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not duplicate or attempt to extract our proprietary AI models.</li>
              <li>Not use the services for any unauthorized data mining, scraping or machine learning training loops not explicitly provided.</li>
              <li>Keep your enterprise account access credentials secure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              Unless otherwise indicated, the Site, our AI agents (Maestro, Vocalis, Guardian, Insights, Conversa), and all source code, databases, functionality, software, designs, audio, video, text, and graphics on the Site are owned by us, and are protected by copyright and intellectual property rights under international law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content and Data</h2>
            <p className="leading-relaxed">
              You retain all rights to the enterprise data you ingest into The Vertical AI for orchestration and analytics. By supplying your data to our models, you grant us a limited license merely to process the data as part of delivering our services to you. We do not claim ownership of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer and Liability</h2>
            <p className="leading-relaxed">
              The services are provided on an "as-is" and "as-available" basis. We disclaim all warranties, express or implied, in connection with the services and your use thereof. In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the laws of California. You irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise out of, under, or in connection with these Terms.
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need legal clarification?</h3>
            <p className="text-blue-800">
              Contact our legal department at <a href="mailto:info@thevertical.ai" className="font-medium underline hover:text-blue-600 transition-colors">info@thevertical.ai</a>.
            </p>
          </div>
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
