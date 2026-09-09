const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

const teamMembers = [
  {
    name: 'Venkatesh A',
    role: 'Founder & CEO',
    bio: `Venkatesh leads The Vertical AI with a focus on building AI-native enterprise operating systems that combine orchestration, automation, governance, and real-time execution into a unified operational layer.

His experience spans finance, telecom, enterprise operations, and regulated industries, where he has worked closely with large-scale customer workflows, communication infrastructure, and operational ecosystems. This operational exposure shaped The Vertical AI's architecture-first approach toward enterprise AI.

At The Vertical AI, he leads platform vision, product strategy, and enterprise AI execution across the company's ecosystem, with a focus on building practical, scalable systems for regulated and high-volume enterprises.

IIM Calcutta (Executive) · Kellogg School of Management (Product Management)`,
    imageUrl: '/team/venkatesh.png',
    linkedinUrl: 'https://www.linkedin.com/in/vishakvenkatesh/',
    twitterUrl: '#',
    mailTo: 'mailto:#',
    sortOrder: 0,
  },
  {
    name: 'Pooja Dev',
    role: 'Chief Financial Officer',
    bio: `Pooja leads finance, strategic planning, and operational governance at The Vertical AI.

Her experience spans startup finance, consulting, capital planning, and business operations, where she has worked closely with growth-stage companies on financial structuring, scalability, investor readiness, and long-term operational planning.

At The Vertical AI, she focuses on building the financial and operational foundation required to scale an enterprise AI platform responsibly and efficiently. Her work includes capital strategy, financial discipline, growth planning, and enabling sustainable expansion across the company's ecosystem.

She brings a balanced approach that combines startup agility with structured financial execution in a rapidly evolving AI market.

CPA (Certified Public Accountant) · ICAI`,
    imageUrl: '/team/pooja-dev.png',
    linkedinUrl: 'https://www.linkedin.com/in/pooja-dev31/',
    twitterUrl: '#',
    mailTo: 'mailto:#',
    sortOrder: 1,
  },
  {
    name: 'Varman A',
    role: 'Business Head · Enterprise Growth & AI Adoption',
    bio: `Varman leads enterprise growth and strategic adoption initiatives at The Vertical AI.

His experience spans enterprise sales, business expansion, customer acquisition, and operational growth across sectors including healthcare, real estate, SaaS, and customer-centric business ecosystems. Over the years, he has worked closely with enterprises navigating scale, operational complexity, and technology adoption across large business environments.

At The Vertical AI, he works with enterprises exploring AI-led operational transformation, helping align platform capabilities with real business outcomes. His focus is on strategic expansion, enterprise partnerships, and enabling long-term customer success across regulated and high-volume industries.

He brings a strong understanding of enterprise decision-making, operational execution, and growth strategy in evolving technology ecosystems.

Enterprise Sales Leadership · Business Expansion · Strategic Partnerships`,
    imageUrl: '/team/varman.png',
    linkedinUrl: 'https://www.linkedin.com/in/varman7871337114/',
    twitterUrl: '#',
    mailTo: 'mailto:#',
    sortOrder: 2,
  },
  {
    name: 'Preethi John',
    role: 'Chief People Officer',
    bio: `Preethi leads operations, people systems, and organizational execution at The Vertical AI.

Her experience spans enterprise operations, cross-functional coordination, vendor management, customer-facing workflows, and large-scale operational environments across telecom and business operations ecosystems. Over the years, she has worked closely with teams managing execution, delivery coordination, and process-driven operational functions at scale.

At The Vertical AI, she oversees organizational operations, people processes, onboarding, infrastructure coordination, and internal execution systems that support the company's growth and operational scalability. Her role focuses on building structured operational frameworks that enable teams to execute efficiently across a rapidly evolving enterprise AI environment.

She brings a process-oriented and execution-driven approach that helps translate growth into scalable organizational systems.

Enterprise Operations · Organizational Execution · Process Management`,
    imageUrl: '/team/preethi-john.png',
    linkedinUrl: 'https://www.linkedin.com/in/preethi-john-74a86a67/',
    twitterUrl: '#',
    mailTo: 'mailto:#',
    sortOrder: 3,
  },
  {
    name: 'Eswaran M',
    role: 'Head of Operations',
    bio: `Eswaran leads operational execution and workflow coordination across customer engagement environments at The Vertical AI.

He brings extensive experience in customer operations, workflow management, and execution-driven operational ecosystems where consistency, coordination, and turnaround efficiency are critical.

At The Vertical AI, he focuses on operational performance, workflow efficiency, and execution alignment across enterprise operations environments, supporting the company's broader vision of scalable AI-assisted execution systems.

Operational Management · Workflow Coordination · Customer Operations`,
    imageUrl: '/team/eswaran.png',
    linkedinUrl: 'http://linkedin.com/in/eswaran-m-b02b18366',
    twitterUrl: '#',
    mailTo: 'mailto:#',
    sortOrder: 4,
  },
];

async function main() {
  console.log('Seeding team members...');
  for (const member of teamMembers) {
    const existing = await prisma.teamMember.findFirst({ where: { name: member.name } });
    if (existing) {
      console.log('Skipped (already exists):', member.name);
      continue;
    }
    await prisma.teamMember.create({
      data: {
        id: uuidv4(),
        ...member,
        status: 'published',
        updatedAt: new Date(),
      },
    });
    console.log('Seeded:', member.name);
  }
  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
