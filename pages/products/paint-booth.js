import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import ProductPage from "../../components/ProductPage";

export default function PaintBoothPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Paint Booth Air Preparation | TechnoCore Ireland</title>
        <meta
          name="description"
          content="Complete air preparation for paint booths: compressors, dryers, filters, air lines. Clean, dry air for defect-free painting. Turnkey systems for automotive & industrial."
        />
        <link rel="canonical" href="https://technocore.ie/products/paint-booth" />
      </Head>

      <ProductPage
        title="Paint Booth Air Preparation"
        intro="For automotive and industrial paint booths, TechnoCore delivers turnkey air preparation systems: compressors, air dryers, filtration and piping."
        col1Title="Applications"
        col1Items={[
          "Automotive paint shops",
          "Industrial coating facilities",
          "Furniture & metal finishing",
        ]}
        col2Title="Benefits"
        col2Items={[
          "Clean, dry air = flawless paint finish",
          "Custom-designed systems",
          "End-to-end installation & support",
        ]}
        ctaText="Make painting flawless — Request Quote"
        ctaHref="/contact"
        heroImage="/images/plant-hero.jpg"
        bottomImage="/images/paint-booth.jpg"
      />
    </SiteLayout>
  );
}

