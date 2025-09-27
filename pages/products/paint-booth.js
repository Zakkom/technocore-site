import Head from "next/head";
import Link from "next/link";

export default function PaintBooth() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Paint Booth Air Preparation | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Complete compressed-air systems for automotive and industrial spray booths. Dry, clean air for perfect paint results."
        />
      </Head>

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Paint Booth Air Preparation
        </h1>
        <p className="text-gray-300 mb-6">
          For automotive and industrial spray booths, TechnoCore designs and
          delivers complete air-preparation systems: compressors, refrigeration
          or adsorption dryers, multi-stage filtration and distribution piping.
          Clean, dry compressed air eliminates blushing, fisheyes and dust
          defects, ensuring a consistent high-quality finish.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mb-2">Why TechnoCore?</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Custom system design</li>
          <li>Local installation and service</li>
          <li>Turnkey packages for garages and factories</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact">
            <a className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold">
              🎨 Perfect your paint finish — Request Quote
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
