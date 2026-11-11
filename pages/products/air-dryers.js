import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import IrelandCoverage from "../../components/IrelandCoverage";
import {
  CheckIcon,
  ArrowIcon,
  QuoteButton,
  BulletList,
  breadcrumbLd,
  faqLd,
} from "../../components/DryerPageParts";

const PATH = "/products/air-dryers";

// FAQ content drives BOTH the on-page FAQ block and the FAQPage structured data.
const faqs = [
  {
    q: "Which air dryer do I need for my air compressor?",
    a: "The dryer must match your compressor flow, working pressure and inlet temperature, and the pressure dew point your process needs. Refrigerated dryers (+3°C) suit general industrial air, desiccant dryers (−40°C) suit low dew point applications, and membrane dryers suit small point-of-use flows.",
  },
  {
    q: "What is the difference between a refrigerated and adsorption air dryer?",
    a: "Refrigerated dryers are normally used for general industrial compressed air. Adsorption dryers are used when much lower moisture levels and lower pressure dew points are required.",
  },
  {
    q: "What is a membrane air dryer?",
    a: "A membrane air dryer removes water vapour by passing compressed air through hollow-fibre membrane modules that allow moisture to permeate out of the air stream. Membrane dryers have no moving parts, require little maintenance and can be a compact option for point-of-use or moderate dew point requirements.",
  },
  {
    q: "What pressure dew point do I need for a compressed air dryer?",
    a: "The required pressure dew point depends on the process, environmental conditions and required compressed air quality. General manufacturing and critical process applications can have very different requirements.",
  },
  {
    q: "Can TechnoCore size an air dryer for an existing compressor?",
    a: "Yes. Provide the compressor flow, working pressure, temperatures and application, and we can help select an appropriate dryer and associated air treatment equipment.",
  },
  {
    q: "Can I buy a refrigerated or desiccant air dryer in Ireland?",
    a: "Yes. TechnoCore supplies compressed air dryers for customers across Ireland. Share your compressor flow, operating pressure, inlet and ambient temperatures, and intended application to request a suitable quotation.",
  },
  {
    q: "Do I need filters before and after the dryer?",
    a: "Filtration requirements depend on the dryer technology and the required air quality. Pre-filtration and final filtration are often important parts of a complete compressed air treatment system.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Compressed Air Dryers",
  name: "Industrial Compressed Air Dryers",
  description:
    "Refrigerated, adsorption, membrane, heat-regenerated and high-pressure compressed air dryer solutions, engineered and sized around flow, pressure and required pressure dew point.",
  provider: { "@type": "Organization", name: "TechnoCore", url: "https://www.technocore.ie" },
  areaServed: { "@type": "Country", name: "Ireland" },
  url: `https://www.technocore.ie${PATH}`,
};

const hubBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.technocore.ie/" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.technocore.ie/products" },
    { "@type": "ListItem", position: 3, name: "Air Dryers", item: `https://www.technocore.ie${PATH}` },
  ],
};

const technologies = [
  {
    value: "+3°C",
    title: "Refrigerated",
    text: "General industrial compressed air and manufacturing applications.",
    href: "/products/air-dryers/refrigerated",
  },
  {
    value: "−40°C",
    title: "Desiccant / Adsorption",
    text: "Low dew point applications and critical process air, heatless and heat-regenerated.",
    href: "/products/air-dryers/adsorption",
  },
  {
    value: "Compact",
    title: "Membrane",
    text: "Point-of-use and instrumentation air with moderate dew point needs.",
    href: "#membrane",
  },
  {
    value: "Large Flow",
    title: "Heat Regenerated",
    text: "Higher-capacity systems where energy optimisation is important.",
    href: "/products/air-dryers/adsorption",
  },
  {
    value: "High Pressure",
    title: "Specialist",
    text: "Applications operating above standard compressed-air pressure.",
    href: "/contact",
  },
];

