import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  MousePointer, 
  CreditCard, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { safetyTips } from "../data/safetyTips.js";
import { SEOHead } from "../components/SEOHead.jsx";

export function SafetyGuide() {
  const [activeSection, setActiveSection] = useState("before-clicking");

  const sections = [
    { id: "before-clicking", label: "Before Clicking Links", icon: MousePointer },
    { id: "before-paying", label: "Before Paying Money", icon: CreditCard },
    { id: "before-sharing", label: "Before Sharing Info", icon: Lock },
    { id: "if-victim", label: "If You Are Targeted", icon: AlertTriangle }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEOHead 
        title="Digital Scam Safety Guide" 
        description="Comprehensive defensive guide for internet and mobile users in Nepal: before clicking, before paying, before sharing data, and emergency recovery." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Practical Cyber Defense Manual</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Digital Safety Guide
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Clear, step-by-step procedures to defend your personal accounts, digital wallets, and family savings from manipulation and social engineering.
        </p>
      </div>

      {/* Independent Verification Banner (Section 34) */}
      <div className="p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 text-sky-950 dark:text-sky-100 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold">
          <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>Core Doctrine: The Independent Verification Rule</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-sky-900 dark:text-sky-200">
          <strong>Never use the phone number, email, or link provided inside a suspicious message itself.</strong> If a text claims to be from your bank, police, or airline:
        </p>
        <ol className="space-y-1.5 text-xs sm:text-sm list-decimal list-inside text-sky-800 dark:text-sky-300">
          <li>Close the message and open a fresh web browser tab.</li>
          <li>Search manually for the verified official website of the institution.</li>
          <li>Locate their official landline or headquarter telephone number.</li>
          <li>Call them independently to inquire if the request was legitimate.</li>
        </ol>
      </div>

      {/* Segmented Filter Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <div className="space-y-6">
        {activeSection === "before-clicking" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Before Clicking Links
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  1. Check the Full Domain Address
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fraudsters buy domains like <code className="text-rose-600 bg-rose-50 px-1 py-0.5 rounded">esewa-security.cc</code> or <code className="text-rose-600 bg-rose-50 px-1 py-0.5 rounded">nic-asia-verify.xyz</code>. Official Nepal government domains strictly end with <code className="text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">.gov.np</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  2. Beware of URL Shorteners in SMS
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Links starting with bit.ly, tinyurl, or t.co inside unexpected SMS messages obscure the final destination. Avoid clicking them on mobile phones where full URLs are hidden.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  3. Never Type Passwords on Browser Popups
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  If clicking a link prompts you to log into Facebook, Instagram, or your bank, stop immediately. Close the tab and open the legitimate application independently.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "before-paying" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Before Paying Money
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  1. Never Pay Upfront to Receive a Job or Prize
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Genuine employers pay you for working; they do not ask for registration fees, training deposits, or uniform costs. Genuine prize lotteries deduct taxes from the payout.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  2. Remember: You Never Scan a QR Code to Receive Money
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Scanning a QR code in eSewa, Khalti, or mobile banking and typing your MPIN transfers money OUT. To receive funds, you only ever need to share your phone number or account number.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  3. Insist on Cash on Delivery (COD) for New Social Sellers
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Unverified Instagram or TikTok boutiques demanding 100% advance wallet transfer for electronics or clothing carry extreme non-delivery risks.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "before-sharing" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Before Sharing Information
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  1. OTPs Are Private Digital Signatures
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  No bank, wallet provider, or telecom support representative is authorized to ask for your SMS code. If someone asks for your OTP, hang up.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  2. Do Not Send Citizenship Photos Over WhatsApp
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fraudsters collect scans of citizenship certificates and passports to register SIM cards in your name or open fraudulent digital wallets used for money laundering.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "if-victim" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              If You Suspect or Suffered Fraud
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  Step 1: Freeze Affected Accounts Immediately
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Call your bank or wallet support (eSewa / Khalti) immediately to freeze cards or transaction access.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  Step 2: Preserve All Evidence
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Do not delete the chat. Take screenshots of full conversations, phone numbers, payment reference IDs, and profile URLs.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                  Step 3: File a Formal Report
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Contact Nepal Police Cyber Bureau (01-4412555) or visit your district police station with printed copies of your evidence.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Safety Tips Highlight List */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Core Safety Principles (Quick Reference)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {safetyTips.slice(0, 6).map((tip) => (
            <div key={tip.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                {tip.category}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                {tip.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {tip.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
