// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    {
      title: "Nitrogen Generators",
      description: `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.\n\nOur systems deliver **97% to 99.9995% nitrogen purity**, making // pages/index.js
import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units.",
      seo: `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.\n\nOur systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:\n- **Food packaging & beverage** industry\n- **Pharmaceutical and lab environments**\n- **Metal processing & laser cutting**\n\n✅ Reduce dependence on cylinder deliveries  \n✅ Lower your long-term nitrogen costs  \n✅ Compact SKID and BOX units available\n\n📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.\n\n👉 [Contact us today](#contact) for a free consultation.`
    },
    {
      title: "Oxygen Generators",
      desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units.",
      seo: `### PSA Oxygen Generators in Ireland – Safe, Efficient, On-Site Oxygen\n\nAt **TechnoCore**, we supply **PSA oxygen generators** delivering 90–95% oxygen purity for medical and industrial applications.\n\nIdeal for:\n- **Healthcare & clinics**\n- **Aquaculture & ozone generation**\n- **Welding and metal cutting**\n\n✅ Reduce oxygen delivery costs  \n✅ Built-in safety monitoring\n✅ Compact, easy to install systems\n\n📍 Serving customers across Ireland from our Dublin & Wicklow base.`
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m3/h, PDP +3°C, using R513a refrigerant and zero-loss drains.",
      seo: `### Refrigeration Air Dryers – Moisture Control for Compressed Air\n\nWe supply **RDP/RDHP dryers** to ensure dry, clean compressed air.\n\nKey features:\n- **+3°C Pressure Dew Point (PDP)**\n- **Environmentally friendly R513a refrigerant**\n- **Flow up to 13200 m³/h**\n- **Zero-loss condensate drains**\n\n📅 Ideal for workshops, food & pharma industries.`
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes.",
      seo: `### Adsorption Dryers – For Ultra-Dry Air Applications\n\nOur **R-DRY series adsorption dryers** deliver a PDP down to -40°C.\n\n✅ Siemens SIMATIC control  \n✅ Energy-saving DPD modes  \n✅ Compact modular design\n\nUse cases:\n- Paint booths\n- Laboratory compressed air systems\n- Food and beverage lines`
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant.",
      seo: `### Filtration Systems for Air & Gas\n\n**Coalescing, particulate, activated carbon and sterile filters** compliant with ISO 8573-1.\n\n💧 Removes oil, dust, and water particles  \n🔧 Options from 1/8'' to DN300 pipe sizes\n\nUsed in:\n- Compressed air prep\n- Food and pharma industries\n- Paint shops & packaging lines`
    },
    {
      title: "Chillers & Custom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable.",
      seo: `### Industrial Chillers & Custom SKID Systems\n\nTechnoCore delivers **PCI chillers (2–180 kW)** and fully integrated SKID/BOX systems.\n\nApplications:\n- Gas laser cutting cooling\n- Food & beverage cooling loops\n- O2/N2 generator modules\n\n🚀 Modular, compact & efficient\n👉 Scalable up to large facilities`
    }
  ];

  return (
    <>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="PSA nitrogen and oxygen generators, dryers, chillers and filtration for industrial air and gas in Ireland." />
        <meta property="og:title" content="TechnoCore | Gas & Air Equipment Ireland" />
        <meta property="og:description" content="Supplier of OMEGA AIR solutions: nitrogen generators, air dryers, chillers & more for Ireland's industries." />
      </Head>

      <main className="bg-black text-white min-h-screen p-6 font-sans">
        <header className="text-center py-6">
          <img src="/logo.png" alt="TechnoCore logo" className="h-20 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Compressed Air & Gas Solutions in Ireland</h1>
          <p className="text-green-500 mt-2">PSA Systems · Air Dryers · Filtration · Chillers</p>
        </header>

        <section id="products" className="py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-green-400">Products</h2>
          {activeProduct === null ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product, idx) => (
                <button
                  key={idx}
                  className="border border-green-500 rounded-lg p-4 text-left hover:bg-green-900"
                  onClick={() => setActiveProduct(idx)}
                >
                  <h3 className="text-lg font-bold text-green-400">{product.title}</h3>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-gray-900 p-6 rounded-lg">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: products[activeProduct].seo.replace(/\n/g, '<br/>') }}
              />
              <button
                onClick={() => setActiveProduct(null)}
                className="mt-6 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
              >
                ← Back to products
              </button>
            </div>
          )}
        </section>

        <footer className="border-t border-green-500 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>TechnoCore — Compressed Air & Gas Engineering | sales@technocore.ie | Dublin / Wicklow, Ireland</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

