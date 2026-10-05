import React, { useState } from "react";
import { Share2, AlertCircle, ShieldCheck } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function SocialChecker() {
  const { showToast } = useApp();
  const [platform, setPlatform] = useState("facebook");
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleClonedText = "Dai, I had a sudden medical emergency in Pokhara and my bank card is stuck. Please send Rs. 10,000 to this pharmacy eSewa urgently. I will return it by tomorrow evening.";

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("Please paste the social media post, DM, or chat message.");
      return;
    }

    setError(null);
    setLoading(true);

    const aggregated = `
Social Media Analysis (${platform.toUpperCase()}):
Content: ${content}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, `Social Media (${platform})`);
      setResult(assessment);
      setLoading(false);
      showToast("Social media message evaluated.", "info");
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Social Media Scam Checker" 
        description="Verify suspicious Facebook posts, Instagram DMs, Telegram task channels, and WhatsApp emergency money requests in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Share2 className="w-4 h-4" />
          <span>Social Engineering & Impersonation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Social Media Scam Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Inspect messages from Facebook, Instagram, Messenger, TikTok, Telegram, or WhatsApp. We analyze the linguistic patterns and warning signs of the content itself.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Select Social Platform
            </label>
            <div className="flex flex-wrap gap-2">
              {["facebook", "instagram", "whatsapp", "messenger", "telegram", "tiktok", "viber"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatform(p)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors cursor-pointer ${
                    platform === p
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Message or Post Text *
            </label>
            <textarea
              rows={4}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste the chat message, DM, or post text here..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{loading ? "Analyzing..." : "Analyze Message"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setContent(sampleClonedText);
                  setPlatform("messenger");
                }}
                className="px-3 py-2 text-xs font-medium text-sky-600 hover:underline cursor-pointer"
              >
                Load Example
              </button>
            </div>
          </div>
        </form>
      </div>

      {result && (
        <div className="pt-2 animate-in fade-in duration-300">
          <RiskAssessment result={result} onReset={() => setResult(null)} />
        </div>
      )}
    </div>
  );
}
