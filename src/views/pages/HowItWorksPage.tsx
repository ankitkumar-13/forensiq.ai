import { MainHowItWorks } from "@/sections/MainHowItWorks";
import { SiteHeader } from "@/sections/SiteHeader";

export const HowItWorksPage = () => {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#0b0a2c] text-slate-100 font-inter"
    >
      <SiteHeader />
      <MainHowItWorks />
    </div>
  );
};
