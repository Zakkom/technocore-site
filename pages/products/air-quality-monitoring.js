import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CookieConsent from "../../components/CookieConsent";
import IrelandCoverage from "../../components/IrelandCoverage";

const productGroups = [
  {
    number: "01",
    title: "Dew Point Monitor",
    models: "OS 305",
    image: "/images/monitoring/os-305.jpg",
    text: "Integrated dew point measurement, local display and alarm functions for compressed air dryers and moisture-sensitive processes.",
    applications: ["Dryer performance", "Low-PDP processes", "Alarm monitoring"],
  },
  {
    number: "02",
    title: "Dew Point Sensor",
    models: "OS 220 · OS 212 / 215 family",
    image: "/images/monitoring/os-220.jpg",
    text: "Compact sensors for continuous dew point measurement. Suitable for installation after refrigerated or adsorption dryers and at critical points of use.",
    applications: ["Permanent monitoring", "Low dew point", "Process protection"],
  },
  {
    number: "03",
    title: "Flow & Consumption Measurement",
    models: "Thermal Mass Flow Sensors",
    image: "/images/monitoring/os-flow.jpg",
    text: "Measure compressed air consumption at distribution headers or points of use. Flow data helps identify demand patterns and opportunities for optimisation.",
    applications: ["Flow monitoring", "Consumption", "Energy assessment"],
  },
  {
    number: "04",
    title: "Leak Detection",
    models: "OS 531",
    image: "/images/monitoring/os-531.jpg",
    text: "Portable ultrasonic leak detection for locating compressed air and gas leaks, including in noisy industrial environments. Document findings to prioritise corrective action.",
    applications: ["Leak surveys", "Maintenance", "Energy efficiency"],
  },
  {
    number: "05",
    title: "Portable Dew Point Measurement",
    models: "OS 505",
    image: "/images/monitoring/os-505.jpg",
    text: "Handheld instrument for dew point checks and troubleshooting. Combines dew point and line-pressure measurement in a portable unit.",
    applications: ["Spot checks", "Commissioning", "Troubleshooting"],
  },
  {
    number: "06",
    title: "Portable Compressed Air Assessment",
    models: "OS 551-P6 Set",
    image: "/images/monitoring/os-551-p6.jpg",
    text: "Portable multi-sensor data logging set for flow, dew point and pressure measurements across compressed air installations.",
    applications: ["Site surveys", "Troubleshooting", "Upgrade planning"],
  },
  {
    number: "07",
    title: "Portable Air Purity Analysis",
    models: "OS 600 Set",
    image: "/images/monitoring/os-600.jpg",
    text: "Portable equipment for assessing compressed air quality parameters including particles, dew point and oil vapour, with measurement and recording functions.",
    applications: ["Air quality surveys", "Purity checks", "Process verification"],
  },
  {
    number: "08",
    title: "Particle Monitoring",
    models: "OS 130 · OS 132",
    image: "/images/monitoring/os-130.jpg",
    text: "Laser particle counting for industrial compressed air and gas applications where particle contamination needs to be monitored.",
    applications: ["Particle counting", "Sensitive processes", "Quality control"],
  },
];

const benefits = [
  { title: "Protect your process", text: "Identify moisture or contamination risks before they affect sensitive equipment or production quality." },
  { title: "Make consumption visible", text: "Measure compressed air flow and pressure to investigate demand patterns and inefficiencies." },
  { title: "Support maintenance", text: "Use recorded measurements and alarm thresholds to improve troubleshooting and maintenance decisions." },
  { title: "Specify the right treatment", text: "Measured operating conditions help define suitable dryers, filtration stages and monitoring points." },
];

const measurements = [
  ["Pressure dew point", "Moisture level and dryer performance"],
  ["Flow / consumption", "Actual demand and abnormal usage"],
  ["System pressure", "Operating stability and pressure losses"],
  ["Oil vapour / particles", "Air purity at relevant process points"],
  ["Ultrasonic leakage", "Potential compressed air losses"],
  ["Recorded trends", "Changes over time and alarm events"],
];

const industries = [
  "Pharmaceutical Manufacturing", "Medical Device Manufacturing", "Food & Beverage",
  "Packaging", "Plastics", "Electronics", "Laser Cutting & Metal Fabrication",
  "General Manufacturing", "Laboratories & Instrument Air",
];

const selectionItems = [
  "What needs to be measured: dew point, flow, pressure, oil, particles or leaks",
  "Fixed installation or portable measurements",
  "Compressed air or gas type",
  "Operating pressure, temperature and expected measurement range",
  "Pipe diameter, flow range and installation location",
  "Required alarms, display, logging or integration outputs",
  "Relevant air quality target or process specification",
  "Number of measurement points and site conditions",
];

