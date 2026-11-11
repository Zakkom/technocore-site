import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "../../../components/SiteLayout";
import IrelandCoverage from "../../../components/IrelandCoverage";
import {
  ArrowIcon,
  QuoteButton,
  BulletList,
  breadcrumbLd,
  faqLd,
} from "../../../components/DryerPageParts";

const PATH = "/products/air-dryers/refrigerated";

const faqs = [
  {
    q: "How does a refrigerated compressed air dryer work?",
    a: "The compressed air is cooled in a heat exchanger so that water vapour condenses into liquid. The condensate is separated and drained, and the cold air is then reheated slightly before it leaves the dryer. Depending on the dryer series, the nominal pressure dew point is +3°C (RDP ranges) or +5°C (RDL).",
  },
  {
    q: "What pressure dew point does a refrigerated air dryer give?",
    a: "OMEGA AIR RDP, RDP W and RDP ES are rated at +3°C, while RDL is rated at +5°C under nominal conditions. Actual dew point varies with inlet temperature, ambient temperature and operating pressure.",
  },
  {
    q: "When should I choose a desiccant dryer instead?",
    a: "Choose an adsorption (desiccant) dryer when your process needs a pressure dew point well below 0°C, for example −20°C or −40°C, or when air lines run through cold areas where condensation or freezing is a risk. Refrigerated dryers are not intended for sub-zero pressure dew points.",
  },
  {
    q: "What flow range do RDP refrigerated dryers cover?",
    a: "The RDP range covers 20 to 13,200 m³/h. Models RDP 20 to RDP 1900 are rated to 16 barg and RDP 2600 to RDP 13200 to 14 barg.",
  },
  {
    q: "What do you need to size a refrigerated air dryer?",
    a: "Compressor or required air flow, operating pressure, maximum inlet air temperature, ambient temperature and the application. With these we can select the correct model and the filtration that goes with it.",
  },
  {
    q: "Can I buy a refrigerated air dryer in Ireland from TechnoCore?",
    a: "Yes. TechnoCore supplies refrigerated compressed air dryers to customers across Ireland. Send your compressor details through the contact page for a quotation.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Refrigerated Compressed Air Dryers",
  name: "OMEGA AIR Refrigerated Air Dryers (RDL, RDP, RDP W, RDP ES)",
  description:
    "OMEGA AIR RDL, RDP, RDP W and RDP ES refrigerated compressed air dryers, +3°C or +5°C nominal pressure dew point, supplied and sized in Ireland.",
  provider: { "@type": "Organization", name: "TechnoCore", url: "https://www.technocore.ie" },
  areaServed: { "@type": "Country", name: "Ireland" },
  url: `https://www.technocore.ie${PATH}`,
};

const specs = [
  ["Pressure dew point", "+3°C"],
  ["Flow range", "20 – 13,200 m³/h"],
  ["Operating pressure", "16 barg (RDP 20–1900), 14 barg (RDP 2600–13200)"],
  ["Design", "Non-cycling, air-cooled, R513a refrigerant"],
];

const dryerRanges = [
  { name: "RDL", heading: "Compact refrigerated dryers", dew: "+5°C", flow: "35–480 m³/h", detail: "Compact solutions for workshops and smaller compressed-air installations." },
  { name: "RDP", heading: "Industrial refrigerated dryers", dew: "+3°C", flow: "20–13,200 m³/h", detail: "Air-cooled dryers for general industrial compressed air systems." },
  { name: "RDP W", heading: "Water-cooled refrigerated dryers", dew: "+3°C", flow: "2,600–13,200 m³/h", detail: "Large-capacity dryers with water-cooled condensers; cooling-water availability must be confirmed." },
  { name: "RDP ES", heading: "Energy-saving refrigerated dryers", dew: "+3°C", flow: "950–13,200 m³/h", detail: "Energy-saving range for industrial installations; assess load profile when selecting a model." },
];

const exampleModels = [
  ["RDL 35", "RDL", "35", "+5°C", 'G 1/2"'],
  ["RDL 75", "RDL", "75", "+5°C", 'G 3/4"'],
  ["RDP 35", "RDP", "35", "+3°C", 'G 3/4"'],
  ["RDP 100", "RDP", "100", "+3°C", 'G 1"'],
  ["RDP 235", "RDP", "235", "+3°C", 'G 1 1/2"'],
  ["RDP 600", "RDP", "600", "+3°C", 'G 2"'],
  ["RDP 2600 W", "RDP W", "2,600", "+3°C", "DN100"],
  ["RDP 950 ES", "RDP ES", "950", "+3°C", 'G 2"'],
];

export default function RefrigeratedDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Refrigerated Air Dryers Ireland | OMEGA AIR RDL & RDP | TechnoCore</title>
        <meta
          name="description"
          content="OMEGA AIR refrigerated air dryers in Ireland: RDL, RDP, RDP W and RDP ES. Compare +3°C and +5°C dryers, models and sizing. Request a TechnoCore quote."
        />
        <link rel="canonical" href={`https://www.technocore.ie${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Refrigerated Air Dryers Ireland | TechnoCore" />
        <meta
          property="og:description"
          content="OMEGA AIR RDL, RDP, RDP W and RDP ES refrigerated compressed air dryers supplied across Ireland."
        />
        <meta property="og:url" content={`https://www.technocore.ie${PATH}`} />
        <meta property="og:image" content="https://www.technocore.ie/images/dryer-refrigerated.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script key="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }} />
        <script key="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script
          key="ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd("Refrigerated Air Dryers", PATH)) }}
        />
      </Head>

      {/* HERO */}
      <section className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <Link href="/products/air-dryers" className="hover:text-green-400">
                Air Dryers
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">Refrigerated</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.02] mt-6">
              Refrigerated Air Dryers in Ireland
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
              Explore OMEGA AIR RDL, RDP, RDP W and RDP ES refrigerated
              dryers with nominal pressure dew points of +5°C or +3°C. Share
              your compressor flow and operating conditions for a suitable
              model and filtration recommendation.
            </p>

            <QuoteButton dark label="Request Refrigerated Dryer Quote" />
          </div>

          <div className="relative overflow-hidden border border-white/10 h-[360px] md:h-[480px]">
            <Image
              src="/images/dryer-refrigerated.jpg"
              alt="OMEGA AIR RDP refrigerated compressed air dryer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bg-[#f4f6f5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">OMEGA AIR RDP series at a glance</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {specs.map(([label, value]) => (
              <div key={label} className="border border-gray-200 bg-white p-5">
                <p className="text-sm text-gray-500 font-semibold">{label}</p>
                <p className="text-black font-semibold mt-2">{value}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Figures refer to OMEGA AIR nominal operating conditions and vary by
            model. Contact TechnoCore for exact model selection.
          </p>
        </div>
      </section>

      {/* REFRIGERATED DRYER RANGES */}
      <section id="dryer-ranges" className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">Choose Your Dryer Range</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">OMEGA AIR Refrigerated Dryer Ranges</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-5 max-w-3xl">
            Compare four refrigerated dryer ranges. Flow figures are nominal; the correct model depends on
            operating pressure, inlet temperature, ambient conditions and the required pressure dew point.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
            {dryerRanges.map((range) => (
              <div key={range.name} className="border border-gray-200 bg-[#f4f6f5] p-7 flex flex-col">
                <p className="text-green-700 font-bold text-2xl">{range.name}</p>
                <h3 className="text-xl font-bold mt-3">{range.heading}</h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="bg-white border border-gray-200 px-3 py-2 text-sm font-semibold">{range.dew} PDP</span>
                  <span className="bg-white border border-gray-200 px-3 py-2 text-sm font-semibold">{range.flow}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-5 flex-1">{range.detail}</p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3.5 mt-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
                  Request a Quote <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL EXAMPLES */}
      <section className="bg-[#f4f6f5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">Popular OMEGA AIR Dryer Models</h2>
          <p className="text-gray-700 text-lg mt-5 max-w-3xl">
            Examples from the manufacturer's technical datasheets. All flow values below are nominal in m³/h;
            connection sizes are the manufacturer's listed air connections.
          </p>
          <div className="overflow-x-auto mt-8">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead className="bg-[#0d1412] text-white">
                <tr>{["Model", "Range", "Nominal flow (m³/h)", "Pressure dew point", "Air connection"].map((h) => <th key={h} className="p-4 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody>
                {exampleModels.map(([model, range, flow, dew, connection]) => (
                  <tr key={model} className="border-b border-gray-200 even:bg-white">
                    {[model, range, flow, dew, connection].map((value, i) => <td key={i} className="p-4">{value}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-5">
            Actual capacity must be corrected for inlet and ambient temperatures and operating pressure.
            Standard dryer supply does not include the upstream 3 μm prefilter; it must be specified separately.
          </p>
          <QuoteButton label="Request a Model Selection Quote" />
        </div>
      </section>

      {/* COMPRESSOR MATCHING */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">How to Choose a Dryer for Your Compressor</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Compressor motor power (HP or kW) and receiver size alone do not determine the correct dryer.
              We size against delivered air flow (FAD), operating pressure and the highest expected inlet
              and ambient temperatures, using the manufacturer's correction factors.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              If you only know your compressor make, model, horsepower or CFM rating, send us a photo
              of the nameplate and describe your application. We can help identify the missing details.
            </p>
            <QuoteButton label="Help Me Size My Air Dryer" />
          </div>
          <div className="border border-gray-200 bg-[#f4f6f5] p-8">
            <h3 className="text-green-700 font-bold text-xl">Details for accurate selection</h3>
            <div className="mt-5"><BulletList items={[
              "Compressor model or delivered air flow (FAD, L/min, CFM or m³/h)",
              "Operating pressure (bar)",
              "Maximum compressed-air inlet temperature",
              "Ambient temperature or cooling-water conditions",
              "Application and required pressure dew point",
            ]} /></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">How a refrigerated air dryer works</h2>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Compressed air leaves the compressor warm and saturated with
              water vapour. The dryer cools it in a heat exchanger, so most of
              that vapour condenses into liquid water.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              The condensate is separated and removed through a drain. The cold
              air is then warmed slightly by the incoming air, which stops
              pipework sweating downstream, and continues to your process at a
              nominal pressure dew point of +3°C or +5°C, depending on the dryer series.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Refrigerated dryers are designed for positive pressure dew points:
              the RDP ranges are rated at +3°C and RDL at +5°C under nominal
              conditions. For lower dew points, consider adsorption drying.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="border border-gray-200 bg-[#f7f8f7] p-7">
              <h3 className="text-green-600 font-semibold text-xl">A refrigerated dryer suits</h3>
              <div className="mt-4">
                <BulletList
                  items={[
                    "General manufacturing and workshop air",
                    "Pneumatic tools and machinery",
                    "Packaging and automotive production",
                    "Air lines inside heated buildings",
                  ]}
                />
              </div>
            </div>

            <div className="border border-gray-200 bg-[#f7f8f7] p-7">
              <h3 className="text-green-600 font-semibold text-xl">Choose adsorption instead if</h3>
              <div className="mt-4">
                <BulletList
                  items={[
                    "Your process needs a dew point below 0°C",
                    "Air lines run outdoors or through cold stores",
                    "Pharmaceutical, electronics or instrument air is involved",
                  ]}
                />
              </div>
              <Link
                href="/products/air-dryers/adsorption"
                className="inline-flex items-center gap-2 text-green-600 font-semibold mt-5"
              >
                See desiccant (adsorption) dryers
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIZING + FILTRATION */}
      <section className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">What we need to size your dryer</h2>
            <div className="mt-6">
              <BulletList
                dark
                items={[
                  "Compressor or required air flow",
                  "Operating pressure",
                  "Maximum inlet air temperature",
                  "Ambient temperature",
                  "Application or process",
                ]}
              />
            </div>
            <QuoteButton dark label="Get Help Selecting a Dryer" />
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-green-400 font-semibold text-xl">Filtration and condensate</h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              OMEGA AIR specifies an upstream 3 μm prefilter for these refrigerated
              dryer ranges. Filters are not included in the standard dryer
              configuration and must be selected separately. Additional oil
              removal or downstream filtration depends on compressor type and
              the required air quality. Provide appropriate condensate drainage
              and treatment in accordance with site and disposal requirements.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We specify these together with the dryer as a complete package.
            </p>
            <Link
              href="/products/filtration"
              className="inline-flex items-center gap-2 text-green-400 font-semibold mt-5"
            >
              View filtration solutions
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <IrelandCoverage product="refrigerated compressed air dryers" />

      {/* FAQ */}
      <section className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Refrigerated air dryer FAQ</h2>
          <div className="mt-10 divide-y divide-gray-200">
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed mt-3">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Need a refrigerated dryer for your compressor?</h2>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto">
            Send your flow, pressure and temperatures and we will reply with a
            suitable model and quotation.
          </p>
          <QuoteButton dark label="Request a Quotation" />
          <p className="text-gray-400 mt-8">
            Other technologies:{" "}
            <Link href="/products/air-dryers/adsorption" className="text-green-400 underline">
              desiccant dryers
            </Link>
            {" · "}
            <Link href="/products/air-dryers#membrane" className="text-green-400 underline">
              membrane dryers
            </Link>
            {" · "}
            <Link href="/products/air-dryers" className="text-green-400 underline">
              all air dryers
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
