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

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      "name": product.title,
      "description": product.desc,
      "brand": {
        "@type": "Brand",
        "name": "TechnoCore"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "price": "0.0"
      }
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechnoCore",
    "url": "https://technocore.ie",
    "logo": "https://technocore.ie/logo.png",
    "email": "sales@technocore.ie",
    "description": "TechnoCore supplies nitrogen & oxygen generators, dryers, filtration, and gas treatment systems in Ireland.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dublin",
      "addressRegion": "Leinster",
      "addressCountry": "IE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "sales@technocore.ie",
        "contactType": "sales",
        "availableLanguage": ["English"]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>TechnoCore | Industrial Gas & Air Solutions in Ireland</title>
        <meta name="description" content="TechnoCore: Nitrogen and Oxygen Generators, Dryers, Filtration, and Industrial Gas Solutions in Ireland." />
        <meta name="keywords" content="Nitrogen generators, Oxygen generators, Air dryers, Filtration systems, PSA, OMEGA AIR, Industrial gas treatment, Ireland" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      {/* ...контент страницы остаётся без изменений */}
      {/* Весь нижний JSX — навигация, секции, футер — у тебя уже есть */}
    </>
  );
}
