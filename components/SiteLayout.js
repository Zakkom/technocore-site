// components/SiteLayout.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import CookieConsent from "./CookieConsent";

// Rendered on every page via SiteLayout, so adding a product link here
// closes the internal-linking gap between all product pages at once,
// instead of only on the homepage footer.
const solutions = [
  { label: "Nitrogen Generation", href: "/products/nitrogen" },
  { label: "Oxygen Generation", href: "/products/oxygen" },
  { label: "Air Dryers", href: "/products/air-dryers" },
  { label: "Industrial Filtration", href: "/products/filtration" },
  { label: "Industrial Chillers", href: "/products/chillers" },
  { label: "Paint Booth Air Preparation", href: "/products/paint-booth" },
  { label: "Compressed Air Treatment", href: "/compressed-air-treatment-ireland" },
];

export default function SiteLayout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group overflow-visible">
            <div className="relative w-[108px] h-[58px] shrink-0 overflow-visible -ml-8">
              <Image
                src="/logo.png"
                alt="TechnoCore"
                width={130}
                height={130}
                priority
                className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[112px] h-[112px] max-w-none object-contain"
              />
            </div>

            <div className="leading-none">
              <div className="text-[25px] font-bold tracking-tight">
                TechnoCore
              </div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-1.5">
                Industrial Engineering
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/#solutions" className="hover:text-green-400 transition-colors">
              Solutions
            </Link>

            <Link
              href="/compressed-air-treatment-ireland"
              className="hover:text-green-400 transition-colors"
            >
              Air Treatment
            </Link>

            <Link href="/#engineering" className="hover:text-green-400 transition-colors">
              Engineering
            </Link>

            <Link href="/#industries" className="hover:text-green-400 transition-colors">
              Industries
            </Link>

            <Link href="/about" className="hover:text-green-400 transition-colors">
              About
            </Link>

            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Discuss Your Project
          </Link>
        </div>
      </nav>
      {/* CONTENT */}
      {children}
      {/* Bottom background only on home */}
      {isHome && (
        <div
          className="h-32 md:h-44 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
        />
      )}
      {/* FOOTER */}
      <footer className="border-t border-green-500 py-10 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <span className="text-white font-semibold">TechnoCore</span>
              <p className="mt-2 text-gray-400">
                Industrial compressed air, gas generation, filtration,
                cooling and engineered utility systems in Ireland.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-3">Solutions</p>
              <ul className="space-y-2">
                {solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-green-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-3">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="hover:text-green-400">
                    All Products
                  </Link>
                </li>
                <li>
                  <a href="/#gallery" className="hover:text-green-400">
                    Gallery
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-green-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-green-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(
                        new Event("technocore:open-cookie-settings")
                      )
                    }
                    className="hover:text-green-400"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-3">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+353874386157" className="hover:text-green-400">
                    +353 87 438 6157
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@technocore.ie"
                    className="hover:text-green-400"
                  >
                    sales@technocore.ie
                  </a>
                </li>
                <li className="text-gray-400">
                  Newtownmountkennedy, Co. Wicklow, Ireland
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-400">
              Based in Newtownmountkennedy, Co. Wicklow · Supporting
              industrial customers throughout Ireland
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} TechnoCore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
<CookieConsent />
    </div>
  );
}
