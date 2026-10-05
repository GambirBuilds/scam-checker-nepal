import React from "react";
import { HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function WhyBeCautious({ signals = [], indicators = [], score = 0 }) {
  // Construct plain-language reasons
  const reasons = [];

  const hasUrgency = indicators.some(i => (i.category || "").includes("Urgency") || (i.title || "").includes("Urgency"));
  const hasSensitive = indicators.some(i => (i.category || "").includes("Sensitive") || (i.title || "").includes("OTP") || (i.title || "").includes("Credential"));
  const hasPayment = indicators.some(i => (i.category || "").includes("Payment") || (i.title || "").includes("Fee") || (i.title || "").includes("Payment"));
  const hasReward = indicators.some(i => (i.category || "").includes("Reward") || (i.title || "").includes("Lottery"));
  const hasLink = indicators.some(i => (i.category || "").includes("Link") || (i.title || "").includes("Link"));

  if (hasUrgency) {
    reasons.push("The message creates artificial urgency or panic to force immediate compliance.");
  }
  if (hasSensitive) {
    reasons.push("It asks for confidential security information (OTP, PIN, or password) that institutions never request.");
  }
  if (hasPayment) {
    reasons.push("It requests upfront payment or advance transfer before providing a verified service.");
  }
  if (hasReward) {
    reasons.push("It promises an unsolicited high-value reward, prize, or lottery you did not independently enter.");
  }
  if (hasLink) {
    reasons.push("It directs you to click external web links rather than navigating directly via official apps.");
  }

  // Always include sender identity caution
  reasons.push("The sender's identity cannot be independently verified from the text alone.");

  return (
    <div className="rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/40 dark:bg-sky-950/20 p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-sky-200/70 dark:border-sky-900/50 pb-3">
        <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
          <HelpCircle className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
            Why should I be cautious?
          </h3>
          <p className="text-xs text-slate-500">
            Plain-language breakdown of why these patterns warrant deliberate pause.
          </p>
        </div>
      </div>

      {/* Bulleted plain language reasons */}
      <div className="space-y-2.5">
        {reasons.slice(0, 5).map((reason, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5">
              {idx + 1}
            </span>
            <p className="leading-relaxed font-medium">
              {reason}
            </p>
          </div>
        ))}
      </div>

      {/* Safer Next Step Box */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900 space-y-2 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider text-[11px]">
          <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Safer Next Step</span>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Verify the claim using an official channel you find independently (e.g. the phone number printed on the back of your ATM card or official government portal) rather than using contact details supplied in the suspicious message.
        </p>
      </div>
    </div>
  );
}
