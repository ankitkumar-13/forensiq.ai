import { HowItWorksCtaSection } from "@/sections/HowItWorksCtaSection";
import { HowItWorksFlowSection } from "@/sections/HowItWorksFlowSection";
import { HowItWorksVideoSection } from "@/sections/HowItWorksVideoSection";

export const MainHowItWorks = () => {
  return (
    <main className="min-h-screen bg-[#0b0a2c]">
      <section className="px-0 pt-[92px] md:pt-[108px]">
        <div className="mx-auto w-full max-w-none overflow-hidden rounded-3xl bg-[#0b0a2c]">
          <div className="relative px-6 pb-10 pt-10 md:px-12 md:pb-12 md:pt-12">
            <img
              src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/docs_homepage_v3noblur-min.png"
              alt="Document fraud visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b0a2c]/55" />

            <div className="relative z-10 max-w-[620px]">
              <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.8px] text-slate-100 md:text-[50px] md:tracking-[-1.1px]">
                Detect fraud in <span className="text-indigo-300">any document</span> from any country
              </h1>
              <p className="mt-5 max-w-[600px] text-base leading-7 text-slate-200 md:mt-6 md:text-lg md:leading-8">
                Stop fake, fraudulent, and AI-generated PDF or image documents in seconds with AI-powered document fraud detection trained on over 150 million documents.
              </p>
              <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:gap-4">
                <a
                  href="/try-it-now"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-400"
                >
                  Try it now
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 border-t border-white/20 pt-6 text-slate-200 md:mt-12 md:grid-cols-4 md:gap-6 md:pt-8">
              <div>
                <p className="text-3xl font-semibold leading-none md:text-4xl">3x</p>
                <p className="mt-2 text-sm md:text-base">More fraud detected</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none md:text-4xl">&gt;90%</p>
                <p className="mt-2 text-sm md:text-base">Fewer manual reviews</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none md:text-4xl">5x</p>
                <p className="mt-2 text-sm md:text-base">Review speed</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none md:text-4xl">&lt;20 sec</p>
                <p className="mt-2 text-sm md:text-base">Per document</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#0b0a2c]">
        <HowItWorksVideoSection />
      </section>

      <section className="bg-white">
        <HowItWorksFlowSection />
        <HowItWorksCtaSection />
      </section>
    </main>
  );
};
