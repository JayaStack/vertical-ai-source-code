"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Header from "@/components/landing-page/header";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import { CheckCircle2, TrendingUpIcon, Activity, ChevronRight, ArrowRight, Clock, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const getCaseStudyDetail = (slug: string) => {
  if (slug === 'regulatory-guardrail') {
    return {
      title: "The Regulatory Guardrail: Real-Time Compliance",
      client: "Top Private Bank",
      industry: "BFSI",
      banner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2426",
      metrics: [
        { label: "Reduction in Violations", value: "92%" },
        { label: "Audit Coverage", value: "100%" },
        { label: "Compliance Coverage", value: "Real-time" }
      ],
      content: `
      <p class="text-xl  text-gray-800 mb-10 border-l-4 border-primary pl-6 py-2">
          "Compliance moved from a sampling exercise to 100% coverage. In the first two quarters, we reported zero major audit escalations."
        </p>
        
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Context</h3>
        <p class="mb-8 text-lg text-gray-700 leading-relaxed">
          For a leading Indian private bank, compliance was a high-stakes lottery. With over 50,000 agents handling millions of multilingual interactions, manual auditing could only cover 2% of calls. This "98% blind spot" represented a massive regulatory risk and a potential multi-crore liability.
        </p>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Structural Failure</h3>
        <p class="mb-8 text-lg text-gray-700 leading-relaxed">
          Legacy QA was a post-mortem process. By the time a violation was flagged, the damage was done. The bank needed to move from detecting mistakes to preventing them in the moment.
        </p>
        
        <div class="my-12 rounded-2xl overflow-hidden aspect-[21/9] relative shadow-lg shine-effect">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" alt="Banking Infrastructure" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Vertical OS Intervention</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          We deployed an integrated layer of Guardian and Maestro to create a "Digital Compliance Armor."
        </p>
        <div class="space-y-6 mb-10">
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 class="text-xl font-bold text-gray-900 mb-2">The <500ms Challenge</h4>
            <p class="text-lg text-gray-700 leading-relaxed">
              Using VeloxCore, we achieved sub-500ms latency for live audio ingestion, allowing the AI to "listen" and "understand" faster than the human agent could speak.
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 class="text-xl font-bold text-gray-900 mb-2">Policy-as-Code</h4>
            <p class="text-lg text-gray-700 leading-relaxed">
              We converted 500+ pages of RBI guidelines and internal scripts into executable logic.
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 class="text-xl font-bold text-gray-900 mb-2">Real-Time Nudges</h4>
            <p class="text-lg text-gray-700 leading-relaxed">
              Maestro triggered instant visual nudges correcting agent behavior before the call ended.
            </p>
          </div>
        </div>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Impact</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Operational Alpha: QA teams shifted from "listening for errors" to "strategic coaching," increasing their internal efficiency by 10x. Turned a 2% sampling gamble into 100% real-time compliance infrastructure.
        </p>
      `
    };
  }

  if (slug === 'customer-experience-os') {
    return {
      title: "Scaling Empathy for a 10M+ Telecom Giant",
      client: "Tier-1 Provider",
      industry: "Telecom",
      banner: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2400",
      metrics: [
        { label: "Lower Cost", value: "65%" },
        { label: "Wait Time", value: "0 mins" },
        { label: "CSAT Improvement", value: "45%" }
      ],
      content: `
        <p class="text-xl  text-gray-800 mb-10 border-l-4 border-primary pl-6 py-2">
          "Partnering with The Vertical AI allowed us to completely reimagine our customer experience. We achieved scalability we didn't think was possible without heavily compromising on quality."
        </p>
        
        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900">The Context</h3>
        <p class="mb-8 text-lg text-gray-700 leading-relaxed">
          Our client, a sprawling Tier-1 Telecom Provider, was facing skyrocketing support costs and overwhelmed human agents. Due to a recent aggressive market expansion, they experienced a permanent <strong class="text-gray-900">300% surge in support volume</strong>. Wait times had stretched to over 45 minutes, leading to massive friction, brand damage, and rapidly dropping CSAT scores.
        </p>
        
        <div class="my-12 rounded-2xl overflow-hidden aspect-[21/9] relative shadow-lg">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600" alt="Enterprise office" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Solution</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
         The Vertical AI deployed a comprehensive suite of orchestration agents, replacing 7 fragmented legacy silos with a unified Multilingual Decision Engine integrated securely into their CRM and existing SIP trunks. 
        </p>
        <p class="mb-8 text-lg text-gray-700 leading-relaxed">
          The agents were configured precisely to handle complex tier-1 and tier-2 troubleshooting completely autonomously. Using state-of-the-art human-like voice synthesis with under 500ms latency and advanced intent tracking, the agents provided a fluid, conversational experience that felt entirely native.
        </p>

        <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Results</h3>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Within 14 days of going live, the AI layer absorbed and flawlessly handled over 80% of total inbound volume with a consistent zero-minute wait time-24/7.
        </p>
        <p class="mb-6 text-lg text-gray-700 leading-relaxed">
          Human agents were no longer burnt out by generic status queries. Instead, they were elevated to handle only high-touch compliance tasks, leading to a profound transformation in company morale and a 65% lower operational cost.
        </p>
      `
    };
  }

  return {
    title: "The Precision Recovery Engine: High-Velocity Financial Recovery",
    client: "SME & Micro-lender",
    industry: "Finance",
    banner: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400",
    metrics: [
      { label: "Recovery Lift", value: "45%" },
      { label: "Agent Efficiency", value: "3x" },
      { label: "Compliance Score", value: "100%" }
    ],
    content: `
      <p class="text-xl  text-gray-800 mb-10 border-l-4 border-primary pl-6 py-2">
        "We completely shifted the dynamic of collections. Instead of aggressively chasing payments, we deployed an intelligent engine that negotiated with empathy and hard data."
      </p>
      
      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900">The Context</h3>
      <p class="mb-8 text-lg text-gray-700 leading-relaxed">
        A fast-growing SME & Micro-lender was struggling with high delinquency rates. Their manual collections team was overwhelmed by the sheer volume of micro-loans, resulting in missed recovery windows and escalating non-performing assets (NPAs).
      </p>
      
      <div class="my-12 rounded-2xl overflow-hidden aspect-[21/9] relative shadow-lg">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600" alt="Financial charts" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
      </div>

      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Structural Failure</h3>
      <p class="mb-8 text-lg text-gray-700 leading-relaxed">
        Traditional debt collection relies heavily on aggressive, volume-based dialer campaigns. This approach not only damages the brand's reputation but is highly ineffective for borrowers facing genuine short-term liquidity issues who require restructuring rather than harassment.
      </p>

      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Precision Recovery Engine</h3>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        We engineered a high-velocity recovery engine grounded in dignity and persona-based data. Utilizing The Vertical AI's intelligence layer, the system analyzed past payment behavior, borrower profiles, and macroeconomic data to predict the optimal time and channel for outreach.
      </p>
      <div class="space-y-6 mb-10">
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 class="text-xl font-bold text-gray-900 mb-2">Persona-Driven Outreach</h4>
          <p class="text-lg text-gray-700 leading-relaxed">
            The AI automatically categorized borrowers into intent-based personas, dynamically adjusting the tone of voice and negotiation scripts (e.g., offering payment plans to "willing but unable" borrowers).
          </p>
        </div>
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 class="text-xl font-bold text-gray-900 mb-2">Multi-lingual Empathy</h4>
          <p class="text-lg text-gray-700 leading-relaxed">
            Engaged borrowers natively in 10+ regional languages, building instant trust and massively reducing friction during stressful financial conversations.
          </p>
        </div>
      </div>

      <h3 class="text-3xl font-bold mt-12 mb-6 text-gray-900 tracking-tight">The Results</h3>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The precision engine drove a massive <strong class="text-gray-900">45% lift in overall recovery rates</strong> within the first 60 days. Moreover, by strictly adhering to RBI guidelines through Policy-as-Code, the lender achieved 100% compliance, entirely eliminating regulatory penalty risks associated with third-party debt collection.
      </p>
    `
  }
};

function CaseStudyDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      setTimeout(() => {
        setData(getCaseStudyDetail(slug));
      }, 500);
    }
  }, [slug]);

  if (!slug) return <div className="py-32 text-center text-xl text-gray-600">No case study specified.</div>;
  if (!data) return <div className="py-32 text-center text-xl text-gray-600">Loading case study details...</div>;

  return (
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
        {/* Left Content */}
        <div className="lg:col-span-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-hidden whitespace-nowrap">
            <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link href="/case-studies" className="hover:text-primary transition-colors shrink-0">Case Studies</Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="text-gray-900 font-medium truncate">{data.client}</span>
          </nav>

          <div className="w-full h-[250px] md:h-[400px] relative rounded-3xl overflow-hidden mb-8 md:mb-10 shadow-xl group">
            <img
              src={data.banner}
              alt={data.client}
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary bg-primary/5 text-primary text-sm font-bold  mb-4">
            {data.industry}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            How {data.client} Optimized Operations
          </h2>
          <article
            className="prose prose-base md:prose-lg max-w-none prose-p:text-gray-600 prose-headings:text-gray-900"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-4 sticky top-16 md:top-24 self-start">
          {/* Key Metrics Card - Premium Gradient */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>

            <h4 className="text-xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-3 relative z-10">
              <TrendingUpIcon className="text-primary" />
              <span>Key Results</span>
            </h4>
            <div className="space-y-6 md:space-y-8 relative z-10">
              {data.metrics.map((metric: any, i: number) => (
                <div key={i} className="flex flex-col border-l-2 border-primary/30 pl-5 relative before:absolute before:content-[''] before:-left-[2px] before:top-1 before:w-[2px] before:h-4 before:bg-primary">
                  <span className="text-2xl md:text-3xl font-bold text-primary">{metric.value}</span>
                  <span className="text-sm  text-gray-500 mt-1 md:mt-2">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Prop Card */}
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="text-primary" /> Implementation
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <span>Seamless CRM Integration</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <span>Custom Voice Cloning</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <span>14-day Deployment cycle</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
  );
}

export default function CaseStudyDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
        <CaseStudyDetailContent />
      </Suspense>

      <LandingPageFooter />
    </div>
  );
}