const comparisonRows = [
  {
    tech: "Refrigerated (RDP 20–13200)",
    href: "/products/air-dryers/refrigerated",
    cells: [
      "+3°C",
      "20 – 13,200 m³/h",
      "16 barg (RDP 20–1900), 14 barg (RDP 2600–13200)",
      "Non-cycling, air-cooled, R513a refrigerant",
    ],
  },
  {
    tech: "Adsorption, heatless (A-DRY 06–200)",
    href: "/products/air-dryers/adsorption",
    cells: [
      "−40°C (−25°C or −70°C on request)",
      "6 – 200 m³/h",
      "4 – 16 barg",
      "Power consumption < 35 W",
    ],
  },
  {
    tech: "Adsorption, heat-regenerated (HPR-DRY 400–3600 BP)",
    href: "/products/air-dryers/adsorption",
    cells: [
      "−40°C (lower on request)",
      "2,200 – 21,100 Nm³/h",
      "4 – 40 bar",
      "Blower + heater, continuous large-flow duty",
    ],
  },
  {
    tech: "Membrane (MFP / MAA-Dry 3–180)",
    href: "#membrane",
    cells: [
      "Selectable: 15°C, 3°C, −20°C or −40°C",
      "1 – 180 Nm³/h",
      "Up to 12.5 barg",
      "No moving parts, no electrical supply",
    ],
  },
];


