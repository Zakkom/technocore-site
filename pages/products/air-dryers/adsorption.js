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

const PATH = "/products/air-dryers/adsorption";

const faqs = [
  {
    q: "What is a desiccant (adsorption) air dryer?",
    a: "A desiccant dryer passes compressed air through a bed of desiccant material that adsorbs water vapour. Two towers work in turns: one dries the air while the other is regenerated, so the air stays dry continuously. Typical pressure dew points are −40°C, with −25°C or −70°C available on request.",
  },
  {
    q: "What is the difference between heatless and heat-regenerated desiccant dryers?",
    a: "Heatless dryers use a portion of dry compressed air for regeneration. Blower/heater-regenerated designs use external energy to reduce compressed-air purge demand. The best option depends on flow, pressure and running costs.",
  },
  {
    q: "What pressure dew point do I need?",
    a: "It depends on your process and on how cold your air lines get. As a rule, the dew point should be below the lowest temperature the air will meet. Pharmaceutical, electronics and instrument air often need −40°C, general industrial air often does not.",
  },
  {
    q: "What flow range do your adsorption dryers cover?",
    a: "The range includes compact A-DRY, B-DRY and X-DRY models, larger R-DRY blower-regenerated systems, high-pressure HPR-DRY BP and integrated COM-DRY. Capacity must be confirmed against the chosen model and operating conditions.",
  },
  {
    q: "Do I need filters with an adsorption dryer?",
    a: "Adsorption systems normally require appropriate inlet oil/aerosol removal and downstream particulate filtration. The exact filtration grade, included filter housings and element specification must be checked for each model.",
  },
  {
    q: "Can I buy a desiccant air dryer in Ireland from TechnoCore?",
    a: "Yes. TechnoCore supplies desiccant air dryers across Ireland. Send your compressor flow, pressure, inlet temperature and required dew point through the contact page for a quotation.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Desiccant and Adsorption Compressed Air Dryers",
  name: "OMEGA AIR Desiccant and Adsorption Compressed Air Dryers",
  description:
    "OMEGA AIR A-DRY, B-DRY, X-DRY, R-DRY, HPR-DRY and COM-DRY adsorption dryers supplied and sized for industrial compressed air systems in Ireland.",
  provider: { "@type": "Organization", name: "TechnoCore", url: "https://www.technocore.ie" },
  areaServed: { "@type": "Country", name: "Ireland" },
  url: `https://www.technocore.ie${PATH}`,
};

const rows = [
  [
    "Heatless adsorption (A-DRY 06–200)",
    "−40°C (−25°C or −70°C on request)",
    "6 – 200 m³/h",
    "4 – 16 barg",
    "Power consumption < 35 W",
  ],
  [
    "Heat-regenerated (HPR-DRY 400–3600 BP)",
    "−40°C (lower on request)",
    "2,200 – 21,100 Nm³/h",
    "4 – 40 bar",
    "Blower and heater, continuous large-flow duty",
  ],
];

export default function AdsorptionDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Desiccant Air Dryers Ireland | −40°C Adsorption Dryers | TechnoCore</title>
        <meta
          name="description"
          content="Desiccant (adsorption) compressed air dryers in Ireland: heatless A-DRY and heat-regenerated HPR-DRY BP, −40°C dew point, 6–21,100 m³/h. Sizing and quotes from TechnoCore."
        />
        <link rel="canonical" href={`https://www.technocore.ie${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desiccant Air Dryers Ireland | TechnoCore" />
        <meta
          property="og:description"
          content="OMEGA AIR heatless, blower-regenerated and specialist adsorption dryers supplied across Ireland."
        />
        <meta property="og:url" content={`https://www.technocore.ie${PATH}`} />
        <meta property="og:image" content="https://www.technocore.ie/images/dryer-adsorption.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script key="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }} />
        <script key="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script
          key="ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd("Desiccant Air Dryers", PATH)) }}
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
              <span className="text-gray-200">Desiccant</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.02] mt-6">
              Desiccant Air Dryers in Ireland
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
              OMEGA AIR heatless, blower-regenerated and specialist adsorption dryers
              for low pressure dew points, including −40°C solutions.
              Compare A-DRY, B-DRY, X-DRY, R-DRY, HPR-DRY and COM-DRY
              systems, sized to your compressor and process.
            </p>

            <QuoteButton dark label="Request Adsorption Dryer Quote" />
          </div>

          <div className="relative overflow-hidden border border-white/10 h-[360px] md:h-[480px]">
            <Image
              src="/images/dryer-adsorption.jpg"
              alt="Industrial OMEGA AIR desiccant adsorption dryer system"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">How a desiccant air dryer works</h2>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Wet compressed air flows through a tower filled with desiccant,
              which adsorbs the water vapour. The air leaves the tower very
              dry, with a pressure dew point of −40°C as standard.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Two towers work in turns. While one dries the air, the other is
              regenerated so it can take over, which keeps the supply
              continuous.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              How the desiccant is regenerated is what separates the two dryer
              families below.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="border border-gray-200 bg-[#f7f8f7] p-7">
              <h3 className="text-green-600 font-semibold text-xl">Choose a desiccant dryer when</h3>
              <div className="mt-4">
                <BulletList
                  items={[
                    "Your process needs a dew point below +3°C",
                    "Air lines run outdoors or through cold areas",
                    "Pharmaceutical, medical device or food & beverage air",
                    "Electronics and instrument air",
                  ]}
                />
              </div>
            </div>

            <div className="border border-gray-200 bg-[#f7f8f7] p-7">
              <h3 className="text-green-600 font-semibold text-xl">A refrigerated dryer is enough when</h3>
              <p className="text-gray-700 leading-relaxed mt-4">
                General industrial air in a heated building only needs a +3°C
                dew point, and a refrigerated dryer costs less to run.
              </p>
              <Link
                href="/products/air-dryers/refrigerated"
                className="inline-flex items-center gap-2 text-green-600 font-semibold mt-5"
              >
                See refrigerated air dryers
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SERIES — verified against OMEGA AIR datasheets */}
      <section id="dryer-ranges" className="bg-[#eef2ef] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">OMEGA AIR Product Range</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Explore Adsorption Dryer Series</h2>
          <p className="text-gray-700 text-lg mt-5 max-w-4xl leading-relaxed">
            From compact heatless dryers to blower-regenerated and high-pressure systems.
            Select a series based on inlet flow, operating pressure, required pressure dew point,
            regeneration energy and available installation space.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">Heatless twin-tower</p>
                <h3 className="text-xl font-bold mt-3">A-DRY 06–200</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">Compact heatless adsorption for smaller compressed-air systems.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–16 barg</p>
                  <p><strong>Pressure dew point:</strong> −40°C; −25°C / −70°C options</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">TAC configuration</p>
                <h3 className="text-xl font-bold mt-3">A-DRY TAC 06–200</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">A-DRY configuration with temperature-related regeneration controls; confirm configuration when quoting.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–16 barg</p>
                  <p><strong>Pressure dew point:</strong> −40°C; −25°C / −70°C options</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">Heatless adsorption</p>
                <h3 className="text-xl font-bold mt-3">B-DRY 110–1200</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">Larger heatless adsorption dryer range for industrial air demand.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–16 barg</p>
                  <p><strong>Pressure dew point:</strong> −40°C; alternative PDP options</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">TAC configuration</p>
                <h3 className="text-xl font-bold mt-3">B-DRY TAC 110–1200</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">TAC version of the B-DRY range; verify options and controls by model.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–16 barg</p>
                  <p><strong>Pressure dew point:</strong> −40°C</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">Adsorption dryer</p>
                <h3 className="text-xl font-bold mt-3">X-DRY 300–1050</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">Industrial adsorption dryers for medium-to-large compressed-air duties.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–16 barg</p>
                  <p><strong>Pressure dew point:</strong> −40°C; −25°C / −70°C options</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">Blower-regenerated</p>
                <h3 className="text-xl font-bold mt-3">R-DRY BVA 400–20000</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">Blower-regenerated dryers for high-flow compressed-air systems.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–11 bar</p>
                  <p><strong>Pressure dew point:</strong> −40°C; lower on request</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">High-pressure regenerated</p>
                <h3 className="text-xl font-bold mt-3">HPR-DRY BP 400–3600</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">High-pressure adsorption drying with blower and heater regeneration.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–40 bar</p>
                  <p><strong>Pressure dew point:</strong> −40°C; lower on request</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
              <article className="border border-gray-200 bg-white p-7 flex flex-col">
                <p className="text-green-700 text-xs font-bold tracking-[0.15em] uppercase">Combined refrigeration + adsorption</p>
                <h3 className="text-xl font-bold mt-3">COM-DRY</h3>
                <p className="text-gray-700 mt-3 leading-relaxed flex-1">Integrated refrigeration and adsorption stages in one drying solution.</p>
                <div className="mt-5 pt-4 border-t border-gray-200 text-sm space-y-2">
                  <p><strong>Pressure:</strong> 4–14 bar</p>
                  <p><strong>Pressure dew point:</strong> Down to −40°C</p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold transition-colors">
                  Request a Quote <ArrowIcon />
                </Link>
              </article>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Model names denote product series, not guaranteed flow at your site. Nominal performance
            and available options vary by model and operating conditions; TechnoCore confirms sizing
            and filtration against the applicable OMEGA AIR datasheet before quotation.
          </p>
        </div>
      </section>

      {/* FEATURED A-DRY TAC PRODUCT IMAGE */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative bg-[#f4f6f5] border border-gray-200 h-[420px] md:h-[560px]">
            <Image
              src="/images/a-dry-tac.jpg"
              alt="OMEGA AIR A-DRY TAC twin-tower desiccant compressed air dryer with integrated filtration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-5"
            />
          </div>
          <div>
            <p className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">Featured Product</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">OMEGA AIR A-DRY TAC</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Compact twin-tower adsorption drying for applications requiring a low pressure dew point.
              The A-DRY TAC range is designed for 4–16 barg operation, with −40°C pressure dew point
              and alternative dew point configurations specified in the manufacturer datasheet.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Send us your compressor FAD, pressure, inlet temperature and target dew point.
              We will confirm the model, regeneration requirements and recommended inlet/outlet filtration.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-semibold px-7 py-4 mt-7 transition-colors">
              Request A-DRY TAC Quote <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIST CO2 */}
      <section className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">Specialist Gas Drying</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">CO₂-R-DRY BVA — Carbon Dioxide Drying</h2>
          <p className="text-gray-300 leading-relaxed mt-5 max-w-4xl">
            OMEGA AIR also offers a dedicated CO₂-R-DRY BVA 400–20000 series for compressed
            carbon dioxide, rated 4–25 bar with −40°C pressure dew point (lower on request).
            This is a specialist CO₂ product, not a standard compressed-air dryer.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 mt-7 px-7 py-4 border border-green-400 text-green-400 hover:bg-green-500 hover:text-black font-semibold transition-colors">
            Enquire About CO₂ Drying <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* CONTROLLER + FILTRATION */}
      <section className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div className="border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-green-400 font-semibold text-2xl">Controls and regeneration</h2>
            <p className="text-gray-300 leading-relaxed mt-4">
              Control systems and regeneration strategies vary by dryer series and ordered configuration.
              Fixed-cycle and dew-point-dependent operation are available on selected models;
              dew-point-dependent control may require an optional dew point sensor.
            </p>
            <div className="mt-5">
              <BulletList
                dark
                items={[
                  "Controller and monitoring options depend on series",
                  "Dew-point-dependent control requires suitable sensing where offered",
                  "Regeneration method and energy demand vary by technology",
                  "Confirm remote communications and alarms for the selected model",
                ]}
              />
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-green-400 font-semibold text-2xl">Filtration requirements</h2>
            <p className="text-gray-300 leading-relaxed mt-4">
              Adsorption dryers require suitable upstream oil and aerosol removal to protect the desiccant, plus downstream particulate filtration where specified. Filter housings and elements vary by series and configuration. We confirm the required filtration with each quotation.
            </p>
            <Link
              href="/products/filtration"
              className="inline-flex items-center gap-2 text-green-400 font-semibold mt-5"
            >
              View filtration solutions
              <ArrowIcon />
            </Link>
            <QuoteButton dark label="Get Help Selecting a Dryer" />
          </div>
        </div>
      </section>

      <IrelandCoverage product="desiccant and adsorption compressed air dryers" />

      {/* FAQ */}
      <section className="bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Desiccant air dryer FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold">Need a low dew point for your process?</h2>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto">
            Send your flow, pressure, temperatures and required dew point and
            we will reply with a suitable model and quotation.
          </p>
          <QuoteButton dark label="Request a Quotation" />
          <p className="text-gray-400 mt-8">
            Other technologies:{" "}
            <Link href="/products/air-dryers/refrigerated" className="text-green-400 underline">
              refrigerated dryers
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
