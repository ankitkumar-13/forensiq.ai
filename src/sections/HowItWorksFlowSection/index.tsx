import { useState } from "react";

import stepOnePreview from "@/assets/images/how-it-works/1.png";
import stepTwoPreview from "@/assets/images/how-it-works/2.png";
import stepThreePreview from "@/assets/images/how-it-works/3.png";
import stepFourPreview from "@/assets/media/4.gif";

type FlowStep = {
  title: string;
  subtitle: string;
  duration: string;
  media: string;
};

const flowSteps: FlowStep[] = [
  {
    title: "Quality",
    subtitle: "Is the document readable?",
    duration: "less than 3 seconds",
    media: stepOnePreview,
  },
  {
    title: "Class",
    subtitle: "Is this the right kind of document?",
    duration: "less than 4 seconds",
    media: stepTwoPreview,
  },
  {
    title: "Trust",
    subtitle: "Is the document authentic or fraudulent?",
    duration: "less than 20 seconds",
    media: stepThreePreview,
  },
  {
    title: "Decide",
    subtitle: "Does the document meet your specific risk and compliance policies for approval, rejection or escalation?",
    duration: "less than 20 seconds",
    media: stepFourPreview,
  },
];

export const HowItWorksFlowSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[420px_1fr] items-stretch gap-20 px-10 max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:px-6">
        <div className="relative flex flex-col gap-8 pl-8">
          <div className="absolute bottom-1 left-0 top-1 w-1 rounded-full bg-[#c7dcff]" aria-hidden="true" />
          {flowSteps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative text-left"
              >
                <span
                  className={`absolute -left-[38px] top-3 h-3 w-3 rounded-full border-2 ${
                    isActive
                      ? "border-[#3b82f6] bg-[#3b82f6]"
                      : "border-[#b8cff9] bg-white"
                  }`}
                  aria-hidden="true"
                />
                <h3
                  className={`mb-[6px] text-[28px] font-bold leading-tight ${
                    isActive ? "text-[#1f2937]" : "text-[#374151]"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mb-[10px] text-[16px] leading-7 text-[#6b7280]">
                  {step.subtitle}
                </p>
                <span className="inline-block rounded-full bg-[#eef2ff] px-3 py-1.5 text-[14px] font-medium text-[#3b82f6]">
                  {step.duration}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex h-full min-h-[420px] items-center justify-center rounded-[20px] bg-[#060b2f] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-[900px]:min-h-[320px] max-[900px]:p-4">
          <img
            src={flowSteps[activeIndex].media}
            alt={`${flowSteps[activeIndex].title} preview`}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
