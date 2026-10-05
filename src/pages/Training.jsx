import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Award,
  ShieldCheck,
  Filter,
  Check
} from "lucide-react";
import { trainingScenarios } from "../data/trainingScenarios.js";
import { SEOHead } from "../components/SEOHead.jsx";
import { getLocalProgress, saveLocalProgress } from "../utils/storage.js";
import { useApp } from "../context/AppContext.jsx";

export function Training() {
  const { showToast } = useApp();
  const [selectedLevel, setSelectedLevel] = useState("ALL");
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState({});

  useEffect(() => {
    const progress = getLocalProgress();
    if (progress?.completedScenarioMap) {
      setCompletedScenarios(progress.completedScenarioMap);
    }
  }, []);

  const filteredScenarios = trainingScenarios.filter((s) => {
    if (selectedLevel === "ALL") return true;
    return s.level.toUpperCase() === selectedLevel.toUpperCase();
  });

  const currentScenario = filteredScenarios[activeScenarioIndex] || filteredScenarios[0];

  const handleSelectOption = (optionId) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
    setHasSubmitted(true);

    const isCorrect = currentScenario?.options?.find(o => o.id === optionId)?.isCorrect;
    if (isCorrect) {
      showToast("Safest option chosen!", "success");
    } else {
      showToast("Review the safety feedback below.", "info");
    }

    // Save completion locally
    if (currentScenario?.id) {
      const updated = { ...completedScenarios, [currentScenario.id]: true };
      setCompletedScenarios(updated);
      const totalCount = Object.keys(updated).length;
      saveLocalProgress({ 
        scenariosCompleted: totalCount,
        completedScenarioMap: updated
      });
    }
  };

  const handleNext = () => {
    if (activeScenarioIndex < filteredScenarios.length - 1) {
      setActiveScenarioIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setHasSubmitted(false);
    } else {
      showToast("Training session finished for this track!", "success");
    }
  };

  const handleResetCurrent = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const completedCount = Object.keys(completedScenarios).length;
  const totalScenarios = trainingScenarios.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="'What Would You Do?' Training Mode" 
        description="Interactive fictional cybersecurity training scenarios for practicing digital defense against fraud in Nepal." 
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Interactive Defense Practice</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            "What Would You Do?" Training Mode
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Practice making safe decisions in realistic simulated scenarios. Learn why cautious actions protect you and your family before encountering actual attacks in the wild.
          </p>
        </div>

        {/* Progress Pill */}
        <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs shrink-0 self-start sm:self-auto space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 block">
            Progress Tracked
          </span>
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <Award className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{completedCount} / {totalScenarios} Completed</span>
          </div>
        </div>
      </div>

      {/* Level Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Difficulty:</span>
        </span>
        {["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCED"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => {
              setSelectedLevel(lvl);
              setActiveScenarioIndex(0);
              setSelectedOptionId(null);
              setHasSubmitted(false);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
              selectedLevel === lvl
                ? "bg-sky-600 text-white border-sky-600 shadow-2xs"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Scenario Card */}
      {currentScenario && (
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          {/* Card Top Meta */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                currentScenario.level === "BEGINNER"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                  : currentScenario.level === "INTERMEDIATE"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                  : "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
              }`}>
                {currentScenario.level}
              </span>
              <span className="text-xs text-slate-400">
                Scenario {activeScenarioIndex + 1} of {filteredScenarios.length}
              </span>
            </div>

            {completedScenarios[currentScenario.id] && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Completed</span>
              </span>
            )}
          </div>

          {/* Context & Message */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {currentScenario.title}
            </h3>
            <p className="text-xs text-slate-500 italic">
              Context: {currentScenario.context}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
              "{currentScenario.message}"
            </div>
          </div>

          {/* Question */}
          <div className="pt-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{currentScenario.question}</span>
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {currentScenario.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = "border-slate-200 dark:border-slate-800 hover:border-sky-300 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200";

                if (hasSubmitted) {
                  if (opt.isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20";
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = "border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20";
                  } else {
                    btnStyle = "border-slate-200 dark:border-slate-800 opacity-60 bg-white dark:bg-slate-900";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={hasSubmitted}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-start gap-3 shadow-2xs ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {opt.id}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt.text}</span>
                    {hasSubmitted && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {hasSubmitted && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Educational Explanation */}
          {hasSubmitted && (
            <div className="p-4 sm:p-5 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 text-xs space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider text-[11px]">
                  Safety Insight
                </span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {currentScenario.options.find(o => o.id === selectedOptionId)?.feedback}
              </p>

              <div className="pt-2 border-t border-sky-200/60 dark:border-sky-900 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
                <span><strong>Core Lesson:</strong> {currentScenario.lesson}</span>
                <span className="text-sky-700 dark:text-sky-400">Tactic: {currentScenario.tacticIdentified}</span>
              </div>
            </div>
          )}

          {/* Controls Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            {hasSubmitted ? (
              <button
                type="button"
                onClick={handleResetCurrent}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Scenario Again</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400">Select an option above to test your instincts.</span>
            )}

            {hasSubmitted && (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-1.5 cursor-pointer shadow-xs ml-auto"
              >
                <span>{activeScenarioIndex < filteredScenarios.length - 1 ? "Next Scenario" : "Finish Practice"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Fictional Disclaimer */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-[11px] text-slate-500 leading-relaxed">
        <strong>Fictional Educational Scenarios Notice:</strong> All scenarios, numbers, and messages in this training module are strictly fictional educational models designed to illustrate deceptive patterns. They do not represent real individuals or confidential cases.
      </div>
    </div>
  );
}
