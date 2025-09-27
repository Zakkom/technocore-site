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
          content="Refrigeration dryers (+3°C PDP) and desiccant dryers (to −40°C PDP) up to 13,200 m³/h. Energy-saving controls, zero-loss drains, sizing & local support."
        />
        <link rel="canonical" href="https://technocore.ie/products/air-dryers" />
      </Head>

      <div
  className="h-40 md:h-56 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/…-hero.jpg')" }}
/>
{/* Центр-логотип, как на главной */}
<div className="py-6 flex justify-center">
  <img src="/logo.png" alt="TechnoCore logo" className="h-14 md:h-16 w-auto" />
</div>


      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          Refrigeration & Adsorption Air Dryers
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Moisture in compressed air causes corrosion, defects and downtime. We size systems up to{" "}
          <strong>13,200&nbsp;m³/h</strong> and provide local installation & service across Ireland.
        </p>

        <section className="mt-10 max-w-5xl mx-auto text-left">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Refrigeration Dryers (+3&nbsp;°C PDP)
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
            <li>Energy-saving controls</li>
            <li>Zero-loss condensate drains</li>
            <li>Ideal for paint, automotive & general industry</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Protect equipment — Get consultation
          </Link>
        </section>

        <section id="desiccant" className="mt-12 max-w-5xl mx-auto text-left">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Adsorption (Desiccant) Dryers (to −40&nbsp;°C PDP)
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
            <li>Siemens SIMATIC PLC, smart purge/DPD modes</li>
            <li>Continuous duty for strict quality environments</li>
            <li>Pharma, electronics, precision optics, food</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-black px-6 py-3 rounded font-semibold"
          >
            Get ultra-dry air — Talk to an engineer
          </Link>
        </section>
      </main>

      <img
        src="/images/HPR-DRY.jpg"
        alt="Desiccant dryer installation"
        className="w-full h-48 md:h-72 lg:h-96 object-cover"
      />
    </SiteLayout>
  );
}

