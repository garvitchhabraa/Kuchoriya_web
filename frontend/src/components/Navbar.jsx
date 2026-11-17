import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "stack", label: "Tech Stack" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "insights", label: "Insights" },
  { id: "faq", label: "FAQ" },
];

const go = (id) => scrollToId(id);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id) => {
    setOpen(false);
    setTimeout(() => go(id), open ? 250 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav border-b border-zinc-800/80"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-[72px] flex items-center justify-between">
          <button
            onClick={() => jump("hero")}
            className="hover:opacity-80 transition-opacity"
            aria-label="Kuchoriya TechSoft home"
          >
            <Logo />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-${l.id}-link`}
                onClick={() => jump(l.id)}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-discovery-cta"
              onClick={() => jump("contact")}
              className="hidden sm:inline-flex items-center gap-2 bg-white text-[#0A0A0C] text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors duration-300"
            >
              Book Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0C]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="h-[72px] px-4 sm:px-6 flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {[...LINKS, { id: "contact", label: "Contact" }].map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  onClick={() => jump(l.id)}
                  className="text-left font-display text-4xl font-bold text-white py-3 border-b border-zinc-900 hover:text-zinc-300 transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <button
                onClick={() => jump("contact")}
                className="w-full bg-white text-[#0A0A0C] font-semibold py-4 rounded-full"
              >
                Book Discovery Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
