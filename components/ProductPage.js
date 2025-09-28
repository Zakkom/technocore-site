// components/ProductPage.js
import Link from "next/link";

export default function ProductPage({
  title,
  intro,
  col1Title,
  col1Items,
  col2Title,
  col2Items,
  ctaText,
  ctaHref,
  heroImage,
  bottomImage,
}) {
  return (
    <>
      {/* верхний баннер */}
      <div
        className="h-40 md:h-56 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="TechnoCore logo"
            className="h-14 md:h-16 w-auto"
          />
        </div>
      </div>

      {/* контент */}
      <main className="bg-black px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
          {title}
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-4">{intro}</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mt-6">
          <div>
            <h2 className="text-green-400 font-semibold mb-2">{col1Title}</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {col1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-green-400 font-semibold mb-2">{col2Title}</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {col2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={ctaHref}
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold"
        >
          {ctaText}
        </Link>
      </main>

      {/* нижняя картинка */}
      {bottomImage && (
        <img
          src={bottomImage}
          alt={title}
          className="w-full h-48 md:h-72 lg:h-96 object-cover"
        />
      )}
    </>
  );
}
