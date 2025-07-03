// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="TechnoCore — Industrial Gas Solutions (Nitrogen, Oxygen, Filtration, Dryers)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TechnoCore",
              "url": "https://technocore.ie",
              "logo": "https://technocore.ie/logo.png",
              "email": "sales@technocore.ie",
              "description":
                "TechnoCore — Industrial Gas Solutions in Ireland. Distributor of nitrogen and oxygen generators, dryers, chillers, and compressed air systems.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dublin",
                "addressRegion": "Leinster",
                "addressCountry": "IE"
              },
              "sameAs": [
                "https://www.linkedin.com/company/technocore",
                "https://www.instagram.com/technocore.ie"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "sales@technocore.ie",
                  "contactType": "sales",
                  "availableLanguage": ["English"]
                }
              ]
            })
          }}
        />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
