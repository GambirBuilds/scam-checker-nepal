import React, { useState } from "react";
import { Truck, AlertCircle, ShieldCheck } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function DeliveryChecker() {
  const { showToast } = useApp();
  const [courierName, setCourierName] = useState("");
  const [trackingLink, setTrackingLink] = useState("");
  const [message, setMessage] = useState("");
  const [demandedFee, setDemandedFee] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleSMS = "Nepal Post: Delivery of your parcel NP-9023 was suspended due to incorrect house number. Please update delivery address and pay Rs. 65 re-dispatch fee within 24h at: http://bit.ly/nepalpost-update";

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!message.trim() && !trackingLink.trim()) {
      setError("Please paste the delivery SMS message or tracking link.");
      return;
    }
    setError(null);
    setLoading(true);

    const aggregated = `
Delivery & Courier SMS:
Courier: ${courierName}
Link: ${trackingLink}
Fee Demanded: ${demandedFee}
Message: ${message}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Delivery Notice");
      setResult(assessment);
      setLoading(false);
      showToast("Delivery notice evaluated.", "info");
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Delivery & Parcel Scam Checker" 
        description="Check suspicious courier SMS, fake Nepal Post tracking links, and small customs re-dispatch fee requests." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Truck className="w-4 h-4" />
          <span>Postal & Logistics Fraud</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Delivery Scam Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Fraudsters send SMS claiming your package cannot be delivered due to an incomplete address, directing you to shortened links asking for a small NPR 50–100 payment to harvest card numbers.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Claimed Courier / Sender
              </label>
              <input
                type="text"
                value={courierName}
                onChange={(e) => setCourierName(e.target.value)}
                placeholder="e.g. Nepal Post, DHL, Aramex"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Re-dispatch / Customs Fee Mentioned
              </label>
              <input
                type="text"
                value={demandedFee}
                onChange={(e) => setDemandedFee(e.target.value)}
                placeholder="e.g. NPR 65 or NPR 150"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Link inside the SMS (if any)
            </label>
            <input
              type="text"
              value={trackingLink}
              onChange={(e) => setTrackingLink(e.target.value)}
              placeholder="e.g. bit.ly/nepal-pkg or http://track-parcel-np.cc"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full SMS / Message Text *
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste the delivery SMS text here..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{loading ? "Analyzing SMS..." : "Inspect Delivery SMS"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMessage(sampleSMS);
                  setCourierName("Nepal Post");
                  setDemandedFee("NPR 65");
                  setTrackingLink("http://bit.ly/nepalpost-update");
                }}
                className="px-3 py-2 text-xs font-medium text-sky-600 hover:underline cursor-pointer"
              >
                Load Example
              </button>
            </div>
          </div>
        </form>
      </div>

      {result && (
        <div className="pt-2 animate-in fade-in duration-300">
          <RiskAssessment result={result} onReset={() => setResult(null)} />
        </div>
      )}
    </div>
  );
}
