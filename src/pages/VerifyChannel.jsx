import React, { useState } from "react";
import { 
  CheckCircle2, 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle,
  Building,
  Truck,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Users,
  Landmark,
  Info
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { verificationGuides } from "../data/channelVerification.js";

const ICONS = {
  "verify-banks": Landmark,
  "verify-couriers": Truck,
  "verify-government": Building,
  "verify-universities": GraduationCap,
  "verify-employers": Briefcase,
  "verify-marketplaces": ShoppingBag,
  "verify-social": Users
};

export function VerifyChannel() {
  const [activeGuideId, setActiveGuideId] = useState("verify-banks");

  const currentGuide = verificationGuides.find(g => g.id === activeGuideId) || verificationGuides[0];
  const Icon = ICONS[currentGuide.id] || Landmark;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Official Channel Verification Guide" 
        description="Learn how to independently verify commercial banks, couriers, government ministries, employers, and sellers in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Independent Channel Verification</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Official Channel Verification Guide
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Never rely on phone numbers, links, or bank accounts provided inside an unsolicited message. Learn how to verify any entity independently before committing funds or information.
        </p>
      </div>

      {/* Strict Anti-Fake Disclaimer */}
      <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/70 dark:bg-sky-950/30 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-slate-900 dark:text-slate-100 block">
            Independent Verification Methodology
          </span>
          <p className="leading-relaxed">
            We do not claim: <em>"This company is officially verified."</em> Genuine security requires that you reach out through an independently confirmed public channel (such as a physical passbook or official .gov.np directory) that attackers cannot control.
          </p>
        </div>
      </div>

      {/* Sector Navigation Selector */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          Select Organization Category to Verify:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {verificationGuides.map((guide) => {
            const GIcon = ICONS[guide.id] || Landmark;
            const isSelected = activeGuideId === guide.id;

            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => setActiveGuideId(guide.id)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                  isSelected
                    ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                }`}
              >
                <GIcon className="w-4 h-4" />
                <span className="truncate w-full text-[11px]">{guide.target.split(",")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Guide Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                {currentGuide.category}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                How to verify: {currentGuide.target}
              </h2>
            </div>
          </div>

          {currentGuide.registryUrl && (
            <a
              href={currentGuide.registryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>{currentGuide.officialRegistry}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Verification Steps */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Step-by-Step Verification Protocol:
          </h3>
          <div className="space-y-2.5">
            {currentGuide.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{st}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Red Flags to Spot */}
        <div className="p-4 sm:p-5 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20 space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Red Flags to Spot in Fake Communications:</span>
          </div>
          <ul className="space-y-1.5 text-rose-900/80 dark:text-rose-300/80 leading-relaxed pl-2">
            {currentGuide.redFlagsToSpot.map((rf, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>{rf}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
