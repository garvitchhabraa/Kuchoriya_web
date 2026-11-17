import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const STACK = {
  "AI & LLMs": [
    "OpenAI GPT",
    "LangChain",
    "RAG Pipelines",
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "Vector Databases",
    "AI Agents",
  ],
  Frontend: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "FastAPI", "Django", ".NET", "Java", "Go"],
  Mobile: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"],
  "Databases & Cloud": [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "AWS",
    "Google Cloud",
    "Azure",
    "Firebase",
  ],
  DevOps: ["Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
};

const TABS = Object.keys(STACK);

export const TechStack = () => {
  const [active, setActive] = useState(TABS[0]);
  return (
    <section id="stack" className="py-20 lg:py-32 bg-[#FFFFFF] border-y border-zinc-200" data-testid="stack-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          dark={true}
          eyebrow="Our Tech Stack"
          title={
            <>
              <span className="text-[#F97316]">Battle-Tested</span> Technologies, Enterprise-Grade Delivery
            </>
          }
        />
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                data-testid={`tech-tab-${t.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                onClick={() => setActive(t)}
                className={`font-mono2 text-[11px] uppercase tracking-[0.15em] px-4 py-2.5 rounded-full border transition-all duration-300 ${
                  active === t
                    ? "bg-[#FB771F] text-white border-[#FB771F] font-semibold shadow-md shadow-[#FB771F]/20"
                    : "text-zinc-600 border-zinc-300 bg-zinc-50 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                {t}
                <span className="ml-2 opacity-60">{STACK[t].length}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3" role="tabpanel" data-testid="tech-grid">
          {STACK[active].map((tech, i) => (
            <Reveal key={tech} delay={i * 0.04} y={14}>
              <span className="inline-flex items-center gap-3 bg-[#F8F9FA] border border-zinc-200/90 rounded-xl px-5 py-3.5 text-sm font-medium text-zinc-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-white hover:border-[#F97316]/50 transition-all duration-300 cursor-default group">
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
                <span className="group-hover:text-[#F97316] transition-colors">{tech}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
