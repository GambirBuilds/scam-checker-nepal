import React, { useState } from "react";
import { 
  Users, 
  Printer, 
  Globe, 
  ShieldCheck, 
  CheckSquare, 
  PhoneCall, 
  Share2, 
  Copy, 
  Check 
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { familySafetyPackData } from "../data/familySafety.js";
import { useApp } from "../context/AppContext.jsx";

export function FamilyPack() {
  const { showToast } = useApp();
  const [lang, setLang] = useState("ne"); // Default to Nepali for family accessibility
  const [copied, setCopied] = useState(false);

  const isNepali = lang === "ne";
  const { rules, emergencyContacts } = familySafetyPackData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    let text = isNepali ? `नेपाली परिवार डिजिटल सुरक्षा हातेपुस्तिका\n============================\n` : `NEPAL HOUSEHOLD DIGITAL DEFENSE PACK\n============================\n`;
    rules.forEach((r, idx) => {
      text += `${isNepali ? r.titleNe : r.titleEn}\n`;
      text += `${isNepali ? r.bodyNe : r.bodyEn}\n`;
      text += `कार्य: ${isNepali ? r.actionNe : r.actionEn}\n\n`;
    });
    text += `आपतकालीन नम्बर: नेपाल प्रहरी साइबर ब्युरो ०१-४४१२५५५ / १००\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast("Safety guidelines copied to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title={isNepali ? "पारिवारिक सुरक्षा हातेपुस्तिका" : "Family Digital Safety Pack"} 
        description="Printable and shareable everyday digital defense rules for parents and elders in Nepal." 
      />

      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 no-print">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
            <Users className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Household Defense Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {isNepali ? familySafetyPackData.titleNe : familySafetyPackData.titleEn}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            {isNepali ? familySafetyPackData.descriptionNe : familySafetyPackData.descriptionEn}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setLang(isNepali ? "en" : "ne")}
            className="px-3.5 py-2 text-xs font-bold rounded-lg border border-sky-300 dark:border-sky-700 bg-sky-50/60 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 hover:bg-sky-100 cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isNepali ? "View in English" : "नेपालीमा पढ्नुहोस्"}</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Text"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Checklist</span>
          </button>
        </div>
      </div>

      {/* Printable Poster Container */}
      <div className="p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-8">
        <div className="text-center space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="inline-block p-3 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 mb-1">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {isNepali ? "डिजिटल सुरक्षाका ६ आधारभूत नियमहरू" : "The 6 Essential Rules of Digital Safety"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
            "Think Before You Trust · विश्वास गर्नु अघि एक पटक सोच्नुहोस्"
          </p>
        </div>

        {/* The 6 Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((r, idx) => (
            <div
              key={r.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </span>
                  <span>{isNepali ? r.titleNe : r.titleEn}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                  {isNepali ? r.bodyNe : r.bodyEn}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-sky-900 dark:text-sky-300 font-semibold flex items-start gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span>{isNepali ? r.actionNe : r.actionEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts Footer */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
            <PhoneCall className="w-4 h-4" />
            <span>{isNepali ? "आपतकालीन सोधपुछ तथा उजुरी" : "Emergency Helplines in Nepal"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {emergencyContacts.map((c, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block text-[11px]">{c.label}</span>
                <span className="text-base font-bold text-white block mt-0.5">{c.phone}</span>
                <span className="text-[10px] text-slate-400">{c.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
