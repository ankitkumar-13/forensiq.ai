type CookieActionsProps = {
  onAccept: () => void;
};

export const CookieActions = ({ onAccept }: CookieActionsProps) => {
  return (
    <div className="items-baseline box-border caret-transparent flex flex-wrap justify-end min-h-[auto] min-w-[auto] break-words">
      <div className="box-border caret-transparent gap-x-[7px] flex flex-wrap justify-center min-h-[auto] min-w-[auto] break-words gap-y-[7px]">
        <div className="box-border caret-transparent gap-x-[7px] flex grow flex-wrap justify-center min-h-[auto] min-w-[auto] break-words gap-y-[7px]">
          <button
            aria-label="Got it"
            type="button"
            onClick={onAccept}
            className="text-slate-900 text-xs font-bold bg-emerald-300 shadow-[rgba(10,13,18,0.05)_0px_1px_2px_0px] caret-transparent block basis-[0%] grow h-[39.6px] tracking-[-0.16px] leading-[21px] min-h-[auto] min-w-[132px] break-words text-center border px-5 py-[9px] rounded-2xl border-white/10 font-inter md:h-[60px]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};