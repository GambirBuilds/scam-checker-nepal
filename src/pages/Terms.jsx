import React from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Terms & Conditions" 
        description="Terms of service, educational usage scope, and liability limitations for Scam Checker Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShieldCheck className="w-4 h-4" />
          <span>User Agreement</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Terms & Conditions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Effective Date: October 2026
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            1. Educational Purpose & Nature of Assessment
          </h2>
          <p>
            Scam Checker Nepal is an open digital education and preliminary risk-assessment tool. The platform uses rule-based heuristics to highlight common patterns observed in cyber fraud. It is intended solely to encourage critical thinking ("Think Before You Trust").
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            2. No Guarantee of Detection or Legitimacy
          </h2>
          <p>
            A "LOW RISK" score does NOT guarantee that a message, website, or entity is authentic or safe. Conversely, a "HIGH RISK" score is an automated assessment based on warning heuristics and does not constitute a formal legal conviction. Cyber fraud changes dynamically, and no automated tool can detect 100% of malicious techniques.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            3. User Responsibility & Independent Verification
          </h2>
          <p>
            Users are solely responsible for their own financial decisions, transaction authorizations, and credential hygiene. You must independently verify any critical financial or contractual request through officially published directories, bank customer service hotlines, or legal authorities.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable laws of Nepal, Scam Checker Nepal, its maintainers, and contributors shall not be held liable for any direct, indirect, incidental, or financial loss resulting from reliance on the tool's scoring, recommendations, or inability to detect a specific fraud attempt.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            5. Formal Reporting Notice
          </h2>
          <p>
            Scam Checker Nepal is NOT a government law enforcement dispatch system. If you have been the victim of financial theft or extortion, you must file a formal complaint with the Nepal Police Cyber Bureau or your local district police station.
          </p>
        </div>
      </div>
    </div>
  );
}
