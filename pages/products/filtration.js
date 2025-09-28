import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import ProductPage from "../../components/ProductPage";

export default function FiltrationPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Industrial Air & Gas Filtration | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Air & gas filtration systems ISO 8573-1: coalescing, particulate, activated-carbon, sterile. Improve air quality, protect equipment, meet compliance."
        />
        <link rel="canonical" href="https://technocore.ie/products/filtration" />
      </Head>

      <ProductPage
        title="Industrial Air & Gas Filtration"
        intro="TechnoCore supplies high-performance filtration systems ISO 8573-1 compliant: coalescing, particulate, activated-carbon and sterile filters."
        col1Title="We provide"
        col1Items={[
          "Oil/water removal (coalescing filters)",
          "Dust protection (particulate filters)",
          "Oil vapour removal (activated-carbon)",
          "Sterile filters for pharma & food-grade",
        ]}
        col2Title="Benefits"
        col2Items={[
          "Protect downstream equipment",
          "Improve product quality",
          "Meet ISO 8573-1 standards",
        ]}
        ctaText="Guarantee clean air — Request Solution"
        ctaHref="/contact"
        heroImage="/images/plant-hero.jpg"
        bottomImage="/images/filtration-units.jpg"
      />
    </SiteLayout>
  );
}
