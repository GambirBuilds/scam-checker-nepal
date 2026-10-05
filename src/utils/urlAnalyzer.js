/**
 * Transparent URL Characteristic Analyzer.
 * Inspects visible structural properties of URLs to detect phishing heuristics,
 * deceptive domains, and obfuscation techniques.
 */

const KNOWN_SHORTENERS = [
  "bit.ly", "tinyurl.com", "t.co", "goo.gl", "cutt.ly", "is.gd", "ow.ly",
  "buff.ly", "rebrand.ly", "shorturl.at", "soo.gd", "bc.vc", "rb.gy"
];

const SUSPICIOUS_TLDS = [
  ".top", ".xyz", ".cc", ".buzz", ".work", ".click", ".loan", ".party",
  ".gq", ".cf", ".tk", ".ml", ".ga", ".fit", ".rest", ".online", ".site", ".live"
];

const BRAND_TARGET_KEYWORDS = [
  "esewa", "khalti", "connectips", "nic-asia", "nabil", "nibl", "global-ime",
  "nepal-bank", "rastriya-banijya", "cyber-bureau", "nepal-police", "telecom",
  "ntc", "ncell", "nepalpost", "dhl", "facebook", "instagram", "whatsapp"
];

export function analyzeUrl(inputUrl = "") {
  const raw = (inputUrl || "").trim();
  if (!raw) {
    return {
      isValid: false,
      error: "Please enter a URL to inspect."
    };
  }

  // Prepend protocol if missing to allow standard parsing
  let normalized = raw;
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = "https://" + normalized;
  }

  let parsed;
  try {
    parsed = new URL(normalized);
  } catch {
    return {
      isValid: false,
      error: "The entered text is not a recognizable URL structure."
    };
  }

  const indicators = [];
  const hostname = parsed.hostname.toLowerCase();
  const protocol = parsed.protocol.toLowerCase();
  const pathname = parsed.pathname;
  const fullUrl = parsed.href;

  // 1. HTTP vs HTTPS
  if (protocol === "http:" || raw.startsWith("http://")) {
    indicators.push({
      type: "Unencrypted Connection (HTTP)",
      severity: "High",
      detail: "The URL uses plain unencrypted HTTP instead of secure HTTPS. Modern legitimate banking and service websites require HTTPS encryption."
    });
  }

  // 2. IP Address Hostname
  const isIpAddress = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname) || /^\[?[a-f0-9:]+\]?$/i.test(hostname);
  if (isIpAddress) {
    indicators.push({
      type: "Direct IP Address Hostname",
      severity: "High",
      detail: "The website uses a raw numerical IP address instead of a registered domain name. Legitimate institutions in Nepal use registered domains."
    });
  }

  // 3. Known URL Shortener
  const isShortener = KNOWN_SHORTENERS.some(shortener => hostname === shortener || hostname.endsWith("." + shortener));
  if (isShortener) {
    indicators.push({
      type: "URL Shortener Detected",
      severity: "Medium",
      detail: `The URL uses a link redirection shortener (${hostname}). Shortened links conceal the true destination webpage.`
    });
  }

  // 4. Suspicious or Cheap TLDs
  const hasSuspiciousTld = SUSPICIOUS_TLDS.some(tld => hostname.endsWith(tld));
  if (hasSuspiciousTld) {
    indicators.push({
      type: "High-Risk Domain Extension",
      severity: "Medium",
      detail: `The domain ends with an extension frequently associated with disposable phishing campaigns rather than official .gov.np, .com.np, or .org domains.`
    });
  }

  // 5. Punycode / Internationalized Domain Lookalike (xn--)
  if (hostname.includes("xn--")) {
    indicators.push({
      type: "Punycode (Internationalized Domain)",
      severity: "High",
      detail: "The domain uses Punycode (starts with xn--), which can be utilized for homoglyph attacks (e.g. using Cyrillic 'a' to mimic Latin 'a')."
    });
  }

  // 6. Suspicious Subdomain Stacking
  const domainParts = hostname.split(".");
  if (domainParts.length > 3) {
    indicators.push({
      type: "Excessive Subdomain Stacking",
      severity: "Medium",
      detail: `The address contains ${domainParts.length} domain segments. Fraudsters often use subdomains like 'esewa.com.verify-login.xyz' where the actual host is only the right-most domain.`
    });
  }

  // 7. Brand Keyword in Subdomain or Non-Official Host
  const foundBrand = BRAND_TARGET_KEYWORDS.find(keyword => hostname.includes(keyword));
  if (foundBrand) {
    const isAuthenticBrandHost = 
      (foundBrand === "esewa" && (hostname === "esewa.com.np" || hostname.endsWith(".esewa.com.np"))) ||
      (foundBrand === "khalti" && (hostname === "khalti.com" || hostname.endsWith(".khalti.com"))) ||
      (foundBrand === "connectips" && (hostname === "connectips.com" || hostname.endsWith(".connectips.com"))) ||
      (foundBrand === "facebook" && (hostname === "facebook.com" || hostname.endsWith(".facebook.com"))) ||
      (foundBrand === "instagram" && (hostname === "instagram.com" || hostname.endsWith(".instagram.com")));

    if (!isAuthenticBrandHost) {
      indicators.push({
        type: `Potential Brand Impersonation (${foundBrand})`,
        severity: "High",
        detail: `The domain references '${foundBrand}' but does not appear to belong to the official registered root domain.`
      });
    }
  }

  // 8. Sensitive Action Keywords in Path/Hostname
  const sensitivePathKeywords = ["login", "verify", "update-kyc", "signin", "banking", "secure", "bonus", "free-prize", "otp"];
  const matchedKeywords = sensitivePathKeywords.filter(k => (hostname + pathname).toLowerCase().includes(k));
  if (matchedKeywords.length > 0) {
    indicators.push({
      type: "Sensitive Action Keywords in URL",
      severity: "Low",
      detail: `URL contains action keywords: ${matchedKeywords.join(", ")}. Verify that you intentionally navigated to this service.`
    });
  }

  // 9. Excessive Length (> 90 chars)
  if (fullUrl.length > 90) {
    indicators.push({
      type: "Excessive URL Length",
      severity: "Low",
      detail: `The URL is unusually long (${fullUrl.length} characters), which may indicate tracking tokens or obfuscated redirects.`
    });
  }

  // Calculate Risk Score
  let score = 5;
  indicators.forEach(ind => {
    if (ind.severity === "High") score += 32;
    if (ind.severity === "Medium") score += 18;
    if (ind.severity === "Low") score += 8;
  });
  score = Math.min(100, score);

  let riskLevel = "LOW RISK";
  if (score >= 71) riskLevel = "HIGH RISK";
  else if (score >= 41) riskLevel = "SUSPICIOUS";
  else if (score >= 21) riskLevel = "NEEDS CAUTION";

  return {
    isValid: true,
    normalizedUrl: parsed.href,
    hostname,
    protocol: parsed.protocol,
    pathname: parsed.pathname,
    indicators,
    score,
    riskLevel,
    isHttps: protocol === "https:",
    disclaimer: "These structural indicators identify potential caution flags and are NOT definitive proof of malware. Always verify independently through official channels."
  };
}
