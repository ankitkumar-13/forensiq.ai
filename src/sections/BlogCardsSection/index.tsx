import { BlogCards } from "@/sections/BlogCardsSection/components/BlogCards";

export const BlogCardsSection = () => {
  return (
    <div className="box-border caret-transparent break-words px-4 py-12 md:px-12">
      <div className="box-border caret-transparent flex flex-wrap justify-normal max-w-[1440px] break-words w-full mx-auto md:flex-nowrap md:justify-between">
        <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
          <div className="box-border caret-transparent break-words">
            <div className="box-border caret-transparent flex flex-wrap justify-normal break-words w-full md:flex-nowrap md:justify-between">
              <div className="box-border caret-transparent min-h-px min-w-[auto] break-words w-full">
                <div className="box-border caret-transparent break-words">
                  <div className="items-center box-border caret-transparent flex flex-col break-words">
                    <BlogCards />
                    <a
                      href="https://resistant.ai/blog"
                      className="text-slate-600 font-semibold bg-white box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] break-words text-center w-full border border-slate-300 mt-8 px-[18px] py-3 rounded-lg border-solid md:w-fit md:mt-16 hover:bg-gray-50"
                    >
                      View all posts
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