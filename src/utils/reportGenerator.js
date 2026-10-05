/**
 * Report Generator for Scam Checker Nepal.
 * Exports formatted risk assessment records with transparent warnings
 * and clear disclaimers for police or bank reference.
 */

export function generateAssessmentReport(result, userNotes = "") {
  const dateStr = result.evaluatedAt 
    ? new Date(result.evaluatedAt).toLocaleString() 
    : new Date().toLocaleString();

  let report = `============================================================\n`;
  report += `SCAM CHECKER NEPAL - DIGITAL SAFETY ASSESSMENT REPORT\n`;
  report += `"Think Before You Trust."\n`;
  report += `============================================================\n\n`;

  report += `ASSESSMENT SUMMARY\n`;
  report += `------------------------------------------------------------\n`;
  report += `Date & Time:    ${dateStr}\n`;
  report += `Content Type:   ${(result.contentType || "General Message").toUpperCase()}\n`;
  report += `Risk Score:     ${result.score} / 100\n`;
  report += `Risk Level:     ${result.riskLevel}\n`;
  report += `Evaluation:     Local Rule-Based Risk Assessment\n\n`;

  report += `SUMMARY OVERVIEW\n`;
  report += `------------------------------------------------------------\n`;
  report += `${result.summary || "No assessment summary available."}\n\n`;

  report += `DETECTED WARNING INDICATORS (${result.indicators?.length || 0})\n`;
  report += `------------------------------------------------------------\n`;
  if (!result.indicators || result.indicators.length === 0) {
    report += `None detected based on common local rule sets.\n\n`;
  } else {
    result.indicators.forEach((ind, i) => {
      report += `${i + 1}. [${ind.severity.toUpperCase()}] ${ind.title}\n`;
      report += `   Category:    ${ind.category}\n`;
      report += `   Explanation: ${ind.description}\n`;
      if (ind.matchedPhrases && ind.matchedPhrases.length > 0) {
        report += `   Trigger:     "${ind.matchedPhrases.join('", "')}"\n`;
      }
      report += `\n`;
    });
  }

  report += `RECOMMENDED SAFETY ACTIONS\n`;
  report += `------------------------------------------------------------\n`;
  if (result.recommendedActions && result.recommendedActions.length > 0) {
    result.recommendedActions.forEach((act, idx) => {
      report += `[${idx + 1}] ${act}\n`;
    });
  } else {
    report += `• Independently verify sender through official published channels.\n`;
  }
  report += `\n`;

  if (userNotes.trim()) {
    report += `INCIDENT NOTES (USER PROVIDED)\n`;
    report += `------------------------------------------------------------\n`;
    report += `${userNotes.trim()}\n\n`;
  }

  report += `CRITICAL DISCLAIMER & NOTICE\n`;
  report += `------------------------------------------------------------\n`;
  report += `This document represents an educational automated risk assessment performed\n`;
  report += `locally via transparent heuristic rules. It does NOT guarantee detection of all\n`;
  report += `fraudulent patterns, nor does it replace professional law enforcement investigation.\n`;
  report += `To report cybercrime in Nepal: Contact Nepal Police Cyber Bureau (01-4412555).\n`;
  report += `============================================================\n`;

  return report;
}

export function downloadReportFile(result, userNotes = "") {
  const text = generateAssessmentReport(result, userNotes);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `scam-assessment-report-${Date.now()}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

export function copyReportToClipboard(result, userNotes = "") {
  const text = generateAssessmentReport(result, userNotes);
  return navigator.clipboard.writeText(text);
}
