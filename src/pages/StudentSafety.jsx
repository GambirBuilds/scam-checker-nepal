import React, { useState } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  CheckSquare, 
  HelpCircle, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { studentSafetyTopics, studentQuizQuestions, studentChecklistItems } from "../data/studentSafety.js";
import { useApp } from "../context/AppContext.jsx";

export function StudentSafety() {
  const { showToast } = useApp();
  const [activeTab, setActiveTab] = useState("learn");
  const [checklistState, setChecklistState] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleChecklist = (idx) => {
    setChecklistState(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleSelectQuizOption = (qId, optIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    setQuizSubmitted(true);
    showToast("Quiz submitted! Review your score below.", "success");
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const checklistCompletedCount = Object.values(checklistState).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Student & Campus Cyber Defense Mode" 
        description="Comprehensive digital fraud defense tailored for college students, scholarship applicants, and young jobseekers in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Campus & Youth Defense</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Student & College Safety Mode
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Students are prime targets for fake part-time jobs, scholarship traps, gaming account phishing, and secondhand marketplace fraud. Master your defense across 4 interactive modules.
        </p>
      </div>

      {/* 4 Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab("learn")}
          className={`pb-3 px-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "learn"
              ? "border-sky-600 text-sky-600 dark:text-sky-400"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Learn (9 Threats)</span>
        </button>

        <button
          onClick={() => setActiveTab("quiz")}
          className={`pb-3 px-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "quiz"
              ? "border-sky-600 text-sky-600 dark:text-sky-400"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>2. Quick Quiz</span>
        </button>

        <button
          onClick={() => setActiveTab("checklist")}
          className={`pb-3 px-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === "checklist"
              ? "border-sky-600 text-sky-600 dark:text-sky-400"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>3. Student Defense Checklist ({checklistCompletedCount}/{studentChecklistItems.length})</span>
        </button>
      </div>

      {/* TAB 1: LEARN */}
      {activeTab === "learn" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {studentSafetyTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>

                  <div className="pt-1 space-y-1">
                    <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider block">
                      Warning Signs:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {topic.warningSigns.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200 space-y-1 mt-2">
                  <span className="font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>How to Protect Yourself</span>
                  </span>
                  <p className="leading-relaxed">
                    {topic.protection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: QUIZ */}
      {activeTab === "quiz" && (
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Campus Cyber Threat Quiz
            </h3>
            <p className="text-xs text-slate-500">
              Test your ability to spot manipulative employment, gaming, and scholarship schemes.
            </p>
          </div>

          <form onSubmit={handleSubmitQuiz} className="space-y-6">
            {studentQuizQuestions.map((q, idx) => (
              <div key={q.id} className="space-y-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-xs">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                  {idx + 1}. {q.question}
                </h4>

                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = quizAnswers[q.id] === oIdx;

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectQuizOption(q.id, oIdx)}
                        className={`w-full p-3 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          quizSubmitted
                            ? opt.isCorrect
                              ? "bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-900 dark:text-emerald-200"
                              : isSelected
                              ? "bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-900 dark:text-rose-200"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60"
                            : isSelected
                            ? "bg-sky-50 dark:bg-sky-950 border-sky-500 text-sky-900 dark:text-sky-200"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        <span>{opt.text}</span>
                        {quizSubmitted && opt.isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {quizSubmitted && isSelected && !opt.isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                    <strong>Explanation:</strong> {q.explanation}
                  </p>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              {quizSubmitted ? (
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Quiz</span>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={Object.keys(quizAnswers).length < studentQuizQuestions.length}
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white cursor-pointer shadow-xs"
                >
                  Submit Quiz Answers
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* TAB 3: CHECKLIST */}
      {activeTab === "checklist" && (
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Campus Security Checklist
            </h3>
            <p className="text-xs text-slate-500">
              Check off these standard personal cybersecurity defenses.
            </p>
          </div>

          <div className="space-y-3">
            {studentChecklistItems.map((item, idx) => {
              const isChecked = Boolean(checklistState[idx]);

              return (
                <label
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    isChecked
                      ? "bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-800 text-slate-900 dark:text-slate-100"
                      : "bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="w-4 h-4 mt-0.5 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs flex items-center justify-between">
            <span className="font-bold text-sky-900 dark:text-sky-200">
              Your Checklist Score: {checklistCompletedCount} of {studentChecklistItems.length} active defenses
            </span>
            {checklistCompletedCount === studentChecklistItems.length && (
              <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                ALL DEFENSES VERIFIED
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
