import React, { useState } from "react";
import { 
  GitCompare, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  RotateCcw,
  Sparkles,
  Info
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { RiskBadge } from "../components/RiskBadge.jsx";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { PrivacyWarning } from "../components/PrivacyWarning.jsx";

const SAMPLE_A = "Dear customer, your statement for March is now ready. You can review it at your convenience by logging into your official mobile banking app.";
const SAMPLE_B = "URGENT: Your mobile banking KYC has expired. Your account will be frozen today. Click immediately to submit your OTP: http://nic-bank-kyc.cc/login";

export function MessageComparison() {
  const [messageA, setMessageA] = useState("");
  const [messageB, setMessageB] = useState("");
  const [resultA, setResultA] = useState(null);
  const [resultB, setResultB] = useState(null);
  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = (e) => {
    e.preventDefault();
    if (!messageA.trim() && !messageB.trim()) return;

    setIsComparing(true);
    setTimeout(() => {
      const a = messageA.trim() ? analyzeContent(messageA, "Message A") : null;
      const b = messageB.trim() ? analyzeContent(messageB, "Message B") : null;
      setResultA(a);
      setResultB(b);
      setIsComparing(false);
    }, 250);
  };

  const handleLoadSample = () => {
    setMessageA(SAMPLE_A);
    setMessageB(SAMPLE_B);
    const a = analyzeContent(SAMPLE_A, "Message A");
    const b = analyzeContent(SAMPLE_B, "Message B");
    setResultA(a);
    setResultB(b);
  };

  const handleReset = () => {
    setMessageA("");
    setMessageB("");
    setResultA(null);
    setResultB(null);
  };

  // Derive key differences
  const diffs = [];
  if (resultA && resultB) {
    const indA = resultA.indicators || [];
    const indB = resultB.indicators || [];

    const hasPayA = indA.some(i => i.category?.includes("Payment"));
    const hasPayB = indB.some(i => i.category?.includes("Payment"));
    if (hasPayA !== hasPayB) {
      diffs.push({
        topic: "Payment Pressure",
        descA: hasPayA ? "Payment/fee requested" : "No payment request detected",
        descB: hasPayB ? "Payment/fee requested" : "No payment request detected"
      });
    }

    const hasOtpA = indA.some(i => i.category?.includes("Sensitive"));
    const hasOtpB = indB.some(i => i.category?.includes("Sensitive"));
    if (hasOtpA !== hasOtpB) {
      diffs.push({
        topic: "Credential / OTP Request",
        descA: hasOtpA ? "Requests OTP, PIN, or password" : "No credential request detected",
        descB: hasOtpB ? "Requests OTP, PIN, or password" : "No credential request detected"
      });
    }

    const hasUrgA = indA.some(i => i.category?.includes("Urgency"));
    const hasUrgB = indB.some(i => i.category?.includes("Urgency"));
    if (hasUrgA !== hasUrgB) {
      diffs.push({
        topic: "Urgency / Threat",
        descA: hasUrgA ? "Artificial urgency or freeze threat" : "No artificial urgency detected",
        descB: hasUrgB ? "Artificial urgency or freeze threat" : "No artificial urgency detected"
      });
    }

    const hasLinkA = indA.some(i => i.category?.includes("Link"));
    const hasLinkB = indB.some(i => i.category?.includes("Link"));
    if (hasLinkA !== hasLinkB) {
      diffs.push({
        topic: "Web Links",
        descA: hasLinkA ? "Contains external/shortened link" : "No external link detected",
        descB: hasLinkB ? "Contains external/shortened link" : "No external link detected"
      });
    }

    if (diffs.length === 0) {
      diffs.push({
        topic: "Overall Indicator Density",
        descA: `${indA.length} warning indicators detected`,
        descB: `${indB.length} warning indicators detected`
      });
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Compare Two Messages" 
        description="Side-by-side comparative risk indicator analysis for suspicious SMS, emails, or chat messages in Nepal." 
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 mb-2">
            <GitCompare className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Comparative Defense</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            Compare Two Messages
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Unsure between an authentic notification and a suspicious copycat? Place both messages side-by-side to inspect structural differences in urgency, credential requests, and payment pressure.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleLoadSample}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-sky-300 dark:border-sky-700 bg-sky-50/60 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 hover:bg-sky-100 cursor-pointer transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Load Example Pair</span>
          </button>
          {(messageA || messageB) && (
            <button
              type="button"
              onClick={handleReset}
              className="p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 cursor-pointer"
              title="Reset comparison"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <PrivacyWarning compact />

      {/* Input Comparison Form */}
      <form onSubmit={handleCompare} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Message A Box */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <label htmlFor="msg-a" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px]">A</span>
                <span>Message A (First Message)</span>
              </label>
              <span className="text-[11px] text-slate-400 font-mono">{messageA.length} chars</span>
            </div>
            <textarea
              id="msg-a"
              rows={6}
              value={messageA}
              onChange={(e) => setMessageA(e.target.value)}
              placeholder="Paste first message or email text here..."
              className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 leading-relaxed resize-y font-sans"
            />
          </div>

          {/* Message B Box */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <label htmlFor="msg-b" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px]">B</span>
                <span>Message B (Second Message)</span>
              </label>
              <span className="text-[11px] text-slate-400 font-mono">{messageB.length} chars</span>
            </div>
            <textarea
              id="msg-b"
              rows={6}
              value={messageB}
              onChange={(e) => setMessageB(e.target.value)}
              placeholder="Paste second message or email text here..."
              className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 leading-relaxed resize-y font-sans"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!messageA.trim() && !messageB.trim()}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <GitCompare className="w-4 h-4" />
            <span>{isComparing ? "Analyzing Differences..." : "Compare Indicators Now"}</span>
          </button>
        </div>
      </form>

      {/* Comparison Results */}
      {(resultA || resultB) && (
        <div className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column A Analysis */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">A</span>
                  <span>Message A Assessment</span>
                </h3>
                {resultA && <RiskBadge level={resultA.riskLevel} />}
              </div>

              {resultA ? (
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Evaluation Score</span>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 font-tabular">
                      {resultA.score} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-1">Detected Tactics</span>
                    {resultA.tactics?.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {resultA.tactics.map(t => (
                          <span key={t.id} className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-[10px]">
                            {t.title}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-500 italic">No overt pressure tactics detected.</p>
                    )}
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-1">Warning Signs</span>
                    {resultA.indicators?.length > 0 ? (
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                        {resultA.indicators.map((ind, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500">•</span>
                            <span>{ind.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">Lower number of detected warning indicators.</p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">No text provided for Message A.</p>
              )}
            </div>

            {/* Column B Analysis */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">B</span>
                  <span>Message B Assessment</span>
                </h3>
                {resultB && <RiskBadge level={resultB.riskLevel} />}
              </div>

              {resultB ? (
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Evaluation Score</span>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 font-tabular">
                      {resultB.score} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-1">Detected Tactics</span>
                    {resultB.tactics?.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {resultB.tactics.map(t => (
                          <span key={t.id} className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-[10px]">
                            {t.title}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-500 italic">No overt pressure tactics detected.</p>
                    )}
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-1">Warning Signs</span>
                    {resultB.indicators?.length > 0 ? (
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                        {resultB.indicators.map((ind, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500">•</span>
                            <span>{ind.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">Lower number of detected warning indicators.</p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">No text provided for Message B.</p>
              )}
            </div>
          </div>

          {/* KEY DIFFERENCES CARD */}
          {resultA && resultB && (
            <div className="p-6 rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 space-y-4">
              <div className="flex items-center gap-2">
                <GitCompare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  Key Differences
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block">Message A Summary</span>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                    {diffs.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-sky-500 font-bold">•</span>
                        <span><strong>{d.topic}:</strong> {d.descA}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block">Message B Summary</span>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                    {diffs.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-sky-500 font-bold">•</span>
                        <span><strong>{d.topic}:</strong> {d.descB}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strict Language Guideline Disclaimer */}
              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-sky-200 dark:border-sky-900 text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Notice on Safety Language:</strong> Having a "Lower number of detected warning indicators" does not prove that a message is authentic or safe. Even low-indicator messages should be independently verified before you send money or account details.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
