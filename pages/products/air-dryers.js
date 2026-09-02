import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Compressed Air Dryers Ireland | Refrigerated & Adsorption | TechnoCore</title>

        <meta
          name="description"
          content="Industrial compressed air dryers in Ireland. Refrigerated, adsorption, high-pressure and specialist dryer solutions for manufacturing, pharma, food, automotive and process applications."
        />

        <link
          rel="canonical"
          href="https://www.technocore.ie/products/air-dryers"
        />
      </Head>

      {/* HERO */}
      <div className="relative">
        <div
          className="h-40 md:h-56 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="TechnoCore"
            className="h-16 md:h-20 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <main className="bg-black px-6 py-10">

        {/* INTRO */}
        <section className="max-w-5xl mx-auto text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-green-400">
            Compressed Air Dryers Ireland
          </h1>

          <p className="text-xl text-gray-200 mt-4">
            Refrigerated, Adsorption &amp; Industrial Air Drying Solutions
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto mt-6 leading-relaxed">
            Moisture in compressed air can cause corrosion, product contamination,
            pneumatic equipment failures and production downtime.
            TechnoCore supplies and sizes industrial compressed air dryers for
            applications across Ireland.
          </p>

          <p className="text-gray-300 max-w-4xl mx-auto mt-4 leading-relaxed">
            Solutions include refrigerated dryers for general industrial use,
            adsorption dryers for low dew point applications, high-pressure systems
            and complete air treatment packages including filtration and condensate
            management.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black px-7 py-3 rounded font-semibold"
          >
            Request Dryer Selection &amp; Quotation
          </Link>

        </section>

        {/* WHY DRY AIR */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400 text-center">
            Why Compressed Air Needs Drying
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed text-center max-w-4xl mx-auto">
            Atmospheric air contains water vapour. During compression and cooling,
            this moisture can condense inside compressed air pipework, receivers,
            filters and production equipment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold text-lg">
                Reduce Corrosion
              </h3>
              <p className="text-gray-300 mt-3">
                Dry compressed air helps protect pipework, valves, cylinders and
                pneumatic components from internal corrosion.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold text-lg">
                Protect Production
              </h3>
              <p className="text-gray-300 mt-3">
                Stable air quality helps reduce contamination and process problems
                in sensitive production environments.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold text-lg">
                Reduce Downtime
              </h3>
              <p className="text-gray-300 mt-3">
                Correct moisture control can reduce failures, maintenance and
                unplanned interruptions.
              </p>
            </div>

          </div>
        </section>

        {/* REFRIGERATED */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Refrigerated Compressed Air Dryers
          </h2>

          <p className="text-gray-300 mt-5 leading-relaxed">
            Refrigerated dryers are widely used for general manufacturing and
            industrial compressed air systems where very low dew points are not
            required.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            They cool the compressed air so that moisture condenses and can be
            separated from the air stream. Typical industrial systems operate
            around a pressure dew point of approximately +3°C, depending on the
            dryer design and operating conditions.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-7">
            Typical applications
          </h3>

          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>General manufacturing</li>
            <li>Pneumatic equipment</li>
            <li>Workshops and engineering facilities</li>
            <li>Packaging</li>
            <li>Automotive production</li>
            <li>General process air</li>
          </ul>

        </section>

        {/* ADSORPTION */}
        <section
          id="desiccant"
          className="max-w-5xl mx-auto mt-16"
        >

          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Adsorption &amp; Desiccant Air Dryers
          </h2>

          <p className="text-gray-300 mt-5 leading-relaxed">
            Adsorption dryers are used where significantly lower moisture levels
            are required than can normally be achieved with a refrigerated dryer.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            These systems use desiccant material to adsorb water vapour from the
            compressed air and are suitable for applications requiring low pressure
            dew points such as −20°C, −40°C or lower, depending on the selected
            dryer and process requirement.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-7">
            Typical applications
          </h3>

          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>Pharmaceutical manufacturing</li>
            <li>Medical device production</li>
            <li>Food and beverage processing</li>
            <li>Electronics manufacturing</li>
            <li>Instrumentation air</li>
            <li>Outdoor or low-temperature compressed air systems</li>
            <li>Critical process applications</li>
          </ul>

        </section>

        {/* HIGH PRESSURE */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            High-Pressure &amp; Specialist Air Dryers
          </h2>

          <p className="text-gray-300 mt-5 leading-relaxed">
            TechnoCore can also provide air drying solutions for applications
            operating above standard compressed air pressures or requiring
            specialised air quality.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            High-pressure dryer selection depends on operating pressure, flow,
            inlet temperature, required dew point and final application.
          </p>

        </section>

        {/* SELECTION */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400 text-center">
            Which Air Dryer Do I Need?
          </h2>

          <p className="text-gray-300 mt-5 text-center max-w-4xl mx-auto">
            Correct dryer selection depends on more than compressor power.
            The actual operating conditions of the compressed air system must
            be considered.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold">
                We normally need:
              </h3>

              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                <li>Compressor flow or required air flow</li>
                <li>Operating pressure</li>
                <li>Maximum inlet air temperature</li>
                <li>Ambient temperature</li>
                <li>Required pressure dew point</li>
                <li>Application or process</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold">
                TechnoCore can help with:
              </h3>

              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                <li>Dryer sizing and selection</li>
                <li>Pre-filtration and final filtration</li>
                <li>Condensate drains</li>
                <li>Oil/water separation</li>
                <li>Pressure drop considerations</li>
                <li>Complete air treatment packages</li>
              </ul>
            </div>

          </div>

        </section>

        {/* COMPLETE SYSTEM */}
        <section className="max-w-5xl mx-auto mt-16 text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Complete Compressed Air Treatment Systems
          </h2>

          <p className="text-gray-300 mt-5 max-w-4xl mx-auto leading-relaxed">
            A dryer is only one part of compressed air quality management.
            TechnoCore can combine dryers with filtration, condensate separation,
            automatic drains and air quality treatment equipment to provide a
            complete engineered solution.
          </p>

          <Link
            href="/compressed-air-treatment-ireland"
            className="inline-block mt-7 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded font-semibold"
          >
            View Compressed Air Treatment Solutions
          </Link>

        </section>

        {/* INDUSTRIES */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400 text-center">
            Industries We Support
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">

            {[
              "Manufacturing",
              "Pharmaceutical",
              "Medical Devices",
              "Food & Beverage",
              "Automotive",
              "Engineering",
              "Packaging",
              "Process Industry",
            ].map((industry) => (
              <div
                key={industry}
                className="border border-gray-700 rounded p-4 text-gray-300"
              >
                {industry}
              </div>
            ))}

          </div>

        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto mt-16">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400 text-center">
            Compressed Air Dryer FAQ
          </h2>

          <div className="space-y-7 mt-8">

            <div>
              <h3 className="text-gray-100 font-semibold text-lg">
                What is the difference between a refrigerated and adsorption air dryer?
              </h3>

              <p className="text-gray-300 mt-2">
                Refrigerated dryers are normally used for general industrial
                compressed air. Adsorption dryers are used when much lower moisture
                levels and lower pressure dew points are required.
              </p>
            </div>

            <div>
              <h3 className="text-gray-100 font-semibold text-lg">
                What pressure dew point do I need?
              </h3>

              <p className="text-gray-300 mt-2">
                The required pressure dew point depends on the process,
                environmental conditions and required compressed air quality.
                General manufacturing and critical process applications can have
                very different requirements.
              </p>
            </div>

            <div>
              <h3 className="text-gray-100 font-semibold text-lg">
                Can TechnoCore size an air dryer for an existing compressor?
              </h3>

              <p className="text-gray-300 mt-2">
                Yes. Provide the compressor flow, working pressure, temperatures
                and application, and we can help select an appropriate dryer and
                associated air treatment equipment.
              </p>
            </div>

            <div>
              <h3 className="text-gray-100 font-semibold text-lg">
                Do I need filters before and after the dryer?
              </h3>

              <p className="text-gray-300 mt-2">
                Filtration requirements depend on the dryer technology and the
                required air quality. Pre-filtration and final filtration are often
                important parts of a complete compressed air treatment system.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto mt-16 mb-6 text-center border border-green-500 rounded-lg p-8">

          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Need Help Selecting a Compressed Air Dryer?
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Send us your compressor flow, pressure and application.
            TechnoCore can help size the dryer and associated filtration
            for your compressed air system.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-7 bg-green-500 hover:bg-green-600 text-black px-7 py-3 rounded font-semibold"
          >
            Request a Quotation
          </Link>

        </section>

      </main>
    </SiteLayout>
  );
}