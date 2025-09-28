// pages/products/chillers.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function ChillersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Chillers & Turnkey SKID/BOX Systems | TechnoCore Ireland</title>
        <meta
          name="description"
          content="PCI chillers (2–180 kW) and SKID/BOX systems for nitrogen, oxygen and compressed air. Design, install & service across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/chillers" />
      </Head>

      {/* HERO: фон + логотип в центре */}
      <div className="relative">
        <div
          className="h-40 md:h-56 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/plant-hero.jpg')" }}
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
      <main className="bg-black px-6 pt-8 pb-10 text-center">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            Chillers &amp; Custom Turnkey Systems
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            We deliver turnkey solutions for process cooling, nitrogen/oxygen generation and compressed
            air: PCI chillers (2–180 kW), SKID/BOX systems, installation, commissioning and service.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Scope</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Design &amp; planning</li>
                <li>Installation &amp; commissioning</li>
                <li>Maintenance &amp; support</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Ideal for</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Laser systems &amp; process cooling</li>
                <li>Integrated plants &amp; utility upgrades</li>
                <li>Modular containerised deployments</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            ❄️ Discuss a turnkey package — Contact TechnoCore
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}


