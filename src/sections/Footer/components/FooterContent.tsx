import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col break-words">
      <FooterLogo />
      <FooterColumns />
      <FooterBottom />
    </div>
  );
};