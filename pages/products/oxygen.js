// pages/products/oxygen.js
import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function OxygenPage() {
  return (
    <SiteLayout>
      <Head>
        <title>PSA Oxygen Generators (90–95%) | TechnoCore Ireland</title>
        <meta
          name="description"
          content="On-site PSA oxygen 90–95% for aquaculture, medical & dental clinics, welding & metal cutting. SKID/BOX options, install & service across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/oxygen" />
      </Head>

      {/* HERO: общий фон + логотип по центру поверх (как на странице азота) */}
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

      {/* ЦЕНТРАЛЬНЫЙ БЛОК (идентично nitrogen.js) */}
      <main className="bg-black px-6 pt-8 pb-10">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            PSA Oxygen Generators (90–95%)
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Independent and efficient on-site oxygen supply for your process. TechnoCore sizes,
            supplies and installs PSA O<sub>2</sub> systems across Ireland with compact{" "}
            <strong>SKID</strong> and containerised <strong>BOX</strong> options tailored to your demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Applications</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Aquaculture &amp; fish farms</li>
                <li>Medical &amp; dental clinics</li>
                <li>Welding &amp; metal cutting</li>
              </ul>
            </div>
            <div>
              <h2 className="text-green-400 font-semibold mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>No cylinder logistics</li>
                <li>Stable flow, low energy use</li>
                <li>Safe &amp; scalable plug-and-play units</li>
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
          >
            Gain independence from cylinders — Contact Us
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}



