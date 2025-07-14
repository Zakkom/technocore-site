// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>About Us | TechnoCore</title>
        <meta name="description" content="Learn more about TechnoCore – your trusted supplier of PSA systems, air dryers, and filtration solutions in Ireland." />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">About TechnoCore</h1>
        <p className="text-lg leading-relaxed">
          TechnoCore is the official distributor of OMEGA AIR in Ireland. We provide a full range of PSA nitrogen and oxygen generators, industrial air dryers, filtration systems,
          and turnkey compressed air & gas solutions. Our expertise ensures reliability, performance, and service support tailored to industrial demands across Ireland.
        </p>
      </main>
    </div>
  );
}