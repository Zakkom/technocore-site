import Head from "next/head";
import TechnoCoreLanding from "../components/TechnoCoreLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechnoCore – Industrial Gas & Air Solutions</title>
        <meta name="description" content="TechnoCore supplies nitrogen & oxygen generators, air dryers, chillers, and gas treatment systems for industrial use in Ireland. Official Omega Air distributor." />
        <meta name="keywords" content="TechnoCore, Omega Air, Nitrogen Generators, Oxygen Generators, Air Dryers, Gas Solutions, Industrial Filtration, Ireland" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.technocore.ie/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TechnoCore – Industrial Gas & Air Solutions" />
        <meta property="og:description" content="Distributor of nitrogen/oxygen generators, dryers, and filtration systems across Ireland. Tailored solutions for industry." />
        <meta property="og:url" content="https://www.technocore.ie/" />
        <meta property="og:image" content="https://www.technocore.ie/images/preview.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechnoCore – Industrial Gas & Air Solutions" />
        <meta name="twitter:description" content="Gas and air systems built for industry. Nitrogen, oxygen, filtration, drying – from Omega Air." />
        <meta name="twitter:image" content="https://www.technocore.ie/images/preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TechnoCoreLanding />
    </>
  );
}
