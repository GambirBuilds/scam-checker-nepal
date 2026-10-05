import React from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";

export function PrivacyWarning({ className = "", compact = false }) {
  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 ${className}`}>
        <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
        <span>Private & Local: Evaluated inside your browser. No personal messages are sent to external servers.</span>
      </div>
    );
  }

  return (
    <div className={`p-3.5 sm:p-4 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/60 dark:bg-sky-950/30 text-xs space-y-1.5 ${className}`}>
      <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200">
        <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
        <span>Privacy-First Architecture & Data Safety Notice</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
        <strong>Never share sensitive credentials:</strong> Do not enter or upload passwords, ATM PINs, One-Time Passwords (OTPs), CVV numbers, or unredacted copies of citizenship certificates. All text analysis runs locally on your browser.
      </p>
    </div>
  );
}
