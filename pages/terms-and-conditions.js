import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";

// Each top-level numbered section from the Terms & Conditions document.
// Kept as structured data so the page is easy to update without touching markup.
const sections = [
  {
    title: "1. General Information",
    paragraphs: [
      `These Terms and Conditions govern the supply of goods, equipment and services by TechnoCore Limited ("TechnoCore", "we", "us" or "our") to customers ("Customer", "you" or "your").`,
      "TechnoCore Limited is an Irish engineering company specialising in industrial compressed air and gas solutions, including compressed air filtration, refrigerated and adsorption dryers, nitrogen and oxygen generation systems, industrial chillers, compressed air pipework, installation, commissioning and technical support.",
      "These Terms and Conditions apply to quotations, orders, sales, deliveries and services provided by TechnoCore unless otherwise agreed in writing.",
      "Any specific terms expressly agreed in an accepted quotation or written contract shall take precedence over these general Terms and Conditions where there is a conflict.",
      "Nothing in these Terms and Conditions affects the mandatory statutory rights of consumers under applicable Irish law.",
    ],
  },
  {
    title: "2. Quotations and Orders",
    list: [
      "All quotations are valid for 30 calendar days from the date of issue unless otherwise stated.",
      "Prices, technical specifications, product availability and delivery times are subject to confirmation before an order is accepted.",
      "An order becomes binding when TechnoCore confirms acceptance in writing.",
      "Where advance payment is required, TechnoCore is not obliged to place an order with its suppliers until the agreed payment has been received.",
      "Customers must provide accurate information about their existing equipment, operating conditions, required air flow, pressure, intended application and installation requirements.",
      "TechnoCore will exercise reasonable care and skill when selecting equipment based on the information provided.",
      "Changes to an accepted order are governed by Section 6 of these Terms and Conditions.",
    ],
  },
  {
    title: "3. Prices and VAT",
    list: [
      "All prices are quoted in euros (€) unless otherwise specified.",
      "Prices quoted to business customers are exclusive of VAT unless expressly stated otherwise.",
      "For consumers, the total price, including applicable VAT and additional charges, will be communicated before the contract is concluded.",
      "Delivery, installation, pipework, electrical connections and commissioning are charged separately unless expressly included in the quotation.",
      "TechnoCore reserves the right to revise quotations before order acceptance due to changes in supplier prices, transportation costs, currency exchange rates or other relevant circumstances.",
      "Once an order has been accepted, the agreed price will not be changed without the Customer's agreement, except where expressly permitted by the contract or applicable law.",
    ],
  },
  {
    title: "4. Payment Terms",
    list: [
      "Unless otherwise agreed in writing, 100% advance payment is required before equipment is ordered from our suppliers.",
      "Alternative payment arrangements may be agreed individually, including staged payments such as 65% in advance and 35% upon completion of installation, or any other payment schedule confirmed in writing.",
      "TechnoCore reserves the right to postpone procurement, delivery, installation or commissioning until the agreed advance payment has been received.",
      "Any outstanding balance must be paid in accordance with the payment terms specified in the accepted quotation or invoice.",
      "For business customers, TechnoCore reserves the right to charge statutory late-payment interest and recover permitted collection costs on overdue commercial payments in accordance with Irish law.",
      "Payments must be made to the official bank account specified on the TechnoCore invoice.",
    ],
  },
  {
    title: "5. Delivery and Lead Times",
    list: [
      "Estimated delivery times will be provided during the quotation or order confirmation process.",
      "Certain products may be supplied directly from European or international manufacturers and may require additional manufacturing or transportation time.",
      "Delivery estimates are provided in good faith based on information available at the time of quotation.",
      "Unless a specific delivery date has been expressly agreed, delivery times are estimates, subject to applicable statutory rights.",
      "TechnoCore will notify the Customer of significant delivery delays as soon as reasonably practicable.",
      "Delivery charges and arrangements will be communicated before order confirmation.",
      "Business customers should inspect equipment upon delivery and notify TechnoCore promptly of visible damage, shortages or incorrect items.",
      "Risk of loss or damage passes in accordance with the agreed delivery terms and applicable law.",
    ],
  },
  {
    title: "6. Order Changes, Cancellation and Returns",
    subsections: [
      {
        subtitle: "6.1 Business Customers",
        list: [
          "Business customers may request changes to or cancellation of an order within four (4) calendar days from the date of written order confirmation.",
          "All requested changes or cancellations are subject to written confirmation by TechnoCore and may depend on the status of the order with the manufacturer or supplier.",
          "Changes to an order may result in additional costs, revised technical specifications or adjusted delivery times. Any such changes will be communicated to the Customer for approval.",
          "If cancellation is requested within the four-day period, TechnoCore will assess the order status and refund any advance payment, less reasonable, documented and non-recoverable costs already incurred, where permitted by law.",
          "After the four-day period, changes or cancellations may still be considered at TechnoCore's discretion, subject to supplier conditions and any associated costs.",
          "Custom-manufactured equipment, specially configured systems and non-returnable supplier orders may be subject to additional cancellation restrictions or charges disclosed before order acceptance.",
          "Returns of non-defective goods by business customers require prior written authorisation from TechnoCore. Any applicable return or restocking charges will be communicated before the return is agreed.",
        ],
      },
      {
        subtitle: "6.2 Consumer Customers",
        list: [
          "Consumers retain all applicable statutory cancellation, refund and return rights under Irish law.",
          "For eligible distance contracts, consumers generally have 14 days to cancel, starting from receipt of the goods or conclusion of a service contract, as applicable.",
          "Longer cancellation periods may apply to certain off-premises contracts.",
          "Statutory exceptions may apply, including to goods made to the consumer's specifications or clearly personalised.",
          "Where a statutory cancellation right applies, refunds, return costs and any deductions will be handled in accordance with applicable consumer law.",
          "Consumers may communicate a cancellation request by emailing sales@technocore.ie. A model cancellation form is provided at the end of these Terms and Conditions.",
          "Nothing in this section restricts statutory remedies for faulty, incorrectly described or non-conforming goods or services.",
        ],
      },
    ],
  },
  {
    title: "7. Installation and Commissioning",
    list: [
      "Installation and commissioning services are included only where expressly stated in the accepted quotation.",
      "The Customer is responsible for ensuring safe and suitable site conditions, including access, electrical supply, ventilation, drainage and connection points.",
      "Installation costs are based on the agreed scope of work.",
      "Additional pipework, fittings, electrical work, modifications to existing equipment or work outside the original scope will be quoted separately and carried out following Customer approval.",
      "Existing equipment and installations remain the Customer's responsibility except where TechnoCore has expressly agreed to inspect, repair or modify them, or where liability otherwise arises under applicable law.",
      "TechnoCore may postpone or suspend installation if unsafe site conditions are identified.",
      "Any additional work or delays caused by unsuitable site conditions may result in additional charges, subject to prior agreement where required.",
      "Upon completion of installation, the Customer will be given a reasonable opportunity to inspect the work and report any concerns.",
    ],
  },
  {
    title: "8. Equipment Selection and Technical Performance",
    list: [
      "Equipment is selected based on technical information supplied by the Customer and relevant manufacturer specifications.",
      "The Customer must communicate any critical operating requirements before accepting a quotation.",
      "System performance may depend on operating pressure, air flow, inlet temperature, ambient conditions, contamination levels, maintenance and other operating factors.",
      "Where specific air quality, pressure dew point, nitrogen purity, oxygen purity or other technical requirements apply, these must be expressly agreed in writing.",
      "Independent testing, validation, certification or compliance assessment is not included unless expressly stated in the quotation.",
      "Equipment intended for breathing air, medical gases, food production or other safety-critical applications requires appropriate assessment and applicable testing or certification. Suitability for such applications is not implied unless expressly confirmed in writing.",
      "Any performance guarantees must be specifically identified in the accepted quotation or technical agreement.",
    ],
  },
  {
    title: "9. Warranty",
    list: [
      "Equipment supplied by TechnoCore is covered by the applicable manufacturer's commercial warranty, where provided.",
      "Warranty periods, coverage and conditions are determined by the relevant manufacturer and may vary depending on the product.",
      "TechnoCore does not provide an additional independent commercial equipment warranty unless expressly agreed in writing.",
      "TechnoCore will assist customers with warranty enquiries and claims and, where appropriate, coordinate with the manufacturer.",
      "Manufacturer warranty coverage may exclude failures caused by misuse, incorrect operating conditions, inadequate maintenance, unauthorised modifications, improper installation by third parties or normal wear and tear, subject to the applicable warranty terms.",
      "Consumable items, including filter elements and routine maintenance components, are subject to the applicable manufacturer warranty and statutory requirements.",
      "Installation services provided by TechnoCore are separate from the manufacturer's equipment warranty. TechnoCore remains responsible for its own installation and service obligations to the extent required by contract and applicable law.",
      "Manufacturer warranties do not replace or restrict statutory rights or remedies available under applicable Irish law.",
    ],
  },
  {
    title: "10. Ownership of Goods",
    list: [
      "For business customers, ownership of goods supplied by TechnoCore remains with TechnoCore until full payment has been received, to the extent permitted by applicable law.",
      "Where equipment is incorporated into a building, pipework system or other installation, retention of title is subject to the circumstances of installation and applicable law.",
      "The transfer of risk and ownership are separate matters governed by the agreed delivery arrangements and applicable law.",
      "Nothing in this section restricts mandatory consumer rights.",
    ],
  },
  {
    title: "11. Maintenance and Technical Support",
    list: [
      "TechnoCore may provide maintenance, replacement filters, spare parts, servicing and technical support subject to availability and agreement.",
      "Routine maintenance and consumable replacement are not included in the equipment purchase price unless expressly stated.",
      "Customers should follow manufacturer maintenance instructions and recommended service intervals.",
      "Repairs, inspections or technical assistance outside the agreed warranty or service scope may be subject to additional charges communicated before chargeable work begins.",
    ],
  },
  {
    title: "12. Liability",
    list: [
      "TechnoCore will exercise reasonable care and skill in supplying goods and providing services.",
      "For business-to-business transactions, and to the extent permitted by law, TechnoCore shall not be liable for indirect or consequential losses, including loss of production, loss of business, loss of revenue or anticipated profits.",
      "Any additional contractual limitation of liability applicable to a particular project may be specified in a separate written agreement or accepted quotation.",
      "TechnoCore shall not be responsible for failures caused solely by incorrect information supplied by the Customer, misuse of equipment or unauthorised modifications, except where liability otherwise arises under applicable law.",
      "Nothing in these Terms and Conditions excludes or restricts liability for fraud, death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded or restricted.",
      "Nothing in these Terms and Conditions limits or excludes mandatory statutory consumer rights or remedies.",
    ],
  },
  {
    title: "13. Termination and Suspension",
    list: [
      "For business contracts, TechnoCore may suspend further supply, delivery or services if the Customer fails to make an agreed payment or commits a material breach of contract.",
      "Where reasonably appropriate, TechnoCore will notify the Customer and provide an opportunity to remedy the breach.",
      "TechnoCore may terminate a business contract where a material breach remains unresolved, subject to applicable law and any specific written agreement.",
      "Termination does not remove any outstanding payment obligations for goods supplied, services performed or other amounts lawfully due.",
      "Mandatory consumer rights remain unaffected.",
    ],
  },
  {
    title: "14. Force Majeure",
    paragraphs: [
      "TechnoCore shall not be liable for delays or failures caused by circumstances beyond its reasonable control, including natural disasters, major transport disruption, industrial disputes, government restrictions or significant supply chain interruptions.",
      "TechnoCore will take reasonable steps to minimise disruption and notify affected customers.",
      "This provision does not restrict any statutory rights to cancellation, termination or refund.",
    ],
  },
  {
    title: "15. Website Information and Intellectual Property",
    list: [
      "TechnoCore makes reasonable efforts to ensure that website information, product descriptions and technical specifications are accurate and up to date.",
      "Product photographs and illustrations may be representative. Actual product appearance, components or specifications may vary.",
      "Product specifications should be confirmed through the accepted quotation and relevant manufacturer documentation before purchase.",
      "Original website content owned by TechnoCore, including text, images, drawings and graphics, may not be reproduced for commercial purposes without permission.",
      "Manufacturer trademarks, logos and technical materials remain the property of their respective owners.",
      "Links to external websites are provided for convenience. TechnoCore does not control third-party content.",
    ],
  },
  {
    title: "16. Data Protection and Privacy",
    paragraphs: [
      "TechnoCore processes personal data in accordance with applicable Irish and European Union data protection legislation, including the General Data Protection Regulation (GDPR).",
    ],
    note: {
      text: "Information about the collection, use, storage and protection of personal data, including details of your rights, is available in our ",
      linkText: "Privacy Policy",
      linkHref: "/privacy-policy",
      after: ".",
    },
    paragraphsAfterNote: [
      "For questions relating to personal data or privacy, please contact sales@technocore.ie.",
    ],
  },
  {
    title: "17. Changes to Terms and Conditions",
    list: [
      "TechnoCore may update these Terms and Conditions from time to time.",
      "Updated versions will be published on our website with a revised effective date.",
      "Changes will not retrospectively alter existing contracts unless agreed by the parties or permitted by applicable law.",
    ],
  },
  {
    title: "18. Governing Law and Jurisdiction",
    list: [
      "These Terms and Conditions are governed by the laws of Ireland.",
      "For business-to-business contracts, disputes shall be subject to the jurisdiction of the Irish courts unless otherwise agreed in writing.",
      "Nothing in this section restricts mandatory consumer protections or rights concerning the appropriate jurisdiction for consumer disputes.",
    ],
  },
];

