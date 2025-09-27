import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function PaintBoothPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Paint Booth Air Preparation | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Complete air-prep for automotive & industrial spray booths: compressors, dryers, filtration & distribution. Clean, dry air for flawless finish."
        />
        <link rel="canonical" href="https://technocore.ie/products/paint-booth" />
      </Head>

      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/paint-booth-hero.jpg')" }}
      />

      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          Paint Booth Air Preparation
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          We deliver complete air-prep systems for spray booths: refrigeration or desiccant dryers,
          multi-stage filtration, distribution and control. Clean, dry air eliminates blushing,
          fisheyes and dust defects to ensure a consistent finish.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <div>
            <h2 className="text-green-400 font-semibold mb-2">What’s included</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Dryers (+3 °C or −40 °C PDP)</li>
              <li>Coalescing & activated-carbon filtration</li>
              <li>Condensate management & drains</li>
              <li>Distribution & drops to booths</li>
            </ul>
          </div>
          <div>
            <h2 className="text-green-400 font-semibold mb-2">Who we serve</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Bodyshops & refinish centres</li>
              <li>Industrial paint lines</li>
              <li>OEM and tier suppliers</li>
              <li>Across Dublin, Wicklow & Ireland</li>
            </ul>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
        >
          🎨 Make finishing flawless — Request System Quote
        </Link>
      </main>

      <img
        src="/images/paint-booth.jpg"
        alt="Paint booth air preparation"
        className="w-full object-cover"
      />
    </SiteLayout>
  );
}
