// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units."
    },
    {
      title: "Oxygen Generators",
      desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units."
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m3/h, PDP +3°C, using R513a refrigerant and zero-loss drains."
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes."
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant."
    },
    {
      title: "Chillers & Сustom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable."
    }
  ];

  const images = [
    { src: "/images/n2-generator.jpg", alt: "Nitrogen Generator - N2-Pack" },
    { src: "/images/o2-skid.jpg", alt: "Oxygen Skid System" },
    { src: "/images/rdp-dryer.jpg", alt: "Refrigeration Dryer RDP" },
    { src: "/images/r-dry-adsorption.jpg", alt: "Adsorption Dryer R-DRY" },
    { src: "/images/chiller-pci.jpg", alt: "Chiller PCI Unit" },
    { src: "/images/filtration-units.jpg", alt: "Filtration Units" },
    { src: "/images/n2-box-unit.jpg", alt: "N2 Box Generator Unit" },
    { src: "/images/12345.jpg", alt: "12345" },
    { src: "/images/6789.jpg", alt: "6789" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Service",
      "name": product.title,
      "description": product.desc,
      "provider": {
        "@type": "Organization",
        "name": "TechnoCore",
        "url": "https://technocore.ie"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Air Dryers, Air & Gas Filtration, and Industrial Gas Solutions in Ireland." />
        <meta name="keywords" content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration systems, PSA, Chillers, Refrigeration Air Dryers, Compressed Air, Industrial gas treatment, Ireland" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/" />
        <meta property="og:title" content="TechnoCore" />
        <meta property="og:description" content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland." />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }} />

        <div className="relative z-10">
          <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
              <a href="/" className="text-white text-lg font-bold">TechnoCore</a>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
                <a href="/#products" className="text-gray-300 hover:text-green-400">Products</a>
                <a href="/#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
                <a href="/#about" className="text-gray-300 hover:text-green-400">About</a>
                <a href="/#contact" className="text-gray-300 hover:text-green-400">Contact</a>
              </div>
            </div>
          </nav>

          <header id="hero" className="flex flex-col items-center justify-center text-center px-6 py-12">
            <img src="/logo.png" alt="TechnoCore logo" className="h-40 w-auto mb-6 mx-auto" />
            <h1 className="text-3xl md:text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations</h2>
            <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">
              Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, chiller, and turnkey compressed air solutions.
            </p>
          </header>

          <section id="products" className="bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <article key={index} className="bg-black border border-green-500 rounded p-6">
                <h3
                  className="text-xl font-semibold text-green-400 mb-2 cursor-pointer hover:underline"
                  onClick={() => toggleDescription(index)}
                >
                  {product.title}
                </h3>
                {activeIndex === index && (
                  <p className="text-gray-300 mt-2 transition-all duration-300 ease-in-out">{product.desc}</p>
                )}
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}