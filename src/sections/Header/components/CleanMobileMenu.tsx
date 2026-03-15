type NavItem = {
  label: string;
  href: string;
};

type CleanMobileMenuProps = {
  isOpen: boolean;
  items: NavItem[];
  onNavigate: () => void;
};

export const CleanMobileMenu = ({
  isOpen,
  items,
  onNavigate,
}: CleanMobileMenuProps) => {
  const hideCta = typeof window !== "undefined" && window.location.pathname === "/try-it-now";

  if (!isOpen) {
    return null;
  }

  return (
    <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </a>
        ))}
        {!hideCta && (
          <a
            href="/try-it-now"
            onClick={onNavigate}
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-emerald-300 px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            Try it now
          </a>
        )}
      </nav>
    </div>
  );
};