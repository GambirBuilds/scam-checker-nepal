import React from "react";
import { Link } from "react-router-dom";
import { Shield, PhoneCall, ExternalLink } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-6 h-6 rounded-md bg-sky-500 text-white flex items-center justify-center">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span>Scam Checker Nepal</span>
            </div>
            <p className="text-slate-300 italic text-xs">
              "Think Before You Trust."
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              A community-first digital safety and risk-assessment platform built to help ordinary people across Nepal detect warning signs in suspicious messages, links, offers, and payment requests.
            </p>
          </div>

          {/* Quick Check Tools */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3">
              Specialized Checkers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/check" className="hover:text-sky-400 transition-colors">
                  Universal Scam Checker
                </Link>
              </li>
              <li>
                <Link to="/check/url" className="hover:text-sky-400 transition-colors">
                  URL & Link Checker
                </Link>
              </li>
              <li>
                <Link to="/check/job" className="hover:text-sky-400 transition-colors">
                  Job Offer Checker
                </Link>
              </li>
              <li>
                <Link to="/check/shopping" className="hover:text-sky-400 transition-colors">
                  Online Shopping Checker
                </Link>
              </li>
              <li>
                <Link to="/check/payment" className="hover:text-sky-400 transition-colors">
                  Payment & Wallet Checker
                </Link>
              </li>
              <li>
                <Link to="/check/delivery" className="hover:text-sky-400 transition-colors">
                  Parcel & Delivery Checker
                </Link>
              </li>
              <li>
                <Link to="/check/screenshot" className="hover:text-sky-400 transition-colors">
                  Screenshot Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge & Guides */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3">
              Safety & Learning
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/scam-types" className="hover:text-sky-400 transition-colors">
                  15 Scam Types Directory
                </Link>
              </li>
              <li>
                <Link to="/patterns" className="hover:text-sky-400 transition-colors">
                  Searchable Pattern Library
                </Link>
              </li>
              <li>
                <Link to="/safety-guide" className="hover:text-sky-400 transition-colors">
                  Digital Safety Guide
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-sky-400 transition-colors">
                  Scam Awareness Quiz
                </Link>
              </li>
              <li>
                <Link to="/family-mode" className="hover:text-sky-400 transition-colors">
                  Family Safety Mode
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="hover:text-sky-400 transition-colors">
                  Scam Alert Center
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-sky-400 transition-colors">
                  Verified Official Helplines
                </Link>
              </li>
            </ul>
          </div>

          {/* User Tools & Legal */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3">
              Account & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/history" className="hover:text-sky-400 transition-colors">
                  Local History (On-Device)
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-sky-400 transition-colors">
                  Personal Dashboard
                </Link>
              </li>
              <li>
                <Link to="/evidence" className="hover:text-sky-400 transition-colors">
                  Evidence Organizer
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-sky-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice Banner */}
        <div className="rounded-xl p-4 bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-8">
          <div className="flex items-center gap-2 text-slate-300">
            <PhoneCall className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Need immediate law enforcement help? Contact Nepal Police Cyber Bureau:</span>
            <strong className="text-white">01-4412555</strong>
          </div>
          <Link 
            to="/resources"
            className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1"
          >
            <span>All Emergency Numbers</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            Disclaimer: Scam Checker Nepal is an educational risk-assessment tool. Results identify potential warning signs and cannot guarantee that content is legitimate or fraudulent. Always independently verify important information.
          </p>
          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} Scam Checker Nepal. Open educational initiative.
          </p>
        </div>
      </div>
    </footer>
  );
}
