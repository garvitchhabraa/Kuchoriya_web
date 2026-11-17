import {
  BrainCircuit,
  Smartphone,
  Code2,
  RefreshCcw,
  Workflow,
  Cloud,
  Users,
  ShoppingCart,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Enterprise AI & Machine Learning",
    desc: "From custom LLM fine-tuning and RAG pipelines to autonomous AI agent workflows and predictive analytics, we turn proprietary enterprise data into automated competitive advantage.",
    tags: ["Generative AI", "RAG Pipelines", "Autonomous Agents", "Vector Search"],
    span: "md:col-span-8",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    desc: "Native iOS (Swift), Android (Kotlin), and cross-platform (React Native, Flutter) architectures engineered for sub-second performance, offline sync, and fast App Store approval.",
    tags: ["iOS & Android", "React Native", "Flutter"],
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "Custom Software & Web Engineering",
    desc: "Scalable SaaS platforms, multi-tenant portals, and microservices architectures built around unique operational workflows to replace fragmented tools.",
    tags: ["Enterprise SaaS", "Microservices", "APIs"],
    span: "md:col-span-4",
  },
  {
    icon: RefreshCcw,
    title: "Enterprise ERP & Modernization",
    desc: "Modular ERP architecture, legacy system refactoring, and automated inventory and financial pipelines with zero operational downtime.",
    tags: ["ERP Systems", "Legacy Migration"],
    span: "md:col-span-4",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    desc: "Cloud-native infrastructure deployed on AWS, Google Cloud, and Azure with Kubernetes orchestration, Terraform automation, and 99.99% uptime SLAs.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    span: "md:col-span-4",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Pods",
    desc: "Scale your roadmap in 48-72 hours with senior full-stack, AI, and QA engineers dedicated exclusively to your product under transparent agile scrums.",
    tags: ["Dedicated Teams", "Staff Augmentation"],
    span: "md:col-span-4",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Ecosystems",
    desc: "High-volume digital storefronts, multi-vendor marketplaces, and headless checkout architectures optimized for conversion and international payment gateways.",
    tags: ["Headless Commerce", "Marketplaces"],
    span: "md:col-span-4",
  },
  {
    icon: Workflow,
    title: "Intelligent Business Automation",
    desc: "End-to-end workflow automation, Robotic Process Automation (RPA), and real-time data sync eliminating manual data entry across departments.",
    tags: ["RPA", "Workflow Automation"],
    span: "md:col-span-4",
  },
  {
    icon: Compass,
    title: "Virtual CTO & Tech Advisory",
    desc: "Strategic technology leadership, architecture blueprints, security compliance roadmaps, and tech diligence for scale-ups and enterprises.",
    tags: ["Architecture Advisory", "Due Diligence"],
    span: "md:col-span-4",
  },
];

export const Services = () => (
  <section id="services" className="py-20 lg:py-32 relative bg-[#FFFFFF] text-zinc-900 border-y border-zinc-200" data-testid="services-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <SectionHeading
          dark={true}
          eyebrow="What We Do"
          title={
            <>
              Custom Software &amp; <span className="text-[#F97316]">AI Services</span> That Move Business Forward
            </>
          }
          intro={
            <>
              At Kuchoriya TechSoft, we deliver <span className="text-[#F97316] font-medium">custom software development</span>, mobile and web app solutions, and <span className="text-[#F97316] font-medium">AI-driven automation</span> for startups and enterprises — scalable, secure, future-ready digital products across fintech, healthcare, and logistics.
            </>
          }
        />
        <Reveal delay={0.2} className="shrink-0">
          <button
            data-testid="services-hire-cta"
            onClick={() => scrollToId("contact")}
            className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-900 text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-100 hover:border-zinc-400 transition-all duration-300 hover:gap-3 shadow-sm"
          >
            Hire Dedicated Developers
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08} className={`col-span-1 ${s.span}`}>
            <article
              data-testid={`service-card-${i + 1}`}
              className="group relative h-full rounded-2xl p-6 lg:p-8 bg-[#F8F9FA] border border-zinc-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white"
            >
              {s.featured && (
                <span className="absolute top-6 right-6 font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-600 border border-zinc-300 rounded-full px-3 py-1 bg-white font-semibold">
                  Core Expertise
                </span>
              )}
              <s.icon className="w-7 h-7 text-zinc-900 mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-zinc-900 tracking-tight group-hover:text-[#F97316] transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed max-w-md">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono2 text-[10px] uppercase tracking-wider text-[#F97316] border border-[#F97316]/30 rounded-full px-3 py-1 bg-[#F97316]/5 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
