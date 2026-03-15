export const DesktopHero = () => {
  return (
    <div className="static bg-repeat bg-auto box-border caret-transparent block flex-row h-auto justify-normal min-h-0 min-w-0 break-words z-[300] bg-left-top p-0 rounded-none md:relative md:bg-no-repeat md:bg-cover md:flex md:flex-col md:h-[684px] md:justify-between md:min-h-[auto] md:min-w-[auto] md:bg-center md:p-16 md:rounded-2xl">
      <img
        src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/docs_homepage_v3noblur-min.png"
        alt="Image with generic documents"
        className="absolute text-[9.328px] box-border caret-transparent hidden h-full leading-[13.0592px] object-cover break-words align-baseline w-full z-[-1] rounded-2xl inset-0 md:flex"
      />
      <div className="box-border caret-transparent min-h-0 min-w-0 break-words w-auto z-[300] md:min-h-[auto] md:min-w-[auto] md:w-[60%]">
        <h1 className="text-4xl font-semibold box-border caret-transparent tracking-[-0.72px] leading-[44px] break-words z-[300] mb-[22.4px] font-intervariable md:text-[56px] md:tracking-[-1.1px] md:leading-[64px] md:mb-8">
          <span className="text-gray-50 text-4xl box-border caret-transparent tracking-[-0.72px] leading-[44px] break-words z-[300] mb-0 md:text-[56px] md:tracking-[-1.1px] md:leading-[64px] md:mb-8">
            Check{" "}
            <span className="text-indigo-300 text-4xl box-border caret-transparent tracking-[-0.72px] leading-[44px] break-words z-[300] mb-0 md:text-[56px] md:tracking-[-1.1px] md:leading-[64px] md:mb-8">
              any document
            </span>
            , from any country, for fraud
          </span>
        </h1>
      </div>
      <div className="box-border caret-transparent gap-x-[normal] block flex-row min-h-0 min-w-0 break-words gap-y-[normal] z-[300] md:gap-x-8 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:gap-y-8">
        <div className="box-border caret-transparent min-h-0 min-w-0 break-words w-auto z-[300] md:min-h-[auto] md:min-w-[auto] md:w-[52%]">
          <span className="text-gray-50 text-lg box-border caret-transparent leading-7 break-words z-[300] md:text-[24px] md:leading-[34px]">
            Catch fake, tampered, or AI-generated documents in seconds with
            AI-powered document fraud detection
          </span>
        </div>
        <div className="box-border caret-transparent gap-x-3 flex flex-col min-h-0 min-w-0 break-words gap-y-3 z-[300] md:gap-x-2.5 md:flex-row md:min-h-[auto] md:min-w-[auto] md:gap-y-2.5">
          <a
            href="/try-it-now"
            className="font-semibold items-center bg-emerald-300 shadow-[rgba(10,13,18,0.05)_0px_1px_2px_0px] box-border caret-transparent gap-x-1.5 flex justify-center leading-6 min-h-0 min-w-0 break-words gap-y-1.5 w-full z-[300] border px-[18px] py-3 rounded-lg border-solid border-white/10 md:min-h-[auto] md:min-w-[auto] md:w-fit hover:bg-emerald-400"
          >
            Try it now
          </a>
          <a
            href="/how-it-works"
            className="text-slate-600 font-semibold items-center bg-white shadow-[rgba(10,13,18,0.05)_0px_1px_2px_0px] box-border caret-transparent gap-x-1.5 flex justify-center leading-6 min-h-0 min-w-0 break-words gap-y-1.5 w-full z-[300] border border-slate-300 px-[18px] py-3 rounded-lg border-solid md:min-h-[auto] md:min-w-[auto] md:w-fit hover:bg-gray-50"
          >
            How it works
          </a>
        </div>
      </div>
    </div>
  );
};
