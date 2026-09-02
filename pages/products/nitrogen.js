import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

const applications = [
  {
    name: "Laser Cutting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20 14 10M14 10l-1-5 6 6-5-1Z" />
        <path d="M4 4h5M4 8h3M16 16l4 4M15 20h5" />
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
    name: "Pharmaceutical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8.5 3.5a4.95 4.95 0 0 1 7 7l-5 5a4.95 4.95 0 0 1-7-7l5-5Z" />
        <path d="m6 11 7 7" />
      </svg>
    ),
  },
  {
    name: "Electronics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3" />
        <path d="M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3" />
      </svg>
    ),
  },
  {
    name: "Chemical & Process",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    name: "Metal Processing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20h16M6 20V9l4-3v14M14 20V4h4v16" />
        <path d="M7 12h2M7 15h2M15 8h2M15 11h2" />
      </svg>
    ),
  },
  {
    name: "Inerting & Blanketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="3" width="14" height="18" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: "Laboratories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3h6M10 3v7l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
];

export default function NitrogenPage() {
  return (
    <SiteLayout>
      <Head>
        <title>
          Nitrogen Generators Ireland | On-Site N2 Systems | TechnoCore
        </title>

        <meta
          name="description"
          content="On-site nitrogen generation systems in Ireland. PSA and membrane nitrogen generators, complete skid and containerised N2 systems for laser cutting, food, pharmaceutical, electronics and industrial applications."
        />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/nitrogen"
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden border-b border-gray-800">
        <img
          src="/images/nitrogen-hero.png"
          alt="Industrial on-site nitrogen generation system"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <p className="text-green-400 font-semibold uppercase tracking-[0.2em] text-sm">
              On-Site Nitrogen Generation
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Nitrogen Generators
              <span className="block text-green-400">
                for Industry in Ireland
              </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Generate nitrogen directly at your facility and reduce dependence
              on cylinders, bundles and bulk liquid nitrogen deliveries.
              TechnoCore supplies engineered PSA and membrane nitrogen systems
              for industrial applications across Ireland.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-green-500 hover:bg-green-400 text-black px-7 py-3 rounded-lg font-semibold transition"
              >
                Request Nitrogen System Quote
              </Link>

              <a
                href="tel:+353874386157"
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-7 py-3 rounded-lg font-semibold transition"
              >
                Call +353 87 438 6157
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              Industrial Nitrogen Supply
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Produce Nitrogen Where You Need It
            </h2>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              An on-site nitrogen generator separates nitrogen from compressed
              air and provides a continuous supply at the required flow,
              pressure and purity. The system can be engineered around your
              actual process demand rather than relying on repeated gas
              deliveries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                number: "01",
                title: "Reduce Delivered Gas Costs",
                text: "Reduce dependence on cylinders, bundles and external nitrogen deliveries by producing gas directly on site.",
              },
              {
                number: "02",
                title: "Continuous Availability",
                text: "Maintain nitrogen production according to your process demand without managing frequent cylinder replacement.",
              },
              {
                number: "03",
                title: "Engineered for Your Process",
                text: "Flow, purity, pressure, storage and treatment equipment are selected around the actual application.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-gray-800 rounded-2xl p-7 bg-[#081115] hover:border-green-500 transition"
              >
                <div className="text-green-400 text-3xl font-bold">
                  {item.number}
                </div>

                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSA VS MEMBRANE IMAGE */}
      <section className="relative h-[360px] md:h-[520px] overflow-hidden border-y border-gray-800">
        <img
          src="/images/nitrogen-psa-membrane.png"
          alt="PSA and membrane nitrogen generation technologies"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-black/20" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              Nitrogen Generation Technologies
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              PSA or Membrane?
            </h2>

            <p className="text-gray-200 mt-5 text-lg leading-relaxed">
              The correct technology depends on nitrogen purity, required flow,
              operating pressure and the application itself.
            </p>
          </div>
        </div>
      </section>

      {/* PSA VS MEMBRANE DETAILS */}
      <section className="bg-[#05090b] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-2xl p-8 bg-black hover:border-green-500 transition">
              <div className="inline-flex border border-green-500/40 bg-green-500/10 text-green-400 rounded-full px-4 py-1 text-sm font-semibold">
                PSA Technology
              </div>

              <h3 className="text-2xl font-bold mt-5">
                PSA Nitrogen Generators
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Pressure Swing Adsorption systems use carbon molecular sieve
                technology to separate oxygen from compressed air and produce
                high-purity nitrogen.
              </p>

              <ul className="text-gray-300 mt-6 space-y-3">
                <li>✓ High nitrogen purity capability</li>
                <li>✓ Suitable for continuous industrial production</li>
                <li>✓ Automatic operation</li>
                <li>✓ Modular system design</li>
                <li>✓ Suitable for demanding process applications</li>
              </ul>

              <p className="text-green-400 font-semibold mt-7">
                Typical applications
              </p>

              <p className="text-gray-400 mt-2">
                Laser cutting, food packaging, pharmaceutical, electronics,
                inerting, chemical and process industries.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-8 bg-black hover:border-green-500 transition">
              <div className="inline-flex border border-green-500/40 bg-green-500/10 text-green-400 rounded-full px-4 py-1 text-sm font-semibold">
                Membrane Technology
              </div>

              <h3 className="text-2xl font-bold mt-5">
                Membrane Nitrogen Generators
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Membrane systems separate gases according to their different
                permeation rates through hollow-fibre membranes and can provide
                a compact and simple nitrogen supply.
              </p>

              <ul className="text-gray-300 mt-6 space-y-3">
                <li>✓ Compact design</li>
                <li>✓ No moving parts in the membrane module</li>
                <li>✓ Fast start-up</li>
                <li>✓ Suitable for moderate purity requirements</li>
                <li>✓ Simple continuous operation</li>
              </ul>

              <p className="text-green-400 font-semibold mt-7">
                Typical applications
              </p>

              <p className="text-gray-400 mt-2">
                Inerting, blanketing, storage protection and industrial
                applications where ultra-high nitrogen purity is not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE SYSTEM IMAGE */}
      <section className="relative h-[380px] md:h-[540px] overflow-hidden border-y border-gray-800">
        <img
          src="/images/nitrogen-complete-system.png"
          alt="Complete industrial nitrogen generation system with air treatment and storage"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              Complete Nitrogen Systems
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              More Than Just a Nitrogen Generator
            </h2>

            <p className="text-gray-200 mt-5 text-lg leading-relaxed">
              A reliable installation combines compressed air preparation,
              nitrogen generation, storage, pressure control and monitoring as
              one engineered system.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPLY OPTIONS */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              System Configuration
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              From Standalone Generator to Complete Station
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              TechnoCore can supply individual nitrogen-generation equipment or
              complete packaged systems depending on the project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-12">
            {/* Standalone */}
            <div className="border border-gray-800 rounded-2xl overflow-hidden bg-[#081115] hover:border-green-500 transition">
              <div className="h-64 bg-white overflow-hidden">
                <img
                  src="/images/n2-generator.jpg"
                  alt="Standalone industrial nitrogen generator"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-7">
                <p className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Option 01
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Standalone Generator
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Nitrogen generator integrated into an existing compressed air
                  system when suitable air quality, capacity and pressure are
                  already available.
                </p>
              </div>
            </div>

            {/* Skid */}
            <div className="border border-gray-800 rounded-2xl overflow-hidden bg-[#081115] hover:border-green-500 transition">
              <div className="h-64 bg-white overflow-hidden flex items-center justify-center">
  <img
    src="/images/nitrogen-skid.jpg"
    alt="Complete skid mounted nitrogen generation system"
    className="w-full h-full object-contain p-4"
  />
