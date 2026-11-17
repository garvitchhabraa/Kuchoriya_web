const AWARDS = [
  "Top Mobile App Development Company 2024",
  "Best Software Development Company — India & UAE 2023",
  "Excellence in Digital Transformation Services 2024",
  "Rated 5.0 on Clutch",
  "Rated 5.0 on GoodFirms",
  "Rated 5.0 on TopDevelopers",
];

export const TrustMarquee = () => (
  <section
    className="border-y border-zinc-800/80 bg-[#0D0D10] py-6 overflow-hidden marquee-paused"
    aria-label="Awards and recognition"
  >
    <div className="flex w-max animate-marquee">
      {[0, 1].map((dup) => (
        <div key={dup} aria-hidden={dup === 1} className="flex shrink-0">
          {AWARDS.map((a) => (
            <span
              key={a}
              className="flex items-center gap-6 px-8 font-mono2 text-[11px] uppercase tracking-[0.22em] text-zinc-500 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
              {a}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default TrustMarquee;
