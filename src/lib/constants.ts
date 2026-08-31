import { Cpu, Shield, CheckCircle2, Lock, Landmark, Box } from "lucide-react";

import frameworkBanner from "@/assets/why-vertical-ai/framework/banner.webp";
import frameworkCover from "@/assets/why-vertical-ai/framework/cover.webp";
import architectureBanner from "@/assets/why-vertical-ai/architecture/banner.webp";
import architectureCover from "@/assets/why-vertical-ai/architecture/cover.webp";
import securityBanner from "@/assets/why-vertical-ai/security/banner.webp";
import securityCover from "@/assets/why-vertical-ai/security/cover.webp";
import complianceBanner from "@/assets/why-vertical-ai/compliance/banner.webp";
import complianceCover from "@/assets/why-vertical-ai/compliance/cover.webp";
import privacyBanner from "@/assets/why-vertical-ai/data-privacy/banner.webp";
import privacyCover from "@/assets/why-vertical-ai/data-privacy/cover.webp";
import philosophyBanner from "@/assets/why-vertical-ai/philosopy/banner.webp";
import philosophyCover from "@/assets/why-vertical-ai/philosopy/cover.webp";

export const whyUsFeatures = [
  {
    id: "framework",
    title: "Vertical OS Framework",
    subtitle: "A System of Action",
    description: "While others focus on 'Systems of Record' (documenting what happened), we focus on the System of Action (deciding what happens next). Our platform acts as the central nervous system for the autonomous enterprise, transforming static documentation into dynamic, real-time execution protocols.",
    challenge: "The Orchestration Layer (Maestro): Dynamically routes every interaction based on real-time intent and persona analysis, ensuring that the right logic is applied to every unique customer journey without hard-coded decision trees.",
    solution: "The Voice/Communication OS (Conversa): A multimodal engine that handles 100k+ concurrent calls with human-grade empathy and persistent short/long-term memory, bridging the gap between raw LLM output and high-fidelity communication.",
    results: "The Governance Shield (Guardian): A real-time policy-enforcement layer that ensures 100% compliance before a single word is spoken, providing a safety net that traditional 'probabilistic' AI models completely lack.",
    metrics: [
      { label: "Execution Logic", value: "Action-Led" },
      { label: "Concurrent Streams", value: "100k+" },
      { label: "Compliance Rate", value: "100.0%" }
    ],
    capabilities: [
      "Maestro Orchestration",
      "Conversa Voice OS",
      "Guardian Shield"
    ],
    icon: Cpu,
    bannerImage: frameworkBanner,
    contentImage: frameworkCover,
  },
  {
    id: "architecture",
    title: "High-Frequency Core",
    subtitle: "Built for High-Frequency Enterprise",
    description: "Our architecture is designed for the high-stakes environment of BFSI and Telecom, where a millisecond of lag or a single hallucination can cost millions. We solve for the hardest problems in modern computation: Multimodal, Multilingual, and High-Frequency systems.",
    challenge: "VeloxCore Engine: Our proprietary low-latency core provides the 'nervous system' for the OS, ensuring that AI-to-human transitions and 'Hot Transfers' happen without a perceptible break in context or data loss.",
    solution: "Multimodal SLM/LLM Hybrid: We utilize specialized Small Language Models (SLMs) for deterministic tasks (like compliance and routing) and Large Language Models (LLMs) for complex reasoning, balancing speed with intelligence.",
    results: "Cognitive Continuity: Our dual-memory architecture ensures the AI remembers a customer's journey across years (Long-term) and across the last ten seconds of a live conversation (Short-term) for a truly persistent identity.",
    metrics: [
      { label: "Core Latency", value: "<500ms" },
      { label: "Memory Type", value: "Dual-Cache" },
      { label: "Hybrid Logic", value: "SLM/LLM" }
    ],
    capabilities: [
      "VeloxCore Engine",
      "Cognitive Continuity",
      "SLM/LLM Hybridization"
    ],
    icon: Box,
    bannerImage: architectureBanner,
    contentImage: architectureCover,
  },
  {
    id: "security",
    title: "Enterprise Security",
    subtitle: "Default-Deny Security Posture",
    description: "For our customers and investors, security is the foundation of value. We build with a 'Default-Deny' security posture, ensuring a bank-grade infrastructure that withstands the most rigorous external penetration testing.",
    challenge: "System Hardening: Every endpoint and microservice in our architecture is isolated by default. We provide dedicated VPC peering and air-gapped environments for the most sensitive enterprise workloads.",
    solution: "Cryptographic Integrity: All data, both in transit and at rest, is protected by industry-standard AES-256 and TLS 1.3 protocols, ensuring that your data moats remain impenetrable.",
    results: "Infrastructure Resilience: Our security-first engineering allows enterprises to automate mission-critical workflows with zero exposure to external cyber threats or unauthorized access.",
    metrics: [
      { label: "Security Posture", value: "Default-Deny" },
      { label: "VPC Access", value: "Dedicated" },
      { label: "Encryption", value: "AES-256" }
    ],
    capabilities: [
      "VPC Peering",
      "TLS 1.3 Protocols",
      "Air-Gapped Environments"
    ],
    icon: Shield,
    bannerImage: securityBanner,
    contentImage: securityCover,
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    subtitle: "Deterministic Policy Enforcement",
    description: "Our platform is built to meet the rigorous standards of global financial and healthcare regulators. By hard-coding guidelines like RBI, GDPR, and CCPA directly into the orchestration layer, we ensure that every autonomous action is legally compliant by design.",
    challenge: "Policy Enforcement: Through our Guardian layer, regulatory guardrails are enforced in real-time. If the system detects a potential compliance breach, it autonomously self-corrects before any external communication occurs.",
    solution: "Explainable AI (XAI): We eliminate the 'Black Box' problem by providing clear, human-readable reasoning for every decision. This ensures that human-in-the-loop oversight is always possible and audit-ready.",
    results: "Immutable Auditability: Every decision made by the OS-from routing choices to transactional nudges-is logged with 100% traceability, providing internal and external auditors with a pristine, untamperable record of execution.",
    metrics: [
      { label: "Traceability", value: "100%" },
      { label: "Compliance Logic", value: "Hard-Coded" },
      { label: "Audit Readiness", value: "Instant" }
    ],
    capabilities: [
      "Guardian Enforcement",
      "XAI Transparency",
      "Immutable Ledgers"
    ],
    icon: CheckCircle2,
    bannerImage: complianceBanner,
    contentImage: complianceCover,
  },
  {
    id: "privacy",
    title: "Data Sovereignty",
    subtitle: "Jurisdiction-locked Infrastructure",
    description: "For our global partners, privacy isn't a feature-it's a jurisdictional requirement. We ensure that sensitive PII (Personally Identifiable Information) is redacted or encrypted at the edge, ensuring the 'brains' of the AI never see what they don't need to see.",
    challenge: "Zero-Knowledge Architecture: We enforce a strict protocol where customer data is sanitized at the edge layer. This ensures that proprietary intellectual property and sensitive customer records are never exposed to the underlying inference models.",
    solution: "Sovereign Deployment Models: We offer on-premise, private cloud, or hybrid deployment models to ensure your enterprise data never leaves your jurisdictional borders, satisfying the most stringent data localization laws.",
    results: "Uncompromising Privacy: By combining edge-side redaction with localized hosting, we provide a environment where businesses can leverage global-scale AI without sacrificing their data moats or customer trust.",
    metrics: [
      { label: "Data Exposure", value: "0%" },
      { label: "Sovereignty", value: "Locked" },
      { label: "PII Redaction", value: "Real-time" }
    ],
    capabilities: [
      "Zero-Knowledge Tunnels",
      "Jurisdictional Locking",
      "Edge-Layer Sanitization"
    ],
    icon: Lock,
    bannerImage: privacyBanner,
    contentImage: privacyCover,
  },
  {
    id: "philosophy",
    title: "Philosophy & Mission",
    subtitle: "Engineering the 10x Future",
    description: "We are architecting the Enterprise OS for the Autonomous Age-a multi-billion dollar category shift that moves beyond the 'System of Record' to the System of Action. We operate at the intersection of Systems Thinking and Radical Velocity.",
    challenge: "The Economic Shift: The traditional enterprise is weighted down by linear scaling-to grow, you must add headcount and complexity. We break this cycle by transforming static interactions into high-frequency decision points.",
    solution: "Category Mission: We are rebuilding the foundational infrastructure of commerce. Our platform is the nervous system that allows an enterprise to sleep, learn, and scale without friction, creating a new standard for institutional intelligence.",
    results: "The Engineering Ethos: Solving for complexity at scale. We build for sub-500ms latency and dynamic linguistic empathy because we know that at scale, the smallest technical breakthrough impacts millions of lives.",
    metrics: [
      { label: "Economic Shift", value: "Outcome-Led" },
      { label: "Outcome Velocity", value: "Double" },
      { label: "Engineering Goal", value: "10x Future" }
    ],
    capabilities: [
      "Radical Velocity",
      "Systems Thinking",
      "Autonomous Enterprise"
    ],
    icon: Landmark,
    bannerImage: philosophyBanner,
    contentImage: philosophyCover,
  }
];
