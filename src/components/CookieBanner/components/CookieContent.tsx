import { CookieMessage } from "@/components/CookieBanner/components/CookieMessage";
import { CookieActions } from "@/components/CookieBanner/components/CookieActions";

type CookieContentProps = {
  onDismiss: () => void;
};

export const CookieContent = ({ onDismiss }: CookieContentProps) => {
  return (
    <div className="bg-zinc-50 box-border caret-transparent gap-x-3.5 flex flex-col break-words gap-y-3.5 border border-slate-300 px-3 py-4 rounded-2xl border-solid md:p-8">
      <div className="flex justify-end">
        <button
          aria-label="Dismiss cookie banner"
          type="button"
          onClick={onDismiss}
          className="rounded-md p-1 text-center"
        >
          <img
            src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/icon-1.svg"
            alt="Icon"
            className="text-blue-950 box-border caret-transparent inline h-3.5 align-baseline w-3.5"
          />
        </button>
      </div>
      <CookieMessage />
      <CookieActions onAccept={onDismiss} />
    </div>
  );
};
