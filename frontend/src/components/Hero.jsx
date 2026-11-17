import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINES = ["AI-Driven Digital", "Solutions for", "Modern Businesses"];
const STATS = [
  { value: "1000+", label: "Projects Delivered" },
  { value: "100+", label: "Industries Served" },
  { value: "100+", label: "Happy Clients" },
  { value: "5.0", label: "Clutch & GoodFirms" },
];

const ParticleField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const N = window.innerWidth < 768 ? 34 : 64;
    const P = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 150 && d > 0.01) {
          p.x += (dx / d) * 0.5;
          p.y += (dy / d) * 0.5;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.65)";
        ctx.fill();
      }
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i];
          const b = P[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 130) * 0.13})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    };
    step();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0C_78%)]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-36 lg:pt-44"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Copy */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-zinc-400 mb-6 flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-white rounded-full pulse-dot" />
              Kuchoriya TechSoft — Since 2009
            </motion.p>

            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
              {LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.13,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {i === 2 ? (
                      <>
                        Modern{" "}
                        <span className="text-stroke">Businesses</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl"
            >
              <strong className="text-white font-medium">Kuchoriya TechSoft</strong> is an enterprise digital engineering and custom software development company founded in 2009. We engineer high-performance mobile applications, custom web platforms, generative AI automation pipelines, and scalable cloud architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                data-testid="hero-schedule-cta"
                onClick={() => scrollToId("contact")}
                className="group inline-flex items-center gap-2.5 bg-white text-[#0A0A0C] text-sm font-semibold px-7 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300 hover:gap-3.5 shadow-lg shadow-white/10"
              >
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                data-testid="hero-explore-cta"
                onClick={() => scrollToId("services")}
                className="inline-flex items-center gap-2.5 border border-zinc-700 text-white text-sm font-medium px-7 py-4 rounded-full hover:border-zinc-400 hover:bg-zinc-950/60 transition-all duration-300"
              >
                Explore AI Capabilities
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive AI & System Architecture Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-zinc-800/90 bg-[#121216]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#18181D]/90 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#EAB308]/80 border border-[#EAB308]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
                </div>
                <div className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  kuchoriya_ai_engine.v2
                </div>
                <span className="font-mono2 text-[10px] text-zinc-500">live</span>
              </div>

              {/* Terminal Code / Diagnostic Body */}
              <div className="p-5 font-mono2 text-xs leading-relaxed space-y-3.5">
                <div className="text-zinc-500 flex items-center justify-between text-[11px] pb-2 border-b border-zinc-800/60">
                  <span>ENV: PRODUCTION</span>
                  <span className="text-emerald-400">SOC 2 / ISO 27001 VERIFIED</span>
                </div>

                <div className="space-y-1.5 text-zinc-300">
                  <p className="text-zinc-400">
                    <span className="text-[#F97316] font-bold">➜</span> init_architecture --client enterprise
                  </p>
                  <p className="text-zinc-500 pl-4">
                    [0.02s] Vector database connected (Pinecone/Postgres)
                  </p>
                  <p className="text-zinc-500 pl-4">
                    [0.05s] Private LLM tenancy established (Zero Data Retention)
                  </p>
                </div>

                <div className="bg-[#0A0A0C]/90 rounded-xl p-3.5 border border-zinc-800/80 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-zinc-400">Latency:</span>
                    <span className="text-white font-bold">18ms (Avg response)</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-zinc-400">Architecture:</span>
                    <span className="text-zinc-200">Microservices + Event Mesh</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-zinc-400">Global Uptime:</span>
                    <span className="text-emerald-400 font-bold">99.99% SLA Guaranteed</span>
                  </div>
                </div>

                <div className="space-y-1 text-[11px]">
                  <p className="text-zinc-400">
                    <span className="text-[#F97316] font-bold">➜</span> deployment_status: <span className="text-emerald-400 font-medium">ready to scale</span>
                  </p>
                  <p className="text-zinc-600 pl-4">
                    // 1,000+ deployments executed since 2009
                  </p>
                </div>

                {/* Micro floating action pill */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-zinc-500 border-t border-zinc-800/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    Real-Time Pipeline
                  </span>
                  <span className="font-mono text-zinc-400">100% IP Transferred</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="relative z-10 w-full mt-16 lg:mt-24 border-t border-zinc-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 lg:py-9 pr-6 ${
                i > 0 ? "border-l border-zinc-800/80 pl-6" : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-zinc-800/80" : ""} ${
                i === 2 ? "pl-0 lg:pl-6 border-l-0 lg:border-l" : ""
              }`}
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-white">
                {s.value}
              </p>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
