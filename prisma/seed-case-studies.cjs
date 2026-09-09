const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

const implementationSteps = [
  'Seamless CRM Integration',
  'Custom Voice Cloning',
  '14-day Deployment cycle',
];

const caseStudies = [
  {
    id: uuidv4(),
    slug: 'regulatory-guardrail',
    storyTitle: 'The Regulatory Guardrail: Real-Time Compliance',
    breadcrumbTitle: 'Top Private Bank',
    categoryBadge: 'BFSI',
    headerImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2426',
    mainHeading: 'How Top Private Bank Optimized Operations',
    testimonialQuote: 'Compliance moved from a sampling exercise to 100% coverage. In the first two quarters, we reported zero major audit escalations.',
    keyResults: [
      { label: 'Reduction in Violations', value: '92%' },
      { label: 'Audit Coverage', value: '100%' },
      { label: 'Compliance Coverage', value: 'Real-time' },
    ],
    implementationSteps,
    sections: [
      { id: 1, title: 'The Context', content: 'For a leading Indian private bank, compliance was a high-stakes lottery. With over 50,000 agents handling millions of multilingual interactions, manual auditing could only cover 2% of calls. This "98% blind spot" represented a massive regulatory risk and a potential multi-crore liability.' },
      { id: 2, title: 'The Structural Failure', content: 'Legacy QA was a post-mortem process. By the time a violation was flagged, the damage was done. The bank needed to move from detecting mistakes to preventing them in the moment.' },
      { id: 3, imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600', imageAlt: 'Banking Infrastructure' },
      { id: 4, title: 'The Vertical OS Intervention', content: 'We deployed an integrated layer of Guardian and Maestro to create a "Digital Compliance Armor."' },
      { id: 5, title: 'The <500ms Challenge', content: 'Using VeloxCore, we achieved sub-500ms latency for live audio ingestion, allowing the AI to "listen" and "understand" faster than the human agent could speak.' },
      { id: 6, title: 'Policy-as-Code', content: 'We converted 500+ pages of RBI guidelines and internal scripts into executable logic.' },
      { id: 7, title: 'Real-Time Nudges', content: 'Maestro triggered instant visual nudges correcting agent behavior before the call ended.' },
      { id: 8, title: 'The Impact', content: 'Operational Alpha: QA teams shifted from "listening for errors" to "strategic coaching," increasing their internal efficiency by 10x. Turned a 2% sampling gamble into 100% real-time compliance infrastructure.' },
    ],
    status: 'published',
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    slug: 'customer-experience-os',
    storyTitle: 'Scaling Empathy for a 10M+ Telecom Giant',
    breadcrumbTitle: 'Tier-1 Provider',
    categoryBadge: 'Telecom',
    headerImageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2400',
    mainHeading: 'How Tier-1 Provider Optimized Operations',
    testimonialQuote: "Partnering with The Vertical AI allowed us to completely reimagine our customer experience. We achieved scalability we didn't think was possible without heavily compromising on quality.",
    keyResults: [
      { label: 'Lower Cost', value: '65%' },
      { label: 'Wait Time', value: '0 mins' },
      { label: 'CSAT Improvement', value: '45%' },
    ],
    implementationSteps,
    sections: [
      { id: 1, title: 'The Context', content: 'Our client, a sprawling Tier-1 Telecom Provider, was facing skyrocketing support costs and overwhelmed human agents. Due to a recent aggressive market expansion, they experienced a permanent 300% surge in support volume. Wait times had stretched to over 45 minutes, leading to massive friction, brand damage, and rapidly dropping CSAT scores.' },
      { id: 2, imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600', imageAlt: 'Enterprise office' },
      { id: 3, title: 'The Solution', content: 'The Vertical AI deployed a comprehensive suite of orchestration agents, replacing 7 fragmented legacy silos with a unified Multilingual Decision Engine integrated securely into their CRM and existing SIP trunks. The agents were configured precisely to handle complex tier-1 and tier-2 troubleshooting completely autonomously. Using state-of-the-art human-like voice synthesis with under 500ms latency and advanced intent tracking, the agents provided a fluid, conversational experience that felt entirely native.' },
      { id: 4, title: 'The Results', content: 'Within 14 days of going live, the AI layer absorbed and flawlessly handled over 80% of total inbound volume with a consistent zero-minute wait time-24/7. Human agents were no longer burnt out by generic status queries. Instead, they were elevated to handle only high-touch compliance tasks, leading to a profound transformation in company morale and a 65% lower operational cost.' },
    ],
    status: 'published',
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    slug: 'precision-recovery-engine',
    storyTitle: 'The Precision Recovery Engine: High-Velocity Financial Recovery',
    breadcrumbTitle: 'SME & Micro-lender',
    categoryBadge: 'Finance',
    headerImageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400',
    mainHeading: 'How SME & Micro-lender Optimized Operations',
    testimonialQuote: 'We completely shifted the dynamic of collections. Instead of aggressively chasing payments, we deployed an intelligent engine that negotiated with empathy and hard data.',
    keyResults: [
      { label: 'Recovery Lift', value: '45%' },
      { label: 'Agent Efficiency', value: '3x' },
      { label: 'Compliance Score', value: '100%' },
    ],
    implementationSteps,
    sections: [
      { id: 1, title: 'The Context', content: 'A fast-growing SME & Micro-lender was struggling with high delinquency rates. Their manual collections team was overwhelmed by the sheer volume of micro-loans, resulting in missed recovery windows and escalating non-performing assets (NPAs).' },
      { id: 2, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600', imageAlt: 'Financial charts' },
      { id: 3, title: 'The Structural Failure', content: "Traditional debt collection relies heavily on aggressive, volume-based dialer campaigns. This approach not only damages the brand's reputation but is highly ineffective for borrowers facing genuine short-term liquidity issues who require restructuring rather than harassment." },
      { id: 4, title: 'The Precision Recovery Engine', content: "We engineered a high-velocity recovery engine grounded in dignity and persona-based data. Utilizing The Vertical AI's intelligence layer, the system analyzed past payment behavior, borrower profiles, and macroeconomic data to predict the optimal time and channel for outreach." },
      { id: 5, title: 'Persona-Driven Outreach', content: 'The AI automatically categorized borrowers into intent-based personas, dynamically adjusting the tone of voice and negotiation scripts (e.g., offering payment plans to "willing but unable" borrowers).' },
      { id: 6, title: 'Multi-lingual Empathy', content: 'Engaged borrowers natively in 10+ regional languages, building instant trust and massively reducing friction during stressful financial conversations.' },
      { id: 7, title: 'The Results', content: 'The precision engine drove a massive 45% lift in overall recovery rates within the first 60 days. Moreover, by strictly adhering to RBI guidelines through Policy-as-Code, the lender achieved 100% compliance, entirely eliminating regulatory penalty risks associated with third-party debt collection.' },
    ],
    status: 'published',
    updatedAt: new Date(),
  },
];

async function main() {
  console.log('Seeding case studies...');
  for (const cs of caseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: cs.slug },
      update: cs,
      create: cs,
    });
    console.log('Seeded:', cs.storyTitle);
  }
  console.log('Done! Seeded', caseStudies.length, 'case studies.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
