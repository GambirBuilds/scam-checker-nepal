import React, { useState } from "react";
import { Landmark, ShieldAlert, AlertCircle, ShieldCheck, Lock } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function BankingChecker() {
  const { showToast } = useApp();
  const [bankName, setBankName] = useState("");
  const [message, setMessage] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleBankingSMS = "URGENT NOTICE: Your bank account has been flagged for KYC expiry. To prevent immediate suspension within 2 hours, click here and verify with your 6-digit OTP and card PIN: http://nepal-bank-verify.cc/login";

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please paste the banking SMS or communication text.");
      return;
    }

    // Safety filter: check if user inadvertently typed a real 6-digit OTP or 16-digit card number
    if (/\b\d{16}\b/.test(message) || /\b\d{4}-\d{4}-\d{4}-\d{4}\b/.test(message)) {
      setError("Security Alert: It appears you pasted a real 16-digit card number! Please delete your sensitive card numbers before evaluating.");
      return;
    }

    setError(null);
    setLoading(true);

    const aggregated = `
Banking Communication Analysis:
Bank: ${bankName}
Sender ID: ${senderPhone}
Message: ${message}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Banking Message");
      setResult(assessment);
      setLoading(false);
      showToast("Banking message evaluated.", "info");
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Banking Message Safety Checker" 
        description="Verify suspicious banking SMS, urgent KYC suspension warnings, and mobile banking update requests in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Landmark className="w-4 h-4" />
          <span>Mobile Banking & Phishing Protection</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Banking Safety Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Received an alarming text claiming your bank account will be blocked or asking you to update your mobile banking KYC? Analyze the message patterns safely below.
        </p>
      </div>

      {/* Prominent Red Security Banner */}
      <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <p className="font-bold text-sm">Strict Privacy Policy: Never Enter Real Financial Credentials</p>
          <p>
            Do NOT type your real password, active OTP, mobile banking MPIN, ATM card PIN, or card CVV number. Only paste the wording of the suspicious message you received.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Bank Claimed in Message
              </label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="e.g. NIC Asia, Nabil, Global IME, Nepal Bank"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Sender Number or SMS Header
              </label>
              <input
                type="text"
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
                placeholder="e.g. +977-98XXXXXXXX or unknown alphanumeric"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full SMS or Message Content *
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste the bank text or warning message here (remove any personal names or account numbers)..."
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
                <span>{loading ? "Analyzing..." : "Analyze Banking SMS"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMessage(sampleBankingSMS);
                  setBankName("Nepal Bank Limited");
                  setSenderPhone("+977-9811XXXXXX");
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
