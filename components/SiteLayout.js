// components/SiteLayout.js
import Link from "next/link";

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* background images */}
      <div
        className="absolute inset-x-0 top-0 h-72 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[600px] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* content layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* NAV */}
        <nav className="bg-black/95 border-b border-green-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="TechnoCore" className="h-8 w-auto" />
              <span className="text-white text-lg font-bold">TechnoCore</span>
            </Link>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
              <Link href="/products" className="text-gray-300 hover:text-green-400">Products</Link>
              <Link href="/#gallery" className="text-gray-300 hover:text-green-400">Gallery</Link>
              <Link href="/about" className="text-gray-300 hover:text-green-400">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* MAIN */}
        <div className="flex-1">{children}</div>

        {/* FOOTER */}
        <footer className="bg-black/95 border-t border-green-500 mt-12 py-6 text-center text-gray-400 text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="mb-2 md:mb-0">
                <span className="text-white font-semibold text-lg">TechnoCore</span> — Industrial Gas Solutions
              </div>
              <div className="flex gap-4">
                <Link href="/products" className="text-gray-300 hover:text-green-400"> 
			Products
		</Link>
                <Link href="/about" className="hover:text-green-400">About</Link>
                <Link href="/contact" className="hover:text-green-400">Contact</Link>
              </div>
            </div>
            <p>© {new Date().getFullYear()} TechnoCore. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
