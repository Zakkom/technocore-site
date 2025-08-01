// Full updated and fixed version of TechnoCoreLanding.js with clickable SEO popups and background fixes

import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units.",
      seoText: `PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At TechnoCore, we offer high-purity PSA nitrogen generators tailored for industrial use across Ireland.\n\nOur systems deliver 97% to 99.9995% nitrogen purity, making them ideal for:\n- Food packaging & beverage industry\n- Pharmaceutical and lab environments\n- Metal processing & laser cutting\n\n✅ Reduce dependence on cylinder deliveries\n✅ Lower your long-term nitrogen costs\n✅ Compact SKID and BOX units available\n\n📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.\n\n👉 Contact us today at sales@technocore.ie for a free consultation.`
    },
    {
      title: "Oxygen Generators",
      desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units.",
      seoText: "High-efficiency PSA oxygen generators for medical, laboratory, and industrial needs. Contact TechnoCore for local support."
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m3/h, PDP +3°C, using R513a refrigerant and zero-loss drains.",
      seoText: "Advanced RDP/RDHP dryers by TechnoCore. High-capacity, energy-efficient, zero-loss drainage."
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes.",
      seoText: "TechnoCore’s R-DRY adsorption dryers ensure deep drying with PDP down to -40°C. Suitable for pharma, lab and food applications."
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant.",
      seoText: "Full gas filtration line – ISO 8573-1 compliant. Coalescing, carbon, sterile filters from TechnoCore."
    },
    {
      title: "Chillers & Сustom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable.",
      seoText: "Chillers and integrated SKID/BOX cooling units for laser gas systems – scalable and efficient."
    }
  ];

  const images = [
    { src: "/images/n2-generator.jpg", alt: "Nitrogen Generator - N2-Pack" },
    { src: "/images/o2-skid.jpg", alt: "Oxygen Skid System" },
    { src: "/images/rdp-dryer.jpg", alt: "Refrigeration Dryer RDP" },
    { src: "/images/r-dry-adsorption.jpg", alt: "Adsorption Dryer R-DRY" },
    { src: "/images/chiller-pci.jpg", alt: "Chiller PCI Unit" },
    { src: "/images/filtration-units.jpg", alt: "Filtration Units" }
  ];

  return (
    <div className="relative bg-black text-white font-sans scroll-smooth overflow-hidden">
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Air Dryers, Air & Gas Filtration, and Industrial Gas Solutions in Ireland." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
      <div className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }} />

      <div className="relative z-10">
        <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <a href="#" className="text-white text-lg font-bold">TechnoCore</a>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
              <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
              <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
              <a href="#about" className="text-gray-300 hover:text-green-400">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400">Contact</a>
            </div>
          </div>
        </nav>

        <header className="flex flex-col items-center justify-center text-center px-6 py-12">
          <div className="relative w-auto h-40 mb-6">
            <img src="/logo.png" alt="TechnoCore logo" className="h-full w-auto mx-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
          <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations</h2>
          <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">
            Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, chillers, and turnkey compressed air solutions.
          </p>
        </header>

        <section id="products" className="bg-black px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-black border border-green-500 rounded p-6 relative">
              <h3
                className="text-xl font-semibold text-green-400 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{product.desc}</p>
            </div>
          ))}
        </section>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-green-500 rounded-lg p-6 max-w-2xl w-full">
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-green-400 text-sm mb-4 underline"
              >
                ← Back to products
              </button>
              <div className="whitespace-pre-wrap text-gray-300">
                {selectedProduct.seoText}
              </div>
            </div>
          </div>
        )}

        <section id="gallery" className="bg-black p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <figure key={idx} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
            </figure>
          ))}
        </section>

        <section id="about" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-500">About TechnoCore</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            TechnoCore provides integrated gas and air treatment systems in Ireland. We offer nitrogen and oxygen generators, dryers, filtration, and full turnkey compressed air solutions.
          </p>
        </section>

        <section id="contact" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
          <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a></p>
          <p className="text-gray-400">Phone: +353 85 231 44 30</p>
          <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
          <!-- Form stays same -->
        </section>

        <footer className="bg-black border-t border-green-500 mt-12 py-6 text-center text-gray-400 text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="mb-2 md:mb-0">
                <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
              </div>
              <div className="space-x-4">
                <a href="#products" className="hover:text-green-400">Products</a>
                <a href="#about" className="hover:text-green-400">About</a>
                <a href="#contact" className="hover:text-green-400">Contact</a>
              </div>
            </div>
            <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
