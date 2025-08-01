import React, { useState } from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units.",
      seo: `Looking for a cost-effective way to generate nitrogen on-site? At **TechnoCore**, we offer high-purity **PSA nitrogen generators** tailored for industrial use across Ireland.

Our systems deliver **97% to 99.9995% nitrogen purity**, making them ideal for:
- **Food packaging & beverage** industry
- **Pharmaceutical and lab environments**
- **Metal processing & laser cutting**

✅ Reduce dependence on cylinder deliveries  
✅ Lower your long-term nitrogen costs  
✅ Compact SKID and BOX units available

📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.

👉 [Contact us today](#contact) for a free consultation.`
    },
    {
      title: "Oxygen Generators",
      desc: "On-site PSA oxygen generators (90–95% purity) integrated in compact plug-and-play units.",
      seo: `Looking for an independent and efficient oxygen supply? TechnoCore offers PSA oxygen generators with 90–95% purity, ideal for:

- Aquaculture & fish farms  
- Medical & dental clinics  
- Welding and metal cutting operations

Our plug-and-play oxygen systems:
- Eliminate the need for cylinder delivery
- Are easy to install and maintain
- Provide stable oxygen flow with low energy use

🛠️ Compact Skid/BOX configurations available

📍 Delivered and supported locally by TechnoCore in Dublin, Wicklow, and across Ireland.`
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m³/h, PDP +3°C, using R513a refrigerant and zero-loss drains.",
      seo: `**Moisture in compressed air** can damage your equipment and reduce product quality. **TechnoCore** supplies industrial-grade **air dryers** for every application:

- **Refrigeration dryers (PDP +3°C)** for general use  
- **Desiccant dryers (PDP -40°C)** for pharma & sensitive systems  
- **Zero-loss condensate drains**, **energy-saving controls**

Our units are built to handle high flow rates (up to 13200 m³/h) and ensure long-term efficiency and reliability.

🌍 Serving customers throughout Ireland in:
- Automotive & paint shops
- Food processing plants
- Manufacturing & heavy industry

💬 Need help choosing the right dryer? [Talk to our engineers](#contact).`
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes.",
      seo: `Adsorption dryers offer ultra-dry compressed air with pressure dew points as low as -40°C. Ideal for electronics, pharmaceuticals, and sensitive applications. Models include energy-saving purge cycle control with Siemens PLC.`
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant.",
      seo: `TechnoCore supplies high-performance **air and gas filtration systems** designed to meet ISO 8573-1 standards.

We provide:
- **Coalescing filters** (oil/water removal)
- **Particulate filters** (dust protection)
- **Activated carbon filters** (oil vapor removal)
- **Sterile filters** for pharma & food-grade applications

✅ Improve compressed air quality  
✅ Protect downstream equipment  
✅ Ensure regulatory compliance

🔍 Want cleaner air for your operations in Ireland? Contact TechnoCore for filtration solutions you can trust.`
    },
    {
      title: "Chillers & Сustom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable.",
      seo: `At TechnoCore, we don’t just supply equipment — we deliver **complete turnkey systems** for industrial gas treatment and compressed air.

Our services include:
- **Design & planning of full systems**
- **Custom SKID or containerized BOX units**
- **Installation, commissioning, and support**

🔧 For Nitrogen, Oxygen, Air Dryers, Filtration & Chillers  
🌐 Single-vendor solution for your production site

Let us handle the engineering — from source to final output.  
✅ Reduce project complexity  
✅ Ensure compatibility of all components  
✅ Save time and cost

📩 Ready to streamline your air or gas infrastructure? [Get in touch](#contact)`
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

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (product) => setSelectedProduct(product);
  const handleBack = () => setSelectedProduct(null);

  return (
    <main>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Air Dryers, Air & Gas Filtration, and Industrial Gas Solutions in Ireland." />
        <meta name="keywords" content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration systems, PSA, Chillers, Refrigeration Air Dryers, Compressed Air, Industrial gas treatment, Ireland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TechnoCore" />
        <meta property="og:description" content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland." />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://technocore.ie/" />
      </Head>

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
            <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">Supplier of OMEGA AIR solutions in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, chiller, and turnkey compressed air solutions.</p>
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
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-black border border-green-500 rounded p-6 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{selectedProduct.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{selectedProduct.seo}</p>
                <button
                  onClick={handleBack}
                  className="mt-6 text-green-400 underline hover:text-green-300"
                >
                  ← Back to products
                </button>
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
              TechnoCore is Ireland’s trusted partner of OMEGA AIR, delivering PSA nitrogen and oxygen generators, compressed air dryers, gas filtration systems, chillers, and fully integrated industrial gas treatment solutions for manufacturing, food processing, pharma, and more.
            </p>
          </section>

          <section id="contact" className="p-12 bg-black text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
            <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a></p>
            <p className="text-gray-400">Phone: +353 85 231 44 30</p>
            <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
            <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="mt-8 max-w-xl mx-auto text-left">
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
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">
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
    </main>
  );
}
