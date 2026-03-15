import { HeroSection } from "@/sections/HeroSection";
import { LogoCarousel } from "@/sections/LogoCarousel";
import { VideoSection } from "@/sections/VideoSection";
import { FeaturesSection } from "@/sections/FeatureSection";
import { UseCasesSection } from "@/sections/UseCasesSection";
import { TransactionsHeroSection } from "@/sections/TransactionsHeroSection";
import { TransactionsFeaturesSection } from "@/sections/TransactionsFeaturesSection";
import { TransactionsUseCasesSection } from "@/sections/TransactionsUseCasesSection";
import { DefenseSection } from "@/sections/DefenseSection";
import { ResourcesSection } from "@/sections/ResourceSection";
import { BlogCardsSection } from "@/sections/BlogCardsSection";
import { CTASection } from "@/sections/CTASection";

export const Main = () => {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>
      <section aria-label="Trusted by leading teams">
        <LogoCarousel />
      </section>
      <section id="products">
        <VideoSection />
        <FeaturesSection />
      </section>
      <section id="use-cases">
        <UseCasesSection />
      </section>
      <section id="transactions">
        <TransactionsHeroSection />
        <TransactionsFeaturesSection />
        <TransactionsUseCasesSection />
      </section>
      <section id="defense">
        <DefenseSection />
      </section>
      <section id="resources">
        <ResourcesSection />
      </section>
      <section id="blog">
        <BlogCardsSection />
      </section>
      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
};
