import { useState } from "react";

import { CleanMobileMenu } from "@/sections/Header/components/CleanMobileMenu";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";
import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Customers", href: "#blog" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#contact" },
];

export const NavbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1920px] px-5 py-4 md:px-5 md:py-5">
      <MobileNavbar
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((open) => !open)}
      />
      <CleanMobileMenu
        isOpen={isMenuOpen}
        items={navItems}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <DesktopNavbar items={navItems} />
    </div>
  );
};