// components/SiteLayout.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function SiteLayout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/"; // показываем нижний фон только на главной

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-green-500 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Кликабельный логотип слева */}
          <Link href="/" aria-label="TechnoCore — Home" className="flex items-center gap-3">
            <img src="/logo.png" alt="TechnoCore" className="h-16 md:h-18 w-auto" />
            <span className="text-white font-semibold hidden sm:block">TechnoCore</span>
          </Link>

          {/* Пункты меню — крупнее */}
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

  {/* 📞 Phone CTA */}
  <a
    href="tel:+353874386157"
    className="ml-2 hidden md:inline-flex items-center border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
  >
    Call +353 87 438 6157
  </a>
</div>

      </nav>

      {/* CONTENT */}
      {children}

      {/* Нижний фон — ТОЛЬКО на главной */}
      {isHome && (
        <div
          className="h-32 md:h-44 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bottom-bg.jpg')" }}
        />
      )}

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
