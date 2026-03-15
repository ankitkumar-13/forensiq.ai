import { DesktopHero } from "@/sections/HeroSection/components/DesktopHero";

export const HeroContent = () => {
  return (
    <div className="bg-no-repeat bg-cover box-border caret-transparent gap-x-8 hidden flex-col break-words gap-y-8 bg-center md:gap-x-24 md:flex md:gap-y-24">
      <DesktopHero />
      <div className="relative bg-no-repeat bg-cover box-border caret-transparent gap-x-[normal] block h-[500px] min-h-0 min-w-0 break-words gap-y-[normal] z-[300] bg-center px-6 py-8 rounded-2xl md:gap-x-8 md:flex md:h-fit md:min-h-[auto] md:min-w-[auto] md:gap-y-8 md:p-0 md:rounded-none">
        <div className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-zinc-200 box-border caret-transparent flex flex-col justify-start min-h-0 min-w-0 break-words w-auto z-[2] pl-0 py-4 border-l-0 border-t md:border-l-slate-600 md:border-t-slate-900 md:min-h-[auto] md:min-w-[auto] md:w-3/12 md:pl-6 md:py-0 md:border-l-2 md:border-t-0">
          <div className="text-zinc-200 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-5xl md:tracking-[-0.96px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
            3x
          </div>
          <div className="text-zinc-200 text-sm font-semibold box-border caret-transparent leading-5 min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-lg md:font-normal md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            More fraud detected
          </div>
        </div>
        <div className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-zinc-200 box-border caret-transparent flex flex-col justify-start min-h-0 min-w-0 break-words w-auto z-[2] pl-0 py-4 border-l-0 border-t md:border-l-slate-600 md:border-t-slate-900 md:min-h-[auto] md:min-w-[auto] md:w-3/12 md:pl-6 md:py-0 md:border-l-2 md:border-t-0">
          <div className="text-zinc-200 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-5xl md:tracking-[-0.96px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
            &gt;90%
          </div>
          <div className="text-zinc-200 text-sm font-semibold box-border caret-transparent leading-5 min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-lg md:font-normal md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            Fewer manual reviews
          </div>
        </div>
        <div className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-zinc-200 box-border caret-transparent flex flex-col justify-start min-h-0 min-w-0 break-words w-auto z-[2] pl-0 py-4 border-l-0 border-t md:border-l-slate-600 md:border-t-slate-900 md:min-h-[auto] md:min-w-[auto] md:w-3/12 md:pl-6 md:py-0 md:border-l-2 md:border-t-0">
          <div className="text-zinc-200 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-5xl md:tracking-[-0.96px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
            5x
          </div>
          <div className="text-zinc-200 text-sm font-semibold box-border caret-transparent leading-5 min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-lg md:font-normal md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            Review speed
          </div>
        </div>
        <div className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-zinc-200 box-border caret-transparent flex flex-col justify-start min-h-0 min-w-0 break-words w-auto z-[2] pl-0 py-4 border-l-0 border-t md:border-l-slate-600 md:border-t-slate-900 md:min-h-[auto] md:min-w-[auto] md:w-3/12 md:pl-6 md:py-0 md:border-l-2 md:border-t-0">
          <div className="text-zinc-200 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-5xl md:tracking-[-0.96px] md:leading-[60px] md:min-h-[auto] md:min-w-[auto]">
            &lt;20
          </div>
          <div className="text-zinc-200 text-sm font-semibold box-border caret-transparent leading-5 min-h-0 min-w-0 break-words z-[300] md:text-slate-600 md:text-lg md:font-normal md:leading-7 md:min-h-[auto] md:min-w-[auto]">
            Seconds per document
          </div>
        </div>
      </div>
    </div>
  );
};
