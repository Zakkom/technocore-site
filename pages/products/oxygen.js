// pages/products/oxygen.js

import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";
import IrelandCoverage from "../../components/IrelandCoverage";

export default function OxygenPage() {
  const benefits = [
    {
      title: "Cost Efficient",
      text: "Reduce dependence on cylinder and bulk oxygen deliveries.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <path d="M25 41c10-7 14-17 13-30-13 0-23 4-30 13 2 10 7 15 17 17Z" />
          <path d="M11 36c7-9 14-15 23-19" />
        </svg>
      ),
    },
    {
      title: "Reliable Supply",
      text: "Continuous on-site oxygen production according to process demand.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
          <path d="m17 24 5 5 10-11" />
        </svg>
      ),
    },
    {
      title: "Modular Design",
      text: "Standalone, skid-mounted and containerised configurations.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <circle cx="24" cy="24" r="7" />
          <path d="M24 5v7M24 36v7M5 24h7M36 24h7M10.5 10.5l5 5M32.5 32.5l5 5M37.5 10.5l-5 5M15.5 32.5l-5 5" />
        </svg>
      ),
    },
    {
      title: "Process Focused",
      text: "Systems selected around purity, flow, pressure and operating profile.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <circle cx="24" cy="24" r="14" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
        </svg>
      ),
    },
  ];

  const applications = [
    {
      title: "Aquaculture",
      image: "/images/oxygen-aquaculture.jpg",
      text: "On-site oxygen supply for fish farms and aquaculture systems.",
    },
    {
      title: "Water & Ozone",
      image: "/images/oxygen-water-treatment.jpg",
      text: "Oxygen feed gas for ozone generation and treatment processes.",
    },
    {
      title: "Welding & Brazing",
      image: "/images/oxygen-welding.jpg",
      text: "Oxygen for selected welding, brazing and thermal processes.",
    },
    {
      title: "Glass Processing",
      image: "/images/oxygen-glass-process.jpg",
      text: "Oxygen enrichment for glass production and burner processes.",
    },
    {
      title: "Oxygen Lancing",
      image: "/images/oxygen-lancing.jpg",
      text: "Industrial oxygen supply for metallurgical lancing applications.",
    },
    {
      title: "Ozone Generation",
      image: "/images/oxygen-ozone.jpg",
      text: "Consistent oxygen feed gas for industrial ozone generators.",
    },
  ];

  const standardEquipment = [
    "External feed air filters",
    "Carbon steel adsorber vessels",
    "Long-life pneumatic valves",
    "SS316 internal piping & fittings",
    "Exhaust mufflers",
    "Air & oxygen flow regulation",
    "SIEMENS PLC control system",
    "WebControl",
    "Pressure transmitter for automated idle mode",
  ];

  const optionalEquipment = [
    "Zirconium-oxide oxygen analyser",
    "Electronic product flow meter",
    "Feed air / product moisture analyser",
    "Oxygen booster",
    "Cylinder filling system",
    "Feed air / product temperature transmitters",
    "Touch-screen or semi-graphical operator interface",
    "Sterile filters",
  ];

  const systemItems = [
    {
      title: "Compressed Air",
      text: "Compressor selection based on the required oxygen production.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <rect x="8" y="17" width="24" height="17" rx="2" />
          <path d="M32 22h6l3 4v8h-9M13 17v-5h13v5" />
          <circle cx="15" cy="35" r="4" />
          <circle cx="33" cy="35" r="4" />
        </svg>
      ),
    },
    {
      title: "Air Treatment",
      text: "Feed-air filtration and treatment upstream of the PSA generator.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <path d="M15 6h18M17 6v36M31 6v36M13 42h22" />
          <path d="M17 15h14M17 31h14" />
        </svg>
      ),
    },
    {
      title: "PSA Generation",
      text: "Twin molecular sieve beds alternate between production and regeneration.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <rect x="8" y="10" width="12" height="30" rx="5" />
          <rect x="28" y="10" width="12" height="30" rx="5" />
          <path d="M14 10V5M34 10V5M20 18h8M20 32h8" />
        </svg>
      ),
    },
    {
      title: "Storage & Delivery",
      text: "Receivers, regulation and distribution to the point of use.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <rect x="8" y="11" width="13" height="29" rx="6" />
          <rect x="27" y="11" width="13" height="29" rx="6" />
          <path d="M14.5 11V6M33.5 11V6M21 27h6" />
        </svg>
      ),
    },
  ];

  const faq = [
    {
      question: "What oxygen purity can an O-GEN PSA generator produce?",
      answer:
        "The O-GEN range can produce oxygen at purity levels up to 95%, depending on the selected model, required flow and operating conditions.",
    },
    {
      question: "What is the capacity range?",
      answer:
        "The published O-GEN PSA range covers oxygen production from approximately 1.02 to 94.9 Nm³/h.",
    },
    {
      question: "What operating pressure is required?",
      answer:
        "The O-GEN series operates within an approximate compressed-air pressure range of 5 to 6 barg.",
    },
    {
      question: "How does PSA oxygen generation work?",
      answer:
        "Compressed and cleaned ambient air passes through molecular sieve beds. Oxygen passes through as product gas while other gases are adsorbed. Two beds alternate between adsorption and regeneration to maintain continuous oxygen production.",
    },
    {
      question: "Can TechnoCore supply the complete oxygen system?",
      answer:
        "Yes. TechnoCore can configure compressed-air supply, air treatment, PSA oxygen generation, receivers, controls and downstream equipment as one engineered system.",
    },
    {
      question: "Can the system be supplied as a skid or containerised package?",
      answer:
        "Yes. Depending on the installation, oxygen generation can be configured as standalone equipment, an integrated O₂ SKID or a containerised O₂ BOX solution.",
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
        <title>Oxygen Generators Ireland | PSA O2 Systems | TechnoCore</title>

        <meta
          name="description"
          content="PSA oxygen generators in Ireland for on-site O2 production up to 95% purity. TechnoCore supplies O-GEN systems, O2 skids, containerised packages, air treatment, installation and technical support."
        />

        <meta
          name="keywords"
          content="oxygen generators Ireland, PSA oxygen generator Ireland, O2 generator Ireland, on-site oxygen generation, industrial oxygen generator, O-GEN, oxygen skid, O2 BOX"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/oxygen"
        />

        <meta
          property="og:title"
          content="Oxygen Generators Ireland | PSA O2 Systems | TechnoCore"
        />

        <meta
          property="og:description"
          content="Industrial on-site PSA oxygen generation systems up to 95% purity, engineered and supplied in Ireland."
        />

        <meta
          property="og:url"
          content="https://www.technocore.ie/products/oxygen"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.technocore.ie/images/oxygen-hero.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#030504]">
        <div className="absolute inset-0">
          <img
            src="/images/oxygen-hero.png"
            alt="Industrial on-site oxygen generation system"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030504]/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-[680px]">
            <p className="text-green-400 text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              On-Site Oxygen Generation
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.98] mt-5">
              Oxygen Generators
              <span className="block text-green-400">Ireland</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mt-7 max-w-xl">
              Reliable on-site oxygen production for industrial applications.
              TechnoCore engineers and supplies PSA oxygen generation systems
              across Ireland.
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-5 mt-8">
              <div>
                <div className="text-green-400 font-bold text-lg">
                  Up to 95%
                </div>
                <div className="text-gray-400 text-xs">O₂ purity</div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-green-400 font-bold text-lg">
                  1.02 – 94.9
                </div>
                <div className="text-gray-400 text-xs">Nm³/h O₂</div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-white font-bold">PSA Technology</div>
                <div className="text-gray-400 text-xs">
                  Continuous production
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-4 rounded transition"
              >
                Request a Quote →
              </Link>

              <a
                href="#engineering-data"
                className="inline-flex justify-center items-center border border-white/40 hover:border-green-400 text-white font-semibold px-7 py-4 rounded transition"
              >
                Technical Data ↓
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
                className={`text-center px-7 py-10 ${
                  index !== 0 ? "lg:border-l border-[#bdc9c0]" : ""
                }`}
              >
                <div className="w-10 h-10 mx-auto text-green-700 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.6]">
                  {item.icon}
                </div>

                <h2 className="font-bold text-lg mt-4">{item.title}</h2>

                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSA TECHNOLOGY */}
      <section className="bg-[#edf2ee] text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] min-h-[540px]">
          <div className="flex items-center px-6 py-16 lg:pr-14">
            <div className="max-w-xl">
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                PSA Technology
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Produce oxygen
                <span className="block text-green-700">
                  directly on site.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                PSA — Pressure Swing Adsorption — separates oxygen from
                compressed, cleaned ambient air using molecular sieve
                technology. Oxygen passes through as product gas while other
                gases are adsorbed by the molecular sieve.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Two molecular sieve beds alternate between adsorption and
                regeneration. While one vessel produces oxygen, the second is
                regenerated and prepared for the next cycle, providing
                continuous product flow.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Adsorption</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Other gases are retained by the molecular sieve.
                  </p>
                </div>

                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Regeneration</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Adsorbed gases are released before the next cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white min-h-[470px] flex items-center">
            <img
              src="/images/oxygen-o-gen.jpg"
              alt="OMEGA AIR O-GEN PSA oxygen generator"
              className="w-full h-[450px] object-contain p-8 lg:p-12"
            />

            <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 max-w-[220px]">
              <p className="text-green-700 text-xs tracking-[0.2em] uppercase font-bold">
                O-GEN
              </p>

              <h3 className="text-2xl font-bold mt-2 leading-tight">
                Proven technology.
                <span className="block text-green-700">
                  Reliable oxygen supply.
                </span>
              </h3>

              <div className="w-10 h-[2px] bg-green-700 mt-5" />

              <p className="text-gray-600 text-sm leading-relaxed mt-5">
                Industrial PSA oxygen generators for a wide range of
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK TECHNICAL SECTION */}
      <section
        id="engineering-data"
        className="relative overflow-hidden bg-[#032015] text-white"
      >
        {/* subtle technical background lines */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at bottom right, transparent 0, transparent 28px, #22c55e 29px, transparent 30px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
              Engineering Data
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3">
              Technical performance
              <span className="block text-green-400">
                & system configuration.
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mt-5 max-w-2xl">
              O-GEN oxygen systems are selected around the required oxygen
              demand, purity, operating pressure and installation conditions.
            </p>
          </div>

          {/* PERFORMANCE */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#87a095] mt-10 border border-[#87a095]">
            {[
              ["95%", "Oxygen purity", "Up to 95% O₂"],
              ["94.9", "Maximum capacity", "Nm³/h O₂"],
              ["5–6", "Operating pressure", "barg"],
              ["< −60°C", "Dew point", "Atmospheric"],
            ].map(([value, title, note]) => (
              <div key={title} className="bg-[#eef3ef] text-black p-7">
                <p className="text-green-700 text-4xl font-bold">{value}</p>
                <p className="font-bold mt-3">{title}</p>
                <p className="text-gray-600 text-sm mt-1">{note}</p>
              </div>
            ))}
          </div>

          {/* OPERATING + EQUIPMENT */}
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-5 mt-5">
            {/* OPERATING CONDITIONS */}
            <div className="bg-[#d8dfda] text-black p-7 md:p-8">
              <p className="text-green-700 text-xs font-bold tracking-[0.18em] uppercase">
                Operating Conditions
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Industrial operating range.
              </h3>

              <div className="mt-6 border-t border-[#a8b4ab]">
                {[
                  ["Operating temperature", "5 – 50 °C"],
                  ["Maximum ambient temperature", "Up to 45 °C"],
                  ["Adsorber vessels", "Carbon steel"],
                  ["Internal piping & fittings", "SS316"],
                  ["Control system", "SIEMENS PLC"],
                  ["Connectivity", "WebControl"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-6 py-3.5 border-b border-[#a8b4ab]"
                  >
                    <span className="text-gray-700 text-sm">{label}</span>
                    <span className="font-bold text-sm text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* EQUIPMENT CONFIGURATION */}
            <div className="bg-[#02130d] border border-green-900/60 p-7 md:p-8">
              <p className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">
                Equipment Configuration
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Standard & optional equipment.
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mt-7">
                {/* STANDARD */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 font-bold">+</span>
                    <p className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">
                      Standard
                    </p>
                  </div>

                  {standardEquipment.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-2 border-b border-white/10"
                    >
                      <div className="w-4 h-4 mt-[2px] flex items-center justify-center rounded-full bg-green-500 flex-shrink-0">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-3 h-3 text-black"
                        >
                          <path d="m4 10 4 4 8-8" />
                        </svg>
                      </div>

                      <span className="text-gray-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* OPTIONAL */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 font-bold">+</span>
                    <p className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">
                      Optional
                    </p>
                  </div>

                  {optionalEquipment.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-2 border-b border-white/10"
                    >
                      <span className="w-4 h-4 mt-[2px] rounded-full border border-green-400 flex-shrink-0" />

                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIZING STRIP */}
          <div className="bg-gradient-to-r from-[#086b45] to-[#009765] mt-5 px-7 py-6 md:px-8">
            <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-center">
              <div>
                <p className="text-green-100 text-[10px] font-bold tracking-[0.18em] uppercase">
                  System Sizing
                </p>

                <h3 className="text-xl font-bold mt-1">
                  Need a system calculation?
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white">
                <span>Flow</span>
                <span className="opacity-50">→</span>
                <span>Purity</span>
                <span className="opacity-50">→</span>
                <span>Pressure</span>
                <span className="opacity-50">→</span>
                <span>Operating hours</span>
                <span className="opacity-50">→</span>
                <span>Peak demand</span>
                <span className="opacity-50">→</span>
                <span>Installation</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex justify-center bg-white text-[#086b45] font-bold px-6 py-3 hover:bg-green-50 transition whitespace-nowrap"
              >
                Send Process Data →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#e7ece8] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
            Applications
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Oxygen for industrial processes.
          </h2>

          <p className="text-gray-700 leading-relaxed mt-4 max-w-2xl">
            PSA oxygen generation is used across applications where a reliable
            on-site oxygen supply is required.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-9">
            {applications.map((item) => (
              <article key={item.title}>
                <div className="h-[155px] overflow-hidden bg-gray-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="font-bold mt-4">{item.title}</h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE SYSTEM */}
      <section id="systems" className="bg-[#cbd4cc] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.8fr_1.6fr] gap-12 items-center">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                Complete Oxygen Systems
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                More than a generator.
              </h2>

              <p className="text-gray-700 leading-relaxed mt-5">
                Reliable oxygen production depends on the complete installation
                around the PSA generator. TechnoCore can configure the
                compressed-air supply, air treatment, oxygen generation,
                storage and distribution system.
              </p>

              <Link
                href="/contact"
                className="inline-flex mt-7 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 transition"
              >
                Request System Design →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {systemItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-6 py-5 ${
                    index !== 0 ? "lg:border-l border-[#aeb9b0]" : ""
                  }`}
                >
                  <div className="w-11 h-11 text-[#315f4b] [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">
                    {item.icon}
                  </div>

                  <h3 className="font-bold mt-5">{item.title}</h3>

                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM CONFIGURATION */}
      <section className="bg-[#dce3dd] text-black">
        <div className="grid lg:grid-cols-2">
          {/* ENGINEER */}
          <div className="relative min-h-[560px] overflow-hidden">
            <img
              src="/images/oxygen-engineer.png"
              alt="TechnoCore engineer inspecting an industrial oxygen system"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 flex items-center h-full min-h-[560px] px-8 md:px-14">
              <div className="space-y-4">
                {[
                  "ENGINEERING",
                  "INSTALLATION",
                  "COMMISSIONING",
                  "SUPPORT",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="block w-1 h-8 bg-green-400" />
                    <span className="text-white font-bold text-xl md:text-2xl tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONFIGURATION */}
          <div className="flex items-center">
            <div className="px-6 md:px-12 lg:px-14 py-16 w-full">
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                System Configuration
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Built around your installation.
              </h2>

              <p className="text-gray-700 leading-relaxed mt-5 max-w-xl">
                Depending on the project, oxygen generation can be supplied as
                individual equipment, an integrated skid package or a
                containerised system.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <div className="bg-[#c7d0c8] border border-[#b4beb6] overflow-hidden">
                  <div className="h-[230px] bg-white p-3">
                    <img
                      src="/images/oxygen-o2-skid.jpg"
                      alt="OMEGA AIR O2 SKID oxygen station"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold">O₂ SKID</h3>
                    <p className="text-gray-700 text-sm mt-1">
                      Integrated oxygen generation package designed for
                      simplified installation.
                    </p>
                  </div>
                </div>

                <div className="bg-[#c7d0c8] border border-[#b4beb6] overflow-hidden">
                  <div className="h-[230px] overflow-hidden">
                    <img
                      src="/images/oxygen-o2-box.jpg"
                      alt="Containerised oxygen generation system"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold">O₂ BOX</h3>
                    <p className="text-gray-700 text-sm mt-1">
                      Containerised oxygen production solution for packaged
                      installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* IRELAND COVERAGE */}
<IrelandCoverage product="on-site oxygen generation systems" />
      {/* FAQ */}
      <section className="bg-[#02130d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Technical questions. Clear answers.
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
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <img
          src="/images/oxygen-cta-forest.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#052518]/75 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Engineering Support
              </p>

              <h2 className="text-3xl md:text-4xl text-white font-bold mt-3">
                Plan your oxygen generation system.
              </h2>

              <p className="text-gray-200 mt-5 max-w-2xl leading-relaxed">
                Send us your required oxygen flow, purity, delivery pressure
                and operating profile. TechnoCore can help select the
                generator and complete system configuration for your
                application.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-green-500 hover:bg-green-400 text-black font-bold px-9 py-4 transition whitespace-nowrap"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}