import Head from "next/head";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>About TechnoCore | Industrial Gas Solutions in Ireland</title>
        <meta name="description" content="Learn more about TechnoCore – Ireland’s trusted partner for nitrogen and oxygen generators, compressed air dryers, filtration and turnkey gas systems." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/about" />
      </Head>

      <div className="p-12 text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-6">About TechnoCore</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          TechnoCore is Ireland’s trusted partner of OMEGA AIR, delivering PSA nitrogen and oxygen generators, compressed air dryers, gas filtration systems, chillers, and fully integrated industrial gas treatment solutions. We proudly serve manufacturing, food processing, pharma, electronics and many other industries throughout Dublin, Wicklow, and all of Ireland.
        </p>
      </div>
    </main>
  );
} 