import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function FiltrationPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Air & Gas Filtration | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Industrial filtration solutions: coalescing, particulate, activated-carbon and sterile filters. ISO 8573-1 compliant, engineered and delivered across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/filtration" />
      </Head>

      {/* Узкая верхняя картинка */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/filtration-bg.jpg')" }}
      />

      {/* Текстовый блок на отдельном фоне */}
      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          Industrial Air & Gas Filtration
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          TechnoCore supplies high-performance filtration solutions compliant with ISO 8573-1.
          We provide coalescing filters for oil & water removal, particulate filters for dust
          protection, activated-carbon filters for vapour removal and sterile filters for food
          & pharma industries.
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Correct filtration improves product quality, protects equipment and ensures
          compliance with industry regulations. TechnoCore engineers design and supply
          complete filter systems tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
        >
          🔒 Guarantee clean air — Request Solution
        </Link>
      </main>

      {/* Нижнее фото */}
      <div className="w-full">
        <img
          src="/images/filtration-units.jpg"
          alt="Filtration systems"
          className="w-full object-cover"
        />
      </div>
    </SiteLayout>
  );
}
