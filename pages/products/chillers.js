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

      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/chiller-pci.jpg')" }}
      />

      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          Chillers & Custom Turnkey Systems
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          We deliver turnkey solutions for process cooling, nitrogen/oxygen generation and compressed
          air: PCI chillers (2–180 kW), SKID/BOX systems, installation, commissioning and service.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <div>
            <h2 className="text-green-400 font-semibold mb-2">Scope</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Design & planning</li>
              <li>Installation & commissioning</li>
              <li>Maintenance & support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-green-400 font-semibold mb-2">Ideal for</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Laser systems & process cooling</li>
              <li>Integrated plants & utility upgrades</li>
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
      </main>

      <img
        src="/images/chiller-system.jpg"
        alt="Industrial chiller system"
        className="w-full object-cover"
      />
    </SiteLayout>
  );
}

