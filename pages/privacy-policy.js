import Head from "next/head";
import Link from "next/link";
import React from "react";
import CookieConsent from "../components/CookieConsent";

export default function PrivacyPolicy() {
  return (
    <main>
      <Head>
        <title>Privacy Policy | TechnoCore Limited</title>
        <meta
          name="description"
          content="TechnoCore Limited privacy notice explaining how personal data is collected and processed through technocore.ie."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technocore.ie/privacy-policy" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <nav className="border-b border-green-500 bg-black">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-green-400">
              TechnoCore
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400">
              Contact
            </Link>
          </div>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-3">Last updated: 2 September 2026</p>

          <div className="mt-10 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-green-400">1. Who we are</h2>
              <p className="mt-3">
                TechnoCore Limited is an Irish engineering company providing industrial
                air and gas solutions. For the purposes of applicable data protection law,
                TechnoCore Limited is the controller of personal data collected directly
                through this website where TechnoCore determines the purposes and means
                of processing.
              </p>
              <p className="mt-3">
                Contact:{" "}
                <a href="mailto:sales@technocore.ie" className="text-green-400 underline">
                  sales@technocore.ie
                </a>{" "}
                · +353 87 438 6157
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                2. Personal data we may collect
              </h2>
              <p className="mt-3">
                When you contact TechnoCore through an enquiry form, email or telephone,
                we may receive information such as your name, company, email address,
                telephone number, enquiry details and technical or commercial information
                that you choose to provide.
              </p>
              <p className="mt-3">
                The website may also process technical information such as browser,
                device and website-usage data where permitted and, for non-essential
                analytics or advertising technologies, after the required cookie consent
                has been provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                3. Why we process personal data
              </h2>
              <p className="mt-3">We may process personal data in order to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>respond to technical and commercial enquiries;</li>
                <li>prepare quotations, proposals or equipment selections;</li>
                <li>communicate about requested products, projects or services;</li>
                <li>take steps requested before entering into a contract;</li>
                <li>perform and administer contracts with customers or suppliers;</li>
                <li>maintain appropriate business and transaction records;</li>
                <li>protect the security and integrity of our website and business systems;</li>
                <li>measure website performance or advertising effectiveness where valid consent is required and obtained.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                4. Legal bases
              </h2>
              <p className="mt-3">
                Depending on the circumstances, processing may be necessary to take steps
                at your request before entering into a contract, to perform a contract, to
                comply with a legal obligation, for a legitimate interest pursued by
                TechnoCore where that interest is not overridden by your rights, or on the
                basis of your consent where consent is required.
              </p>
              <p className="mt-3">
                Non-essential analytics and advertising cookies or similar tracking
                technologies are not activated unless the required consent has been given.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                5. Service providers and recipients
              </h2>
              <p className="mt-3">
                TechnoCore may use service providers for website hosting, communications,
                enquiry delivery, analytics or other business-support functions. Personal
                data is shared only where necessary for the relevant purpose and subject
                to applicable data-protection requirements.
              </p>
              <p className="mt-3">
                Website enquiry forms currently use FormSubmit to transmit submitted
                enquiry information to TechnoCore. Google services may be used for
                analytics and advertising measurement where the user has provided the
                required cookie consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                6. International data transfers
              </h2>
              <p className="mt-3">
                Some technology providers may process data outside Ireland or the European
                Economic Area. Where this occurs, TechnoCore will rely on an appropriate
                transfer mechanism or other safeguard required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                7. Data retention
              </h2>
              <p className="mt-3">
                Personal data is retained only for as long as reasonably necessary for the
                purpose for which it was collected, including responding to enquiries,
                managing commercial relationships, meeting legal or accounting
                obligations, and resolving disputes. Retention periods may vary depending
                on the nature of the information and relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                8. Your data protection rights
              </h2>
              <p className="mt-3">
                Subject to applicable law, you may have rights including access to your
                personal data, rectification, erasure, restriction, objection, data
                portability and withdrawal of consent where processing is based on
                consent.
              </p>
              <p className="mt-3">
                To exercise a data-protection right, contact{" "}
                <a href="mailto:sales@technocore.ie" className="text-green-400 underline">
                  sales@technocore.ie
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                9. Cookies and tracking technologies
              </h2>
              <p className="mt-3">
                Strictly necessary technologies may operate where required for the website
                or service requested by the user. Analytics, advertising and conversion
                tracking are treated as optional and should only operate after the
                required consent is provided.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("technocore:open-cookie-settings"));
                  }
                }}
                className="mt-4 border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500/10"
              >
                Open Cookie Settings
              </button>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                10. Complaints
              </h2>
              <p className="mt-3">
                If you have concerns about how TechnoCore processes personal data, please
                contact us first so that we can address the issue. You also have the right
                to lodge a complaint with the Irish Data Protection Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400">
                11. Changes to this notice
              </h2>
              <p className="mt-3">
                This notice may be updated from time to time to reflect changes to our
                website, services, technology providers or legal requirements. The current
                version will be published on this page.
              </p>
            </section>
          </div>
        </article>

        <footer className="border-t border-green-500 py-7 text-center text-gray-400 text-sm">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <span className="mx-3">·</span>
          <Link href="/contact" className="hover:text-green-400">Contact</Link>
          <p className="mt-3">© {new Date().getFullYear()} TechnoCore Limited.</p>
        </footer>

        <CookieConsent />
      </div>
    </main>
  );
}
