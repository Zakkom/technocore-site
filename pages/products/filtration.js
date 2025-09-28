// pages/products/filtration.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function FiltrationPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Industrial Air &amp; Gas Filtration | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Air & gas filtration systems ISO 8573-1: coalescing, particulate, activated-carbon, sterile. Improve air quality, protect equipment, meet compliance."
        />
        <link rel="canonical" href="https://technocore.ie/products/filtration" />
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
      <main className="bg-black px-6 pt-8 pb-10">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            Industrial Air &amp; Gas Filtration
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            TechnoCore supplies high-performance filtration systems compliant with{" "}
            <strong>ISO&nbsp;8573-1</strong>: coalescing, particulate, activated-carbon and sterile
            filters. Improve air quality, protect equipment, and meet compliance requirements in
            critical industries.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">We provide</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Oil/water removal (coalescing filters)</li>
                <li>Dust protection (particulate filters)</li>
                <li>Oil vapour removal (activated-carbon)</li>
                <li>Sterile filters for pharma &amp; food-grade</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Protect downstream equipment</li>
                <li>Improve product quality</li>
                <li>Meet ISO 8573-1 standards</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Guarantee clean air — Request Solution
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}
