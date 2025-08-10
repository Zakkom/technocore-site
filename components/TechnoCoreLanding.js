import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function TechnoCoreLanding() {
  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options include N2-Pack, Skid, and Box units.",
      seo: `Looking for a cost-effective way to generate nitrogen on-site? At TechnoCore, we offer high-purity PSA nitrogen generators tailored for industrial use across Ireland.

Our systems deliver 97% to 99.9995% nitrogen purity, making them ideal for:
- Food packaging & beverage industry
- Pharmaceutical and lab environments
- Metal processing & laser cutting

✅ Reduce dependence on cylinder deliveries
✅ Lower your long-term nitrogen costs
✅ Compact SKID and BOX units available

📍 TechnoCore – Your local partner for nitrogen solutions in Dublin, Wicklow, and across Ireland.

Contact us today via the Contact page for a free consultation.`
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

Delivered and supported locally by TechnoCore in Dublin, Wicklow, and across Ireland.`
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP dryers with capacities up to 13200 m³/h, PDP +3°C, using R513a refrigerant and zero-loss drains.",
      seo: `Moisture in compressed air can damage your equipment and reduce product quality. TechnoCore supplies industrial-grade air dryers for every application:

- Refrigeration dryers (PDP +3°C) for general use
- Desiccant dryers (PDP -40°C) for pharma & sensitive systems
- Zero-loss condensate drains, energy-saving controls

Our units handle high flow rates (up to 13200 m³/h) and ensure long-term efficiency and reliability.

Serving customers throughout Ireland in automotive & paint, food processing, and manufacturing.

Need help choosing the right dryer? Talk to our engineers via the Contact page.`
    },
    {
      title: "Adsorption Dryers",
      desc: "R-DRY BVA/BVL/BP models with PDP down to -40°C. Siemens SIMATIC control and energy-saving DPD modes.",
      seo: `Need ultra-dry compressed air for sensitive processes? TechnoCore supplies adsorption dryers with pressure dew points as low as -40°C, ideal for:

- Pharmaceutical & medical production
- Electronics & semiconductor industries
- Precision instruments and optics

Features:
- Siemens SIMATIC PLC for smart control
- Energy-saving purge cycles
- Robust BVA, BVL, and BP models

Ensure product quality and compliance while reducing downtime and maintenance costs.

Installed and supported locally by TechnoCore across Ireland.`
    },
    {
      title: "Filtration Systems",
      desc: "Full range of filters: coalescing, particulate, activated carbon and sterile, ISO 8573-1 compliant.",
      seo: `TechnoCore supplies high-performance air and gas filtration systems designed to meet ISO 8573-1 standards.

We provide:
- Coalescing filters (oil/water removal)
- Particulate filters (dust protection)
- Activated carbon filters (oil vapour removal)
- Sterile filters for pharma & food-grade applications

Improve compressed air quality, protect downstream equipment, and ensure regulatory compliance.`
    },
    {
      title: "Chillers & Custom solutions for gas laser cutting systems",
      desc: "PCI chillers (2–180 kW) and containerized SKID/BOX systems for N2/O2 — modular and scalable.",
      seo: `We deliver complete turnkey systems for industrial gas treatment and compressed air.

Our services include:
- Design & planning of full systems
- Custom SKID or containerised BOX units
- Installation, commissioning, and support

For Nitrogen, Oxygen, Air Dryers, Filtration & Chillers — a single-vendor solution for your production site.`
    }
  ];

  const images = [
    { src: "/images/n2-generator.jpg", alt: "PSA Nitrogen Generator – Omega Air" },
    { src: "/images/o2-skid.jpg", alt: "PSA Oxygen Skid System" },
    { src: "/images/rdp-dryer.jpg", alt: "Refrigeration Air Dryer RDP" },
    { src: "/images/r-dry-adsorption.jpg", alt: "Adsorption Dryer R-DRY" },
    { src: "/images/chiller-pci.jpg", alt: "Chiller PCI Unit" },
    { src: "/images/filtration-units.jpg", alt: "Air & Gas Filtration Units" },
    { src: "/images/n2-box-unit.jpg", alt: "N2 Box Generator Unit" }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (product) => setSelectedProduct(product);
  const handleBack = () => setSelectedProduct(null);

  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Nitrogen & Oxygen Generators, Air Dryers | TechnoCore Ireland</title>
        <meta
          name="description"
          content="TechnoCore supplies PSA nitrogen & oxygen generators, air dryers, and filtration systems across Ireland. Turnkey compressed air & gas solutions."
        />
        <meta
          name="keywords"
          content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration systems, PSA, Chillers, Refrigeration Air Dryers, Compressed Air, Industrial gas treatment, Ireland"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="TechnoCore – Industrial Gas & Air Solutions in Ireland" />
        <meta property="og:description" content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland." />
        <meta property="og:image" content="https://www.technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.technocore.ie/" />

        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechnoCore",
              url: "https://www.technocore.ie/",
              logo: "https://www.technocore.ie/logo.png",
            }),
          }}
        />
        {/* Structured data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TechnoCore",
              url: "https://www.technocore.ie/",
              areaServed: "IE",
              telephone: "+353852314430",
              address: { "@type": "PostalAddress", addressCountry: "IE" },
            }),
          }}
        />
      </Head>

      {/* Hero with overlays */}
      <div className="relative min-h-[520px] overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-72 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[480px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        {/* Nav */}
        <nav aria-label="Primary" className="relative z-20 bg-black/70 backdrop-blur border-b border-green-500 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <Link href="/" className="text-white text-lg font-bold">TechnoCore</Link>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
              <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
              <a href="#gallery" className="text-gray-300 hover:text-green-400">Gallery</a>
              <Link href="/about" className="text-gray-300 hover:text-green-400">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header role="banner" className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-12">
          <div className="relative w-auto h-16 md:h-20 mb-6">
            <Image src="/logo.png" alt="TechnoCore logo" width={280} height={80} priority />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl">
            Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland
          </h1>
          <h2 className="text-green-500 text-lg md:text-xl font-semibold mt-3">
            PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Engineering supplier in Ireland for gas generation and air treatment — from PSA nitrogen/oxygen generators to filtration,
            chillers, air dryers, and fully integrated turnkey compressed air systems.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#products" className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-xl font-medium shadow">
              Explore Products
            </a>
            <Link href="/contact" className="border border-green-500 hover:bg-green-500/10 text-green-400 px-5 py-2 rounded-xl font-medium">
              Get Quote
            </Link>
          </div>
        </header>
      </div>

      {/* Products */}
      <section id="products" className="bg-gray-900 p-8">
        {!selectedProduct ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <article key={index} className="bg-black/60 border border-green-500/70 rounded-2xl p-6 shadow">
                <h3
                  onClick={() => handleSelect(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && handleSelect(product)}
                  aria-expanded={!!selectedProduct && selectedProduct.title===product.title}
                  className="text-xl font-semibold text-green-400 mb-2 cursor-pointer hover:underline"
                >
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4">{product.desc}</p>
                <div className="text-sm text-gray-400">Click title to read details</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-black/70 border border-green-500 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-4">{selectedProduct.title}</h3>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{selectedProduct.seo}</p>
            <div className="mt-6 flex gap-3">
              <button onClick={handleBack} className="text-green-400 underline hover:text-green-300">← Back to products</button>
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-medium">Get Quote</Link>
            </div>
          </div>
        )}
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-black p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <figure key={idx} className="relative w-full h-64 rounded-2xl overflow-hidden shadow">
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </figure>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section id="about-teaser" className="p-12 bg-black text-center">
        <h3 className="text-2xl font-bold mb-4 text-green-500">About TechnoCore</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          TechnoCore is Ireland’s trusted partner of OMEGA AIR, delivering PSA nitrogen and oxygen generators, compressed air dryers,
          gas filtration systems, chillers, and fully integrated industrial gas treatment solutions for manufacturing, food processing,
          pharma, and more.
        </p>
        <div className="mt-5">
          <Link href="/about" className="text-green-400 underline hover:text-green-300">Read more →</Link>
        </div>
      </section>

      {/* Contact teaser */}
      <section id="contact-teaser" className="p-12 bg-black text-center">
        <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
        <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a></p>
        <p className="text-gray-400">Phone: <a className="underline" href="tel:+353852314430">+353 85 231 44 30</a></p>
        <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>
        <div className="mt-6">
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-xl font-medium">Open contact form</Link>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="bg-black border-t border-green-500 mt-12 py-6 text-center text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <div>
              <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
            </div>
            <div className="flex gap-4">
              <a href="#products" className="hover:text-green-400">Products</a>
              <Link href="/about" className="hover:text-green-400">About</Link>
              <Link href="/contact" className="hover:text-green-400">Contact</Link>
            </div>
          </div>
          <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
