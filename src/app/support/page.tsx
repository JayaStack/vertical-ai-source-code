"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "@/components/landing-page/header";
import PageHero from "@/components/landing-page/page-hero";
import LandingPageFooter from "@/components/landing-page/landing-page-footer";
import Image from "next/image";
import { LifeBuoy, MessageSquare, BookOpen, Clock, Mail, Search, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, User, Send, Globe, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import banner from "@/assets/company/support/banner.webp"
import supportHero from "@/assets/company/support/main.webp"

const supportChannels = [
  {
    title: "Call Us",
    desc: "Speak directly with our support team for immediate assistance.",
    icon: Phone,
    details: ["+91 7092116868"],
    btn: "Call Now",
    link: "tel:+917092116868"
  },
  {
    title: "Email Us",
    desc: "Send us an email and we'll get back to you within 24 hours.",
    icon: Mail,
    details: ["Info@thevertical.ai"],
    btn: "Send Email",
    link: "mailto:Info@thevertical.ai"
  },
  {
    title: "Visit Us",
    desc: "Drop by our office for an in-person consultation or meeting.",
    icon: MapPin,
    details: ["513B, 5th floor, Phase II, 769,", "Spencer Plaza, Anna Salai, Chennai", "Tamil Nadu 600002"],
    btn: "Get Directions",
    link: "https://maps.google.com/?q=513B,+5th+floor,+Phase+II,+769,+Spencer+Plaza,+Anna+Salai,+Chennai,+Tamil+Nadu+600002"
  }
];


export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header visible={true} />

      <PageHero
        title="Support"
        backgroundImage={banner.src}
      />

      <main>
        {/* Support Channels Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 md:mb-6">
                How can we support <br />
                <span className="text-primary font-bold">your team today?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 md:gap-y-10 pt-6 md:pt-10">
            {supportChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white pt-12 md:pt-14 pb-8 px-6 md:px-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 "
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={30} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{channel.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{channel.desc}</p>
                  
                  <div className="flex-1 flex flex-col justify-center mb-6">
                    {channel.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-950 font-bold text-base">{detail}</p>
                    ))}
                  </div>

                  <Link href={channel.link} className="w-fit py-2 sm:py-3 px-4 sm:px-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center hover:!bg-none hover:!bg-black hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-primary/20 cursor-pointer text-sm">
                    {channel.btn}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Premium Support Command */}
        <section className="relative py-16 md:py-32 overflow-hidden px-4 md:px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              
              {/* Left Column: Visual & Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl lg:rounded-[3.5rem] overflow-hidden shadow-2xl min-h-[250px] sm:min-h-[400px] lg:min-h-[600px] flex flex-col justify-end p-8 lg:p-16"
              >
                <Image 
                    src={supportHero.src}
                    alt="Enterprise Support Hub"
                    fill
                    className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Right Column: Glassy Form Container */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white border border-gray-100 p-6 sm:p-10 lg:p-14 rounded-2xl shadow-xl h-full">
                  <div className="mb-8 md:mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Open a Support Case</h3>
                    <p className="text-gray-500 font-medium">Connect directly with our engineering team for specialized assistance.</p>
                  </div>

                  <form className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-base text-gray-900 ml-1">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                          <input 
                            type="text" 
                            placeholder="e.g. Elena Rodriguez"
                            className="w-full h-14 pl-14 pr-6 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-primary/20  outline-none transition-all text-gray-900 font-medium placeholder:text-gray-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-base text-gray-900 ml-1">Work Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                          <input 
                            type="email" 
                            placeholder="elena@enterprise.ai"
                            className="w-full h-14 pl-14 pr-6 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-primary/20  outline-none transition-all text-gray-900 font-medium placeholder:text-gray-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-base text-gray-900 ml-1">Support Category</label>
                      <Select>
                        <SelectTrigger className="w-full py-4 md:py-7 px-5 md:px-8 h-auto rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-primary/20  outline-none transition-all text-gray-900 font-bold shadow-inner flex items-center justify-between">
                          <SelectValue placeholder="Technical Implementation" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-100 rounded-2xl shadow-2xl">
                          <SelectItem value="technical" className="py-3 px-6 font-bold text-gray-900 border-b border-gray-50 last:border-0 hover:bg-primary hover:text-white transition-colors">Technical Implementation</SelectItem>
                          <SelectItem value="security" className="py-3 px-6 font-bold text-gray-900 border-b border-gray-50 last:border-0 hover:bg-primary hover:text-white transition-colors">Security & Governance Audit</SelectItem>
                          <SelectItem value="deployment" className="py-3 px-6 font-bold text-gray-900 border-b border-gray-50 last:border-0 hover:bg-primary hover:text-white transition-colors">Deployment Architecture</SelectItem>
                          <SelectItem value="performance" className="py-3 px-6 font-bold text-gray-900 border-b border-gray-50 last:border-0 hover:bg-primary hover:text-white transition-colors">Performance Optimization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-base text-gray-900 ml-1">Detailed Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Please describe your technical requirement or issue..."
                        className="w-full p-5 md:p-6 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-primary/20  outline-none transition-all text-gray-900 font-medium placeholder:text-gray-300 resize-none"
                      />
                    </div>

                    <button className="w-full sm:w-fit px-8 py-3 mt-4 md:mt-0 rounded-2xl bg-primary text-white font-bold hover:!bg-black hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3 group relative overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>
                      Submit Request
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <LandingPageFooter />

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
