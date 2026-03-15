export const FooterLogo = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] break-words mb-12 md:flex-row md:justify-between md:mb-16">
      <a
        href="https://resistant.ai/"
        className="text-sky-600 box-border caret-transparent block min-h-[auto] min-w-[auto] break-words mb-6 md:mb-0 hover:text-blue-800 hover:border-blue-800"
      >
        <img
          src="https://c.animaapp.com/mmqcax2eqJVJhb/assets/logo_footer.svg"
          alt="logo"
          className="box-border caret-transparent h-8 align-baseline"
        />
      </a>
    </div>
  );
};