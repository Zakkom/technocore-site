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
          content="On-site PSA nitrogen generation 97–99.9995% for laser cutting, food packaging, pharma & labs. SKID/BOX options, ROI & sizing, install & service across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/nitrogen" />
      </Head>

      {/* узкий баннер */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/n2-generator.jpg')" }}
      />

      {/* центральный блок */}
      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          PSA Nitrogen Generators (97–99.9995%)
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-4">
          Generate high-purity nitrogen on-site and cut gas costs. TechnoCore sizes, supplies and
          installs PSA N<sub>2</sub> systems across Ireland with compact <strong>SKID</strong> and
          containerised <strong>BOX</strong> options tailored to your demand.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mt-6">
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
      </main>

      {/* нижняя картинка */}
      <img
        src="/images/n2-box-unit.jpg"
        alt="Nitrogen generator installation"
        className="w-full object-cover"
      />
    </SiteLayout>
  );
}
