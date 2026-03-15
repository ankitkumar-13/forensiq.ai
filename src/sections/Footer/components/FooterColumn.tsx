export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] break-words">
      <span className="text-blue-300 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] break-words mb-4">
        {props.title}
      </span>
      {props.links.map((link, index) => {
        const isLast = index === props.links.length - 1;
        const className = isLast
          ? "items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] break-words gap-y-2"
          : "items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] break-words gap-y-2 mb-3";

        return (
          <div key={index} className={className}>
            <a
              href={link.href}
              className="text-slate-400 font-semibold box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] break-words"
            >
              {link.text}
            </a>
          </div>
        );
      })}
    </div>
  );
};