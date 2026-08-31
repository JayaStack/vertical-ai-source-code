"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, MailIcon, StarIcon, User2Icon, X } from "lucide-react";
import banner from "@/assets/company/leadership-team/banner.webp"
import Venkatesh from "@/assets/company/leadership-team/venkatesh.png"
import Pooja from "@/assets/company/leadership-team/pooja-dev.png"
import Varman from "@/assets/company/leadership-team/varman.png"
import PreethiJohn from "@/assets/company/leadership-team/preethi-john.png"
import GokulShakthi from "@/assets/company/leadership-team/gokul-shakthi.png"
import Eswaran from "@/assets/company/leadership-team/eswaran.png"

// Dummy team data
const teamMembers = [
  {
    id: 1,
    name: "Venkatesh A",
    role: "Founder & CEO",
    bio: `Venkatesh leads The Vertical AI with a focus on building AI-native enterprise operating systems that combine orchestration, automation, governance, and real-time execution into a unified operational layer.

His experience spans finance, telecom, enterprise operations, and regulated industries, where he has worked closely with large-scale customer workflows, communication infrastructure, and operational ecosystems. This operational exposure shaped The Vertical AI’s architecture-first approach toward enterprise AI.

At The Vertical AI, he leads platform vision, product strategy, and enterprise AI execution across the company’s ecosystem, with a focus on building practical, scalable systems for regulated and high-volume enterprises. 

IIM Calcutta (Executive) · Kellogg School of Management (Product Management)`,
    image: Venkatesh.src,
    socials: { linkedin: "https://www.linkedin.com/in/vishakvenkatesh/", twitter: "#", mail: "mailto:#" }
  },
  {
    id: 2,
    name: "Pooja Dev",
    role: "Chief Financial Officer",
    bio: `Pooja leads finance, strategic planning, and operational governance at The Vertical AI.

Her experience spans startup finance, consulting, capital planning, and business operations, where she has worked closely with growth-stage companies on financial structuring, scalability, investor readiness, and long-term operational planning.

At The Vertical AI, she focuses on building the financial and operational foundation required to scale an enterprise AI platform responsibly and efficiently. Her work includes capital strategy, financial discipline, growth planning, and enabling sustainable expansion across the company’s ecosystem.

She brings a balanced approach that combines startup agility with structured financial execution in a rapidly evolving AI market. 

CPA (Certified Public Accountant) · ICAI`,
    image: Pooja.src,
    socials: { linkedin: "https://www.linkedin.com/in/pooja-dev31/", twitter: "#", mail: "mailto:#" }
  },
  {
    id: 3,
    name: "Varman A",
    role: "Business Head · Enterprise Growth & AI Adoption",
    bio: `Varman leads enterprise growth and strategic adoption initiatives at The Vertical AI.

His experience spans enterprise sales, business expansion, customer acquisition, and operational growth across sectors including healthcare, real estate, SaaS, and customer-centric business ecosystems. Over the years, he has worked closely with enterprises navigating scale, operational complexity, and technology adoption across large business environments.

At The Vertical AI, he works with enterprises exploring AI-led operational transformation, helping align platform capabilities with real business outcomes. His focus is on strategic expansion, enterprise partnerships, and enabling long-term customer success across regulated and high-volume industries.

He brings a strong understanding of enterprise decision-making, operational execution, and growth strategy in evolving technology ecosystems.

Enterprise Sales Leadership · Business Expansion · Strategic Partnerships `,
    image: Varman.src,
    socials: { linkedin: "https://www.linkedin.com/in/varman7871337114/", twitter: "#", mail: "mailto:#" }
  },
  {
    id: 4,
    name: "Preethi John",
    role: "Chief People Officer",
    bio: `Preethi leads operations, people systems, and organizational execution at The Vertical AI.

Her experience spans enterprise operations, cross-functional coordination, vendor management, customer-facing workflows, and large-scale operational environments across telecom and business operations ecosystems. Over the years, she has worked closely with teams managing execution, delivery coordination, and process-driven operational functions at scale.

At The Vertical AI, she oversees organizational operations, people processes, onboarding, infrastructure coordination, and internal execution systems that support the company’s growth and operational scalability. Her role focuses on building structured operational frameworks that enable teams to execute efficiently across a rapidly evolving enterprise AI environment.

She brings a process-oriented and execution-driven approach that helps translate growth into scalable organizational systems.

Enterprise Operations · Organizational Execution · Process Management`,
    image: PreethiJohn.src,
    socials: { linkedin: "https://www.linkedin.com/in/preethi-john-74a86a67/", twitter: "#", mail: "mailto:#" }
  },
  {
    id: 5,
    name: "Eswaran M",
    role: "Head of Operations",
    bio: `Eswaran leads operational execution and workflow coordination across customer engagement environments at The Vertical AI.

He brings extensive experience in customer operations, workflow management, and execution-driven operational ecosystems where consistency, coordination, and turnaround efficiency are critical.

At The Vertical AI, he focuses on operational performance, workflow efficiency, and execution alignment across enterprise operations environments, supporting the company’s broader vision of scalable AI-assisted execution systems.

Operational Management · Workflow Coordination · Customer Operations`,
    image: Eswaran.src,
    socials: { linkedin: "http://linkedin.com/in/eswaran-m-b02b18366", twitter: "#", mail: "mailto:#" }
  },
//   {
//     id: 6,
//     name: "Gokul Shakthi",
//     role: "Key Accounts & Partnerships Manager",
//     bio: `Gokul works across enterprise accounts, strategic partnerships, and customer growth initiatives at The Vertical AI.

// His experience spans business development, customer engagement, and revenue operations across multiple business ecosystems, with a focus on relationship management and operational coordination.

// At The Vertical AI, he works closely with enterprise customers across onboarding, adoption, and long-term account engagement, helping align platform execution with customer outcomes.

// Strategic Partnerships · Enterprise Accounts · Revenue Operations`,
//     image: GokulShakthi.src,
//     socials: { linkedin: "#", twitter: "#", mail: "mailto:#" }
//   }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const closeModal = () => setSelectedMember(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      <Header visible={true} />

      {/* Hero Section */}
      <PageHero
        title="Our Team"
        backgroundImage={banner.src}
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Title Header */}
        <div className="text-center mb-12 md:mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-gray-900  mb-4 md:mb-6">
            Leadership <span className="text-primary font-bold">Team</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-2 max-w-4xl mx-auto">
            Built across enterprise operations, finance, customer ecosystems, and execution environments, the leadership behind The Vertical AI brings deep experience from industries where scale, coordination, and operational reliability are critical. We’re focused on building AI-native systems that enterprises can operationalize in real-world environments - not just experiment with.
          </p>
        </div>

        {/* Image Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image
                fill
                src={member.image}
                alt={member.name}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Top Icons */}
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.socials.linkedin} className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors border border-white/20">
                  <LinkedinIcon size={18} strokeWidth={2.5} />
                </a>
              </div>
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors border border-white/20">
                  <User2Icon size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1 leading-tight drop-shadow-md">{member.name}</h3>
                <p className="text-xs font-medium text-gray-300 drop-shadow-md">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center px-4 py-6 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 max-h-[90vh]"
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full flex items-center justify-center text-gray-800 transition-colors shadow-sm"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>

                {/* Content */}
                <div className="p-6 md:p-12 flex flex-col overflow-y-auto w-full">
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mb-6 sm:mb-8 items-start sm:items-center">
                    <div className="relative w-24 h-24 sm:w-48 sm:h-48 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                      <Image
                        fill
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2 pr-10">{selectedMember.name}</h3>
                      <p className="text-primary font-semibold text-base md:text-lg mb-3 md:mb-4">{selectedMember.role}</p>
                      <div className="flex gap-3">
                        <a href={selectedMember.socials.linkedin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors">
                          <LinkedinIcon size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-sm md:text-base">
                    {selectedMember.bio.trim().split(/\n\s*\n/).map((para, i, arr) => (
                      <p key={i} className={`mb-6 ${i === arr.length - 1 ? 'font-bold text-gray-900' : ''}`}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <LandingPageFooter />
    </div>
  );
}
