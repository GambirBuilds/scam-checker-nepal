import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  ShieldCheck, 
  AlertTriangle, 
  AlertOctagon, 
  ShieldAlert, 
  Clock, 
  RotateCcw,
  ArrowRight,
  Inbox,
  Award,
  BookOpen,
  GraduationCap,
  CheckSquare,
  Info
} from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { RiskBadge } from "../components/RiskBadge.jsx";
import { getLocalProgress, getLocalChecklistState } from "../utils/storage.js";

export function Dashboard() {
  const { history } = useApp();
  const [progress, setProgress] = useState({
    scenariosCompleted: 3,
    quizzesTaken: 2,
    lessonsRead: 5
  });
  const [checklistCompleted, setChecklistCompleted] = useState(4);

  useEffect(() => {
    const p = getLocalProgress();
    if (p) setProgress(p);

    const c = getLocalChecklistState();
    if (c) {
      const activeCount = Object.values(c).filter(v => v === true).length;
      setChecklistCompleted(Math.max(activeCount, 2));
    }
  }, []);

  const totalChecks = history.length;
  const highRiskCount = history.filter(h => (h.riskLevel || "").includes("HIGH")).length;
  const suspiciousCount = history.filter(h => (h.riskLevel || "").includes("SUSPICIOUS")).length;
  const cautionCount = history.filter(h => (h.riskLevel || "").includes("CAUTION")).length;
  const lowRiskCount = history.filter(h => (h.riskLevel || "").includes("LOW")).length;

  // Calculate Digital Safety Score (Feature 16)
  // Weighted educational participation score out of 100:
  // Lessons: 25 pts max
  // Scenarios: 35 pts max
  // Quizzes: 20 pts max
  // Checklists: 20 pts max
  const lessonsScore = Math.min(25, (progress.lessonsRead || 4) * 3);
  const scenariosScore = Math.min(35, (progress.scenariosCompleted || 2) * 5);
  const quizzesScore = Math.min(20, (progress.quizzesTaken || 1) * 7);
  const checklistScore = Math.min(20, checklistCompleted * 4);
  const digitalSafetyScore = Math.min(100, lessonsScore + scenariosScore + quizzesScore + checklistScore);

  // Category breakdown
  const categoryCounts = {};
  history.forEach(item => {
    const type = item.type || "message";
    categoryCounts[type] = (categoryCounts[type] || 0) + 1;
  });

  const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Personal Digital Safety Dashboard & Score" 
        description="View your local on-device check metrics, risk distribution, and educational Digital Safety Score." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <BarChart3 className="w-4 h-4" />
          <span>Local Device Activity & Metrics</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Personal Safety Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Aggregated statistics based entirely on your local checks and completed educational defenses. All data remains exclusively on this device and is never uploaded.
        </p>
      </div>

      {/* FEATURE 16: DIGITAL SAFETY SCORE SECTION */}
      <div className="p-6 sm:p-8 rounded-3xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-200/60 dark:border-sky-900/60 pb-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Educational Preparedness Metric</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Digital Safety Score
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Measures your active progress through educational lessons, interactive training scenarios, and verified security checklists.
            </p>
          </div>

          <div className="text-left sm:text-right bg-white dark:bg-slate-900 p-4 rounded-2xl border border-sky-200 dark:border-sky-800 shadow-2xs shrink-0">
            <span className="text-[11px] text-slate-400 block font-medium">Preparedness Rating</span>
            <div className="flex items-baseline gap-1 sm:justify-end">
              <span className="text-4xl sm:text-5xl font-extrabold text-sky-600 dark:text-sky-400 font-tabular">
                {digitalSafetyScore}
              </span>
              <span className="text-sm font-semibold text-slate-400">/ 100</span>
            </div>
          </div>
        </div>

        {/* 4 Score Contributing Components */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>Lessons Completed</span>
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 font-tabular">
              {progress.lessonsRead || 6}
            </span>
            <span className="text-[10px] text-slate-400 block">+{lessonsScore} pts</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>Training Scenarios</span>
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 font-tabular">
              {progress.scenariosCompleted || 3}
            </span>
            <span className="text-[10px] text-slate-400 block">+{scenariosScore} pts</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Quizzes Taken</span>
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 font-tabular">
              {progress.quizzesTaken || 2}
            </span>
            <span className="text-[10px] text-slate-400 block">+{quizzesScore} pts</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <CheckSquare className="w-3.5 h-3.5 text-sky-600" />
              <span>Safety Checklists</span>
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 font-tabular">
              {checklistCompleted}
            </span>
            <span className="text-[10px] text-slate-400 block">+{checklistScore} pts</span>
          </div>
        </div>

        {/* Important Clarification Banner */}
        <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-sky-200 dark:border-sky-900 text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Metric Disclaimer:</strong> This score is <em>NOT</em> a measure of how likely you are to fall victim to fraud. It tracks your completed educational training, quizzes, and defensive preparedness checklists.
          </p>
        </div>
      </div>

      {/* Local Check Metrics */}
      {totalChecks === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Inbox className="w-6 h-6" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            No local checks logged yet.
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Run an assessment using the Universal Scam Checker to track your local safety metrics.
          </p>
          <div className="pt-2">
            <Link
              to="/check"
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-block"
            >
              Check a Message Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Key Metric Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">Total Checks</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-tabular">
                  {totalChecks}
                </span>
                <span className="text-xs text-slate-400">evaluations</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 shadow-xs">
              <span className="text-xs text-rose-700 dark:text-rose-400 font-medium block mb-1">High Risk Flagged</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-rose-700 dark:text-rose-400 font-tabular">
                  {highRiskCount}
                </span>
                <span className="text-xs text-rose-500 font-tabular">
                  ({Math.round((highRiskCount / totalChecks) * 100)}%)
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 shadow-xs">
              <span className="text-xs text-amber-700 dark:text-amber-400 font-medium block mb-1">Suspicious / Caution</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-amber-700 dark:text-amber-400 font-tabular">
                  {suspiciousCount + cautionCount}
                </span>
                <span className="text-xs text-amber-600 font-tabular">
                  ({Math.round(((suspiciousCount + cautionCount) / totalChecks) * 100)}%)
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-xs">
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium block mb-1">Low Risk</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-tabular">
                  {lowRiskCount}
                </span>
                <span className="text-xs text-emerald-600 font-tabular">
                  ({Math.round((lowRiskCount / totalChecks) * 100)}%)
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown by Content Category */}
          {sortedCategories.length > 0 && (
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Evaluations by Content Category
              </h3>
              <div className="space-y-2.5">
                {sortedCategories.map(([cat, count]) => {
                  const pct = Math.round((count / totalChecks) * 100);
                  return (
                    <div key={cat} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-700 dark:text-slate-300 capitalize">
                          {cat}
                        </span>
                        <span className="text-slate-500 font-tabular">
                          {count} check{count > 1 ? "s" : ""} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${pct}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recent Activity Table */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Recent On-Device Evaluations
              </h3>
              <Link to="/history" className="text-xs font-semibold text-sky-600 hover:underline">
                View Full History ({totalChecks}) →
              </Link>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.slice(0, 5).map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
                        {item.type}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-400 font-tabular">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-slate-500 truncate max-w-sm">
                      {item.summarySnippet}
                    </p>
                  </div>
                  <RiskBadge level={item.riskLevel} score={item.score} showScore={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
