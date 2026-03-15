import raiCrossIcon from "@/assets/branding/rai-cross.svg";

export const HowItWorksCtaSection = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-[1360px] rounded-3xl bg-[#050744] px-6 py-7 text-white md:px-10 md:py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[860px]">
            <div className="flex items-center gap-4 md:gap-6">
              <img
                src={raiCrossIcon}
                alt="Cross"
                className="h-9 w-9 md:h-10 md:w-10"
              />
              <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.5px] md:text-[42px] md:tracking-[-0.9px]">
                Start detecting fraud in your documents
              </h2>
            </div>

            <p className="mt-6 text-[18px] leading-[1.45] text-slate-300 md:mt-7 md:text-[24px] md:leading-[1.4]">
              150M+ documents already checked.
              <br />
              Join the secure few. Try it now to talk to an expert today.
            </p>
          </div>

          <a
            href="/try-it-now"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#67e8c8] px-5 py-2.5 text-base font-semibold text-slate-900 transition hover:bg-[#5edcbd] md:px-6 md:py-3 md:text-lg"
          >
            Try it now
          </a>
        </div>
      </div>
    </section>
  );
};
