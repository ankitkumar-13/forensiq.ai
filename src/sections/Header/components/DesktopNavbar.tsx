import brandLogo from "@/assets/branding/logo.png";

type NavItem = {
  label: string;
  href: string;
};

type DesktopNavbarProps = {
  items: NavItem[];
};

export const DesktopNavbar = ({ items }: DesktopNavbarProps) => {
  const hideCta = typeof window !== "undefined" && window.location.pathname === "/try-it-now";

  return (
    <div className="hidden items-center md:flex">
      <a
        href="/"
        className="flex shrink-0 items-center"
        aria-label="Go to top"
      >
        <img
          src={brandLogo}
          alt="Resistance AI"
          className="h-10 w-auto"
        />
      </a>
      <nav className="ml-7 flex items-center gap-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group inline-flex items-center gap-1 rounded-lg px-2 py-2 text-base font-semibold text-slate-700 transition hover:text-slate-900"
          >
            <span>{item.label}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-[18px] w-[18px] text-slate-500 transition group-hover:text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 7.5 10 12.5 15 7.5" />
            </svg>
          </a>
        ))}
      </nav>
      {!hideCta && (
        <div className="ml-auto pl-8">
          <a
            href="/try-it-now"
            className="inline-flex items-center justify-center rounded-xl bg-[#67E8C8] px-7 py-3 text-base font-semibold text-slate-900 shadow-[rgba(10,13,18,0.08)_0px_8px_20px_0px] transition hover:bg-[#5BDFC0]"
          >
            Try it now
          </a>
        </div>
      )}
    </div>
  );
};
