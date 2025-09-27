import Head from "next/head";
import Link from "next/link";

export default function Chillers() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Chillers & Custom Solutions | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Industrial chillers (2–180 kW) and turnkey SKID/BOX solutions for nitrogen, oxygen and compressed air systems in Ireland."
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Chillers & Custom Turnkey Solutions
        </h1>
        <p className="text-gray-300 mb-6">
          TechnoCore supplies PCI industrial chillers from 2 to 180 kW and
          containerised SKID/BOX solutions for nitrogen, oxygen and compressed
          air systems. Our turnkey packages cover design, supply, installation,
          commissioning and service — all from a single partner in Ireland.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Applications</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Laser cutting cooling</li>
          <li>Compressor & process cooling</li>
          <li>Complete gas-generation plants</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact">
            <a className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold">
              ❄️ Reliable cooling — Leave a Request
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
