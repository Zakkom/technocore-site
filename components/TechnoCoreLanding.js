// pages/TechnoCoreLanding.js
import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const productDetails = {
    "Nitrogen Generators": {
      title: "PSA Nitrogen Generators in Ireland – Reliable On-Site Solutions",
      text: `Looking for a cost-effective way to generate nitrogen on-site? At TechnoCore, we offer high-purity PSA nitrogen generators tailored for industrial use across Ireland.

Our systems deliver 97% to 99.9995% nitrogen purity, making them ideal for:
- Food packaging & beverage industry
- Pharmaceutical and lab environments
- Metal processing & laser cutting

✅ Reduce dependence on cylinder deliveries  
✅ Lower your long-term nitrogen costs  
✅ Compact SKID and BOX units available

📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.

👉 Contact us today at [sales@technocore.ie](mailto:sales@technocore.ie) for a free consultation.`
    },
    "Oxygen Generators": {
      title: "PSA Oxygen Generators in Ireland",
      text: `On-site PSA oxygen generators provide 90–95% purity. Compact, plug-and-play units ideal for:
- Medical oxygen
- Welding and cutting
- Aquaculture and wastewater treatment

TechnoCore provides full installation, service, and local support across Ireland.`
    },
    "Refrigeration Air Dryers": {
      title: "Refrigeration Air Dryers for Compressed Air",
      text: `Models: RDP / RDHP — capacities up to 13200 m3/h
- PDP: +3°C (ISO Class 4)
- Refrigerant: R513a (eco-friendly)
- Energy-efficient design with zero-loss condensate drains

Used in industrial paint lines, CNC systems, and packaging lines.`
    },
    "Adsorption Dryers": {
      title: "Adsorption Dryers with PDP to -40°C",
      text: `TechnoCore offers R-DRY BVA / BVL / BP dryers:
- Heatless and blower purge types
- Siemens SIMATIC control
- PDP down to -40°C or -70°C

Ideal for pharma, electronics, food & chemical industries.`
    },
    "Filtration Systems": {
      title: "Compressed Air & Gas Filtration Systems",
      text: `Full range of filters:
- Coalescing, particulate, activated carbon, sterile
- ISO 8573-1 compliance
- Up to 16 bar and high flow rates

Optimized for clean room environments, air tools, and gas purity lines.`
    },
    "Chillers & Сustom solutions for gas laser cutting systems": {
      title: "Industrial Chillers & Turnkey Laser Cutting Solutions",
      text: `Chillers PCI — 2 to 180 kW capacity:
- Water or air-cooled
- Glycol compatible

Integrated systems for N2/O2 supply with SKID/BOX units
- Laser gas solutions
- Fully modular with remote monitoring`
    }
  };

  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: PSA Nitrogen & Oxygen Generators, Chillers, Air Dryers, and Filtration Systems in Ireland." />
        <meta property="og:title" content="TechnoCore | Gas Solutions in Ireland" />
        <meta property="og:description" content="PSA nitrogen and oxygen generators, dryers, filtration, and turnkey compressed air systems from TechnoCore Ireland." />
        <meta property="og:image" content="/images/n2-generator.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/" />
      </Head>

      <header className="text-center py-12 px-4">
        <img src="/logo.png" alt="TechnoCore Logo" className="mx-auto h-24 mb-4" />
        <h1 className="text-3xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
        <p className="text-green-400 text-lg mt-2">PSA Systems • Air Dryers • Gas Filtration • Turnkey Installations</p>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, chillers, and turnkey compressed air solutions.
        </p>
      </header>

      <section id="products" className="bg-black text-white p-8">
        <h2 className="text-center text-2xl font-bold text-green-500 mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(productDetails).map((key) => (
            <div
              key={key}
              className="border border-green-500 rounded p-4 cursor-pointer hover:bg-green-950"
              onClick={() => setActiveProduct(key)}
            >
              <h3 className="text-green-400 font-semibold text-lg">{key}</h3>
              <p className="text-gray-400 mt-1 text-sm">{productDetails[key].text.split("\n")[0]}</p>
            </div>
          ))}
        </div>

        {activeProduct && (
          <div className="mt-10 p-6 bg-zinc-900 border border-green-600 rounded max-w-3xl mx-auto">
            <button onClick={() => setActiveProduct(null)} className="text-green-400 underline text-sm mb-4">
              ← Back to products
            </button>
            <h3 className="text-lg font-bold mb-2 text-white">{productDetails[activeProduct].title}</h3>
            <pre className="text-gray-300 whitespace-pre-wrap text-sm">
              {productDetails[activeProduct].text}
            </pre>
          </div>
        )}
      </section>

      <section id="gallery" className="p-12 bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["n2-generator", "rdp-dryer", "filtration-units", "o2-skid", "r-dry-adsorption", "chiller-pci"].map((img, i) => (
          <img
            key={i}
            src={`/images/${img}.jpg`}
            alt={img.replace(/-/g, ' ')}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </section>

      <section id="about" className="bg-zinc-900 text-center py-12 px-6">
        <h3 className="text-2xl font-bold text-green-500 mb-4">About TechnoCore</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          TechnoCore is a trusted supplier of OMEGA AIR products in Ireland. We deliver PSA nitrogen and oxygen generators, compressed air dryers, gas filtration systems, chillers, and full-service compressed air solutions for manufacturing, food processing, pharma, and industrial applications.
        </p>
      </section>

      <section id="contact" className="bg-black text-center py-12 px-6">
        <h3 className="text-2xl font-bold text-green-500 mb-4">Contact</h3>
        <p className="text-gray-300">Email: <a href="mailto:sales@technocore.ie" className="underline text-green-400">sales@technocore.ie</a></p>
        <p className="text-gray-300">Phone: +353 85 231 44 30</p>
        <p className="text-gray-300">Location: Dublin / Wicklow, Ireland</p>

        <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="mt-8 max-w-lg mx-auto text-left">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://technocore.ie/thanks" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <label className="block text-sm text-gray-300 mt-4">Name</label>
          <input type="text" name="name" required className="w-full p-2 bg-zinc-800 text-white border border-green-500 rounded" />

          <label className="block text-sm text-gray-300 mt-4">Email</label>
          <input type="email" name="email" required className="w-full p-2 bg-zinc-800 text-white border border-green-500 rounded" />

          <label className="block text-sm text-gray-300 mt-4">Message</label>
          <textarea name="message" rows="5" required className="w-full p-2 bg-zinc-800 text-white border border-green-500 rounded" />

          <button type="submit" className="bg-green-500 text-black mt-4 py-2 px-6 rounded hover:bg-green-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-black border-t border-green-500 text-center text-sm text-gray-400 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <span className="text-white font-semibold">TechnoCore</span>
          <div className="space-x-4">
            <a href="#products" className="hover:text-green-400">Products</a>
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
      </footer>
    </div>
  );
}
