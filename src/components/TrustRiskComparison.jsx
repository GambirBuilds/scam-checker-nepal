import React from "react";
import { Scale, CheckCircle2, AlertTriangle, Search, ShieldCheck } from "lucide-react";

export function TrustRiskComparison({ 
  claims = [], 
  indicators = [], 
  whatCanBeVerified = [],
  score = 0 
}) {
  // Fallbacks if not explicitly provided
  const derivedClaims = claims.length > 0 ? claims : [
    "Claims of mandatory account verification or KYC expiration",
    "Demands immediate action to avoid penalty or loss",
    "Promises exclusive reward, employment opportunity, or refund"
  ];

  const derivedWarnings = indicators.length > 0 
    ? indicators.map(i => i.title || i.category)
    : [
        "Artificial urgency and tight deadlines",
        "Direct requests for credentials or payments",
        "Unverified sender communication channels"
      ];

  const derivedVerificationSteps = whatCanBeVerified.length > 0 ? whatCanBeVerified : [
    "Sender telephone number against official company directory",
    "Domain name spelling against verified national registry (.com.np or official .com)",
    "Status of your actual account by logging into the official app independently"
  ];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
          <Scale className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
            Trust vs. Risk Analysis
          </h3>
          <p className="text-xs text-slate-500">
            Evaluating subjective claims against objective warning indicators and verifiable proof points.
          </p>
        </div>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Column 1: Claims Made */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 space-y-2.5">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>CLAIMS MADE</span>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 leading-relaxed">
            {derivedClaims.slice(0, 4).map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Warning Indicators */}
        <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20 space-y-2.5">
          <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>WARNING INDICATORS</span>
          </div>
          <ul className="space-y-2 text-rose-900/80 dark:text-rose-300/80 leading-relaxed">
            {derivedWarnings.slice(0, 4).map((w, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-500 mt-0.5">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: What Can Be Verified */}
        <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-900/40 bg-sky-50/50 dark:bg-sky-950/20 space-y-2.5">
          <div className="flex items-center gap-1.5 font-bold text-sky-800 dark:text-sky-300">
            <Search className="w-3.5 h-3.5 text-sky-600" />
            <span>WHAT CAN BE VERIFIED</span>
          </div>
          <ul className="space-y-2 text-sky-900/80 dark:text-sky-300/80 leading-relaxed">
            {derivedVerificationSteps.slice(0, 4).map((v, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3 h-3 text-sky-600 shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Balanced Conclusion Box */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
        <span className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider text-[11px] block text-sky-700 dark:text-sky-300">
          Conclusion
        </span>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          {score >= 40 
            ? "This content contains multiple warning signs. These indicators do not prove fraud, but they are strong reasons to verify independently before taking action."
            : "While fewer high-risk indicators were detected, remember that absence of overt flags does not prove legitimacy. Maintain standard independent verification."}
        </p>
      </div>
    </div>
  );
}
