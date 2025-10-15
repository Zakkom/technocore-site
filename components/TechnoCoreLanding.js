import Head from "next/head";
import Script from "next/script";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TechnoCoreLanding() {
  // ---- DATA ----
  const products = [
    {
      key: "nitrogen",
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity. Options: N2-Pack, Skid, Box.",
      href: "/products/nitrogen",
    },
    {
      key: "oxygen",
      title: "Oxygen Generators",
      desc: "On‑site PSA oxygen (90–95% purity) in compact plug‑and‑play units.",
      href: "/products/oxygen",
    },
    {
      key: "ref-dryers",
      title: "Refrigeration Air Dryers",
      desc: "RDP/RDHP up to 13,200 m³/h, PDP +3 °C, R513a, zero‑loss drains.",
      href: "/products/air-dryers",
    },
    {
      key: "ads-dryers",
      title: "Adsorption (Desiccant) Dryers",
      desc: "BVA/BVL/BP, PDP to −40 °C, Siemens SIMATIC, energy‑saving modes.",
      href: "/products/air-dryers#desiccant",
    },
    {
      key: "filtration",
      title: "Filtration Systems",
      desc: "Coalescing, particulate, activated‑carbon & sterile filters — ISO 8573‑1.",
      href: "/products/filtration",
    },
    {
      key: "turnkey",
      title: "Chillers & Turnkey Systems",
      desc: "PCI chillers (2–180 kW) + SKID/BOX for N₂/O₂ & compressed air.",
      href: "/products/chillers",
    },
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

  // ---- EVENTS: track lead actions ----
  const track = useCallback((action, params = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, { event_category: "lead", ...params });
    }
  }, []);

  const onQuoteClick = () => track("generate_lead", { label: "header_cta" });
  const onFormSubmit = () => track("generate_lead", { label: "contact_form" });

  return (
    <main>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta
          name="description"
          content="TechnoCore: Nitrogen & Oxygen Generators, Air Dryers, Filtration, and Turnkey Industrial Gas Solutions in Ireland. Supply • Installation • Service."
        />
        <meta
          name="keywords"
          content="Nitrogen generators, Oxygen generators, Air dryers, Gas filtration systems, PSA, Chillers, Refrigeration Air Dryers, Compressed Air, Industrial gas treatment, Ireland"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TechnoCore — Industrial Gas & Air Solutions" />
        <meta
          property="og:description"
          content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.technocore.ie/" />
        <meta property="og:image" content="https://www.technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.technocore.ie/" />
        {/* LocalBusiness schema for trust & local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TechnoCore Ltd",
              url: "https://www.technocore.ie/",
              telephone: "+353 85 231 4430",
              email: "sales@technocore.ie",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wicklow/Dublin",
                addressCountry: "IE",
              },
              areaServed: "Ireland",
              image: "https://www.technocore.ie/images/n2-generator.jpg",
              sameAs: [
                "https://www.linkedin.com/company/technocore-ie"
              ],
            }),
          }}
        />
      </Head>

      {/* Google tags */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17428189544" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'AW-17428189544');
        gtag('config', 'G-NGRNF7SK90', { send_page_view: true });
      `}</Script>

      {/* PAGE WRAPPER */}
      <div className="relative min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden">
        {/* Backgrounds with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-0 h-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[520px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" aria-hidden />
        </div>

        {/* FIXED HEADER */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-green-500 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Logo */}
            <Link href="#top" className="flex items-center gap-3 group focus:outline-none">
              <Image src="/logo.png" alt="TechnoCore logo" width={40} height={40} className="h-8 w-8 md:h-10 md:w-10 transition-transform group-active:scale-95" priority />
              <span className="text-white text-xl md:text-2xl font-bold transition-colors group-hover:text-green-400">TechnoCore</span>
            </Link>
            {/* Menu (anchor links on same page for reliability) */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-5 md:gap-8">
              <a href="#products" className="text-gray-300 hover:text-green-400 text-lg md:text-xl">Products</a>
              <a href="#gallery" className="text-gray-300 hover:text-green-400 text-lg md:text-xl">Gallery</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 text-lg md:text-xl">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 text-lg md:text-xl">Contact</a>
            </div>
          </div>
        </nav>

        {/* Spacer under fixed header */}
        <div className="h-16 sm:h-[68px]" />

        {/* HERO */}
        <header id="top" className="relative flex flex-col items-center justify-center text-center px-6 py-12">
          <div className="relative w-40 h-40 mb-6">
            <Image src="/logo.png" alt="TechnoCore logo large" fill sizes="(max-width: 768px) 160px, 200px" className="object-contain" priority />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl">
            Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland
          </h1>
          <h2 className="text-green-500 text-xl md:text-2xl font-semibold mt-2">
            PSA Systems · Air Dryers · Air & Gas Filtration · Turnkey Installations
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Supply • Installation • Commissioning • Service for gas generation and air treatment — from PSA N₂/O₂ generators to filtration, chillers, air dryers, and fully integrated turnkey systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="#contact" onClick={onQuoteClick} className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded font-medium">Request a Quote</a>
            <a href="#products" className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-5 py-2 rounded font-medium">Explore Products</a>
          </div>
        </header>

        {/* ABOUT (short trust block) */}
        <section id="about" className="bg-gray-900/60 px-6 py-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3 text-green-400">About TechnoCore</h3>
              <p className="text-gray-300">
                TechnoCore is an Irish engineering supplier focused on Omega Air solutions: PSA nitrogen & oxygen generation, air dryers, and ISO 8573‑1 compliant filtration. We deliver end‑to‑end projects — audit, sizing, supply, installation, commissioning, and after‑sales service.
              </p>
              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
                <li>Lead times from EU stock; local service in Ireland</li>
                <li>Laser cutting N₂ packages, paint‑booth air preparation, food & pharma</li>
                <li>CE/ISO documentation, FAT/SAT & commissioning reports</li>
              </ul>
            </div>
            <aside className="bg-black/50 border border-green-500 rounded-xl p-4">
              <p className="text-sm text-gray-300">Contact</p>
              <p className="font-semibold">+353 85 231 4430</p>
              <p className="text-sm text-gray-300">sales@technocore.ie</p>
              <p className="text-sm text-gray-300">Dublin / Wicklow, Ireland</p>
              <a href="#contact" className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded" onClick={() => track("click_contact_aside")}>Get a quote</a>
            </aside>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="bg-gray-900 px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <article key={product.key} className="bg-black/70 border border-green-500 rounded-xl p-6 flex flex-col">
                  <h4 className="text-xl font-semibold text-green-400 mb-2">{product.title}</h4>
                  <p className="text-gray-300 mb-4">{product.desc}</p>
                  <div className="mt-auto flex gap-3">
                    <Link href={product.href} className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">Learn more</Link>
                    <a href="#contact" className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-4 py-2 rounded" onClick={() => track("generate_lead", { label: `product_${product.key}` })}>Request Quote</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-black px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, idx) => (
                <figure key={idx} className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-12 bg-black text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Contact</h3>
            <p className="text-gray-400">Email: <a href="mailto:sales@technocore.ie" className="underline">sales@technocore.ie</a></p>
            <p className="text-gray-400">Phone: +353 85 231 4430</p>
            <p className="text-gray-400">Location: Dublin / Wicklow, Ireland</p>

            <form
              action="https://formsubmit.co/sales@technocore.ie"
              method="POST"
              className="mt-8 text-left"
              onSubmit={onFormSubmit}
            >
              {/* FormSubmit hardening */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.technocore.ie/thanks" />
              <input type="text" name="_honey" style={{ display: "none" }} readOnly />
              <input type="hidden" name="_subject" value="New enquiry from technocore.ie" />
              <input type="hidden" name="utm_source" value={typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : ''} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name*</label>
                  <input id="name" name="name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-1">Company</label>
                  <input id="company" name="company" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email*</label>
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
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message*</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" />
                </div>
              </div>
              <button type="submit" className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">Send Message</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-green-500 py-6 text-center text-gray-400 text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="mb-2 md:mb-0">
                <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
              </div>
              <div className="space-x-4">
                <a href="#products" className="text-gray-300 hover:text-green-400">Products</a>
                <a href="#gallery" className="hover:text-green-400">Gallery</a>
                <a href="#about" className="hover:text-green-400">About</a>
                <a href="#contact" className="hover:text-green-400">Contact</a>
              </div>
            </div>
            <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
