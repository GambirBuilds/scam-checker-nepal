import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Download, 
  BookmarkPlus, 
  RotateCcw, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Info,
  BrainCircuit,
  CheckSquare,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { RiskBadge } from "./RiskBadge.jsx";
import { WarningIndicator } from "./WarningIndicator.jsx";
import { ScamTacticCard } from "./ScamTacticCard.jsx";
import { ScamFingerprint } from "./ScamFingerprint.jsx";
import { RedFlagHighlighter } from "./RedFlagHighlighter.jsx";
import { ScamJourney } from "./ScamJourney.jsx";
import { TrustRiskComparison } from "./TrustRiskComparison.jsx";
import { WhyBeCautious } from "./WhyBeCautious.jsx";
import { CaseIdCard } from "./CaseIdCard.jsx";
import { extractScamFingerprint } from "../utils/scamFingerprint.js";
import { copyReportToClipboard, downloadReportFile } from "../utils/reportGenerator.js";
import { useApp } from "../context/AppContext.jsx";

export function RiskAssessment({ result, onReset, showDetailsLink = false }) {
  const { saveCurrentResult, showToast } = useApp();
  const [activeAdviceTab, setActiveAdviceTab] = useState("notPaid");
  const [showAdviceModal, setShowAdviceModal] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);
  const [userNotes, setUserNotes] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  if (!result) return null;

  const score = result.score || 0;
  const level = result.riskLevel || "LOW RISK";
  const confidence = result.confidence || "MODERATE";
  const count = result.indicators?.length || 0;
  const tactics = result.tactics || [];
  const signals = result.signals || { detected: [], notDetected: [] };
  const smartRecommendations = result.smartRecommendations || [];
  const rawText = result.rawText || "";
  const fingerprint = result.fingerprint || extractScamFingerprint(rawText || result.summary || "");
  const caseId = result.caseId || "SCN-2026-A82F4";

  // Score meter gradient bar
  let scoreColor = "bg-sky-500";
  let scoreTextColor = "text-sky-700 dark:text-sky-400";
  let bgTint = "bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900";

  if (level === "HIGH RISK") {
    scoreColor = "bg-rose-600";
    scoreTextColor = "text-rose-700 dark:text-rose-400";
    bgTint = "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900";
  } else if (level === "SUSPICIOUS") {
    scoreColor = "bg-amber-500";
    scoreTextColor = "text-amber-700 dark:text-amber-400";
    bgTint = "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900";
  } else if (level === "NEEDS CAUTION") {
    scoreColor = "bg-yellow-500";
    scoreTextColor = "text-yellow-700 dark:text-yellow-400";
    bgTint = "bg-yellow-50/50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900";
  }

  const handleCopy = async () => {
    try {
      await copyReportToClipboard(result, userNotes);
      setIsCopied(true);
      showToast("Assessment report copied to clipboard.", "success");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      showToast("Unable to copy to clipboard.", "error");
    }
  };

  const handleDownload = () => {
    downloadReportFile(result, userNotes);
    showToast("Report downloaded as text file.", "success");
  };

  const adviceTabs = [
    { id: "notPaid", label: "Haven't Paid" },
    { id: "sentMoney", label: "Already Paid" },
    { id: "sharedPassword", label: "Shared Password" },
    { id: "sharedFinancial", label: "Shared Bank/OTP" },
    { id: "clickedLink", label: "Clicked Link" }
  ];

  const currentAdviceList = result.whatShouldIDoNow?.[activeAdviceTab] || [];

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${bgTint} backdrop-blur-xs shadow-xs`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                Security Assessment
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Local Rule-Based Risk Assessment
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <RiskBadge level={level} className="text-sm px-3 py-1 font-bold" />
              <span className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${
                confidence === "HIGH" 
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700" 
                  : confidence === "MODERATE"
                  ? "bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800"
                  : "bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
              }`}>
                Confidence: {confidence}
              </span>
              <button
                type="button"
                onClick={() => setShowWhyModal(true)}
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Why this result?</span>
              </button>
            </div>
          </div>

          <div className="sm:text-right">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-0.5">
              Risk Score
            </span>
            <div className="flex items-baseline sm:justify-end gap-1">
              <span className={`text-4xl sm:text-5xl font-extrabold font-tabular tracking-tight ${scoreTextColor}`}>
                {score}
              </span>
              <span className="text-lg text-slate-400 font-medium">/ 100</span>
            </div>
          </div>
        </div>

        {/* Score Bar */}
        <div className="my-5">
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div 
              className={`h-full ${scoreColor} transition-all duration-700 ease-out`}
              style={{ width: `${Math.max(5, score)}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 font-tabular">
            <span>0 Low</span>
            <span>21 Caution</span>
            <span>41 Suspicious</span>
            <span>71+ High Risk</span>
          </div>
        </div>

        {/* Assessment Summary */}
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200/60 dark:border-slate-800">
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            {result.summary}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
              <span>{count} warning {count === 1 ? "sign" : "signs"}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-sky-600" />
              <span>{tactics.length} psychological {tactics.length === 1 ? "tactic" : "tactics"} detected</span>
            </span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowAdviceModal(true)}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>What Should I Do Now?</span>
          </button>

          <Link
            to="/safety-checklist"
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2"
          >
            <CheckSquare className="w-4 h-4 text-emerald-600" />
            <span>Safety Checklist</span>
          </Link>

          {onReset && (
            <button
              onClick={onReset}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Check Another</span>
            </button>
          )}

          <button
            onClick={() => saveCurrentResult(result)}
            className="px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Save result to local device history"
          >
            <BookmarkPlus className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Save Result</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>{isCopied ? "Copied!" : "Copy Report"}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Local Case Reference ID (Feature 12) */}
      <CaseIdCard 
        caseId={caseId}
        date={result.evaluatedAt || new Date().toISOString()}
        type={result.contentType || "General Text"}
        riskLevel={level}
        score={score}
        fingerprint={fingerprint?.fingerprintSequence}
      />

      {/* Scam DNA / Tactical Fingerprint (Feature 1) */}
      <ScamFingerprint fingerprint={fingerprint} />

      {/* Red Flag Phrase Highlighter (Feature 2) */}
      {rawText && (
        <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <RedFlagHighlighter text={rawText} />
        </div>
      )}

      {/* Scam Journey & Progression Timeline (Feature 3) */}
      <ScamJourney indicators={result.indicators || []} score={score} />

      {/* Trust vs Risk Balanced Comparison (Feature 4) */}
      <TrustRiskComparison 
        indicators={result.indicators || []}
        score={score}
      />

      {/* "Why Not Just Trust It?" Plain Language Section (Feature 5) */}
      <WhyBeCautious 
        signals={signals.detected || []}
        indicators={result.indicators || []}
        score={score}
      />

      {/* Warning Signs Breakdown */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span>Why This Was Flagged</span>
          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
            ({count} indicator{count === 1 ? "" : "s"})
          </span>
        </h3>

        {count === 0 ? (
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-500">
            No specific keyword or behavioral scam heuristics were triggered in this content. Keep in mind that emerging scams may use novel wording; always remain cautious.
          </div>
        ) : (
          <div className="grid gap-3">
            {result.indicators.map((indicator, idx) => (
              <WarningIndicator key={idx} indicator={indicator} />
            ))}
          </div>
        )}
      </div>

      {/* Detected Psychological Tactics (Feature 7 & 8) */}
      {tactics.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Detected Psychological Tactics ({tactics.length})</span>
            </h3>
            <span className="text-xs text-slate-500">Social Engineering Analysis</span>
          </div>

          <div className="grid gap-3">
            {tactics.map((tac) => (
              <ScamTacticCard key={tac.id} tactic={tac} />
            ))}
          </div>
        </div>
      )}

      {/* Recommended Safety Actions */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>Recommended Safety Steps</span>
        </h3>

        <ul className="space-y-2.5">
          {result.recommendedActions?.map((action, i) => (
            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-bold text-xs shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{action}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>Always verify senders through independently researched official phone numbers.</p>
          <Link 
            to="/resources" 
            className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>View Verified Helplines</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Learn From This Scam & Smart Recommendations (Feature 10 & 26) */}
      {smartRecommendations.length > 0 && (
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Learn From This Scam (Recommended Next Steps)
            </h4>
          </div>
          <p className="text-xs text-slate-500">
            Based on the detected indicators, we recommend exploring these related learning modules:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {smartRecommendations.map((rec, i) => (
              <Link
                key={i}
                to={rec.link}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                    {rec.typeLabel}
                  </span>
                  <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                    {rec.title}
                  </h5>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400 pt-2 mt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Explainable Analysis Modal (Feature 15 & 16: [ WHY THIS RESULT? ]) */}
      {showWhyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-5"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Explainable Analysis: Why This Result?
                </h3>
                <p className="text-xs text-slate-500">
                  Detailed evaluation mechanics and signal transparency.
                </p>
              </div>
              <button
                onClick={() => setShowWhyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Risk vs Confidence Explanation (Feature 16) */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block mb-0.5 font-medium">Risk Score & Level</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100 font-tabular">
                  {score} / 100 ({level})
                </span>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Risk represents the severity and combination of warning indicators found.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block mb-0.5 font-medium">Analysis Confidence</span>
                <span className="text-lg font-extrabold text-sky-600 dark:text-sky-400">
                  {confidence}
                </span>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Confidence measures the depth and specificity of text patterns available.
                </p>
              </div>
            </div>

            {/* Signals Detected vs Not Detected */}
            <div className="space-y-3 text-xs">
              <div>
                <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  ✓ Verified Detected Indicators ({signals.detected?.length || 0}):
                </h5>
                {signals.detected?.length === 0 ? (
                  <p className="text-slate-400 italic">None of the common high-risk triggers were detected.</p>
                ) : (
                  <div className="space-y-1.5">
                    {signals.detected?.map((sig, i) => (
                      <div key={i} className="p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  — Common Signals Not Detected ({signals.notDetected?.length || 0}):
                </h5>
                <div className="space-y-1">
                  {signals.notDetected?.map((sig, i) => (
                    <div key={i} className="p-1.5 text-slate-500 flex items-center gap-2 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
              Note: This is a transparent rule-based heuristic assessment. Neither score nor confidence represents a legally or scientifically validated guarantee.
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowWhyModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 cursor-pointer"
              >
                Close Explanation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* "What Should I Do Now?" In-Depth Guidance Modal / Drawer */}
      {showAdviceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="advice-title"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <div>
                <h3 id="advice-title" className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  What Should I Do Now?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select your current situation to see calm, step-by-step guidance.
                </p>
              </div>
              <button
                onClick={() => setShowAdviceModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Situation Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-5">
              {adviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAdviceTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeAdviceTab === tab.id
                      ? "bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Advice Steps Content */}
            <div className="space-y-3 mb-6">
              {currentAdviceList.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Emergency Contacts Note */}
            <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200 space-y-1">
              <p className="font-semibold">Official Nepal Police Cyber Bureau Reporting:</p>
              <p>Hotline: 01-4412555 | Location: Bhotahiti, Kathmandu | Email: cyberbureau@nepalpolice.gov.np</p>
              <p className="text-[11px] opacity-80">Do not feel embarrassed or alone. Cybercrime happens to thousands of people every week.</p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowAdviceModal(false)}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
