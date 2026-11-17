import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const PROJECTS = [
  {
    id: "sixt-app",
    title: "Sixt Rent a Car App",
    category: "Mobile Application",
    img: "/images/work/work-sixt-app.jpg",
    alt: "Sixt Rent a Car Mobile App Development",
  },
  {
    id: "sixt-fleet",
    title: "Sixt Rent a Car",
    category: "Fleet Management Platform",
    img: "/images/work/work-sixt-fleet.jpg",
    alt: "Sixt Fleet Management Web Platform",
  },
  {
    id: "epix-iptv",
    title: "EPIX IPTV",
    category: "Multi-Screen OTT Suite",
    img: "/images/work/work-epix-iptv.jpg",
    alt: "EPIX IPTV Smart TV and Mobile Streaming Platform",
  },
  {
    id: "draftkings",
    title: "DraftKings",
    category: "Real-Time Fantasy Sports",
    img: "/images/work/work-draftkings.jpg",
    alt: "DraftKings Real-Time Fantasy Sports Engine",
  },
];

export const CaseStudies = () => {
  return (
    <section 
      id="work" 
      className="py-20 lg:py-28 bg-[#0A0A0C] text-white border-y border-zinc-800/80" 
      data-testid="work-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#FB771F]">
              Explore Our Work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-3xl mx-auto">
              From web and mobile applications to enterprise software, we deliver future-ready solutions designed to drive growth, boost engagement, and adapt as your business scales.
            </p>
          </Reveal>
        </div>

        {/* 4 Immersive Showcase Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-[#FB771F]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 bg-[#121216]"
            >
              {/* Full Image Canvas */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Clean Bottom Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <span className="text-[10px] font-mono2 uppercase tracking-widest text-[#FB771F] font-semibold block mb-0.5">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Consultation Strip */}
        <Reveal delay={0.2}>
          <div className="mt-14 p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#18181F] to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-mono2 uppercase tracking-widest text-[#FB771F] font-semibold block mb-1">
                Enterprise Engineering Partner
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to build an industry-leading digital product?
              </h4>
              <p className="text-sm text-zinc-400 mt-1 max-w-xl">
                Partner with Kuchoriya TechSoft for world-class mobile apps, OTT streaming suites, and enterprise scale.
              </p>
            </div>

            <button
              onClick={() => scrollToId("contact")}
              className="shrink-0 inline-flex items-center gap-2.5 bg-[#FB771F] hover:bg-[#e66a17] text-white text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:gap-3.5"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default CaseStudies;
