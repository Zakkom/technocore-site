import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function OxygenPage() {
  return (
    <SiteLayout>
      <Head>
        <title>PSA Oxygen Generators | TechnoCore Ireland</title>
        <meta
          name="description"
          content="PSA oxygen generators 90–95% purity for aquaculture, medical & dental, welding. Compact SKID/BOX, easy install, stable O₂ flow. Local support in Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/oxygen" />
      </Head>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          PSA Oxygen Generators
        </h1>

        <p className="text-gray-300 mb-6">
          TechnoCore provides PSA oxygen generators with 90–95% purity — a safe and reliable
          solution for <strong>aquaculture, medical & dental clinics, welding and metalworking</strong>.
          Installing an on-site O₂ system eliminates the need for continuous cylinder deliveries and
          ensures an uninterrupted oxygen supply.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Why choose TechnoCore?</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Compact SKID & BOX plug-and-play units</li>
          <li>Stable flow and low energy use</li>
          <li>Simple installation and maintenance</li>
          <li>Local delivery, service & support across Ireland</li>
        </ul>

        <Link
          href="/contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
        >
          Gain independence from cylinders — Contact Us
        </Link>
      </section>
    </SiteLayout>
  );
}

