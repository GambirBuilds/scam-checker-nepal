import React, { useState } from "react";
import { CreditCard, AlertCircle, ShieldCheck, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function PaymentChecker() {
  const { showToast } = useApp();
  const [walletType, setWalletType] = useState("esewa");
  const [claimType, setClaimType] = useState("accidental-transfer");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const samplePaymentText = "I mistakenly sent Rs. 15,000 to your eSewa ID instead of my brother who is in hospital. Please scan this refund QR code in your eSewa app and enter your MPIN immediately to return the balance or police will be contacted!";

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please paste the message or describe the payment request.");
      return;
    }
    setError(null);
    setLoading(true);

    const aggregated = `
Digital Payment & Wallet Fraud Analysis:
Platform: ${walletType}
Claim Pattern: ${claimType}
Amount Mentioned: ${amount}
Message: ${message}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Payment Request");

      if (claimType === "reverse-qr" || claimType === "accidental-transfer") {
        assessment.score = Math.min(100, Math.max(75, assessment.score + 30));
        assessment.riskLevel = "HIGH RISK";
        assessment.indicators.unshift({
          category: "Payment Logic Deception",
          title: "Reverse QR Code / False Mistake Coercion",
          description: "Scammer tricks victims into scanning a QR code and typing their MPIN under the guise of 'refunding' or 'receiving' money. Typing your MPIN always TRANSFERS funds out of your account.",
          severity: "High",
          weight: 35,
          matchedPhrases: ["scan QR to receive", "enter MPIN to refund"]
        });
      }

      setResult(assessment);
      setLoading(false);
      showToast("Payment request evaluated.", "info");
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Payment & Digital Wallet Scam Checker" 
        description="Verify suspicious eSewa, Khalti, ConnectIPS, and QR payment refund requests in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <CreditCard className="w-4 h-4" />
          <span>eSewa / Khalti / ConnectIPS Fraud Prevention</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Payment Scam Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Verify suspicious fund requests, accidental transfer claims, and QR codes sent via WhatsApp, Viber, or SMS.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Target Payment Platform
              </label>
              <select
                value={walletType}
                onChange={(e) => setWalletType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value="esewa">eSewa</option>
                <option value="khalti">Khalti</option>
                <option value="connectips">ConnectIPS</option>
                <option value="mobile-banking">Bank Mobile App (Fonepay QR)</option>
                <option value="other-wallet">Other Digital Wallet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Type of Scenario Claimed
              </label>
              <select
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value="accidental-transfer">Caller claims accidental money transfer</option>
                <option value="reverse-qr">Sent a QR code to 'receive' prize / cashback</option>
                <option value="advance-token">Demands advance token payment for deal</option>
                <option value="refund-portal">Claims wallet transaction failed and needs PIN</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Amount In Question (if specified)
            </label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. NPR 15,000"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Message Received / Details *
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste what the person said or sent you on WhatsApp/Viber/SMS..."
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
                <span>{loading ? "Analyzing..." : "Analyze Payment Risk"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMessage(samplePaymentText);
                  setWalletType("esewa");
                  setClaimType("accidental-transfer");
                  setAmount("NPR 15,000");
                }}
                className="px-3 py-2 text-xs font-medium text-sky-600 hover:underline cursor-pointer"
              >
                Load Example
              </button>
            </div>

            <Link to="/check/qr" className="text-xs text-sky-600 hover:underline flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" />
              <span>Inspect a QR Image instead</span>
            </Link>
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
