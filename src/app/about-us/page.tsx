"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import Image from "next/image";
import { Shield, Target, Users, Zap, Globe, MessageSquare, ArrowRight, CheckCircle2, Activity, Cpu, Layers } from "lucide-react";
import Link from "next/link";
import banner from "@/assets/company/about-us/banner.webp";
import piller1 from "@/assets/company/about-us/core-pillars-1.webp"
import piller2 from "@/assets/company/about-us/core-pillars-2.webp"
import piller3 from "@/assets/company/about-us/core-pillars-3.webp"
import piller4 from "@/assets/company/about-us/core-pillars-4.webp"
import visionImage from "@/assets/company/about-us/cover-1.webp"


const values = [
  {
    title: "Deterministic & Auditable",
    desc: "We eliminate the unpredictability of traditional LLMs. Our outputs are governed by code, ensuring every action is repeatable and fully auditable.",
    icon: Shield
  },
  {
    title: "Observability & XAI",
    desc: "Full observability into how decisions are made, providing clear, human-understandable reasoning for every autonomous action.",
    icon: Zap
  },
  {
    title: "On-Prem & Airgapped",
    desc: "For the highest security requirements, we offer full on-premise deployments. Your data and intelligence never leave your jurisdiction.",
    icon: Globe
  },
  {
    title: "Multimodal Intelligence",
    desc: "Our system perceives the world as your team does-processing voice, video, and text simultaneously to maintain context.",
    icon: MessageSquare
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="About Us"
        backgroundImage={banner.src}
        backgroundText="About Us"
      />

      <main>
        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl  text-gray-900 mb-6 md:mb-8 leading-[1.1]">
                We don’t just "add" AI. <br />
                <span className="text-primary font-bold">We Architect the Future.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                At The Vertical AI, we lead a generational shift in how global organizations operate-moving beyond fragmented, legacy-led systems toward a unified <strong>System of Action</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-500">
                We provide the foundational infrastructure that allows the enterprise to move at the speed of thought, turning millions of data points into deterministic business outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src={visionImage.src}
                alt="Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </motion.div>
          </div>
        </section>
        {/* Architecture Section - The Technical Schematic */}
        <section className="py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-white text-gray-900">

          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl  text-gray-900 leading-tight er">
                The Architecture of an&nbsp;
                <span className="text-primary font-bold">AI-First Enterprise</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4">
                Moving beyond black-box AI with transparent, high-performance systems
                built for real-world scale.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">

              {/* Card 1 */}
              <div className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary mb-4 md:mb-6">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 ">VeloXcore</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  A proprietary engine designed to train and deploy models specifically for your enterprise, providing a permanent, private competitive advantage.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary mb-4 md:mb-6">
                  <Layers size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 ">Maestro</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  The central nervous system orchestrating complex multimodal tasks across voice, text, and vision with sub-500ms latency and zero friction.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary mb-4 md:mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 ">Insights</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  We turn vast "Data Lakes" into actionable "Insights" in real-time, enabling leadership to lead with precision rather than intuition.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Six Pillars Section - Zigzag High-Fidelity */}
        <section className="bg-white py-16 md:py-20 overflow-hidden border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16 md:mb-32">

              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight er">
                Built for Absolute Enterprise Trust <br />
                <span className="text-primary">The Six Core Pillars</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4 font-medium">
                In the enterprise world, an AI is only as good as its governance. We build with a "Default-Secure" posture:
              </p>
            </div>

            <div className="space-y-16 sm:space-y-18 lg:space-y-22">
              {values.map((value, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
                      {/* Image Side */}
                      <motion.div
                        initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`relative aspect-[16/10] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl ${isEven ? "lg:order-1" : "lg:order-2"}`}
                      >
                        <Image
                          src={[piller1, piller2, piller3, piller4][i]}
                          alt={value.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </motion.div>

                      {/* Text Side */}
                      <motion.div
                        initial={{ x: isEven ? 100 : -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`space-y-6 md:space-y-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                          <value.icon size={28} className="md:w-8 md:h-8" />
                        </div>
                        <h4 className="text-2xl md:text-4xl font-bold text-gray-900 ">{value.title}</h4>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                          {value.desc}
                        </p>
                        <div className="pt-2 md:pt-4">
                          <Link href="/get-demo" className="inline-flex items-center gap-3 text-primary font-bold text-lg md:text-xl group/link">
                            Explore Technical Docs
                            <ArrowRight className="w-6 h-6 transition-transform group-hover/link:translate-x-2" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-28 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">

            {/* Top Label */}
            <span className="text-primary font-semibold text-sm tracking-wide">
              Our Ethos
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-3xl">
              Building the foundation for the{" "}
              <span className="text-primary">Autonomous Enterprise</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
              We are a collective of engineers and systems thinkers driven by
              Radical Velocity. We design intelligent systems that help organizations
              move beyond managing complexity-and start engineering growth.
            </p>

            {/* Divider */}
            <div className="my-12 h-px bg-gray-200" />

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-3 gap-10">

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Autonomous Thinking
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  We believe the future enterprise operates with intelligence at its core-not manual processes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Radical Velocity
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Speed is not just execution-it’s decision-making powered by real-time intelligence.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Engineered Growth
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  We solve complex problems in governance and decisioning to unlock scalable, predictable growth.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Vision CTA */}
        <section className="bg-white">
          <div className="bg-primary rounded-t-[40px] px-6 py-12 md:p-18 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8 md:space-y-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight ">
                The Operating System for the <br />
                Autonomous Age.
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <Link href="/get-demo" className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-4 transition-all shadow-xl hover:-translate-y-1">
                  Schedule a Deep-Dive
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="/careers" className="w-full sm:w-auto px-10 py-5 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border border-white/20 rounded-2xl font-bold text-xl transition-all backdrop-blur-md flex items-center justify-center">
                  Join the Mission
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingPageFooter />
    </div>
  );
}
