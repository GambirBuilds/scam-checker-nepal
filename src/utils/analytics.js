/**
 * Privacy-Conscious Analytics & Telemetry Stub for Scam Checker Nepal.
 * Explicitly blocks sensitive payloads: never logs messages, passwords, OTPs, or PII.
 * Analytics is disabled by default to honor user privacy.
 */

const ANALYTICS_ENABLED = false;

export function trackSafeEvent(eventName, safeProperties = {}) {
  if (!ANALYTICS_ENABLED) {
    return;
  }

  // Filter out any potential sensitive payload keys
  const safeData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...safeProperties
  };

  // Redact any accidental keys
  delete safeData.content;
  delete safeData.message;
  delete safeData.password;
  delete safeData.otp;
  delete safeData.pin;
  delete safeData.image;

  try {
    // In production, dispatch to internal privacy-respecting endpoint
    // console.info("[Safe Analytics Event]", safeData);
  } catch (err) {
    console.warn("Analytics tracking failure:", err);
  }
}

/**
 * Standard safe event wrappers
 */
export const Analytics = {
  pageView: (path) => trackSafeEvent("page_view", { path }),
  checkerOpened: (type) => trackSafeEvent("checker_opened", { type }),
  categorySelected: (category) => trackSafeEvent("category_selected", { category }),
  analysisCompleted: (riskLevel, scoreRange) => trackSafeEvent("analysis_completed", { riskLevel, scoreRange }),
  quizCompleted: (scorePercentage) => trackSafeEvent("quiz_completed", { scorePercentage })
};
