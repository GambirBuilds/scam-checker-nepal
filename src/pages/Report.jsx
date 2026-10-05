import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Copy, Download, ShieldCheck, ArrowLeft } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { generateAssessmentReport, downloadReportFile, copyReportToClipboard } from "../utils/reportGenerator.js";
import { SEOHead } from "../components/SEOHead.jsx";

export function Report() {
  const { currentResult, showToast } = useApp();
  const [userNotes, setUserNotes] = useState("");
  const [copied, setCopied] = useState(false);

  // If no result in state, construct a baseline demo or fallback
  const activeResult = currentResult || {
    score: 68,
    riskLevel: "SUSPICIOUS",
    contentType: "Message",
    summary: "Demonstration assessment report template. Warning signs detected include urgency and sensitive OTP requests.",
    indicators: [
      {
        category: "Sensitive Information Request",
        title: "Request for Private Authentication Credentials",
        description: "The content asks for confidential security details such as OTPs or verification codes.",
        severity: "High",
        matchedPhrases: ["otp", "verification code"]
      },
      {
        category: "Artificial Urgency & Coercion",
        title: "Artificial Time Pressure & Threat of Loss",
        description: "Creates urgency to bypass critical thinking.",
        severity: "Medium",
        matchedPhrases: ["account will be blocked"]
      }
    ],
    recommendedActions: [
      "Never disclose your OTP, MPIN, or banking passwords.",
      "Verify the sender independently through official published directories."
    ],
    evaluatedAt: new Date().toISOString()
  };

  const reportText = generateAssessmentReport(activeResult, userNotes);

  const handleCopy = async () => {
    try {
      await copyReportToClipboard(activeResult, userNotes);
      setCopied(true);
      showToast("Report copied to clipboard.", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Failed to copy report.", "error");
    }
  };

  const handleDownload = () => {
    downloadReportFile(activeResult, userNotes);
    showToast("Report file downloaded.", "success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Official Safety Report Generator" 
        description="Generate formatted digital safety records to share with bank fraud desks or law enforcement." 
      />

      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <Link
          to="/check"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Checker</span>
        </Link>
        <span className="text-xs text-slate-400">
          Automated Risk Indicators
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Assessment Report Generator
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Export a clean, text-based document summarizing detected warning signs, risk scores, and recommended precautions to share with family members or include in police/bank complaints.
        </p>
      </div>

      {/* User Notes Input */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Add Incident Notes (Optional)
        </label>
        <textarea
          rows={3}
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
          placeholder="e.g. Caller phone number: 9801XXXXXX, claimed to represent eSewa customer desk..."
          className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? "Copied!" : "Copy Report"}</span>
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Report (.txt)</span>
          </button>
        </div>
      </div>

      {/* Formatted Report Preview */}
      <div className="p-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed whitespace-pre-wrap">
        {reportText}
      </div>
    </div>
  );
}
