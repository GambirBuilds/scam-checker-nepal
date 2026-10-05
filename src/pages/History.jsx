import React from "react";
import { Link } from "react-router-dom";
import { Clock, Trash2, Download, ShieldCheck, ArrowRight, AlertCircle, Inbox } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { exportLocalHistory } from "../utils/storage.js";
import { RiskBadge } from "../components/RiskBadge.jsx";
import { SEOHead } from "../components/SEOHead.jsx";

export function History() {
  const { history, deleteHistoryItem, clearHistory, showToast } = useApp();

  const handleExport = () => {
    if (history.length === 0) {
      showToast("No history entries to export.", "info");
      return;
    }
    exportLocalHistory();
    showToast("History exported as JSON file.", "success");
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear your local assessment history from this device?")) {
      clearHistory();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Local Check History" 
        description="Inspect on-device check history, delete records, or export safety reports." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Clock className="w-4 h-4" />
          <span>Local Device Privacy</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Personal Check History
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Your history is stored locally on this device.
            </p>
          </div>

          {history.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleExport}
                className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
              <button
                onClick={handleClearAll}
                className="px-3.5 py-2 text-xs font-medium rounded-lg border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Guarantee Banner */}
      <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 shrink-0 text-sky-600 dark:text-sky-400 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Privacy Guarantee:</strong> We only store safe assessment metadata (date, content type, risk score, and warning counts). We NEVER store the full suspicious message text or passwords on disk.
        </p>
      </div>

      {/* History Items List */}
      {history.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Inbox className="w-6 h-6" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            No Saved History
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            When you run assessments and click "Save Result", safe metadata records will appear here.
          </p>
          <div className="pt-2">
            <Link
              to="/check"
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-block"
            >
              Go to Checker
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-slate-500 font-tabular">
                    {new Date(item.date).toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 truncate max-w-md">
                  {item.summarySnippet}
                </p>
                <div className="text-[11px] text-slate-400">
                  {item.indicatorCount} warning indicator{item.indicatorCount === 1 ? "" : "s"} identified
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <RiskBadge level={item.riskLevel} score={item.score} showScore={true} />
                <button
                  onClick={() => deleteHistoryItem(item.id)}
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                  title="Delete this record"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
