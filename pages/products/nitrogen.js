// pages/products/nitrogen.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function NitrogenPage() {
  return (
    <SiteLayout>
      <Head>
        <title>PSA Nitrogen Generators (97–99.9995%) | TechnoCore Ireland</title>
        <meta
          name="description"
          content="On-site PSA nitrogen 97–99.9995% for laser cutting, food packaging, pharma & labs. SKID/BOX options, ROI & sizing, install & service across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/nitrogen" />
      </Head>

      {/* HERO: общий фон + логотип по центру поверх */}
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

      {/* ЦЕНТРАЛЬНЫЙ БЛОК (между картинками) */}
      <main className="bg-black px-6 pt-8 pb-10">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            PSA Nitrogen Generators (97–99.9995%)
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Generate high-purity nitrogen on-site and cut gas costs. TechnoCore sizes, supplies and
            installs PSA N<sub>2</sub> systems across Ireland with compact <strong>SKID</strong> and
            containerised <strong>BOX</strong> options tailored to your demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Applications</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Laser cutting & metal processing</li>
                <li>Food packaging & beverage</li>
                <li>Pharma / labs / R&amp;D</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Reduce cylinder dependence & logistics</li>
                <li>Stable 24/7 supply, predictable OPEX</li>
                <li>ROI & sizing calculation included</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            ✅ Cut nitrogen cost — Request Quote
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}