const faqs = [
  {
    q: "Why monitor pressure dew point after an air dryer?",
    a: "Dew point monitoring helps verify drying performance and detect moisture changes that could affect a downstream process. Sensor selection depends on the expected pressure dew point, operating pressure and required outputs.",
  },
  {
    q: "What is the difference between a dew point sensor and a monitor?",
    a: "A sensor measures the dew point and provides an output to a display, controller or data logger. An integrated monitor can combine measurement, local display and alarm functions in one unit, depending on the model.",
  },
  {
    q: "Can flow measurement help reduce compressed air costs?",
    a: "Flow measurements make compressed air demand visible. Combined with pressure data, operating schedules and leak surveys, they can help identify opportunities for system optimisation. Savings are site-specific and depend on corrective actions.",
  },
  {
    q: "Can one instrument verify ISO 8573-1 air quality?",
    a: "ISO 8573-1 specifies purity classes for particles, water and oil. Appropriate methods and instruments must be selected for each parameter and the relevant measurement standards. A single dew point reading cannot establish the full air purity class.",
  },
  {
    q: "Does TechnoCore offer portable and permanent monitoring solutions?",
    a: "TechnoCore can assist with selecting portable measurement equipment and permanent monitoring components from the available product range based on the intended application and installation requirements.",
  },
];

