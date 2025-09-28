import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import ProductPage from "../../components/ProductPage";

export default function AirDryersPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Industrial Air Dryers | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Refrigeration and adsorption air dryers for industrial compressed air. PDP +3°C to –40°C. Energy-saving, zero-loss drains, Siemens SIMATIC controls."
        />
        <link rel="canonical" href="https://technocore.ie/products/air-dryers" />
      </Head>

      <ProductPage
        title="Refrigeration & Adsorption Air Dryers"
        intro="Protect your equipment and product quality. TechnoCore supplies refrigeration dryers (PDP +3 °C) and adsorption dryers (PDP –40 °C) for automotive, pharma, food and manufacturing."
        col1Title="Features"
        col1Items={[
          "Energy-saving controls",
          "Zero-loss condensate drains",
          "High flow rates up to 13,200 m³/h",
        ]}
        col2Title="Benefits"
        col2Items={[
          "Less corrosion & downtime",
          "Consistent air quality",
          "Lower maintenance costs",
        ]}
        ctaText="Protect your equipment — Get Consultation"
        ctaHref="/contact"
        heroImage="/images/plant-hero.jpg"
        bottomImage="/images/rdp-dryer.jpg"
      />
    </SiteLayout>
  );
}


