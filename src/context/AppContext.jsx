import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations.js";
import { 
  getLocalHistory, 
  saveHistoryItem, 
  removeHistoryItem, 
  clearAllHistory, 
  getLocalEvidence, 
  saveEvidenceItem, 
  removeEvidenceItem, 
  getLocalSettings, 
  saveLocalSettings,
  getLocalReports,
  saveCommunityReport,
  removeCommunityReport,
  getLocalChecklistState,
  saveLocalChecklistState,
  getLocalProgress,
  saveLocalProgress
} from "../utils/storage.js";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [settings, setSettings] = useState(() => getLocalSettings());
  const [history, setHistory] = useState(() => getLocalHistory());
  const [evidence, setEvidence] = useState(() => getLocalEvidence());
  const [reports, setReports] = useState(() => getLocalReports());
  const [checklist, setChecklist] = useState(() => getLocalChecklistState());
  const [progress, setProgress] = useState(() => getLocalProgress());
  const [currentResult, setCurrentResult] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });
  const [cookieConsent, setCookieConsent] = useState(() => {
    try {
      return localStorage.getItem("scam_checker_cookie_consent");
    } catch {
      return null;
    }
  });

  const language = settings.language || "en";
  const theme = settings.theme || "light";

  // Apply dark mode class to root HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      // system
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  const setLanguage = (lang) => {
    const updated = saveLocalSettings({ language: lang });
    setSettings(updated);
  };

  const setTheme = (thm) => {
    const updated = saveLocalSettings({ theme: thm });
    setSettings(updated);
  };

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "info" });
    }, 3500);
  };

  const handleSaveResult = (res) => {
    if (!res) return;
    const saved = saveHistoryItem(res);
    if (saved) {
      setHistory(getLocalHistory());
      showToast("Assessment record saved locally to your device.", "success");
    }
  };

  const handleDeleteHistory = (id) => {
    const updated = removeHistoryItem(id);
    setHistory(updated);
    showToast("History entry deleted.", "info");
  };

  const handleClearHistory = () => {
    clearAllHistory();
    setHistory([]);
    showToast("All local check history has been erased.", "info");
  };

  const handleAddEvidence = (item) => {
    const added = saveEvidenceItem(item);
    if (added) {
      setEvidence(getLocalEvidence());
      showToast("Incident logged to local evidence organizer.", "success");
      return added;
    }
  };

  const handleDeleteEvidence = (id) => {
    const updated = removeEvidenceItem(id);
    setEvidence(updated);
    showToast("Evidence record removed.", "info");
  };

  const handleAcceptCookies = (status) => {
    try {
      localStorage.setItem("scam_checker_cookie_consent", status);
    } catch {}
    setCookieConsent(status);
  };

  const handleAddReport = (report) => {
    const saved = saveCommunityReport(report);
    if (saved) {
      setReports(getLocalReports());
      showToast("Community scam report submitted for moderation review.", "success");
      return saved;
    }
  };

  const handleDeleteReport = (id) => {
    const updated = removeCommunityReport(id);
    setReports(updated);
    showToast("Report removed.", "info");
  };

  const handleUpdateChecklist = (stateUpdate) => {
    const updated = saveLocalChecklistState({ ...checklist, ...stateUpdate });
    setChecklist(updated);
  };

  const handleAwardBadge = (badgeId) => {
    if (!progress.earnedBadgeIds.includes(badgeId)) {
      const updated = saveLocalProgress({
        earnedBadgeIds: [...progress.earnedBadgeIds, badgeId]
      });
      setProgress(updated);
      showToast("Safety Badge Earned!", "success");
    }
  };

  const handleIncrementProgress = (key) => {
    const currentVal = progress[key] || 0;
    const updated = saveLocalProgress({
      [key]: currentVal + 1
    });
    setProgress(updated);
  };

  const t = translations[language] || translations.en;

  const value = {
    language,
    setLanguage,
    theme,
    setTheme,
    t,
    history,
    evidence,
    reports,
    checklist,
    progress,
    currentResult,
    setCurrentResult,
    saveCurrentResult: handleSaveResult,
    deleteHistoryItem: handleDeleteHistory,
    clearHistory: handleClearHistory,
    addEvidence: handleAddEvidence,
    deleteEvidence: handleDeleteEvidence,
    addReport: handleAddReport,
    deleteReport: handleDeleteReport,
    updateChecklist: handleUpdateChecklist,
    awardBadge: handleAwardBadge,
    incrementProgress: handleIncrementProgress,
    toast,
    showToast,
    cookieConsent,
    acceptCookies: handleAcceptCookies
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
