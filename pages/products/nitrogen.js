import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function Nitrogen() {
  return (
    <SiteLayout>
      <Head>
        <title>Nitrogen Generators | TechnoCore Ireland</title>
        <meta
          name="description"
          content="PSA nitrogen generators 97–99.9995% purity for laser cutting, food packaging, pharma. Reduce gas costs up to 10x with TechnoCore Ireland."
        />
        <meta
          name="keywords"
          content="Nitrogen generator, PSA nitrogen, laser cutting gas, industrial nitrogen Ireland"
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          PSA Nitrogen Generators
        </h1>
        <p className="text-gray-300 mb-6">
          TechnoCore supplies industrial PSA nitrogen generators in Ireland
          delivering purity from 97% up to 99.9995%. Our systems are widely used
          in <strong>laser cutting, food packaging, beverage production,
          pharmaceuticals and laboratories</strong>. By installing an on-site
          nitrogen generator, your business reduces dependence on costly gas
          cylinders, cuts operating costs, and ensures a stable 24/7 gas
          supply.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Benefits</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Reduce nitrogen costs by up to 10×</li>
          <li>SKID and BOX plug-and-play units</li>
          <li>Installation, commissioning & service in Ireland</li>
          <li>ROI calculation and system sizing included</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Applications</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Metal laser cutting</li>
          <li>Food & beverage packaging</li>
          <li>Pharma and lab gas supply</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact">
            <a className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold">
              ✅ Cut nitrogen costs — Request Quote
            </a>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
