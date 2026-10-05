import React, { useState, useMemo } from "react";
import { Flag, Info, X, HelpCircle, Sparkles } from "lucide-react";
import { RED_FLAG_CATEGORIES, RED_FLAG_RULES } from "../data/redFlagPatterns.js";

export function RedFlagHighlighter({ text = "", className = "" }) {
  const [selectedFlag, setSelectedFlag] = useState(null);

  // Parse text and slice into normal text vs highlighted tokens
  const highlightedTokens = useMemo(() => {
    if (!text || typeof text !== "string") return [];

    // Find all matches across all rules
    const matches = [];

    RED_FLAG_RULES.forEach((rule) => {
      // Create fresh RegExp to avoid lastIndex pitfalls
      const regex = new RegExp(rule.regex.source, rule.regex.flags);
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (match[0].length > 0) {
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0],
            categoryKey: rule.category,
            category: RED_FLAG_CATEGORIES[rule.category] || RED_FLAG_CATEGORIES.urgency,
            title: rule.title,
            explanation: rule.explanation
          });
        }
      }
    });

    if (matches.length === 0) {
      return [{ type: "text", content: text }];
    }

    // Sort matches by start position
    matches.sort((a, b) => a.start - b.start);

    // Filter out overlapping matches (keep earlier or longer)
    const nonOverlapping = [];
    let lastEnd = 0;

    matches.forEach((m) => {
      if (m.start >= lastEnd) {
        nonOverlapping.push(m);
        lastEnd = m.end;
      }
    });

    // Build segment array
    const segments = [];
    let currentIndex = 0;

    nonOverlapping.forEach((m, idx) => {
      if (m.start > currentIndex) {
        segments.push({
          type: "text",
          content: text.substring(currentIndex, m.start)
        });
      }
      segments.push({
        type: "flag",
        id: `flag_${idx}`,
        content: text.substring(m.start, m.end),
        matchData: m
      });
      currentIndex = m.end;
    });

    if (currentIndex < text.length) {
      segments.push({
        type: "text",
        content: text.substring(currentIndex)
      });
    }

    return segments;
  }, [text]);

  const flaggedCount = highlightedTokens.filter(t => t.type === "flag").length;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0">
            <Flag className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
              Red Flag Phrase Highlighter
            </h4>
            <p className="text-[11px] text-slate-500">
              Tap any highlighted phrase to see why it triggers safety caution.
            </p>
          </div>
        </div>

        <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>{flaggedCount} Highlighted Phrase{flaggedCount === 1 ? "" : "s"}</span>
        </div>
      </div>

      {/* Interactive Text Display */}
      <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-normal">
        {highlightedTokens.map((token, index) => {
          if (token.type === "text") {
            return <span key={index}>{token.content}</span>;
          }

          const match = token.matchData;
          const isSelected = selectedFlag?.id === token.id;

          return (
            <button
              key={token.id}
              type="button"
              onClick={() => setSelectedFlag(isSelected ? null : { id: token.id, ...match })}
              className={`inline-block px-1.5 py-0.5 my-0.5 mx-0.5 rounded cursor-pointer transition-all border font-medium ${
                match.category.color
              } ${
                isSelected ? "ring-2 ring-sky-500 scale-105 shadow-xs" : "hover:opacity-90"
              }`}
              title={`Click to inspect: ${match.category.label}`}
              aria-label={`Flagged phrase: ${match.text}, Category: ${match.category.label}`}
            >
              <span>{token.content}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Flag Detail Popover / Card */}
      {selectedFlag && (
        <div className="p-4 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50/80 dark:bg-sky-950/40 text-xs space-y-2 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${selectedFlag.category.badgeColor}`}>
                {selectedFlag.category.label}
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                "{selectedFlag.text}"
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedFlag(null)}
              className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
              aria-label="Close indicator explanation"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Why this may be suspicious</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedFlag.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Category Legend */}
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 pt-1">
        <span className="font-semibold text-slate-600 dark:text-slate-300 mr-1">Legend:</span>
        {Object.values(RED_FLAG_CATEGORIES).slice(0, 6).map((cat) => (
          <span
            key={cat.id}
            className={`px-1.5 py-0.5 rounded border ${cat.color}`}
          >
            {cat.label}
          </span>
        ))}
      </div>
    </div>
  );
}
