import React, { useState } from "react";
import { Briefcase, AlertCircle, RotateCcw, ShieldCheck } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function JobChecker() {
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    salary: "",
    location: "",
    description: "",
    website: "",
    message: "",
    requestedPayment: ""
  });

  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!formData.position.trim() && !formData.description.trim() && !formData.message.trim()) {
      setError("Please provide at least a Job Position, Job Description, or the Recruiter's Message.");
      return;
    }

    setError(null);
    setLoading(true);

    // Combine structured fields into comprehensive evaluation text
    const aggregated = `
Job Offer Analysis:
Company: ${formData.company}
Position: ${formData.position}
Salary: ${formData.salary}
Location: ${formData.location}
Website: ${formData.website}
Payment Demanded: ${formData.requestedPayment}
Description: ${formData.description}
Message: ${formData.message}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Job Offer");
      
      // Additional heuristic checks for job fields
      const hasPayment = formData.requestedPayment && formData.requestedPayment.trim() !== "0" && !formData.requestedPayment.toLowerCase().includes("none");
      if (hasPayment) {
        assessment.score = Math.min(100, assessment.score + 35);
        if (assessment.score >= 71) assessment.riskLevel = "HIGH RISK";
        else if (assessment.score >= 41) assessment.riskLevel = "SUSPICIOUS";

        assessment.indicators.unshift({
          category: "Upfront Recruitment Fee",
          title: "Advance Fee or Deposit Required for Job",
          description: `Applicant is asked to pay "${formData.requestedPayment}". Authentic employers never demand money from candidates to secure employment.`,
          severity: "High",
          weight: 35,
          matchedPhrases: [formData.requestedPayment]
        });
      }

      setResult(assessment);
      setLoading(false);
      showToast("Job offer assessment completed.", "info");
    }, 250);
  };

  const handleReset = () => {
    setFormData({
      company: "",
      position: "",
      salary: "",
      location: "",
      description: "",
      website: "",
      message: "",
      requestedPayment: ""
    });
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Job & Work-From-Home Scam Checker" 
        description="Verify suspicious job offers, task scams, upfront training fee demands, and overseas employment promises in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Briefcase className="w-4 h-4" />
          <span>Employment Fraud Evaluation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Job Scam Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Analyze job offers, work-from-home tasks, online data entry positions, and foreign employment demands. We evaluate indicators like upfront fees, lack of interviews, and excessive salary claims.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Global Media Marketing Ltd."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Position / Role *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g. YouTube Video Reviewer / Airport Helper"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Advertised Salary
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g. NPR 5,000 / day or 1.8 Lakhs / month"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Requested Payment / Deposit (if any)
              </label>
              <input
                type="text"
                name="requestedPayment"
                value={formData.requestedPayment}
                onChange={handleChange}
                placeholder="e.g. NPR 2,500 registration or uniform fee"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-rose-950 dark:text-rose-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Recruiter's Message / Offer Description *
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Paste the SMS, WhatsApp text, or Telegram message you received regarding this job..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{loading ? "Evaluating Offer..." : "Evaluate Job Offer"}</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="pt-2 animate-in fade-in duration-300">
          <RiskAssessment result={result} onReset={handleReset} />
        </div>
      )}
    </div>
  );
}
