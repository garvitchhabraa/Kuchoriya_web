import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Smartphone,
  Code2,
  RefreshCcw,
  Workflow,
  Cloud,
  Users,
  ShoppingCart,
  Compass
} from "lucide-react";
import { SectionHeading, Reveal } from "./Reveal";

const OFFERINGS = [
  {
    id: "ai-development",
    shortTitle: "AI Development",
    icon: BrainCircuit,
    title: "Artificial Intelligence Development",
    desc: "Revolutionize your operations with our AI development services. From intelligent automation to predictive analytics and chatbot integration, our custom AI solutions empower smarter, faster decisions. We deliver scalable artificial intelligence solutions tailored for startups, enterprises, and global brands.",
    subServices: [
      { name: "AI Chatbot Development", detail: "Multi-turn conversational agents with enterprise context and custom knowledge bases" },
      { name: "Generative AI Development", detail: "Custom LLM fine-tuning, RAG pipelines, and diffusion model engineering" },
      { name: "AI Consulting & Strategy", detail: "Enterprise AI readiness audits, architectural roadmaps, and ROI financial models" },
      { name: "Computer Vision Software", detail: "Automated OCR, object classification, visual quality control, and facial recognition" },
      { name: "Autonomous AI Agents", detail: "Multi-agent autonomous workflow orchestration and event-driven robotic workflows" },
      { name: "Machine Learning (ML) Dev", detail: "Predictive analytics, dynamic recommendation engines, and high-precision NLP" },
      { name: "Vector Search & RAG", detail: "Semantic document retrieval with Pinecone, Milvus, Qdrant, and pgvector" },
      { name: "Private LLM Tenancy", detail: "On-premise and secure VPC zero-data-retention deployments for strict governance" },
    ],
    highlights: [
      { label: "Response Latency", value: "< 20ms P99" },
      { label: "Data Security", value: "Zero Retention VPC" },
      { label: "Model Architecture", value: "Multi-Agent Orchestration" },
      { label: "IP Ownership", value: "100% Client Transferred" },
    ],
    ctaText: "Schedule AI Consultation",
  },
  {
    id: "app-development",
    shortTitle: "Application Development",
    icon: Smartphone,
    title: "Next-Gen Mobile Application Development",
    desc: "Engineer intuitive, high-performance mobile applications across native iOS, Android, and cross-platform ecosystems. From consumer apps reaching millions to mission-critical enterprise field platforms, we build for sub-second responsiveness, offline resilience, and rapid store approvals.",
    subServices: [
      { name: "Custom iOS App Development", detail: "Swift & SwiftUI native apps with seamless Apple ecosystem sync" },
      { name: "Android App Development", detail: "Kotlin native architecture built for speed, memory efficiency, and device fragmentation" },
      { name: "Cross-Platform Flutter Apps", detail: "Single codebase 60 FPS performance across iOS, Android, and web" },
      { name: "React Native Development", detail: "Native bridge efficiency with lightning-fast feature releases and modular components" },
      { name: "Progressive Web Apps (PWA)", detail: "Offline-first web apps with push notifications, instant load, and installability" },
      { name: "Mobile UI/UX Design", detail: "Human-centric design systems optimized for conversion retention and tactile delight" },
      { name: "Enterprise Mobility Solutions", detail: "Role-based security, MDM integration, biometric auth, and fleet sync" },
      { name: "App Store Optimization (ASO)", detail: "End-to-end launch management, compliance verification, and rating growth" },
    ],
    highlights: [
      { label: "Crash-Free Rate", value: "99.9% Guaranteed" },
      { label: "Frame Rate", value: "60 FPS Native" },
      { label: "Architecture", value: "Clean MVVM / MVI" },
      { label: "App Store Speed", value: "First-Pass Approval" },
    ],
    ctaText: "Build Your Mobile App",
  },
  {
    id: "software-development",
    shortTitle: "Software Development",
    icon: Code2,
    title: "Custom Enterprise Software & Web Engineering",
    desc: "Architecting bespoke digital software to conquer complex business workflows. We engineer multi-tenant SaaS platforms, high-throughput cloud web applications, and resilient microservices designed to replace fragmented legacy tools and accelerate product delivery.",
    subServices: [
      { name: "Enterprise SaaS Platforms", detail: "Scalable multi-tenant architectures with automated subscription billing and telemetry" },
      { name: "Custom Web Portals", detail: "Customer and vendor portals with granular RBAC permissions and SSO integration" },
      { name: "Microservices & Distributed APIs", detail: "Event-driven REST, GraphQL, and gRPC service meshes with distributed tracing" },
      { name: "CRM & ERP Bespoke Solutions", detail: "Built precisely around proprietary enterprise workflows and supply chain scrums" },
      { name: "Legacy System Modernization", detail: "Refactoring legacy codebases into cloud-native microservices without business downtime" },
      { name: "Frontend Engineering (React/Next)", detail: "SSR/SSG interfaces with sub-second core web vitals and accessible design systems" },
      { name: "Backend Architecture (Node/Go/Python)", detail: "High-concurrency database-optimized server backends with connection pooling" },
      { name: "Automated QA & CI/CD", detail: "Continuous automated integration pipelines with 90%+ comprehensive test coverage" },
    ],
    highlights: [
      { label: "Code Quality", value: "Strict SonarQube A-Grade" },
      { label: "Scalability", value: "Auto-Scaling 10M+ Users" },
      { label: "Licensing", value: "100% Commercial IP Transfer" },
      { label: "Delivery", value: "Bi-Weekly Agile Sprints" },
    ],
    ctaText: "Discuss Custom Software",
  },
  {
    id: "digital-transformation",
    shortTitle: "Digital Transformation",
    icon: RefreshCcw,
    title: "Strategic Digital Transformation & Modernization",
    desc: "Re-platform and modernize your enterprise IT systems for the digital-first economy. We help legacy organizations decouple rigid monoliths, streamline disconnected workflows, and unify data lakes with zero operational downtime.",
    subServices: [
      { name: "Legacy Monolith Decoupling", detail: "Migrating mainframes and monoliths to resilient microservices step-by-step" },
      { name: "Enterprise Cloud Migration", detail: "Re-hosting, re-platforming, and refactoring on AWS, Google Cloud, and Azure" },
      { name: "Data Silo Unification", detail: "Consolidating fragmented relational databases into modern analytics data lakes" },
      { name: "Process Re-Engineering", detail: "Digitizing paper, spreadsheet, and manual paper workflows into automated pipelines" },
      { name: "Technical Debt Liquidation", detail: "Systematic auditing and refactoring of brittle software layers and obsolete packages" },
      { name: "Enterprise Security Hardening", detail: "Upgrading legacy protocols to modern zero-trust standards with MFA and encryption" },
      { name: "API-First Enablement", detail: "Wrapping legacy core systems with modern developer APIs and OpenAPI specifications" },
      { name: "Change Management Support", detail: "Staff training, documentation, sandbox environments, and phased rollout roadmaps" },
    ],
    highlights: [
      { label: "Migration Downtime", value: "0 Minutes (Zero Downtime)" },
      { label: "Cost Reduction", value: "Up to 45% OpEx Savings" },
      { label: "Security", value: "ISO 27001 Aligned" },
      { label: "Speed Multiplier", value: "3x Faster Deployments" },
    ],
    ctaText: "Plan Digital Transformation",
  },
  {
    id: "business-automation",
    shortTitle: "Business Automation",
    icon: Workflow,
    title: "Intelligent Business Automation & RPA",
    desc: "Eliminate repetitive manual bottlenecks, accelerate processing turnaround, and eradicate human errors. We combine Robotic Process Automation (RPA), AI decision models, and end-to-end API integrations to automate cross-departmental operations.",
    subServices: [
      { name: "Robotic Process Automation (RPA)", detail: "Software bots automating repetitive multi-system data entry and validations" },
      { name: "Intelligent Document Processing", detail: "Extracting invoices, contracts, and receipts via AI optical character recognition" },
      { name: "Workflow & Trigger Automations", detail: "Event-driven orchestration across ERP, CRM, slack, and email communication" },
      { name: "Automated Customer Support", detail: "Autonomous ticket categorization, routing, knowledge retrieval, and instant resolution" },
      { name: "ERP & Financial Pipelines", detail: "Automated reconciliation, payroll sync, vendor disbursements, and tax reporting" },
      { name: "Supply Chain & Order Automation", detail: "Real-time stock sync, purchase ordering, shipping labels, and fulfillment updates" },
      { name: "Custom Webhook Integrations", detail: "Reliable webhook bridges connecting legacy databases and modern SaaS APIs" },
      { name: "Automated Compliance Auditing", detail: "Real-time compliance validation, policy rule enforcement, and audit log generation" },
    ],
    highlights: [
      { label: "Task Speed", value: "90% Faster Execution" },
      { label: "Accuracy", value: "99.9% Error-Free" },
      { label: "Availability", value: "24/7/365 Unattended" },
      { label: "Average ROI", value: "< 90 Days Payback" },
    ],
    ctaText: "Automate Your Operations",
  },
  {
    id: "cloud-implementation",
    shortTitle: "Cloud Implementation",
    icon: Cloud,
    title: "Cloud Architecture, Migration & DevOps",
    desc: "Harness the elastic power of leading cloud providers. We architect secure, autoscaling cloud infrastructure on AWS, Google Cloud, and Microsoft Azure with automated Infrastructure as Code (Terraform), Kubernetes orchestration, and continuous DevOps deployment pipelines.",
    subServices: [
      { name: "AWS Cloud Architecture & Setup", detail: "EKS, Lambda serverless, S3, RDS Aurora, and CloudFront CDN edge distribution" },
      { name: "Google Cloud Platform (GCP)", detail: "GKE, BigQuery data analytics, Cloud Run serverless, and Vertex AI deployments" },
      { name: "Microsoft Azure Enterprise", detail: "Azure Kubernetes Service, App Services, Blob Storage, and Entra ID integration" },
      { name: "Kubernetes & Docker Orchestration", detail: "Production-grade microservices clustering, rolling updates, and self-healing pods" },
      { name: "DevOps & GitOps Automation", detail: "Continuous integration and deployment with GitHub Actions, GitLab CI, and ArgoCD" },
      { name: "Cloud Cost Optimization (FinOps)", detail: "Reducing cloud infrastructure waste by up to 35% with spot instances and rightsizing" },
      { name: "Disaster Recovery & Multi-Region", detail: "Active-active multi-region failover, automated snapshots, and geo-redundancy" },
      { name: "Zero-Trust Cloud Security", detail: "Cloud WAF, IAM principle-of-least-privilege, KMS encryption, and audit tracing" },
    ],
    highlights: [
      { label: "Uptime SLA", value: "99.99% Guaranteed" },
      { label: "Deployments", value: "Blue/Green Zero-Downtime" },
      { label: "IaC Standard", value: "100% Terraform Automated" },
      { label: "FinOps Impact", value: "30-40% Cost Reduction" },
    ],
    ctaText: "Scale Your Cloud Infrastructure",
  },
  {
    id: "staff-augmentation",
    shortTitle: "Staff Augmentation",
    icon: Users,
    title: "Dedicated Engineering Pods & Staff Augmentation",
    desc: "Scale your engineering velocity in 48 to 72 hours. Access Kuchoriya TechSoft's top 1% pre-vetted senior software engineers, AI architects, cloud specialists, and QA leads who integrate seamlessly into your existing scrums and time zones.",
    subServices: [
      { name: "Dedicated Full-Stack Pods", detail: "Autonomous cross-functional teams with scrum masters ready to ship from Day 1" },
      { name: "Senior AI & ML Engineers", detail: "Specialists in PyTorch, LangChain, vector stores, prompt tuning, and LLMs" },
      { name: "Mobile App Developers", detail: "Senior Swift, Kotlin, Flutter, and React Native architects with production apps" },
      { name: "DevOps & Cloud Engineers", detail: "Kubernetes, AWS/GCP, CI/CD pipelines, and Terraform infrastructure specialists" },
      { name: "QA Automation Specialists", detail: "Cypress, Playwright, and Selenium automated testing leads ensuring zero regressions" },
      { name: "Product Managers & Scrum Leads", detail: "Agile delivery experts keeping sprints aligned, roadmaps clear, and on schedule" },
      { name: "Fractional Tech Architects", detail: "Senior architectural review, scalability audits, and system design consulting" },
      { name: "48-Hour Rapid Onboarding", detail: "Fast-track legal, NDA execution, repository access, and developer environment setup" },
    ],
    highlights: [
      { label: "Talent Tier", value: "Top 1% Senior Engineers" },
      { label: "Time-Zone Overlap", value: "100% Client Aligned" },
      { label: "Onboarding Speed", value: "48 - 72 Hours" },
      { label: "Trial Period", value: "Risk-Free 2 Weeks" },
    ],
    ctaText: "Hire Dedicated Developers",
  },
  {
    id: "ecommerce-development",
    shortTitle: "E-commerce Development",
    icon: ShoppingCart,
    title: "High-Conversion E-Commerce & Marketplaces",
    desc: "Engineer lightning-fast digital storefronts and multi-vendor marketplaces engineered for high volume and explosive conversion. From headless commerce and bespoke checkout engines to ERP inventory synchronization and international multi-currency gateways.",
    subServices: [
      { name: "Headless E-Commerce Engines", detail: "Next.js commerce frontends decoupled from backend APIs for sub-second page loads" },
      { name: "Multi-Vendor Marketplaces", detail: "Custom marketplaces with vendor onboarding, commission splits, and payouts" },
      { name: "Shopify Plus & Magento Enterprise", detail: "Enterprise customization, custom apps, ERP integration, and theme engineering" },
      { name: "Custom Checkout & Payments", detail: "Stripe, Adyen, and PayPal integrations with fraud prevention and 1-click checkout" },
      { name: "ERP & Inventory Synchronization", detail: "Real-time stock synchronization with SAP, NetSuite, and warehouse systems" },
      { name: "B2B Wholesale Ordering Portals", detail: "Custom tier pricing, purchase orders, credit terms, and quote approval workflows" },
      { name: "AI Personalized Recommendations", detail: "Dynamic product recommendations boosting average order value and cross-sells" },
      { name: "High-Traffic Flash Sale Architecture", detail: "Elastic auto-scaling capable of handling millions of concurrent checkout hits" },
    ],
    highlights: [
      { label: "Page Load Speed", value: "< 0.8s Core Vitals" },
      { label: "Checkout Security", value: "PCI-DSS Level 1 Compliant" },
      { label: "Conversion Lift", value: "+28% Avg Increase" },
      { label: "Catalog Scale", value: "1M+ SKU Support" },
    ],
    ctaText: "Launch Your E-Commerce Store",
  },
  {
    id: "cto-services",
    shortTitle: "CTO Services",
    icon: Compass,
    title: "Virtual CTO & Strategic Technology Advisory",
    desc: "Access seasoned technology leadership without the full-time C-suite payroll. We partner with founders, venture capital investors, and enterprise leadership to evaluate architectures, conduct tech due diligence, and design battle-tested product roadmaps.",
    subServices: [
      { name: "Fractional & Virtual CTO", detail: "Executive technical strategy, board reporting, and high-level stakeholder guidance" },
      { name: "Architecture & Tech Roadmapping", detail: "12-36 month architectural blueprints, tech stack selection, and scalability plans" },
      { name: "Investor Tech Due Diligence", detail: "Comprehensive code audits, architecture reviews, and IP compliance checks" },
      { name: "Vendor & Stack Evaluation", detail: "Unbiased vendor selection and third-party SaaS contract cost optimization" },
      { name: "Cybersecurity & Compliance Auditing", detail: "SOC 2, ISO 27001, HIPAA, and GDPR strategic roadmap implementation" },
      { name: "Team Structuring & Hiring", detail: "Designing engineering salary bands, interview rubrics, and hiring top talent" },
      { name: "Tech Budget & Cloud Optimization", detail: "Eliminating software waste and optimizing developer efficiency metrics" },
      { name: "Disaster Recovery Governance", detail: "Enterprise business continuity, backup verification, and failover planning" },
    ],
    highlights: [
      { label: "Strategic Deliverable", value: "Actionable 12-Month Plan" },
      { label: "Experience Tier", value: "20+ Years Tech Leadership" },
      { label: "Investor Readiness", value: "Audit-Ready Reports" },
      { label: "Engagement", value: "Flexible Fractional / Advisory" },
    ],
    ctaText: "Consult With a Virtual CTO",
  },
];

