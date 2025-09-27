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
          content="On-site PSA oxygen 90–95% for aquaculture, medical & dental, welding & cutting. Compact SKID/BOX, easy install & local service across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/oxygen" />
      </Head>

      <div
  className="h-40 md:h-56 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
/>
<div className="py-6 flex justify-center">
  <img src="/logo.png" alt="TechnoCore logo" className="h-14 md:h-16 w-auto" />
</div>

      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          PSA Oxygen Generators (90–95%)
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-4">
          Independent and efficient on-site O<sub>2</sub> in compact <strong>SKID/BOX</strong> packages.
          Easy to install and maintain with local support across Ireland.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mt-6">
          <div>
            <h2 className="text-green-400 font-semibold mb-2">Where it fits</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Aquaculture & fish farms</li>
              <li>Medical & dental clinics</li>
              <li>Welding & metal cutting</li>
            </ul>
          </div>
          <div>
            <h2 className="text-green-400 font-semibold mb-2">Why on-site O₂</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>No cylinder logistics or rentals</li>
              <li>Stable flow with low energy use</li>
              <li>Safe, scalable configurations</li>
            </ul>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
        >
          💨 Gain independence from cylinders — Contact Us
        </Link>
      </main>

      <img
        src="/images/oxygen-plant.jpg"
        alt="Oxygen generator plant"
        className="w-full h-48 md:h-72 lg:h-96 object-cover"
      />
    </SiteLayout>
  );
}


