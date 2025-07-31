// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units. These generators reduce dependency on bottled nitrogen and lower operational costs, ideal for packaging, laser cutting, and electronics."
    },
    {
      title: "Oxygen Generators",
      desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units. Used in water treatment, metal cutting, and aquaculture to reduce supply risks and improve reliability."
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m3/h, PDP +3°C, using R513a refrigerant and zero-loss drains. Maintain air system integrity and protect downstream equipment from moisture damage."
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes ensure maximum reliability in precision-demanding industries."
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant. Removes oil, dust, and water aerosols from compressed air for clean and safe operation."
    },
    {
      title: "Chillers & Сustom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable. Designed for industrial processes requiring temperature-controlled operations."
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

  return (
    <section id="products" className="bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-green-500 text-center mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <article
            key={index}
            onClick={() => setActiveProduct(activeProduct === index ? null : index)}
            className={`cursor-pointer bg-black border border-green-500 rounded p-6 transition-all duration-300 ${activeProduct === index ? 'bg-gray-800' : ''}`}
          >
            <h3 className="text-xl font-semibold text-green-400 mb-2">{product.title}</h3>
            {activeProduct === index && <p className="text-gray-300 mt-2">{product.desc}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
