export const VideoSection = () => {
  return (
    <div className="box-border caret-transparent break-words pt-9 pb-8 px-4 md:pb-12 md:px-12">
      <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] break-words w-full md:w-6/12">
          <h3 className="text-slate-800 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] min-h-[auto] min-w-[auto] break-words mb-8 font-intervariable md:text-4xl md:tracking-[-0.72px] md:leading-[44px] md:mb-16">
            See how it works
          </h3>
        </div>

        <div className="box-border caret-transparent break-words w-full">
          <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
            <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
              <div className="box-border caret-transparent break-words">
                <div className="box-border caret-transparent break-words w-full mx-0 rounded-2xl md:w-[70%] md:mx-auto">
                  <div className="box-border caret-transparent break-words">
                    <div className="box-border caret-transparent max-w-full break-words w-full">
                      <div className="relative box-border caret-transparent h-0 break-words pb-[56.25%]">
                        <iframe
                          title="HubSpot Video"
                          src="https://play.hubspotvideo.com/v/5669546/id/185705920315?parentOrigin=https%3A%2F%2Fresistant.ai&renderContext=hubl-iframe&locale=en#hsvid=4e9bb285-de9a-4914-9057-a900a74f0f54"
                          loading="lazy"
                          allowFullScreen
                          className="absolute box-border caret-transparent h-full break-words align-baseline w-full rounded-2xl left-0 top-0"
                        ></iframe>
                      </div>
                    </div>
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
