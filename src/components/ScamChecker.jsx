import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ShieldCheck, 
  RotateCcw, 
  Sparkles, 
  AlertCircle, 
  MessageSquare, 
  Link2, 
  Briefcase, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  TrendingUp, 
  Mail, 
  Share2 
} from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { validateTextInput } from "../utils/validation.js";
import { RiskAssessment } from "./RiskAssessment.jsx";
import { scamExamples } from "../data/scamExamples.js";
import { useApp } from "../context/AppContext.jsx";

export function ScamChecker({ initialType = "message", compact = false }) {
  const { setCurrentResult, showToast, t } = useApp();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(initialType);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const contentTypes = [
    { id: "message", label: "Message / SMS", icon: MessageSquare },
    { id: "url", label: "Website Link", icon: Link2 },
    { id: "job", label: "Job Offer", icon: Briefcase },
    { id: "shopping", label: "Shopping Deal", icon: ShoppingBag },
    { id: "payment", label: "Payment / QR", icon: CreditCard },
    { id: "delivery", label: "Delivery SMS", icon: Truck },
    { id: "investment", label: "Investment", icon: TrendingUp },
    { id: "email", label: "Email", icon: Mail },
    { id: "social", label: "Social Media", icon: Share2 }
  ];

  const handleCheck = (e) => {
    if (e) e.preventDefault();
    const validation = validateTextInput(content, 3, 8000);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }
    setError(null);
    setIsLoading(true);

    // Fast responsive local evaluation
    setTimeout(() => {
      try {
        const assessment = analyzeContent(content, selectedType);
        setResult(assessment);
        setCurrentResult(assessment);
        setIsLoading(false);
        showToast("Risk assessment completed.", "info");
      } catch (err) {
        setIsLoading(false);
        setError("An unexpected error occurred during evaluation. Please try again.");
      }
    }, 280);
  };

  const handleClear = () => {
    setContent("");
    setError(null);
    setResult(null);
  };

  const loadExample = (sampleText, cat = "message") => {
    setContent(sampleText);
    setSelectedType(cat);
    setError(null);
    setResult(null);
    showToast("Loaded educational example into checker.", "info");
  };

  return (
    <div className="w-full space-y-6">
      {/* Type Selector (Segmented Tabs) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {contentTypes.map((type) => {
          const Icon = type.icon;
          const isActive = selectedType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => {
                setSelectedType(type.id);
                if (result) setResult(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{type.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Checker Form */}
      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleCheck} className="space-y-4">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="suspicious-content-input" 
              className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100"
            >
              Paste Suspicious Content Below
            </label>
            <span className="text-[11px] text-slate-500 font-tabular">
              {content.length} / 8000 {t.checker.charCount}
            </span>
          </div>

          <div className="relative">
            <textarea
              id="suspicious-content-input"
              rows={compact ? 4 : 6}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (error) setError(null);
              }}
              placeholder={t.checker.placeholder}
              className={`w-full p-4 rounded-xl border text-sm text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-950/60 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all font-sans leading-relaxed ${
                error 
                  ? "border-rose-400 dark:border-rose-600 ring-1 ring-rose-400" 
                  : "border-slate-200 dark:border-slate-800"
              }`}
            />
          </div>

          {/* Validation Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Sensitive Data Notice Warning */}
          <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900 text-slate-600 dark:text-slate-300 text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Privacy Protection:</strong> Never enter your actual password, OTP, ATM PIN, or card CVV here. We assess text patterns locally in your browser.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Indicators...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Run Risk Assessment</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClear}
                disabled={isLoading || (!content && !result)}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

            {/* Quick Link to Dedicated Checkers */}
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>Need special analysis?</span>
              <button
                type="button"
                onClick={() => navigate("/check/url")}
                className="text-sky-600 dark:text-sky-400 font-medium hover:underline cursor-pointer"
              >
                URL Inspector
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => navigate("/check/screenshot")}
                className="text-sky-600 dark:text-sky-400 font-medium hover:underline cursor-pointer"
              >
                Screenshot
              </button>
            </div>
          </div>
        </form>

        {/* Educational Demo Examples Quick-Select */}
        <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Try a realistic educational scenario:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {scamExamples.slice(0, 4).map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => loadExample(ex.sampleText, ex.riskCategory)}
                className="px-2.5 py-1.5 text-xs text-left rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                {ex.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render Results when analyzed */}
      {result && (
        <div className="pt-2 animate-in fade-in duration-300">
          <RiskAssessment result={result} onReset={handleClear} />
        </div>
      )}
    </div>
  );
}
