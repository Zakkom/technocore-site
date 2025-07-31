// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const productDetails = {
    "Nitrogen Generators": `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.\n\nOur systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:\n- **Food packaging & beverage** industry\n- **Pharmaceutical and lab environments**\n- **Metal processing & laser cutting**\n\n✅ Reduce dependence on cylinder deliveries  \n✅ Lower your long-term nitrogen costs  \n✅ Compact SKID and BOX units available\n\n📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.\n\n👉 [Contact us today](#contact) for a free consultation.`,
    "Oxygen Generators": `### On-Site Oxygen Generators for Industry in Ireland\n\nTechnoCore supplies reliable **PSA oxygen generators** for Irish industries that demand a continuous, on-demand oxygen supply.\n\n✓ Purity from **90–95%**  
✓ Compact, plug-and-play systems  
✓ Low operational cost\n\nIdeal for:  
- Medical & veterinary use  
- Oxy-fuel welding/cutting  
- Wastewater treatment\n\n📍 Based in Ireland – full technical support & system integration.\n\n👉 [Talk to us](#contact) about your oxygen needs.`,
    "Refrigeration Air Dryers": `### RDP & RDHP Refrigeration Dryers in Ireland\n\nMoisture can damage your equipment. Our **RDP** and **RDHP** refrigeration dryers deliver **PDP +3°C** and support capacities up to **13200 m³/h**.\n\n✓ Energy-efficient with **R513a refrigerant**  
✓ Zero-loss condensate drains  
✓ ISO 8573-1 Class 4 compliant\n\n🔧 For CNCs, painting lines, packing lines, and general air systems.`,
    "Adsorption Dryers": `### Heatless & Blower Purge Adsorption Dryers\n\nLooking for ultra-dry air? Our **R-DRY BVA/BVL/BP** units reach PDP **–40°C** and are designed for tough environments.\n\n✓ Siemens SIMATIC controller  
✓ Dew point monitoring (DPD mode)  
✓ Built for pharma, electronics, paint lines\n\nFull integration with compressors and N2/O2 systems.`,
    "Filtration Systems": `### Filtration Units for Air & Gas – ISO 8573-1\n\nOur filters remove **oil, particles, odors, and bacteria**.\n\n✓ Coalescing, activated carbon, particulate & sterile filters  
✓ Flow rates up to 48000 m³/h  
✓ High performance for laser, pharma, and food sectors.\n\n📦 Available as stand-alone or integrated units.`,
    "Chillers & Сustom solutions for gas laser cutting systems": `### Chillers & Laser Gas Supply Modules\n\nWe supply **PCI chillers** from 2–180 kW and **SKID/BOX units** for laser N2/O2 generation.\n\n✓ Temperature control for laser heads & optics  
✓ Modular and scalable turnkey containers  
✓ Built for Amada, Trumpf, Bystronic, Mazak, etc.\n\n🇮🇪 Local support in Ireland.`
  };

  const products = Object.keys(productDetails).map((title) => ({
    title,
    desc: productDetails[title].split("\n")[0] // Show first line in preview
  }));

  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProduct = (title) => {
    setExpandedProduct(expandedProduct === title ? null : title);
  };

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

      <section id="products" className="bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <article key={index} className="bg-black border border-green-500 rounded p-6 cursor-pointer" onClick={() => toggleProduct(product.title)}>
            <h3 className="text-xl font-semibold text-green-400 mb-2">{product.title}</h3>
            {expandedProduct === product.title && (
              <div className="text-gray-300 whitespace-pre-line text-sm" dangerouslySetInnerHTML={{ __html: productDetails[product.title].replace(/\n/g, "<br />") }} />
            )}
          </article>
        ))}
      </section>
    </>
  );
}

