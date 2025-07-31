// components/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      title: "Nitrogen Generators",
      content: `### PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions\n\nLooking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.\n\nOur systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:\n- **Food packaging & beverage** industry\n- **Pharmaceutical and lab environments**\n- **Metal processing & laser cutting**\n\n✅ Reduce dependence on cylinder deliveries\n✅ Lower your long-term nitrogen costs\n✅ Compact SKID and BOX units available\n\n📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.\n\n👉 [Contact us today](#contact) for a free consultation.`
    },
    {
      title: "Oxygen Generators",
      content: `### PSA Oxygen Generators – Safe and Efficient Oxygen Supply\n\n**TechnoCore** provides **on-site PSA oxygen generators** designed for safety and reliability in various industries.\n\nProduce oxygen with **90% to 95% purity** and reduce reliance on bottled oxygen.\n\nIdeal for:\n- Healthcare and nursing homes\n- Metal cutting and welding\n- Aquaculture and water treatment\n\n✅ Easy integration\n✅ Energy efficient\n✅ Fully automated\n\n🧠 Plug-and-play oxygen generation with full technical support.`
    },
    {
      title: "Refrigeration Air Dryers",
      content: `### Refrigeration Air Dryers – Reliable Dry Compressed Air\n\nOur **RDP/RDHP dryers** ensure stable dew points (+3°C) for critical compressed air applications.\n\n✔️ Capacities up to 13200 m³/h\n✔️ R513a refrigerant — low GWP\n✔️ ISO 8573-1 Class 4 or better\n✔️ Zero-loss condensate drains\n\n🧊 Ideal for manufacturing, food processing, paint shops, and more.`
    },
    {
      title: "Adsorption Dryers",
      content: `### Adsorption Dryers – Ultra-Dry Air Down to -40°C\n\n**R-DRY BVA/BVL/BP** series with advanced control systems deliver extremely dry air for demanding processes.\n\n✔️ Siemens SIMATIC controller\n✔️ Energy-saving DPD mode\n✔️ PDP -20°C to -40°C\n✔️ Suitable for pharma, electronics, powder coating`},
    {
      title: "Filtration Systems",
      content: `### Filtration Systems – Clean Air & Gas You Can Trust\n\nWe supply a complete line of **air and gas filters** from Omega Air:\n\n- **Coalescing & particulate filters**\n- **Activated carbon filters**\n- **Sterile filters**\n- **ISO 8573-1 Class 1–2–1 compliance**\n\n🛡️ Ensure product purity, extend equipment life, and reduce contamination.`
    },
    {
      title: "Chillers & Custom solutions for gas laser cutting systems",
      content: `### Industrial Chillers & Laser Gas Solutions\n\nCustom solutions for gas laser cutting systems and industrial chillers (2–180 kW).\n\n✔️ PCI Chillers for machine tool cooling\n✔️ SKID and BOX modular systems\n✔️ Integration with N2/O2 generators\n\n🏗️ Built for harsh environments and high duty cycles.`
    }
  ];

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
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="text-white text-lg font-bold">TechnoCore</a>
            <div className="space-x-4 text-sm">
              <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
              <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
              <a href="#about" className="text-gray-300 hover:text-green-400">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400">Contact</a>
            </div>
          </div>
        </nav>

        <header className="text-center px-6 py-12">
          <img src="/logo.png" alt="TechnoCore logo" className="h-40 mx-auto mb-6" />
          <h1 className="text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
          <h2 className="text-green-500 text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, chiller, and turnkey compressed air solutions.</p>
        </header>

        <section id="products" className="bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <article key={index} className="bg-black border border-green-500 rounded p-6">
              <h3
                className="text-xl font-semibold text-green-400 mb-2 cursor-pointer hover:underline"
                onClick={() => setActiveProduct(index === activeProduct ? null : index)}
              >
                {product.title}
              </h3>
              {activeProduct === index && (
                <div className="prose prose-invert max-w-none text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: product.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
            </article>
          ))}
        </section>

        <section id="gallery" className="bg-black p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["n2-generator", "o2-skid", "rdp-dryer", "r-dry-adsorption", "chiller-pci", "filtration-units"].map((name, idx) => (
            <figure key={idx} className="w-full h-64 overflow-hidden rounded-xl shadow-lg">
              <img src={`/images/${name}.jpg`} alt={name} className="w-full h-full object-cover" />
            </figure>
          ))}
        </section>

        <section id="about" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-4">About TechnoCore</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            TechnoCore is Ireland’s trusted partner of OMEGA AIR, delivering PSA nitrogen and oxygen generators, compressed air dryers, gas filtration systems, chillers, and fully integrated industrial gas treatment solutions for manufacturing, food processing, pharma, and more.
          </p>
        </section>

        <section id="contact" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Contact</h3>
          <p className="text-gray-400">Email: sales@technocore.ie</p>
          <p className="text-gray-400">Phone: +353 85 231 44 30</p>
          <p className="text-gray-400 mb-4">Location: Dublin / Wicklow, Ireland</p>
          <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="max-w-xl mx-auto text-left">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://technocore.ie/thanks" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"></textarea>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">Send Message</button>
          </form>
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
    </>
  );
}

