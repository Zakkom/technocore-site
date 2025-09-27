import Head from "next/head";
import Link from "next/link";

export default function ProductsIndex() {
  const products = [
    {
      key: "nitrogen",
      title: "Nitrogen Generators",
      desc:
        "PSA nitrogen systems with 97–99.9995% purity. Compact SKID and container BOX options sized to your demand.",
      href: "/products/nitrogen",
    },
    {
      key: "oxygen",
      title: "Oxygen Generators",
      desc:
        "On-site PSA oxygen (90–95% purity) in plug-and-play SKID/BOX packages. Easy to install, stable O₂ flow.",
      href: "/products/oxygen",
    },
    {
      key: "air-dryers",
      title: "Air Dryers",
      desc:
        "Refrigeration dryers (+3 °C PDP) and adsorption/desiccant dryers (to −40 °C PDP) up to 13,200 m³/h.",
      href: "/products/air-dryers",
    },
    {
      key: "filtration",
      title: "Air & Gas Filtration",
      desc:
        "Coalescing, particulate, activated-carbon and sterile filters. Complete ISO 8573-1 compliant filter trains.",
      href: "/products/filtration",
    },
    {
      key: "paint-booth",
      title: "Paint Booth Air Preparation",
      desc:
        "Complete compressed-air preparation for automotive & industrial spray booths — dry, clean, consistent air.",
      href: "/products/paint-booth",
    },
    {
      key: "chillers",
      title: "Chillers & Turnkey Systems",
      desc:
        "PCI chillers (2–180 kW) and packaged SKID/BOX systems for N₂/O₂ and compressed air — design to commissioning.",
      href: "/products/chillers",
    },
  ];

  return (
    <main className="bg-black text-white font-sans min-h-screen">
      <Head>
        <title>Products | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Explore TechnoCore products: Nitrogen & Oxygen Generators, Refrigeration & Adsorption Air Dryers, Air & Gas Filtration, Paint Booth Air Preparation, and Chillers/Turnkey systems."
        />
        <meta
          name="keywords"
          content="nitrogen generators, oxygen generators, air dryers, desiccant dryer, refrigeration dryer, air filtration, paint booth air, chillers, turnkey systems, Ireland"
        />
        <link rel="canonical" href="https://technocore.ie/products" />
      </Head>

      <header className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">
          Products
        </h1>
        <p className="text-gray-300 mt-3 max-w-3xl">
          Industrial gas & air solutions for Irish manufacturing: PSA nitrogen and
          oxygen generation, refrigeration and desiccant air drying, ISO 8573-1
          filtration, paint-booth air preparation and complete turnkey systems.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.key}
              className="bg-black border border-green-500 rounded p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold text-green-400 mb-2">
                {p.title}
              </h2>
              <p className="text-gray-300 mb-5 flex-1">{p.desc}</p>
              <div className="flex gap-3">
                <Link href={p.href} className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">
                  Learn more
                </Link>
                <Link href="/contact" className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-4 py-2 rounded">
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
