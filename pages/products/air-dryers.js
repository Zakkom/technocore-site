import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      d="M5 12.5L9.2 16.5L19 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M14 7L19 12L14 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>
          Compressed Air Dryers Ireland | Refrigerated & Adsorption | TechnoCore
        </title>

        <meta
          name="description"
          content="Industrial compressed air dryers in Ireland. Refrigerated, adsorption, heat-regenerated and high-pressure dryer solutions for manufacturing and process applications."
        />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/air-dryers"
        />

        <meta
          property="og:title"
          content="Compressed Air Dryers Ireland | TechnoCore"
        />

        <meta
          property="og:description"
          content="Refrigerated, adsorption, heat-regenerated and specialist compressed air dryer solutions engineered for industrial applications in Ireland."
        />

        <meta
          property="og:url"
          content="https://www.technocore.ie/products/air-dryers"
        />

        <meta
          property="og:image"
          content="https://www.technocore.ie/images/air-dryers-hero.jpg"
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[700px] lg:min-h-[760px] overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/air-dryers-hero.jpg"
            alt="Industrial compressed air drying system"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/72 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="max-w-[720px]">
            <p className="text-green-400 text-xs md:text-sm font-bold tracking-[0.23em] uppercase">
              Compressed Air Treatment • Ireland
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.96] mt-5">
              Industrial
              <span className="block text-green-400">
                Compressed Air Dryers
              </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-7 max-w-2xl">
              Refrigerated, adsorption and heat-regenerated air drying
              solutions engineered around your flow, pressure, dew point and
              process requirements.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9 max-w-2xl">
              {[
                "Moisture Control",
                "Equipment Protection",
                "Stable Air Quality",
                "Reduced Downtime",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/15 bg-black/25 backdrop-blur-sm px-4 py-4"
                >
                  <div className="text-green-400 mb-2">
                    <CheckIcon />
                  </div>

                  <p className="text-white text-sm font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black px-7 py-4 font-semibold transition"
              >
                Discuss Your Requirements
                <ArrowIcon />
              </Link>

              <Link
                href="/compressed-air-treatment-ireland"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-green-400 text-white px-7 py-4 font-semibold transition"
              >
                Air Treatment Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f4f6f5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                Compressed Air Drying
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Moisture control starts with the correct dryer.
              </h2>
            </div>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Atmospheric air contains water vapour. During compression and
                cooling, this moisture can condense inside pipework, receivers,
                filters and production equipment.
              </p>

              <p>
                Correct compressed air drying helps reduce corrosion,
                contamination, pneumatic equipment problems and unplanned
                maintenance while supporting stable air quality throughout the
                process.
              </p>

              <p>
                TechnoCore supplies and sizes refrigerated, adsorption,
                heat-regenerated and specialist compressed air dryers for
                industrial systems across Ireland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REFRIGERATED */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                Refrigerated Air Drying
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Refrigerated Compressed Air Dryers
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Refrigerated dryers are widely used for general industrial
                compressed air systems where very low dew points are not
                required.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                The compressed air is cooled so that water vapour condenses and
                can be separated from the air stream before the air continues
                downstream.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  ["Pressure Dew Point", "typically around +3°C"],
                  ["Industrial Duty", "general compressed air systems"],
                  ["Applications", "manufacturing & process air"],
                  ["System Integration", "filters, drains & separation"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-gray-200 bg-[#f7f8f7] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold">
                      {label}
                    </p>

                    <p className="text-black font-semibold mt-2">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg">
                  Typical applications
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-4 text-gray-700">
                  {[
                    "General manufacturing",
                    "Pneumatic equipment",
                    "Packaging",
                    "Engineering facilities",
                    "Automotive production",
                    "General process air",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-600 mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden bg-[#edf1ef]">
                <img
                  src="/images/dryer-refrigerated.jpg"
                  alt="Industrial refrigerated compressed air dryers"
                  className="w-full h-[430px] md:h-[560px] object-cover"
                />
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Refrigerated dryer solutions are selected according to flow,
                operating pressure, inlet temperature and ambient conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADSORPTION */}
      <section
        id="desiccant"
        className="bg-[#0d1412] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden border border-white/10">
                <img
                  src="/images/dryer-adsorption.jpg"
                  alt="Adsorption desiccant compressed air dryer"
                  className="w-full h-[430px] md:h-[580px] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Low Dew Point Solutions
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Adsorption &amp; Desiccant Air Dryers
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mt-6">
                Adsorption dryers are used where significantly lower moisture
                levels are required than can normally be achieved with a
                refrigerated dryer.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Desiccant material adsorbs water vapour from the compressed air.
                Depending on the selected technology and operating conditions,
                systems can be designed for pressure dew points such as
                −20°C or −40°C and below.
              </p>

              <div className="mt-8 border-l-2 border-green-400 pl-6">
                <p className="text-green-400 font-semibold text-lg">
                  Typical dryer families
                </p>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  Heatless adsorption, modular desiccant, high-pressure and
                  specialist low-dew-point solutions can be selected according
                  to the required air quality and process.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  "Pharmaceutical",
                  "Medical devices",
                  "Food & beverage",
                  "Electronics",
                  "Instrumentation air",
                  "Critical process air",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-green-400">
                      <CheckIcon />
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEAT REGENERATED */}
      <section className="bg-[#e9eeeb] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                Heat Regenerated Drying
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Heat-Regenerated Adsorption Dryers
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Heat-regenerated dryers are designed for applications where low
                dew points are required together with efficient operation at
                larger compressed air flows.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Different regeneration and cooling methods can be selected to
                reduce compressed air losses and match the energy requirements
                of the installation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["Ambient-air cooled", "Regeneration without continuous purge-air demand."],
                  ["Purge-air cooled", "Uses compressed air during the cooling phase."],
                  ["Closed-loop cooled", "Designed to minimise compressed-air loss."],
                  ["Heat of compression", "Uses available compressor heat where suitable."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="border-t border-gray-300 pt-4"
                  >
                    <h3 className="font-semibold text-lg">
                      {title}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src="/images/dryer-heat-regenerated.jpg"
                alt="Heat regenerated industrial adsorption dryer"
                className="w-full h-[460px] md:h-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST / HIGH PRESSURE */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Specialist Drying
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                High-Pressure &amp; Specialist Air Dryers
              </h2>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                TechnoCore can also provide drying solutions for compressed air
                systems operating above standard industrial pressures or where
                specialist air quality is required.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Selection depends on operating pressure, flow, inlet
                temperature, required pressure dew point and the final
                application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Dryer Selection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Which Air Dryer Do I Need?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Correct dryer selection depends on more than compressor power.
              Actual operating conditions must be considered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              {
                value: "+3°C",
                title: "Refrigerated",
                text: "General industrial compressed air and manufacturing applications.",
              },
              {
                value: "−40°C",
                title: "Adsorption",
                text: "Low dew point applications and critical process air.",
              },
              {
                value: "Large Flow",
                title: "Heat Regenerated",
                text: "Higher-capacity systems where energy optimisation is important.",
              },
              {
                value: "High Pressure",
                title: "Specialist",
                text: "Applications operating above standard compressed-air pressure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 bg-[#f6f7f6] p-7"
              >
                <p className="text-green-600 font-bold text-2xl">
                  {item.value}
                </p>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            <div className="bg-[#0d1412] text-white p-8">
              <h3 className="text-green-400 font-semibold text-xl">
                Information we normally need
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">
                {[
                  "Compressor or required air flow",
                  "Operating pressure",
                  "Maximum inlet air temperature",
                  "Ambient temperature",
                  "Required pressure dew point",
                  "Application or process",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-green-400 mt-0.5">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 p-8">
              <h3 className="text-green-600 font-semibold text-xl">
                TechnoCore can help with
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700">
                {[
                  "Dryer sizing and selection",
                  "Pre-filtration and final filtration",
                  "Condensate drains",
                  "Oil / water separation",
                  "Pressure-drop considerations",
                  "Complete air treatment packages",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-green-600 mt-0.5">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="bg-[#111a17] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
              Complete System Engineering
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Complete Compressed Air Treatment Systems
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              A dryer is only one part of compressed-air quality management.
              TechnoCore can combine drying, filtration, condensate separation,
              automatic drains and downstream air treatment into a complete
              engineered package.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "Compressor",
              "Separator",
              "Dryer",
              "Filtration",
              "Receiver",
              "Process",
            ].map((step, index, arr) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <div className="border border-green-500/40 bg-black/30 px-5 py-3 text-sm font-semibold">
                  {step}
                </div>

                {index < arr.length - 1 && (
                  <span className="text-green-400 hidden sm:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/compressed-air-treatment-ireland"
              className="inline-flex items-center gap-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-7 py-4 font-semibold transition"
            >
              View Compressed Air Treatment Solutions
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#eef2ef] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Applications
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Industries We Support
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-300 mt-10 border border-gray-300">
            {[
              "Manufacturing",
              "Pharmaceutical",
              "Medical Devices",
              "Food & Beverage",
              "Automotive",
              "Engineering",
              "Packaging",
              "Process Industry",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white px-5 py-7 text-center font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Compressed Air Dryer FAQ
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200">
            {[
              {
                q: "What is the difference between a refrigerated and adsorption air dryer?",
                a: "Refrigerated dryers are normally used for general industrial compressed air. Adsorption dryers are used when much lower moisture levels and lower pressure dew points are required.",
              },
              {
                q: "What pressure dew point do I need?",
                a: "The required pressure dew point depends on the process, environmental conditions and required compressed air quality. General manufacturing and critical process applications can have very different requirements.",
              },
              {
                q: "Can TechnoCore size an air dryer for an existing compressor?",
                a: "Yes. Provide the compressor flow, working pressure, temperatures and application, and we can help select an appropriate dryer and associated air treatment equipment.",
              },
              {
                q: "Do I need filters before and after the dryer?",
                a: "Filtration requirements depend on the dryer technology and the required air quality. Pre-filtration and final filtration are often important parts of a complete compressed air treatment system.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="py-7"
              >
                <h3 className="text-xl font-semibold">
                  {item.q}
                </h3>

                <p className="text-gray-600 leading-relaxed mt-3">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="border border-green-500/70 px-7 py-12 md:px-12 md:py-16 text-center">
            <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
              Engineering Support
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Need Help Selecting a Compressed Air Dryer?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
              Send us your compressor flow, operating pressure, temperatures,
              required dew point and application. TechnoCore can help select the
              dryer and associated filtration for your system.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-green-500 hover:bg-green-400 text-black px-8 py-4 font-semibold transition"
            >
              Request a Quotation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}