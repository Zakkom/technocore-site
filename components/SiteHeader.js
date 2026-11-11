import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const productLinks = [
  { label: "Air Dryers", href: "/products/air-dryers" },
  { label: "Refrigerated Dryers", href: "/products/air-dryers/refrigerated" },
  { label: "Adsorption Dryers", href: "/products/air-dryers/adsorption" },
  { label: "Air Filtration", href: "/products/filtration" },
  { label: "Nitrogen Generators", href: "/products/nitrogen" },
  { label: "Oxygen Generators", href: "/products/oxygen" },
  { label: "Industrial Chillers", href: "/products/chillers" },
  { label: "All Products", href: "/products" },
];
const solutionLinks = [
  { label: "Compressed Air Treatment", href: "/compressed-air-treatment-ireland" },
  { label: "Paint Booth Air Preparation", href: "/products/paint-booth" },
];
const menus = [
  { label: "Products", links: productLinks },
  { label: "Solutions", links: solutionLinks },
];
const navigation = [
  { label: "Engineering", href: "/#engineering" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Chevron({ open = false }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded bg-green-500/15 text-green-400 group-hover:bg-green-500/25 transition-colors">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const home = router.pathname === "/";
  const closeAll = () => { setMobileOpen(false); setMobileSection(null); setDesktopOpen(null); };
  return (
    <nav className={`${home ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl text-white`} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between gap-3">
        <Link href="/" onClick={closeAll} className="flex items-center gap-3 shrink-0">
          <span className="relative w-[58px] h-[58px] shrink-0"><Image src="/logo.png" alt="TechnoCore logo" fill sizes="58px" priority className="object-contain" /></span>
          <span className="leading-none whitespace-nowrap">
            <span className="block text-[23px] xl:text-[25px] font-bold tracking-tight">TechnoCore</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.20em] text-gray-400 mt-1.5">Industrial Engineering</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium text-gray-200">
          {menus.map(menu => (
            <div key={menu.label} className="relative group" onMouseEnter={() => setDesktopOpen(menu.label)} onMouseLeave={() => setDesktopOpen(null)}>
              <button type="button" aria-haspopup="true" aria-expanded={desktopOpen === menu.label} onClick={() => setDesktopOpen(v => v === menu.label ? null : menu.label)} className="flex items-center gap-2 py-5 hover:text-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded">
                {menu.label}<Chevron open={desktopOpen === menu.label} />
              </button>
              {desktopOpen === menu.label && (
                <div className="absolute top-full left-0 w-[280px] bg-[#0b130e] border border-white/20 shadow-2xl rounded-md p-2">
                  {menu.links.map(item => <Link key={item.href} href={item.href} onClick={closeAll} className="block px-4 py-2.5 rounded text-gray-200 hover:bg-green-500/10 hover:text-green-400 focus-visible:bg-green-500/10 focus-visible:text-green-400">{item.label}</Link>)}
                </div>
              )}
            </div>
          ))}
          {navigation.map(item => <Link key={item.href} href={item.href} onClick={closeAll} className="hover:text-green-400 whitespace-nowrap">{item.label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <Link href={home ? "/#enquiry" : "/contact"} onClick={closeAll} className="hidden sm:inline-flex whitespace-nowrap bg-green-500 hover:bg-green-400 text-black font-semibold px-4 xl:px-5 py-3 rounded-md transition text-sm">{home ? "Get a Quote" : "Discuss Your Project"}</Link>
          <button type="button" className="lg:hidden border border-white/30 rounded px-3 py-2 text-white" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="technocore-mobile-menu" onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? "✕" : "☰"}</button>
        </div>
      </div>
      {mobileOpen && <div id="technocore-mobile-menu" className="lg:hidden max-h-[calc(100dvh-76px)] overflow-y-auto bg-[#08100b] border-t border-white/10 px-5 py-4">
        {menus.map(menu => <div key={menu.label} className="border-b border-white/10">
          <button type="button" className="w-full flex justify-between items-center py-3 text-left font-semibold group" aria-expanded={mobileSection === menu.label} onClick={() => setMobileSection(v => v === menu.label ? null : menu.label)}>{menu.label}<Chevron open={mobileSection === menu.label}/></button>
          {mobileSection === menu.label && <div className="pb-3 pl-3 space-y-1">{menu.links.map(item => <Link key={item.href} href={item.href} onClick={closeAll} className="block py-2.5 text-gray-300 hover:text-green-400">{item.label}</Link>)}</div>}
        </div>)}
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={closeAll} className="block py-3 border-b border-white/10">{item.label}</Link>)}
        <Link href={home ? "/#enquiry" : "/contact"} onClick={closeAll} className="block text-center mt-4 bg-green-500 text-black font-semibold rounded py-3">Get a Quote</Link>
      </div>}
    </nav>
  );
}
