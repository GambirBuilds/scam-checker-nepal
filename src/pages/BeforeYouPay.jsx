import React, { useState } from "react";
import { 
  CreditCard, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  RotateCcw,
  ShieldCheck,
  Lock,
  ArrowRight
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { PrivacyWarning } from "../components/PrivacyWarning.jsx";

const SAFETY_QUESTIONS = [
  {
    id: "knowRecipient",
    question: "Do I personally know who I am paying?",
    ideal: true,
    warningIf: false,
    detail: "Transferring to an unknown individual or personal mobile wallet for commercial goods carries high risk."
  },
  {
    id: "verifiedRecipient",
    question: "Did I independently verify the recipient through an official phone call or registry?",
    ideal: true,
    warningIf: false,
    detail: "Never rely strictly on contact information or bank details supplied in a suspicious chat."
  },
  {
    id: "verifiedWebsite",
    question: "Did I verify the official website, company registration (OCR), or physical store location?",
    ideal: true,
    warningIf: false,
    detail: "Legitimate businesses have verifiable VAT/PAN registration and physical contact locations in Nepal."
  },
  {
    id: "unusualUrgency",
    question: "Is the seller or caller creating unusual urgency, threatening account blockages, or enforcing a 15-minute deadline?",
    ideal: false,
    warningIf: true,
    detail: "Artificial time pressure is engineered specifically to prevent you from taking time to think or consult others."
  },
  {
    id: "askingCredentials",
    question: "Is someone asking for an OTP, password, MPIN, or asking you to scan a reverse QR code?",
    ideal: false,
    warningIf: true,
    detail: "CRITICAL RED FLAG: You NEVER need an OTP or MPIN to receive money or pay for an item."
  },
  {
    id: "pressuredSecrecy",
    question: "Am I being pressured to keep this transaction secret from my family, bank staff, or police?",
    ideal: false,
    warningIf: true,
    detail: "Demand for secrecy is standard social engineering designed to isolate you from help."
  },
  {
    id: "unrealisticOffer",
    question: "Does the offer or discount seem unrealistically cheap (e.g. 70% off flagship phones, guaranteed lottery prize)?",
    ideal: false,
    warningIf: true,
    detail: "If an item's price is drastically below genuine wholesale costs, the product almost certainly does not exist."
  },
  {
    id: "understandService",
    question: "Do I clearly understand the terms, refund policy, and exactly what I am paying for?",
    ideal: true,
    warningIf: false,
    detail: "Vague promises of 'online task commissions' or 'VIP membership' lead to continuous fee demands."
  }
];

export function BeforeYouPay() {
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState(null);

  const handleToggle = (id, val) => {
    setAnswers(prev => ({
      ...prev,
      [id]: val
    }));
  };

  const handleEvaluate = (e) => {
    e.preventDefault();
    let warningCount = 0;
    const flaggedItems = [];

    SAFETY_QUESTIONS.forEach(q => {
      const userVal = answers[q.id];
      if (userVal === undefined) return;

      if (userVal === q.warningIf) {
        warningCount++;
        flaggedItems.push(q);
      }
    });

    const isCritical = answers.askingCredentials === true;
    let label = "SAFE TO PROCEED WITH USUAL CAUTION";
    let style = "border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200";

    if (isCritical || warningCount >= 3) {
      label = "PAUSE AND VERIFY IMMEDIATELY";
      style = "border-rose-400 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200";
    } else if (warningCount >= 1) {
      label = "NEEDS CAUTION & INDEPENDENT CHECK";
      style = "border-amber-400 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200";
    }

    setStatus({
      warningCount,
      label,
      style,
      isCritical,
      flaggedItems
    });
  };

  const handleReset = () => {
    setAnswers({});
    setStatus(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Before You Pay: Final Safety Checklist" 
        description="Crucial pre-payment verification checklist before transferring funds via eSewa, Khalti, or mobile banking in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <CreditCard className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Pre-Payment Defense Gate</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Before You Pay Checklist
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Before entering your MPIN or sending funds through eSewa, Khalti, ConnectIPS, or mobile banking, answer these 8 verification checkpoints.
        </p>
      </div>

      <PrivacyWarning compact />

      {/* Zero credential notice */}
      <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
        <Lock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Zero Credential Policy:</strong> This tool NEVER asks you to enter card numbers, MPINs, passwords, CVVs, or OTPs. It is an educational checklist to help you pause and think before you authorize a transaction.
        </p>
      </div>

      {/* Checklist Form */}
      <form onSubmit={handleEvaluate} className="space-y-4">
        {SAFETY_QUESTIONS.map((q, idx) => {
          const currentVal = answers[q.id];

          return (
            <div
              key={q.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                    Check #{idx + 1}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {q.question}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {q.detail}
                  </p>
                </div>

                {/* Yes / No buttons */}
                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                  <button
                    type="button"
                    onClick={() => handleToggle(q.id, true)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg border cursor-pointer transition-colors ${
                      currentVal === true
                        ? "bg-sky-600 text-white border-sky-600 shadow-2xs"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggle(q.id, false)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg border cursor-pointer transition-colors ${
                      currentVal === false
                        ? "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-slate-800 dark:border-slate-200 shadow-2xs"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-600 cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Checklist</span>
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Review Payment Safety Status</span>
          </button>
        </div>
      </form>

      {/* Result Status Banner */}
      {status && (
        <div className={`p-6 sm:p-8 rounded-2xl border ${status.style} shadow-xs space-y-4 animate-in fade-in duration-150`}>
          <div className="flex items-center gap-2.5">
            {status.warningCount > 0 ? (
              <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
            )}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider block opacity-75">
                Checklist Status
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                {status.label}
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            {status.warningCount > 0
              ? `You have ${status.warningCount} high-risk flags identified in this payment request. Do not proceed until you have verified the recipient independently.`
              : "No primary red flags were checked. Proceed with ordinary digital vigilance and confirm recipient account numbers carefully."}
          </p>

          {status.flaggedItems.length > 0 && (
            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-current/20 space-y-2 text-xs text-slate-800 dark:text-slate-200">
              <span className="font-bold text-rose-700 dark:text-rose-300 block uppercase tracking-wider text-[11px]">
                Items Requiring Immediate Verification:
              </span>
              <ul className="space-y-1.5">
                {status.flaggedItems.map(item => (
                  <li key={item.id} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item.question}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
