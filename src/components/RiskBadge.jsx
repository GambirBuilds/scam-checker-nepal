import React from "react";
import { ShieldCheck, AlertTriangle, AlertOctagon, ShieldAlert } from "lucide-react";

export function RiskBadge({ level = "LOW RISK", score = null, showScore = false, className = "" }) {
  const norm = (level || "LOW RISK").toUpperCase();

  let colorClasses = "text-sky-700 bg-sky-50 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800";
  let Icon = ShieldCheck;

  if (norm.includes("HIGH")) {
    colorClasses = "text-rose-700 bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800";
    Icon = AlertOctagon;
  } else if (norm.includes("SUSPICIOUS")) {
    colorClasses = "text-amber-700 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
    Icon = ShieldAlert;
  } else if (norm.includes("CAUTION")) {
    colorClasses = "text-yellow-800 bg-yellow-50 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-300 dark:border-yellow-800";
    Icon = AlertTriangle;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border ${colorClasses} ${className}`}>
      <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{norm}</span>
      {showScore && typeof score === "number" && (
        <>
          <span className="opacity-50" aria-hidden="true">·</span>
          <span className="font-tabular">{score}/100</span>
        </>
      )}
    </span>
  );
}
