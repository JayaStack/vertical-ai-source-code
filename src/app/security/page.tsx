import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import PageHero from "@/components/landing-page/page-hero";

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="Security Policy"
        backgroundImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
        backgroundText="Security Policy"
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <p className="text-gray-500 text-lg">
            Last updated: March 13, 2026
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Enterprise-Grade Security</h2>
            <p className="leading-relaxed">
              At The Vertical AI, security is not an afterthought-it's woven into the very fabric of our AI-native enterprise framework. We understand that our AI agents deal with your most sensitive business logic, conversations, and enterprise data. Our goal is to ensure end-to-end protection for your organization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Infrastructure & Hosting</h2>
            <p className="leading-relaxed mb-4">
              Our infrastructure relies on trusted cloud providers that meet the strictest international security standards. We employ isolated VPC environments, continuous threat monitoring, and zero-trust policies between all internal services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Physical Security:</strong> Data centers are guarded 24/7 with biometric multi-factor authentication.</li>
              <li><strong>Network Security:</strong> DDoS protection, strict perimeter firewalls, and deep packet inspection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Encryption</h2>
            <p className="leading-relaxed">
              We enforce strong encryption standards both in transit and at rest. All data sent across the network between you and The Vertical AI services is encrypted using TLS 1.3 or higher. Data stored within our databases is encrypted using AES-256 block-level storage encryption, ensuring that unauthorized parties cannot access your data even in a physical breach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compliance & Certifications</h2>
            <p className="leading-relaxed">
              Our Guardian agents and underlying architecture are built to help you maintain continuous compliance. The Vertical AI currently adheres to industry best practices and undergoes annual third-party audits for SOC 2 Type II compliance. We are committed to upholding GDPR and CCPA standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vulnerability Management</h2>
            <p className="leading-relaxed">
              Our platform is scanned on a daily basis for known vulnerabilities mapping to the OWASP top 10 and beyond. We also conduct biannual intensive penetration tests conducted by independent, CREST-approved third-party ethical hackers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Incident Response</h2>
            <p className="leading-relaxed">
              In the unlikely event of a security incident, our Incident Response Team has established protocols to act swiftly. Customers will be notified promptly-in under 48 hours-of any confirmed breach impacting their enterprise orchestration environment.
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Report a Vulnerability</h3>
            <p className="text-blue-800">
              We welcome reports from security researchers. Please contact our security operations center at <a href="mailto:info@thevertical.ai" className="font-medium underline hover:text-blue-600 transition-colors">info@thevertical.ai</a>.
            </p>
          </div>
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
