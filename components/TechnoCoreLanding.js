// components/TechnoCoreLanding.js
import React from "react";

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
    { src: "/images/n2-box-unit.jpg", alt: "N2 Box Generator Unit" }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
        <nav className="bg-black border-b border-green-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <a href="#" className="text-white text-lg font-bold">TechnoCore</a>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
              <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
              <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
              <a href="#about" className="text-gray-300 hover:text-green-400">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400">Contact</a>
            </div>
          </div>
        </nav>
        <header id="hero" className="flex flex-col items-center justify-center text-center px-6 py-12">
          <link rel="icon" href="/logo.png" />
          <div className="relative w-40 h-20 mb-6">
            <img src="/logo.png" alt="TechnoCore" className="h-12 w-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">TECHNOCORE</h1>
          <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">Solutions for Industrial Air & Gas</h2>
          <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl">
            Distributor of OMEGA AIR equipment: nitrogen/oxygen generators, dryers, filters, chillers, and turnkey gas systems.
          </p>
        </header>
        <section id="products" className="bg-gray-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-black border border-green-500 rounded p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.desc}</p>
            </div>
          ))}
        </section>
        <section id="gallery" className="bg-black p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div key={idx} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
            </div>
          ))}
        </section>
        <section id="about" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-500">About TechnoCore</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            TechnoCore, based in Ireland, is the official partner of OMEGA AIR. We provide complete industrial gas solutions: air dryers, PSA generators, filtration systems, and custom-engineered units for pharmaceuticals, food production, laser cutting, electronics, and general manufacturing.
          </p>
        </section>
        <section id="contact" className="p-12 bg-black text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
          <p className="text-gray-400">Email: sales@technocore.ie</p>
          <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
          <form
            action="https://formsubmit.co/sales@technocore.ie"
            method="POST"
            className="mt-8 max-w-xl mx-auto text-left"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
} 
