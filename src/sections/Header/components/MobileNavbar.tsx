import brandLogo from "@/assets/branding/logo.png";

type MobileNavbarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileNavbar = ({ isOpen, onToggle }: MobileNavbarProps) => {
  return (
    <div className="flex items-center justify-between md:hidden">
      <a
        href="/"
        className="block"
        aria-label="Go to top"
      >
        <img
          src={brandLogo}
          alt="Resistance AI"
          className="h-8 w-auto"
        />
      </a>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        onClick={onToggle}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
      >
        <div className="flex h-4 w-5 flex-col justify-between">
          <span
            className={`block h-0.5 w-full rounded-full bg-zinc-800 transition ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full rounded-full bg-zinc-800 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full rounded-full bg-zinc-800 transition ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};