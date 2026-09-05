// pages/about.js

import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";

const EngineeringIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="w-9 h-9"
  >
    <circle cx="24" cy="24" r="7" />
    <path d="M24 4v7M24 37v7M4 24h7M37 24h7M9.9 9.9l5 5M33.1 33.1l5 5M38.1 9.9l-5 5M14.9 33.1l-5 5" />
  </svg>
);

const SystemIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="w-9 h-9"
  >
    <rect x="5" y="8" width="12" height="12" rx="1" />
    <rect x="31" y="8" width="12" height="12" rx="1" />
    <rect x="18" y="30" width="12" height="12" rx="1" />
    <path d="M17 14h14M11 20v6h13v4M37 20v6H24" />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="w-9 h-9"
  >
    <path d="M12 29a12 12 0 0 1 24 0" />
    <path d="M10 28h5v10h-3a4 4 0 0 1-4-4v-2a4 4 0 0 1 2-4ZM38 28h-5v10h3a4 4 0 0 0 4-4v-2a4 4 0 0 0-2-4Z" />
    <path d="M33 38c-2 4-6 5-10 5" />
  </svg>
);

const SelectionIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="w-9 h-9"
  >
    <path d="M10 8h28v32H10z" />
    <path d="M17 17h14M17 24h14M17 31h8" />
    <path d="m30 31 3 3 6-7" />
  </svg>
);

export default function AboutPage() {
  return (
    <SiteLayout>
      <Head>
        <title>
          About TechnoCore | Industrial Air & Gas Engineering Ireland
        </title>

        <meta
          name="description"
          content="TechnoCore is an Irish engineering company supplying and integrating compressed air treatment, nitrogen and oxygen generation, filtration, dryers, chillers and industrial utility systems across Ireland."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.technocore.ie/about"
        />

        <meta
          property="og:title"
          content="About TechnoCore | Industrial Engineering Ireland"
        />

        <meta
          property="og:description"
          content="Engineering and system integration for compressed air, industrial gas generation and process utility systems across Ireland."
        />

        <meta
          property="og:url"
          content="https://www.technocore.ie/about"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.technocore.ie/images/about-hero.jpg"
        />
      </Head>

      {/* ======================================================
    HERO
====================================================== */}
<section className="relative min-h-[680px] lg:min-h-[740px] flex items-center overflow-hidden bg-black">
  <div className="absolute inset-0">
    <img
      src="/images/about-hero.jpg"
      alt="Industrial gas generation and process utility installation"
      className="w-full h-full object-cover object-center"
    />

    {/* Strong contrast behind copy, image remains visible on the right */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/72 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
    <div className="max-w-[720px]">
      <p className="text-green-400 text-xs md:text-sm font-bold tracking-[0.23em] uppercase">
        Industrial Engineering • Ireland
      </p>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.96] mt-5">
        Engineering solutions
        <span className="block text-green-400">
          built around your process.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-8 max-w-[650px]">
        TechnoCore supplies and integrates compressed-air treatment,
        on-site gas generation and process utility systems for industrial
        customers across Ireland.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          href="/contact"
          className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 transition"
        >
          Discuss Your Project →
        </Link>

        <Link
          href="/products"
          className="inline-flex justify-center items-center border border-white/40 hover:border-green-400 text-white font-semibold px-8 py-4 transition"
        >
          Explore Solutions
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* ======================================================
          WHO WE ARE — NOT CARDS
      ====================================================== */}
      <section className="bg-[#e8ede9] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-12 lg:gap-24">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                About TechnoCore
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-xs">
                Industrial air, gas generation and process utility engineering
                for Irish industry.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.04] max-w-4xl">
                Equipment matters.
                <span className="block text-green-700">
                  The complete system matters more.
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl">
                <p className="text-gray-700 leading-relaxed">
                  TechnoCore is an Irish engineering supplier and system
                  integrator working with compressed air, nitrogen, oxygen,
                  filtration, drying and industrial process cooling.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We help translate a process requirement into the appropriate
                  equipment configuration — considering flow, pressure,
                  purity, dew point, operating conditions and integration with
                  existing infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          REAL INSTALLATION — LARGE VISUAL BLOCK
      ====================================================== */}
      <section className="bg-[#07140e]">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
            <img
              src="/images/about-installation.jpg"
              alt="Industrial gas generation system installation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#07140e]/35" />
          </div>

          <div className="flex items-center text-white px-7 md:px-12 lg:px-16 py-16">
            <div className="max-w-xl">
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Complete Utility Systems
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                From individual equipment
                <span className="block text-green-400">
                  to complete installations.
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed mt-7">
                Industrial utility projects rarely consist of one machine.
                Generation, treatment, storage, pressure control, distribution
                and process demand must operate together.
              </p>

              <p className="text-gray-400 leading-relaxed mt-5">
                TechnoCore can support equipment selection and system
                configuration for stand-alone equipment, skid-mounted
                packages and containerised solutions.
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-5 mt-9 pt-7 border-t border-white/15">
                <div>
                  <p className="font-bold text-green-400">SKID</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Integrated packages
                  </p>
                </div>

                <div>
                  <p className="font-bold text-green-400">BOX</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Container solutions
                  </p>
                </div>

                <div>
                  <p className="font-bold text-green-400">LOCAL</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Ireland support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4 ENGINEERING PRINCIPLES WITH ICONS
      ====================================================== */}
      <section className="bg-[#d0dad2] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                How We Work
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Engineering before
                <span className="block text-green-700">
                  equipment selection.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6 max-w-md">
                We begin with the process and operating conditions, then define
                the equipment needed to support them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 border-t border-l border-[#a7b6aa]">
              <div className="p-7 border-r border-b border-[#a7b6aa]">
                <div className="text-green-700">
                  <SelectionIcon />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Technical Selection
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Flow, pressure, purity, dew point, duty cycle and operating
                  environment determine equipment selection.
                </p>
              </div>

              <div className="p-7 border-r border-b border-[#a7b6aa]">
                <div className="text-green-700">
                  <EngineeringIcon />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Engineering
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  We evaluate how the utility system should perform under real
                  production conditions.
                </p>
              </div>

              <div className="p-7 border-r border-b border-[#a7b6aa]">
                <div className="text-green-700">
                  <SystemIcon />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  System Integration
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Components are considered as part of one operating system,
                  from source equipment to final point of use.
                </p>
              </div>

              <div className="p-7 border-r border-b border-[#a7b6aa]">
                <div className="text-green-700">
                  <SupportIcon />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Technical Support
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Practical communication and technical assistance for
                  industrial customers in Ireland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          REAL ENGINEERING EQUIPMENT
      ====================================================== */}
      <section className="bg-[#edf2ee] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                Industrial Equipment
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Designed for
                <span className="block text-green-700">
                  continuous industrial duty.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                TechnoCore works with industrial equipment designed for
                production environments where reliability, air quality,
                efficiency and maintainability matter.
              </p>

              <p className="text-gray-700 leading-relaxed mt-5">
                Solutions can include compressed-air treatment, adsorption
                drying, filtration, on-site gas generation, storage,
                instrumentation and process cooling.
              </p>

              <Link
                href="/products"
                className="inline-flex mt-8 text-green-700 font-bold hover:text-green-800"
              >
                Explore our equipment →
              </Link>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="/images/about-engineering.jpg"
                alt="Industrial compressed air and gas treatment equipment"
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="absolute left-0 bottom-0 bg-[#082218] text-white px-6 py-5 max-w-[300px]">
                <p className="text-green-400 text-xs font-bold tracking-[0.16em] uppercase">
                  Industrial Systems
                </p>

                <p className="font-semibold mt-2">
                  Engineered around the actual process requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
    INDUSTRIES — BIG IMAGE STRIP
