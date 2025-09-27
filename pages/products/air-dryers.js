import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Air Dryers (+3°C & −40°C PDP) | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Refrigeration air dryers (+3°C PDP) and adsorption/desiccant dryers (to −40°C PDP) up to 13,200 m³/h. Energy-saving controls, zero-loss drains, full sizing & local support across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/air-dryers" />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* HERO */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Refrigeration & Adsorption Air Dryers
        </h1>
        <p className="text-gray-300 mb-8">
          Moisture in compressed air causes corrosion, product defects and
          downtime. TechnoCore supplies industrial refrigeration dryers with{" "}
          <strong>+3&nbsp;°C PDP</strong> for general manufacturing and{" "}
          adsorption/desiccant dryers achieving <strong>−40&nbsp;°C PDP</strong> for
          pharma and other sensitive processes. We size systems up to{" "}
          <strong>13,200&nbsp;m³/h</strong> and provide local installation and service across
          Ireland.
        </p>

        {/* REFRIGERATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Refrigeration Dryers (+3&nbsp;°C PDP)
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
            <li>Energy-saving controls for lower OPEX</li>
            <li>Zero-loss condensate drains</li>
            <li>High-flow capability up to 13,200&nbsp;m³/h</li>
            <li>Ideal for paint/automotive & general industry</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Protect equipment — Get consultation
          </Link>
        </section>

        {/* ADSORPTION */}
        <section id="desiccant" className="mb-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Adsorption (Desiccant) Dryers (to −40&nbsp;°C PDP)
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
            <li>Siemens SIMATIC PLC, smart purge/DPD modes</li>
            <li>Continuous duty for strict quality environments</li>
            <li>Pharma, electronics, precision optics, food</li>
            <li>BVA/BVL/BP models sized to your demand</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-black px-6 py-3 rounded font-semibold"
          >
            Get ultra-dry air — Talk to an engineer
          </Link>
        </section>

        {/* REASSURANCE */}
        <section className="bg-black/40 border border-green-500 rounded p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            What you get with TechnoCore
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <ul className="list-disc list-inside space-y-1">
              <li>Site survey, sizing & dew-point selection</li>
              <li>Delivery, installation & commissioning</li>
              <li>Service plans and local support across Ireland</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Lower downtime & maintenance costs</li>
              <li>Consistent air quality that protects processes</li>
              <li>ISO 8573-1 compatible filtration chains</li>
            </ul>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

