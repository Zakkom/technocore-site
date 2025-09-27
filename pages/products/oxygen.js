import Head from "next/head";
import Link from "next/link";

export default function Oxygen() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Oxygen Generators | TechnoCore Ireland</title>
        <meta
          name="description"
          content="PSA oxygen generators 90–95% purity for aquaculture, clinics, welding and industry. Independent O₂ supply with TechnoCore Ireland."
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          PSA Oxygen Generators
        </h1>
        <p className="text-gray-300 mb-6">
          TechnoCore provides PSA oxygen generators with 90–95% purity — a safe
          and reliable solution for <strong>aquaculture, medical & dental
          clinics, welding and metalworking</strong>. Installing an on-site O₂
          system eliminates the need for continuous cylinder deliveries and
          ensures an uninterrupted oxygen supply.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Why choose TechnoCore?</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Compact SKID & BOX plug-and-play units</li>
          <li>Stable flow and low energy use</li>
          <li>Simple installation and maintenance</li>
          <li>Local delivery, service & support across Ireland</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact">
            <a className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold">
              💨 Gain independence from cylinders — Contact Us
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
