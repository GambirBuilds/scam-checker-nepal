import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from "lucide-react";
import { quizQuestions } from "../data/quizQuestions.js";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function Quiz() {
  const { showToast } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const progressPercent = Math.round(((currentIndex) / quizQuestions.length) * 100);

  const handleSelectOption = (idx) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    if (currentQ.options[idx].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setIsCompleted(true);
      showToast("Quiz finished! Review your awareness score.", "success");
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  const finalPercentage = Math.round((score / quizQuestions.length) * 100);

  let badgeLabel = "FOUNDATIONAL AWARENESS";
  if (finalPercentage >= 85) badgeLabel = "EXCELLENT DIGITAL SAFETY GUARDIAN";
  else if (finalPercentage >= 65) badgeLabel = "STRONG AWARENESS";
  else if (finalPercentage >= 45) badgeLabel = "GROWING AWARENESS";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Scam Awareness Quiz" 
        description="Test your knowledge against common phishing tactics, OTP theft, and payment scams in Nepal with instant explanations." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60">
          <GraduationCap className="w-4 h-4" />
          <span>Interactive Learning</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam Awareness Quiz
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          Evaluate your risk recognition instincts through realistic scenarios. No shame, just practical digital defense skills.
        </p>
      </div>

      {!isCompleted ? (
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          {/* Progress Indicator */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
              <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
              <span className="font-semibold text-sky-600 dark:text-sky-400">{currentQ.category}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-sky-600 h-full transition-all duration-300 ease-out" 
                style={{ width: `${Math.max(5, progressPercent)}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnStyle = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:border-sky-300";

              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium";
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = "border-rose-400 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200";
                } else {
                  btnStyle = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt.text}</span>
                  {hasAnswered && opt.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Explanation Box */}
          {hasAnswered && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 animate-in fade-in">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
                Safety Explanation:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {hasAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIndex + 1 === quizQuestions.length ? "Finish Quiz" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Complete Screen */
        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
              Quiz Completed
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-extrabold text-sky-600 dark:text-sky-400 font-tabular">
                {finalPercentage}%
              </span>
            </div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {badgeLabel}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            You scored {score} out of {quizQuestions.length} questions correctly. Regular practice builds sharp instincts to protect your family and savings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
            <Link
              to="/safety-guide"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors"
            >
              Read Safety Guide
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
