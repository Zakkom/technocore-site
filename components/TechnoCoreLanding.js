// components/TechnoCoreLanding.js
import React from "react";
import Head from "next/head";

export default function TechnoCoreLanding() {
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
      desc: "RDP/RDHP dryers with capacities up to 13200 m3/h, PDP +3°C, using R513a refrigerant and zero-loss drains."
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes."
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant."
    },
    {
      title: "Chillers & Custom Solutions",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable."
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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }} />

        <div className="relative z-10">
          <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
              <a href="/" className="text-white text-lg font-bold">TechnoCore</a>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
                <a href="/#products" className="text-gray-300 hover:text-green-400">Products</a>
                <a href="/#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
                <a href="/#about" className="text-gray-300 hover:text-green-400">About</a>
                <a href="/#contact" className="text-gray-300 hover:text-green-400">Contact</a>
              </div>
            </div>
          </nav>

          <header id="hero" className="flex flex-col items-center justify-center text-center px-6 py-12">
            <div className="relative w-auto h-40 mb-6">
              <img src="/logo.png" alt="TechnoCore logo" className="h-full w-auto mx-auto" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations</h2>
            <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">
              Official distributor of OMEGA AIR in Ireland — PSA nitrogen & oxygen generators, industrial air dryers, gas filtration systems, and turnkey compressed air solutions.
            </p>
          </header>

          <section id="products" className="bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <article key={index} className="bg-black border border-green-500 rounded p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">{product.title}</h3>
                <p className="text-gray-300 mb-4">{product.desc}</p>
              </article>
            ))}
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
            <p className="text-gray-400">Email: sales@technocore.ie</p>
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
                  <a href="/#products" className="hover:text-green-400">Products</a>
                  <a href="/#about" className="hover:text-green-400">About</a>
                  <a href="/#contact" className="hover:text-green-400">Contact</a>
                </div>
              </div>
              <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

