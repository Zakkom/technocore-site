import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";

export default function TechnoCoreLanding() {
  const products = [
    { key: "nitrogen", title: "Nitrogen Generators", desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units." },
    { key: "oxygen", title: "Oxygen Generators", desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units." },
    { key: "ref-dryers", title: "Refrigeration Air Dryers", desc: "RDP/RDHP dryers up to 13,200 m³/h, PDP +3 °C, R513a, zero-loss drains." },
    { key: "ads-dryers", title: "Adsorption (Desiccant) Dryers", desc: "BVA/BVL/BP, PDP down to −40 °C, Siemens SIMATIC, energy-saving modes." },
    { key: "filtration", title: "Filtration Systems", desc: "Coalescing, particulate, activated-carbon & sterile filters — ISO 8573-1." },
    { key: "turnkey", title: "Chillers & Turnkey Systems", desc: "PCI chillers (2–180 kW) + SKID/BOX systems for N₂/O₂ and compressed air." },
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
    { src: "/images/D-dry-TAC.jpg", alt: "D dry TAC" },
  ];

  // Структурированный контент для Learn more
  const seoMap = {
    nitrogen: {
      title: "Nitrogen Generators (PSA 97–99.9995%)",
      intro: "Generate high-purity nitrogen on-site and cut long-term gas costs. TechnoCore sizes and installs PSA N₂ systems across Ireland (SKID/BOX).",
      columns: [
        { subtitle: "Applications", bullets: ["Laser cutting & metal processing", "Food packaging & beverage", "Pharma and laboratories"] },
        { subtitle: "Benefits", bullets: ["Reduce cylinder dependence", "Stable 24/7 supply, predictable OPEX", "ROI & sizing calculation included"] },
      ],
      cta: { label: "Cut nitrogen costs — Request Quote", href: "#contact" },
    },
    oxygen: {
      title: "Oxygen Generators (PSA 90–95%)",
      intro: "Independent and efficient on-site O₂ in compact SKID/BOX packages. Easy to install and maintain with local support.",
      columns: [
        { subtitle: "Where it fits", bullets: ["Aquaculture & fish farms", "Medical & dental", "Welding & cutting"] },
        { subtitle: "Why on-site O₂", bullets: ["No cylinder logistics", "Stable flow, low energy use", "Safe, scalable configurations"] },
      ],
      cta: { label: "Switch to on-site oxygen — Contact us", href: "#contact" },
    },
    "ref-dryers": {
      title: "Refrigeration Air Dryers (+3 °C PDP)",
      intro: "Industrial-grade RDP/RDHP dryers up to 13,200 m³/h. Protect equipment and product quality for paint, automotive and general manufacturing.",
      columns: [
        { subtitle: "Features", bullets: ["Energy-saving controls", "Zero-loss drains", "High-flow capability"] },
        { subtitle: "Outcome", bullets: ["Less corrosion & downtime", "Consistent air quality", "Lower maintenance"] },
      ],
      cta: { label: "Protect your equipment — Get consultation", href: "#contact" },
    },
    "ads-dryers": {
      title: "Adsorption (Desiccant) Dryers (to −40 °C PDP)",
      intro: "Ultra-dry compressed air for sensitive processes. Siemens SIMATIC PLC and energy-saving purge cycles for continuous duty.",
      columns: [
        { subtitle: "Use cases", bullets: ["Pharma & medical production", "Electronics & semiconductors", "Precision optics"] },
        { subtitle: "Advantages", bullets: ["Quality & compliance", "Lower downtime", "Robust BVA/BVL/BP models"] },
      ],
      cta: { label: "Get ultra-dry air — Talk to an engineer", href: "#contact" },
    },
    filtration: {
      title: "Air & Gas Filtration (ISO 8573-1)",
      intro: "Complete filter trains: coalescing, particulate, activated-carbon and sterile — sized and supplied by TechnoCore.",
      columns: [
        { subtitle: "We provide", bullets: ["Oil/water removal (coalescing)", "Dust protection (particulate)", "Oil vapour removal (activated-carbon)"] },
        { subtitle: "Results", bullets: ["Protect downstream equipment", "Improve product quality", "Meet ISO 8573-1"] },
      ],
      cta: { label: "Meet ISO 8573-1 — Request a solution", href: "#contact" },
    },
    turnkey: {
      title: "Chillers & Turnkey Systems",
      intro: "PCI chillers (2–180 kW) and packaged SKID/BOX systems for N₂/O₂ and compressed air — from design to commissioning.",
      columns: [
        { subtitle: "Scope", bullets: ["Design & planning", "Installation & commissioning", "Maintenance & support"] },
        { subtitle: "Ideal for", bullets: ["Laser systems", "Process cooling", "Integrated plants"] },
      ],
      cta: { label: "Discuss a turnkey package — Contact TechnoCore", href: "#contact" },
    },
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (product) => setSelectedProduct(product);
  const handleBack = () => setSelectedProduct(null);

  return (
    <main>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen & Oxygen Generators, Air Dryers, Air & Gas Filtration, and Turnkey Industrial Gas Solutions in Ireland." />
        <meta name="keywords" content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration systems, PSA, Chillers, Refrigeration Air Dryers, Compressed Air, Industrial gas treatment, Ireland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TechnoCore" />
        <meta property="og:description" content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland." />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://technocore.ie/" />
      </Head>

      {/* Google tags */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17428189544" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17428189544');
        gtag('config', 'G-NGRNF7SK90', { send_page_view: true });
      `}</Script>

      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }} />

        <div className="relative z-10">
          <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
              <a href="/" className="text-white text-lg font-bold">TechnoCore</a>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
                <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
                <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
                <a href="/about" className="text-gray-300 hover:text-green-400">About</a>
                <a href="/contact" className="text-gray-300 hover:text-green-400">Contact</a>
              </div>
            </div>
          </nav>

          {/* HERO */}
          <header className="flex flex-col items-center justify-center text-center px-6 py-12">
            <div className="relative w-auto h-40 mb-6">
              <img src="/logo.png" alt="TechnoCore logo" className="h-full w-auto mx-auto" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations</h2>
            <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">Engineering supplier in Ireland for gas generation and air treatment — from PSA nitrogen/oxygen generators to filtration, chillers, air dryers, and fully integrated turnkey compressed air systems.</p>
          </header>

          {/* PRODUCTS */}
          <section id="products" className="bg-gray-900 p-8">
            {!selectedProduct ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <article key={product.key} className="bg-black border border-green-500 rounded p-6">
                    <h3 onClick={() => handleSelect(product)} className="text-xl font-semibold text-green-400 mb-2 cursor-pointer hover:underline">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{product.desc}</p>
                    <div className="flex gap-3">
                      <button onClick={() => handleSelect(product)} className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">
                        Learn more
                      </button>
                      <a href="#contact" className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-4 py-2 rounded">
                        Request Quote
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-black border border-green-500 rounded p-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-green-400">{selectedProduct.title}</h3>
                {seoMap[selectedProduct.key] ? (
                  <div className="mt-4">
                    <p className="text-gray-300">{seoMap[selectedProduct.key].intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {seoMap[selectedProduct.key].columns.map((col, i) => (
                        <div key={i}>
                          <h4 className="text-green-400 font-semibold mb-2">{col.subtitle}</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {col.bullets.map((it, j) => <li key={j}>{it}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={seoMap[selectedProduct.key].cta.href} className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded">
                        {seoMap[selectedProduct.key].cta.label}
                      </a>
                      <button onClick={handleBack} className="border border-green-500 text-green-400 hover:bg-green-500/10 px-5 py-2 rounded">
                        ← Back to products
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-300 mt-2">Details coming soon.</p>
                )}
              </div>
            )}
          </section>

          {/* GALLERY */}
          <section id="gallery" className="bg-black p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, idx) => (
              <figure key={idx} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              </figure>
            ))}
          </section>

          {/* CONTACT */}
          <section id="contact" className="p-12 bg-black text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
            <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a></p>
            <p className="text-gray-400">Phone: +353 85 231 4430</p>
            <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
            <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="mt-8 max-w-xl mx-auto text-left">
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
              <button type="submit" className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">Send Message</button>
            </form>
          </section>

          {/* FOOTER */}
          <footer className="bg-black border-t border-green-500 mt-12 py-6 text-center text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="mb-2 md:mb-0">
                  <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
                </div>
                <div className="space-x-4">
                  <a href="#products" className="hover:text-green-400">Products</a>
                  <a href="#gallery" className="hover:text-green-400">Gallery</a>
                  <a href="/about" className="hover:text-green-400">About</a>
                  <a href="/contact" className="hover:text-green-400">Contact</a>
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
