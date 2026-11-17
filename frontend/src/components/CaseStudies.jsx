import { Star, Quote, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const WORK = [
  {
    tag: "Enterprise Software",
    title: "Enterprise ERP Transformation",
    desc: "A powerful ERP platform with expert consultation, innovative problem-solving, and scalable architecture — improving operational efficiency and driving long-term digital transformation.",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stat: "ERP · Global Client",
  },
  {
    tag: "Fintech & AI",
    title: "AI Analytics for Fintech",
    desc: "Intelligent automation, predictive analytics, and real-time insight pipelines for financial platforms where every decision counts.",
    img: "https://images.unsplash.com/photo-1579882392185-581038fbc8c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    stat: "AI · Fintech",
  },
  {
    tag: "Healthcare",
    title: "Telehealth Care Suite",
    desc: "Cross-platform remote care management connecting patients and clinicians — secure, compliant, and built for scale.",
    img: "https://images.pexels.com/photos/5483057/pexels-photo-5483057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stat: "Mobile · Healthcare",
  },
];

export const CaseStudies = () => (
  <section id="work" className="py-20 lg:py-32 bg-[#0D0D10] border-y border-zinc-800/80" data-testid="work-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <SectionHeading
        eyebrow="Selected Work"
        title="Real Products. Measurable Outcomes."
      />
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {WORK.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.1} className="h-full">
            <article
              data-testid={`work-card-${i + 1}`}
              className="group relative h-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 hover:border-zinc-600 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono2 text-[10px] uppercase tracking-[0.2em] bg-[#0A0A0C]/80 backdrop-blur border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full">
                  {w.tag}
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="font-display text-xl font-semibold text-white tracking-tight flex items-center justify-between">
                  {w.title}
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {w.desc}
                </p>
                <p className="mt-5 font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {w.stat}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <figure
          data-testid="testimonial-card"
          className="mt-14 relative rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 lg:p-12"
        >
          <Quote className="w-8 h-8 text-zinc-700 mb-6" />
          <blockquote className="font-display text-lg lg:text-2xl font-medium text-white leading-relaxed max-w-4xl tracking-tight">
            "Kuchoriya TechSoft delivered a powerful ERP software solution with
            expert consultation, innovative problem-solving, and scalable
            architecture — helping improve operational efficiency and drive
            long-term digital transformation and business growth."
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-white text-[#0A0A0C] font-display font-bold">
              JM
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">
                James Mitchell
              </span>
              <span className="block font-mono2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 mt-1">
                CEO · ERP Client
              </span>
            </span>
            <span className="ml-auto flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 text-center">
          <button
            data-testid="work-consult-cta"
            onClick={() => scrollToId("contact")}
            className="inline-flex items-center gap-2 bg-white text-[#0A0A0C] text-sm font-semibold px-7 py-4 rounded-full hover:bg-zinc-200 transition-colors duration-300"
          >
            Start Your Success Story
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CaseStudies;
