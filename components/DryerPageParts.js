import Link from "next/link";

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
    <path d="M5 12.5L9.2 16.5L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
    <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const QuoteButton = ({ dark = false, label = "Request a Quotation" }) => (
  <Link
    href="/contact"
    className={`inline-flex items-center gap-3 mt-8 px-6 py-3.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
      dark
        ? "bg-green-500 hover:bg-green-400 text-black focus-visible:ring-offset-[#0d1412]"
        : "bg-green-600 hover:bg-green-700 text-white focus-visible:ring-offset-white"
    }`}
  >
    {label}
    <ArrowIcon />
  </Link>
);

export const BulletList = ({ items, dark = false }) => (
  <ul className={`space-y-3 ${dark ? "text-gray-300" : "text-gray-700"}`}>
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className={`${dark ? "text-green-400" : "text-green-600"} mt-0.5`}>
          <CheckIcon />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const breadcrumbLd = (name, path) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.technocore.ie/" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.technocore.ie/products" },
    { "@type": "ListItem", position: 3, name: "Air Dryers", item: "https://www.technocore.ie/products/air-dryers" },
    { "@type": "ListItem", position: 4, name, item: `https://www.technocore.ie${path}` },
  ],
});

export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
