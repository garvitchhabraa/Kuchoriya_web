export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5" data-testid="nav-brand-logo">
    <span className="relative grid place-items-center w-9 h-9 rounded-lg bg-white text-[#0A0A0C] font-display font-black text-lg leading-none">
      K
      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white border-2 border-[#0A0A0C]" />
    </span>
    {!compact && (
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-white text-[15px] tracking-tight">
          KUCHORIYA
        </span>
        <span className="font-mono2 text-[9px] uppercase tracking-[0.35em] text-zinc-500 mt-0.5">
          TechSoft
        </span>
      </span>
    )}
  </span>
);

export default Logo;
