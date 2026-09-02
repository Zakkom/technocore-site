import Script from "next/script";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "technocore_cookie_consent_v1";

export default function CookieConsent() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setConsent(JSON.parse(saved));
      } catch {
        setConsent(null);
      }
    }

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("technocore:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("technocore:open-cookie-settings", openSettings);
    };
  }, []);

  const saveConsent = (analytics, advertising) => {
    const value = {
      necessary: true,
      analytics,
      advertising,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(value);
    setSettingsOpen(false);
  };

  const analyticsAllowed = consent?.analytics === true;
  const advertisingAllowed = consent?.advertising === true;

  return (
    <>
      {analyticsAllowed && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-NGRNF7SK90"
            strategy="afterInteractive"
          />
          <Script id="technocore-ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NGRNF7SK90', { send_page_view: true });
          `}</Script>
        </>
      )}

      {advertisingAllowed && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17428189544"
            strategy="afterInteractive"
          />
          <Script id="technocore-ads-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17428189544');
          `}</Script>
        </>
      )}

      {!consent && (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-4">
          <div className="max-w-5xl mx-auto bg-gray-900 border border-green-500 rounded-xl shadow-2xl p-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-white text-lg font-semibold">Cookie preferences</h2>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  TechnoCore uses necessary technologies to operate the website. With your
                  permission, we also use analytics and advertising / conversion
                  measurement technologies. You can accept all, reject optional cookies,
                  or choose your preferences.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  See our{" "}
                  <Link href="/privacy-policy" className="text-green-400 underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent(false, false)}
                  className="border border-gray-500 text-gray-200 px-4 py-2 rounded hover:bg-gray-800"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500/10"
                >
                  Manage
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent(true, true)}
                  className="bg-green-500 text-black font-semibold px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-gray-900 border border-green-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Cookie Settings</h2>

            <div className="mt-6 space-y-5">
              <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">Necessary</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Required for core website functionality and preference storage.
                    </p>
                  </div>
                  <span className="text-green-400 text-sm">Always on</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white">Choose optional cookies</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Use the buttons below to select a privacy level.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-6">
              <button
                type="button"
                onClick={() => saveConsent(false, false)}
                className="border border-gray-500 text-gray-200 px-4 py-3 rounded hover:bg-gray-800"
              >
                Necessary only
              </button>
              <button
                type="button"
                onClick={() => saveConsent(true, false)}
                className="border border-sky-500 text-sky-400 px-4 py-3 rounded hover:bg-sky-500/10"
              >
                Necessary + Analytics
              </button>
              <button
                type="button"
                onClick={() => saveConsent(true, true)}
                className="bg-green-500 text-black font-semibold px-4 py-3 rounded hover:bg-green-600"
              >
                Allow Analytics + Advertising
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSettingsOpen(false)}
              className="w-full mt-4 text-gray-400 hover:text-white text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
