import { NavbarContainer } from "@/sections/Header/components/NavbarContainer";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] box-border break-words border-b border-slate-200/45 bg-[#E7E8F0]/65 shadow-[0px_8px_24px_rgba(15,23,42,0.1)] backdrop-blur-sm">
      <div className="box-border caret-transparent break-words">
        <NavbarContainer />
      </div>
    </header>
  );
};