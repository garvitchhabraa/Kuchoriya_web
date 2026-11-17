import React from "react";

const BRANDS = [
  {
    name: "MCKESSON",
    render: () => (
      <span className="font-display font-black text-xl lg:text-2xl tracking-tighter text-white">
        M<span className="text-[0.75em] align-top inline-block font-bold">C</span>KESSON
      </span>
    ),
  },
  {
    name: "HINDUJA GROUP",
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <svg viewBox="0 0 32 32" className="w-6 h-6 text-white mb-0.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="16" cy="16" r="13" />
          <path d="M16 7 A9 9 0 0 1 25 16 A9 9 0 0 1 16 25" />
          <path d="M16 11 A5 5 0 0 1 21 16" />
        </svg>
        <span className="font-mono2 text-[8px] tracking-[0.1em] uppercase text-zinc-300 font-bold">
          HINDUJA GROUP
        </span>
      </div>
    ),
  },
  {
    name: "Reliance",
    render: () => (
      <div className="flex items-center gap-1.5 leading-none">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
          <path d="M12 2 C6.48 2 2 6.48 2 12 C2 17.52 6.48 22 12 22 C17.52 22 22 17.52 22 12 C22 6.48 17.52 2 12 2 Z M12 5 C14.5 5 16.5 7 16.5 9.5 C16.5 12 14.5 14 12 14 C10.5 14 9.5 13 9 12 L9 18 L7 18 L7 7 C8.2 5.8 10 5 12 5 Z" />
        </svg>
        <span className="font-display font-serif font-bold text-lg text-white tracking-tight">
          Reliance
        </span>
      </div>
    ),
  },
  {
    name: "DHL",
    render: () => (
      <div className="flex items-center font-black italic text-2xl lg:text-3xl text-white tracking-wider">
        <span className="text-zinc-500 font-light mr-1 text-sm not-italic">≡</span>
        <span className="tracking-tight">DHL</span>
        <span className="text-zinc-500 font-light ml-1 text-sm not-italic">≡</span>
      </div>
    ),
  },
  {
    name: "Whirlpool",
    render: () => (
      <div className="relative font-serif font-bold italic text-xl lg:text-2xl text-white tracking-wide">
        <span className="font-sans font-black not-italic text-2xl">W</span>hirlpool
        <span className="text-[10px] align-super font-sans not-italic">®</span>
      </div>
    ),
  },
  {
    name: "SONY BRAVIA",
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <span className="font-display font-serif font-black text-lg tracking-widest text-white">
          SONY
        </span>
        <span className="font-display text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-300 mt-0.5">
          BRAVIA
        </span>
      </div>
    ),
  },
  {
    name: "DRAFT KINGS",
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <svg viewBox="0 0 24 16" className="w-5 h-3 text-white mb-0.5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 14 L4 4 L9 9 L12 2 L15 9 L20 4 L22 14 Z" />
          <circle cx="4" cy="3" r="1" fill="currentColor" />
          <circle cx="12" cy="1" r="1" fill="currentColor" />
          <circle cx="20" cy="3" r="1" fill="currentColor" />
        </svg>
        <span className="font-display font-black text-xs tracking-wider uppercase text-white leading-tight">
          DRAFT
        </span>
        <span className="font-display font-black text-[9px] tracking-widest uppercase text-white leading-tight">
          KINGS
        </span>
      </div>
    ),
  },
];

export const TrustMarquee = () => {
  return (
    <section
      className="border-y border-zinc-800/80 bg-[#0A0A0C] py-5 lg:py-6 overflow-hidden select-none"
      aria-label="Built for brands that mean business"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="shrink-0 text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-800 pb-3 md:pb-0 md:pr-8">
          <p className="font-display font-bold text-white text-sm sm:text-base tracking-tight leading-tight">
            Built for Brands
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-tight mt-0.5">
            That Mean Business
          </p>
        </div>

        <div className="flex-1 overflow-hidden relative w-full mask-gradient">
          <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
            {[0, 1].map((dup) => (
              <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center gap-12 sm:gap-16">
                {BRANDS.map((b) => (
                  <div
                    key={`${dup}-${b.name}`}
                    className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
                  >
                    {b.render()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
