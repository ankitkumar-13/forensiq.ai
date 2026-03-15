type NavItem = {
  label: string;
  href: string;
};
          href="/try-it-now"
type MobileMenuProps = {
  isOpen: boolean;
  items: NavItem[];
  onNavigate: () => void;
};

export const MobileMenu = ({
  isOpen,
  items,
  onNavigate,
}: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onNavigate}
          className="mt-2 inline-flex items-center justify-center rounded-2xl bg-emerald-300 px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-400"
        >
          Try it now
        </a>
      </nav>
    </div>
  );
};
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-15.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Event insights
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/roi-calculator"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-16.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  ROI Calculator
                </span>
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-[26px] flex flex-col break-words gap-y-[26px] px-4 py-3">
            <span className="text-blue-400 text-sm font-semibold box-border caret-transparent block leading-5 break-words">
              Support
            </span>
            <a
              href="https://trust.resistant.ai/"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-17.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Trust Center
                </span>
              </div>
            </a>
            <a
              href="https://documents.resistant.ai/docs/v2.html"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-18.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Documents API
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-col break-words">
        <div className="items-center box-border caret-transparent flex justify-between break-words w-full px-4 py-3">
          <span className="box-border caret-transparent block break-words">
            Company
          </span>
          <img
            src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 align-baseline w-4"
          />
        </div>
        <div className="box-border caret-transparent hidden break-words w-full">
          <div className="box-border caret-transparent gap-x-[26px] flex flex-col break-words gap-y-[26px] px-4 py-3">
            <a
              href="https://resistant.ai/about/"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-19.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  About us
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/blog"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-20.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Blog
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/blog/tag/threat-intelligence"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-21.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Threat Intel
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/blog/tag/industry-insights"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-22.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Industry insights
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/partners/"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-23.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Partners
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/career/"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-24.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Careers
                </span>
              </div>
            </a>
            <a
              href="https://resistant.ai/blog/tag/press-releases"
              className="text-sky-600 box-border caret-transparent gap-x-3 flex break-words gap-y-3 w-full hover:text-blue-800 hover:border-blue-800"
            >
              <div className="box-border caret-transparent h-5 break-words w-5">
                <span className="box-border caret-transparent break-words">
                  <img
                    src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-25.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 align-baseline w-5"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-3 flex flex-col break-words gap-y-3">
                <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words">
                  Press releases
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 box-border caret-transparent flex flex-col break-words pt-8 pb-6 px-4">
        <img
          src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/2026_02_WEBINAR_Document_Fraud.webp"
          alt="What 170M+ Documents Reveal About Professional vs. Amateur Attacks"
          className="text-[9.328px] box-border caret-transparent leading-[13.0592px] max-w-[75%] break-words align-baseline"
        />
        <span className="text-slate-800 font-semibold box-border caret-transparent block leading-6 break-words mt-4">
          Join us on February 18th
        </span>
        <a
          href="https://resistant.ai/news/the-state-of-document-fraud-2026-what-170m-documents-reveal-about-professional-vs.-amateur-attacks"
          className="text-blue-400 items-center box-border caret-transparent gap-x-1 flex break-words gap-y-1 mt-3 hover:text-blue-800 hover:border-blue-800"
        >
          <div className="box-border caret-transparent break-words">
            <span className="box-border caret-transparent break-words">
              <img
                src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-26.svg"
                alt="Icon"
                className="box-border caret-transparent inline h-5 align-baseline w-5"
              />
            </span>
          </div>
          Join for free
        </a>
      </div>
      <div className="box-border caret-transparent break-words py-6">
        <a
          href="https://resistant.ai/contact"
          className="font-semibold items-center bg-emerald-300 shadow-[rgba(10,13,18,0.05)_0px_1px_2px_0px] box-border caret-transparent flex h-fit justify-center leading-6 break-words text-center w-full border px-4 py-2.5 rounded-lg border-solid border-white/10 hover:bg-emerald-400"
        >
          Try it now
        </a>
      </div>
    </div>
  );
};