====================================================== */}
<section className="relative overflow-hidden bg-black text-white">
  <img
    src="/images/about-industries.jpg"
    alt="Industries supported by TechnoCore engineering solutions"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="max-w-5xl bg-black/25 backdrop-blur-[1px] p-6 md:p-8">
      <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
        Industries
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-3xl leading-tight">
        One utility platform.
        <span className="block text-green-400">
          Many industrial processes.
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0 mt-12">
        {[
          "Manufacturing",
          "Food & Beverage",
          "Pharmaceutical",
          "Electronics",
          "Laser Cutting",
          "Metal Processing",
          "Water Treatment",
          "Industrial Coating",
        ].map((industry, index) => (
          <div
            key={industry}
            className="flex items-center gap-4 py-5 border-b border-white/20"
          >
            <span className="text-green-400 text-xs font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-semibold">
              {industry}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ======================================================
          TECHNOLOGY / OMEGA AIR
      ====================================================== */}
      <section className="bg-[#e4ebe5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/images/about-filtration.jpg"
                alt="Industrial compressed air filtration elements"
                className="w-full aspect-[16/11] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                Technology & Equipment
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Quality equipment.
                <span className="block text-green-700">
                  Correctly applied.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                TechnoCore supplies equipment from the OMEGA AIR portfolio for
                compressed-air treatment, filtration, gas generation and
                process cooling applications.
              </p>

              <p className="text-gray-700 leading-relaxed mt-5">
                Our role is to connect the available technology with the
                actual process requirement and help define an appropriate
                system configuration.
              </p>

              <div className="grid grid-cols-2 gap-px bg-[#b2c0b5] mt-8">
                {[
                  "Air Treatment",
                  "Nitrogen",
                  "Oxygen",
                  "Process Cooling",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#d7e0d9] px-5 py-4 font-semibold text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHY TECHNOCORE — SIMPLE, NO REPETITION
      ====================================================== */}
      <section className="bg-[#07140e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Why TechnoCore
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Local engineering.
                <span className="block text-green-400">
                  Complete system thinking.
                </span>
              </h2>
            </div>

            <div className="text-xl md:text-2xl leading-relaxed text-gray-300 max-w-2xl">
              <p>
                We aim to make industrial utility projects easier to specify,
                understand and implement.
              </p>

              <p className="mt-7 text-gray-400 text-base leading-relaxed">
                Instead of looking at equipment in isolation, we consider how
                the complete system should perform — technically,
                operationally and commercially.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Ireland based",
                  "Engineering support",
                  "System integration",
                  "Industrial focus",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/15 px-4 py-2 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          COMPANY DETAILS
      ====================================================== */}
      <section className="bg-[#d1dbd3] text-black">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                Company
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Company
                </p>

                <p className="font-bold mt-2">
                  TechnoCore Limited
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  CRO
                </p>

                <p className="font-bold mt-2">
                  791230
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Location
                </p>

                <p className="font-bold mt-2">
                  Co. Wicklow, Ireland
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Email
                </p>

                <a
                  href="mailto:sales@technocore.ie"
                  className="font-bold mt-2 inline-block hover:text-green-700"
                >
                  sales@technocore.ie
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#0b6b45] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div className="max-w-4xl">
              <p className="text-green-100 text-xs font-bold tracking-[0.2em] uppercase">
                Start a Project
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Tell us what your process needs.
              </h2>

              <p className="text-green-50 leading-relaxed mt-6 max-w-2xl">
                Share your required flow, pressure, gas purity, dew point,
                cooling load or existing installation details and we can help
                define the appropriate solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-white text-[#0b6b45] font-bold px-9 py-4 hover:bg-green-50 transition whitespace-nowrap"
            >
              Contact TechnoCore →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}