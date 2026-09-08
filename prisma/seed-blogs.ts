import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const blogs = [
  {
    id: uuidv4(),
    slug: "the-execution-gap",
    title: "The Execution Gap: Why Enterprise AI Pilots Stall in \"POC Purgatory\"",
    bannerUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    outline: "The structural distance between a model that can answer a prompt and a system that can run a business. Discover how to bridge the chasm.",
    content: [
      {
        type: "text",
        value: "In the boardroom, the directive is clear: \"Implement AI.\" In the engineering bay, the reality is a fragmented mess of API keys, prompt engineering, and \"cool\" demos that never see the light of production. This is the Execution Gap-the structural distance between a model that can answer a prompt and a system that can run a business."
      },
      {
        type: "heading",
        value: "The Illusion of Adoption"
      },
      {
        type: "text",
        value: "Nowadays, enterprise AI adoption is mostly just \"AI-washing.\" We often see organisations simply plugging modern chatbots into age-old legacy systems, only to realise that the advanced capabilities of their models are getting severely bottlenecked by the rigid constraints of their existing backend infrastructure."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
        alt: "AI representation"
      },
      {
        type: "heading",
        value: "The Stochastic vs. Deterministic Conflict"
      },
      {
        type: "text",
        value: "The fundamental reason pilots stall is a mismatch in physics. Enterprises are Deterministic; they require predictable, auditable, and repeatable outcomes. Large Language Models (LLMs) are Stochastic; they are probabilistic engines that don't always give the same answer twice."
      },
      {
        type: "text",
        value: "When you try to force a stochastic engine to run a deterministic process (like loan disbursement or debt recovery) without a sophisticated orchestration layer, the system breaks. It hallucinates, it misses edge cases, and eventually, the legal or compliance team shuts it down. This is the death of the pilot."
      },
      {
        type: "heading",
        value: "The \"API Tax\" and the Fragility of Wrappers"
      },
      {
        type: "text",
        value: "Many early-stage AI startups are essentially \"Wrappers\"-they provide a UI on top of someone else's model. This creates two fatal flaws for the enterprise:"
      },
      {
        type: "list",
        items: [
          { label: "Latency", value: "Every hop to an external API adds milliseconds. In a live voice environment, 500ms is the difference between a natural conversation and a frustrating lag." },
          { label: "Intellectual Property", value: "If your \"secret sauce\" is just a clever prompt, you have no moat." }
        ]
      },
      {
        type: "text",
        value: "The Vertical AI Approach: We don't build wrappers. We build Autonomous Loops. We focus on the \"State Machine\"-the logic that governs how the AI moves from one step to the next, ensuring that every action is validated against the enterprise's \"Ground Truth.\""
      },
      {
        type: "heading",
        value: "Closing the Gap: From \"Chatting\" to \"Agentic Workflows\""
      },
      {
        type: "text",
        value: "To bridge the chasm, we must move to Agentic Workflows. An \"Agent\" isn't just a bot; it's a system with Agency."
      },
      {
        type: "cards",
        items: [
          { title: "Contextual Memory", desc: "The system must remember what happened three months ago, not just three minutes ago." },
          { title: "Tool Use", desc: "The AI must have the \"hands\" to reach into a CRM, pull a credit score, and update a ledger." },
          { title: "Self-Correction", desc: "If a workflow fails, the system should \"reason\" through a workaround or escalate with full context." }
        ]
      }
    ],
    readingTime: "6 min",
    keyTakeaways: ["Deterministic vs Stochastic conflict", "The API Tax", "Agentic Workflows"],
    author: "The Vertical AI Research",
    category: "AI Insights",
    tags: ["AI", "Enterprise", "POC"],
    status: "published",
    publishedAt: new Date("2026-05-15T10:00:00.000Z"),
    updatedAt: new Date("2026-05-15T10:00:00.000Z"),
    createdAt: new Date("2026-05-15T10:00:00.000Z"),
  },
  {
    id: uuidv4(),
    slug: "defining-ai-native-os",
    title: "Defining the AI-Native OS: Why Software is Shifting from Modules to Kernels",
    bannerUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    outline: "Witness the shift from \"Software as an Application\" to \"Software as an Operating System\" and how the AI Kernel manages enterprise resources.",
    content: [
      {
        type: "text",
        value: "The last thirty years of enterprise software were defined by the \"Silo.\" In an AI-led world, Silos are the enemy of Intelligence. We are witnessing a shift from \"Software as an Application\" to \"Software as an Operating System.\""
      },
      {
        type: "heading",
        value: "The End of the Silo Era"
      },
      {
        type: "text",
        value: "Historically, businesses bought specialized modules for different functions: CRM for sales, ERP for finance, HRM for people. These systems rarely talked to each other natively, requiring massive integration projects just to share basic data. In the age of AI, this fragmentation is a fatal flaw."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
        alt: "OS shift representation"
      },
      {
        type: "heading",
        value: "The Kernel Metaphor"
      },
      {
        type: "text",
        value: "Instead of distinct applications, imagine a central intelligence layer-an \"AI Kernel\"-that sits at the core of the enterprise. This kernel has native access to all data streams, memory banks, and tool APIs. It orchestrates resources dynamically, routing tasks to the most appropriate reasoning agents based on context, priority, and compliance requirements."
      },
      {
        type: "heading",
        value: "Generating Structural Alpha"
      },
      {
        type: "text",
        value: "By moving from modules to a cohesive kernel, organizations unlock \"Structural Alpha\"-a compounding advantage in operational efficiency. It's no longer about optimizing a single process; it's about elevating the entire cognitive capacity of the business."
      }
    ],
    readingTime: "7 min",
    keyTakeaways: ["End of Silo Era", "The Kernel Metaphor", "Structural Alpha"],
    author: "The Vertical AI Research",
    category: "AI Insights",
    tags: ["AI", "OS", "Enterprise Software"],
    status: "published",
    publishedAt: new Date("2025-11-20T10:00:00.000Z"),
    updatedAt: new Date("2025-11-20T10:00:00.000Z"),
    createdAt: new Date("2025-11-20T10:00:00.000Z"),
  },
  {
    id: uuidv4(),
    slug: "compliance-as-infrastructure",
    title: "Compliance-as-Infrastructure: Inverting the Governance Model",
    bannerUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    outline: "Why a \"Post-Mortem\" audit is a liability and how to move compliance to the \"Edge\" of every interaction through real-time logic.",
    content: [
      {
        type: "text",
        value: "In the high-velocity world of business, compliance has traditionally been the \"handbrake\" on innovation. It has been treated as a post-mortem exercise: a backwards-looking audit designed to catch mistakes after they happen."
      },
      {
        type: "heading",
        value: "The Problem with \"Post-Mortem\" Audits"
      },
      {
        type: "text",
        value: "Waiting until the end of a quarter to review flagged interactions guarantees that uncompliant actions will slip through. It turns governance into a bottleneck and exposes the enterprise to massive regulatory risk, particularly when deploying autonomous AI agents at scale."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
        alt: "Compliance representation"
      },
      {
        type: "heading",
        value: "Moving Governance to the \"Edge\""
      },
      {
        type: "text",
        value: "With \"Compliance-as-Infrastructure,\" we invert the model. Guardian moves the compliance layer to the \"Edge\" of the interaction. Every action, every generative response, and every API call is evaluated in real-time against a declarative policy engine before it executes. This is Preventive Governance."
      },
      {
        type: "heading",
        value: "Policy-as-Logic and the Audit Trail of Everything"
      },
      {
        type: "text",
        value: "By defining rules as executable logic rather than PDF manuals, the system automatically enforces boundaries. Furthermore, because the AI orchestrates the entire workflow, it inherently generates a granular, irrefutable \"Audit Trail of Everything\"-providing regulators with perfect visibility into the \"why\" and \"how\" of every machine decision."
      }
    ],
    readingTime: "8 min",
    keyTakeaways: ["Preventive Governance", "Policy-as-Logic", "Audit Trail of Everything"],
    author: "The Vertical AI Research",
    category: "AI Insights",
    tags: ["Compliance", "Governance", "AI"],
    status: "published",
    publishedAt: new Date("2025-08-10T10:00:00.000Z"),
    updatedAt: new Date("2025-08-10T10:00:00.000Z"),
    createdAt: new Date("2025-08-10T10:00:00.000Z"),
  },
];

async function main() {
  console.log("Migrating blog posts to PostgreSQL...");
  for (const blog of blogs) {
    await prisma.blogPost.upsert({
      where: { slug: blog.slug },
      update: {
        title: blog.title,
        bannerUrl: blog.bannerUrl,
        outline: blog.outline,
        content: blog.content,
        readingTime: blog.readingTime,
        keyTakeaways: blog.keyTakeaways,
        author: blog.author,
        category: blog.category,
        tags: blog.tags,
        status: blog.status,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      },
      create: blog,
    });
    console.log(`✔ Migrated: ${blog.title}`);
  }
  console.log("Migration complete!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
