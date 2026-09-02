import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CookieConsent from "../components/CookieConsent";

const treatmentGroups = [
  {
    title: "Refrigerated Air Dryers",
    text: "Energy-efficient compressed air drying for general industrial applications where a stable positive pressure dew point is required. Suitable for protecting pneumatic equipment, production lines and downstream filtration from moisture.",
    href: "/products/air-dryers",
  },
  {
    title: "Adsorption / Desiccant Air Dryers",
    text: "Low pressure dew point solutions for demanding process and instrument-air applications. TechnoCore can select heatless, heat-regenerated, modular, hybrid and high-pressure drying solutions according to flow, pressure, ambient conditions and required PDP.",
    href: "/products/air-dryers#desiccant",
  },
  {
    title: "Compressed Air Filtration",
    text: "Particulate and coalescing filtration for removal of solid particles, liquid water, oil aerosols and other contaminants from compressed air systems. Filtration stages are selected to suit the required air quality and application.",
    href: "/products/filtration",
  },
  {
    title: "Activated Carbon Filtration",
    text: "Activated carbon filtration for applications requiring additional reduction of oil vapour, hydrocarbons and odours. These solutions can form part of higher-purity compressed air treatment trains.",
    href: "/products/filtration",
  },
  {
    title: "Sterile & Process Filtration",
    text: "Specialist process and sterile filtration options for sensitive applications including food, pharmaceutical, medical-device and other process industries where compressed-air quality is critical.",
    href: "/products/filtration",
  },
  {
    title: "High-Pressure Filtration",
    text: "Compressed air and gas filtration solutions for medium- and high-pressure applications, engineered around operating pressure, flow, gas type, materials and process requirements.",
    href: "/products/filtration",
  },
  {
    title: "Water & Condensate Separators",
    text: "Mechanical separation of bulk liquid water and condensate upstream of dryers and filters. Correct condensate separation reduces the load on downstream treatment equipment and supports stable air quality.",
    href: "/contact",
  },
  {
    title: "Condensate Drains",
    text: "Automatic, level-controlled and zero-loss condensate drainage solutions for separators, filters, air receivers, dryers and drip legs.",
    href: "/contact",
  },
  {
    title: "Oil / Water Separation",
    text: "Condensate management solutions designed to separate compressor lubricant from water before disposal, helping industrial users manage oily condensate responsibly.",
    href: "/contact",
  },
];

const industries = [
  "Pharmaceutical Manufacturing",
  "Medical Device Manufacturing",
  "Food & Beverage",
  "Electronics",
  "Packaging",
  "Plastics",
  "Metal Fabrication",
  "Laser Cutting",
  "Automotive",
  "Chemical & Process Industries",
  "General Manufacturing",
  "Laboratories & Instrument Air",
];

const selectionItems = [
  "Required air flow (Nm³/h or m³/h)",
  "Operating pressure (bar)",
  "Inlet compressed-air temperature",
  "Ambient temperature",
  "Required pressure dew point (PDP)",
  "Required ISO 8573-1 air quality",
  "Compressor type and capacity",
  "Application / industry",
  "Existing treatment equipment",
  "Installation location and operating conditions",
];

const faqs = [
  {
    q: "What is the difference between a refrigerated and an adsorption air dryer?",
    a: "Refrigerated dryers are widely used for general industrial compressed-air treatment. Adsorption or desiccant dryers are selected when a significantly lower pressure dew point is required for sensitive processes, instrument air, outdoor installations or other demanding applications.",
  },
  {
    q: "What pressure dew point do I need?",
    a: "The correct PDP depends on the process, ambient conditions and risk of condensation or freezing. TechnoCore can help define the required PDP and select the appropriate drying technology.",
  },
  {
    q: "Why are coalescing filters installed before an adsorption dryer?",
    a: "Pre-filtration protects the dryer by reducing liquid water, oil aerosols and particles entering the desiccant bed. The exact filtration arrangement depends on the compressor, dryer and required air quality.",
  },
  {
    q: "When is activated carbon filtration required?",
    a: "Activated carbon is used when additional reduction of oil vapour, hydrocarbons or odours is required. It is commonly considered for higher-purity process-air applications.",
  },
  {
    q: "Do compressed air systems need condensate drains?",
    a: "Yes. Condensate must be removed from separators, filters, receivers, dryers and low points in the system. The appropriate drain type depends on pressure, condensate volume and efficiency requirements.",
  },
  {
    q: "Can TechnoCore size a complete compressed air treatment system?",
    a: "Yes. TechnoCore can assist with technical selection of separators, filters, refrigerated or adsorption dryers, condensate management and monitoring based on flow, pressure, PDP, air-quality and process requirements.",
  },
];

