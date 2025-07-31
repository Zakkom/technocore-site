// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    {
      title: "Nitrogen Generators",
      description: `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.\n\nOur systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:\n- **Food packaging & beverage** industry\n- **Pharmaceutical and lab environments**\n- **Metal processing & laser cutting**\n\n✅ Reduce dependence on cylinder deliveries  \n✅ Lower your long-term nitrogen costs  \n✅ Compact SKID and BOX units available\n\n📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.\n\n👉 [Contact us today](#contact) for a free consultation.`
    },
    {
      title: "Oxygen Generators",
      description: `### Oxygen Generators for Medical & Industrial Use\n\nReliable **PSA oxygen generators** for on-site production of 90–95% pure oxygen.\n\nIdeal for:\n- Healthcare and clinics\n- Welding and metal cutting\n- Fish farming and aquaculture\n\nCompact plug-and-play systems with low energy consumption.`
    },
    {
      title: "Refrigeration Air Dryers",
      description: `### Refrigeration Air Dryers\n\nOmega Air’s RDP/RDHP dryers provide a pressure dew point of +3°C and flow rates up to 13200 m³/h.\n\n✅ Eco-friendly R513a refrigerant\n✅ Energy-saving zero-loss drains` 
    },
    {
      title: "Adsorption Dryers",
      description: `### Adsorption Dryers\n\nFor applications requiring ultra-dry compressed air with dew points down to -40°C.\n\n✔️ Siemens SIMATIC controller  \n✔️ Suitable for pharma, packaging, food & electronics.`
    },
    {
      title: "Filtration Systems",
      description: `### Air & Gas Filtration Systems\n\nFull range of Omega Air filters for removing water, oil and particles from compressed air.\n\nTypes include:\n- Coalescing filters\n- Activated carbon\n- Sterile & particulate filters\n\nISO 8573-1 compliant.`
    },
    {
      title: "Chillers & Custom solutions for gas laser cutting systems",
      description: `### Chillers & Custom Cooling\n\nPCI chillers (2–180 kW) for industrial applications including laser cutting, gas systems, and more.\n\nContainerized SKID/BOX versions available.`
    }
  ];

  return (
    <>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Air Dryers, Air & Gas Filtration, and Industrial Gas Solutions in Ireland." />
      </Head>

      <section id="products" className="bg-black text-white p-12 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(index)}
              className="bg-black border border-green-500 text-green-400 hover:bg-green-900 rounded p-6 text-left text-xl font-semibold shadow"
            >
              {product.title}
            </button>
          ))}
        </div>

        {selectedProduct !== null && (
          <div className="mt-10 bg-gray-900 border border-green-500 rounded-xl p-6 max-w-3xl mx-auto text-left prose prose-invert">
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-4 text-sm text-green-400 underline hover:text-green-200"
            >
              ← Back to products
            </button>
            <div
              dangerouslySetInnerHTML={{
                __html: productData[selectedProduct].description.replace(/\n/g, '<br />')
              }}
            />
          </div>
        )}
      </section>
    </>
  );
}

