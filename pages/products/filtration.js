import Head from "next/head";
import Link from "next/link";

export default function Filtration() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Air & Gas Filtration | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Coalescing, particulate, activated-carbon and sterile filters to ISO 8573-1. High-performance filtration with TechnoCore Ireland."
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Industrial Air & Gas Filtration
        </h1>
        <p className="text-gray-300 mb-6">
          TechnoCore supplies high-performance filtration solutions compliant
          with ISO 8573-1. We provide:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Coalescing filters for oil & water removal</li>
          <li>Particulate filters for dust protection</li>
          <li>Activated-carbon filters for oil vapour removal</li>
          <li>Sterile filters for pharma & food industries</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Correct filtration improves product quality, protects equipment and
          ensures compliance with industry regulations. TechnoCore engineers
          design and supply complete filter systems tailored to your needs.
        </p>

        <div className="mt-8">
          <Link href="/contact">
            <a className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold">
              🔒 Guarantee clean air — Request Solution
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
