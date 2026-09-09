const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

const SUPPORT_EMAIL = 'info@thevertical.ai';
const LAST_UPDATED = new Date('2026-03-13T00:00:00.000Z');

const H2 = 'text-2xl font-semibold text-gray-900 mb-4';
const UL = 'list-disc pl-6 space-y-2';

const documents = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    supportEmail: SUPPORT_EMAIL,
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop',
    lastUpdated: LAST_UPDATED,
    content: `
      <section>
        <h2 class="${H2}">1. Introduction</h2>
        <p class="leading-relaxed">At The Vertical AI, we are committed to protecting your privacy and ensuring the security of your personal and enterprise data. This Privacy Policy details how we collect, use, and safeguard the information you provide when accessing our AI-native enterprise solutions, including our suite of agents (Maestro, Vocalis, Guardian, Insights, and Conversa).</p>
      </section>
      <section>
        <h2 class="${H2}">2. Information We Collect</h2>
        <p class="leading-relaxed mb-4">We collect information to provide better services to all our users-from figuring out basic stuff like which language you speak, to more complex things like which AI workflows are most useful for your enterprise. We collect information in the following ways:</p>
        <ul class="${UL}">
          <li><strong>Information you give us:</strong> Account data, contact details, and enterprise configurations.</li>
          <li><strong>Information we get from your use of our services:</strong> Log information, location information, and interaction data with our AI agents.</li>
        </ul>
      </section>
      <section>
        <h2 class="${H2}">3. How We Use Information</h2>
        <p class="leading-relaxed mb-4">Our core usage of your data is to train, maintain, and improve our AI orchestration brain and specialized agents. Specifically, we use your data to:</p>
        <ul class="${UL}">
          <li>Provide, maintain, and improve our platform functionality.</li>
          <li>Develop new features and enterprise AI agents.</li>
          <li>Measure performance and conduct data analysis.</li>
          <li>Communicate with you regarding updates, security alerts, and support.</li>
        </ul>
      </section>
      <section>
        <h2 class="${H2}">4. Data Sharing and Third Parties</h2>
        <p class="leading-relaxed">The Vertical AI does not sell your personal data. We only share personal information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We uphold rigorous agreements ensuring these third parties respect your data privacy.</p>
      </section>
      <section>
        <h2 class="${H2}">5. Your Privacy Rights</h2>
        <p class="leading-relaxed">Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can manage your information directly through your The Vertical AI dashboard or by contacting our Data Protection Officer at ${SUPPORT_EMAIL}.</p>
      </section>
      <section>
        <h2 class="${H2}">6. Changes to This Policy</h2>
        <p class="leading-relaxed">We may change this Privacy Policy from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including email notifications of privacy policy changes).</p>
      </section>
    `,
    status: 'published',
  },
  {
    slug: 'terms-conditions',
    title: 'Terms of Service',
    supportEmail: SUPPORT_EMAIL,
    bannerUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop',
    lastUpdated: LAST_UPDATED,
    content: `
      <section>
        <h2 class="${H2}">1. Agreement to Terms</h2>
        <p class="leading-relaxed">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and The Vertical AI ("we," "us" or "our"), concerning your access to and use of our AI-native enterprise orchestration software and related agents.</p>
      </section>
      <section>
        <h2 class="${H2}">2. Access and Use</h2>
        <p class="leading-relaxed mb-4">We grant you a non-exclusive, non-transferable, revocable license to access the The Vertical AI platform strictly in accordance with our terms. As a user, you agree to:</p>
        <ul class="${UL}">
          <li>Not duplicate or attempt to extract our proprietary AI models.</li>
          <li>Not use the services for any unauthorized data mining, scraping or machine learning training loops not explicitly provided.</li>
          <li>Keep your enterprise account access credentials secure.</li>
        </ul>
      </section>
      <section>
        <h2 class="${H2}">3. Intellectual Property</h2>
        <p class="leading-relaxed">Unless otherwise indicated, the Site, our AI agents (Maestro, Vocalis, Guardian, Insights, Conversa), and all source code, databases, functionality, software, designs, audio, video, text, and graphics on the Site are owned by us, and are protected by copyright and intellectual property rights under international law.</p>
      </section>
      <section>
        <h2 class="${H2}">4. User Content and Data</h2>
        <p class="leading-relaxed">You retain all rights to the enterprise data you ingest into The Vertical AI for orchestration and analytics. By supplying your data to our models, you grant us a limited license merely to process the data as part of delivering our services to you. We do not claim ownership of your data.</p>
      </section>
      <section>
        <h2 class="${H2}">5. Disclaimer and Liability</h2>
        <p class="leading-relaxed">The services are provided on an "as-is" and "as-available" basis. We disclaim all warranties, express or implied, in connection with the services and your use thereof. In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages.</p>
      </section>
      <section>
        <h2 class="${H2}">6. Governing Law</h2>
        <p class="leading-relaxed">These terms are governed by and construed in accordance with the laws of California. You irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise out of, under, or in connection with these Terms.</p>
      </section>
    `,
    status: 'published',
  },
  {
    slug: 'security',
    title: 'Security Policy',
    supportEmail: SUPPORT_EMAIL,
    bannerUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop',
    lastUpdated: LAST_UPDATED,
    content: `
      <section>
        <h2 class="${H2}">1. Enterprise-Grade Security</h2>
        <p class="leading-relaxed">At The Vertical AI, security is not an afterthought-it's woven into the very fabric of our AI-native enterprise framework. We understand that our AI agents deal with your most sensitive business logic, conversations, and enterprise data. Our goal is to ensure end-to-end protection for your organization.</p>
      </section>
      <section>
        <h2 class="${H2}">2. Infrastructure & Hosting</h2>
        <p class="leading-relaxed mb-4">Our infrastructure relies on trusted cloud providers that meet the strictest international security standards. We employ isolated VPC environments, continuous threat monitoring, and zero-trust policies between all internal services.</p>
        <ul class="${UL}">
          <li><strong>Physical Security:</strong> Data centers are guarded 24/7 with biometric multi-factor authentication.</li>
          <li><strong>Network Security:</strong> DDoS protection, strict perimeter firewalls, and deep packet inspection.</li>
        </ul>
      </section>
      <section>
        <h2 class="${H2}">3. Data Encryption</h2>
        <p class="leading-relaxed">We enforce strong encryption standards both in transit and at rest. All data sent across the network between you and The Vertical AI services is encrypted using TLS 1.3 or higher. Data stored within our databases is encrypted using AES-256 block-level storage encryption, ensuring that unauthorized parties cannot access your data even in a physical breach.</p>
      </section>
      <section>
        <h2 class="${H2}">4. Compliance & Certifications</h2>
        <p class="leading-relaxed">Our Guardian agents and underlying architecture are built to help you maintain continuous compliance. The Vertical AI currently adheres to industry best practices and undergoes annual third-party audits for SOC 2 Type II compliance. We are committed to upholding GDPR and CCPA standards.</p>
      </section>
      <section>
        <h2 class="${H2}">5. Vulnerability Management</h2>
        <p class="leading-relaxed">Our platform is scanned on a daily basis for known vulnerabilities mapping to the OWASP top 10 and beyond. We also conduct biannual intensive penetration tests conducted by independent, CREST-approved third-party ethical hackers.</p>
      </section>
      <section>
        <h2 class="${H2}">6. Incident Response</h2>
        <p class="leading-relaxed">In the unlikely event of a security incident, our Incident Response Team has established protocols to act swiftly. Customers will be notified promptly-in under 48 hours-of any confirmed breach impacting their enterprise orchestration environment.</p>
      </section>
    `,
    status: 'published',
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    supportEmail: SUPPORT_EMAIL,
    bannerUrl: 'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=2942&auto=format&fit=crop',
    lastUpdated: LAST_UPDATED,
    content: `
      <section>
        <h2 class="${H2}">1. What are Cookies?</h2>
        <p class="leading-relaxed">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by online service providers, including The Vertical AI, to facilitate and help make the interaction between users and websites faster and easier, as well as to provide reporting information.</p>
      </section>
      <section>
        <h2 class="${H2}">2. Why We Use Cookies</h2>
        <p class="leading-relaxed mb-4">We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our AI orchestration platform to operate smoothly-these are referred to as "essential" or "strictly necessary" cookies. Other cookies enable us to track user behavior to improve our user experience.</p>
        <ul class="${UL}">
          <li><strong>Essential Cookies:</strong> Required to authenticate users and prevent fraudulent use of enterprise accounts.</li>
          <li><strong>Performance and Analytics:</strong> Help us understand how visitors interact with our website to constantly optimize the platform.</li>
          <li><strong>Functionality Cookies:</strong> Let us remember the choices you make (such as language or region preferences).</li>
        </ul>
      </section>
      <section>
        <h2 class="${H2}">3. Types of Cookies We Use</h2>
        <p class="leading-relaxed"><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are crucial for our enterprise dashboard to remember your active session state.<br /><br /><strong>Persistent Cookies:</strong> These remain on your device until they expire or are manually deleted. They ensure that we remember your login status or custom dashboard widgets so you don't have to configure them every time.</p>
      </section>
      <section>
        <h2 class="${H2}">4. Third-Party Cookies</h2>
        <p class="leading-relaxed">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our services and support advertising efforts. These third parties utilize their own cookies to collect data about your interactions over time. We do not have control over how third-party plugins use cookies.</p>
      </section>
      <section>
        <h2 class="${H2}">5. How to Control Cookies</h2>
        <p class="leading-relaxed">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that appears upon your first visit. You can also amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality might be restricted.</p>
      </section>
    `,
    status: 'published',
  },
];

async function main() {
  console.log('Seeding legal documents...');
  for (const doc of documents) {
    await prisma.legalDocument.upsert({
      where: { slug: doc.slug },
      update: { ...doc, updatedAt: new Date() },
      create: { id: uuidv4(), ...doc, updatedAt: new Date() },
    });
    console.log('Seeded:', doc.title, `(${doc.slug})`);
  }
  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
