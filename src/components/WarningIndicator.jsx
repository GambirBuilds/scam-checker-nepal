import React from "react";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

export function WarningIndicator({ indicator }) {
  if (!indicator) return null;

  const isHigh = indicator.severity === "High";
  const isMed = indicator.severity === "Medium";

  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          {isHigh ? (
            <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
          ) : isMed ? (
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
          ) : (
            <Info className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
          )}
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {indicator.title}
          </h4>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
          isHigh 
            ? "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
            : isMed
            ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
            : "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300"
        }`}>
          {indicator.severity} Severity
        </span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">
        Category: {indicator.category}
      </p>

      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
        {indicator.description}
      </p>

      {indicator.matchedPhrases && indicator.matchedPhrases.length > 0 && (
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-500 dark:text-slate-400">Trigger phrase:</span>
          {indicator.matchedPhrases.map((phrase, i) => (
            <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px]">
              "{phrase}"
            </code>
          ))}
        </div>
      )}
    </div>
  );
}
