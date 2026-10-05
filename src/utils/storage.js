/**
 * Safe Local Storage Manager for Scam Checker Nepal.
 * Stores only safe operational metadata on the user's local device.
 * Strict privacy rule: NEVER persist full sensitive messages, credentials, or passwords.
 */

const HISTORY_KEY = "scam_checker_nepal_history_v1";
const EVIDENCE_KEY = "scam_checker_nepal_evidence_v1";
const SETTINGS_KEY = "scam_checker_nepal_settings_v1";

export function getLocalHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load local history:", err);
    return [];
  }
}

export function saveHistoryItem(item) {
  try {
    const history = getLocalHistory();
    // Safe metadata only
    const safeItem = {
      id: item.id || `check_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type: item.type || "message",
      date: item.date || new Date().toISOString(),
      riskLevel: item.riskLevel || "LOW RISK",
      score: typeof item.score === "number" ? item.score : 0,
      indicatorCount: typeof item.indicatorCount === "number" ? item.indicatorCount : (item.indicators ? item.indicators.length : 0),
      summarySnippet: item.summarySnippet || (item.summary ? item.summary.substring(0, 100) : "Assessment completed")
    };

    const updated = [safeItem, ...history].slice(0, 50); // Keep last 50
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    return safeItem;
  } catch (err) {
    console.error("Failed to save history item:", err);
    return null;
  }
}

export function removeHistoryItem(id) {
  try {
    const history = getLocalHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error("Failed to remove history item:", err);
    return [];
  }
}

export function clearAllHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
    return true;
  } catch (err) {
    console.error("Failed to clear history:", err);
    return false;
  }
}

export function exportLocalHistory() {
  const history = getLocalHistory();
  const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `scam-checker-nepal-history-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Evidence Organizer Store
export function getLocalEvidence() {
  try {
    const raw = localStorage.getItem(EVIDENCE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load local evidence:", err);
    return [];
  }
}

export function saveEvidenceItem(item) {
  try {
    const evidence = getLocalEvidence();
    const newItem = {
      id: item.id || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title: item.title || "Untitled Incident",
      date: item.date || new Date().toISOString(),
      platform: item.platform || "SMS / Chat",
      sender: item.sender || "Unknown",
      url: item.url || "",
      description: item.description || "",
      notes: item.notes || "",
      hasImageAttachment: Boolean(item.hasImageAttachment)
    };
    const updated = [newItem, ...evidence];
    localStorage.setItem(EVIDENCE_KEY, JSON.stringify(updated));
    return newItem;
  } catch (err) {
    console.error("Failed to save evidence:", err);
    return null;
  }
}

export function removeEvidenceItem(id) {
  try {
    const evidence = getLocalEvidence();
    const filtered = evidence.filter(item => item.id !== id);
    localStorage.setItem(EVIDENCE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error("Failed to delete evidence item:", err);
    return [];
  }
}

export function exportEvidenceDossier() {
  const evidence = getLocalEvidence();
  let text = `SCAM CHECKER NEPAL - INCIDENT EVIDENCE DOSSIER\n`;
  text += `Generated on: ${new Date().toLocaleString()}\n`;
  text += `Notice: Stored locally on user device. Not automatically transmitted to any authorities.\n`;
  text += `============================================================\n\n`;

  if (evidence.length === 0) {
    text += `No recorded incident evidence items.\n`;
  } else {
    evidence.forEach((item, index) => {
      text += `[INCIDENT #${index + 1}]\n`;
      text += `Title: ${item.title}\n`;
      text += `Date: ${item.date}\n`;
      text += `Platform: ${item.platform}\n`;
      text += `Sender/Contact: ${item.sender}\n`;
      if (item.url) text += `Link/URL: ${item.url}\n`;
      text += `Description: ${item.description}\n`;
      if (item.notes) text += `Personal Notes: ${item.notes}\n`;
      text += `------------------------------------------------------------\n\n`;
    });
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `incident-evidence-dossier-${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

const REPORTS_KEY = "scam_checker_nepal_reports_v1";
const CHECKLIST_KEY = "scam_checker_nepal_checklist_v1";
const PROGRESS_KEY = "scam_checker_nepal_progress_v1";

// Community Reports Store (Feature 2)
export function getLocalReports() {
  try {
    const raw = localStorage.getItem(REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load community reports:", err);
    return [];
  }
}

export function saveCommunityReport(report) {
  try {
    const existing = getLocalReports();
    const newReport = {
      id: report.id || `rep_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      category: report.category || "General",
      platform: report.platform || "SMS / Chat",
      description: report.description || "",
      suspiciousUrl: report.suspiciousUrl || "",
      approximateDate: report.approximateDate || new Date().toISOString().slice(0, 10),
      additionalNotes: report.additionalNotes || "",
      submittedAt: new Date().toISOString(),
      status: "Pending Community Review",
      hasImageAttachment: Boolean(report.hasImageAttachment)
    };
    const updated = [newReport, ...existing];
    localStorage.setItem(REPORTS_KEY, JSON.stringify(updated));
    return newReport;
  } catch (err) {
    console.error("Failed to save community report:", err);
    return null;
  }
}

export function removeCommunityReport(id) {
  try {
    const existing = getLocalReports();
    const filtered = existing.filter(r => r.id !== id);
    localStorage.setItem(REPORTS_KEY, JSON.stringify(filtered));
    return filtered;
  } catch {
    return [];
  }
}

// Personal Safety Checklist Store (Feature 9)
export function getLocalChecklistState() {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? JSON.parse(raw) : {
      didNotShareOtp: false,
      didNotSharePassword: false,
      didNotSendMoney: false,
      didNotClickLink: false,
      verifiedIndependently: false,
      savedEvidence: false,
      lastUpdated: null
    };
  } catch {
    return {
      didNotShareOtp: false,
      didNotSharePassword: false,
      didNotSendMoney: false,
      didNotClickLink: false,
      verifiedIndependently: false,
      savedEvidence: false,
      lastUpdated: null
    };
  }
}

export function saveLocalChecklistState(state) {
  try {
    const updated = { ...state, lastUpdated: new Date().toISOString() };
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save checklist state:", err);
    return state;
  }
}

// Training & Badges Progress Store (Feature 12)
export function getLocalProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {
      scenariosCompleted: 0,
      quizzesTaken: 0,
      lessonsRead: 0,
      earnedBadgeIds: ["badge-phishing"]
    };
  } catch {
    return {
      scenariosCompleted: 0,
      quizzesTaken: 0,
      lessonsRead: 0,
      earnedBadgeIds: ["badge-phishing"]
    };
  }
}

export function saveLocalProgress(progressUpdate) {
  try {
    const current = getLocalProgress();
    const updated = { ...current, ...progressUpdate };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save progress:", err);
    return progressUpdate;
  }
}

// App Settings
export function getLocalSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { theme: "light", language: "en", cookieAccepted: null };
  } catch {
    return { theme: "light", language: "en", cookieAccepted: null };
  }
}

export function saveLocalSettings(settings) {
  try {
    const current = getLocalSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save settings:", err);
    return settings;
  }
}
