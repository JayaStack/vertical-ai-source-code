"use client";

import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import banner from "@/assets/faq-banner.webp"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import platformFaqs from "@/data/platform-faqs.json";
import industryFaqs from "@/data/industry-faqs.json";

interface UnifiedFAQItem {
  id: string;
  faq_id: number;
  question: string;
  answer: string;
  type: "general" | "platform" | "industry";
  category: string;
}

const generalFaqsRaw = [
  {
    faq_id: 1,
    question: "How does an \"AI-Native Enterprise OS\" differ from the AI \"wrappers\" currently on the market?",
    answer: "Most AI tools are \"wrappers\"-thin layers of interface built on top of third-party models that lack deep integration with your business logic. The Vertical AI is a foundational Enterprise OS. It is architected from the ground up to be the \"nervous system\" of your organization. Unlike wrappers that create fragmented logs, our OS provides a System of Action that orchestrates intent, memory, and policy across your entire legacy stack in real-time.",
    category: "Architecture",
    product: "Maestro OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 2,
    question: "In highly regulated sectors like BFSI, how do you ensure 100% compliance and data sovereignty?",
    answer: "Trust is our baseline. Through our Guardian Governance Layer, we move from \"probabilistic\" AI to \"deterministic\" compliance. We hard-code regulatory guidelines directly into the workflow, ensuring the AI cannot deviate from policy. Furthermore, we support Zero-Knowledge Architecture and hybrid deployment models, meaning your sensitive PII (Personally Identifiable Information) stays within your borders and never trains public models.",
    category: "Security & Compliance",
    product: "Guardian OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 3,
    question: "How do you maintain \"Human-Grade\" empathy while handling 100,000+ concurrent interactions?",
    answer: "Scale usually kills quality; we’ve engineered the opposite. By using Conversa and our proprietary VeloxCore, we achieve sub-500ms latency, eliminating the \"robotic lag\" that ruins customer rapport. Our Dynamic Language Switching allows the AI to pivot between 36+ global languages and dialects fluidly, maintaining empathy and context exactly like a high-performing human agent.",
    category: "Performance",
    product: "Conversa OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 4,
    question: "What are the tangible unit economics and ROI shifts we can expect?",
    answer: "We don't just \"improve\" metrics; we re-engineer the P&L. On average, enterprises deploying The Vertical OS see an immediate 35% reduction in operational costs. However, the real \"10x\" value lies in Outcome Velocity. By turning every support call into a decision point for recovery or sales, we double the rate at which your business converts interactions into realized revenue.",
    category: "Economics & ROI",
    product: "Insight OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 5,
    question: "How does the system handle the transition between AI precision and human intuition?",
    answer: "We believe in \"Human-in-the-Loop\" orchestration. When the OS detects a high-complexity moment or a high-value opportunity, it executes a Hot Call Transfer. The human agent receives the call with a live transcript, persistent memory of the customer's history, and a \"Next Best Action\" prompt already on their screen. The transition is so seamless that the customer feels supported by a single, hyper-intelligent entity.",
    category: "Collaboration",
    product: "Maestro OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 6,
    question: "Does The Vertical OS require us to rip and replace our existing legacy infrastructure?",
    answer: "No. We are built for the reality of \"messy\" enterprise tech. Our architecture is designed for Deep Integration, acting as an intelligent orchestration layer that sits on top of your existing CRMs, dialers, and databases. We resolve \"swivel-chair fatigue\" by unifying these fragmented systems into a single, cohesive Intelligence Dashboard.",
    category: "Integration",
    product: "Maestro OS",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 7,
    question: "How does \"Long-Term Memory\" and \"Self-Learning\" drive non-linear scalability?",
    answer: "Traditional systems forget the customer the moment the ticket is closed. The Vertical AI utilizes a Dual-Memory Architecture. It remembers a customer's preferences and past grievances from years ago (Long-term) while maintaining perfect context of the current conversation (Short-term). Every interaction feeds our self-learning loop, meaning the OS gets smarter, faster, and more empathetic with every one of the 100k+ calls it handles.",
    category: "Scalability",
    product: "Insight OS",
    status: 1,
    created_date: new Date().toISOString()
  }
];

