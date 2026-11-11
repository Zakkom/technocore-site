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
    a: "Heatless dryers (A-DRY) regenerate the desiccant with a portion of the dried compressed air and are best for small to medium flows. Heat-regenerated dryers (HPR-DRY BP) use a blower and heater, which reduces compressed air loss at larger flows.",
  },
  {
    q: "What pressure dew point do I need?",
    a: "It depends on your process and on how cold your air lines get. As a rule, the dew point should be below the lowest temperature the air will meet. Pharmaceutical, electronics and instrument air often need −40°C, general industrial air often does not.",
  },
  {
    q: "What flow range do your adsorption dryers cover?",
    a: "A-DRY heatless dryers cover 6 to 200 m³/h at 4 to 16 barg. HPR-DRY BP heat-regenerated dryers cover 2,200 to 21,100 Nm³/h at 4 to 40 bar.",
  },
  {
    q: "Do I need filters with an adsorption dryer?",
    a: "Yes. A super-fine coalescing pre-filter (residual oil below 0.01 mg/m³, 0.01 µm) protects the desiccant, and a dust filter on the outlet catches desiccant dust.",
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
  name: "Desiccant (Adsorption) Compressed Air Dryers (OMEGA AIR A-DRY, HPR-DRY BP)",
  description:
    "Heatless and heat-regenerated adsorption compressed air dryers with −40°C pressure dew point as standard, from 6 to 21,100 m³/h, supplied and sized for industrial users in Ireland.",
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
          content="Heatless and heat-regenerated adsorption air dryers, −40°C pressure dew point, supplied across Ireland."
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
              Heatless A-DRY and heat-regenerated HPR-DRY BP adsorption dryers
              for a −40°C pressure dew point, from 6 to 21,100 m³/h. We size the
              dryer and its filtration around your compressor and process.
            </p>

            <QuoteButton dark label="Request Adsorption Dryer Quote" />
          </div>

          <div className="relative overflow-hidden border border-white/10 h-[360px] md:h-[480px]">
            <Image
              src="/images/dryer-adsorption.jpg"
              alt="OMEGA AIR adsorption desiccant compressed air dryer"
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

      {/* TYPES */}
      <section className="bg-[#eef2ef] text-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">Heatless vs heat-regenerated dryers</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="border border-gray-300 bg-white p-8">
              <h3 className="text-green-600 font-semibold text-xl">Heatless (A-DRY 06–200)</h3>
              <p className="text-gray-700 leading-relaxed mt-4">
                Regenerates the desiccant with a portion of the dried air. A
                simple, low-power design for small and medium flows, with
                power consumption under 35 W.
              </p>
            </div>

            <div className="border border-gray-300 bg-white p-8">
              <h3 className="text-green-600 font-semibold text-xl">Heat-regenerated (HPR-DRY 400–3600 BP)</h3>
              <p className="text-gray-700 leading-relaxed mt-4">
                Uses a blower and heater for regeneration, which reduces
                compressed air loss at large flows. Cooling can be ambient-air,
                purge-air or closed-loop, or can use heat of compression where
                suitable.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-black text-white text-left text-sm">
                  <th className="p-4 font-semibold">Technology</th>
                  <th className="p-4 font-semibold">Pressure dew point</th>
                  <th className="p-4 font-semibold">Flow range</th>
                  <th className="p-4 font-semibold">Operating pressure</th>
                  <th className="p-4 font-semibold">Key characteristic</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {rows.map((row) => (
                  <tr key={row[0]} className="border-b border-gray-300 even:bg-white odd:bg-[#e3e9e4]">
                    {row.map((cell, i) => (
                      <td key={i} className={i === 0 ? "p-4 font-semibold text-black" : "p-4"}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Figures refer to OMEGA AIR nominal operating conditions and vary by
            model. Dew point and correction factors depend on operating
            pressure and inlet temperature.
          </p>
        </div>
      </section>

      {/* CONTROLLER + FILTRATION */}
      <section className="bg-[#0d1412] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div className="border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-green-400 font-semibold text-2xl">ADC 2.2 dryer controller</h2>
            <p className="text-gray-300 leading-relaxed mt-4">
              OMEGA AIR adsorption dryers are controlled by the ADC 2.2, a
              SIEMENS PLC-based controller. It can run a fixed cycle or a
              dew-point dependent cycle that adjusts to maintain the required
              dew point while reducing energy and purge-air use.
            </p>
            <div className="mt-5">
              <BulletList
                dark
                items={[
                  "Fixed-cycle or dew-point dependent control",
                  "Energy-saving stand-by mode",
                  "Condensate drain control, IP 65 housing",
                  "Optional Modbus TCP/IP or Profinet communication",
                ]}
              />
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-green-400 font-semibold text-2xl">Filtration requirements</h2>
            <p className="text-gray-300 leading-relaxed mt-4">
              Adsorption dryers need a super-fine coalescing pre-filter
              (residual oil below 0.01 mg/m³, 0.01 µm) to protect the
              desiccant, and a dust filter on the outlet. We specify both with
              the dryer.
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
