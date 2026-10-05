import React from "react";
import { 
  GitCommit, 
  CheckCircle2, 
  AlertCircle, 
  ArrowDown, 
  ArrowRight,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

export const STAGES = [
  {
    step: 1,
    id: "initial_contact",
    title: "1. Initial Contact",
    desc: "Unsolicited text, call, social DM, or attractive advertisement."
  },
  {
    step: 2,
    id: "trust_building",
    title: "2. Trust Building",
    desc: "Use of official logos, polite language, or small initial token rewards."
  },
  {
    step: 3,
    id: "urgency",
    title: "3. Urgency Injection",
    desc: "Time pressure, account freeze threat, or limited-slot countdown."
  },
  {
    step: 4,
    id: "information_request",
    title: "4. Information Request",
    desc: "Demands for confidential verification, OTP, password, or citizenship photo."
  },
  {
    step: 5,
    id: "payment_request",
    title: "5. Payment Request",
    desc: "Demands for registration fee, customs clearance, tax, or VIP task deposit."
  },
  {
    step: 6,
    id: "followup_pressure",
    title: "6. Follow-up Pressure",
    desc: "Threats of penalty, loss of previously deposited funds, or secondary fees."
  }
];

export function ScamJourney({ indicators = [], score = 0 }) {
  // Determine relevant current stage based on indicators
  const hasPayment = indicators.some(i => (i.category || "").includes("Payment") || (i.title || "").includes("Payment") || (i.title || "").includes("Fee"));
  const hasSensitive = indicators.some(i => (i.category || "").includes("Sensitive") || (i.title || "").includes("OTP") || (i.title || "").includes("Credential"));
  const hasUrgency = indicators.some(i => (i.category || "").includes("Urgency") || (i.title || "").includes("Urgency"));
  const hasAuthority = indicators.some(i => (i.category || "").includes("Impersonation") || (i.category || "").includes("Authority") || (i.category || "").includes("Reward"));

  let currentStageIndex = 0; // default initial contact
  if (hasPayment) {
    currentStageIndex = 4; // Payment Request
  } else if (hasSensitive) {
    currentStageIndex = 3; // Information Request
  } else if (hasUrgency) {
    currentStageIndex = 2; // Urgency Injection
  } else if (hasAuthority) {
    currentStageIndex = 1; // Trust Building
  } else if (score > 10) {
    currentStageIndex = 0;
  }

  const currentStage = STAGES[currentStageIndex];

  let recommendedAction = "Independently verify sender identity before replying.";
  if (currentStageIndex === 4) {
    recommendedAction = "Do NOT send money or wallet transfers. Legitimate organizations never demand advance payments via personal wallets.";
  } else if (currentStageIndex === 3) {
    recommendedAction = "Do NOT provide passwords, OTPs, PINs, or photos of your citizenship certificate under any circumstances.";
  } else if (currentStageIndex === 2) {
    recommendedAction = "Do NOT rush. Take time to consult family members or contact your bank directly through verified telephone numbers.";
  } else if (currentStageIndex === 1) {
    recommendedAction = "Cross-check official registry or website independently. Do not rely on logos or names supplied by the sender.";
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Psychological Progression
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Scam Journey Timeline
          </h3>
          <p className="text-xs text-slate-500">
            Social engineering unfolds in predictable stages to systematically lower victim defenses.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-lg bg-sky-100/70 dark:bg-sky-950/60 border border-sky-300 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs font-bold shrink-0 self-start sm:self-auto">
          Current Stage: {currentStage.title}
        </div>
      </div>

      {/* Timeline Steps - Responsive Vertical / Horizontal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 relative">
        {STAGES.map((stg, idx) => {
          const isPast = idx < currentStageIndex;
          const isCurrent = idx === currentStageIndex;
          const isFuture = idx > currentStageIndex;

          return (
            <div
              key={stg.id}
              className={`p-3.5 rounded-xl border text-xs flex flex-col justify-between transition-all ${
                isCurrent
                  ? "bg-sky-50 dark:bg-sky-950/40 border-sky-500 ring-2 ring-sky-500/20 shadow-xs"
                  : isPast
                  ? "bg-slate-50 dark:bg-slate-900/60 border-slate-300 dark:border-slate-700 opacity-90"
                  : "bg-slate-50/40 dark:bg-slate-950/40 border-dashed border-slate-200 dark:border-slate-800 opacity-60"
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isCurrent
                      ? "bg-sky-600 text-white"
                      : isPast
                      ? "bg-slate-600 text-white"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-600"
                  }`}>
                    {stg.step}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] uppercase font-bold text-sky-700 dark:text-sky-300">
                      Active
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                  {stg.title.replace(/^\d+\.\s*/, "")}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {stg.desc}
                </p>
              </div>

              {idx < STAGES.length - 1 && (
                <div className="md:hidden pt-2 flex justify-center text-slate-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stage Advice Card */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold">
          <ShieldAlert className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Recommended Stage Action:</span>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          {recommendedAction}
        </p>
      </div>
    </div>
  );
}