export default function AirQualitySystemMonitoring() {
  const canonical = "https://www.technocore.ie/products/air-quality-monitoring";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Compressed Air Quality & System Monitoring Ireland",
    serviceType: "Compressed air dew point monitoring, flow measurement, leak detection and air quality instrumentation selection",
    provider: {
      "@type": "Organization", name: "TechnoCore Limited",
      url: "https://www.technocore.ie", email: "sales@technocore.ie",
      telephone: "+353874386157",
    },
    areaServed: { "@type": "Country", name: "Ireland" },
    url: canonical,
  };

  return (
    <main>
      <Head>
        <title>Compressed Air Monitoring Ireland | Dew Point, Flow & Air Quality | TechnoCore</title>
        <meta name="description" content="Compressed air monitoring in Ireland: dew point sensors, flow meters, pressure monitoring, leak detection, data logging and air purity analysers. Technical selection by TechnoCore." />
        <meta name="keywords" content="compressed air monitoring Ireland, dew point sensor Ireland, dew point monitor, compressed air flow meter Ireland, compressed air leak detector, air quality monitoring, ISO 8573-1, oil vapour sensor, particle counter, compressed air data logger" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Air Quality & System Monitoring | TechnoCore Ireland" />
        <meta property="og:description" content="Dew point, flow, pressure, leak detection and air purity instrumentation for industrial compressed air systems throughout Ireland." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.technocore.ie/images/filtration-units.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Air Quality & System Monitoring | TechnoCore" />
        <meta name="twitter:description" content="Compressed air measurement, dew point monitoring, leak detection and air quality instrumentation in Ireland." />
        <meta name="twitter:image" content="https://www.technocore.ie/images/filtration-units.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group overflow-visible">
              <div className="relative w-[108px] h-[58px] shrink-0 overflow-visible -ml-8">
                <Image src="/logo.png" alt="TechnoCore" width={130} height={130} className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[112px] h-[112px] max-w-none object-contain" />
              </div>
              <div className="leading-none">
                <div className="text-[25px] font-bold tracking-tight">TechnoCore</div>
                <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-1.5">Industrial Engineering</div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
              <Link href="/#solutions" className="hover:text-green-400 transition-colors">Solutions</Link>
              <Link href="/compressed-air-treatment-ireland" className="text-green-400 transition-colors">Air Treatment</Link>
              <Link href="/#engineering" className="hover:text-green-400 transition-colors">Engineering</Link>
              <Link href="/#industries" className="hover:text-green-400 transition-colors">Industries</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </div>
            <Link href="#monitoring-enquiry" className="hidden sm:inline-flex bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition">Request a Quote</Link>
          </div>
        </nav>

        <header className="relative overflow-hidden border-b border-green-500/30 pt-[76px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/top-bg.jpg')" }} />
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
            <Link href="/compressed-air-treatment-ireland" className="inline-flex text-sm text-gray-300 hover:text-green-400 mb-7">← Back to Compressed Air Treatment</Link>
            <p className="text-green-400 font-semibold tracking-wide uppercase mb-3">Industrial Measurement & Process Reliability</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">Air Quality & System Monitoring Ireland</h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl">Dew point, flow, pressure, leak detection and compressed air purity measurement.</p>
            <p className="text-gray-400 mt-5 max-w-3xl leading-relaxed">TechnoCore supports the selection of measurement equipment for industrial compressed air systems throughout Ireland. From a single dew point sensor to multi-parameter monitoring, the right instrumentation helps you understand air quality and operating performance.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="#monitoring-enquiry" className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded">Request Technical Selection</Link>
              <Link href="#monitoring-equipment" className="border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-6 py-3 rounded">Explore Monitoring Equipment</Link>
            </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden border border-green-500/50 bg-white p-4 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
              <Image src="/images/monitoring/os-551-p6.jpg" alt="Omega Air OS 551-P6 portable compressed air flow, dew point and pressure measurement kit" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-contain p-4" priority />
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-green-400 font-semibold uppercase">Why measure?</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">You cannot optimise what you cannot measure</h2>
              <p className="text-gray-300 mt-5 leading-relaxed">Compressed air quality and system demand can change throughout the day. Reliable monitoring helps detect moisture problems, track consumption and pressure, investigate leakage and check whether treatment equipment is performing as expected.</p>
              <p className="text-gray-400 mt-4 leading-relaxed">Measurements support engineering decisions; they do not replace correct system design, maintenance or a validated air quality testing procedure.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item.title} className="bg-gray-900 border border-green-500/40 rounded-xl p-5">
                  <div className="w-8 h-1 bg-green-500 rounded mb-4" />
                  <h3 className="font-semibold text-green-400">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="monitoring-equipment" className="scroll-mt-24 bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-3xl mb-10">
              <p className="text-green-400 font-semibold uppercase">Equipment Selection</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Compressed Air Monitoring Solutions</h2>
              <p className="text-gray-400 mt-4">Representative instruments available within the Omega Air product portfolio. Final model selection and availability are subject to the technical requirements and quotation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productGroups.map((item) => (
                <article key={item.title} className="group relative flex flex-col bg-black border border-green-500/60 hover:border-green-400 hover:bg-green-950/30 hover:shadow-[0_0_22px_rgba(34,197,94,0.12)] transition-all duration-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green-400">
                  <div className="relative h-52 bg-white border-b border-green-500/20">
                    <Image src={item.image} alt={`Omega Air ${item.models} — ${item.title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs tracking-widest font-bold text-green-500">{item.number} / MONITORING</span>
                  <h3 className="text-lg font-semibold text-green-400 mt-3">{item.title}</h3>
                  <p className="text-sm font-medium text-white/80 mt-2">{item.models}</p>
                  <p className="text-sm text-gray-300 mt-4 leading-relaxed flex-grow">{item.text}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.applications.map((tag) => <span key={tag} className="text-xs text-green-200 bg-green-950/60 border border-green-500/30 rounded-full px-2.5 py-1">{tag}</span>)}
                  </div>
                  <Link href="#monitoring-enquiry" className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-green-500 px-4 py-2.5 text-sm font-semibold text-black hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 after:absolute after:inset-0 after:content-['']">Request a Quote <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What Can Be Measured?</h2>
              <p className="text-gray-300 mt-5 leading-relaxed">Depending on the process, a monitoring installation may combine several sensors with a local display or data logger. The best measurement points are selected around the compressor, dryer, distribution network and critical end users.</p>
              <p className="text-gray-400 mt-4 leading-relaxed">For ISO 8573-1 related work, particle, water and oil measurements must be assessed separately using appropriate methods. We can help identify equipment suited to the required scope.</p>
              <Link href="/compressed-air-treatment-ireland" className="inline-flex mt-6 text-green-400 hover:text-green-300 font-semibold">Explore Air Treatment Solutions →</Link>
            </div>
            <div className="bg-gray-900 border border-green-500/50 rounded-xl overflow-hidden">
              <div className="p-5 bg-green-950/30 border-b border-green-500/30"><h3 className="font-semibold text-green-400">Measurement → Engineering Purpose</h3></div>
              {measurements.map(([name, purpose]) => (
                <div key={name} className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-2 sm:gap-4 p-4 border-b border-white/10 last:border-0">
                  <span className="font-semibold text-white">{name}</span>
                  <span className="text-gray-300 text-sm">{purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Monitoring for Irish Industry</h2>
            <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">Select monitoring equipment around the operating requirements of your facility and the criticality of your compressed air supply.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
              {industries.map((industry) => <div key={industry} className="bg-black border border-green-500/40 rounded-lg p-4 text-center text-gray-200">{industry}</div>)}
            </div>
          </div>
        </section>

        <IrelandCoverage product="compressed air monitoring and air quality measurement equipment" />

        <section className="bg-gray-900 border-y border-green-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-green-400 font-semibold uppercase">Engineering Selection</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Not Sure Which Sensor or Monitor You Need?</h2>
              <p className="text-gray-300 mt-5 leading-relaxed">Tell us what you need to measure and where. We can help narrow down suitable instrumentation and request the correct technical configuration.</p>
            </div>
            <div className="bg-black border border-green-500/60 rounded-xl p-7">
              <h3 className="text-xl font-semibold text-green-400">Information that helps us select equipment</h3>
              <ul className="mt-5 space-y-3 text-gray-300">
                {selectionItems.map((item) => <li key={item} className="flex gap-3"><span className="text-green-400 font-bold">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((item) => <details key={item.q} className="bg-gray-900 border border-green-500/40 rounded-xl p-5 group"><summary className="cursor-pointer text-lg font-semibold text-green-400">{item.q}</summary><p className="text-gray-300 mt-4 leading-relaxed">{item.a}</p></details>)}
          </div>
        </section>

        <section id="monitoring-enquiry" className="scroll-mt-24 bg-black border-t border-green-500/30 px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-green-400 font-semibold uppercase">Technical & Commercial Enquiries</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Request Compressed Air Monitoring Equipment</h2>
              <p className="text-gray-400 mt-4">Send your application details and we will help identify a suitable measurement solution.</p>
            </div>
            <form action="https://formsubmit.co/sales@technocore.ie" method="POST" className="bg-gray-900 border border-green-500/50 rounded-xl p-6 md:p-8">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.technocore.ie/thanks" />
              <input type="hidden" name="_subject" value="Air Quality & System Monitoring Enquiry" />
              <input type="hidden" name="_honey" value="" readOnly style={{ display: "none" }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label htmlFor="monitoring-name" className="block text-gray-300 mb-1">Name *</label><input id="monitoring-name" name="name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="monitoring-company" className="block text-gray-300 mb-1">Company</label><input id="monitoring-company" name="company" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="monitoring-email" className="block text-gray-300 mb-1">Email *</label><input id="monitoring-email" name="email" type="email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
                <div><label htmlFor="monitoring-phone" className="block text-gray-300 mb-1">Phone</label><input id="monitoring-phone" name="phone" type="tel" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" /></div>
              </div>
              <div className="mt-4"><label htmlFor="monitoring-interest" className="block text-gray-300 mb-1">Measurement requirement</label><select id="monitoring-interest" name="measurement_interest" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"><option value="">Select a category</option><option>Dew point monitoring</option><option>Flow / consumption measurement</option><option>Pressure & data logging</option><option>Leak detection</option><option>Air purity analysis</option><option>Portable monitoring / multiple parameters</option><option>Not sure — technical selection needed</option></select></div>
              <div className="mt-4"><label htmlFor="monitoring-message" className="block text-gray-300 mb-1">Application / operating requirements *</label><textarea id="monitoring-message" name="message" required rows={5} placeholder="Tell us about your compressed air system, measurement points, pressure, dew point or required parameters." className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-green-500" /></div>
              <button type="submit" className="w-full mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition">Send Monitoring Enquiry →</button>
              <p className="text-xs text-gray-400 mt-4">By submitting, you agree to be contacted about your enquiry. See our <Link href="/privacy-policy" className="text-green-400 underline">Privacy Policy</Link>.</p>
            </form>
          </div>
        </section>

        <footer className="bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="TechnoCore" width={72} height={72} className="w-[72px] h-[72px] object-contain" />
                  <div><div className="font-bold text-[27px] text-white">TechnoCore</div><div className="text-[10px] tracking-[0.23em] uppercase text-gray-400 mt-1">Industrial Engineering</div></div>
                </div>
                <p className="text-gray-400 mt-6 max-w-sm leading-relaxed">Industrial compressed air, gas generation, filtration, cooling and engineered utility systems in Ireland.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Solutions</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  {[["Compressed Air", "/compressed-air-treatment-ireland"], ["Nitrogen", "/products/nitrogen"], ["Oxygen", "/products/oxygen"], ["Air Dryers", "/products/air-dryers"], ["Filtration", "/products/filtration"], ["Chillers", "/products/chillers"], ["Paint Booth Air Preparation", "/products/paint-booth"]].map(([name, href]) => <Link key={href} href={href} className="block hover:text-green-400">{name}</Link>)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Company</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  {[["All Products", "/products"], ["About", "/about"], ["Contact", "/contact"], ["Privacy Policy", "/privacy-policy"]].map(([name, href]) => <Link key={href} href={href} className="block hover:text-green-400">{name}</Link>)}
                  <button type="button" onClick={() => window.dispatchEvent(new Event("technocore:open-cookie-settings"))} className="block hover:text-green-400">Cookie Settings</button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-200">Contact</h3>
                <div className="mt-5 space-y-3 text-gray-400">
                  <a href="mailto:sales@technocore.ie" className="block hover:text-green-400">sales@technocore.ie</a>
                  <a href="tel:+353874386157" className="block hover:text-green-400">+353 87 438 6157</a>
                  <div>Newtownmountkennedy, Co. Wicklow, Ireland</div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} TechnoCore Limited. All rights reserved.</p>
              <p>Based in Newtownmountkennedy, Co. Wicklow · Supporting industrial customers throughout Ireland</p>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </div>
    </main>
  );
}
