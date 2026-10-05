import React from "react";
import { Dna, ArrowRight, Info, ShieldAlert } from "lucide-react";

export function ScamFingerprint({ fingerprint }) {
  if (!fingerprint || !fingerprint.indicators || fingerprint.indicators.length === 0) {
    return (
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-500">
        <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300 mb-1">
          <Dna className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Scam DNA / Fingerprint</span>
        </div>
        <p>No high-probability tactical fingerprint chain was detected in this text sample.</p>
      </div>
    );
  }

  const { indicators, fingerprintSequence, whyItMatters } = fingerprint;

  return (
    <div className="rounded-2xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/50 dark:bg-sky-950/20 p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-200/70 dark:border-sky-900/50 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Dna className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              Scam DNA (Tactical Fingerprint)
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Identifies the combination and sequence of social-engineering tactics.
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300 self-start sm:self-auto border border-sky-300/60 dark:border-sky-800">
          {indicators.length} Tactic{indicators.length > 1 ? "s" : ""} Linked
        </span>
      </div>

      {/* Visual Sequence Chain */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
          Pattern Sequence
        </span>
        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs">
          {indicators.map((ind, idx) => (
            <React.Fragment key={ind.id}>
              <span className="px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {ind.label}
              </span>
              {idx < indicators.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 dark:text-sky-500 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Why This Matters Explanation */}
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Why this combination matters:</span>
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
          {whyItMatters}
        </p>
      </div>

      {/* Non-Proof Educational Disclaimer */}
      <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
        <p>
          <strong>Educational note:</strong> This fingerprint highlights detected communication patterns. It does not provide legal proof that an author or organization is fraudulent. Always independently verify through official channels.
        </p>
      </div>
    </div>
  );
}
