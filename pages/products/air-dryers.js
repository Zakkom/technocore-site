// pages/products/air-dryers.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Industrial Air Dryers | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Refrigeration and adsorption air dryers for industrial compressed air. PDP +3°C to −40°C. Energy-saving, zero-loss drains, Siemens SIMATIC controls."
        />
        <link rel="canonical" href="https://technocore.ie/products/air-dryers" />
      </Head>

      {/* HERO: общий фон + логотип по центру (единый стиль со страницами продуктов) */}
      <div className="relative">
        <div
          className="h-40 md:h-56 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="TechnoCore"
            className="h-16 md:h-20 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* ЦЕНТРАЛЬНЫЙ БЛОК */}
      <main className="bg-black px-6 pt-8 pb-10">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            Refrigeration &amp; Adsorption Air Dryers
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Protect your equipment and product quality. TechnoCore supplies{" "}
            <strong>refrigeration dryers</strong> (PDP +3&nbsp;°C) and{" "}
            <strong id="desiccant">adsorption (desiccant) dryers</strong> (PDP −40&nbsp;°C) for
            automotive, pharma, food and manufacturing — with energy-saving controls and zero-loss
            condensate management.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Energy-saving controls (incl. Siemens SIMATIC)</li>
                <li>Zero-loss condensate drains</li>
                <li>High flow rates up to 13,200 m³/h</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Less corrosion &amp; downtime</li>
                <li>Consistent air quality (ISO 8573-1)</li>
                <li>Lower maintenance costs</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Protect your equipment — Get Consultation
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}