export default function CompressedAirTreatmentIreland() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Compressed Air Treatment Ireland",
    serviceType: "Industrial compressed air treatment, drying, filtration and condensate management",
    provider: {
      "@type": "Organization",
      name: "TechnoCore Limited",
      url: "https://technocore.ie",
      email: "sales@technocore.ie",
      telephone: "+353874386157",
    },
    areaServed: {
      "@type": "Country",
      name: "Ireland",
    },
    url: "https://technocore.ie/compressed-air-treatment-ireland",
  };

  return (
    <main>
      <Head>
        <title>Compressed Air Treatment Ireland | Dryers & Filtration | TechnoCore</title>
        <meta
          name="description"
          content="Industrial compressed air treatment in Ireland: refrigerated and adsorption dryers, coalescing and particulate filtration, activated carbon, separators and condensate management."
        />
        <meta
          name="keywords"
          content="compressed air treatment Ireland, compressed air dryer Ireland, refrigerated air dryer Ireland, adsorption dryer Ireland, desiccant air dryer Ireland, compressed air filtration Ireland, coalescing filter Ireland, particulate filter Ireland, activated carbon filter Ireland, water separator Ireland, condensate drain Ireland, oil water separator Ireland, pressure dew point, ISO 8573-1"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/compressed-air-treatment-ireland" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Compressed Air Treatment Ireland | TechnoCore"
        />
        <meta
          property="og:description"
          content="Engineered compressed air drying, filtration, separation and condensate management solutions for industry throughout Ireland."
        />
        <meta
          property="og:url"
          content="https://technocore.ie/compressed-air-treatment-ireland"
        />
        <meta
          property="og:image"
          content="https://technocore.ie/images/rdp-dryer.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="sticky top-0 z-50 bg-black/95 border-b border-green-500 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="TechnoCore logo"
                width={40}
                height={40}
                className="h-9 w-9"
                priority
              />
              <span className="text-xl md:text-2xl font-bold group-hover:text-green-400">
                TechnoCore
              </span>
            </Link>

            <div className="flex flex-wrap justify-center gap-5 md:gap-8">
              <Link href="/products" className="text-gray-300 hover:text-green-400">
                Products
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-green-400">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <header className="relative overflow-hidden border-b border-green-500/30">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="text-green-400 font-semibold tracking-wide uppercase mb-3">
                Industrial Air Quality Engineering
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Compressed Air Treatment Solutions Ireland
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl">
                Engineered drying, filtration, separation and condensate-management
                solutions for reliable industrial compressed air.
              </p>
              <p className="text-gray-400 mt-5 max-w-3xl leading-relaxed">
                TechnoCore supplies and integrates compressed air treatment systems
                throughout Ireland. We support equipment selection and sizing based on
                flow, operating pressure, temperature, required pressure dew point,
                air-quality class and the needs of the production process.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded"
                >
                  Request Technical Selection
                </Link>
                <a
                  href="mailto:sales@technocore.ie?subject=Compressed%20Air%20Treatment%20Enquiry"
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold px-6 py-3 rounded"
                >
                  Email Engineering Enquiry
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Complete Compressed Air Treatment
              </h2>
              <p className="text-gray-300 mt-5 leading-relaxed">
                Moisture, oil aerosols, vapours and solid particles can affect product
                quality, valves, instruments and production equipment. A correctly
                engineered treatment train removes contaminants in stages and delivers
                compressed air at the quality required by the process.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Depending on the application, a system can combine bulk water separation,
                particulate and coalescing filtration, refrigerated or adsorption drying,
                activated carbon treatment, sterile or process filtration, automatic
                condensate drainage and oil/water separation.
              </p>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden border border-green-500/50">
              <Image
                src="/images/filtration-units.jpg"
                alt="Industrial compressed air filtration and treatment equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Compressed Air Treatment Technologies
              </h2>
              <p className="text-gray-400 mt-4">
                Individual components or complete treatment packages can be selected to
                match the required pressure dew point, contaminant level, pressure and
                process conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentGroups.map((item) => (
                <article
                  key={item.title}
                  className="bg-black border border-green-500/70 rounded-xl p-6 flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-green-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-3 leading-relaxed flex-grow">
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    Discuss this solution →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-gray-900 border border-green-500/50 rounded-xl overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/images/rdp-dryer.jpg"
                  alt="Industrial refrigerated compressed air dryer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-green-400">
                  Refrigerated Air Dryers
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Refrigerated drying is widely used for factory compressed air where a
                  stable positive pressure dew point is suitable. TechnoCore can select
                  equipment according to actual flow, operating pressure, inlet
                  temperature, ambient conditions and installation requirements.
                </p>
                <Link
                  href="/products/air-dryers"
                  className="inline-block mt-5 text-sky-400 hover:text-sky-300"
                >
                  View air dryer solutions →
                </Link>
              </div>
            </article>

            <article className="bg-gray-900 border border-green-500/50 rounded-xl overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/images/r-dry-adsorption.jpg"
                  alt="Industrial adsorption desiccant compressed air dryer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-green-400">
                  Adsorption & Low-PDP Drying
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Adsorption dryers are used where lower pressure dew points are required.
                  Available technology can include heatless, heat-regenerated, modular,
                  hybrid and high-pressure configurations. Selection depends on the
                  required PDP, lifecycle cost and operating conditions.
                </p>
                <Link
                  href="/products/air-dryers#desiccant"
                  className="inline-block mt-5 text-sky-400 hover:text-sky-300"
                >
                  View adsorption dryer solutions →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Compressed Air Quality & ISO 8573-1
                </h2>
                <p className="text-gray-300 mt-5 leading-relaxed">
                  The required compressed-air quality should be defined by the process,
                  rather than by selecting individual components in isolation. TechnoCore
                  can help structure the treatment train around particles, water and oil,
                  as well as the required pressure dew point.
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  For demanding applications, multiple filtration and drying stages may
                  be combined with differential-pressure and dew-point monitoring to
                  provide a more controlled compressed-air supply.
                </p>
              </div>

              <div className="bg-black border border-green-500/50 rounded-xl p-7">
                <h3 className="text-2xl font-semibold text-green-400">
                  Typical Treatment Sequence
                </h3>
                <ol className="mt-5 space-y-4 text-gray-300">
                  <li><span className="text-green-400 font-bold">01.</span> Bulk condensate separation</li>
                  <li><span className="text-green-400 font-bold">02.</span> Particulate / coalescing pre-filtration</li>
                  <li><span className="text-green-400 font-bold">03.</span> Refrigerated or adsorption drying</li>
                  <li><span className="text-green-400 font-bold">04.</span> Final particulate / vapour treatment where required</li>
                  <li><span className="text-green-400 font-bold">05.</span> Condensate drainage and oil/water separation</li>
                  <li><span className="text-green-400 font-bold">06.</span> Dew-point / pressure / flow monitoring where required</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Compressed Air Treatment for Industry
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Treatment systems can be engineered around the air-quality and reliability
            requirements of individual industrial processes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-gray-900 border border-green-500/40 rounded-lg p-4 text-center text-gray-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-green-400 font-semibold uppercase">
                  Engineering Selection
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Not Sure Which Air Treatment System You Need?
                </h2>
                <p className="text-gray-300 mt-5 leading-relaxed">
                  Send us the operating requirements and TechnoCore can assist with
                  technical selection of the appropriate treatment stages.
                </p>
              </div>

              <div className="bg-black border border-green-500/60 rounded-xl p-7">
                <h3 className="text-xl font-semibold text-green-400">
                  Information that helps us size the system
                </h3>
                <ul className="mt-5 space-y-2 text-gray-300">
                  {selectionItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-green-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="bg-gray-900 border border-green-500/40 rounded-xl p-5 group"
              >
                <summary className="cursor-pointer text-lg font-semibold text-green-400">
                  {item.q}
                </summary>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-black border-t border-green-500/30 px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-green-400 font-semibold uppercase">
                Technical & Commercial Enquiries
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Request Compressed Air Treatment Selection
              </h2>
              <p className="text-gray-400 mt-4">
                Tell us about your application and operating requirements.
              </p>
            </div>

            <form
              action="https://formsubmit.co/sales@technocore.ie"
              method="POST"
              className="bg-gray-900 border border-green-500/50 rounded-xl p-6 md:p-8"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://technocore.ie/thanks"
              />
              <input type="hidden" name="_subject" value="Compressed Air Treatment Enquiry" />
              <input type="text" name="_honey" style={{ display: "none" }} readOnly />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="flow" className="block text-gray-300 mb-1">
                    Required Flow
                  </label>
                  <input
                    id="flow"
                    name="flow"
                    placeholder="e.g. 500 Nm³/h"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="pressure" className="block text-gray-300 mb-1">
                    Operating Pressure
                  </label>
                  <input
                    id="pressure"
                    name="pressure"
                    placeholder="e.g. 7 bar"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="requirement" className="block text-gray-300 mb-1">
                    Interested in
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  >
                    <option>Complete Compressed Air Treatment System</option>
                    <option>Refrigerated Air Dryer</option>
                    <option>Adsorption / Desiccant Air Dryer</option>
                    <option>Compressed Air Filtration</option>
                    <option>Activated Carbon Filtration</option>
                    <option>Sterile / Process Filtration</option>
                    <option>Water / Condensate Separator</option>
                    <option>Condensate Drain</option>
                    <option>Oil / Water Separator</option>
                    <option>Low Pressure Dew Point Solution</option>
                    <option>Not Sure - Technical Selection Required</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 mb-1">
                    Application / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please include application, flow, pressure, required pressure dew point or air quality if known."
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                By submitting this form, you acknowledge that TechnoCore Limited will
                process the information you provide for the purpose of responding to your
                enquiry and providing requested technical or commercial information.
                Please read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Privacy Policy
                </Link>{" "}
                for more information about how personal data is processed.
              </p>

              <button
                type="submit"
                className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded"
              >
                Send Technical Enquiry
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-black border-t border-green-500 py-8 text-gray-400 text-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-5">
            <div>
              <div className="text-white font-semibold text-lg">TechnoCore</div>
              <p>Industrial Air & Gas Solutions in Ireland</p>
              <p className="mt-2">
                <a href="mailto:sales@technocore.ie" className="hover:text-green-400">
                  sales@technocore.ie
                </a>{" "}
                ·{" "}
                <a href="tel:+353874386157" className="hover:text-green-400">
                  +353 87 438 6157
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href="/products" className="hover:text-green-400">Products</Link>
              <Link href="/about" className="hover:text-green-400">About</Link>
              <Link href="/contact" className="hover:text-green-400">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("technocore:open-cookie-settings"));
                  }
                }}
                className="hover:text-green-400"
              >
                Cookie Settings
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-6">
            © {new Date().getFullYear()} TechnoCore Limited. All rights reserved.
          </div>
        </footer>

        <CookieConsent />
      </div>
    </main>
  );
}
