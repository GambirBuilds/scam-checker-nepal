import React, { useState } from "react";
import { Mail, AlertCircle, ShieldCheck } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function EmailChecker() {
  const { showToast } = useApp();
  const [senderEmail, setSenderEmail] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleEmail = "Dear Customer, Your account access will be terminated within 24 hours due to non-compliance. Click here to verify your identity and update your payment method: http://account-security-update.xyz/login";

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!body.trim() && !subject.trim()) {
      setError("Please paste the email subject or body text.");
      return;
    }

    setError(null);
    setLoading(true);

    const aggregated = `
Email Message Analysis:
From: ${senderEmail}
Reply-To: ${replyTo}
Subject: ${subject}
Body: ${body}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Email");

      // Check header mismatch
      if (senderEmail && replyTo && senderEmail.toLowerCase() !== replyTo.toLowerCase()) {
        const domain1 = senderEmail.split("@")[1];
        const domain2 = replyTo.split("@")[1];
        if (domain1 && domain2 && domain1 !== domain2) {
          assessment.score = Math.min(100, assessment.score + 25);
          assessment.indicators.unshift({
            category: "Header Anomaly",
            title: "Sender & Reply-To Domain Mismatch",
            description: `The email displays sender domain '@${domain1}' but requests replies to be routed to a different domain '@${domain2}'. This is a classic spoofing indicator.`,
            severity: "High",
            weight: 25,
            matchedPhrases: [domain1, domain2]
          });
        }
      }

      setResult(assessment);
      setLoading(false);
      showToast("Email evaluated.", "info");
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Email Scam & Phishing Checker" 
        description="Check suspicious email messages, spoofed sender domains, and urgent account termination links." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Mail className="w-4 h-4" />
          <span>Email Phishing Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Email Scam Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Inspect email headers, mismatched reply-to addresses, urgent account closure notices, and unverified verification links.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Sender Email Address (From)
              </label>
              <input
                type="text"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. support@official-bank.com.np"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Reply-To Address (if different)
              </label>
              <input
                type="text"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                placeholder="e.g. security-reply@randomdomain.xyz"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Subject Line
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Urgent Action Required: Account Access Suspended"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Body Text *
            </label>
            <textarea
              rows={4}
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste the email message body here..."
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
                <span>{loading ? "Analyzing..." : "Evaluate Email"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSenderEmail("support@apple-service.com");
                  setReplyTo("billing-dispute@apple-np.xyz");
                  setSubject("Urgent Security Verification Notice");
                  setBody(sampleEmail);
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
