"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import { QuoteIcon, StarIcon, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import image1 from "@/assets/testimonials/1.webp"
import image2 from "@/assets/testimonials/2.webp"
import image3 from "@/assets/testimonials/3.webp"
import image4 from "@/assets/testimonials/4.webp"
import image5 from "@/assets/testimonials/5.webp"

import logo1 from "@/assets/client-logos/Kotak-Mahindra.png"
import logo2 from "@/assets/client-logos/Bajaj-Finserv.png"
import logo3 from "@/assets/client-logos/DRA-Homes.png"
import logo4 from "@/assets/client-logos/TVS-Credit.png"
import logo5 from "@/assets/client-logos/smk-mg.png"

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    content: "We truly appreciate the team’s ownership and execution. Their AI sales assistant helped us automate lead engagement, ensure consistent follow-ups, and improve conversion efficiency. The ability to handle high-volume enquiries instantly has improved our lead-to-booking ratio by nearly 25%-it's like having an army of perfectly trained sales agents working 24/7.",
    companyName: "DRA Homes",
    rating: 5,
    logo: logo3
  },
  {
    id: 2,
    content: "Before this, we were missing leads due to slow follow-ups. With AI voice agents, every enquiry is now handled instantly, test drives are scheduled seamlessly, and service calls are proactive. This has improved conversions and ensured no opportunity is lost.",
    companyName: "SMK MG",
    rating: 4,
    logo: logo5
  },
  {
    id: 3,
    content: "Their AI voice agents for collections helped us significantly improve recovery rates and scaled the collection. Conversations are structured, empathetic, and fully compliant, ensuring a smooth and effective recovery process across our entire national portfolio.",
    companyName: "Kotak Mahindra Bank",
    rating: 5,
    logo: logo1
  },
  {
    id: 4,
    content: "We saw a noticeable increase in on-time payments after partnering with them. Their AI voice agents handled follow-ups professionally and at scale, improving recovery efficiency while strengthening customer relationships. Implementation was smooth, and the ROI was evident within the first quarter.",
    companyName: "Bajaj Finserv",
    rating: 5,
    logo: logo2
  },
  {
    id: 5,
    content: "What we liked most was the balance between persistence and customer sensitivity. The orchestration layer has significantly reduced our manual data entry errors and bridges the gap between our legacy systems and modern AI capability, truly wonderful service and support.",
    companyName: "TVS Credits",
    rating: 4,
    logo: logo4
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      {/* Hero Section */}
      <PageHero
        title="Testimonials"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2938"
      />

      <main className="max-w-7xl mx-auto py-24 px-4 md:px-0">

        <div className="max-w-5xl mb-20 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl text-gray-700 ">
            See what our valued partners <br className="hidden sm:block" />
            <span className="text-primary font-semibold">are saying about us</span>
          </h2>
        </div>

        {/* Manual 3-Column Masonry to ensure Left-to-Right flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {testimonials
                .filter((_, i) => i % 3 === colIndex)
                .map((testimonial, i) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-4 md:p-6 border border-neutral-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col gap-6 group relative overflow-hidden"
                  >
                    {/* Subtle Watermark */}
                    <QuoteIcon className="absolute -top-6 -right-6 w-32 h-32 text-gray-50 transform rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none fill-current" />

                    {/* Logo and Rating Row */}
                    <div className="flex items-center justify-between pb-6 mb-2 border-b border-gray-100 relative z-10">
                      <div className="h-10 w-auto relative">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.companyName}
                          width={120}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      </div>

                      <div className="flex gap-1 text-primary">
                        {[...Array(5)].map((_, i) => {
                          const fillAmount = Math.max(0, Math.min(1, testimonial.rating - i));
                          return (
                            <div key={i} className="relative">
                              <StarIcon className="w-5 h-5 fill-transparent" />
                              <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${fillAmount * 100}%` }}
                              >
                                <StarIcon className="w-5 h-5 fill-primary" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quotes & Text */}
                    <div className="relative flex-1 z-10">
                      <p className="text-gray-600 text-base font-medium leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          ))}
        </div>
      </main>

      <LandingPageFooter />
    </div>
  );
}
