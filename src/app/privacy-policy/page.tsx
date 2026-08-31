import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import PageHero from "@/components/landing-page/page-hero";


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="Privacy Policy"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop"
        backgroundText="Privacy Policy"
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-12 border-b border-gray-100">
          <p className="text-gray-500 text-lg">
            Last updated: March 13, 2026
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At The Vertical AI, we are committed to protecting your privacy and ensuring the security of your personal and enterprise data. This Privacy Policy details how we collect, use, and safeguard the information you provide when accessing our AI-native enterprise solutions, including our suite of agents (Maestro, Vocalis, Guardian, Insights, and Conversa).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information to provide better services to all our users-from figuring out basic stuff like which language you speak, to more complex things like which AI workflows are most useful for your enterprise. We collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information you give us:</strong> Account data, contact details, and enterprise configurations.</li>
              <li><strong>Information we get from your use of our services:</strong> Log information, location information, and interaction data with our AI agents.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
            <p className="leading-relaxed mb-4">
              Our core usage of your data is to train, maintain, and improve our AI orchestration brain and specialized agents. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our platform functionality.</li>
              <li>Develop new features and enterprise AI agents.</li>
              <li>Measure performance and conduct data analysis.</li>
              <li>Communicate with you regarding updates, security alerts, and support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="leading-relaxed">
              The Vertical AI does not sell your personal data. We only share personal information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We uphold rigorous agreements ensuring these third parties respect your data privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Privacy Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can manage your information directly through your The Vertical AI dashboard or by contacting our Data Protection Officer at info@thevertical.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may change this Privacy Policy from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including email notifications of privacy policy changes).
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions or concerns?</h3>
            <p className="text-blue-800">
              Reach out to our privacy team at <a href="mailto:info@thevertical.ai" className="font-medium underline hover:text-blue-600 transition-colors">info@thevertical.ai</a>.
            </p>
          </div>
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
