import React, { useState, useMemo } from "react";
import { 
  BookOpen, 
  Search, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Filter, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { scamDictionaryTerms } from "../data/scamDictionary.js";
import { SEOHead } from "../components/SEOHead.jsx";

export function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [expandedTermId, setExpandedTermId] = useState(null);

  const categories = useMemo(() => {
    const cats = new Set(scamDictionaryTerms.map(t => t.category));
    return ["ALL", ...Array.from(cats)];
  }, []);

  const filteredTerms = useMemo(() => {
    return scamDictionaryTerms.filter(t => {
      const matchesSearch = 
        t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.nepaliTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "ALL" || t.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpand = (id) => {
    setExpandedTermId(expandedTermId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Cybersecurity & Scam Vocabulary Dictionary" 
        description="Comprehensive, plain-language educational dictionary of 17+ online fraud and social-engineering terms in Nepal." 
      />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
          <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Educational Reference</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Scam & Digital Fraud Dictionary
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Clear, student-friendly explanations of social engineering and cyber deception tactics. Understand the terminology so you can recognize the techniques behind them.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search terms, concepts, or Nepali keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-2xs"
          />
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-sky-600 text-white border-sky-600 shadow-2xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Term Cards */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No matching terms found.
            </p>
            <p className="text-xs text-slate-500">
              Try searching for "OTP", "Phishing", "eSewa", or clear your filter.
            </p>
          </div>
        ) : (
          filteredTerms.map((term) => {
            const isExpanded = expandedTermId === term.id;

            return (
              <div
                key={term.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all hover:border-sky-300 dark:hover:border-sky-700 space-y-4"
              >
                <div 
                  onClick={() => toggleExpand(term.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {term.term}
                      </h3>
                      <span className="text-xs text-sky-700 dark:text-sky-400 font-medium">
                        ({term.nepaliTerm})
                      </span>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {term.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 self-end sm:self-center">
                    <span>{isExpanded ? "Collapse details" : "Expand breakdown"}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>
                </div>

                {/* Definition */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {term.definition}
                </p>

                {/* Expanded Detailed Sections */}
                {isExpanded && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in fade-in duration-150 text-xs">
                    {/* How It Works */}
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span>How It Works in Practice</span>
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {term.howItWorks}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Warning Signs */}
                      <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                          <span>Common Warning Signs</span>
                        </div>
                        <ul className="space-y-1.5 text-rose-900/80 dark:text-rose-300/80 leading-relaxed">
                          {term.warningSigns.map((w, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-rose-500 font-bold">•</span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What Users Can Do */}
                      <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/50 dark:bg-sky-950/20 space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-sky-800 dark:text-sky-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>What You Should Do</span>
                        </div>
                        <ul className="space-y-1.5 text-sky-900/80 dark:text-sky-300/80 leading-relaxed">
                          {term.whatToDo.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-sky-500 font-bold">•</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
