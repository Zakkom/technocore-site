import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function FiltrationPage() {
  const filtrationTypes = [
{
  title: "Water Separators",
  text: "Remove bulk liquid water and condensate from compressed air systems, helping protect downstream filters, dryers and equipment.",
},
    {
      title: "Coalescing Filters",
      text: "Remove liquid water, oil aerosols and fine contamination from compressed air systems.",
    },
    {
      title: "Particulate Filters",
      text: "High-efficiency filtration for dust, solid particles and downstream desiccant protection.",
    },
    {
      title: "Activated Carbon Filters",
      text: "Reduce oil vapour, hydrocarbon vapours and odours where higher air purity is required.",
    },
    {
      title: "Sterile & Process Filters",
      text: "Filtration solutions for food, beverage, pharmaceutical, medical and critical process applications.",
    },
    {
      title: "High-Pressure Filters",
      text: "Filtration solutions for compressed air and gas systems operating above standard industrial pressures.",
    },
  ];

  const applications = [
  {
    name: "Manufacturing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21V10l6 3V9l6 4V7l6 3v11H3Z" />
        <path d="M7 21v-4h3v4M15 17h2M15 14h2" />
      </svg>
    ),
  },
  {
    name: "Pharmaceutical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8.5 3.5a4.95 4.95 0 0 1 7 7l-5 5a4.95 4.95 0 0 1-7-7l5-5Z" />
        <path d="m6 11 7 7" />
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11" />
        <path d="M17 3c-2 2-3 5-3 8 0 2 1 3 3 3v7M17 3v18" />
      </svg>
    ),
  },
  {
    name: "Medical Devices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        <path d="M7 12h3l1.5-3 2 6 1.5-3h2" />
      </svg>
    ),
  },
  {
    name: "Automotive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m5 11 2-5h10l2 5" />
        <path d="M3 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3v-5Z" />
        <path d="M5 17v2M19 17v2M6 14h2M16 14h2" />
      </svg>
    ),
  },
  {
    name: "Electronics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3" />
        <rect x="10" y="10" width="4" height="4" />
      </svg>
    ),
  },
  {
    name: "Process Industry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
        <path d="M7 16h10M9 13h6" />
      </svg>
    ),
  },
  {
    name: "Instrumentation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M6 15a7 7 0 0 1 12 0M12 12l4-4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
];

  return (
    <SiteLayout>
      <Head>
        <title>
          Compressed Air Filters Ireland | Industrial Filtration | TechnoCore
        </title>

        <meta
          name="description"
          content="Compressed air filters and replacement filter elements in Ireland. Coalescing, particulate, activated carbon, sterile and high-pressure filtration for industrial air and gas systems."
        />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/filtration"
        />
      </Head>

      <main className="bg-black text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-gray-800">

          <div className="absolute inset-0">
            <img
              src="/images/filtration-elements.png"
              alt="Industrial compressed air filter elements"
              className="w-full h-full object-cover object-center opacity-45"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">

            <div className="max-w-3xl">

              <p className="text-sm text-gray-400 mb-5">
                Home &nbsp;›&nbsp; Products &nbsp;›&nbsp; Filtration
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Industrial Air &amp; Gas{" "}
                <span className="text-green-400">Filtration</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-green-400 font-semibold mt-5">
                Cleaner air. Better performance. Lower operating costs.
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed mt-6 max-w-2xl">
                TechnoCore supplies industrial compressed air and gas filtration
                solutions for applications across Ireland — including coalescing,
                particulate, activated-carbon, sterile and specialist filtration.
              </p>

              <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
                We can help select the correct filtration grade for your pressure,
                flow, air quality requirement and application, including systems
                designed around ISO 8573-1 compressed air quality classes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <Link
                  href="/contact"
                  className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold text-center"
                >
                  Request Filtration Solution
                </Link>

                <a
                  href="#replacement-elements"
                  className="border border-gray-500 hover:border-green-400 hover:text-green-400 px-6 py-3 rounded font-semibold text-center"
                >
                  Need a Replacement Element?
                </a>

              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-sm text-gray-300">

                <span>✓ Technical selection support</span>
                <span>✓ Ireland-wide supply</span>
                <span>✓ Industrial applications</span>

              </div>

            </div>

          </div>
        </section>


        {/* WHY FILTRATION */}
        <section className="bg-[#071014] border-b border-gray-800">

          <div className="max-w-7xl mx-auto px-6 py-14">

            <h2 className="text-3xl font-bold text-center">
              Why Compressed Air Filtration Matters
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-10">

              <div className="text-center p-6 border border-gray-800 rounded-xl bg-black/30">

                <div className="text-green-400 text-4xl mb-4">
                  ◇
                </div>

                <h3 className="font-semibold text-lg">
                  Protect Equipment
                </h3>

                <p className="text-gray-400 mt-3">
                  Reduce contamination reaching valves, cylinders, machinery and
                  sensitive downstream equipment.
                </p>

              </div>


              <div className="text-center p-6 border border-gray-800 rounded-xl bg-black/30">

                <div className="text-green-400 text-4xl mb-4">
                  ✓
                </div>

                <h3 className="font-semibold text-lg">
                  Improve Product Quality
                </h3>

                <p className="text-gray-400 mt-3">
                  Stable compressed air quality can help reduce process contamination
                  and product defects.
                </p>

              </div>


              <div className="text-center p-6 border border-gray-800 rounded-xl bg-black/30">

                <div className="text-green-400 text-4xl mb-4">
                  ISO
                </div>

                <h3 className="font-semibold text-lg">
                  Meet Air Quality Requirements
                </h3>

                <p className="text-gray-400 mt-3">
                  Filtration can be configured around the required ISO 8573-1
                  compressed air quality class.
                </p>

              </div>


              <div className="text-center p-6 border border-gray-800 rounded-xl bg-black/30">

                <div className="text-green-400 text-4xl mb-4">
                  €
                </div>

                <h3 className="font-semibold text-lg">
                  Reduce Operating Costs
                </h3>

                <p className="text-gray-400 mt-3">
                  Correct filtration helps reduce maintenance, equipment damage and
                  unplanned production interruptions.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* FILTRATION RANGE */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
              Filtration Solutions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Compressed Air &amp; Gas Filtration Range
            </h2>

            <p className="text-gray-400 mt-5">
              Different contaminants require different filtration technologies.
              TechnoCore can help build the correct filtration train for your
              compressed air or gas application.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {filtrationTypes.map((item) => (
              <div
                key={item.title}
                className="group bg-[#081115] border border-gray-800 rounded-xl overflow-hidden hover:border-green-500 transition"
              >

                <div className="h-2 bg-green-500" />

                <div className="p-7">

                  <h3 className="text-xl font-semibold text-green-400">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* TECHNICAL IMAGE SECTION */}
        <section className="bg-[#071014] border-y border-gray-800">

          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
                Correct Filter Selection
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Pressure Drop Matters
              </h2>

              <p className="text-gray-300 mt-6 leading-relaxed">
                A compressed air filter must remove contamination efficiently
                without creating unnecessary pressure loss.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                As filter elements become contaminated, differential pressure can
                increase. Excessive pressure drop forces the compressor system to
                work harder and can increase energy consumption.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Correct sizing, suitable filtration grade and timely element
                replacement are important for both air quality and energy
                efficiency.
              </p>

            </div>


            <div className="rounded-xl overflow-hidden border border-gray-700">

              <img
                src="/images/filter-indicator.png"
                alt="Compressed air filter differential pressure indicator"
                className="w-full h-auto"
              />

            </div>

          </div>

        </section>
{/* TECHNICIAN / SERVICE VISUAL */}
<section className="relative h-[320px] md:h-[430px] overflow-hidden border-y border-gray-800">

  <img
    src="/images/filtration-technician.png"
    alt="Technician replacing a compressed air filter element"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

  <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

    <div className="max-w-xl">

      <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
        Maintenance &amp; Replacement
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-3">
        Keep Your Compressed Air System Performing
      </h2>

      <p className="text-gray-200 mt-5 leading-relaxed">
        Correct filter selection and timely element replacement help maintain
        air quality, control pressure drop and protect downstream equipment.
      </p>

    </div>

  </div>

</section>

        {/* REPLACEMENT ELEMENTS */}
        <section
          id="replacement-elements"
          className="max-w-7xl mx-auto px-6 py-16"
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="rounded-xl overflow-hidden border border-gray-800">

              <img
                src="/images/alternative-filter-elements.png"
                alt="Alternative compressed air replacement filter elements"
                className="w-full h-auto"
              />

            </div>


            <div>

              <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
                Replacement Elements
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Need a Replacement Filter Element?
              </h2>

              <p className="text-gray-300 mt-6 leading-relaxed">
                You may not need to replace the complete filter housing.
                TechnoCore can help identify suitable replacement filter elements
                for existing compressed air filtration systems.
              </p>

              <div className="mt-6 p-6 border border-green-500/40 bg-green-500/5 rounded-xl">

                <h3 className="text-xl font-semibold text-green-400">
                  Send us:
                </h3>

                <ul className="text-gray-300 mt-4 space-y-3">

                  <li>✓ Filter manufacturer</li>
                  <li>✓ Filter housing model</li>
                  <li>✓ Element or part number</li>
                  <li>✓ Photo of the existing filter / nameplate</li>
                  <li>✓ Quantity required</li>

                </ul>

              </div>

              <p className="text-gray-400 mt-5">
                If the exact element number is unknown, send us photographs of
                the housing and identification labels and we will help check the
                available options.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-7 bg-green-500 hover:bg-green-600 text-black px-7 py-3 rounded font-semibold"
              >
                Request Replacement Element
              </Link>

            </div>

          </div>

        </section>


        {/* FILTER TRAIN */}
        <section className="bg-[#071014] border-y border-gray-800">

          <div className="max-w-6xl mx-auto px-6 py-16 text-center">

            <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
              Complete Air Treatment
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Filtration Works as Part of a Complete System
            </h2>

            <p className="text-gray-300 mt-6 max-w-4xl mx-auto leading-relaxed">
              Industrial compressed air treatment often requires more than one
              filtration stage. Depending on the application, the system may
              combine water separation, coalescing filtration, particulate
              filtration, drying and activated-carbon treatment.
            </p>


            <div className="flex flex-wrap justify-center items-center gap-3 mt-10 text-sm md:text-base">

              <div className="border border-gray-700 rounded px-5 py-3">
                Compressor
              </div>

              <span className="text-green-400">→</span>

              <div className="border border-gray-700 rounded px-5 py-3">
                Water Separation
              </div>

              <span className="text-green-400">→</span>

              <div className="border border-gray-700 rounded px-5 py-3">
                Coalescing Filter
              </div>

              <span className="text-green-400">→</span>

              <div className="border border-gray-700 rounded px-5 py-3">
                Air Dryer
              </div>

              <span className="text-green-400">→</span>

              <div className="border border-gray-700 rounded px-5 py-3">
                Final Filtration
              </div>

            </div>


            <Link
              href="/compressed-air-treatment-ireland"
              className="inline-block mt-9 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded font-semibold"
            >
              View Complete Air Treatment Solutions
            </Link>

          </div>

        </section>


        {/* APPLICATIONS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center">
            Typical Applications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

            {applications.map((application) => (
  <div
    key={application.name}
    className="group border border-gray-800 bg-[#081115] rounded-xl p-6 text-center hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="mx-auto w-12 h-12 text-green-400 group-hover:text-green-300 transition-colors">
      {application.icon}
    </div>

    <p className="text-gray-200 font-semibold mt-4">
      {application.name}
    </p>
  </div>
))}

          </div>

        </section>


        {/* SIZING */}
        <section className="bg-[#071014] border-y border-gray-800">

          <div className="max-w-6xl mx-auto px-6 py-16">

            <div className="grid lg:grid-cols-2 gap-10">

              <div>

                <h2 className="text-3xl font-bold">
                  Selecting the Correct Filter
                </h2>

                <p className="text-gray-300 mt-5">
                  Correct filtration selection depends on the operating
                  conditions and required air quality.
                </p>

              </div>


              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  "Air flow",
                  "Operating pressure",
                  "Pipe connection size",
                  "Required air quality",
                  "Contaminant type",
                  "Application",
                  "Temperature",
                  "Existing filtration",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-gray-700 rounded-lg px-4 py-3 text-gray-300"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-6 py-16">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Compressed Air Filter FAQ
          </h2>

          <div className="space-y-8 mt-10">

            <div>
              <h3 className="text-xl font-semibold">
                What contaminants can compressed air filters remove?
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Depending on the filtration grade and technology, filters can
                reduce solid particles, liquid water, oil aerosols, oil vapour
                and other contaminants from compressed air.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                What is a coalescing compressed air filter?
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                A coalescing filter is designed to capture fine liquid aerosols
                such as water and oil and combine them into larger droplets that
                can be drained from the filter housing.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                When should a compressed air filter element be replaced?
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Replacement intervals depend on the filter manufacturer,
                operating hours, contamination level and differential pressure.
                Elements should be maintained according to the applicable
                manufacturer's recommendations.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                Can TechnoCore find an alternative replacement element?
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Yes. Send us the manufacturer, model and part number of your
                existing filter element. If available, we can check suitable
                replacement options for your compressed air system.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold">
                Do I need several filters in one compressed air system?
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Often yes. Different filtration stages may be required before
                and after the dryer depending on the dryer technology, air
                quality requirement and final application.
              </p>
            </div>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="px-6 pb-16">

          <div className="max-w-6xl mx-auto border border-green-500 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent p-8 md:p-12">

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">

              <div>

                <p className="text-green-400 font-semibold">
                  TechnoCore Ireland
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Need Help With Compressed Air Filtration?
                </h2>

                <p className="text-gray-300 mt-4 max-w-3xl">
                  Send us your air flow, pressure, required air quality or the
                  part number of your existing filter element. We can help
                  identify the appropriate filtration solution.
                </p>

              </div>


              <Link
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-black px-7 py-4 rounded font-semibold whitespace-nowrap text-center"
              >
                Contact TechnoCore
              </Link>

            </div>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}