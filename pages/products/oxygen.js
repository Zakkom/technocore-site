import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import ProductPage from "../../components/ProductPage";

export default function OxygenPage() {
  return (
    <SiteLayout>
      <Head>
        <title>PSA Oxygen Generators (90–95%) | TechnoCore Ireland</title>
        <meta
          name="description"
          content="On-site PSA oxygen generation 90–95% purity. Aquaculture, medical clinics, welding & cutting. Plug-and-play, low energy, full support across Ireland."
        />
        <link rel="canonical" href="https://technocore.ie/products/oxygen" />
      </Head>

      <ProductPage
        title="PSA Oxygen Generators (90–95%)"
        intro="Independent and efficient on-site O₂ in compact SKID/BOX packages. Easy to install and maintain with local support."
        col1Title="Applications"
        col1Items={[
          "Aquaculture & fish farms",
          "Medical & dental clinics",
          "Welding & metal cutting",
        ]}
        col2Title="Benefits"
        col2Items={[
          "No cylinder logistics",
          "Stable flow, low energy use",
          "Safe & scalable plug-and-play units",
        ]}
        ctaText="Gain independence from cylinders — Contact Us"
        ctaHref="/contact"
        heroImage="/images/plant-hero.jpg"
        bottomImage="/images/o2-skid.jpg"
      />
    </SiteLayout>
  );
}


