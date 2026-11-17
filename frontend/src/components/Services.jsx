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
    title: "AI Development",
    desc: "From intelligent automation to predictive analytics and chatbot integration, our custom AI solutions empower smarter, faster decisions.",
    tags: ["Generative AI", "Predictive Analytics", "Chatbots"],
    span: "md:col-span-8",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Custom mobile app development tailored to your business needs — seamless user experience, robust functionality.",
    tags: ["iOS & Android", "Cross-Platform"],
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Scalable, secure applications engineered around the unique requirements of your business.",
    tags: ["Enterprise", "SaaS"],
    span: "md:col-span-4",
  },
  {
    icon: RefreshCcw,
    title: "Digital Transformation",
    desc: "Leverage technology to elevate operations and customer experiences through innovative digital solutions.",
    tags: ["Strategy", "Modernization"],
    span: "md:col-span-4",
  },
  {
    icon: Cloud,
    title: "Cloud Implementation",
    desc: "Cloud solutions that enhance scalability, flexibility, and security for your business applications.",
    tags: ["AWS", "Azure", "GCP"],
    span: "md:col-span-4",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    desc: "Fill skill gaps and extend your team's capabilities with experienced professionals, fast.",
    tags: ["Dedicated Teams"],
    span: "md:col-span-4",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Robust e-commerce platforms that drive sales and deepen customer engagement.",
    tags: ["Storefronts", "Marketplaces"],
    span: "md:col-span-4",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Streamline processes, reduce costs, and improve efficiency across every business function.",
    tags: ["RPA", "Workflows"],
    span: "md:col-span-4",
  },
  {
    icon: Compass,
    title: "CTO Services",
    desc: "Virtual CTO services providing strategic technology leadership to navigate your technology journey.",
    tags: ["Advisory", "Roadmapping"],
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
