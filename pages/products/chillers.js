// pages/products/chillers.js

import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function ChillersPage() {
  const benefits = [
    {
      title: "Precise Cooling",
      text: "Stable process temperature for industrial equipment and production.",
    },
    {
      title: "Wide Capacity Range",
      text: "From compact process chillers to large industrial cooling systems.",
    },
    {
      title: "Industrial Design",
      text: "Designed for continuous operation in demanding production environments.",
    },
    {
      title: "Engineering Support",
      text: "Selection, installation, commissioning and technical support in Ireland.",
    },
  ];

  const applications = [
    {
      title: "Laser Cutting",
      text: "Cooling for laser sources, optics and process equipment.",
    },
    {
      title: "Plastics Processing",
      text: "Temperature control for injection moulding and extrusion processes.",
    },
    {
      title: "Machine Cooling",
      text: "Cooling circuits for CNC machines, hydraulics and industrial equipment.",
    },
    {
      title: "Welding",
      text: "Process cooling for welding systems and associated equipment.",
    },
    {
      title: "Food & Beverage",
      text: "Controlled process cooling for production and packaging applications.",
    },
    {
      title: "Process Engineering",
      text: "Cooling solutions for general industrial and technical processes.",
    },
  ];

  const faq = [
    {
      question: "What size industrial chiller do I need?",
      answer:
        "Chiller selection depends on the required cooling load, process inlet and outlet temperature, fluid type, ambient conditions, flow rate and operating profile.",
    },
    {
      question: "What cooling capacities are available?",
      answer:
        "OMEGA AIR offers compact industrial water chillers from around 1 kW and larger industrial ranges extending into hundreds of kilowatts and beyond, depending on the selected series and configuration.",
    },
    {
      question: "Can chillers operate outdoors?",
      answer:
        "Selected industrial air-cooled chiller ranges are designed for demanding ambient conditions. Final suitability depends on the model, required cooling duty and installation environment.",
    },
    {
      question: "Can glycol be used in the cooling circuit?",
      answer:
        "Yes. Glycol mixtures may be used where lower process-water temperatures or freeze protection are required. The concentration and system configuration must be considered during sizing.",
    },
    {
      question: "Does TechnoCore provide installation and commissioning?",
      answer:
        "Yes. TechnoCore can support equipment selection, system design, installation coordination, commissioning and ongoing technical support in Ireland.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <SiteLayout>
      <Head>
        <title>
          Industrial Chillers Ireland | Process Cooling Systems | TechnoCore
        </title>

        <meta
          name="description"
          content="Industrial process chillers in Ireland for laser cutting, plastics, machinery and manufacturing. TechnoCore supplies OMEGA AIR process cooling systems with engineering, installation and technical support."
        />

        <meta
          name="keywords"
          content="industrial chillers Ireland, process chillers Ireland, process cooling Ireland, water chiller Ireland, industrial cooling systems, laser chiller, OMEGA AIR chillers"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/chillers"
        />

        <meta
          property="og:title"
          content="Industrial Chillers Ireland | Process Cooling Systems | TechnoCore"
        />

        <meta
          property="og:description"
          content="Industrial process cooling systems for manufacturing, machinery, laser cutting and technical applications across Ireland."
        />

        <meta
          property="og:url"
          content="https://www.technocore.ie/products/chillers"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.technocore.ie/images/chiller-hero.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[590px] lg:min-h-[650px] flex items-center overflow-hidden bg-[#030504]">
        <div className="absolute inset-0">
          <img
            src="/images/chiller-hero.jpg"
            alt="Industrial process chiller"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-[700px]">
            <p className="text-green-400 text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Industrial Process Cooling
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.98] mt-5">
              Industrial Chillers
              <span className="block text-green-400">Ireland</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mt-7 max-w-xl">
              Reliable process cooling for manufacturing, laser systems,
              machinery and industrial applications. TechnoCore supplies and
              supports OMEGA AIR chiller systems across Ireland.
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-5 mt-8">
              <div>
                <div className="text-green-400 font-bold text-lg">
                  1 kW+
                </div>
                <div className="text-gray-400 text-xs">
                  compact systems
                </div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-green-400 font-bold text-lg">
                  Up to +45°C
                </div>
                <div className="text-gray-400 text-xs">
                  ambient capability*
                </div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-white font-bold">
                  Process Cooling
                </div>
                <div className="text-gray-400 text-xs">
                  engineered around your load
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-4 transition"
              >
                Request a Quote →
              </Link>

              <a
                href="#technical"
                className="inline-flex justify-center items-center border border-white/40 hover:border-green-400 text-white font-semibold px-7 py-4 transition"
              >
                Technical Overview ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#dce4de] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`px-7 py-10 text-center ${
                  index !== 0 ? "lg:border-l border-[#bdc9c0]" : ""
                }`}
              >
                <div className="w-9 h-9 mx-auto text-green-700">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="w-full h-full"
                  >
                    <circle cx="24" cy="24" r="15" />
                    <path d="M24 8v32M8 24h32M13 13l22 22M35 13 13 35" />
                  </svg>
                </div>

                <h2 className="font-bold text-lg mt-4">
                  {item.title}
                </h2>

                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS COOLING */}
      <section className="bg-[#edf2ee] text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[500px]">
          <div className="flex items-center px-6 py-16 lg:pr-16">
            <div className="max-w-xl">
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                Process Cooling
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Remove heat.
                <span className="block text-green-700">
                  Control your process.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                Industrial chillers continuously remove heat from machinery
                and production processes through a closed cooling-water
                circuit. The absorbed heat is transferred through the
                refrigeration system and rejected to the surrounding
                environment.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Correct chiller sizing helps maintain stable process
                temperatures, protect equipment and support consistent
                production conditions.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Process Circuit</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Chilled fluid absorbs heat from the equipment.
                  </p>
                </div>

                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Refrigeration Circuit</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Heat is transferred and rejected by the chiller.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex items-center justify-center p-8 lg:p-14">
            <img
              src="/images/chiller-pci.jpg"
              alt="OMEGA AIR industrial water chiller"
              className="max-h-[430px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL */}
      <section
        id="technical"
        className="relative bg-[#032015] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            Engineering Overview
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Cooling capacity for
            <span className="block text-green-400">
              real industrial demand.
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mt-5 max-w-2xl">
            OMEGA AIR offers process chillers ranging from compact systems
            through to large-capacity industrial installations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#789287] mt-10">
            <div className="bg-[#eef3ef] text-black p-7">
              <p className="text-green-700 text-4xl font-bold">
                1–25
              </p>
              <p className="font-bold mt-3">Compact range</p>
              <p className="text-gray-600 text-sm mt-1">
                kW class OBE / OBS
              </p>
            </div>

            <div className="bg-[#eef3ef] text-black p-7">
              <p className="text-green-700 text-4xl font-bold">
                30+
              </p>
              <p className="font-bold mt-3">Industrial range</p>
              <p className="text-gray-600 text-sm mt-1">
                GR1A and larger systems
              </p>
            </div>

            <div className="bg-[#eef3ef] text-black p-7">
              <p className="text-green-700 text-4xl font-bold">
                +45°C
              </p>
              <p className="font-bold mt-3">Ambient temperature</p>
              <p className="text-gray-600 text-sm mt-1">
                Selected configurations
              </p>
            </div>

            <div className="bg-[#eef3ef] text-black p-7">
              <p className="text-green-700 text-4xl font-bold">
                5°C
              </p>
              <p className="font-bold mt-3">Water outlet</p>
              <p className="text-gray-600 text-sm mt-1">
                Down to −5°C with glycol*
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <div className="bg-[#d8dfda] text-black p-7 md:p-8">
              <p className="text-green-700 text-xs font-bold tracking-[0.18em] uppercase">
                Chiller Selection
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Sized around the process.
              </h3>

              <div className="mt-6 border-t border-[#a8b4ab]">
                {[
                  ["Cooling load", "kW"],
                  ["Process inlet temperature", "°C"],
                  ["Required outlet temperature", "°C"],
                  ["Fluid", "Water / Glycol"],
                  ["Flow rate", "L/min or m³/h"],
                  ["Ambient conditions", "Indoor / Outdoor"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-6 py-3.5 border-b border-[#a8b4ab]"
                  >
                    <span className="text-gray-700 text-sm">
                      {label}
                    </span>
                    <span className="font-bold text-sm text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#02130d] border border-green-900/60 p-7 md:p-8">
              <p className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">
                System Configuration
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Cooling solutions for different installations.
              </h3>

              <div className="grid sm:grid-cols-2 gap-x-8 mt-7">
                {[
                  "Air-cooled chillers",
                  "Water-cooled configurations",
                  "Integrated water tank options",
                  "Circulation pump packages",
                  "Glycol operation",
                  "Free-cooling solutions",
                  "Compact process chillers",
                  "Large-capacity systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-3 border-b border-white/10"
                  >
                    <div className="w-4 h-4 rounded-full border border-green-400 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    </div>

                    <span className="text-gray-200 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#086b45] to-[#009765] mt-5 px-7 py-6">
            <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-center">
              <div>
                <p className="text-green-100 text-[10px] font-bold tracking-[0.18em] uppercase">
                  Chiller Sizing
                </p>

                <h3 className="text-xl font-bold mt-1">
                  Need help selecting a chiller?
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <span>Cooling load</span>
                <span className="opacity-50">→</span>
                <span>Temperature</span>
                <span className="opacity-50">→</span>
                <span>Flow</span>
                <span className="opacity-50">→</span>
                <span>Fluid</span>
                <span className="opacity-50">→</span>
                <span>Ambient</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex justify-center bg-white text-[#086b45] font-bold px-6 py-3 hover:bg-green-50 transition whitespace-nowrap"
              >
                Send Process Data →
              </Link>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            *Operating limits depend on model, configuration and process
            conditions.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#e7ece8] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
            Applications
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Process cooling across industry.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#bcc8bf] mt-9">
            {applications.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#edf2ee] p-7 md:p-8"
              >
                <span className="text-green-700 text-xs font-bold">
                  0{index + 1}
                </span>

                <h3 className="font-bold text-xl mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="bg-[#cbd4cc] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                TechnoCore Engineering
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                From cooling load
                <span className="block text-green-700">
                  to operating system.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-5">
                Chiller performance depends on correct sizing and integration
                with the process. TechnoCore can support equipment selection,
                hydraulic configuration, installation, commissioning and
                service.
              </p>

              <Link
                href="/contact"
                className="inline-flex mt-7 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 transition"
              >
                Discuss Your Cooling Project →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["01", "Selection", "Cooling load and temperature analysis."],
                ["02", "System Design", "Hydraulic and installation requirements."],
                ["03", "Commissioning", "System setup and operating checks."],
                ["04", "Support", "Technical and service support in Ireland."],
              ].map(([number, title, text]) => (
                <div
                  key={title}
                  className="border-t-2 border-green-700 py-5"
                >
                  <span className="text-green-700 text-xs font-bold">
                    {number}
                  </span>
                  <h3 className="font-bold text-lg mt-3">{title}</h3>
                  <p className="text-gray-700 text-sm mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#071a12] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <div className="text-green-400 text-5xl md:text-6xl font-bold">
              600+
            </div>

            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                OMEGA AIR Process Cooling Experience
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Process cooling installations worldwide.
              </h2>

              <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                TechnoCore supplies OMEGA AIR industrial equipment in Ireland,
                backed by the manufacturer's process cooling experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#02130d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Chiller selection questions.
          </h2>

          <div className="grid lg:grid-cols-2 gap-x-8 mt-9">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group border-b border-white/10"
              >
                <summary className="cursor-pointer list-none flex justify-between gap-5 py-5 font-semibold">
                  <span>{item.question}</span>

                  <span className="text-green-400 text-xl group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                <p className="text-gray-400 leading-relaxed pb-6 pr-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0d6b45] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-green-100 text-xs font-bold tracking-[0.2em] uppercase">
                Process Cooling
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Plan your industrial cooling system.
              </h2>

              <p className="text-green-50 mt-5 max-w-2xl leading-relaxed">
                Send us your required cooling load, process temperature, flow
                rate and installation conditions. We can help select the
                appropriate chiller and system configuration.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-white text-[#0d6b45] font-bold px-9 py-4 hover:bg-green-50 transition whitespace-nowrap"
            >
              Contact TechnoCore →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