const platformNames: Record<string, string> = {
  maestro: "Maestro (Orchestration)",
  vocalis: "Vocalis (Voice Agents)",
  guardian: "Guardian (Compliance)",
  insights: "Insights (Analytics)",
  conversa: "Conversa (Chat Agents)"
};

const industryNames: Record<string, string> = {
  bfsi: "BFSI",
  healthcare: "Healthcare",
  telecom: "Telecom",
  ecommerce: "E-commerce",
  automotive: "Automotive",
  edtech: "EdTech",
  bpo: "BPO",
  microfinance: "Microfinance",
  travel: "Travel",
  "hr-services": "HR Services"
};

export default function FAQPage() {
  const [faqType, setFaqType] = useState<"general" | "platform" | "industry">("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Assemble all FAQs
  const allFaqs = useMemo<UnifiedFAQItem[]>(() => {
    const general = generalFaqsRaw.map(item => ({
      id: `general-${item.faq_id}`,
      faq_id: item.faq_id,
      question: item.question,
      answer: item.answer,
      type: "general" as const,
      category: item.category
    }));

    const platform = Object.entries(platformFaqs).flatMap(([key, items]) => {
      if (key === "insight") return []; // skip duplicate key
      return (items as any[]).map(item => ({
        id: `platform-${key}-${item.faq_id}`,
        faq_id: item.faq_id,
        question: item.question,
        answer: item.answer,
        type: "platform" as const,
        category: key
      }));
    });

    const industry = Object.entries(industryFaqs).flatMap(([key, items]) => {
      return (items as any[]).map(item => ({
        id: `industry-${key}-${item.faq_id}`,
        faq_id: item.faq_id,
        question: item.question,
        answer: item.answer,
        type: "industry" as const,
        category: key
      }));
    });

    return [...general, ...platform, ...industry];
  }, []);

  // Get categories for General
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allFaqs.filter(f => f.type === "general").map(f => f.category)));
    return cats;
  }, [allFaqs]);

  // Get categories for Platform
  const platforms = useMemo(() => {
    return ["maestro", "vocalis", "guardian", "insights", "conversa"];
  }, []);

  // Get categories for Industry
  const industries = useMemo(() => {
    return ["bfsi", "healthcare", "telecom", "ecommerce", "automotive", "edtech", "bpo", "microfinance", "travel", "hr-services"];
  }, []);

  // Reset filter selections when tab changes
  useEffect(() => {
    setSelectedSubCategory("all");
    setOpenIndex(0);
    setVisibleItems([]);
  }, [faqType]);

  // Filter FAQs based on search and filters
  const filteredFaqs = useMemo(() => {
    return allFaqs.filter(faq => {
      // 1. Tab Match
      if (faq.type !== faqType) return false;

      // 2. Subcategory Match
      if (selectedSubCategory !== "all" && faq.category !== selectedSubCategory) return false;

      // 3. Search Match
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        return faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query);
      }

      return true;
    });
  }, [allFaqs, faqType, selectedSubCategory, searchQuery]);

  // Reset scroll transitions when list changes
  useEffect(() => {
    setVisibleItems([]);
  }, [filteredFaqs]);

  // Set mounted state after hydration to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer for scroll animations (both directions)
  useEffect(() => {
    if (!isMounted || filteredFaqs.length === 0) return;

    const observers: IntersectionObserver[] = [];

    // Reset current refs array to match filtered length if needed
    accordionRefs.current = accordionRefs.current.slice(0, filteredFaqs.length);

    filteredFaqs.forEach((_, index) => {
      const ref = accordionRefs.current[index];
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add to visible items immediately when they enter view
                setVisibleItems((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              } else {
                // Remove from visible items when scrolling out of view
                setVisibleItems((prev) => prev.filter((i) => i !== index));
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [filteredFaqs, isMounted]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getAnimationStyle = (index: number) => {
    // During SSR and initial render, use default styles to prevent hydration mismatch
    if (!isMounted) {
      return {
        opacity: 0.1,
        transform: 'scale(0.75)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }

    const isVisible = visibleItems.includes(index);

    let opacity = 0.1;
    let scale = 0.75;

    if (isVisible) {
      opacity = 1;
      scale = 1;
    } else if (index === 0) {
      opacity = 0.98893;
      scale = 1.0957;
    } else if (index === 1) {
      opacity = 0.640918;
      scale = 0.960357;
    } else if (index === 2) {
      opacity = 0.251794;
      scale = 0.809031;
    }

    return {
      opacity,
      transform: `scale(${scale})`,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      {/* Hero Header with Breadcrumb */}
      <PageHero
        title="FAQ's"
        backgroundImage={banner.src}
      />

      <section className="relative px-4 md:px-[8%] block max-w-7xl mx-auto pt-12 md:pt-24 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Centered Title */}
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              In case you missed anything, <br />
              <span className="text-primary font-bold">frequently asked questions</span>
            </h2>
          </div>

          {/* Unified Filter and Search Toolbar */}
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 w-full max-w-5xl mx-auto bg-white p-2 md:p-3 rounded-2xl border border-gray-200 shadow-sm mb-10 md:mb-16">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md py-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-transparent text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Right: Separator + Dropdowns */}
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto shrink-0 lg:ml-auto">
              <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

              {/* Filters Dropdown Group */}
              <div className="flex flex-col sm:flex-row items-center gap-2 py-2 px-2 md:px-4 w-full lg:w-auto overflow-hidden shrink-0">
                {/* FAQ Type Dropdown */}
                <div className="relative group/filter w-full sm:w-auto min-w-[160px]">
                  <Select value={faqType} onValueChange={(val: any) => setFaqType(val)}>
                    <SelectTrigger className="w-full flex items-center justify-between border-0 shadow-none px-6 py-2.5 rounded-xl font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-0">
                      <SelectValue placeholder="FAQ Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General FAQs</SelectItem>
                      <SelectItem value="platform">Platform OS FAQs</SelectItem>
                      <SelectItem value="industry">Industry FAQs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="hidden sm:block w-px h-6 bg-gray-200"></div>

                {/* Dynamic Sub-category Filter Dropdown */}
                <div className="relative group/filter w-full sm:w-auto min-w-[200px]">
                  <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
                    <SelectTrigger className="w-full flex items-center justify-between border-0 shadow-none px-6 py-2.5 rounded-xl font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-0">
                      <SelectValue placeholder={
                        faqType === "general"
                          ? "All Categories"
                          : faqType === "platform"
                          ? "All Platforms"
                          : "All Industries"
                      } />
                    </SelectTrigger>
                    <SelectContent>
                      {faqType === "general" && (
                        <>
                          <SelectItem value="all">All Categories</SelectItem>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </>
                      )}
                      {faqType === "platform" && (
                        <>
                          <SelectItem value="all">All Platforms</SelectItem>
                          {platforms.map((plat) => (
                            <SelectItem key={plat} value={plat}>
                              {platformNames[plat] || plat}
                            </SelectItem>
                          ))}
                        </>
                      )}
                      {faqType === "industry" && (
                        <>
                          <SelectItem value="all">All Industries</SelectItem>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {industryNames[ind] || ind}
                            </SelectItem>
                          ))}
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  ref={(el) => { accordionRefs.current[index] = el; }}
                  style={getAnimationStyle(index)}
                  className="rounded-lg bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 hover:bg-primary/10 origin-top"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-start justify-between p-5 md:p-6 text-left"
                  >
                    <h5
                      className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-200 ${openIndex === index ? "text-primary" : "text-black/80"
                        }`}
                    >
                      {index + 1}. {faq.question}
                    </h5>
                    <ChevronDown
                      className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index
                        ? "rotate-180 text-primary"
                        : "text-black/80"
                        }`}
                    />
                  </button>
                  {openIndex === index && (
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-black/80 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <LandingPageFooter />
    </div>
  );
}
