const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

const STRATEGIC_TAG = 'Strategic Capabilities';
const STRATEGIC_HEADING = 'Functional Domain & Scope';
const TECHNICAL_TAG = 'Technical Specifications';
const TECHNICAL_HEADING = 'Architecture & Logic';
const COMPONENTS_HEADING = 'Core Components';
const COMPONENTS_SUBHEADING = 'Advanced technical primitives designed for deep enterprise integration.';
const IMPACT_TAG = 'Enterprise Impact';
const IMPACT_HEADING = 'Driving Performance at Scale';

const features = [
  {
    slug: 'framework',
    categoryBadge: 'Framework',
    heroBannerText: 'Vertical OS Framework',
    mainHeading: 'A System of Action',
    introDescription: "While others focus on 'Systems of Record' (documenting what happened), we focus on the System of Action (deciding what happens next). Our platform acts as the central nervous system for the autonomous enterprise, transforming static documentation into dynamic, real-time execution protocols.",
    heroBannerImageUrl: '/why-us/framework/banner.webp',
    featuredContentImageUrl: '/why-us/framework/cover.webp',
    sec1Text: 'The Orchestration Layer (Maestro): Dynamically routes every interaction based on real-time intent and persona analysis, ensuring that the right logic is applied to every unique customer journey without hard-coded decision trees.',
    sec2Text: 'The Voice/Communication OS (Conversa): A multimodal engine that handles 100k+ concurrent calls with human-grade empathy and persistent short/long-term memory, bridging the gap between raw LLM output and high-fidelity communication.',
    sec3Text: 'The Governance Shield (Guardian): A real-time policy-enforcement layer that ensures 100% compliance before a single word is spoken, providing a safety net that traditional "probabilistic" AI models completely lack.',
    results: [
      { label: 'Execution Logic', value: 'Action-Led' },
      { label: 'Concurrent Streams', value: '100k+' },
      { label: 'Compliance Rate', value: '100.0%' },
    ],
    capabilities: ['Maestro Orchestration', 'Conversa Voice OS', 'Guardian Shield'],
  },
  {
    slug: 'architecture',
    categoryBadge: 'Architecture',
    heroBannerText: 'High-Frequency Core',
    mainHeading: 'Built for High-Frequency Enterprise',
    introDescription: 'Our architecture is designed for the high-stakes environment of BFSI and Telecom, where a millisecond of lag or a single hallucination can cost millions. We solve for the hardest problems in modern computation: Multimodal, Multilingual, and High-Frequency systems.',
    heroBannerImageUrl: '/why-us/architecture/banner.webp',
    featuredContentImageUrl: '/why-us/architecture/cover.webp',
    sec1Text: "VeloxCore Engine: Our proprietary low-latency core provides the 'nervous system' for the OS, ensuring that AI-to-human transitions and 'Hot Transfers' happen without a perceptible break in context or data loss.",
    sec2Text: 'Multimodal SLM/LLM Hybrid: We utilize specialized Small Language Models (SLMs) for deterministic tasks (like compliance and routing) and Large Language Models (LLMs) for complex reasoning, balancing speed with intelligence.',
    sec3Text: "Cognitive Continuity: Our dual-memory architecture ensures the AI remembers a customer's journey across years (Long-term) and across the last ten seconds of a live conversation (Short-term) for a truly persistent identity.",
    results: [
      { label: 'Core Latency', value: '<500ms' },
      { label: 'Memory Type', value: 'Dual-Cache' },
      { label: 'Hybrid Logic', value: 'SLM/LLM' },
    ],
    capabilities: ['VeloxCore Engine', 'Cognitive Continuity', 'SLM/LLM Hybridization'],
  },
  {
    slug: 'security',
    categoryBadge: 'Security',
    heroBannerText: 'Enterprise Security',
    mainHeading: 'Default-Deny Security Posture',
    introDescription: "For our customers and investors, security is the foundation of value. We build with a 'Default-Deny' security posture, ensuring a bank-grade infrastructure that withstands the most rigorous external penetration testing.",
    heroBannerImageUrl: '/why-us/security/banner.webp',
    featuredContentImageUrl: '/why-us/security/cover.webp',
    sec1Text: 'System Hardening: Every endpoint and microservice in our architecture is isolated by default. We provide dedicated VPC peering and air-gapped environments for the most sensitive enterprise workloads.',
    sec2Text: 'Cryptographic Integrity: All data, both in transit and at rest, is protected by industry-standard AES-256 and TLS 1.3 protocols, ensuring that your data moats remain impenetrable.',
    sec3Text: 'Infrastructure Resilience: Our security-first engineering allows enterprises to automate mission-critical workflows with zero exposure to external cyber threats or unauthorized access.',
    results: [
      { label: 'Security Posture', value: 'Default-Deny' },
      { label: 'VPC Access', value: 'Dedicated' },
      { label: 'Encryption', value: 'AES-256' },
    ],
    capabilities: ['VPC Peering', 'TLS 1.3 Protocols', 'Air-Gapped Environments'],
  },
  {
    slug: 'compliance',
    categoryBadge: 'Compliance',
    heroBannerText: 'Regulatory Compliance',
    mainHeading: 'Deterministic Policy Enforcement',
    introDescription: 'Our platform is built to meet the rigorous standards of global financial and healthcare regulators. By hard-coding guidelines like RBI, GDPR, and CCPA directly into the orchestration layer, we ensure that every autonomous action is legally compliant by design.',
    heroBannerImageUrl: '/why-us/compliance/banner.webp',
    featuredContentImageUrl: '/why-us/compliance/cover.webp',
    sec1Text: 'Policy Enforcement: Through our Guardian layer, regulatory guardrails are enforced in real-time. If the system detects a potential compliance breach, it autonomously self-corrects before any external communication occurs.',
    sec2Text: "Explainable AI (XAI): We eliminate the 'Black Box' problem by providing clear, human-readable reasoning for every decision. This ensures that human-in-the-loop oversight is always possible and audit-ready.",
    sec3Text: 'Immutable Auditability: Every decision made by the OS-from routing choices to transactional nudges-is logged with 100% traceability, providing internal and external auditors with a pristine, untamperable record of execution.',
    results: [
      { label: 'Traceability', value: '100%' },
      { label: 'Compliance Logic', value: 'Hard-Coded' },
      { label: 'Audit Readiness', value: 'Instant' },
    ],
    capabilities: ['Guardian Enforcement', 'XAI Transparency', 'Immutable Ledgers'],
  },
  {
    slug: 'privacy',
    categoryBadge: 'Data Privacy',
    heroBannerText: 'Data Sovereignty',
    mainHeading: 'Jurisdiction-locked Infrastructure',
    introDescription: "For our global partners, privacy isn't a feature-it's a jurisdictional requirement. We ensure that sensitive PII (Personally Identifiable Information) is redacted or encrypted at the edge, ensuring the 'brains' of the AI never see what they don't need to see.",
    heroBannerImageUrl: '/why-us/privacy/banner.webp',
    featuredContentImageUrl: '/why-us/privacy/cover.webp',
    sec1Text: 'Zero-Knowledge Architecture: We enforce a strict protocol where customer data is sanitized at the edge layer. This ensures that proprietary intellectual property and sensitive customer records are never exposed to the underlying inference models.',
    sec2Text: 'Sovereign Deployment Models: We offer on-premise, private cloud, or hybrid deployment models to ensure your enterprise data never leaves your jurisdictional borders, satisfying the most stringent data localization laws.',
    sec3Text: 'Uncompromising Privacy: By combining edge-side redaction with localized hosting, we provide a environment where businesses can leverage global-scale AI without sacrificing their data moats or customer trust.',
    results: [
      { label: 'Data Exposure', value: '0%' },
      { label: 'Sovereignty', value: 'Locked' },
      { label: 'PII Redaction', value: 'Real-time' },
    ],
    capabilities: ['Zero-Knowledge Tunnels', 'Jurisdictional Locking', 'Edge-Layer Sanitization'],
  },
  {
    slug: 'philosophy',
    categoryBadge: 'Philosophy',
    heroBannerText: 'Philosophy & Mission',
    mainHeading: 'Engineering the 10x Future',
    introDescription: "We are architecting the Enterprise OS for the Autonomous Age-a multi-billion dollar category shift that moves beyond the 'System of Record' to the System of Action. We operate at the intersection of Systems Thinking and Radical Velocity.",
    heroBannerImageUrl: '/why-us/philosophy/banner.webp',
    featuredContentImageUrl: '/why-us/philosophy/cover.webp',
    sec1Text: 'The Economic Shift: The traditional enterprise is weighted down by linear scaling-to grow, you must add headcount and complexity. We break this cycle by transforming static interactions into high-frequency decision points.',
    sec2Text: 'Category Mission: We are rebuilding the foundational infrastructure of commerce. Our platform is the nervous system that allows an enterprise to sleep, learn, and scale without friction, creating a new standard for institutional intelligence.',
    sec3Text: 'The Engineering Ethos: Solving for complexity at scale. We build for sub-500ms latency and dynamic linguistic empathy because we know that at scale, the smallest technical breakthrough impacts millions of lives.',
    results: [
      { label: 'Economic Shift', value: 'Outcome-Led' },
      { label: 'Outcome Velocity', value: 'Double' },
      { label: 'Engineering Goal', value: '10x Future' },
    ],
    capabilities: ['Radical Velocity', 'Systems Thinking', 'Autonomous Enterprise'],
  },
];

