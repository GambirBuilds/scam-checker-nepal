import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link2, ShieldCheck, AlertTriangle, ExternalLink, RotateCcw, AlertCircle, Info } from "lucide-react";
import { analyzeUrl } from "../utils/urlAnalyzer.js";
import { validateUrlInput } from "../utils/validation.js";
import { RiskBadge } from "../components/RiskBadge.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function URLChecker() {
  const { showToast, saveCurrentResult } = useApp();
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleUrls = [
    { label: "Lookalike eSewa", url: "http://esewa-nepal-verify.cc/login" },
    { label: "Shortened Link", url: "https://bit.ly/nepal-post-pkg98" },
    { label: "Direct IP Address", url: "http://192.168.1.15/bank-kyc" },
    { label: "Standard Official Site", url: "https://esewa.com.np" }
  ];

  const handleInspect = (e) => {
    if (e) e.preventDefault();
    const val = validateUrlInput(urlInput);
    if (!val.isValid) {
      setError(val.error);
      return;
    }
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = analyzeUrl(urlInput);
      setResult(res);
      setLoading(false);
      showToast("URL structural check completed.", "info");
    }, 200);
  };

  const handleClear = () => {
    setUrlInput("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="URL & Link Inspector" 
        description="Inspect visible URL characteristics, unencrypted HTTP protocols, IP addresses, URL shorteners, and domain lookalikes." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Link2 className="w-4 h-4" />
          <span>Structural Link Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          URL Security Check
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Evaluate visible characteristics of suspicious web links: HTTP vs HTTPS encryption, raw IP address hosts, URL shorteners, brand keyword imitation, and unusual domain extensions.
        </p>
      </div>

      {/* Input Form */}
      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
        <form onSubmit={handleInspect} className="space-y-4">
          <div>
            <label htmlFor="url-input" className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
              Enter or Paste Website Address (URL)
            </label>
            <div className="relative">
              <input
                id="url-input"
                type="text"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="e.g. http://nepal-bank-verify.cc/login or bit.ly/example"
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Inspecting Link..." : "Inspect URL"}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={!urlInput && !result}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer disabled:opacity-40"
              >
                Clear
              </button>
            </div>

            <span className="text-[11px] text-slate-500">
              Analysis occurs completely inside your browser.
            </span>
          </div>
        </form>

        {/* Demo Samples */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500 font-medium block mb-2">
            Try a test link:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleUrls.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setUrlInput(s.url);
                  setError(null);
                  setResult(null);
                }}
                className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-600 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* URL Inspection Results */}
      {result && result.isValid && (
        <div className="space-y-5 animate-in fade-in duration-300">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  URL Inspection Report
                </span>
                <p className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100 break-all mt-1">
                  {result.normalizedUrl}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <RiskBadge level={result.riskLevel} score={result.score} showScore={true} />
              </div>
            </div>

            {/* Host Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block mb-0.5">Protocol</span>
                <span className={`font-semibold ${result.isHttps ? "text-emerald-600" : "text-rose-600 font-bold"}`}>
                  {result.protocol.toUpperCase()} {result.isHttps ? "(Encrypted)" : "(Unencrypted)"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block mb-0.5">Hostname</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono truncate block">
                  {result.hostname}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block mb-0.5">Path</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono truncate block">
                  {result.pathname || "/"}
                </span>
              </div>
            </div>

            {/* Warning Indicators */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Potential Warning Signs ({result.indicators.length})
              </h3>

              {result.indicators.length === 0 ? (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>No obvious structural deception heuristics were detected in this domain name. Always ensure the website identity matches your intended destination.</span>
                </div>
              ) : (
                <div className="space-y-2">
                  {result.indicators.map((ind, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className={`w-4 h-4 shrink-0 ${
                            ind.severity === "High" ? "text-rose-600" : "text-amber-600"
                          }`} />
                          <span className="font-bold text-slate-900 dark:text-slate-100">
                            {ind.type}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {ind.detail}
                        </p>
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                        ind.severity === "High"
                          ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                      }`}>
                        {ind.severity}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mandatory Transparent Disclaimer */}
            <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-600 dark:text-sky-400" />
              <p className="leading-relaxed">
                <strong>Important Limitation:</strong> {result.disclaimer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
