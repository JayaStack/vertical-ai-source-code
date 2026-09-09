const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

// Real content already live on theverticalai.top's legacy backend, per platform slug.
const SLUGS = [
  { slug: 'maestro', name: 'Maestro' },
  { slug: 'vocalis', name: 'Mozhi' },
  { slug: 'guardian', name: 'Guardian' },
  { slug: 'insights', name: 'Insights' },
  { slug: 'conversa', name: 'Conversa' },
];

async function fetchPlatform(slug) {
  const res = await fetch(`https://theverticalai.top/App/api.php?gofor=platformdetail&slug=${slug}`);
  const data = await res.json();
  if (!data || !data.full_content) return null;
  return { platformName: data.platform_name, full: JSON.parse(data.full_content) };
}

async function main() {
  console.log('Seeding platforms from legacy content source...');
  for (const { slug, name } of SLUGS) {
    const fetched = await fetchPlatform(slug);
    if (!fetched) {
      console.log('Skipped (no content available):', slug);
      continue;
    }
    const { platformName, full } = fetched;

    const record = {
      slug,
      name: name || platformName,
      status: 'published',
      heroTitle: full.hero?.title || '',
      heroTitleHighlight: full.hero?.titleHighlight || '',
      heroDescription: full.hero?.description || '',
      heroImageUrl: full.hero?.image || '',
      clientsDescription: full.trustedClients?.description || '',
      clientLogos: full.trustedClients?.logos || [],
      whyTitle: full.howItWorks?.title || '',
      whyTitleHighlight: full.howItWorks?.titleHighlight || '',
      whyDescription: full.howItWorks?.description || '',
      whySteps: full.howItWorks?.steps || [],
      intelTitle: full.intelligenceLayer?.title || '',
      intelTitleHighlight: full.intelligenceLayer?.titleHighlight || '',
      intelDescription: full.intelligenceLayer?.description || '',
      intelSteps: full.intelligenceLayer?.steps || [],
      useCasesTitle: full.useCases?.sectionTitle || '',
      useCasesTitleHighlight: full.useCases?.sectionTitleHighlight || '',
      useCasesCards: full.useCases?.cards || [],
      impactTitle: full.measurableImpact?.sectionTitle || '',
      impactTitleHighlight: full.measurableImpact?.sectionTitleHighlight || '',
      impactMetrics: full.measurableImpact?.stats || [],
      securityTitle: full.securityCompliance?.sectionTitle || '',
      securityTitleHighlight: full.securityCompliance?.sectionTitleHighlight || '',
      securityDescription: full.securityCompliance?.description || '',
      securityFeatures: full.securityCompliance?.features || [],
      securityGridItems: (full.securityCompliance?.gridItems || []).map((g) => g.title),
      ctaTitle: full.cta?.title || '',
      ctaTitleHighlight: full.cta?.titleHighlight || '',
      updatedAt: new Date(),
    };

    await prisma.platformOs.upsert({
      where: { slug },
      update: record,
      create: { id: uuidv4(), ...record },
    });
    console.log('Seeded:', record.name, `(${slug})`);
  }
  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
