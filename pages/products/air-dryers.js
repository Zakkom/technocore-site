import Head from "next/head";
import Link from "next/link";

export default function AirDryers() {
  return (
    <SiteLayout>{
      <Head>
        <title>Air Dryers | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Refrigeration (+3°C PDP) and adsorption (down to −40°C PDP) air dryers up to 13,200 m³/h. Protect equipment and product quality with TechnoCore Ireland."
        />
        <meta
          name="keywords"
          content="air dryer, refrigeration dryer, adsorption dryer, desiccant dryer, compressed air dew point, Ireland"
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Refrigeration & Adsorption Air Dryers
        </h1>
        <p className="text-gray-300 mb-6">
          Moisture in compressed air causes corrosion, product defects and costly
          downtime. TechnoCore supplies industrial air dryers —{" "}
          <strong>refrigeration dryers (+3°C PDP)</strong> for general
          manufacturing and <strong>adsorption (desiccant) dryers</strong> with
          pressure dew points down to <strong>−40°C</strong> for sensitive
          applications. Our units feature energy-saving controls, automatic
          zero-loss drains, and handle flows up to <strong>13,200 m³/h</strong>.
          We survey your site, select the correct capacity and provide local
          installation and service across Ireland.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Applications</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Automotive & industrial paint booths</li>
          <li>Pharmaceutical and food processing</li>
          <li>General manufacturing and packaging</li>
          <li>Instrumentation & sensitive equipment</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-400 mb-2">
          Refrigeration Dryers (+3°C PDP)
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Energy-saving control and stable dew point</li>
          <li>Automatic zero-loss condensate drains</li>
          <li>Reliable operation for high duty cycles</li>
        </ul>

        <h2 id="desiccant" className="text-xl font-semibold text-green-400 mb-2">
          Adsorption (Desiccant) Dryers (down to −40°C PDP)
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Siemens PLC control, energy-saving purge cycles</li>
          <li>Continuous duty for pharma/electronics</li>
          <li>Lower downtime, quality & compliance</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold inline-block">
            💧 Protect your equipment — Get Consultation
          </Link>
        </div>
      </section>
    }</SiteLayout>
  );
}
