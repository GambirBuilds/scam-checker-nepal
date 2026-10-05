import React, { useState } from "react";
import { 
  GitFork, 
  ArrowRight, 
  ShieldAlert, 
  HelpCircle, 
  CheckCircle2, 
  Clock,
  Layers,
  ChevronRight
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { scamEvolutionTypes } from "../data/scamEvolution.js";

export function ScamEvolution() {
  const [selectedTypeId, setSelectedTypeId] = useState("job");

  const currentType = scamEvolutionTypes.find(t => t.id === selectedTypeId) || scamEvolutionTypes[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Scam Evolution Tracker" 
        description="Explore the multi-stage progression of deceptive schemes from initial contact to follow-up pressure in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <GitFork className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Tactical Deconstruction</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam Evolution Tracker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Fraudsters rarely demand your entire life savings in the very first sentence. They guide victims through an escalating multi-step journey to dismantle skepticism. Select a threat model to deconstruct its lifecycle.
        </p>
      </div>

      {/* Threat Model Selector Pills */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          Select Fraud Category:
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {scamEvolutionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedTypeId(type.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer border shadow-2xs ${
                selectedTypeId === type.id
                  ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Threat Model Overview */}
      <div className="p-6 rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {currentType.name}
          </h2>
          <span className="text-xs text-sky-700 dark:text-sky-300 font-medium">
            ({currentType.nepaliName})
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {currentType.overview}
        </p>
      </div>

      {/* Stage Progression Flow */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-600" />
          <span>The 6 Progression Stages of This Scam</span>
        </h3>

        <div className="space-y-4">
          {currentType.stages.map((stg) => (
            <div
              key={stg.stageNumber}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center text-xs">
                    {stg.stageNumber}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                      {stg.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
                      Tactical Pretext: {stg.tactic}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold text-slate-400 self-start sm:self-auto">
                  Stage {stg.stageNumber} of 6
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {stg.description}
              </p>

              {stg.warningSigns?.length > 0 && (
                <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs space-y-1">
                  <span className="font-bold text-rose-800 dark:text-rose-300 text-[11px] uppercase tracking-wider block">
                    Warning Signs at this specific stage:
                  </span>
                  <ul className="space-y-1 text-rose-900/80 dark:text-rose-300/80">
                    {stg.warningSigns.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Educational Notice */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-[11px] text-slate-500 leading-relaxed">
        <strong>Educational Progression Model:</strong> Scam tactics adapt continuously. Recognising where an interaction sits along this psychological continuum allows you to interrupt the progression before financial or credential damage occurs.
      </div>
    </div>
  );
}