export const Services = () => {
  const [activeTabId, setActiveTabId] = useState(OFFERINGS[0].id);

  const activeOffering = OFFERINGS.find((o) => o.id === activeTabId) || OFFERINGS[0];

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-y border-zinc-200" 
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header matching Pic 1 layout */}
        <div className="mb-8">
          <SectionHeading
            dark={true}
            eyebrow="Our Offerings"
            title={
              <>
                Our Offerings to{" "}
                <span className="text-[#FB771F]">
                  Accelerate Digital Transformation
                </span>{" "}
                and Innovation
              </>
            }
            intro="We specialize in custom software, mobile app development, web solutions, AI integration, blockchain, and agile execution—empowering businesses to scale, automate, and innovate."
          />
        </div>

        {/* Horizontal Category Pill Tabs matching Pic 1 */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 sm:gap-3" role="tablist">
            {OFFERINGS.map((offering) => {
              const isActive = offering.id === activeTabId;

              return (
                <button
                  key={offering.id}
                  role="tab"
                  aria-selected={isActive}
                  data-testid={`service-tab-${offering.id}`}
                  onClick={() => setActiveTabId(offering.id)}
                  className={`font-mono2 text-[11px] uppercase tracking-[0.15em] px-4 py-2.5 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#FB771F] text-white border-[#FB771F] font-semibold shadow-md shadow-[#FB771F]/25"
                      : "text-zinc-600 border-zinc-300/80 bg-zinc-50 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-400"
                  }`}
                >
                  <span>{offering.shortTitle}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-200/80 text-zinc-600 font-medium"
                    }`}
                  >
                    {offering.subServices.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Capabilities Pills Grid matching Pic 1 pill badges */}
        <div className="mt-8 flex flex-wrap gap-3" role="tabpanel" data-testid="service-pills">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffering.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-3 w-full"
            >
              {activeOffering.subServices.map((sub) => (
                <div
                  key={sub.name}
                  className="inline-flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-semibold bg-[#FFFFFF] border border-zinc-200/90 hover:border-[#FB771F] text-zinc-900 shadow-xs hover:shadow-md hover:bg-orange-50/20 transition-all duration-200 cursor-default group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FB771F] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-[#FB771F] transition-colors">
                    {sub.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Services;

