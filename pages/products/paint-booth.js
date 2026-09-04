// pages/products/paint-booth.js

import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function PaintBoothPage() {
  const benefits = [
    {
      title: "Water Removal",
      text: "Remove liquid water and condensate before the air reaches the painting process.",
    },
    {
      title: "Oil Aerosol Removal",
      text: "Fine filtration helps reduce oil aerosols carried by compressed air.",
    },
    {
      title: "Fine Filtration",
      text: "High-quality configurations provide filtration down to 0.01 μm.",
    },
    {
      title: "Finish Protection",
      text: "Cleaner compressed air helps protect paint quality and process consistency.",
    },
  ];

  const applications = [
    {
      number: "01",
      title: "Paint Booths",
      text: "Compressed-air preparation for professional spray painting and refinishing.",
    },
    {
      number: "02",
      title: "Automotive Refinishing",
      text: "Clean, regulated air for body shops and vehicle refinishing operations.",
    },
    {
      number: "03",
      title: "Industrial Coating",
      text: "Air treatment for industrial painting and coating processes.",
    },
    {
      number: "04",
      title: "Metal Finishing",
      text: "Air preparation for spray finishing of fabricated and machined components.",
    },
    {
      number: "05",
      title: "Furniture & Joinery",
      text: "Cleaner compressed air for lacquer, coating and finishing applications.",
    },
    {
      number: "06",
      title: "General Industry",
      text: "Point-of-use filtration where clean compressed air is required.",
    },
  ];

  const faq = [
    {
      question: "Why does compressed air need filtration for spray painting?",
      answer:
        "Compressed air can contain liquid water, oil aerosols and solid particles. If these contaminants reach the spray gun they can affect coating quality and contribute to paint defects. Correct air treatment helps provide cleaner and more consistent air at the point of use.",
    },
    {
      question: "What is the maximum flow rate of the PP system?",
      answer:
        "The PP-207C, PP-207, PP-307C and PP-307 configurations are rated up to 78 Nm³/h, or approximately 46 scfm, at 7 barg and 20°C according to the supplied technical data.",
    },
    {
      question: "What is the maximum operating pressure?",
      answer:
        "The PP series shown on this page has a maximum operating pressure of 16 bar.",
    },
    {
      question: "What filtration level is available?",
      answer:
        "Depending on configuration, the PP system can include filtration down to 0.01 μm. PP-307 configurations can also include an activated carbon stage for higher-quality air requirements.",
    },
    {
      question: "Do I still need an air dryer?",
      answer:
        "For high-quality compressed air, a suitable upstream air dryer is recommended as part of the overall air-treatment system. The correct configuration depends on compressor conditions, required air quality and the painting process.",
    },
    {
      question: "Can TechnoCore size the complete system?",
      answer:
        "Yes. TechnoCore can review compressor capacity, air demand, operating pressure, dryer requirements, filtration and point-of-use requirements to select an appropriate air-treatment configuration.",
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
          Paint Booth Air Filtration Ireland | Compressed Air for Spray Painting
          | TechnoCore
        </title>

        <meta
          name="description"
          content="Paint booth compressed air filtration in Ireland. PP series air preparation systems for spray painting with water, oil aerosol and fine particle removal, pressure regulation and activated carbon options."
        />

        <meta
          name="keywords"
          content="paint booth air filtration Ireland, compressed air for spray painting, paint booth air preparation, spray painting air filter, compressed air filtration Ireland, automotive paint booth filtration, PP series filtration"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/paint-booth"
        />

        <meta
          property="og:title"
          content="Paint Booth Air Filtration Ireland | TechnoCore"
        />

        <meta
          property="og:description"
          content="Compressed air preparation and filtration for paint booths, automotive refinishing and industrial coating applications."
        />

        <meta
          property="og:url"
          content="https://www.technocore.ie/products/paint-booth"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.technocore.ie/images/paint-booth-hero.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#050706]">
        <div className="absolute inset-0">
          <img
            src="/images/paint-booth-hero.png"
            alt="Compressed air filtration system for industrial spray painting"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-[690px]">
            <p className="text-green-400 text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Compressed Air for Spray Painting
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.98] mt-5">
              Clean Air.
              <span className="block text-green-400">
                Perfect Finish.
              </span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mt-7 max-w-xl">
              Professional compressed-air filtration for paint booths,
              automotive refinishing and industrial coating. Remove water,
              oil aerosols and fine particles before they reach your spray gun.
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-5 mt-8">
              <div>
                <div className="text-green-400 font-bold text-lg">
                  78 Nm³/h
                </div>
                <div className="text-gray-400 text-xs">
                  flow at 7 barg
                </div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-green-400 font-bold text-lg">
                  16 bar
                </div>
                <div className="text-gray-400 text-xs">
                  max. operating pressure
                </div>
              </div>

              <div className="hidden sm:block w-px bg-white/20" />

              <div>
                <div className="text-white font-bold text-lg">
                  0.01 μm
                </div>
                <div className="text-gray-400 text-xs">
                  fine filtration option
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
                className={`px-7 py-10 ${
                  index !== 0 ? "lg:border-l border-[#bdc9c0]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-green-700 flex items-center justify-center text-green-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-5 h-5"
                    >
                      <path d="M12 3C9 7 6 10 6 14a6 6 0 0 0 12 0c0-4-3-7-6-11Z" />
                      <path d="m9.5 14 1.7 1.7L15 12" />
                    </svg>
                  </div>

                  <h2 className="font-bold text-lg">
                    {item.title}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="bg-[#edf2ee] text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[520px]">
          <div className="flex items-center px-6 py-16 lg:pr-16">
            <div className="max-w-xl">
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                PP Series
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Clean compressed air
                <span className="block text-green-700">
                  at the point of use.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                The PP paint filtration system is designed for purification
                of compressed air from solid particles, liquid contaminants
                and partially gaseous components before the air reaches
                sensitive painting equipment.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Modular filter combinations allow the air quality to be
                configured around the compressor system, upstream dryer and
                required painting process.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Point-of-use filtration</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Final air treatment close to the spray application.
                  </p>
                </div>

                <div className="border-l-2 border-green-700 pl-4">
                  <p className="font-bold">Pressure control</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Integrated regulator and two quick couplings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex items-center justify-center p-8 lg:p-14">
            <img
              src="/images/paint-booth.jpg"
              alt="PP series compressed air filtration system"
              className="max-h-[430px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section
        id="technical"
        className="bg-[#032015] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            Technical Data
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            PP Series
            <span className="block text-green-400">
              performance & configuration.
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mt-5 max-w-2xl">
            Compact point-of-use air preparation for painting and other
            applications requiring controlled compressed-air quality.
          </p>

          {/* KEY DATA */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#6d877a] mt-10">
            {[
              ["78", "Maximum flow", "Nm³/h at 7 barg, 20°C"],
              ["16", "Operating pressure", "bar maximum"],
              ["½″", "Connection", "pipe size"],
              ["1.5–65°C", "Temperature range", "operating"],
            ].map(([value, title, note]) => (
              <div
                key={title}
                className="bg-[#eef3ef] text-black p-7"
              >
                <p className="text-green-700 text-3xl md:text-4xl font-bold">
                  {value}
                </p>

                <p className="font-bold mt-3">{title}</p>

                <p className="text-gray-600 text-sm mt-1">{note}</p>
              </div>
            ))}
          </div>

          {/* CONFIGURATION */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 mt-5">
            <div className="bg-[#d8dfda] text-black p-7 md:p-8">
              <p className="text-green-700 text-xs font-bold tracking-[0.18em] uppercase">
                Standard Features
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Ready for the paint line.
              </h3>

              <div className="mt-6 border-t border-[#a8b4ab]">
                {[
                  ["Flow rate", "78 Nm³/h"],
                  ["Equivalent flow", "46 scfm"],
                  ["Connection", '½"'],
                  ["Maximum pressure", "16 bar"],
                  ["Operating temperature", "1.5–65°C"],
                  ["Standard colour", "RAL 7021"],
                  ["Pressure regulator", "Included"],
                  ["Quick couplings", "2"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-6 py-3 border-b border-[#a8b4ab]"
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
                Available Models
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Select the required air quality.
              </h3>

              <div className="mt-7 space-y-4">
                <div className="border border-white/10 p-5">
                  <div className="flex justify-between gap-4">
                    <h4 className="font-bold text-green-400">
                      PP-207C
                    </h4>
                    <span className="text-xs text-gray-400">
                      Dryer system
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    Separator + microfilter configuration for high-quality
                    compressed air when used with suitable upstream air
                    treatment.
                  </p>
                </div>

                <div className="border border-white/10 p-5">
                  <div className="flex justify-between gap-4">
                    <h4 className="font-bold text-green-400">
                      PP-207
                    </h4>
                    <span className="text-xs text-gray-400">
                      Basic quality
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    Microfilter and fine filtration configuration for
                    point-of-use air treatment.
                  </p>
                </div>

                <div className="border border-white/10 p-5">
                  <div className="flex justify-between gap-4">
                    <h4 className="font-bold text-green-400">
                      PP-307C
                    </h4>
                    <span className="text-xs text-gray-400">
                      Dryer system
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    Multi-stage filtration configuration for high-quality
                    compressed-air requirements.
                  </p>
                </div>

                <div className="border border-green-500/40 bg-green-950/20 p-5">
                  <div className="flex justify-between gap-4">
                    <h4 className="font-bold text-green-400">
                      PP-307
                    </h4>
                    <span className="text-xs text-green-300">
                      Activated carbon
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    Fine filtration with an activated carbon stage for
                    demanding compressed-air applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            Flow rating shown at 7 barg and 20°C. Actual capacity varies with
            operating pressure and installation conditions.
          </p>
        </div>
      </section>

      {/* SYSTEM DESIGN */}
      <section className="bg-[#d6ded8] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
            Complete Air Preparation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Clean air starts
            <span className="text-green-700"> before the spray gun.</span>
          </h2>

          <p className="text-gray-700 max-w-2xl mt-5 leading-relaxed">
            Paint quality depends on the complete compressed-air system.
            TechnoCore can combine compression, drying, filtration and
            point-of-use treatment around the actual air demand.
          </p>

          <div className="grid md:grid-cols-5 mt-10 border-y border-[#aab8ae]">
            {[
              ["01", "Compressor", "Compressed-air supply"],
              ["02", "Air Dryer", "Moisture control"],
              ["03", "Pre-filtration", "Bulk contamination removal"],
              ["04", "PP System", "Final point-of-use filtration"],
              ["05", "Spray Gun", "Clean regulated air"],
            ].map(([number, title, text], index) => (
              <div
                key={title}
                className={`py-7 md:px-5 ${
                  index !== 0 ? "md:border-l border-[#aab8ae]" : ""
                }`}
              >
                <span className="text-green-700 text-xs font-bold">
                  {number}
                </span>

                <h3 className="font-bold mt-3">{title}</h3>

                <p className="text-gray-600 text-sm mt-2">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#edf2ee] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
            Applications
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Built for professional finishing.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#bcc8bf] mt-9">
            {applications.map((item) => (
              <div
                key={item.title}
                className="bg-[#e5ebe6] p-7 md:p-8"
              >
                <span className="text-green-700 text-xs font-bold">
                  {item.number}
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
      <section className="bg-[#c7d1c9] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">
                TechnoCore Engineering
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                More than
                <span className="block text-green-700">
                  just a filter.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-5">
                We can review the complete compressed-air supply to the paint
                booth — compressor capacity, moisture removal, filtration,
                pressure control and distribution — and select the appropriate
                equipment for the application.
              </p>

              <Link
                href="/contact"
                className="inline-flex mt-7 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 transition"
              >
                Discuss Your Air System →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["01", "Assessment", "Air demand and existing system review."],
                ["02", "Selection", "Dryer and filtration configuration."],
                ["03", "Installation", "Integration with the compressed-air system."],
                ["04", "Support", "Technical support for Irish customers."],
              ].map(([number, title, text]) => (
                <div
                  key={title}
                  className="border-t-2 border-green-700 py-5"
                >
                  <span className="text-green-700 text-xs font-bold">
                    {number}
                  </span>

                  <h3 className="font-bold text-lg mt-3">
                    {title}
                  </h3>

                  <p className="text-gray-700 text-sm mt-2">
                    {text}
                  </p>
                </div>
              ))}
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
            Paint booth air filtration.
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
      <section className="bg-[#0b6b45] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-green-100 text-xs font-bold tracking-[0.2em] uppercase">
                Paint Booth Air Quality
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Improve the air behind your finish.
              </h2>

              <p className="text-green-50 mt-5 max-w-2xl leading-relaxed">
                Send us your compressor capacity, operating pressure and paint
                booth air demand. TechnoCore can help select the appropriate
                dryer and filtration configuration.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-white text-[#0b6b45] font-bold px-9 py-4 hover:bg-green-50 transition whitespace-nowrap"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

