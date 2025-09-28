// pages/products/paint-booth.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function PaintBoothPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Paint Booth Air Preparation | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Complete air preparation for paint booths: compressors, dryers, filters, air lines. Clean, dry air for defect-free painting. Turnkey systems for automotive & industrial."
        />
        <link rel="canonical" href="https://technocore.ie/products/paint-booth" />
      </Head>

      {/* HERO: фон + логотип в центре */}
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
            Paint Booth Air Preparation
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            For automotive and industrial paint booths, TechnoCore delivers turnkey air preparation
            systems: compressors, air dryers, filtration and piping. Ensure clean, dry air for
            flawless painting results.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Applications</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Automotive paint shops</li>
                <li>Industrial coating facilities</li>
                <li>Furniture &amp; metal finishing</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Clean, dry air = flawless paint finish</li>
                <li>Custom-designed systems</li>
                <li>End-to-end installation &amp; support</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Make painting flawless — Request Quote
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}


