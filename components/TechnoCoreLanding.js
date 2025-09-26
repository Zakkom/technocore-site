import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";
import Link from "next/link";


export default function TechnoCoreLanding() {
const products = [/* оставляем продукты как есть */];


const images = [/* оставляем галерею как есть */];


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
<Link href="/about" className="text-gray-300 hover:text-green-400">About</Link>
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