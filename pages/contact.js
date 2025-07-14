// pages/contact.js
import Head from 'next/head';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Contact Us | TechnoCore</title>
        <meta name="description" content="Contact TechnoCore – supplier of nitrogen & oxygen generators and air & gas treatment systems in Ireland." />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Reach out to us for any inquiries regarding products, quotations, or service support.
        </p>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:sales@technocore.ie" className="text-green-400 hover:underline">sales@technocore.ie</a></li>
          <li>Location: Dublin South, Ireland</li>
          <li>Business Hours: Mon–Fri, 9:00–18:00</li>
        </ul>
      </main>
    </div>
  );
}
