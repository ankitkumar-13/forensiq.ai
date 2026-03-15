import { useState } from "react";

export const CTAForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      // Simulate a request while backend is out of scope.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box-border caret-transparent gap-x-[normal] flex basis-auto flex-col break-words gap-y-6 w-full rounded-none bg-slate-50 px-4 pt-12 pb-16 md:gap-x-10 md:basis-[0%] md:grow-[2] md:gap-y-10 md:w-[auto] md:rounded-[13px] md:px-16 md:pt-16 md:pb-16">
      <h3 className="text-slate-800 text-3xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[38px] break-words mb-6 md:text-4xl md:tracking-[-0.72px] md:leading-[44px] md:mb-10">
        Get started today
      </h3>

      <form className="box-border caret-transparent break-words" onSubmit={onSubmit}>
        <div className="box-border caret-transparent break-words mb-6 md:mb-8">
          <label
            htmlFor="business-email"
            className="text-slate-600 text-sm font-semibold box-border caret-transparent block leading-5 break-words mb-1.5"
          >
            Business email
          </label>
          <input
            id="business-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            className="text-slate-700 text-base font-normal box-border caret-transparent block leading-6 break-words w-full border border-slate-300 px-[13px] py-[11px] rounded-lg border-solid focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error ? (
            <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
          ) : null}
          {success ? (
            <p className="mt-2 text-sm font-medium text-emerald-600">
              Thanks! We will reach out shortly.
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="text-white text-base font-semibold items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-6 break-words bg-slate-800 px-4 py-3 rounded-xl hover:bg-slate-900 transition-colors disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="box-border caret-transparent break-words border-t border-slate-300 pt-5 md:pt-7">
        <span className="text-slate-600 text-sm box-border caret-transparent block leading-5 break-words mb-4 md:mb-6">
          200+ clients trust Resistant AI with:
        </span>
        <img
          src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/logos_mobile_1.png"
          alt="logos_mobile_1"
          className="text-[9.328px] box-border caret-transparent h-auto hidden leading-[13.0592px] break-words align-baseline w-full md:inline"
        />
        <img
          src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/logos_mobile_2.svg"
          alt="logos_mobile_2"
          className="text-[9.328px] box-border caret-transparent h-auto inline leading-[13.0592px] break-words align-baseline w-full md:hidden"
        />
      </div>
    </div>
  );
};