const effectiveDate = "11 October 2026";

export default function TermsAndConditionsPage() {
  return (
    <SiteLayout>
      <Head>
        <title>Terms &amp; Conditions | TechnoCore</title>

        <meta
          name="description"
          content="Terms and Conditions for quotations, orders, deliveries, installation, warranty and support provided by TechnoCore Limited in Ireland."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.technocore.ie/terms-and-conditions"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms &amp; Conditions | TechnoCore" />
        <meta
          property="og:description"
          content="Terms and Conditions governing quotations, orders, deliveries, installation, warranty and support provided by TechnoCore Limited."
        />
        <meta
          property="og:url"
          content="https://www.technocore.ie/terms-and-conditions"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms &amp; Conditions | TechnoCore" />
        <meta
          name="twitter:description"
          content="Terms and Conditions governing quotations, orders, deliveries, installation, warranty and support provided by TechnoCore Limited."
        />
      </Head>

      {/* HERO */}
      <section className="bg-black text-white border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            TechnoCore Limited
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-gray-400 mt-4">Last updated: {effectiveDate}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          {sections.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold border-b border-gray-200 pb-3">
                {section.title}
              </h2>

              {section.paragraphs && (
                <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {section.list && (
                <ol className="mt-5 space-y-3 text-gray-700 leading-relaxed list-decimal list-outside pl-5">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}

              {section.subsections &&
                section.subsections.map((sub) => (
                  <div key={sub.subtitle} className="mt-7">
                    <h3 className="text-lg font-semibold">{sub.subtitle}</h3>

                    <ol className="mt-4 space-y-3 text-gray-700 leading-relaxed list-decimal list-outside pl-5">
                      {sub.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  </div>
                ))}

              {section.note && (
                <p className="mt-5 text-gray-700 leading-relaxed">
                  {section.note.text}
                  <Link
                    href={section.note.linkHref}
                    className="text-green-700 underline hover:text-green-800"
                  >
                    {section.note.linkText}
                  </Link>
                  {section.note.after}
                </p>
              )}

              {section.paragraphsAfterNote && (
                <div className="mt-3 space-y-3 text-gray-700 leading-relaxed">
                  {section.paragraphsAfterNote.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* COMPANY INFO */}
          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold border-b border-gray-200 pb-3">
              19. Company Information and Contact Details
            </h2>

            <div className="mt-6 text-gray-700 leading-relaxed space-y-1">
              <p className="font-semibold text-black">TechnoCore Limited</p>
              <p>Registered in Ireland</p>
              <p>Company Registration Number (CRO): 791230</p>
              <p>VAT Registration Number: IE04472768PH</p>
            </div>

            <div className="mt-6 text-gray-700 leading-relaxed">
              <p className="font-semibold text-black">Registered Office</p>
              <p>37 Haven Green</p>
              <p>Altidore Gardens</p>
              <p>Newtownmountkennedy</p>
              <p>Co. Wicklow</p>
              <p>Ireland</p>
            </div>

            <div className="mt-6 text-gray-700 leading-relaxed space-y-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:sales@technocore.ie"
                  className="text-green-700 underline hover:text-green-800"
                >
                  sales@technocore.ie
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+353874386157"
                  className="text-green-700 underline hover:text-green-800"
                >
                  +353 87 438 6157
                </a>
              </p>
              <p>
                Website:{" "}
                <Link
                  href="/"
                  className="text-green-700 underline hover:text-green-800"
                >
                  technocore.ie
                </Link>
              </p>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              For quotations, enquiries, order information, changes,
              cancellations, warranty claims or other matters relating to
              these Terms and Conditions, please contact us using the details
              above.
            </p>
          </div>

          {/* CANCELLATION FORM */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold">
              Model Cancellation Form — Consumers Only
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Complete and return this form only if you are a consumer
              wishing to cancel a contract under an applicable statutory
              cancellation right.
            </p>

            <div className="mt-6 border border-gray-200 bg-[#f7f8f7] p-6 md:p-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-black">To:</span>{" "}
                TechnoCore Limited
              </p>
              <p>
                <span className="font-semibold text-black">Email:</span>{" "}
                sales@technocore.ie
              </p>
              <p>
                <span className="font-semibold text-black">Address:</span> 37
                Haven Green, Altidore Gardens, Newtownmountkennedy, Co.
                Wicklow, Ireland
              </p>

              <p>
                I/We hereby give notice that I/we cancel my/our contract for
                the sale of the following goods or supply of the following
                service:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Goods or services",
                  "Ordered on / received on",
                  "Consumer name",
                  "Consumer address",
                  "Date",
                  "Signature",
                ].map((label) => (
                  <div key={label} className="border-b border-gray-300 pb-2">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 pt-2">
                (Signature required only if this form is submitted on paper.)
              </p>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              You may also exercise an applicable cancellation right by
              sending a clear statement by email or post. Use of this form is
              optional.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}