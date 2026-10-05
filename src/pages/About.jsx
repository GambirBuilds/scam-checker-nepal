import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Target, HeartHandshake, Eye, Lock, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEOHead 
        title="About & Methodology" 
        description="Learn about the mission, values, and transparent local rule-based architecture powering Scam Checker Nepal." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Independent Digital Safety Platform</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          About Scam Checker Nepal
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium italic">
          "Think Before You Trust."
        </p>
      </div>

      {/* Mission */}
      <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Our Mission
        </h2>
        <p>
          As digital financial services like eSewa, Khalti, ConnectIPS, and mobile banking expand across Nepal, thousands of families are targeted by cyber extortionists, social media impersonators, and deceptive schemes every single day.
        </p>
        <p>
          <strong>Scam Checker Nepal</strong> was built as an open, accessible, community-first safety platform. We empower everyday citizens—students, parents, small shopkeepers, and overseas workers—to identify warning signs before parting with hard-earned savings.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            Zero-Storage Privacy
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            All text and heuristics are evaluated inside your browser. We never log, store, or sell message content.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            No Exaggerated Claims
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We never claim "100% guarantee". Fraud evolves constantly; our role is risk assessment and education.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            Empowerment Over Fear
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We reject sensationalist scare tactics. We provide calm, methodical steps that people can rely on during stressful moments.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            Nepal-Specific Context
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Tuned to Nepali and Romanized Nepali patterns (पिन माग्ने, paisa pathaunu, eSewa refund traps, foreign visa fraud).
          </p>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Our Assessment Methodology
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The engine does not rely on a single trigger word. Instead, it measures co-occurrences:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
          <li><strong>Urgency Multiplier:</strong> Pressure phrases ("within 2 hours", "today only") combined with payment or OTP demands multiply the assessed risk score.</li>
          <li><strong>Structural URL Indicators:</strong> Evaluates unencrypted HTTP protocols, IP address domains, and brand keyword stacking.</li>
          <li><strong>Linguistic Lexicon:</strong> Supports English, standard Nepali script, and phonetic Romanized Nepali idioms.</li>
        </ul>
      </div>

      <div className="pt-2 flex justify-start">
        <Link
          to="/check"
          className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-flex items-center gap-2"
        >
          <span>Try the Universal Checker</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
