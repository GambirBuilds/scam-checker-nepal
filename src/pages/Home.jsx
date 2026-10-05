import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  AlertTriangle, 
  Link2, 
  Briefcase, 
  ShoppingBag, 
  CreditCard, 
  Camera, 
  QrCode, 
  Users, 
  GraduationCap, 
  Lock,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { ScamChecker } from "../components/ScamChecker.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { scamAlerts } from "../data/alerts.js";
import { scamTypes } from "../data/scamTypes.js";
import { useApp } from "../context/AppContext.jsx";

export function Home() {
  const { t } = useApp();
  const navigate = useNavigate();

  const specializedTools = [
    {
      to: "/check/url",
      title: "URL & Website Link Inspector",
      desc: "Analyze unencrypted connections, IP addresses, suspicious domain extensions, and lookalike domains.",
      icon: Link2,
      badge: "Links"
    },
    {
      to: "/check/job",
      title: "Job & Work-From-Home Checker",
      desc: "Identify task-based YouTube scams, upfront training fee traps, and unauthorized foreign employment offers.",
      icon: Briefcase,
      badge: "Careers"
    },
    {
      to: "/check/shopping",
      title: "Online Shopping Deal Checker",
      desc: "Evaluate 70%+ discount claims, advance-payment demands on Instagram/TikTok, and fake clearance sales.",
      icon: ShoppingBag,
      badge: "E-Commerce"
    },
    {
      to: "/check/payment",
      title: "eSewa, Khalti & QR Scam Checker",
      desc: "Verify accidental transfer claims, reverse QR code traps, and unauthorized wallet fund demands.",
      icon: CreditCard,
      badge: "Fintech"
    },
    {
      to: "/check/screenshot",
      title: "Screenshot & Image Checker",
      desc: "Upload screenshots of suspicious chats, SMS, or emails for structural safety evaluation.",
      icon: Camera,
      badge: "Visual"
    },
    {
      to: "/check/qr",
      title: "QR Code Safety Inspection",
      desc: "Learn why scanning a QR code never deposits money to your account, and inspect payment destinations.",
      icon: QrCode,
      badge: "QR Security"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      <SEOHead 
        title="Think Before You Trust" 
        description="Nepal's digital safety and scam awareness platform. Check suspicious messages, links, job offers, payment requests, and online deals before you trust."
      />

      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1.5 rounded-md bg-sky-100/70 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
                <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Nepal Digital Safety & Fraud Awareness</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-[1.15] text-balance">
                Not Sure If It's a Scam? <br />
                <span className="text-sky-600 dark:text-sky-400">Check Before You Click.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Check suspicious messages, links, job offers, payment requests, online deals, and other common scam warning signs before parting with your money or credentials.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#checker-section"
                  className="px-5 py-3 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Check Now</span>
                </a>

                <Link
                  to="/safety-guide"
                  className="px-5 py-3 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2"
                >
                  <span>Learn How to Stay Safe</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Lock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Risk assessment only. Always independently verify important information.</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 aspect-16/10 sm:aspect-16/9 lg:aspect-4/3">
                <img 
                  src="/src/assets/images/nepal_safety_hero_1791171681202.jpg" 
                  alt="Scam Checker Nepal Digital Safety Illustration" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Transparent Local Evaluation</p>
                    <p className="text-slate-300 text-[11px]">No message data is sent to external servers or logged.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Universal Scam Checker Section */}
      <section id="checker-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <span>Universal Risk Engine</span>
            <span>·</span>
            <span>Browser-Based Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Check Any Suspicious Content
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Paste suspicious SMS, Telegram chat, email text, job description, or payment message.
          </p>
        </div>

        <ScamChecker />
      </section>

      {/* Specialized Checkers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
              Purpose-Built Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Specialized Threat Checkers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Inspect URLs, job applications, social e-commerce, and wallet payment requests with domain-tailored forms.
            </p>
          </div>
          <Link 
            to="/check" 
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Explore all checkers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specializedTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.to}
                to={tool.to}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-700 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{tool.badge}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {tool.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span>Open Tool</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Scam Types Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              15 Verified Scam Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Scam Type Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore documented modus operandi in Nepal: from OTP thefts and fake eSewa QR tricks to overseas job visa demands and crypto Ponzi traps.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/scam-types"
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                Browse All 15 Categories
              </Link>
              <Link
                to="/patterns"
                className="px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 transition-colors"
              >
                Search Pattern Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Scam Alerts Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Scam Alert Center</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Recent Threat Advisories
            </h2>
          </div>
          <Link
            to="/alerts"
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
          >
            View all alerts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scamAlerts.slice(0, 3).map((alert) => (
            <div
              key={alert.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {alert.category}
                  </span>
                  <span>{alert.date}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                  {alert.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {alert.recommendation}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="italic">Demo / Educational Example</span>
                <Link to="/alerts" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Family & Quiz Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Family Mode Card */}
          <div className="p-7 rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Family Safety Mode
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Designed specifically for parents, older adults, and non-technical family members with high-contrast text, simplified Nepali/English toggle, and large touch targets.
              </p>
            </div>
            <div className="pt-5">
              <Link
                to="/family-mode"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Launch Family Mode</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quiz Card */}
          <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Digital Safety Knowledge Quiz
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Test your awareness against real-world Nepali phishing scenarios, payment traps, and social media cloning tricks with instant feedback.
              </p>
            </div>
            <div className="pt-5">
              <Link
                to="/quiz"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Start 8-Question Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
