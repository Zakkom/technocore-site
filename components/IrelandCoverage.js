export default function IrelandCoverage({
  product = "industrial compressed air, gas generation and process utility systems",
}) {
 const regions = [
  "Dublin",
  "Wicklow",
  "Kildare",
  "Meath",
  "Wexford",
  "Cork",
  "Limerick",
  "Shannon",
  "Galway",
  "Waterford",
];

  return (
    <section className="bg-[#eef2ef] text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">

          <div>
            <p className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
              Nationwide Industrial Support
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
              Industrial Solutions
              <span className="block">Across Ireland</span>
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Based in Newtownmountkennedy, Co. Wicklow, TechnoCore supplies
              and supports {product} for industrial customers throughout Ireland.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.14em]">
              Key industrial regions we support
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {regions.map((region) => (
                <span
                  key={region}
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium"
                >
                  {region}
                </span>
              ))}

              <span className="border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                Nationwide
              </span>
            </div>

                      </div>

        </div>
      </div>
    </section>
  );
}