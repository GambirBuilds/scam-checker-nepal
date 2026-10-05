import React, { useState } from "react";
import { Hash, Copy, Check, ShieldCheck, Download } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export function CaseIdCard({ 
  caseId = "SCN-2026-A82F4", 
  date = new Date().toISOString(),
  type = "Message Analysis",
  riskLevel = "NEEDS CAUTION",
  score = 35,
  fingerprint = ""
}) {
  const { showToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(caseId);
    setCopied(true);
    showToast("Case ID copied to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
            <Hash className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Local Investigation Reference
            </span>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 font-mono">
              {caseId}
            </h4>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-200 font-semibold flex items-center gap-1.5 self-start sm:self-auto cursor-pointer transition-colors shadow-2xs"
          aria-label="Copy local Case ID"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          <span>{copied ? "Copied" : "Copy Case ID"}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
        <div>
          <span className="text-slate-400 block">Date Created</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block">Type</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300 capitalize">
            {type}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block">Risk Evaluation</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {riskLevel} ({score}/100)
          </span>
        </div>
        <div>
          <span className="text-slate-400 block">Storage</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Local Device Only</span>
          </span>
        </div>
      </div>

      {fingerprint && (
        <div className="pt-1 text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-800">
          <span className="font-semibold text-slate-600 dark:text-slate-400">Fingerprint: </span>
          <span className="font-mono text-slate-700 dark:text-slate-300">{fingerprint}</span>
        </div>
      )}

      <p className="text-[11px] text-slate-400 italic">
        Privacy Note: This case record contains only metadata. Passwords, OTPs, PINs, and full private messages are NEVER saved.
      </p>
    </div>
  );
}
