import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Shield, 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  CheckCircle2,
  BookOpen,
  LifeBuoy,
  Wrench,
  Search,
  Zap
} from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export function Navbar() {
  const { language, setLanguage, theme, setTheme, t } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ne" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Structured Navigation Categories (Feature 30)
  const navCategories = {
    check: {
      title: "Check",
      icon: Search,
      items: [
        { to: "/check", label: "Universal Scam Checker", desc: "Paste message, SMS, email, or chat" },
        { to: "/compare", label: "Compare Two Messages", desc: "Side-by-side indicator analysis" },
        { to: "/check/too-good-to-be-true", label: "Too-Good-To-Be-True", desc: "Decision flow for unrealistic prizes/jobs" },
        { to: "/check/url", label: "URL & Website Inspector", desc: "Check unencrypted/shortened links" },
        { to: "/check/job", label: "Job & Work-From-Home", desc: "Detect task fees and fake recruiters" },
        { to: "/check/payment", label: "eSewa & Payment Checker", desc: "Verify wallet transfers and reverse QR" }
      ]
    },
    learn: {
      title: "Learn",
      icon: BookOpen,
      items: [
        { to: "/scam-types", label: "15+ Scam Types", desc: "Directory of known fraud patterns in Nepal" },
        { to: "/dictionary", label: "Scam Dictionary", desc: "Plain explanations of 17+ cyber terms" },
        { to: "/scam-evolution", label: "Scam Evolution", desc: "6-stage progression of deceptive schemes" },
        { to: "/training", label: "Training Mode", desc: "'What Would You Do?' practice scenarios" },
        { to: "/safety-guide", label: "Digital Safety Guide", desc: "Actionable defensive protocols" },
        { to: "/quiz", label: "Awareness Quiz", desc: "Interactive cyber self-test" }
      ]
    },
    protect: {
      title: "Protect",
      icon: LifeBuoy,
      items: [
        { to: "/before-you-pay", label: "Before You Pay Check", desc: "8-point pre-payment defense gate" },
        { to: "/recovery", label: "Recovery Navigator", desc: "Immediate steps if money or OTP was shared" },
        { to: "/family-pack", label: "Family Safety Pack", desc: "Printable/shareable household guide" },
        { to: "/student-safety", label: "Student & Campus Mode", desc: "Defense for college youth & internships" },
        { to: "/evidence", label: "Evidence Timeline", desc: "Organize timestamps for police dossier" }
      ]
    },
    tools: {
      title: "Tools & Help",
      icon: Wrench,
      items: [
        { to: "/verify-channel", label: "Verify Official Channels", desc: "How to independently verify banks & couriers" },
        { to: "/dashboard", label: "Safety Score & Dashboard", desc: "Your local educational preparedness metrics" },
        { to: "/resources", label: "Official Resources", desc: "Nepal Police Cyber Bureau & NRB directory" },
        { to: "/alerts", label: "Scam Alert Center", desc: "Recent trending threat warnings in Nepal" },
        { to: "/history", label: "Local Check History", desc: "On-device assessment history" }
      ]
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow-xs">
            <Shield className="w-4 h-4" />
          </div>
          <span>Scam Checker Nepal</span>
        </Link>

        {/* Desktop Categorized Navigation (Feature 30) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <NavLink 
            to="/" 
            className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${isActive ? "text-sky-600 dark:text-sky-400 font-bold" : ""}`}
          >
            Home
          </NavLink>

          {/* CHECK Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("check")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button"
              className="px-2.5 py-1.5 rounded-lg transition-colors hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Check</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "check" && (
              <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-1 animate-in fade-in duration-100">
                {navCategories.check.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 block transition-colors group"
                  >
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 group-hover:text-sky-600 block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* LEARN Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("learn")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button"
              className="px-2.5 py-1.5 rounded-lg transition-colors hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Learn</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "learn" && (
              <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-1 animate-in fade-in duration-100">
                {navCategories.learn.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 block transition-colors group"
                  >
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 group-hover:text-sky-600 block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* PROTECT Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("protect")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button"
              className="px-2.5 py-1.5 rounded-lg transition-colors hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Protect</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "protect" && (
              <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-1 animate-in fade-in duration-100">
                {navCategories.protect.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 block transition-colors group"
                  >
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 group-hover:text-sky-600 block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* TOOLS Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("tools")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              type="button"
              className="px-2.5 py-1.5 rounded-lg transition-colors hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Tools</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "tools" && (
              <div className="absolute top-full right-0 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-1 animate-in fade-in duration-100">
                {navCategories.tools.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 block transition-colors group"
                  >
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 group-hover:text-sky-600 block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls & Mobile Toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label="Switch Language (English / Nepali)"
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{language === "en" ? "नेपाली" : "EN"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Theme"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Primary CTA */}
          <Link
            to="/check"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Check Now</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation drawer"
            className="lg:hidden p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Categorized Mobile Navigation Drawer (Feature 26 & 30) */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl">
          {/* Quick Universal CTA */}
          <Link
            to="/check"
            onClick={() => setMobileOpen(false)}
            className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-sky-600 text-white block shadow-xs"
          >
            Check Any Suspicious Message
          </Link>

          {/* Mobile Categories */}
          {Object.entries(navCategories).map(([key, cat]) => (
            <div key={key} className="space-y-1 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block px-1">
                {cat.title}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {cat.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[120px]">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between text-xs font-medium text-slate-500">
            <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/privacy" onClick={() => setMobileOpen(false)}>Privacy Policy</Link>
            <Link to="/terms" onClick={() => setMobileOpen(false)}>Terms</Link>
          </div>
        </div>
      )}
    </header>
  );
}