async function main() {
  console.log('Seeding WhyFramework pillars...');
  for (const f of features) {
    const record = {
      slug: f.slug,
      categoryBadge: f.categoryBadge,
      heroBannerText: f.heroBannerText,
      mainHeading: f.mainHeading,
      introDescription: f.introDescription,
      heroBannerImageUrl: f.heroBannerImageUrl,
      featuredContentImageUrl: f.featuredContentImageUrl,
      sec1Tag: STRATEGIC_TAG,
      sec1Heading: STRATEGIC_HEADING,
      sec1Text: f.sec1Text,
      sec2Tag: TECHNICAL_TAG,
      sec2Heading: TECHNICAL_HEADING,
      sec2Text: f.sec2Text,
      componentsHeading: COMPONENTS_HEADING,
      componentsSubheading: COMPONENTS_SUBHEADING,
      capabilities: f.capabilities,
      sec3Tag: IMPACT_TAG,
      sec3Heading: IMPACT_HEADING,
      sec3Text: f.sec3Text,
      results: f.results,
      status: 'published',
      updatedAt: new Date(),
    };

    await prisma.whyFramework.upsert({
      where: { slug: f.slug },
      update: record,
      create: { id: uuidv4(), ...record },
    });
    console.log('Seeded:', f.heroBannerText, `(${f.slug})`);
  }
  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
