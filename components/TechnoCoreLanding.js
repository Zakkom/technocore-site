// TechnoCoreLanding.js — финальная версия страницы с кликабельными заголовками карточек

import React, { useState } from "react";
import Head from "next/head";

const seoDescriptions = {
  "Nitrogen Generators": `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions

Looking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.

Our systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:
- **Food packaging & beverage** industry
- **Pharmaceutical and lab environments**
- **Metal processing & laser cutting**

✅ Reduce dependence on cylinder deliveries  
✅ Lower your long-term nitrogen costs  
✅ Compact SKID and BOX units available

📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.

👉 [Contact us today](#contact) for a free consultation.`,
  "Oxygen Generators": `### PSA Oxygen Generators in Ireland

On-site oxygen generation with 90–95% purity for healthcare, industry, and welding:
- Plug-and-play PSA units  
- No need for cylinder refills

TechnoCore delivers solutions across Ireland — fast installation and minimal maintenance.`,
  "Refrigeration Air Dryers": `### Industrial Refrigeration Air Dryers

TechnoCore offers RDP and RDHP models:
- PDP +3°C for clean, dry compressed air
- Up to 13200 m³/h capacity
- Refrigerant R513a and zero-loss drains`,
  "Adsorption Dryers": `### Adsorption Dryers for Ultra-Dry Compressed Air

We supply R-DRY BVA / BVL / BP models with:
- PDP down to –40°C  
- Siemens SIMATIC PLC  
- Energy-saving DPD mode`,
  "Filtration Systems": `### Gas & Air Filtration Systems

Complete ISO 8573-1 compliant range:
- Coalescing, particulate, activated carbon, sterile filters
- Long-life and high-performance design`,
  "Chillers & Custom solutions for gas laser cutting systems": `### Chillers & SKID Solutions for Gas Lasers

TechnoCore PCI chillers: 2–180 kW
- For nitrogen and oxygen supply
- Modular BOX/SKID units for laser cutting systems`
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
    desc: "RDP/RDHP dryers with capacities up to 13200 m³/h, PDP +3°C, using R513a refrigerant and zero-loss drains."
  },
  {
    title: "Adsorption Dryers",
    desc: "R-DRY BVA/BVL/BP models with PDP down to –40°C. Siemens SIMATIC control and energy-saving DPD modes."
  },
  {
    title: "Filtration Systems",
    desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant."
  },
  {
    title: "Chillers & Custom solutions for gas laser cutting systems",
    desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable."
  }
];

export default function TechnoCoreLanding() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Air Dryers, Gas Filtration & Turnkey Air Systems in Ireland." />
        <meta name="keywords" content="Nitrogen generators, Oxygen generators, Air dryers, Filtration systems, PSA, Chillers, Ireland" />
        <meta property="og:title" content="TechnoCore" />
        <meta property="og:description" content="Industrial Gas & Air Solutions in Ireland: PSA Nitrogen & Oxygen Generators, Dryers, Filters & Turnkey Installations." />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://technocore.ie/" />
      </Head>

      <div className="bg-black text-white font-sans">
        <header className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12">
          <img src="/images/top-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="z-10 relative">
            <img src="/logo.png" alt="TechnoCore logo" className="h-20 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Gas Filtration · Turnkey Installations</h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, air dryers, filtration, chillers, and turnkey compressed air systems.</p>
            <nav className="mt-6 space-x-4 text-sm">
              <a href="#products" className="hover:text-green-400">Products</a>
              <a href="#gallery" className="hover:text-green-400">Gallery</a>
              <a href="#about" className="hover:text-green-400">About</a>
              <a href="#contact" className="hover:text-green-400">Contact</a>
            </nav>
          </div>
        </header>

        <section id="products" className="p-8 text-center">
          <h2 className="text-2xl font-bold text-green-500 mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product, i) => (
              <div key={i} className="bg-black border border-green-500 rounded p-4">
                <h3
                  onClick={() => setSelectedProduct(product.title)}
                  className="text-green-400 font-semibold text-lg cursor-pointer hover:underline"
                >
                  {product.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{product.desc}</p>
              </div>
            ))}
          </div>
          {selectedProduct && (
            <div className="bg-[#111827] border border-green-600 text-left max-w-3xl mx-auto p-6 rounded">
              <button onClick={() => setSelectedProduct(null)} className="text-green-400 text-sm mb-2 underline">← Back to products</button>
              <div className="prose prose-invert text-gray-100" dangerouslySetInnerHTML={{ __html: seoDescriptions[selectedProduct].replace(/\n/g, '<br/>') }} />
            </div>
          )}
        </section>

        <section id="gallery" className="bg-black p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["n2-generator.jpg", "rdp-dryer.jpg", "filtration-units.jpg"].map((img, idx) => (
            <div key={idx} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <img src={`/images/${img}`} alt={img} className="object-cover w-full h-full" />
            </div>
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
          <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline hover:text-green-400">sales@technocore.ie</a></p>
          <p className="text-gray-400">Phone: +353 85 231 44 30</p>
          <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
        </section>

        <footer className="bg-black border-t border-green-500 py-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

