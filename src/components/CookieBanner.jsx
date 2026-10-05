import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export function CookieBanner() {
  const { cookieConsent, acceptCookies } = useApp();
  const [showSettings, setShowSettings] = useState(false);

  if (cookieConsent) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-md transition-colors"
      role="region"
      aria-label="Privacy and local storage notice"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Privacy & Local Storage Transparency
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Scam Checker Nepal is privacy-first. We do not use third-party advertising cookies or track personal message contents. We only utilize your browser's local storage to preserve your theme preference, language choice, and on-device check history.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => acceptCookies("accepted_all")}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={() => acceptCookies("essential_only")}
            className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer"
          >
            Settings
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
          <p><strong>Essential Local Storage:</strong> Preserves theme (dark/light), selected language, and user-initiated saved reports locally on this device. (Always active)</p>
          <p><strong>Analytics:</strong> Currently inactive by default. No personal data or message content is ever dispatched to external servers.</p>
        </div>
      )}
    </div>
  );
}
