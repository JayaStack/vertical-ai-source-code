import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  faq_id: number | string;
  question: string;
  answer: string;
  category?: string;
  status?: number;
  created_date?: string;
}

interface PlatformIndustryFAQProps {
  faqData?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    faq_id: 1,
    question: "How quickly can we go live?",
    answer: "Less than 48 hours. Our pre-built industry playbooks allow for rapid deployment with minimal configuration.",
    category: "General",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 2,
    question: "Is my data secure?",
    answer: "Yes. We are SOC2, GDPR, and ISO 27001 compliant. Your data is encrypted at rest and in transit.",
    category: "Security",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 3,
    question: "Can I integrate with my existing CRM?",
    answer: "Absolutely. We offer native integrations with Salesforce, HubSpot, Zoho, and any system via REST API.",
    category: "Integration",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 4,
    question: "What channels do you support?",
    answer: "Voice, WhatsApp, SMS, Email, and Webchat - all orchestrated from a single platform.",
    category: "Product",
    status: 1,
    created_date: new Date().toISOString()
  },
  {
    faq_id: 5,
    question: "How does the pricing work?",
    answer: "We offer a usage-based pricing model. You only pay for the conversations and outcomes you generate.",
    category: "Pricing",
    status: 1,
    created_date: new Date().toISOString()
  }
];

const PlatformIndustryFAQ: React.FC<PlatformIndustryFAQProps> = ({ faqData = defaultFaqs }) => {
  const faqs = faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set mounted state after hydration to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer for scroll animations (both directions)
  useEffect(() => {
    if (!isMounted || faqs.length === 0) return;

    const observers: IntersectionObserver[] = [];

    // Reset current refs array to match faq length if needed, though usually stable
    accordionRefs.current = accordionRefs.current.slice(0, faqs.length);

    faqs.forEach((_, index) => {
      const ref = accordionRefs.current[index];
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add to visible items with stagger delay
                setTimeout(() => {
                  setVisibleItems((prev) => {
                    if (!prev.includes(index)) {
                      return [...prev, index];
                    }
                    return prev;
                  });
                }, index * 100);
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
  }, [faqs, isMounted]);

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
    <section className="relative px-4 md:px-[8%] py-16 md:py-24 block bg-white">
      <div className="mx-auto max-w-4xl flex flex-col items-center">

        <div className="max-w-5xl mb-12 md:mb-16 text-center mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl text-gray-700  mb-6">
            Find Answers to Your Most <br />
            <span className="text-primary font-semibold">Frequently Asked Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={faq.faq_id}
              ref={(el) => { accordionRefs.current[index] = el; }}
              style={getAnimationStyle(index)}
              className="group border-b border-gray-200 last:border-0 origin-top"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-4 md:py-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${openIndex === index ? 'text-primary' : 'text-gray-800 group-hover:text-primary'
                  }`}>
                  {faq.question}
                </span>
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shrink-0 ${openIndex === index ? 'border-primary bg-primary text-white shadow-md shadow-primary/20' : 'border-gray-200 text-gray-400 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:text-primary'
                  }`}>
                  <Plus className={`absolute w-5 h-5 transition-all duration-300 ${openIndex === index ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`} />
                  <Minus className={`absolute w-5 h-5 transition-all duration-300 ${openIndex === index ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`} />
                </div>
              </button>
              <div
                className={`grid transition-all duration-500 ease-[0.25,1,0.5,1] ${openIndex === index ? "opacity-100 pb-8" : "opacity-0"
                  }`}
                style={{ gridTemplateRows: openIndex === index ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl pr-4 md:pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformIndustryFAQ;