import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CookieConsent from "../../components/CookieConsent";
import IrelandCoverage from "../../components/IrelandCoverage";

const products = [
  {
    title: "A-DRY BI / BM Series",
    subtitle: "Breathing Air Adsorption Dryers",
    image: "/images/medical-air/a-dry-bi-bm.jpg",
    alt: "Omega Air A-DRY BI BM breathing air heatless adsorption dryer",
    description: "Compact adsorption drying and purification equipment for breathing air applications. The BI version is intended for industrial breathing-air applications with EN 12021 requirements; the BM version is intended for medical applications where European Pharmacopoeia requirements apply.",
    specs: [
      ["Operating pressure", "4–16 bar"],
      ["Operating temperature", "1.5–50 °C"],
      ["Pressure dew point", "−40 °C standard; −25 / −70 °C options"],
      ["Flow range", "6–200 Nm³/h"],
    ],
    tags: ["Industrial breathing air — BI", "Medical applications — BM", "Compact system"],
  },
  {
    title: "B-DRY BM Medical",
    subtitle: "Medical Heatless Regeneration Adsorption Dryers",
    image: "/images/medical-air/b-dry-bm-medical.jpg",
    alt: "Omega Air B-DRY BM Medical heatless regeneration adsorption dryer",
    description: "Medical compressed air drying and purification equipment using alternating adsorption columns and an additional purification stage. Designed for applications where European Pharmacopoeia requirements are relevant.",
    specs: [
      ["Operating pressure", "4–16 bar"],
      ["Operating temperature", "1.5–50 °C"],
      ["Pressure dew point", "−40 °C"],
      ["Technology", "Heatless adsorption regeneration"],
    ],
    tags: ["Medical compressed air", "Additional purification stage", "Project-specific sizing"],
  },
];

const requirements = [
  "Medical, surgical or industrial breathing air application",
  "Applicable specification and intended use (e.g. Ph. Eur. / EN 12021)",
  "Required flow rate (Nm³/h) and operating pressure (bar)",
  "Inlet temperature and ambient conditions",
  "Target pressure dew point and contaminant limits",
  "Compressor type, existing filters and upstream air quality",
  "Redundancy, monitoring, alarms and maintenance requirements",
  "Project location, documentation and validation responsibilities",
];

const faqs = [
  {
    q: "What is the difference between A-DRY BI and A-DRY BM?",
    a: "The manufacturer describes BI for industrial breathing-air applications involving EN 12021 and BM for medical applications involving the European Pharmacopoeia. The correct variant must be selected against the project's intended use and specification.",
  },
  {
    q: "Is B-DRY BM a complete medical gas pipeline system?",
    a: "No. It is a dryer and purification component. A complete medical air system also requires appropriate source equipment, filtration, controls, monitoring, redundancy, installation and verification to the applicable requirements.",
  },
  {
    q: "What pressure dew point is available?",
    a: "Omega Air lists −40 °C for B-DRY BM Medical. The A-DRY BI/BM range lists −40 °C as standard with −25 °C and −70 °C options. Actual operating performance is subject to the selected unit and inlet conditions.",
  },
  {
    q: "Can TechnoCore assist with equipment selection in Ireland?",
    a: "TechnoCore can review initial process requirements and help request suitable equipment configurations and manufacturer documentation. Clinical suitability, compliance, installation and validation must be confirmed by the competent project parties.",
  },
];

export default function MedicalBreathingAirTreatment() {
  const canonical = "https://www.technocore.ie/products/medical-breathing-air-treatment";
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Medical and Breathing Air Treatment Equipment Ireland",
    serviceType: "Technical selection of adsorption dryers and compressed air purification equipment for medical and industrial breathing air applications",
    provider: { "@type": "Organization", name: "TechnoCore Limited", url: "https://www.technocore.ie", email: "sales@technocore.ie", telephone: "+353874386157" },
    areaServed: { "@type": "Country", name: "Ireland" }, url: canonical,
  };

  return (
    <main>
      <Head>
        <title>Medical & Breathing Air Dryers Ireland | TechnoCore</title>
        <meta name="description" content="Medical and breathing air treatment equipment in Ireland. Omega Air A-DRY BI/BM and B-DRY BM Medical adsorption dryers. Technical selection and quotation by TechnoCore." />
        <meta name="keywords" content="medical air dryer Ireland, medical compressed air treatment Ireland, breathing air dryer, A-DRY BI BM, B-DRY BM Medical, heatless adsorption dryer, medical air purification, EN 12021, European Pharmacopoeia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medical & Breathing Air Treatment | TechnoCore Ireland" />
        <meta property="og:description" content="Specialist adsorption dryers and purification solutions for medical and industrial breathing air applications in Ireland." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.technocore.ie/images/medical-air/b-dry-bm-medical.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical & Breathing Air Treatment | TechnoCore" />
        <meta name="twitter:description" content="Omega Air A-DRY BI/BM and B-DRY BM Medical adsorption dryers in Ireland." />
        <meta name="twitter:image" content="https://www.technocore.ie/images/medical-air/b-dry-bm-medical.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group overflow-visible">
              <div className="relative w-[108px] h-[58px] shrink-0 overflow-visible -ml-8"><Image src="/logo.png" alt="TechnoCore" width={130} height={130} className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[112px] h-[112px] max-w-none object-contain" /></div>
              <div className="leading-none"><div className="text-[25px] font-bold tracking-tight">TechnoCore</div><div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-1.5">Industrial Engineering</div></div>
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
              <Link href="/#solutions" className="hover:text-green-400">Solutions</Link>
              <Link href="/compressed-air-treatment-ireland" className="text-green-400">Air Treatment</Link>
              <Link href="/#engineering" className="hover:text-green-400">Engineering</Link>
              <Link href="/#industries" className="hover:text-green-400">Industries</Link>
              <Link href="/about" className="hover:text-green-400">About</Link>
              <Link href="/contact" className="hover:text-green-400">Contact</Link>
            </div>
            <Link href="#medical-enquiry" className="hidden sm:inline-flex bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition">Request a Quote</Link>
          </div>
        </nav>

        <header className="relative overflow-hidden border-b border-green-500/30 pt-[76px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <Link href="/compressed-air-treatment-ireland" className="inline-flex text-sm text-gray-300 hover:text-green-400 mb-7">← Back to Compressed Air Treatment</Link>
              <p className="text-green-400 font-semibold uppercase tracking-wide mb-3">Specialist Air Drying & Purification</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Medical & Breathing Air Treatment Ireland</h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-6">Adsorption dryers and purification equipment for demanding breathing air and medical compressed air applications.</p>
              <p className="text-gray-400 mt-5 leading-relaxed">TechnoCore assists with technical selection of Omega Air drying and purification equipment for projects throughout Ireland. We help match the dryer configuration to air flow, pressure dew point, inlet conditions and application requirements.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="#medical-enquiry" className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded">Request Technical Selection</Link>
                <Link href="#medical-products" className="border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-6 py-3 rounded">View Equipment</Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96 bg-white rounded-xl overflow-hidden border border-green-500/50 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
              <Image src="/images/medical-air/b-dry-bm-medical.jpg" alt="Omega Air B-DRY BM Medical adsorption dryer" fill sizes="(max-width: 1024px) 100vw, 40vw" priority className="object-contain p-4" />
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-green-400 font-semibold uppercase">Application-specific air treatment</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">More than moisture removal</h2>
              <p className="text-gray-300 mt-5 leading-relaxed">For medical and breathing air, pressure dew point is only one part of the specification. Equipment must be selected with reference to the intended use, contaminant limits, monitoring, redundancy and system verification requirements.</p>
              <p className="text-gray-400 mt-4 leading-relaxed">The dryer is a component of the complete air supply system. The suitability and compliance of the finished installation must be evaluated by competent designers, installers and validators against the applicable project requirements.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Industrial Breathing Air", "Specify appropriate equipment for industrial applications where EN 12021 requirements apply."],
                ["Medical Air", "Review medical air purification and drying requirements with the responsible specialist contractor."],
                ["Pressure Dew Point", "Select drying performance for the intended air quality and process conditions."],
                ["System Integration", "Consider pre-filtration, monitoring, controls, maintenance and verification in the overall design."],
              ].map(([title, text]) => <div key={title} className="bg-gray-900 border border-green-500/40 rounded-xl p-5"><div className="w-8 h-1 bg-green-500 rounded mb-4" /><h3 className="font-semibold text-green-400">{title}</h3><p className="text-gray-300 text-sm mt-3 leading-relaxed">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="medical-products" className="scroll-mt-24 bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-green-400 font-semibold uppercase">Omega Air Product Range</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Medical & Breathing Air Dryers</h2>
            <p className="text-gray-400 mt-4 max-w-3xl">Two specialist adsorption dryer series. Product characteristics are manufacturer-published values; confirm the specific model, configuration and technical documentation at quotation stage.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
              {products.map((product) => (
                <article key={product.title} className="group relative flex flex-col bg-black border border-green-500/60 hover:border-green-400 hover:bg-green-950/20 transition-all rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green-400">
                  <div className="relative h-72 md:h-80 bg-white"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]" /></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-green-400">{product.title}</h3>
                    <p className="text-sm text-gray-300 mt-1 font-medium">{product.subtitle}</p>
                    <p className="text-gray-300 mt-4 leading-relaxed">{product.description}</p>
                    <div className="mt-6 border border-green-500/30 rounded-lg overflow-hidden">
                      <div className="bg-green-950/40 px-4 py-3 text-sm font-semibold text-green-400">Typical Characteristics</div>
                      {product.specs.map(([label, value]) => <div key={label} className="grid grid-cols-2 gap-3 px-4 py-3 text-sm border-t border-white/10"><span className="text-gray-400">{label}</span><span className="text-white font-medium">{value}</span></div>)}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5">{product.tags.map((tag) => <span key={tag} className="text-xs text-green-200 bg-green-950/60 border border-green-500/30 rounded-full px-3 py-1">{tag}</span>)}</div>
                    <Link href="#medical-enquiry" className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-black hover:bg-green-400 focus-visible:ring-2 focus-visible:ring-green-300 after:absolute after:inset-0 after:content-['']">Request a Quote <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Selection & Compliance Considerations</h2>
              <p className="text-gray-300 mt-5 leading-relaxed">Industrial breathing air and medical air are distinct use cases. The model designation alone does not establish the quality or compliance of the entire installed supply system.</p>
              <p className="text-gray-400 mt-4 leading-relaxed">Healthcare projects may involve European Pharmacopoeia air quality requirements and medical gas pipeline design, testing and verification guidance. Appropriate responsibilities and acceptance criteria should be agreed before equipment selection.</p>
              <Link href="/products/air-quality-monitoring" className="inline-flex mt-6 text-green-400 hover:text-green-300 font-semibold">Explore Air Quality Monitoring →</Link>
            </div>
            <div className="bg-gray-900 border border-green-500/50 rounded-xl p-7">
              <h3 className="text-xl font-semibold text-green-400">What to define before ordering</h3>
              <ul className="mt-5 space-y-3 text-gray-300">{requirements.map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-green-400">✓</span><span>{item}</span></li>)}</ul>
            </div>
          </div>
        </section>

        <IrelandCoverage product="medical and breathing air drying and purification equipment" />

        <section className="bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Medical Air Projects", "Technical equipment selection for projects led by competent medical gas specialists."],
              ["Industrial Breathing Air", "Drying and purification equipment where the intended application requires industrial breathing air."],
              ["OEM & System Integrators", "Component selection and documentation support for engineered compressed air packages."],
            ].map(([title, text]) => <div key={title} className="bg-black border border-green-500/40 rounded-xl p-6"><h3 className="text-xl font-semibold text-green-400">{title}</h3><p className="text-gray-300 mt-3 leading-relaxed">{text}</p></div>)}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">{faqs.map((item) => <details key={item.q} className="bg-gray-900 border border-green-500/40 rounded-xl p-5"><summary className="cursor-pointer text-lg font-semibold text-green-400">{item.q}</summary><p className="text-gray-300 mt-4 leading-relaxed">{item.a}</p></details>)}</div>
        </section>

        <section id="medical-enquiry" className="scroll-mt-24 bg-black border-t border-green-500/30 px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8"><p className="text-green-400 font-semibold uppercase">Technical & Commercial Enquiries</p><h2 className="text-3xl md:text-4xl font-bold mt-2">Request Medical or Breathing Air Dryer Selection</h2><p className="text-gray-400 mt-4">Share your project parameters. We will review suitable equipment configurations and documentation needs.</p></div>
            <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="bg-gray-900 border border-green-500/50 rounded-xl p-6 md:p-8">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.technocore.ie/thanks" />
              <input type="hidden" name="_subject" value="Medical & Breathing Air Treatment Enquiry" />
              <input type="hidden" name="_honey" value="" readOnly style={{ display: "none" }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label htmlFor="medical-name" className="block text-gray-300 mb-1">Name *</label><input id="medical-name" name="name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="medical-company" className="block text-gray-300 mb-1">Company</label><input id="medical-company" name="company" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="medical-email" className="block text-gray-300 mb-1">Email *</label><input id="medical-email" type="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="medical-phone" className="block text-gray-300 mb-1">Phone</label><input id="medical-phone" type="tel" name="phone" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
              </div>
              <div className="mt-4"><label htmlFor="medical-application" className="block text-gray-300 mb-1">Application</label><select id="medical-application" name="application" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"><option value="">Select application</option><option>Medical compressed air</option><option>Industrial breathing air</option><option>OEM / system integration</option><option>Other / technical guidance required</option></select></div>
              <div className="mt-4"><label htmlFor="medical-product" className="block text-gray-300 mb-1">Equipment of interest</label><select id="medical-product" name="product" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"><option value="">Select equipment</option><option>A-DRY BI / BM</option><option>B-DRY BM Medical</option><option>Not sure — technical selection needed</option></select></div>
              <div className="mt-4"><label htmlFor="medical-message" className="block text-gray-300 mb-1">Project requirements *</label><textarea id="medical-message" name="message" rows={5} required placeholder="Flow, pressure, required dew point, intended use, site and applicable specification." className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-green-500" /></div>
              <button type="submit" className="w-full mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition">Send Technical Enquiry →</button>
              <p className="text-xs text-gray-400 mt-4">By submitting, you agree to be contacted about your enquiry. See our <Link href="/privacy-policy" className="text-green-400 underline">Privacy Policy</Link>.</p>
            </form>
          </div>
        </section>
        <footer className="bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="TechnoCore" width={72} height={72} className="w-[72px] h-[72px] object-contain" />
                  <div><div className="font-bold text-[27px] text-white">TechnoCore</div><div className="text-[10px] tracking-[0.23em] uppercase text-gray-400 mt-1">Industrial Engineering</div></div>
                </div>
                <p className="text-gray-400 mt-6 max-w-sm leading-relaxed">Industrial compressed air, gas generation, filtration, cooling and engineered utility systems in Ireland.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Solutions</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  {[["Compressed Air", "/compressed-air-treatment-ireland"], ["Nitrogen", "/products/nitrogen"], ["Oxygen", "/products/oxygen"], ["Air Dryers", "/products/air-dryers"], ["Filtration", "/products/filtration"], ["Chillers", "/products/chillers"], ["Paint Booth Air Preparation", "/products/paint-booth"]].map(([name, href]) => <Link key={href} href={href} className="block hover:text-green-400">{name}</Link>)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Company</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  {[["All Products", "/products"], ["About", "/about"], ["Contact", "/contact"], ["Privacy Policy", "/privacy-policy"]].map(([name, href]) => <Link key={href} href={href} className="block hover:text-green-400">{name}</Link>)}
                  <button type="button" onClick={() => window.dispatchEvent(new Event("technocore:open-cookie-settings"))} className="block hover:text-green-400">Cookie Settings</button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Contact</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  <a href="mailto:sales@technocore.ie" className="block hover:text-green-400">sales@technocore.ie</a>
                  <a href="tel:+353874386157" className="block hover:text-green-400">+353 87 438 6157</a>
                  <div>Newtownmountkennedy, Co. Wicklow, Ireland</div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} TechnoCore Limited. All rights reserved.</p>
              <p>Based in Newtownmountkennedy, Co. Wicklow · Supporting industrial customers throughout Ireland</p>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </div>
    </main>
  );
}
