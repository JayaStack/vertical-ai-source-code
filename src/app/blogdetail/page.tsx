"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import { User2Icon, CalendarIcon, ClockIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import blog1 from "@/assets/blogs/1.webp";
import blog2 from "@/assets/blogs/2.webp";
import blog3 from "@/assets/blogs/3.webp";

// Dummy content generator based on slug
const getBlogDetail = (slug: string) => {
  if (slug === 'the-execution-gap') {
    return {
      title: "The Execution Gap: Why Enterprise AI Pilots Stall in \"POC Purgatory\"",
      banner: blog1.src,
      date: "May 15, 2026",
      author: "The Vertical AI Research",
      readTime: "6 min read",
      content: `
        <p class="mb-8 text-xl text-gray-700 leading-relaxed font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:-mt-2 first-line:uppercase first-line:tracking-widest">
          In the boardroom, the directive is clear: "Implement AI." In the engineering bay, the reality is a fragmented mess of API keys, prompt engineering, and "cool" demos that never see the light of production. This is the Execution Gap-the structural distance between a model that can answer a prompt and a system that can run a business.
        </p>

        <h3 class="text-3xl font-bold mt-12 mb-4 text-gray-900 tracking-tight">The Illusion of Adoption</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Nowadays, enterprise AI adoption is mostly just "AI-washing." We often see organisations simply plugging modern chatbots into age-old legacy systems, only to realise that the advanced capabilities of their models are getting severely bottlenecked by the rigid constraints of their existing backend infrastructure.
        </p>

        <div class="my-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl shine-effect">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" alt="AI representation" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Stochastic vs. Deterministic Conflict</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          The fundamental reason pilots stall is a mismatch in physics. Enterprises are Deterministic; they require predictable, auditable, and repeatable outcomes. Large Language Models (LLMs) are Stochastic; they are probabilistic engines that don't always give the same answer twice.
        </p>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          When you try to force a stochastic engine to run a deterministic process (like loan disbursement or debt recovery) without a sophisticated orchestration layer, the system breaks. It hallucinates, it misses edge cases, and eventually, the legal or compliance team shuts it down. This is the death of the pilot.
        </p>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The "API Tax" and the Fragility of Wrappers</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Many early-stage AI startups are essentially "Wrappers"-they provide a UI on top of someone else’s model. This creates two fatal flaws for the enterprise:
        </p>
        <ul class="list-none pl-0 mb-10 space-y-4">
          <li class="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-primary font-bold mr-3 mt-1">Latency:</span> Every hop to an external API adds milliseconds. In a live voice environment, 500ms is the difference between a natural conversation and a frustrating lag.
          </li>
          <li class="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-primary font-bold mr-3 mt-1">Intellectual Property:</span> If your "secret sauce" is just a clever prompt, you have no moat.
          </li>
        </ul>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed font-medium">
          The Vertical AI Approach: We don't build wrappers. We build Autonomous Loops. We focus on the "State Machine"-the logic that governs how the AI moves from one step to the next, ensuring that every action is validated against the enterprise's "Ground Truth."
        </p>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">Closing the Gap: From "Chatting" to "Agentic Workflows"</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          To bridge the chasm, we must move to Agentic Workflows. An "Agent" isn't just a bot; it’s a system with Agency.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-gray-900 mb-2">Contextual Memory</h4>
            <p class="text-sm text-gray-600 leading-relaxed">The system must remember what happened three months ago, not just three minutes ago.</p>
          </div>
          <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-gray-900 mb-2">Tool Use</h4>
            <p class="text-sm text-gray-600 leading-relaxed">The AI must have the "hands" to reach into a CRM, pull a credit score, and update a ledger.</p>
          </div>
          <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-gray-900 mb-2">Self-Correction</h4>
            <p class="text-sm text-gray-600 leading-relaxed">If a workflow fails, the system should "reason" through a workaround or escalate with full context.</p>
          </div>
        </div>
      `
    };
  } else if (slug === 'defining-ai-native-os') {
    return {
      title: "Defining the AI-Native OS: Why Software is Shifting from Modules to Kernels",
      banner: blog2.src,
      date: "Nov 20, 2025",
      author: "The Vertical AI Research",
      readTime: "7 min read",
      content: `
        <p class="mb-8 text-xl text-gray-700 leading-relaxed font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:-mt-2 first-line:uppercase first-line:tracking-widest">
          The last thirty years of enterprise software were defined by the "Silo." In an AI-led world, Silos are the enemy of Intelligence. We are witnessing a shift from "Software as an Application" to "Software as an Operating System."
        </p>
        <h3 class="text-3xl font-bold mt-12 mb-4 text-gray-900 tracking-tight">The End of the Silo Era</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Historically, businesses bought specialized modules for different functions: CRM for sales, ERP for finance, HRM for people. These systems rarely talked to each other natively, requiring massive integration projects just to share basic data. In the age of AI, this fragmentation is a fatal flaw.
        </p>
        <div class="my-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl shine-effect">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200" alt="OS shift representation" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Kernel Metaphor</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Instead of distinct applications, imagine a central intelligence layer-an "AI Kernel"-that sits at the core of the enterprise. This kernel has native access to all data streams, memory banks, and tool APIs. It orchestrates resources dynamically, routing tasks to the most appropriate reasoning agents based on context, priority, and compliance requirements.
        </p>
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">Generating Structural Alpha</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          By moving from modules to a cohesive kernel, organizations unlock "Structural Alpha"-a compounding advantage in operational efficiency. It's no longer about optimizing a single process; it's about elevating the entire cognitive capacity of the business.
        </p>
      `
    };
  } else if (slug === 'compliance-as-infrastructure') {
    return {
      title: "Compliance-as-Infrastructure: Inverting the Governance Model",
      banner: blog3.src,
      date: "Aug 10, 2025",
      author: "The Vertical AI Research",
      readTime: "8 min read",
      content: `
        <p class="mb-8 text-xl text-gray-700 leading-relaxed font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:-mt-2 first-line:uppercase first-line:tracking-widest">
          In the high-velocity world of business, compliance has traditionally been the "handbrake" on innovation. It has been treated as a post-mortem exercise: a backwards-looking audit designed to catch mistakes after they happen.
        </p>
        <h3 class="text-3xl font-bold mt-12 mb-4 text-gray-900 tracking-tight">The Problem with "Post-Mortem" Audits</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Waiting until the end of a quarter to review flagged interactions guarantees that uncompliant actions will slip through. It turns governance into a bottleneck and exposes the enterprise to massive regulatory risk, particularly when deploying autonomous AI agents at scale.
        </p>
        <div class="my-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl shine-effect">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" alt="Compliance representation" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">Moving Governance to the "Edge"</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          With "Compliance-as-Infrastructure," we invert the model. Guardian moves the compliance layer to the "Edge" of the interaction. Every action, every generative response, and every API call is evaluated in real-time against a declarative policy engine before it executes. This is Preventive Governance.
        </p>
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">Policy-as-Logic and the Audit Trail of Everything</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          By defining rules as executable logic rather than PDF manuals, the system automatically enforces boundaries. Furthermore, because the AI orchestrates the entire workflow, it inherently generates a granular, irrefutable "Audit Trail of Everything"-providing regulators with perfect visibility into the "why" and "how" of every machine decision.
        </p>
      `
    };
  }

  // Fallback for other slugs
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940",
    date: "Jun 1, 2026",
    author: "Admin",
    readTime: "6 min read",
    content: `
      <p class="mb-8 text-xl text-gray-700 leading-relaxed font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:-mt-2 first-line:uppercase first-line:tracking-widest">
        Artificial Intelligence is rapidly evolving from simple task execution to complex, reasoning-based workflows. In this post, we'll explore how modern AI agents are capable of planning, executing, and self-correcting to achieve long-term enterprise goals.
      </p>
      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900">The Rise of Autonomous Agents</h3>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Unlike traditional chatbots which just map intents to predefined answers, autonomous agents like Vertical AI use foundation models as generic reasoning engines. They are capable of iterating on complex inputs and dynamically orchestrating APIs and tools until an objective is satisfied.
      </p>
      
      <blockquote class="my-10 border-l-4 border-primary bg-primary/5 p-8 rounded-r-2xl italic text-2xl text-gray-800 font-medium">
        "The shift from programmatic chatbots to autonomous reasoning agents is the biggest technological leap in customer experience since the advent of the internet itself."
      </blockquote>

      <div class="my-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl shine-effect">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" alt="AI representation" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
      </div>

      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900">Key Takeaways</h3>
      <ul class="list-none pl-0 mb-10 space-y-4">
        <li class="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
           <span class="text-primary font-bold mr-3 mt-1">01.</span> Agentic orchestration goes beyond basic IVR flows, adapting to context dynamically.
        </li>
        <li class="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
           <span class="text-primary font-bold mr-3 mt-1">02.</span> Generative UI is rendering customized interfaces based on live interactions, eliminating static menus.
        </li>
        <li class="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
           <span class="text-primary font-bold mr-3 mt-1">03.</span> Deep integrations via REST API allow continuous real-time access to source-of-truth CRMs.
        </li>
      </ul>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The future belongs to the enterprises that adopt intelligent, asynchronous workflows early, empowering their human agents to focus strictly on the highest-leverage tasks rather than repetitive data entry.
      </p>
    `
  }
};

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      // Simulate API fetch delay
      setTimeout(() => {
        setData(getBlogDetail(slug));
      }, 500);
    }
  }, [slug]);

  if (!slug) return <div className="py-32 text-center text-xl text-gray-600">No blog post specified.</div>;
  if (!data) return <div className="py-32 text-center text-xl text-gray-600">Loading insight...</div>;

  return (

    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
        <ChevronRight size={14} className="shrink-0" />
        <Link href="/blog" className="hover:text-primary transition-colors shrink-0">Insights</Link>
        <ChevronRight size={14} className="shrink-0" />
        <span className="text-gray-900 font-medium truncate">{data.title}</span>
      </nav>

      {/* Post Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
        {data.title}
      </h1>

      {/* Hero Image */}
      <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mb-12 shadow-xl group">
        <Image
          src={data.banner}
          alt="Blog Hero"
          fill
          className="object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-start gap-6 text-sm text-gray-500 mb-10 flex-wrap border-b border-gray-100 pb-8">
        <div className="flex items-center gap-2">
          <User2Icon size={18} className="text-primary" />
          <span className="font-medium">{data.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon size={18} className="text-primary" />
          <span>{data.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon size={18} className="text-primary" />
          <span>{data.readTime}</span>
        </div>
      </div>

      {/* Content Body */}
      <article
        className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      {/* Author Bio Box */}
      <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
        <div>
          <h4 className="text-xl font-bold text-gray-900 leading-none mb-2">Written by {data.author}</h4>
          <p className="text-gray-500 mb-0">Head of AI Research at The Vertical AI. Passionate about autonomous agents, generative UI, and enterprise workflow orchestration.</p>
        </div>
      </div>
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
        <BlogDetailContent />
      </Suspense>

      <LandingPageFooter />
    </div>
  );
}
