import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldAlert, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { scamPatterns } from "../data/scamPatterns.js";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function Patterns() {
  const { language } = useApp();
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState("otp-request");

  const filtered = scamPatterns.filter((pat) => {
    const q = search.toLowerCase();
    return (
      pat.name.toLowerCase().includes(q) ||
      pat.nepaliName.includes(q) ||
      pat.category.toLowerCase().includes(q) ||
      pat.keywords.some(k => k.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Scam Pattern Library" 
        description="Searchable dictionary of cybercrime patterns and manipulation tactics in Nepal: OTP demands, advance fees, urgent KYC threats, and lucky draws." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShieldAlert className="w-4 h-4" />
          <span>Linguistic & Psychological Indicators</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam Pattern Library
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Fraudsters use predictable formulas. Search common deceptive phrases and patterns to understand why they are red flags and how to protect yourself.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-lg">
        <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search patterns (e.g. OTP, fee, lottery, telegram, parcel)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-xs"
        />
      </div>

      {/* Pattern List Accordions */}
      <div className="space-y-4">
        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs transition-colors"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-400">{item.nepaliName}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h3>
                </div>

                <div className="text-slate-400 p-1">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">What It Means</h4>
                    <p>{item.whatItMeans}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-200">
                    <h4 className="font-bold mb-1">Why It Is Suspicious</h4>
                    <p>{item.whyItIsSuspicious}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Example Message</h4>
                    <p className="font-mono text-xs italic text-slate-600 dark:text-slate-400">{item.example}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1.5">Specific Warning Signs</h4>
                    <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-300">
                      {item.warningSigns.map((w, idx) => (
                        <li key={idx}>{w}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1.5">Protection Tips</h4>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {item.protectionTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <Link
                      to="/check"
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Test this pattern in Checker</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
