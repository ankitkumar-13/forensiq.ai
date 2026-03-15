import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <div className="box-border caret-transparent break-words">
      <footer className="bg-slate-900 box-border caret-transparent break-words">
        <div className="box-border caret-transparent max-w-[1440px] break-words mx-auto">
          <div className="box-border caret-transparent break-words">
            <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
              <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                <div className="box-border caret-transparent break-words px-4 py-20 md:px-12">
                  <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full mx-auto md:flex-nowrap md:justify-between">
                    <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                      <div className="box-border caret-transparent break-words">
                        <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
                          <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                            <div className="box-border caret-transparent break-words">
                              <FooterContent />
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
        </div>
      </footer>
    </div>
  );
};