</div>

              <div className="p-7">
                <p className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Option 02
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Complete N₂ Skid
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Integrated package including compressed air preparation,
                  nitrogen generation, storage and associated control equipment
                  on a compact engineered skid.
                </p>
              </div>
            </div>

            {/* BOX */}
            <div className="border border-gray-800 rounded-2xl overflow-hidden bg-[#081115] hover:border-green-500 transition">
              <div className="h-64 bg-white overflow-hidden">
                <img
                  src="/images/n2-box-unit.jpg"
                  alt="Containerised outdoor nitrogen generation station"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-7">
                <p className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Option 03
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Containerised N₂ System
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Complete packaged nitrogen station for projects where the
                  equipment needs to be located externally or supplied as a
                  ready-to-install modular solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="bg-[#05090b] py-20 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
            Complete System Design
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            From Compressed Air to Nitrogen Supply
          </h2>

          <div className="grid md:grid-cols-5 gap-4 mt-12">
            {[
              "Air Compressor",
              "Dryer & Filtration",
              "Nitrogen Generator",
              "N₂ Receiver",
              "Process Supply",
            ].map((item, index) => (
              <div key={item} className="relative">
                <div className="border border-gray-800 bg-black rounded-xl p-5 h-full">
                  <div className="text-green-400 font-bold text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-gray-200 font-semibold mt-3">{item}</p>
                </div>

                {index < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-green-400 z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed">
            Depending on the application, the system can also include pressure
            boosters, additional receivers, gas analysis, dew point monitoring,
            flow measurement and cylinder filling equipment.
          </p>
        </div>
      </section>

      {/* APPLICATIONS IMAGE */}
      <section className="relative h-[360px] md:h-[520px] overflow-hidden border-y border-gray-800">
        <img
          src="/images/nitrogen-applications.png"
          alt="Industrial applications for on-site nitrogen generation"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              Industrial Applications
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Nitrogen Across Industry
            </h2>

            <p className="text-gray-200 mt-5 text-lg leading-relaxed">
              On-site nitrogen generation can support production, inerting,
              packaging, processing and protection across a wide range of
              industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION CARDS */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
        </div>
      </section>

      {/* SELECTION */}
      <section className="bg-[#05090b] py-20 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
                System Sizing
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                What We Need to Size Your Nitrogen System
              </h2>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Nitrogen generation should be selected from the actual process
                requirement. Providing a few basic parameters allows us to
                evaluate generator size and system configuration.
              </p>
            </div>

            <div className="border border-gray-800 bg-black rounded-2xl p-8">
              <div className="space-y-5">
                {[
                  ["Required flow", "Nm³/h, SCFH or current consumption"],
                  ["Nitrogen purity", "Required N₂ concentration"],
                  ["Outlet pressure", "Required process pressure"],
                  ["Application", "How nitrogen is being used"],
                  [
                    "Operating profile",
                    "Continuous, intermittent or peak demand",
                  ],
                  [
                    "Current supply",
                    "Cylinders, bundles, liquid nitrogen or existing generator",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-green-400 font-semibold">{title}</p>
                    <p className="text-gray-400 mt-1">{text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-semibold transition"
              >
                Send Your Nitrogen Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
                TechnoCore Engineering
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Designed Around the Complete Process
              </h2>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                The nitrogen generator is only one part of the installation.
                Compressor capacity, inlet air quality, pressure dew point,
                filtration, storage, pressure stability and process demand all
                affect system performance.
              </p>

              <p>
                TechnoCore can help evaluate the complete system and supply the
                required compressed air treatment and nitrogen generation
                equipment as one engineered solution.
              </p>

              <Link
                href="/compressed-air-treatment-ireland"
                className="inline-block text-green-400 hover:text-green-300 font-semibold mt-2"
              >
                Explore Compressed Air Treatment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#05090b] py-20 px-6 border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
              FAQ
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Nitrogen Generator Questions
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {[
              {
                q: "What is an on-site nitrogen generator?",
                a: "An on-site nitrogen generator separates nitrogen from compressed air so nitrogen can be produced directly at your facility instead of being supplied entirely by cylinders or bulk deliveries.",
              },
              {
                q: "What nitrogen purity do I need?",
                a: "The required purity depends on the application. Higher purity is not automatically better because increasing purity can affect generator capacity and energy consumption. The system should be sized around the actual process requirement.",
              },
              {
                q: "What is the difference between PSA and membrane nitrogen generation?",
                a: "PSA technology is commonly selected for applications requiring higher nitrogen purity, while membrane systems can be attractive for applications requiring moderate purity with a compact and simple configuration.",
              },
              {
                q: "Can a nitrogen generator replace cylinders?",
                a: "In many applications, yes. The technical and financial suitability depends on nitrogen consumption, operating hours, required purity, pressure and current gas supply costs.",
              },
              {
                q: "Can TechnoCore supply the compressor and air treatment equipment as well?",
                a: "Yes. A nitrogen system can be configured with compressed air generation, dryers, filtration, receivers, nitrogen generation, monitoring and other required equipment.",
              },
              {
                q: "Can the system be installed outdoors?",
                a: "Where required, nitrogen generation equipment can be supplied as a packaged or containerised solution suitable for an external installation, subject to project requirements.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="border border-gray-800 bg-black rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.q}</h3>

                <p className="text-gray-400 mt-3 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-5xl mx-auto border border-green-500/40 bg-[#081115] rounded-3xl p-8 md:p-12 text-center">
          <p className="text-green-400 uppercase tracking-wider font-semibold text-sm">
            Nitrogen Generation Ireland
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Looking to Reduce Your Nitrogen Supply Costs?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-5 leading-relaxed">
            Send us your current nitrogen consumption, required purity, flow
            and pressure. We can evaluate the application and propose a suitable
            on-site nitrogen generation system.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-black px-7 py-3 rounded-lg font-semibold transition"
            >
              Request a Nitrogen System Quote
            </Link>

            <a
              href="mailto:sales@technocore.ie"
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-7 py-3 rounded-lg font-semibold transition"
            >
              sales@technocore.ie
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}