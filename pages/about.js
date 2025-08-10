import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Page background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />

      <Head>
        <title>About TechnoCore | Nitrogen & Oxygen Generators, Air Dryers, Filtration in Ireland</title>
        <meta
          name="description"
          content="TechnoCore is Ireland’s engineering partner for industrial gas & air: PSA nitrogen and oxygen generators, air dryers, filtration systems, chillers, and turnkey SKID/BOX solutions."
        />
        <link rel="canonical" href="https://www.technocore.ie/about" />
      </Head>

      {/* HERO with separate hero image (optional different visual than page bg) */}
      <section
        className="relative h-[320px] md:h-[420px] flex items-center justify-center text-center overflow-hidden"
        aria-label="About TechnoCore hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400">About TechnoCore</h1>
          <p className="mt-4 text-gray-200">
            Engineering partner in Ireland delivering industrial gas & air solutions — from PSA generation to end‑to‑end
            turnkey systems for manufacturing, food & beverage, pharma, electronics and more.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: company story */}
          <article className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Who we are</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              TechnoCore is an Irish supplier and integrator of industrial gas generation and compressed‑air treatment.
              As a <strong>partner of OMEGA AIR</strong>, we design, deliver, install and support systems ranging from
              <strong> PSA Nitrogen (N₂)</strong> and <strong>Oxygen (O₂) generators</strong> to dryers, filtration,
              chillers and containerised <em>SKID/BOX</em> solutions.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              Our engineering team helps reduce total cost of ownership, stabilise quality and increase reliability. We
              size equipment by required flow, purity, and pressure‑dew‑point, comply with <strong>ISO 8573‑1</strong>,
              and integrate new systems with your existing infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mt-8 mb-3">What we deliver</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>System design, selection and performance calculation</li>
              <li>Supply, installation and commissioning</li>
              <li>Operator training and after‑sales support</li>
              <li>Turnkey SKID / container solutions</li>
              <li>Compressed‑air quality & energy audits</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-8 mb-3">Industries we serve</h3>
            <p className="text-gray-200">
              Food & beverage, packaging, pharmaceuticals & labs, electronics, metal processing & laser cutting,
              automotive & paint shops, and general manufacturing across Ireland.
            </p>

            <div className="mt-8 flex gap-3">
              <Link href="/" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">← Back to Home</Link>
              <Link href="/contact" className="border border-green-500 text-green-400 px-6 py-2 rounded hover:bg-green-500/10">Get a Quote</Link>
            </div>
          </article>

          {/* RIGHT: full product list */}
          <aside className="bg-black/60 backdrop-blur border border-green-500/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Full Product Portfolio</h2>
            <ul className="text-gray-100 space-y-2">
              <li>• <strong>PSA Nitrogen Generators</strong> (97–99.9995% purity) — N₂ Pack / Skid / Box</li>
              <li>• <strong>PSA Oxygen Generators</strong> (90–95% purity)</li>
              <li>• <strong>Refrigeration Air Dryers</strong> (PDP +3°C) — RDP/RDHP, zero‑loss drains</li>
              <li>• <strong>Adsorption / Desiccant Dryers</strong> (PDP −40°C) — BVA/BVL/BP, SIMATIC PLC</li>
              <li>• <strong>Filtration Systems</strong> — coalescing, particulate, activated carbon, sterile</li>
              <li>• <strong>Compressed‑Air Treatment</strong> — oil/water separators, condensate management</li>
              <li>• <strong>Chillers</strong> (PCI 2–180 kW)</li>
              <li>• <strong>Turnkey SKID / Container BOX</strong> for N₂ / O₂ / Air</li>
              <li>• <strong>Accessories</strong> — receivers, valves, sensors, analyzers</li>
            </ul>

            <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Key Advantages</h3>
            <ul className="text-gray-200 space-y-2">
              <li>✓ Lower operating cost vs. cylinders/cryogenic supply</li>
              <li>✓ Stable and compliant gas/air quality</li>
              <li>✓ Energy‑efficient controls and smart PLC</li>
              <li>✓ Local delivery, installation and support in Ireland</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
