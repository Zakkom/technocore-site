import React from "react";
import Link from "next/link";
import Image from "next/image";
import CookieConsent from "./CookieConsent";

export default function TechnoCoreLanding() {
  const solutions = [
    {
      title: "Compressed Air Treatment",
      description:
        "Drying, filtration, condensate management and air quality solutions designed around your process requirements.",
      href: "/compressed-air-treatment-ireland",
      image: "/images/rdp-dryer.jpg",
      tag: "AIR QUALITY",
      contain: true,
    },
    {
      title: "Nitrogen Generation",
      description:
        "On-site PSA nitrogen generation systems with purity up to 99.999%, from standalone units to complete skid and containerised packages.",
      href: "/products/nitrogen",
      image: "/images/n2-generator.jpg",
      tag: "ON-SITE N₂",
      contain: true,
    },
    {
      title: "Oxygen Generation",
      description:
        "Industrial PSA oxygen generation solutions for reliable on-site gas supply and reduced dependence on delivered cylinders.",
      href: "/products/oxygen",
      image: "/images/o2-skid.jpg",
      tag: "ON-SITE O₂",
      contain: false,
    },
    {
      title: "Industrial Filtration",
      description:
        "Coalescing, particulate, activated carbon and specialist filtration for compressed air and industrial gases.",
      href: "/products/filtration",
      image: "/images/filtration-units.jpg",
      tag: "FILTRATION",
      contain: true,
    },
    {
      title: "Industrial Cooling",
      description:
        "Process chillers and cooling systems for industrial equipment, manufacturing and production applications.",
      href: "/products/chillers",
      image: "/images/chiller-pci.jpg",
      tag: "PROCESS COOLING",
      contain: false,
    },
    {
      title: "Turnkey Systems",
      description:
        "Integrated compressed air and gas generation packages including treatment, storage, controls and system integration.",
      href: "/contact",
      image: "/images/n2-box-unit.jpg",
      tag: "ENGINEERED SYSTEMS",
      contain: false,
    },
  ];

  const engineeringSteps = [
    {
      number: "01",
      title: "Assess",
      text: "Understand process demand, pressure, purity and air quality requirements.",
    },
    {
      number: "02",
      title: "Design",
      text: "Configure the system around operating conditions and future capacity.",
    },
    {
      number: "03",
      title: "Supply",
      text: "Provide selected equipment and the complete required system package.",
    },
    {
      number: "04",
      title: "Install",
      text: "Coordinate installation and integration into existing infrastructure.",
    },
    {
      number: "05",
      title: "Commission",
      text: "Verify operation, controls, performance and system parameters.",
    },
    {
      number: "06",
      title: "Support",
      text: "Provide practical technical support throughout system operation.",
    },
  ];

  const industries = [
    {
      number: "01",
      title: "Pharmaceutical",
      lines: [
        "Clean compressed air",
        "Process gases",
        "Critical air quality",
      ],
    },
    {
      number: "02",
      title: "Medical Devices",
      lines: [
        "Controlled manufacturing",
        "Clean utilities",
        "Process gases",
      ],
    },
    {
      number: "03",
      title: "Food & Beverage",
      lines: [
        "Production air",
        "Packaging nitrogen",
        "Dry & filtered utilities",
      ],
    },
    {
      number: "04",
      title: "Manufacturing",
      lines: [
        "Automation utilities",
        "Production air",
        "Reliable plant supply",
      ],
    },
    {
      number: "05",
      title: "Laser Cutting",
      lines: [
        "High-purity nitrogen",
        "Cutting applications",
        "Stable gas supply",
      ],
    },
    {
      number: "06",
      title: "Electronics",
      lines: [
        "Sensitive production",
        "Clean process air",
        "Inert gas systems",
      ],
    },
    {
      number: "07",
      title: "Automotive",
      lines: [
        "Compressed air treatment",
        "Nitrogen applications",
        "Production utilities",
      ],
    },
    {
      number: "08",
      title: "Process Industry",
      lines: [
        "Engineered utility packages",
        "Gas systems",
        "Demanding applications",
      ],
    },
  ];

  const engineeredSystems = [
    {
      title: "Air Quality",
      text: "Pressure · Dew Point · ISO 8573-1",
    },
    {
      title: "Gas Generation",
      text: "Nitrogen · Oxygen · Purity",
    },
    {
      title: "Integration",
      text: "Skid · Container · Controls",
    },
    {
      title: "Lifecycle",
      text: "Design · Commissioning · Support",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050806] text-white overflow-hidden">
      <style jsx global>{`
        html,
        body,
        #__next {
          margin: 0;
          background: #050806;
        }
      `}</style>

      {/* HEADER */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group overflow-visible">
            <div className="relative w-[108px] h-[58px] shrink-0 overflow-visible -ml-8">
  <Image
    src="/logo.png"
    alt="TechnoCore"
    width={130}
    height={130}
    priority
    className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[112px] h-[112px] max-w-none object-contain"
  />
</div>

            <div className="leading-none">
              <div className="text-[25px] font-bold tracking-tight">
                TechnoCore
              </div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-1.5">
                Industrial Engineering
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#solutions" className="hover:text-green-400 transition-colors">
              Solutions
            </a>

            <Link
              href="/compressed-air-treatment-ireland"
              className="hover:text-green-400 transition-colors"
            >
              Air Treatment
            </Link>

            <a href="#engineering" className="hover:text-green-400 transition-colors">
              Engineering
            </a>

            <a href="#industries" className="hover:text-green-400 transition-colors">
              Industries
            </a>

            <Link href="/about" className="hover:text-green-400 transition-colors">
              About
            </Link>

            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>

          <a
            href="#enquiry"
            className="hidden sm:inline-flex bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Discuss Your Project
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[760px] lg:min-h-[800px] flex items-center pt-[76px]">
        <div className="absolute inset-0">
          <img
            src="/images/nitrogen-hero.png"
            alt="Industrial compressed air and gas engineering system"
            className="w-full h-full object-cover object-center brightness-[1.15]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050806]/95 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl py-20">
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-green-400" />
              <span className="text-green-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                Industrial Engineering · Ireland
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold leading-[1.04] tracking-tight">
              Industrial Compressed
              <span className="block">Air</span>
              <span className="block text-green-400">
                & Gas Systems
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Engineering, supply and integration of compressed air treatment,
              nitrogen and oxygen generation, filtration, cooling and complete
              industrial utility systems across Ireland.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#enquiry"
                className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 text-black font-semibold px-7 py-4 rounded-md transition"
              >
                Discuss Your Project
                <span className="ml-3">→</span>
              </a>

              <a
                href="#solutions"
                className="inline-flex justify-center items-center border border-white/30 hover:border-green-400 bg-black/20 text-white px-7 py-4 rounded-md transition"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-14 pt-7 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {[
                ["Compressed Air", "Treatment & quality"],
                ["Nitrogen", "On-site generation"],
                ["Oxygen", "PSA systems"],
                ["Turnkey", "Integrated systems"],
              ].map(([title, text]) => (
                <div key={title}>
                  <div className="text-white font-semibold">{title}</div>
                  <div className="text-gray-400 text-sm mt-1">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#d2d9d3] text-black">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          <div className="flex items-center">
            <div className="max-w-xl ml-auto px-8 lg:px-16 py-20 lg:py-24">
              <p className="text-green-700 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                TechnoCore
              </p>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.06]">
                More than equipment.
                <span className="block text-green-700 mt-1">
                  Engineered around your process.
                </span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-7">
                Industrial utilities are rarely a single piece of equipment.
                Pressure, flow, dew point, filtration level, gas purity,
                installation conditions and operating cost all influence the
                final system.
              </p>

              <p className="text-gray-600 leading-relaxed mt-5">
                TechnoCore works with industrial customers to define the
                requirement, select suitable equipment and develop practical
                compressed air and gas solutions for real production environments.
              </p>

              <Link
                href="/about"
                className="inline-flex mt-7 text-green-700 hover:text-green-600 font-bold"
              >
                About TechnoCore
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src="/images/nitrogen-complete-system.png"
              alt="Complete industrial utility system"
              className="absolute inset-0 w-full h-full object-cover brightness-[1.08]"
            />

            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#d2d9d3]/88 via-[#d2d9d3]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="bg-[#07100b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-14">
            <div className="max-w-3xl">
              <p className="text-green-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                Our Solutions
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Industrial air and gas systems
              </h2>

              <p className="text-gray-400 text-lg mt-5 leading-relaxed">
                From individual treatment components to complete generation and
                utility packages, systems are selected around the requirements
                of the application.
              </p>
            </div>

            <Link
              href="/products"
              className="text-green-400 font-semibold hover:text-green-300"
            >
              View all solutions →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group overflow-hidden border border-white/15 bg-[#0b130e]"
              >
                <div className="relative h-[280px] bg-[#dce2dd] overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={
                      solution.contain
                        ? "w-full h-full object-contain p-6 transition duration-700 group-hover:scale-[1.03]"
                        : "w-full h-full object-cover brightness-[1.05] transition duration-700 group-hover:scale-105"
                    }
                  />
                </div>

                <div className="p-7 min-h-[220px]">
                  <span className="text-green-400 text-xs font-semibold tracking-[0.18em]">
                    {solution.tag}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {solution.title}
                  </h3>

                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-6 text-white font-semibold group-hover:text-green-400 transition">
                    Explore solution
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" className="bg-[#c6cec7] text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-12 items-start">
            <div>
              <p className="text-green-700 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Engineering Approach
              </p>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                From requirement
                <span className="block text-green-700">
                  to operating system
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#aeb8b0] border border-[#aeb8b0]">
              {engineeringSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#d4dbd5] p-7 min-h-[220px]"
                >
                  <div className="text-green-700 text-xs font-bold tracking-[0.18em]">
                    {step.number}
                  </div>

                  <div className="w-10 h-px bg-green-700 mt-5" />

                  <h3 className="text-xl font-bold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-[#030504]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-green-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Industries
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Built for industrial applications
            </h2>

            <p className="text-gray-400 text-lg mt-5">
              Different industries require different levels of air quality,
              gas purity, redundancy and system performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-14">
            {industries.map((industry) => (
              <div
                key={industry.number}
                className="bg-[#07100b] p-8 min-h-[245px] hover:bg-[#0b1710] transition"
              >
                <div className="text-green-500 text-xs font-bold tracking-[0.2em]">
                  {industry.number}
                </div>

                <div className="w-10 h-px bg-green-500 mt-5" />

                <h3 className="text-xl font-semibold mt-7">
                  {industry.title}
                </h3>

                <div className="mt-5 space-y-2 text-gray-400 text-sm">
                  {industry.lines.map((line) => (
                    <div key={line}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TECHNОCORE */}
      <section className="bg-[#cbd4cc] text-black">
        <div className="grid lg:grid-cols-2 min-h-[560px]">
          <div className="relative min-h-[430px] lg:min-h-full">
            <img
              src="/images/top-bg.jpg"
              alt="Industrial plant and engineered utility system"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.08] saturate-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-[#cbd4cc]/88" />
          </div>

          <div className="flex items-center">
            <div className="max-w-xl px-8 lg:px-16 py-20">
              <p className="text-green-800 font-bold text-sm uppercase tracking-[0.2em]">
                Why TechnoCore
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-[1.07]">
                Technical selection.
                <span className="block text-green-700">
                  Practical engineering.
                </span>
              </h2>

              <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                We focus on building dependable industrial air and gas systems
                rather than simply supplying individual components.
              </p>

              <div className="mt-9 space-y-6">
                {[
                  [
                    "Engineering Selection",
                    "Equipment selected around application, demand and operating requirements.",
                  ],
                  [
                    "System Integration",
                    "From individual components to complete integrated utility packages.",
                  ],
                  [
                    "Ireland-Based Support",
                    "Technical support for industrial customers and projects across Ireland.",
                  ],
                  [
                    "Practical Solutions",
                    "Solutions focused on reliability, efficiency and real production conditions.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full border border-green-700 flex items-center justify-center text-green-700 font-bold">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {title}
                      </h3>

                      <p className="text-gray-600 mt-1 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERED SYSTEMS - BLACK BLOCK */}
      <section className="bg-[#030504] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-start">
            <div>
              <p className="text-green-400 font-semibold text-sm uppercase tracking-[0.2em]">
                Engineered Systems
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
                Built around the
                <span className="block text-green-400">
                  complete process.
                </span>
              </h2>

              <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-xl">
                Reliable industrial utilities depend on more than equipment
                selection. Performance comes from matching the complete system
                to the actual process requirement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {engineeredSystems.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-[#07100b] p-8 min-h-[180px]"
                >
                  <div className="text-green-500 text-xs font-bold tracking-[0.2em]">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL IMAGE STRIP */}
      <section className="relative h-[240px] overflow-hidden">
        <img
          src="/images/bottom-bg.jpg"
          alt="Industrial compressed air and gas installation"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.62] contrast-[1.08]"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div>
            <p className="text-green-400 text-xs font-bold uppercase tracking-[0.22em]">
              Integrated Utility Systems
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mt-3 text-white">
              Complete systems.
              <span className="text-green-400">
                {" "}One engineered approach.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* TECHNICAL ENQUIRY - LIGHT */}
      <section id="enquiry" className="bg-[#c7d0c8] text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20">
            <div>
              <p className="text-green-800 text-sm font-semibold uppercase tracking-[0.2em]">
                Technical Enquiry
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
                Tell us about
                <span className="block text-green-700">
                  your application.
                </span>
              </h2>

              <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                Send us your process requirements and we can review the
                application and identify suitable equipment or system options.
              </p>

              <div className="mt-10 space-y-4 text-gray-700">
                <a
                  href="mailto:sales@technocore.ie"
                  className="block hover:text-green-700"
                >
                  sales@technocore.ie
                </a>

                <a
                  href="tel:+353874386157"
                  className="block hover:text-green-700"
                >
                  +353 87 438 6157
                </a>

                <div>
                  Co. Wicklow · Ireland
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/sales@technocore.ie"
              method="POST"
              className="bg-[#dbe1dc] border border-black/10 p-7 lg:p-9"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="hidden"
                name="_next"
                value="https://www.technocore.ie/thanks"
              />

              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                readOnly
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  name="name"
                  required
                  placeholder="Name *"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <input
                  name="company"
                  placeholder="Company"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email *"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <div className="sm:col-span-2">
                  <select
                    name="interest"
                    required
                    className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-gray-700 outline-none focus:border-green-700"
                  >
                    <option value="">
                      What do you need? *
                    </option>
                    <option>Compressed Air Treatment</option>
                    <option>Nitrogen Generation</option>
                    <option>Oxygen Generation</option>
                    <option>Industrial Filtration</option>
                    <option>Air Dryer</option>
                    <option>Industrial Chiller</option>
                    <option>Turnkey System</option>
                    <option>Other / Technical Enquiry</option>
                  </select>
                </div>

                <input
                  name="flow_capacity"
                  placeholder="Flow / Capacity"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <input
                  name="operating_pressure"
                  placeholder="Operating Pressure"
                  className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                />

                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Application / Requirements *"
                    className="w-full bg-[#edf1ee] border border-black/15 px-4 py-3.5 text-black placeholder:text-gray-500 outline-none focus:border-green-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-green-600 hover:bg-green-500 text-black font-semibold px-8 py-3.5 transition"
              >
                Send Technical Enquiry →
              </button>

              <p className="text-xs text-gray-600 mt-5">
                By submitting this form, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5 overflow-visible">
                <div className="relative w-[110px] h-[58px] shrink-0 overflow-visible -ml-8">
  <Image
    src="/logo.png"
    alt="TechnoCore"
    width={132}
    height={132}
    className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[114px] h-[114px] max-w-none object-contain"
  />
</div>

                <div>
                  <div className="font-bold text-[27px]">
                    TechnoCore
                  </div>

                  <div className="text-[10px] tracking-[0.23em] uppercase text-gray-400 mt-1">
                    Industrial Engineering
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mt-6 max-w-sm leading-relaxed">
                Industrial compressed air, gas generation, filtration,
                cooling and engineered utility systems in Ireland.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">
                Solutions
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">
                <Link
                  href="/compressed-air-treatment-ireland"
                  className="block hover:text-green-400"
                >
                  Compressed Air
                </Link>

                <Link
                  href="/products/nitrogen"
                  className="block hover:text-green-400"
                >
                  Nitrogen
                </Link>

                <Link
                  href="/products/oxygen"
                  className="block hover:text-green-400"
                >
                  Oxygen
                </Link>

                <Link
                  href="/products/filtration"
                  className="block hover:text-green-400"
                >
                  Filtration
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">
                Company
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">
                <Link
                  href="/about"
                  className="block hover:text-green-400"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block hover:text-green-400"
                >
                  Contact
                </Link>

                <Link
                  href="/privacy-policy"
                  className="block hover:text-green-400"
                >
                  Privacy Policy
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new Event("technocore:open-cookie-settings")
                    )
                  }
                  className="block hover:text-green-400"
                >
                  Cookie Settings
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">
                Contact
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">
                <a
                  href="mailto:sales@technocore.ie"
                  className="block hover:text-green-400"
                >
                  sales@technocore.ie
                </a>

                <a
                  href="tel:+353874386157"
                  className="block hover:text-green-400"
                >
                  +353 87 438 6157
                </a>

                <div>
                  Co. Wicklow, Ireland
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} TechnoCore Limited. All rights reserved.
            </p>

            <p>
              Industrial Engineering · Ireland
            </p>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </main>
  );
}