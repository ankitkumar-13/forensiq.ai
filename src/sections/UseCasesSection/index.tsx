import { UseCasesContent } from "@/sections/UseCasesSection/components/UseCasesContent";

export const UseCasesSection = () => {
  return (
    <div className="box-border caret-transparent break-words pt-6 pb-8 px-4 md:pt-8 md:pb-[98px] md:px-12">
      <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full mx-auto md:flex-nowrap md:justify-between">
        <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
          <div className="box-border caret-transparent break-words">
            <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
              <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                <div className="box-border caret-transparent break-words">
                  <UseCasesContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};