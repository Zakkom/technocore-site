import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

const items = [
  {
    key: "nitrogen",
    title: "Nitrogen Generators",
    desc: "PSA 97–99.9995% · SKID/BOX · ROI & sizing",
    href: "/products/nitrogen",
    img: "/images/n2-generator.jpg",
  },
  {
    key: "oxygen",
    title: "Oxygen Generators",
    desc: "PSA 90–95% · SKID/BOX · Low energy use",
    href: "/products/oxygen",
    img: "/images/o2-skid.jpg",
  },
  {
    key: "ref-dryers",
    title: "Refrigeration Air Dryers",
    desc: "+3 °C PDP · up to 13,200 m³/h",
    href: "/products/air-dryers",
    img: "/images/rdp-dryer.jpg",
  },
  {
    key: "ads-dryers",
    title: "Adsorption (Desiccant) Dryers",
    desc: "to −40 °C PDP · SIMATIC PLC",
    href: "/products/air-dryers#desiccant",
    img: "/images/HPR-DRY.jpg",
  },
  {
    key: "filtration",
    title: "Filtration Systems",
    desc: "Coalescing · Particulate · Carbon · Sterile",
    href: "/products/filtration",
    img: "/images/filtration-units.jpg",
  },
  {
    key: "paint",
    title: "Paint Booth Air Preparation",
    desc: "Dryers · Multi-stage filters · Distribution",
    href: "/products/paint-booth",
    img: "/images/paint-booth.jpg",
  },
  {
    key: "chillers",
    title: "Chillers & Turnkey Systems",
    desc: "PCI 2–180 kW · SKID/BOX · Install & service",
    href: "/products/chillers",
    img: "/images/chiller-pci.jpg",
  },
];

export default function ProductsIndex() {
  return (
    <SiteLayout>
      <Head>
        <title>Products | TechnoCore</title>
        <meta name="description" content="TechnoCore products: nitrogen & oxygen generators, air dryers, filtration, paint booth air prep, chillers & turnkey packages." />
        <link rel="canonical" href="https://technocore.ie/products" />
      </Head>

      <div className="relative">
  {/* общий фон (не фото продукции) */}
  <div
    className="h-48 md:h-72 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
  />
  {/* логотип по центру поверх */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/logo.png"
      alt="TechnoCore"
      className="h-16 md:h-24 w-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
    />
  </div>
</div>

<header className="text-center px-4 pt-6 pb-2">
  <h1 className="text-3xl md:text-4xl font-bold">
    Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland
  </h1>
  <p className="text-green-400 mt-2 text-lg md:text-xl">
    PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations
  </p>
  <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
    Engineering supplier in Ireland for gas generation and air treatment — from PSA nitrogen/oxygen
    generators to filtration, chillers, air dryers, and fully integrated turnkey compressed air systems.
  </p>
</header>

      <main className="bg-black px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 text-center mb-8">
          Products
        </h1>

        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.key} className="bg-gray-900 border border-green-500 rounded overflow-hidden flex flex-col">
              <div className="w-full h-44 md:h-52 lg:h-56">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 grow">
                <h2 className="text-lg font-semibold text-green-400">{it.title}</h2>
                <p className="text-gray-300 mt-2">{it.desc}</p>
              </div>
              <div className="p-5 pt-0">
                <Link href={it.href} className="inline-block bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* нижнее фоновое фото узкое, чтобы не «ломало» десктоп */}
      <div
        className="h-40 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
      />
    </SiteLayout>
  );
}
