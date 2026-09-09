const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

// Real content already live on theverticalai.top's legacy backend, per industry slug.
const SLUGS = [
  { slug: 'bfsi', name: 'BFSI' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'telecom', name: 'Telecom' },
  { slug: 'ecommerce', name: 'E-commerce' },
  { slug: 'automotive', name: 'Automotive' },
  { slug: 'edtech', name: 'EdTech' },
  { slug: 'bpo', name: 'BPO' },
  { slug: 'microfinance', name: 'Microfinance' },
  { slug: 'travel', name: 'Travel' },
  { slug: 'hr-services', name: 'HR Services' },
];

async function fetchIndustry(slug) {
  const res = await fetch(`https://theverticalai.top/App/api.php?gofor=industrydetail&slug=${slug}`);
  const data = await res.json();
  if (!data || !data.full_content) return null;
  return { industryName: data.industry_name, full: JSON.parse(data.full_content) };
}

async function main() {
  console.log('Seeding industries from legacy content source...');
  for (const { slug, name } of SLUGS) {
    const fetched = await fetchIndustry(slug);
    if (!fetched) {
      console.log('Skipped (no content available):', slug);
      continue;
    }
    const { industryName, full } = fetched;

    const record = {
      slug,
      name: industryName || name,
      status: 'published',
      heroTitle: full.hero?.title || '',
      heroTitleHighlight: full.hero?.titleHighlight || '',
      heroDescription: full.hero?.description || '',
      heroDescriptionHighlight: full.hero?.descriptionHighlight || '',
      heroImageUrl: full.hero?.image || '',
      trustedLogos: full.trustedLogos || [],
      ctaTitle: full.finalCta?.title || '',
      ctaTitleHighlight: full.finalCta?.titleHighlight || '',
      featuresTitle: full.otherFeatures?.title || '',
      featuresTitleHighlight: full.otherFeatures?.titleHighlight || '',
      featuresDescription: full.otherFeatures?.description || '',
      featureCards: full.otherFeatures?.features || [],
      transformationLegacy: full.transformationFunnel?.items || [],
      transformationOutcomes: full.transformationFunnel?.outcomes || [],
      pillarsTitle: full.verticalProduct?.title || '',
      pillarsTitleHighlight: full.verticalProduct?.titleHighlight || '',
      pillarsSubtitle: full.verticalProduct?.subtitle || '',
      productPillars: full.verticalProduct?.pillars || [],
      caseStudy: full.caseStudy || {},
      metricsTitle: full.metrics?.title || '',
      metricsTitleHighlight: full.metrics?.titleHighlight || '',
      metrics: full.metrics?.items || [],
      agentsTitle: full.agentMapping?.title || '',
      agentsTitleHighlight: full.agentMapping?.titleHighlight || '',
      agentCards: full.agentMapping?.agents || [],
      complianceTitle: full.compliance?.title || '',
      complianceTitleHighlight: full.compliance?.titleHighlight || '',
      complianceCards: full.compliance?.items || [],
      useCases: full.useCases || [],
      updatedAt: new Date(),
    };

    await prisma.industry.upsert({
      where: { slug },
      update: record,
      create: { id: uuidv4(), ...record },
    });
    console.log('Seeded:', record.name, `(${slug})`);
  }
  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
