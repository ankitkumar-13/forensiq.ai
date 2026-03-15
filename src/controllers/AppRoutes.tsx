import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/views/pages/HomePage";
import { HowItWorksPage } from "@/views/pages/HowItWorksPage";
import { TryItNowPage } from "@/views/pages/TryItNowPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/try-it-now" element={<TryItNowPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
