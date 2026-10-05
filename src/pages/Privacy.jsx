import React from "react";
import { ShieldAlert, Lock, Database, Trash2, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Privacy Policy" 
        description="Learn how Scam Checker Nepal protects your privacy with local-first, zero-retention analysis." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Lock className="w-4 h-4" />
          <span>Transparent Data Governance</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last Updated: October 2026
        </p>
      </div>

      {/* Prominent Mandatory Warning Box */}
      <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200 space-y-2">
        <div className="flex items-center gap-2 text-sm font-bold text-rose-700 dark:text-rose-400">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span>PROMINENT SECURITY NOTICE</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed font-semibold">
          Never paste passwords, OTPs, PINs, CVVs, recovery codes, or complete banking credentials into Scam Checker Nepal.
        </p>
        <p className="text-xs text-rose-900/80 dark:text-rose-300 leading-relaxed">
          While all evaluation takes place locally on your client device, entering real security secrets into any browser field poses inherent personal security risks.
        </p>
      </div>

      {/* Privacy Commitments */}
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>1. What Data Is Processed</span>
          </h2>
          <p>
            When you paste text, enter a URL, or evaluate a suspicious job offer, the content is parsed strictly within your browser's local JavaScript runtime. No text snippets, phone numbers, or email addresses are transmitted across the network to our servers.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Database className="w-4 h-4 text-sky-600" />
            <span>2. What Is Stored in Browser LocalStorage</span>
          </h2>
          <p>
            We use your browser's standard <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono text-xs">localStorage</code> to persist:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
            <li>Your theme preference (Light, Dark, System).</li>
            <li>Your preferred language (English or Nepali).</li>
            <li>Assessment metadata (Date, category, score, indicator count) ONLY when you explicitly click "Save Result".</li>
            <li>Incident logs in the Evidence Organizer saved solely on this physical device.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-sky-600" />
            <span>3. Screenshot & Image Handling</span>
          </h2>
          <p>
            When you select an image in the Screenshot Checker or QR Checker, the file is read using the standard HTML5 FileReader API directly in your browser memory. We do not store or transmit your photos.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-sky-600" />
            <span>4. Deletion Behavior</span>
          </h2>
          <p>
            You have full control over your local data. You can delete individual check entries or click "Clear All" in the History section at any time to purge all stored metadata immediately. Clearing your browser cache will also permanently remove all locally saved data.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            5. Analytics & Future AI Processing
          </h2>
          <p>
            Analytics is disabled by default. If privacy-preserving analytics is connected in the future, it will track only high-level aggregate metrics (e.g. number of checks performed by category), never the content of queries, personal names, or financial digits.
          </p>
        </div>
      </div>
    </div>
  );
}
