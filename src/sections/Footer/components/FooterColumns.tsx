import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterColumns = () => {
  const columns = [
    {
      title: "Product",
      links: [
        { href: "https://resistant.ai/products/", text: "For Documents" },
        {
          href: "https://resistant.ai/products/transactions/",
          text: "For Transactions",
        },
        { href: "https://resistant.ai/technology/", text: "Technology" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { href: "https://resistant.ai/use-case/kyb/", text: "KYC and KYB" },
        {
          href: "https://resistant.ai/use-case/loan-underwriting/",
          text: "Loan Underwriting",
        },
        {
          href: "https://resistant.ai/use-case/insurance-fraud",
          text: "Insurance Fraud",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "https://resistant.ai/about/", text: "About" },
        { href: "https://resistant.ai/career/", text: "Careers" },
        { href: "https://resistant.ai/partners/", text: "Partners" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "https://resistant.ai/blog", text: "Blog" },
        {
          href: "https://documents.resistant.ai/docs/v2.html",
          text: "Documentation",
        },
        { href: "https://trust.resistant.ai/", text: "Trust Center" },
      ],
    },
  ];

  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(2,1fr)] justify-between min-h-[auto] min-w-[auto] break-words gap-y-8 mb-16 md:gap-x-[normal] md:flex md:grid-cols-none md:gap-y-[normal]">
      {columns.map((column) => (
        <FooterColumn
          key={column.title}
          title={column.title}
          links={[...column.links]}
        />
      ))}
    </div>
  );
};
