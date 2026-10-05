import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function Results() {
  const { currentResult } = useApp();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <SEOHead 
        title="Security Assessment Results" 
        description="View detailed breakdown of warning indicators, risk score, and recommended safety steps."
      />

      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Checker</span>
        </button>

        <span className="text-xs text-slate-400">
          Result ID: {currentResult ? "Active Session" : "None"}
        </span>
      </div>

      {currentResult ? (
        <RiskAssessment 
          result={currentResult} 
          onReset={() => navigate("/check")} 
        />
      ) : (
        <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            No Active Assessment Found
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            You haven't run an assessment in this session yet or your browser cache was refreshed.
          </p>
          <div className="pt-2">
            <Link
              to="/check"
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-block"
            >
              Start New Check
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
