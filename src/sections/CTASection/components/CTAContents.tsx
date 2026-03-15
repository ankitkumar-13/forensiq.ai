import { CTAForm } from "@/sections/CTASection/components/CTAForm";

export const CTAContent = () => {
  return (
    <div className="bg-slate-900 box-border caret-transparent flex flex-col break-words rounded-none md:flex-row md:rounded-2xl">
      <div className="box-border caret-transparent gap-x-[normal] flex basis-auto flex-col grow-0 justify-between min-h-[auto] min-w-[auto] break-words gap-y-[normal] px-4 py-16 md:gap-x-16 md:basis-[0%] md:grow-[2] md:gap-y-16 md:px-16">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] break-words">
          <h2 className="text-white text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] break-words mb-8 font-intervariable md:text-5xl md:tracking-[-0.96px] md:leading-[60px]">
            Verify any document for fraud
          </h2>
          <div className="box-border caret-transparent gap-x-4 flex flex-col break-words gap-y-4 mb-12 pl-0 md:mb-0 md:pl-4">
            <span className="text-slate-300 text-base box-border caret-transparent gap-x-3 flex leading-6 min-h-[auto] min-w-[auto] break-words gap-y-3 md:text-lg md:leading-7">
              <img
                src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-71.svg"
                alt="Icon"
                className="text-base box-border caret-transparent shrink-0 h-7 leading-6 align-baseline w-7 md:text-lg md:leading-7"
              />
              3x more fraud detected
            </span>
            <span className="text-slate-300 text-base box-border caret-transparent gap-x-3 flex leading-6 min-h-[auto] min-w-[auto] break-words gap-y-3 md:text-lg md:leading-7">
              <img
                src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-71.svg"
                alt="Icon"
                className="text-base box-border caret-transparent shrink-0 h-7 leading-6 align-baseline w-7 md:text-lg md:leading-7"
              />
              90% cut in manual reviews
            </span>
            <span className="text-slate-300 text-base box-border caret-transparent gap-x-3 flex leading-6 min-h-[auto] min-w-[auto] break-words gap-y-3 md:text-lg md:leading-7">
              <img
                src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-71.svg"
                alt="Icon"
                className="text-base box-border caret-transparent shrink-0 h-7 leading-6 align-baseline w-7 md:text-lg md:leading-7"
              />
              Thousands saved in seconds
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[normal] hidden flex-row min-h-0 min-w-0 break-words gap-y-[normal] md:gap-x-6 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:gap-y-6">
          <span className="text-slate-900 text-base font-normal box-border caret-transparent inline leading-[22.4px] min-h-0 min-w-0 break-words md:text-white md:text-xl md:font-medium md:block md:leading-[30px] md:min-h-[auto] md:min-w-[auto]">
            “Resistant Al&#39;s can do approach and passion is not something you
            often see from vendors—let alone after the sale.”
          </span>
          <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block flex-row min-h-0 min-w-0 break-words gap-y-[normal] md:items-start md:gap-x-0 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:gap-y-0">
            <span className="text-slate-900 text-base font-normal box-border caret-transparent inline leading-[22.4px] min-h-0 min-w-0 break-words md:text-zinc-200 md:text-sm md:font-semibold md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
              Aharon Weissman
            </span>
            <span className="text-slate-900 text-base box-border caret-transparent inline leading-[22.4px] min-h-0 min-w-0 break-words md:text-slate-400 md:text-sm md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
              Senior Product Manager at Payoneer
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] break-words">
          <span className="text-slate-900 text-base font-normal box-border caret-transparent hidden leading-[22.4px] break-words mb-0 md:text-white md:text-xl md:font-semibold md:flex md:leading-[30px] md:mb-4">
            Clients
          </span>
          <img
            src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/customers_logos_v1.svg"
            alt="customers_logos_v1"
            className="text-[9.328px] box-border caret-transparent hidden leading-[13.0592px] max-h-20 object-contain break-words align-baseline w-full mx-auto md:flex"
          />
          <div className="box-border caret-transparent flex flex-col justify-center break-words md:hidden">
            <span className="text-slate-400 text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] break-words text-center mb-4 md:min-h-0 md:min-w-0">
              Clients
            </span>
            <img
              src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/logos_mobile.png"
              alt="logos_mobile"
              className="text-[9.328px] box-border caret-transparent block leading-[13.0592px] max-h-20 min-h-[auto] min-w-[auto] object-contain break-words align-baseline w-full mx-auto md:inline md:min-h-0 md:min-w-0"
            />
          </div>
        </div>
      </div>
      <CTAForm />
    </div>
  );
};
