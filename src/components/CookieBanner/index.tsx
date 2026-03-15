import { useEffect, useState } from "react";

import { CookieContent } from "@/components/CookieBanner/components/CookieContent";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem("cookie-banner-dismissed") !== "true");
  }, []);

  const handleDismiss = () => {
    window.localStorage.setItem("cookie-banner-dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[2147483647] px-4 md:bottom-8">
      <div
        role="dialog"
        aria-label="Cookie banner"
        className="pointer-events-auto mx-auto max-h-[calc(100vh_-_32px)] w-full max-w-[938px] overflow-auto rounded-2xl bg-white text-sm leading-[24.5px] text-blue-950 shadow-2xl"
      >
        <CookieContent onDismiss={handleDismiss} />
      </div>
    </div>
  );
};