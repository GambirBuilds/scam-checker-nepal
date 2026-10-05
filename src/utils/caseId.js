/**
 * Scam Case ID Generator and Metadata Formatter.
 * Generates local identifiers in the format: SCN-YYYY-XXXXX (e.g., SCN-2026-A82F4).
 * Strictly omits passwords, OTPs, PINs, CVVs, or private messages.
 */

export function generateCaseId() {
  const year = new Date().getFullYear();
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomCode = "";
  for (let i = 0; i < 5; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SCN-${year}-${randomCode}`;
}

export function createSafeCaseRecord({
  caseId = null,
  type = "message",
  riskLevel = "LOW RISK",
  score = 0,
  confidence = "MODERATE",
  indicators = [],
  fingerprint = null,
  userNotes = ""
}) {
  const finalCaseId = caseId || generateCaseId();
  
  return {
    caseId: finalCaseId,
    createdAt: new Date().toISOString(),
    type,
    riskLevel,
    score,
    confidence,
    indicatorCount: Array.isArray(indicators) ? indicators.length : 0,
    indicatorNames: Array.isArray(indicators) ? indicators.map(i => i.title || i.category) : [],
    fingerprintSequence: fingerprint?.fingerprintSequence || "NONE",
    userNotes: typeof userNotes === "string" ? userNotes.slice(0, 500) : "",
    isLocalOnly: true
  };
}
