// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#000000" />
        {/*
          No generic <meta name="description"> here on purpose.
          Each page sets its own unique description via next/head in its
          own <Head>. A description defined here would render before the
          page-level one in the final HTML, and search engines generally
          read the first occurrence — silently overriding every page's
          unique, keyword-targeted description with this one.
        */}
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
                "addressLocality": "Newtownmountkennedy",
                "addressRegion": "Co. Wicklow",
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
