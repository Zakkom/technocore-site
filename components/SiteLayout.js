// components/SiteLayout.js
import Link from "next/link";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-green-500 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* ЛОГО СЛЕВА, КЛИКАБЕЛЕН И БОЛЬШЕ */}
          <Link href="/" aria-label="TechnoCore — Home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="TechnoCore"
              className="h-12 md:h-14 w-auto"   // было ~ h-8–10
            />
            <span className="sr-only">TechnoCore</span>
          </Link>

          {/* КНОПКИ ПОБОЛЬШЕ */}
          <div className="flex items-center gap-6">
            <Link href="/products" className="text-gray-200 hover:text-green-400 text-base md:text-lg">
              Products
            </Link>
            <a href="/#gallery" className="text-gray-200 hover:text-green-400 text-base md:text-lg">
              Gallery
            </a>
            <Link href="/about" className="text-gray-200 hover:text-green-400 text-base md:text-lg">
              About
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-green-400 text-base md:text-lg">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* КОНТЕНТ */}
      {children}

      {/* УЗКИЙ НИЖНИЙ ФОН (БЫЛ ОГРОМНЫЙ) */}
      <div
        className="h-32 md:h-44 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
      />

      {/* FOOTER */}
      <footer className="border-t border-green-500 py-6 text-center text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-white font-semibold">TechnoCore</span> — Industrial Gas Solutions
          </div>
          <div className="flex gap-4">
            <Link href="/products" className="hover:text-green-400">Products</Link>
            <a href="/#gallery" className="hover:text-green-400">Gallery</a>
            <Link href="/about" className="hover:text-green-400">About</Link>
            <Link href="/contact" className="hover:text-green-400">Contact</Link>
          </div>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
      </footer>
    </div>
  );
}

