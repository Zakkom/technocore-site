// pages/contact.js
import Head from "next/head";
import SiteLayout from "../components/SiteLayout";

export default function Contact() {
  return (
    <SiteLayout>
      <Head>
        <title>Contact TechnoCore | Industrial Gas Systems Ireland</title>
        <meta
          name="description"
          content="Contact TechnoCore to discuss nitrogen and oxygen generators, compressed air dryers, chillers, and industrial gas treatment systems in Ireland."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/contact" />
      </Head>

      {/* HERO */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/top-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400">
            Contact TechnoCore
          </h1>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            Get in touch with us to discuss your nitrogen &amp; oxygen generation,
            compressed air dryers, filtration, chillers, or turnkey gas systems.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="p-12 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 mb-2">
            Email:{" "}
            <a href="mailto:sales@technocore.ie" className="underline">
              sales@technocore.ie
            </a>
          </p>
          <p className="text-gray-400 mb-2">
  Phone:{" "}
  <a href="tel:+353874386157" className="underline hover:text-green-400">
    +353 87 438 6157
  </a>
</p>
          <p className="text-gray-400 mb-6">
            Location: Dublin / Wicklow, Ireland
          </p>

          {/* CONTACT FORM */}
          <form
            action="https://formsubmit.co/sales@technocore.ie"
            method="POST"
            className="mt-8 max-w-xl mx-auto text-left"
          >
            {/* hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://technocore.ie/thanks"
            />
            <input type="text" name="_honey" style={{ display: "none" }} readOnly />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="interest"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                >
                  <option>Nitrogen Generator</option>
                  <option>Oxygen Generator</option>
                  <option>Refrigeration Air Dryer</option>
                  <option>Adsorption (Desiccant) Dryer</option>
                  <option>Filtration System</option>
                  <option>Paint Booth Air Preparation</option>
                  <option>Chiller / Turnkey Package</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

