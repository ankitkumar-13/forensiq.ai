import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/sections/Footer";
import { Main } from "@/sections/Main";
import { SiteHeader } from "@/sections/SiteHeader";

export const HomePage = () => {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-white text-slate-900 font-inter"
    >
      <CookieBanner />
      <SiteHeader />
      <Main />
      <Footer />
    </div>
  );
};
