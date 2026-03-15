import { useState } from "react";
import raiCrossIcon from "@/assets/branding/rai-cross.svg";
import docsGif from "@/assets/media/docs-gif.gif";
import gifSectionTwo from "@/assets/media/gifsection-2.webp";
import gifSectionThree from "@/assets/media/gif-section-3.webp";

export const HowItWorksVideoSection = () => {
  const mediaItems = [
    {
      title: "Common editing techniques",
      description:
        "Most fraud in digital documents is invisible to the naked eye. Surface the tell-tale signs of tampering left by online editors and even attempts to hide modifications.",
      src: docsGif,
      alt: "Common editing techniques preview",
    },
    {
      title: "Reused & template-farmed documents",
      description:
        "Duplicating a digital document is child's play. Purchasing a ready-made fraud template online is even easier. But detecting them without AI is all but impossible.",
      src: gifSectionTwo,
      alt: "Reused and template-farmed documents preview",
    },
    {
      title: "AI-Generated document fraud",
      description:
        "Prompting a high-quality fake takes seconds and now 1.5B users can do it. Detect textures, structural patterns, and other anomalies left by the latest image generators.",
      src: gifSectionThree,
      alt: "AI-generated document fraud preview",
    },
  ];

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const projectInfoCards = [
    {
      icon: "globe",
      title: "Any document. Any language. Total privacy",
      description:
        "forensiq.ai is document and language agnostic. It does not need to read private customer content to detect fraud. It evaluates structure, layers, and modification traces while preserving privacy.",
    },
    {
      icon: "scales",
      title: "Explainable verdicts, not black-box scores",
      description:
        "Move from vague percentages to clear outcomes like Trusted, Warning, and High Risk. Every decision is backed by explainable evidence so teams can review, trust, and act faster.",
    },
    {
      icon: "sliders",
      title: "Decisioning that matches your risk appetite",
      description:
        "Customize fraud thresholds for business lines, geographies, and document types. Tune the model behavior to your own risk profile and compliance needs without rebuilding workflows.",
    },
    {
      icon: "chart",
      title: "Behavior signals that enrich detection",
      description:
        "Combine document analysis with behavior and device signals for better outcomes. Detect high-risk patterns earlier and improve fraud catch rate without increasing manual review load.",
    },
  ];

  const renderCardIcon = (icon: string) => {
    if (icon === "globe") {
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    }

    if (icon === "scales") {
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v18" />
          <path d="M7 6h10" />
          <path d="M5 10l-3 5h6l-3-5Z" />
          <path d="M19 10l-3 5h6l-3-5Z" />
        </svg>
      );
    }

    if (icon === "sliders") {
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6h16" />
          <circle cx="9" cy="6" r="2" />
          <path d="M4 12h16" />
          <circle cx="15" cy="12" r="2" />
          <path d="M4 18h16" />
          <circle cx="11" cy="18" r="2" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-4" />
      </svg>
    );
  };

  return (
    <section className="bg-[#0b0a2c] pb-16 pt-10 text-white md:pb-20 md:pt-12">
      <div className="mx-auto w-full max-w-none px-4 md:px-12">
        <div className="rounded-2xl bg-[#0d0c30]">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-white/5 md:grid-cols-[1.15fr_1fr] md:items-stretch">
            <div className="bg-[#24264f] px-7 py-10 md:px-10 md:py-12">
              <img
                src={raiCrossIcon}
                alt="Cross"
                className="mb-8 h-8 w-8 md:h-10 md:w-10"
              />
              <h3 className="max-w-[460px] text-[26px] font-semibold leading-[1.2] tracking-[-0.5px] md:text-[40px] md:tracking-[-0.9px]">
                Your bionic eyes to detect tampered and fraudulent documents
              </h3>
            </div>

            <div className="relative bg-[#0b0a2c] p-5 md:p-6">
              <div className="h-full overflow-hidden rounded-2xl border border-white/10">
                <div className="relative h-[240px] md:h-full md:min-h-[300px]">
                  <iframe
                    title="HubSpot Video"
                    src="https://play.hubspotvideo.com/v/5669546/id/185705920315?parentOrigin=https%3A%2F%2Fresistant.ai&renderContext=hubl-iframe&locale=en#hsvid=4e9bb285-de9a-4914-9057-a900a74f0f54"
                    loading="lazy"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#7a9fea]/30 bg-[linear-gradient(140deg,rgba(122,159,234,0.12),rgba(11,10,44,0.75)_40%)] p-6 shadow-[0_16px_48px_rgba(7,12,68,0.35)] md:mt-14 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-[860px] text-[34px] font-semibold leading-[1.1] tracking-[-0.7px] text-slate-100 md:text-[46px] md:tracking-[-1px]">
                Detect the most sophisticated <span className="text-[#7a9fea]">document fraud typologies</span>
              </h2>
              <p className="mt-5 max-w-[860px] text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                1 in 4 financial documents is tampered with, and 1 in 50 are reused or AI-generated. Resistant Documents checks every document over 500 ways, and constantly learns to detect fake bank statements, utility bills, tax forms, articles of incorporations, invoices, and more.
              </p>
            </div>
            <a
              href="https://resistant.ai/products/documents"
              className="justify-self-end rounded-md border border-[#7a9fea]/70 bg-[#7a9fea]/10 px-4 py-2 text-xs font-semibold text-[#b7cbfb] transition hover:bg-[#7a9fea]/20 md:mb-2 md:text-sm"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl bg-[#080737]">
          <div className="overflow-hidden rounded-none border border-white/10 bg-[#dfe3ee]">
            <img
              src={mediaItems[activeMediaIndex].src}
              alt={mediaItems[activeMediaIndex].alt}
              className="block h-auto w-full"
            />
          </div>

          <div className="px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-[#4f8cff] transition-all duration-300"
              style={{ width: `${((activeMediaIndex + 1) / mediaItems.length) * 100}%` }}
            />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
              {mediaItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  className={`text-left transition ${
                    activeMediaIndex === index ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <h3 className="text-xl font-semibold leading-tight text-slate-100 md:text-[28px] md:leading-[36px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16 md:mt-20">
          <div className="mx-auto max-w-[1520px] grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-4">
            {projectInfoCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-[#7a9fea]/22 bg-[#f4f6fc] p-4 text-slate-800 shadow-[0_14px_34px_rgba(4,7,56,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(4,7,56,0.26)] md:p-5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(122,159,234,0.85),rgba(122,159,234,0.25))]" />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a9fea] text-white shadow-[0_8px_18px_rgba(122,159,234,0.35)]">
                  {renderCardIcon(card.icon)}
                </div>
                <h3 className="text-[21px] font-semibold leading-[1.24] tracking-[-0.2px] text-slate-800 md:text-[23px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-slate-700 md:text-[16px] md:leading-7">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
