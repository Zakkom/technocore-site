import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";

export default function TechnoCoreLanding() {
  const products = [
    {
      title: "Nitrogen Generators",
      desc:
        "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units.",
      seo: `TechnoCore supplies industrial PSA nitrogen generators across Ireland with purity from 97% to 99.9995%. Typical applications include laser cutting, food packaging, beverage production, pharma and laboratories. By installing an on‑site generator you reduce dependency on cylinder deliveries, cut long‑term gas costs and secure a stable supply 24/7. We offer compact SKID and container BOX solutions sized to your demand, with installation and service provided locally in Ireland.

• Reduce nitrogen costs vs bottled gas
• Sizing and ROI calculation included
• SKID / BOX plug‑and‑play options

Looking to cut operating costs and improve reliability? Request a free consultation today.`,
      cta: "Cut nitrogen costs — Get a quote"
    },
    {
      title: "Oxygen Generators",
      desc:
        "On‑site PSA oxygen generators (90–95% purity) in compact plug‑and‑play units.",
      seo: `TechnoCore provides PSA oxygen generators with 90–95% purity for aquaculture, medical and dental clinics, welding and metalworking. On‑site O₂ eliminates the logistics and rental costs of cylinders, and ensures a stable, safe and efficient oxygen supply. Systems are easy to install and maintain and are available in compact SKID/BOX configurations with full local support in Ireland.

• Independent oxygen supply
• Low energy consumption and high reliability
• Installation, commissioning and service in Ireland`,
      cta: "Switch to on‑site oxygen — Contact us"
    },
    {
      title: "Refrigeration Air Dryers",
      desc:
        "+3°C PDP refrigeration dryers (RDP/RDHP) up to 13,200 m³/h with zero‑loss drains.",
      seo: `Moisture in compressed air damages equipment and reduces product quality. TechnoCore supplies industrial‑grade refrigeration dryers with pressure dew point of +3 °C for general manufacturing, paint and automotive applications. Our units feature energy‑saving controls and zero‑loss condensate drains, and are sized for high flows up to 13,200 m³/h. We survey your site, select the correct capacity and provide local installation and service throughout Ireland.`,
      cta: "Protect your equipment — Get consultation"
    },
    {
      title: "Adsorption (Desiccant) Dryers",
      desc:
        "BVA/BVL/BP models with PDP down to −40 °C. Siemens SIMATIC control and energy‑saving DPD modes.",
      seo: `For pharma, electronics and other sensitive processes, TechnoCore delivers adsorption (desiccant) dryers achieving pressure dew points down to −40 °C. Features include Siemens SIMATIC PLC, energy‑saving purge cycles and robust construction for continuous duty. We help ensure product quality and compliance while reducing downtime and maintenance costs, with full support across Ireland.`,
      cta: "Get ultra‑dry air — Talk to an engineer"
    },
    {
      title: "Filtration Systems",
      desc:
        "Coalescing, particulate, activated‑carbon and sterile filters — ISO 8573‑1 compliant.",
      seo: `TechnoCore supplies high‑performance air and gas filtration to ISO 8573‑1. We provide coalescing filters for oil/water removal, particulate filters for dust protection, activated‑carbon filters for oil vapour removal and sterile filters for food and pharma. Correct filtration protects downstream equipment, improves product quality and ensures regulatory compliance. We size and supply complete filter trains and housings from Omega Air.`,
      cta: "Meet ISO 8573‑1 — Request a solution"
    },
    {
      title: "Paint Booth Air Preparation",
      desc:
        "Complete compressed‑air preparation for automotive and industrial spray booths.",
      seo: `For automotive and industrial spray booths we design and deliver complete air‑preparation systems: compressors, refrigeration or desiccant dryers, multi‑stage filtration and distribution. Clean, dry air eliminates blushing, fisheyes and dust defects and delivers a consistent finish. TechnoCore engineers design, install and service systems for bodyshops and factories across Ireland.`,
      cta: "Improve paint finish — Get a system quote"
    },
    {
      title: "Chillers & Custom Turnkey Systems",
      desc:
        "PCI chillers (2–180 kW) and containerised SKID/BOX systems for N₂/O₂ and compressed air.",
      seo: `We deliver turnkey solutions for industrial gas treatment and compressed air. Our scope covers PCI chillers (2–180 kW), nitrogen and oxygen generation, dryers and filtration packaged as SKID or container BOX units. Services include design and planning, installation and commissioning, and ongoing maintenance. One partner for nitrogen, oxygen, air dryers, filtration and chillers — TechnoCore Ireland.`,
      cta: "Discuss a turnkey package — Contact TechnoCore"
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
    { src: "/images/HPR-DRY.jpg", alt: "HPR DRY" },
    { src: "/images/D-dry-TAC.jpg", alt: "D dry TAC" }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (product) => setSelectedProduct(product);
  const handleBack = () => setSelectedProduct(null);

  return (
    <main>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta
          name="description"
          content="TechnoCore: Nitrogen & Oxygen Generators, Air Dryers, Air & Gas Filtration, Paint Booth Air Prep and Turnkey Industrial Gas Solutions in Ireland."
        />
        <meta
          name="keywords"
          content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration, Paint booth air preparation, PSA, Chillers, Compressed air, Industrial gas treatment, Ireland"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TechnoCore" />
        <meta
          property="og:description"
          content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland."
        />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://technocore.ie/" />
      </Head>

      {/* Google Ads + GA4 via next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17428189544"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'AW-17428189544');
        gtag('config', 'G-NGRNF7SK90', { send_page_view: true });
      `}</Script>

      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
        />

        <div className="relative z-10">
          <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
              <a href="#top" className="text-white text-lg font-bold">TechnoCore</a>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
                <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
                <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
                <a href="#about" className="text-gray-300 hover:text-green-400">About</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400">Contact</a>
              </div>
            </div>
          </nav>

          <header id="top" className="flex flex-col items-center justify-center text-center px-6 py-12">
            <div className="relative w-auto h-40 mb-6">
              <img src="/logo.png" alt="TechnoCore logo" className="h-full w-auto mx-auto" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland
            </h1>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">
              PSA Systems · Air Dryers · Filtration · Paint Booth Air Prep · Turnkey Installations
            </h2>
            <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">
              Engineering supplier in Ireland for gas generation and air treatment — from PSA nitrogen/oxygen generators to filtration, chillers, air dryers, paint‑booth air preparation and fully integrated turnkey systems.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">
                Request Quote
              </a>
              <a href="tel:+353852314430" className="border border-green-500 hover:bg-green-500/10 text-green-400 px-6 py-2 rounded">
                Call +353 85 231 4430
              </a>
            </div>
          </header>

          <section id="products" className="bg-gray-900 p-8">
            {!selectedProduct ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <article key={index} className="bg-black border border-green-500 rounded p-6">
                    <h3
                      onClick={() => handleSelect(product)}
                      className="text-xl font-semibold text-green-400 mb-2 cursor-pointer hover:underline"
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{product.desc}</p>
                    <button
                      onClick={() => handleSelect(product)}
                      className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded"
                    >
                      Learn more
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-black border border-green-500 rounded p-6 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{selectedProduct.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{selectedProduct.seo}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">
                    {selectedProduct.cta || 'Request Quote'}
                  </a>
                  <button onClick={handleBack} className="text-green-400 underline hover:text-green-300">
                    ← Back to products
                  </button>
                </div>
              </div>
            )}
          </section>

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
              TechnoCore is Ireland’s trusted partner of OMEGA AIR, delivering PSA nitrogen and oxygen generators, compressed‑air dryers, gas filtration systems, paint‑booth air preparation and turnkey industrial gas solutions for manufacturing, food processing and pharma.
            </p>
          </section>

          <section id="contact" className="p-12 bg-black text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a>
            </p>
            <p className="text-gray-400">Phone: +353 85 231 4430</p>
            <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
            <form
              action="https://formsubmit.co/sales@technocore.ie"
              method="POST"
              className="mt-8 max-w-xl mx-auto text-left"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://technocore.ie/thanks" />
              <input type="text" name="_honey" style={{ display: "none" }} readOnly />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input id="name" name="name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-1">Company</label>
                  <input id="company" name="company" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-1">Phone</label>
                  <input id="phone" name="phone" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="block text-gray-300 mb-1">Interested in</label>
                  <select id="interest" name="interest" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500">
                    <option>Nitrogen Generator</option>
                    <option>Oxygen Generator</option>
                    <option>Refrigeration Air Dryer</option>
                    <option>Adsorption (Desiccant) Dryer</option>
                    <option>Filtration System</option>
                    <option>Paint Booth Air Preparation</option>
                    <option>Chiller / Turnkey Package</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
              </div>

              <button type="submit" className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">
                Send Message
              </button>
            </form>
          </section>

          <footer className="bg-black border-t border-green-500 mt-12 py-6 text-center text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="mb-2 md:mb-0">
                  <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
                </div>
                <div className="flex gap-4">
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
    </main>
  );
}
