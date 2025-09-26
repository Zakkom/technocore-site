// === pages/_app.js ===
import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Google Tags (load once site‑wide) */}
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
      <Component {...pageProps} />
    </>
  );
}

// === components/Layout.js ===
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ title = "TechnoCore | Industrial Gas & Air Solutions in Ireland", description = "Nitrogen & Oxygen Generators, Air Dryers, Filtration, Paint Booth Air Prep and turnkey solutions in Ireland.", children, canonical = "https://technocore.ie/" }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TechnoCore" />
        <meta property="og:description" content="Industrial Nitrogen & Oxygen Generators, Dryers & Filtration in Ireland." />
        <meta property="og:image" content="https://technocore.ie/images/n2-generator.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
      </Head>
      <Nav />
      <div className="max-w-7xl mx-auto px-4">{children}</div>
      <Footer />
    </main>
  );
}

// === components/Nav.js ===
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-black/80 backdrop-blur border-b border-green-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">TechnoCore</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

// === components/Footer.js ===
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500 mt-16 py-8 text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <span className="text-white font-semibold">TechnoCore</span> — Industrial Gas Solutions
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
    </footer>
  );
}

// === components/ProductCard.js ===
export default function ProductCard({ title, desc, bullets = [], ctaHref = "/contact", ctaText = "Request Quote" }) {
  return (
    <article className="bg-black border border-green-500 rounded p-6 h-full flex flex-col">
      <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{desc}</p>
      {bullets?.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      <a href={ctaHref} className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">{ctaText}</a>
    </article>
  );
}

// === pages/index.js ===
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      title: "Nitrogen Generators",
      desc: "PSA nitrogen systems with 97–99.9995% purity (SKID/BOX).",
      bullets: [
        "Cut nitrogen costs vs bottled gas",
        "ROI/sizing included",
        "Local install & service in Ireland"
      ]
    },
    {
      title: "Oxygen Generators",
      desc: "On‑site PSA O₂ 90–95% for aquaculture, medical & industry.",
      bullets: ["Independent O₂ supply", "Low energy use", "Plug‑and‑play SKID/BOX"]
    },
    {
      title: "Refrigeration Air Dryers",
      desc: "+3 °C PDP dryers up to 13,200 m³/h with zero‑loss drains.",
      bullets: ["Energy‑saving controls", "High‑flow capability", "Protect equipment & quality"]
    },
    {
      title: "Adsorption (Desiccant) Dryers",
      desc: "−40 °C PDP, Siemens PLC, energy‑saving purge cycles.",
      bullets: ["Pharma & electronics", "Continuous duty", "Compliance & reliability"]
    },
    {
      title: "Filtration Systems",
      desc: "Coalescing, particulate, activated‑carbon & sterile (ISO 8573‑1).",
      bullets: ["Protect downstream equipment", "Improve product quality", "Omega Air filter trains"]
    },
    {
      title: "Paint Booth Air Preparation",
      desc: "Compressed‑air prep for automotive & industrial spray booths.",
      bullets: ["Dryers + multi‑stage filtration", "Defect‑free finishing", "Design, install, service"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="text-center py-14">
        <img src="/logo.png" alt="TechnoCore" className="h-16 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold">Industrial Nitrogen & Oxygen Generators | Compressed Air & Gas Solutions in Ireland</h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          PSA N₂/O₂ generators, refrigeration & desiccant dryers, air & gas filtration, paint‑booth air prep and turnkey compressed‑air systems.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact" className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded">Request Quote</a>
          <a href="tel:+353852314430" className="border border-green-500 hover:bg-green-500/10 text-green-400 px-6 py-2 rounded">Call +353 85 231 4430</a>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} desc={p.desc} bullets={p.bullets} />
        ))}
      </section>

      {/* Gallery (optional, keep lightweight) */}
      <section className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["/images/n2-generator.jpg","/images/o2-skid.jpg","/images/rdp-dryer.jpg"].map((src, i) => (
          <img key={i} src={src} alt="TechnoCore gallery" className="w-full h-56 object-cover rounded border border-green-500" />
        ))}
      </section>
    </Layout>
  );
}

// === pages/about.js ===
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About TechnoCore — Industrial Gas & Air in Ireland" canonical="https://technocore.ie/about">
      <section className="py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-green-500">About TechnoCore</h1>
        <p className="text-gray-300 mb-6">
          TechnoCore is Ireland’s trusted partner of OMEGA AIR delivering PSA nitrogen and oxygen generators, refrigeration and adsorption dryers, air & gas filtration, paint‑booth air preparation and turnkey industrial gas solutions for manufacturing, food processing and pharma.
        </p>

        {/* Structured product blurbs (SEO‑friendly) */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-green-400">Nitrogen Generators</h2>
            <p className="text-gray-300 mt-2">On‑site PSA nitrogen generation (97–99.9995% purity) for laser cutting, food & beverage, pharma and labs. Reduce cylinder dependency and operating costs with SKID/BOX plug‑and‑play packages and local installation & service across Ireland.</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>ROI and sizing calculation included</li>
              <li>Stable 24/7 supply, reduced logistics</li>
              <li>Omega Air equipment, local support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400">Oxygen Generators</h2>
            <p className="text-gray-300 mt-2">PSA oxygen (90–95%) for aquaculture, medical, welding and metalworking. Compact SKID/BOX solutions that are easy to install and maintain, providing a safe and efficient on‑site O₂ source.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400">Air Dryers</h2>
            <p className="text-gray-300 mt-2">Refrigeration dryers (+3 °C PDP) and adsorption dryers (down to −40 °C PDP) to protect equipment and ensure product quality. Energy‑saving modes, zero‑loss drains and high‑flow capacities up to 13,200 m³/h.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400">Filtration & Paint Booth Air Prep</h2>
            <p className="text-gray-300 mt-2">Coalescing, particulate, activated‑carbon and sterile filters to ISO 8573‑1. Complete compressed‑air prep for automotive and industrial spray booths for defect‑free finishing.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// === pages/contact.js ===
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact TechnoCore — Request a Quote" canonical="https://technocore.ie/contact">
      <section className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-2 text-green-500">Contact</h1>
        <p className="text-gray-400">Email: <a className="underline" href="mailto:sales@technocore.ie">sales@technocore.ie</a> · Phone: +353 85 231 4430 · Dublin / Wicklow, Ireland</p>

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
    </Layout>
  );
}
