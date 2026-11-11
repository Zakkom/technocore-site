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
    a: "The compressed air is cooled in a heat exchanger so that water vapour condenses into liquid. The condensate is separated and drained, and the cold air is then reheated slightly before it leaves the dryer. The result is air with a pressure dew point of about +3°C.",
  },
  {
    q: "What pressure dew point does a refrigerated air dryer give?",
    a: "The OMEGA AIR RDP series delivers a pressure dew point of +3°C at nominal operating conditions. Actual dew point varies with inlet temperature, ambient temperature and operating pressure.",
  },
  {
    q: "When should I choose a desiccant dryer instead?",
    a: "Choose an adsorption (desiccant) dryer when your process needs a pressure dew point well below 0°C, for example −20°C or −40°C, or when air lines run through cold areas where condensation or freezing is a risk. A refrigerated dryer cannot go below its +3°C limit.",
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
  name: "Refrigerated Compressed Air Dryers (OMEGA AIR RDP)",
  description:
    "Refrigerated compressed air dryers with a +3°C pressure dew point, 20 to 13,200 m³/h, supplied and sized for industrial users in Ireland.",
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

export default function RefrigeratedDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Refrigerated Air Dryers Ireland | +3°C, up to 13,200 m³/h | TechnoCore</title>
        <meta
          name="description"
          content="Refrigerated compressed air dryers in Ireland: OMEGA AIR RDP series, +3°C dew point, 20–13,200 m³/h. Dryer sizing, filtration and quotations from TechnoCore."
        />
        <link rel="canonical" href={`https://www.technocore.ie${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Refrigerated Air Dryers Ireland | TechnoCore" />
        <meta
          property="og:description"
          content="OMEGA AIR RDP refrigerated compressed air dryers, +3°C dew point, 20–13,200 m³/h, supplied across Ireland."
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
              OMEGA AIR RDP refrigerated dryers deliver a +3°C pressure dew
              point from 20 to 13,200 m³/h. Tell us your compressor flow and
              pressure and we will select the model and the filtration to go
              with it.
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
              pressure dew point of about +3°C.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Because the air cannot be cooled below freezing without ice
              forming in the exchanger, +3°C is the practical limit of this
              technology.
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
              A dryer performs best with a coalescing filter upstream to remove
              oil and liquid water, and a dust filter downstream if required by
              your application. Condensate must be drained automatically and
              collected through an oil/water separator before disposal.
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
