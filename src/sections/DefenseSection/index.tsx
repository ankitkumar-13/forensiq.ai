export const DefenseSection = () => {
  return (
    <div className="bg-[linear-gradient(rgb(255,255,255),rgb(243,245,247))] bg-no-repeat box-border caret-transparent break-words px-4 py-20 md:px-12 md:py-[200px]">
      <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full mx-auto md:flex-nowrap md:justify-between">
        <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
          <div className="box-border caret-transparent break-words">
            <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
              <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                <div className="box-border caret-transparent break-words">
                  <div className="items-start box-border caret-transparent flex flex-col break-words text-start w-auto mx-0 md:items-center md:text-center md:w-6/12 md:mx-auto">
                    <img
                      src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-70.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-9 text-start align-baseline w-9 mb-6 md:text-center md:mb-8"
                    />
                    <h2 className="text-slate-800 text-4xl font-semibold box-border caret-transparent tracking-[-0.72px] leading-[44px] min-h-[auto] min-w-[auto] break-words text-start mb-4 font-intervariable md:text-6xl md:tracking-[-1.2px] md:leading-[72px] md:text-center md:mb-6">
                      Connecting the dots to outsmart criminals
                    </h2>
                    <p className="text-slate-600 text-lg box-border caret-transparent tracking-[normal] leading-[25.2px] min-h-[auto] min-w-[auto] break-words text-start mb-4 md:text-3xl md:tracking-[-0.6px] md:leading-[38px] md:text-center md:mb-6">
                      Combine documents, transactions, behaviors, and
                      identities for unparalleled fraud and fincrime prevention
                    </p>
                    <a
                      href="https://resistant.ai/products/defense-in-depth"
                      className="text-slate-600 font-semibold bg-white box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] break-words text-start w-fit border border-slate-300 px-[18px] py-3 rounded-lg border-solid md:text-center hover:bg-gray-50"
                    >
                      Defense in depth
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