const TextLink = ({ href, children, dark = false }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center gap-3 mt-6 px-7 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md shadow-sm transition-colors"
  >
    {children}
    <ArrowIcon />
  </Link>
);

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Compressed Air Dryers Ireland | OMEGA AIR Range | TechnoCore</title>

        <meta
          name="description"
          content="Compressed air dryers in Ireland: refrigerated (+3°C), desiccant (−40°C) and membrane dryers. Compare technologies, get sizing help and a quotation from TechnoCore."
        />

        <link rel="canonical" href={`https://www.technocore.ie${PATH}`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Compressed Air Dryers Ireland | TechnoCore" />
        <meta
          property="og:description"
          content="Refrigerated, adsorption, membrane, heat-regenerated and specialist compressed air dryer solutions engineered for industrial applications in Ireland."
        />
        <meta property="og:url" content={`https://www.technocore.ie${PATH}`} />
        <meta property="og:image" content="https://www.technocore.ie/images/air-dryers-hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compressed Air Dryers Ireland | TechnoCore" />
        <meta
          name="twitter:description"
          content="Refrigerated, adsorption, membrane and heat-regenerated compressed air dryer solutions engineered for industrial applications in Ireland."
        />
        <meta name="twitter:image" content="https://www.technocore.ie/images/air-dryers-hero.jpg" />

        <script key="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }} />
        <script key="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script key="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumb) }} />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[700px] lg:min-h-[760px] overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/air-dryers-hero.jpg"
            alt="Industrial compressed air drying system"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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
              Compressed Air Dryers
              <span className="block text-green-400">in Ireland</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-7 max-w-2xl">
              Refrigerated (+3°C), desiccant / adsorption (−40°C), membrane and
              heat-regenerated air dryers for Irish businesses. Get a dryer
              sized to your compressor flow, pressure, inlet temperature and
              required pressure dew point.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9 max-w-2xl">
              {["Moisture Control", "Equipment Protection", "Stable Air Quality", "Reduced Downtime"].map((item) => (
                <div key={item} className="border border-white/15 bg-black/25 backdrop-blur-sm px-4 py-4">
                  <div className="text-green-400 mb-2">
                    <CheckIcon />
                  </div>
                  <p className="text-white text-sm font-medium">{item}</p>
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
                TechnoCore supplies and sizes{" "}
                <Link href="/products/air-dryers/refrigerated" className="text-green-700 underline">
                  refrigerated air dryers
                </Link>
                ,{" "}
                <Link href="/products/air-dryers/adsorption" className="text-green-700 underline">
                  desiccant / adsorption air dryers
                </Link>
                , <a href="#membrane" className="text-green-700 underline">membrane dryers</a> and
                specialist compressed air dryers for businesses across Ireland,
                together with the{" "}
                <Link href="/products/filtration" className="text-green-700 underline">
                  filtration
                </Link>{" "}
                each dryer needs, as part of a full{" "}
                <Link href="/compressed-air-treatment-ireland" className="text-green-700 underline">
                  compressed air treatment system
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CHOOSER */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Dryer Selection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Which Air Dryer Do I Need?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Correct dryer selection depends on more than compressor power.
              Actual operating conditions must be considered. Choose a
              technology to see the details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {technologies.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const inner = (
                <>
                  <p className="text-green-600 font-bold text-2xl">{item.value}</p>
                  <h3 className="text-xl font-bold mt-5">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mt-3">{item.text}</p>
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold mt-5">
                    Learn more
                    <ArrowIcon />
                  </span>
                </>
              );
              const cls =
                "block border border-gray-200 bg-[#f6f7f6] hover:border-green-500 p-7 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500";
              return isAnchor ? (
                <a key={item.title} href={item.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={item.title} href={item.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REFRIGERATED (summary) */}
      <section className="bg-[#f4f6f5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                Refrigerated Air Drying
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Refrigerated Air Dryers</h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Refrigerated dryers cool the compressed air so water vapour
                condenses and can be drained before the air continues
                downstream. They are the standard choice for general industrial
                compressed air where very low dew points are not required.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  ["Pressure Dew Point", "+3°C (OMEGA AIR RDP series)"],
                  ["Flow Range", "20 – 13,200 m³/h"],
                ].map(([label, value]) => (
                  <div key={label} className="border border-gray-200 bg-white p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-gray-500 font-semibold">{label}</p>
                    <p className="text-black font-semibold mt-2">{value}</p>
                  </div>
                ))}
              </div>

              <TextLink href="/products/air-dryers/refrigerated">
                Explore Refrigerated Dryers
              </TextLink>
            </div>

            <div className="relative overflow-hidden bg-[#edf1ef] h-[380px] md:h-[460px]">
              <Image
                src="/images/dryer-refrigerated.jpg"
                alt="Industrial refrigerated compressed air dryers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADSORPTION (summary) */}
      <section id="desiccant" className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border border-white/10 h-[380px] md:h-[460px]">
                <Image
                  src="/images/dryer-adsorption.jpg"
                  alt="Adsorption desiccant compressed air dryer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
                Low Dew Point Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Desiccant &amp; Adsorption Air Dryers
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mt-6">
                Desiccant material adsorbs water vapour from the compressed
                air, giving pressure dew points of −40°C and below. Heatless
                dryers suit small and medium flows; heat-regenerated dryers
                reduce compressed air loss at large flows.
              </p>

              <div className="mt-8">
                <BulletList
                  dark
                  items={[
                    "Heatless A-DRY: 6 – 200 m³/h",
                    "Heat-regenerated HPR-DRY BP: 2,200 – 21,100 Nm³/h",
                    "Pharmaceutical, electronics, food & beverage, critical process air",
                  ]}
                />
              </div>

              <TextLink dark href="/products/air-dryers/adsorption">
                Explore Adsorption Dryers
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBRANE (full, no subpage yet) */}
      <section id="membrane" className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                Compact Drying
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Membrane Air Dryers</h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Membrane air dryers remove water vapour by passing compressed
                air through hollow-fibre membrane modules. Moisture permeates
                through the membrane wall and is vented away, leaving a drier
                air stream downstream.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                With no moving parts, no electrical supply and minimal
                maintenance, membrane dryers can be a practical option for
                point-of-use drying, instrumentation air and applications where
                a compact, simple solution is preferred over very low dew
                points. The MFP / MAA-Dry range covers 1 – 180 Nm³/h with
                selectable outlet dew points.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-lg">Typical applications</h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-4 text-gray-700">
                  {[
                    "Point-of-use drying",
                    "Instrumentation air",
                    "Analytical equipment",
                    "Remote or unmanned sites",
                    "Small compressed air branches",
                    "Backup or supplementary drying",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-green-600 mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <QuoteButton label="Request Membrane Dryer Quote" />
            </div>

            <div className="border border-gray-200 bg-[#f7f8f7] p-8">
              <p className="text-green-600 font-semibold text-lg">Why choose a membrane dryer</p>
              <div className="mt-5">
                <BulletList
                  items={[
                    "No moving parts or electrical connection required",
                    "Compact footprint for point-of-use installation",
                    "Minimal ongoing maintenance",
                    "Suitable where moderate dew point suppression is sufficient",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST */}
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
              <QuoteButton dark label="Request Specialist Dryer Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="engineering-data" className="bg-[#eef2ef] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
            Engineering Data
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Dryer Technology Comparison</h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-6 max-w-3xl">
            TechnoCore supplies the OMEGA AIR RDP refrigerated, A-DRY and
            HPR-DRY BP adsorption, and MFP / MAA-Dry membrane dryer ranges.
            Each technology covers a different pressure dew point and flow
            range, so the correct series is selected around the actual process
            requirement.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-black text-white text-left text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Technology</th>
                  <th className="p-4 font-semibold">Pressure Dew Point</th>
                  <th className="p-4 font-semibold">Flow Range</th>
                  <th className="p-4 font-semibold">Operating Pressure</th>
                  <th className="p-4 font-semibold">Key Characteristic</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {comparisonRows.map((row) => (
                  <tr key={row.tech} className="border-b border-gray-300 even:bg-white odd:bg-[#e3e9e4]">
                    <td className="p-4 font-semibold text-black">
                      {row.href.startsWith("#") ? (
                        <a href={row.href} className="underline decoration-green-600 underline-offset-4">
                          {row.tech}
                        </a>
                      ) : (
                        <Link href={row.href} className="underline decoration-green-600 underline-offset-4">
                          {row.tech}
                        </Link>
                      )}
                    </td>
                    {row.cells.map((cell, i) => (
                      <td key={i} className="p-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Figures refer to standard OMEGA AIR nominal operating conditions
            and vary by model within each range. Membrane dryer flow and outlet
            dew point depend on purge air consumption; adsorption dryer dew
            point and correction factors depend on operating pressure and inlet
            temperature. Contact TechnoCore for exact model selection.
          </p>

          <QuoteButton label="Request a Dryer Comparison Quote" />
        </div>
      </section>

      {/* SIZING */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#0d1412] text-white p-8">
              <h3 className="text-green-400 font-semibold text-xl">Information we normally need</h3>
              <div className="mt-5">
                <BulletList
                  dark
                  items={[
                    "Compressor or required air flow",
                    "Operating pressure",
                    "Maximum inlet air temperature",
                    "Ambient temperature",
                    "Required pressure dew point",
                    "Application or process",
                  ]}
                />
              </div>
            </div>

            <div className="border border-gray-200 p-8">
              <h3 className="text-green-600 font-semibold text-xl">TechnoCore can help with</h3>
              <div className="mt-5">
                <BulletList
                  items={[
                    "Dryer sizing and selection",
                    "Pre-filtration and final filtration",
                    "Condensate drains",
                    "Oil / water separation",
                    "Pressure-drop considerations",
                    "Complete air treatment packages",
                  ]}
                />
              </div>
            </div>
          </div>

          <QuoteButton label="Get Help Selecting a Dryer" />
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
            {["Compressor", "Separator", "Dryer", "Filtration", "Receiver", "Process"].map((step, index, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="border border-green-500/40 bg-black/30 px-5 py-3 text-sm font-semibold">{step}</div>
                {index < arr.length - 1 && <span className="text-green-400 hidden sm:block">→</span>}
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
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">Applications</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Industries We Support</h2>
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
              <div key={industry} className="bg-white px-5 py-7 text-center font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IRELAND COVERAGE */}
      <IrelandCoverage product="compressed air drying and treatment systems" />

      {/* FAQ */}
      <section className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Compressed Air Dryer FAQ</h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200">
            {faqs.map((item) => (
              <div key={item.q} className="py-7">
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed mt-3">{item.a}</p>
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
              required dew point and application. TechnoCore can help select
              the dryer and associated filtration for your system.
            </p>
            <QuoteButton dark label="Request a Quotation" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
