import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Contact TechnoCore | Industrial Gas Systems Ireland</title>
        <meta
          name="description"
          content="Contact TechnoCore to discuss nitrogen and oxygen generators, compressed air dryers, chillers, and industrial gas treatment systems in Ireland."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/contact" />
      </Head>

      <div className="p-12 text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-6">Contact TechnoCore</h1>
        <p className="text-gray-400 mb-2">
          Email:{" "}
          <a href="mailto:sales@technocore.ie" className="underline">
            sales@technocore.ie
          </a>
        </p>
        <p className="text-gray-400 mb-2">Phone: +353 85 231 44 30</p>
        <p className="text-gray-400 mb-6">Location: Dublin / Wicklow, Ireland</p>

        <form
          action="https://formsubmit.co/sales@technocore.ie"
          method="POST"
          className="mt-4 max-w-xl mx-auto text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://technocore.ie/thanks" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
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
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500"
            ></textarea>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition"
            >
              ← Back to Home
            </Link>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}