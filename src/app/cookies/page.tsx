import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import PageHero from "@/components/landing-page/page-hero";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="Cookie Policy"
        backgroundImage="https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=2942&auto=format&fit=crop"
        backgroundText="Cookie Policy"
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <p className="text-gray-500 text-lg">
            Last updated: March 13, 2026
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by online service providers, including The Vertical AI, to facilitate and help make the interaction between users and websites faster and easier, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Why We Use Cookies</h2>
            <p className="leading-relaxed mb-4">
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our AI orchestration platform to operate smoothly-these are referred to as "essential" or "strictly necessary" cookies. Other cookies enable us to track user behavior to improve our user experience.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required to authenticate users and prevent fraudulent use of enterprise accounts.</li>
              <li><strong>Performance and Analytics:</strong> Help us understand how visitors interact with our website to constantly optimize the platform.</li>
              <li><strong>Functionality Cookies:</strong> Let us remember the choices you make (such as language or region preferences).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <p className="leading-relaxed">
              <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are crucial for our enterprise dashboard to remember your active session state.<br /><br />
              <strong>Persistent Cookies:</strong> These remain on your device until they expire or are manually deleted. They ensure that we remember your login status or custom dashboard widgets so you don’t have to configure them every time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our services and support advertising efforts. These third parties utilize their own cookies to collect data about your interactions over time. We do not have control over how third-party plugins use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How to Control Cookies</h2>
            <p className="leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that appears upon your first visit. You can also amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality might be restricted.
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Want to know more?</h3>
            <p className="text-blue-800">
              For any questions or concerns regarding our Cookie Policy, contact us at <a href="mailto:info@thevertical.ai" className="font-medium underline hover:text-blue-600 transition-colors">info@thevertical.ai</a>.
            </p>
          </div>
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
