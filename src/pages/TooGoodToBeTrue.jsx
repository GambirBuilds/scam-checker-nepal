import React, { useState } from "react";
import { 
  Sparkles, 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight,
  ShieldAlert,
  Info
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";

const CATEGORIES = [
  { id: "prize", label: "Prize & Lottery", icon: "🎁" },
  { id: "job", label: "Remote Job & Task", icon: "💼" },
  { id: "investment", label: "Crypto / Investment", icon: "📈" },
  { id: "giveaway", label: "Social Media Giveaway", icon: "✨" },
  { id: "scholarship", label: "Study Abroad Scholarship", icon: "🎓" },
  { id: "product", label: "70%+ Gadget / Deal", icon: "🛍️" },
  { id: "loan", label: "Instant No-Doc Loan", icon: "💳" },
  { id: "opportunity", label: "Online Opportunity", icon: "🌐" }
];

const QUESTIONS = [
  {
    id: "unrealisticReward",
    label: "Does the reward or salary seem disproportionately high compared to the required effort?",
    hint: "e.g., earning Rs. 5,000/day for liking YouTube videos, or buying an iPhone 15 for Rs. 35,000."
  },
  {
    id: "upfrontPayment",
    label: "Are you being asked to pay money upfront before receiving the prize, loan, job, or shipment?",
    hint: "e.g., registration fee, customs clearance charge, insurance deposit, or activation token."
  },
  {
    id: "guaranteedReturns",
    label: "Does the offer promise '100% guaranteed returns', 'zero risk', or fixed daily payouts?",
    hint: "Legitimate investments fluctuate; absolute guarantees are a hallmark of Ponzi schemes."
  },
  {
    id: "urgencyPressure",
    label: "Is there intense urgency or a strict countdown forcing you to decide immediately?",
    hint: "e.g., 'Offer expires in 15 minutes', 'Only 2 spots left today'."
  },
  {
    id: "sensitiveInfo",
    label: "Does the process ask for OTPs, bank passwords, or copies of your citizenship certificate?",
    hint: "Legitimate organizations never ask for your confidential authentication codes."
  },
  {
    id: "lackVerification",
    label: "Are you unable to find an independent physical office or verified phone number in Nepal?",
    hint: "Communication exists strictly via anonymous WhatsApp, Telegram, or temporary Instagram accounts."
  }
];

export function TooGoodToBeTrue() {
  const [selectedCategory, setSelectedCategory] = useState("prize");
  const [answers, setAnswers] = useState({});
  const [evaluation, setEvaluation] = useState(null);

  const handleToggle = (id) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleEvaluate = (e) => {
    e.preventDefault();
    const yesCount = Object.values(answers).filter(Boolean).length;

    let concernLevel = "LOWER CONCERN";
    let color = "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800";
    let explanation = "The opportunity exhibits few traditional advance-fee or pressure signals. However, always verify credentials independently before sending money.";

    if (yesCount >= 4) {
      concernLevel = "HIGH CONCERN";
      color = "text-rose-700 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800";
      explanation = "This offer exhibits multiple classic fraud markers (such as upfront fee demands, artificial urgency, and unrealistic yields). Strong caution is warranted. Do not transfer funds or share credentials.";
    } else if (yesCount >= 2) {
      concernLevel = "SUSPICIOUS";
      color = "text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800";
      explanation = "Key deceptive characteristics detected. Legitimate opportunities rarely require upfront fees or manufacture intense countdown pressure. Verify the entity independently.";
    } else if (yesCount === 1) {
      concernLevel = "NEEDS CAUTION";
      color = "text-yellow-700 bg-yellow-50 dark:bg-yellow-950/40 border-yellow-300 dark:border-yellow-800";
      explanation = "At least one significant warning sign was flagged. Take time to consult a knowledgeable family member or official authority before proceeding.";
    }

    setEvaluation({
      yesCount,
      concernLevel,
      color,
      explanation,
      evaluatedAt: new Date().toLocaleTimeString()
    });
  };

  const handleReset = () => {
    setAnswers({});
    setEvaluation(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="'Is This Too Good To Be True?' Checker" 
        description="A simple interactive decision flow to assess unrealistic prizes, job offers, investment yields, and discounts in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Decision Flow & Reality Check</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          "Is This Too Good To Be True?" Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          If an offer sounds unusually generous, lucrative, or effortless, test it against these 6 foundational social-engineering questions.
        </p>
      </div>

      {/* Category Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          1. Select the Offer Category:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                selectedCategory === cat.id
                  ? "bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-200 border-sky-500 ring-2 ring-sky-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>{cat.icon}</span>
              <span className="truncate">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 6 Questions Form */}
      <form onSubmit={handleEvaluate} className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            2. Answer the 6 Reality-Check Questions:
          </h3>
          <p className="text-xs text-slate-500">
            Check the box for each statement that applies to the message or offer you received.
          </p>
        </div>

        <div className="space-y-3.5">
          {QUESTIONS.map((q) => {
            const isChecked = Boolean(answers[q.id]);

            return (
              <label
                key={q.id}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? "bg-sky-50/70 dark:bg-sky-950/40 border-sky-400 dark:border-sky-800"
                    : "bg-slate-50/40 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(q.id)}
                  className="w-4 h-4 mt-0.5 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer shrink-0"
                />
                <div className="space-y-0.5 text-xs">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 block leading-snug">
                    {q.label}
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-relaxed">
                    {q.hint}
                  </span>
                </div>
              </label>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-600 cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Form</span>
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Calculate Concern Level</span>
          </button>
        </div>
      </form>

      {/* Evaluation Result */}
      {evaluation && (
        <div className={`p-6 sm:p-8 rounded-2xl border ${evaluation.color} shadow-xs space-y-4 animate-in fade-in duration-150`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-current/20 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider block opacity-80">
                Evaluation Level
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {evaluation.concernLevel}
              </h3>
            </div>

            <div className="px-3 py-1 rounded-lg bg-white/70 dark:bg-slate-900/60 font-bold text-xs self-start sm:self-auto border border-current/20">
              {evaluation.yesCount} of 6 Warning Flags Present
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            {evaluation.explanation}
          </p>

          <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-current/20 text-xs text-slate-800 dark:text-slate-200 space-y-1.5">
            <span className="font-bold flex items-center gap-1.5 text-sky-800 dark:text-sky-300 uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Recommended Next Action</span>
            </span>
            <p className="leading-relaxed">
              Never rush into transferring money. Discuss this with a trusted friend, family member, or call the relevant official helpline before taking any action.
            </p>
          </div>

          <div className="text-[11px] opacity-75 pt-1">
            * Educational risk indicator only. This tool evaluates probability heuristics and does not constitute absolute proof of fraud.
          </div>
        </div>
      )}
    </div>
  );
}
