import { LogoCarouselContent } from "@/sections/LogoCarousel/components/LogoCarouselContent";

export const LogoCarousel = () => {
  return (
    <div className="box-border caret-transparent break-words px-4 py-10 md:px-12 md:py-20">
      <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full mx-auto md:flex-nowrap md:justify-between">
        <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
          <div className="box-border caret-transparent break-words">
            <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
              <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                <div className="box-border caret-transparent break-words">
                  <LogoCarouselContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};