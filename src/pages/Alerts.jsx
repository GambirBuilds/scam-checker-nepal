import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ShieldAlert, ArrowRight, Info } from "lucide-react";
import { scamAlerts } from "../data/alerts.js";
import { SEOHead } from "../components/SEOHead.jsx";

export function Alerts() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Scam Alert Center" 
        description="Educational scam advisories and warning patterns observed in Nepal: Telegram tasks, accidental wallet refund scams, and postal phishing." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <AlertTriangle className="w-4 h-4" />
          <span>Threat Pattern Advisories</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam Alert Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Educational threat bulletins detailing recurring modus operandi observed across Nepal. Designed to help communities spot emerging fraudulent behaviors before they cause harm.
        </p>
      </div>

      {/* Mandatory Demo / Educational Example Notice */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-200 flex items-start gap-3 text-xs leading-relaxed">
        <Info className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
        <div>
          <strong className="block font-bold">EDUCATIONAL TRANSPARENCY NOTICE:</strong>
          These advisories serve as structured educational models illustrating active fraud techniques in Nepal. They synthesize real-world modus operandi without fabricating specific private victim claims.
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-5">
        {scamAlerts.map((alert) => (
          <div
            key={alert.id}
            className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  {alert.category}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-500 font-medium">{alert.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  DEMO / EDUCATIONAL EXAMPLE
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                  alert.severity === "Critical" 
                    ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                    : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                }`}>
                  {alert.severity} Severity
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {alert.title}
              </h2>
            </div>

            {/* Warning Signs List */}
            <div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
                Observed Indicators:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                {alert.warningSigns.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>

            {/* Recommendation */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                Recommended Action:
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {alert.recommendation}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">
                Status: {alert.verificationStatus}
              </span>
              <Link
                to="/check"
                className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Check suspicious message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
