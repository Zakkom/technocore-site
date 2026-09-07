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
  { label: "Compressed Air Treatment", href: "/compressed-air-treatment-ireland" },
];

export default function SiteLayout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-green-500 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="TechnoCore — Home" className="flex items-center gap-3">
            <div className="relative h-16 md:h-18 w-32">
              <Image
                src="/logo.png"
                alt="TechnoCore"
                fill
                priority
                sizes="128px"
                className="object-contain object-left"
              />
            </div>
            <span className="text-white font-semibold hidden sm:block">TechnoCore</span>
          </Link>
          {/* Menu + Phone */}
          <div className="flex items-center gap-6">
            <Link href="/products" className="text-gray-200 hover:text-green-400 text-lg md:text-xl">
              Products
            </Link>
            <a href="/#gallery" className="text-gray-200 hover:text-green-400 text-lg md:text-xl">
              Gallery
            </a>
            <Link href="/about" className="text-gray-200 hover:text-green-400 text-lg md:text-xl">
              About
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-green-400 text-lg md:text-xl">
              Contact
            </Link>
            {/* 📞 Phone CTA (desktop) */}
            <a
              href="tel:+353874386157"
              className="ml-2 hidden md:inline-flex items-center border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
            >
              Call +353 87 438 6157
            </a>
          </div>
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
