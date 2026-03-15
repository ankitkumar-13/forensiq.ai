import { SiteHeader } from "@/sections/SiteHeader";
import { TryItNow } from "@/sections/TryItNow";

export const TryItNowPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070833] text-slate-100 font-inter">
      <SiteHeader />
      <TryItNow />
    </div>
  );
};
