import { Navbar } from "@/sections/Header/components/Navbar";

export const SiteHeader = () => {
  return (
    <>
      <Navbar />
      <div aria-hidden="true" className="h-[76px] md:h-[88px]" />
    </>
  );
};