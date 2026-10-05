import React, { useState } from "react";
import { 
  LifeBuoy, 
  AlertOctagon, 
  Key, 
  Lock, 
  CreditCard, 
  Link2, 
  UserCheck, 
  Monitor, 
  ShieldAlert,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Info
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { Link } from "react-router-dom";

const INCIDENT_CATEGORIES = [
  {
    id: "money_sent",
    title: "I Already Sent Money",
    nepaliTitle: "मैले पैसा पठाइसकें",
    icon: CreditCard,
    color: "bg-rose-600 text-white",
    steps: [
      {
        step: 1,
        title: "Stop All Communication",
        desc: "Do NOT send additional 'clearance fees' or 'tax deposits' even if the scammer claims it will release your previous money. Block their number."
      },
      {
        step: 2,
        title: "Contact Your Bank / Wallet Provider Immediately",
        desc: "Call your bank, eSewa, or Khalti helpline within minutes. Request a formal transaction freeze or dispute report on the recipient account number."
      },
      {
        step: 3,
        title: "Preserve Digital Transaction Receipts",
        desc: "Take screenshots of the transaction ID, date, time, recipient phone/account number, and chat logs before the chat is erased."
      },
      {
        step: 4,
        title: "File an Official Police Cyber Bureau Report",
        desc: "Submit an official complaint at Nepal Police Cyber Bureau, Bhotahiti, Kathmandu (Phone: 01-4412555) or at your local district police office."
      }
    ]
  },
  {
    id: "otp_shared",
    title: "I Shared My OTP / PIN",
    nepaliTitle: "मैले OTP वा पिन सुनाएँ",
    icon: Key,
    color: "bg-purple-600 text-white",
    steps: [
      {
        step: 1,
        title: "Block Your Digital Banking Immediately",
        desc: "Call your bank's 24/7 card and digital banking helpline or use the 'Freeze Account' feature inside your official mobile banking app immediately."
      },
      {
        step: 2,
        title: "Change Your Master Login Credentials",
        desc: "From a secure, uncompromised phone or laptop, immediately change your mobile banking password and transaction MPIN."
      },
      {
        step: 3,
        title: "Review Authorized Devices",
        desc: "Check the 'Active Devices' or 'Manage Devices' section in your banking app. Deregister any unfamiliar smartphones."
      },
      {
        step: 4,
        title: "Monitor Account Statements Closely",
        desc: "Review SMS debit notifications and transaction history for unauthorized debits. Document any unexpected withdrawals."
      }
    ]
  },
  {
    id: "password_shared",
    title: "I Shared My Password",
    nepaliTitle: "मैले पासवर्ड दिएँ",
    icon: Lock,
    color: "bg-amber-600 text-white",
    steps: [
      {
        step: 1,
        title: "Change Password Immediately",
        desc: "Log in right now to the affected account (Gmail, Facebook, eSewa) and change the password to a strong, unique 16+ character phrase."
      },
      {
        step: 2,
        title: "Log Out of All Active Sessions",
        desc: "In account security settings, select 'Log out of all other computers and phones' to immediately kick out the unauthorized intruder."
      },
      {
        step: 3,
        title: "Turn on Two-Factor Authentication (2FA)",
        desc: "Enable 2FA using Google Authenticator or Microsoft Authenticator app so future logins require physical phone confirmation."
      },
      {
        step: 4,
        title: "Check Recovery Email & Phone Number",
        desc: "Verify that the scammer did not alter your backup email or phone number in account settings."
      }
    ]
  },
  {
    id: "link_clicked",
    title: "I Clicked a Suspicious Link",
    nepaliTitle: "मैले शंकास्पद लिङ्कमा क्लिक गरेँ",
    icon: Link2,
    color: "bg-cyan-600 text-white",
    steps: [
      {
        step: 1,
        title: "Do Not Enter Any Information",
        desc: "If the page asks for passwords, usernames, or OTPs, close the browser tab immediately without typing anything."
      },
      {
        step: 2,
        title: "Clear Browser Cache and Cookies",
        desc: "Open your mobile browser settings and clear browsing data/cookies to remove tracking session tokens."
      },
      {
        step: 3,
        title: "Check For Unwanted File Downloads",
        desc: "Check your 'Downloads' folder. If any `.apk` or `.exe` file was downloaded automatically, DELETE IT IMMEDIATELY without opening."
      },
      {
        step: 4,
        title: "Scan Device for Unwanted Apps",
        desc: "Review your installed apps list for unknown utility or booster apps installed today."
      }
    ]
  },
  {
    id: "remote_access",
    title: "I Allowed Remote Access (AnyDesk / TeamViewer)",
    nepaliTitle: "मैले रिमोट एक्सेस (AnyDesk) दिएँ",
    icon: Monitor,
    color: "bg-red-700 text-white",
    steps: [
      {
        step: 1,
        title: "Disconnect Internet Immediately",
        desc: "Turn off Wi-Fi and mobile data on your phone or PC right now to instantly sever the scammer's live connection."
      },
      {
        step: 2,
        title: "Uninstall the Remote Application",
        desc: "Uninstall AnyDesk, TeamViewer, QuickSupport, or RustDesk completely from your device."
      },
      {
        step: 3,
        title: "Change All Passwords From a Separate Device",
        desc: "Use a different, secure phone or computer to change your banking, wallet, and email passwords immediately."
      },
      {
        step: 4,
        title: "Contact Your Bank to Freeze Transits",
        desc: "Inform your bank that unauthorized remote screen mirroring occurred so they can flag unusual outgoing transfers."
      }
    ]
  },
  {
    id: "personal_info",
    title: "I Shared My Citizenship / Documents",
    nepaliTitle: "मैले नागरिकता वा फोटो पठाएँ",
    icon: UserCheck,
    color: "bg-indigo-600 text-white",
    steps: [
      {
        step: 1,
        title: "Recognize Identity Theft Risks",
        desc: "Criminals use stolen citizenship photos to register fake SIM cards or open mule digital wallet accounts in your name."
      },
      {
        step: 2,
        title: "Check Registered Telecom SIM Cards",
        desc: "Dial your telecom operator shortcode (e.g., Ncell / NTC SIM verification) to ensure no unauthorized SIM cards have been issued under your citizenship."
      },
      {
        step: 3,
        title: "File an Informational Report with Nepal Police",
        desc: "Document that your identification document was obtained deceptively, creating an official paper trail in case of misuse."
      },
      {
        step: 4,
        title: "Alert Financial Institutions",
        desc: "Notify your primary bank so they add enhanced biometric verification requirements to in-branch or loan requests."
      }
    ]
  }
];

export function RecoveryNavigator() {
  const [activeTab, setActiveTab] = useState("money_sent");

  const activeCategory = INCIDENT_CATEGORIES.find(c => c.id === activeTab) || INCIDENT_CATEGORIES[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Scam Recovery Navigator" 
        description="General safe next steps and protocol if you have already sent money, shared an OTP, or clicked a suspicious link in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300 px-3 py-1 rounded-md bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900">
          <LifeBuoy className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>Incident Triage & Response</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam Recovery Navigator
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          If you have already sent money, shared an OTP, or clicked an unverified link, immediate calm action can minimize further harm. Follow these structured defense steps.
        </p>
      </div>

      {/* Explicit Disclaimer on Non-Recovery */}
      <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/30 text-xs text-rose-950 dark:text-rose-200 flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Important Notice: We Are Not an Official Recovery Service</span>
          <p className="leading-relaxed">
            Scam Checker Nepal is an independent educational tool. <strong>We cannot retrieve funds or cancel bank transfers.</strong> Never pay online 'recovery agents' or 'ethical hackers' who claim they can hack back your lost money—these are secondary recovery scams. Only authorized banks and law enforcement can freeze accounts.
          </p>
        </div>
      </div>

      {/* Incident Category Selector */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          Select What Happened:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {INCIDENT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between gap-2 cursor-pointer shadow-2xs ${
                  isSelected
                    ? "bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-200 border-sky-500 ring-2 ring-sky-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block leading-tight font-bold">{cat.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{cat.nepaliTitle}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step by Step Action Plan */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
            Action Protocol
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Immediate Response: {activeCategory.title}
          </h2>
        </div>

        <div className="space-y-4">
          {activeCategory.steps.map((stg) => (
            <div
              key={stg.step}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 space-y-1 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs shrink-0">
                  {stg.step}
                </span>
                <span>{stg.title}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 pl-8 leading-relaxed text-xs">
                {stg.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Evidence Organizer Prompt */}
        <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block">
              Preserve Incident Details for Police
            </span>
            <p className="text-slate-600 dark:text-slate-400">
              Record timestamps, wallet transaction numbers, and sender phone numbers in your local device Evidence Timeline.
            </p>
          </div>
          <Link
            to="/evidence"
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs whitespace-nowrap self-start sm:self-auto shadow-2xs"
          >
            Open Evidence Organizer
          </Link>
        </div>
      </div>

      {/* Official Emergency Contact Hub */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <h3 className="font-bold text-sm">Official Emergency Contacts in Nepal</h3>
          </div>
          <span className="text-[11px] text-slate-400">Government Verified</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 block text-[11px]">Nepal Police Cyber Bureau</span>
            <span className="text-base font-bold text-white block">01-4412555</span>
            <span className="text-[11px] text-slate-400">Bhotahiti, Kathmandu</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 block text-[11px]">Nepal Police Emergency</span>
            <span className="text-base font-bold text-white block">100</span>
            <span className="text-[11px] text-slate-400">Nationwide Toll-Free</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 block text-[11px]">Nepal Rastra Bank Consumer Desk</span>
            <span className="text-base font-bold text-white block">01-4419804</span>
            <span className="text-[11px] text-slate-400">gunaso@nrb.org.np</span>
          </div>
        </div>
      </div>
    </div>
  );
}
