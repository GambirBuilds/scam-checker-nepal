/**
 * Transparent Local Rule-Based Risk Engine for Scam Checker Nepal.
 * Evaluates combinations of warning indicators, linguistic patterns (English, Nepali, Romanized Nepali),
 * and contextual pressure vectors.
 */

import { detectTactics } from "../data/scamTactics.js";
import { extractScamFingerprint } from "./scamFingerprint.js";
import { generateCaseId } from "./caseId.js";

// Pattern definitions with category, weight, and multi-lingual regex
const RULE_SETS = [
  {
    category: "Sensitive Information Request",
    severity: "High",
    weight: 35,
    title: "Request for Private Authentication Credentials",
    description: "The content asks for confidential security details such as OTPs, PINs, passwords, or verification codes that should never be shared.",
    patterns: [
      /\b(otp|one[\s-]?time[\s-]?password|mpin|pin\s*code|cvv|cvc|atm\s*pin|password|passcode)\b/i,
      /\b(verification\s*code|security\s*code|recovery\s*code|auth\s*code)\b/i,
      /\b(otp\s*dinuhos|otp\s*dinus|pin\s*hannuhos|code\s*pathaunu|code\s*bhanuhos)\b/i,
      /(ओटिपी|पिन|पासवर्ड|गोप्य\s*कोड|प्रमाणीकरण\s*कोड|ओ\.टि\.पि)/u,
      /(otp\s*दिनुहोस्|पासवर्ड\s*दिनुहोस्|पिन\s*हान्नुहोस्)/u
    ]
  },
  {
    category: "Payment Pressure & Advance Fees",
    severity: "High",
    weight: 30,
    title: "Upfront Payment or Advance Fee Requirement",
    description: "Demands money, registration fees, security deposits, or taxes before a promised service, prize, or job is delivered.",
    patterns: [
      /\b(registration\s*fee|processing\s*fee|advance\s*payment|activation\s*fee|security\s*deposit|prepaid\s*task)\b/i,
      /\b(pay\s*before|transfer\s*immediately|send\s*money\s*first|token\s*money|vip\s*deposit)\b/i,
      /\b(paisa\s*pathaunu|advance\s*dinus|fee\s*tirnu\s*parcha|advance\s*tirnuhos)\b/i,
      /(दर्ता\s*शुल्क|अग्रिम\s*भुक्तानी|धरौटी\s*रकम|पैसा\s*पठाउनुहोस्|शुल्क\s*बुझाउनुहोस्)/u,
      /(पैसा\s*तिर्नुपर्छ|पेमेन्ट\s*गर्नुहोस्)/u
    ]
  },
  {
    category: "Artificial Urgency & Coercion",
    severity: "Medium",
    weight: 22,
    title: "Artificial Time Pressure & Threat of Loss",
    description: "Creates urgency (e.g. account suspension, immediate expiry, police action) to bypass calm critical thinking.",
    patterns: [
      /\b(act\s*now|urgent|immediately|within\s*\d+\s*(hours?|mins?)|expires\s*today|last\s*chance)\b/i,
      /\b(account\s*(will\s*be)?\s*(blocked|suspended|closed|frozen)|kyc\s*(pending|expired|deadline))\b/i,
      /\b(arrest\s*warrant|legal\s*action|police\s*case|today\s*only)\b/i,
      /\b(tuntunt|aaja\s*nai|khata\s*block|khata\s*bhanda|chado\s*garnus)\b/i,
      /(तुरुन्त|आजै|खाता\s*बन्द\s*हुने|म्याद\s*सकिने|तत्काल|अन्तिम\s*मौका)/u,
      /(कारबाही\s*हुने|प्रहरी\s*पक्राउ)/u
    ]
  },
  {
    category: "Unrealistic Rewards & Lottery Claims",
    severity: "High",
    weight: 28,
    title: "Unrealistic Rewards, Lottery Wins, or Free Money",
    description: "Claims you won a massive lottery, cash prize, or contest you likely never entered, or promises instant wealth.",
    patterns: [
      /\b(congratulations|lucky\s*winner|lottery\s*winner|selected\s*for\s*(prize|cash))\b/i,
      /\b(\d+\s*lakhs?|\d+\s*crores?|bumper\s*prize|free\s*iphone|cashback\s*reward)\b/i,
      /\b(tapai\s*le\s*prize\s*jitnu\s*bhayo|lottery\s*paryo|upahar\s*jitnuhos)\b/i,
      /(बधाई\s*छ|चिठ्ठा\s*पर्यो|पुरस्कार\s*जित्नुभयो|भाग्यशाली\s*विजेता|निःशुल्क\s*उपहार)/u,
      /(लाख\s*रुपैयाँ\s*जित्नुभयो)/u
    ]
  },
  {
    category: "Job & Work-From-Home Task Trap",
    severity: "High",
    weight: 26,
    title: "Task-Based Job Scam Indicators",
    description: "Offers high compensation for simple tasks like liking videos or rating maps, but requires deposits or private Telegram groups.",
    patterns: [
      /\b(youtube\s*(like|subscribe)|rate\s*hotels?|google\s*map\s*review|data\s*entry\s*job)\b/i,
      /\b(earn\s*(rs\.?|npr)\s*\d+[\d,]*\s*(daily|per\s*day)|part[\s-]?time\s*income\s*from\s*home)\b/i,
      /\b(join\s*telegram\s*(group|channel|vip)|vip\s*task|no\s*interview\s*needed)\b/i,
      /\b(visit\s*visa\s*job|convert\s*to\s*work\s*permit|guaranteed\s*visa)\b/i,
      /(घरमै\s*बसी\s*कमाउनुहोस्|दैनिक\s*आम्दानी|युट्युब\s*लाइक|कुनै\s*अन्तर्वार्ता\s*नचाहिने)/u
    ]
  },
  {
    category: "High-Yield Investment & Ponzi Patterns",
    severity: "High",
    weight: 28,
    title: "Guaranteed High Return / Risk-Free Investment Claims",
    description: "Promises guaranteed high daily or monthly returns with 'zero risk', especially involving cryptocurrency, forex, or referral trees.",
    patterns: [
      /\b(guaranteed\s*(return|profit)|zero\s*risk|100%\s*safe\s*investment)\b/i,
      /\b(\d+%\s*daily\s*profit|\d+%\s*weekly\s*return|passive\s*crypto\s*income)\b/i,
      /\b(crypto\s*arbitrage|forex\s*trading\s*bot|usdt\s*mining|binary\s*options)\b/i,
      /\b(referral\s*commission|downline\s*bonus|pyramid\s*plan)\b/i,
      /(ग्यारेन्टी\s*नाफा|शून्य\s*जोखिम|दैनिक\s*प्रतिफल|क्रिप्टो\s*ट्रेडिङ)/u
    ]
  },
  {
    category: "Impersonation of Authority or Institution",
    severity: "Medium",
    weight: 22,
    title: "Claimed Association with Authority, Banks, or Couriers",
    description: "Claims to speak on behalf of banks, police, courier agencies, or customer support without verifiable official origins.",
    patterns: [
      /\b(cyber\s*bureau|nepal\s*police|cid\s*investigation|court\s*summons)\b/i,
      /\b(bank\s*(officer|manager|security|technical\s*desk)|esewa\s*(support|helpdesk)|khalti\s*officer)\b/i,
      /\b(nepal\s*post|dhl\s*express|customs\s*officer|delivery\s*agent)\b/i,
      /(नेपाल\s*प्रहरी|साइबर\s*ब्युरो|बैंक\s*प्रबन्धक|ग्राहक\s*सेवा|हुलाक\s*कार्यालय)/u
    ]
  },
  {
    category: "Suspicious Link & Redirect Methods",
    severity: "Medium",
    weight: 20,
    title: "Obfuscated or Lookalike Link Patterns",
    description: "Presents URL shorteners, non-standard top-level domains, or IP addresses that conceal the real destination.",
    patterns: [
      /\b(bit\.ly|tinyurl\.com|t\.co|cutt\.ly|is\.gd|shorturl\.at)\b/i,
      /\b(https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/i,
      /\bhttps?:\/\/[a-z0-9\-]+(\.top|\.xyz|\.click|\.work|\.loan|\.party|\.cc|\.buzz|\.club|\.online)\b/i,
      /(link\s*kholnuhos|yo\s*link\s*ma\s*click|लिङ्क\s*खोल्नुहोस्|यहाँ\s*क्लिक\s*गर्नुहोस्)/i
    ]
  },
  {
    category: "Shopping & Delivery Pressure",
    severity: "Medium",
    weight: 18,
    title: "Unrealistic E-Commerce Discount / Delivery Hold",
    description: "Features abnormal price slashes, refusal of cash-on-delivery, or demands for re-dispatch delivery fees.",
    patterns: [
      /\b(70%|80%|90%)\s*(off|discount)|(clearance\s*sale\s*iphone|customs\s*auction)\b/i,
      /\b(no\s*cod|advance\s*only|only\s*\d+\s*pieces\s*left|stock\s*ending)\b/i,
      /\b(parcel\s*(on\s*hold|delayed|incomplete\s*address)|re[\s-]?delivery\s*fee)\b/i,
      /(७०%|८०%|९०%\s*छुट|अग्रिम\s*रकम\s*मात्र|स्टक\s*सिमित|पार्सल\s*रोकिएको)/u
    ]
  }
];

/**
 * Universal Scam Analyzer
 * @param {string} content - The text to analyze
 * @param {string} [type='message'] - Content type (message, url, job, shopping, payment, delivery, investment, email, social)
 * @returns {object} Analysis result
 */
export function analyzeContent(content = "", type = "message") {
  const cleanText = (content || "").trim();
  if (!cleanText) {
    return {
      score: 0,
      riskLevel: "LOW RISK",
      summary: "No content provided to analyze.",
      indicators: [],
      recommendedActions: ["Paste text, URL, or offer details to evaluate potential warning signs."],
      whatShouldIDoNow: getStandardAdvice("none"),
      contentType: type,
      evaluatedAt: new Date().toISOString()
    };
  }

  const detectedIndicators = [];
  let totalRawWeight = 0;

  RULE_SETS.forEach(rule => {
    const matchedPhrases = [];
    rule.patterns.forEach(regex => {
      const match = cleanText.match(regex);
      if (match) {
        matchedPhrases.push(match[0]);
      }
    });

    if (matchedPhrases.length > 0) {
      detectedIndicators.push({
        category: rule.category,
        title: rule.title,
        description: rule.description,
        severity: rule.severity,
        weight: rule.weight,
        matchedPhrases: Array.from(new Set(matchedPhrases)).slice(0, 4)
      });
      totalRawWeight += rule.weight;
    }
  });

  // Check co-occurrence boosters
  const hasUrgency = detectedIndicators.some(i => i.category === "Artificial Urgency & Coercion");
  const hasSensitive = detectedIndicators.some(i => i.category === "Sensitive Information Request");
  const hasPayment = detectedIndicators.some(i => i.category === "Payment Pressure & Advance Fees");
  const hasRewards = detectedIndicators.some(i => i.category === "Unrealistic Rewards & Lottery Claims");
  const hasLink = detectedIndicators.some(i => i.category === "Suspicious Link & Redirect Methods");

  let multiplier = 1.0;
  // Urgency + Sensitive Info is the most dangerous phishing pattern
  if (hasUrgency && hasSensitive) multiplier += 0.35;
  // Urgency + Payment is aggressive extortion / fee trap
  if (hasUrgency && hasPayment) multiplier += 0.25;
  // Rewards + Payment is classic advance-fee lottery
  if (hasRewards && hasPayment) multiplier += 0.30;
  // Sensitive + Link is credential harvesting
  if (hasSensitive && hasLink) multiplier += 0.25;

  let calculatedScore = Math.round(Math.min(100, totalRawWeight * multiplier));

  // Determine risk level based on the strict prompt spec:
  // 0–20: LOW RISK
  // 21–40: NEEDS CAUTION
  // 41–70: SUSPICIOUS
  // 71–100: HIGH RISK
  let riskLevel = "LOW RISK";
  if (calculatedScore >= 71) {
    riskLevel = "HIGH RISK";
  } else if (calculatedScore >= 41) {
    riskLevel = "SUSPICIOUS";
  } else if (calculatedScore >= 21) {
    riskLevel = "NEEDS CAUTION";
  }

  // Generate summary
  let summary = "";
  if (calculatedScore <= 20) {
    summary = detectedIndicators.length === 0
      ? "No common high-risk indicators detected in this text. However, always exercise normal digital caution."
      : "Minor caution cues detected. The content does not display primary aggressive scam patterns, but independently verify before committing funds.";
  } else if (calculatedScore <= 40) {
    summary = `Caution advised. ${detectedIndicators.length} moderate indicator${detectedIndicators.length > 1 ? 's' : ''} detected. Review sender identity and avoid rush decisions.`;
  } else if (calculatedScore <= 70) {
    summary = `Warning: ${detectedIndicators.length} strong indicators detected. This content exhibits common deceptive characteristics such as urgency, fee demands, or unverified claims.`;
  } else {
    summary = `High risk detected! ${detectedIndicators.length} critical warning signs found. High probability of credential theft, advance-fee fraud, or unauthorized financial requests.`;
  }

  // Tailored actions
  const recommendedActions = generateRecommendations(detectedIndicators, calculatedScore);

  // Psychological tactics detected
  const detectedTactics = detectTactics(cleanText);

  // Confidence calculation (Feature 16)
  let confidence = "MODERATE";
  if (cleanText.length > 80 && (detectedIndicators.length >= 2 || detectedTactics.length >= 2)) {
    confidence = "HIGH";
  } else if (cleanText.length < 30 || (detectedIndicators.length === 0 && cleanText.length < 50)) {
    confidence = "LOW";
  }

  // Explainable Analysis Signals (Feature 15)
  const allPotentialSignals = [
    { key: "urgency", label: "Artificial Urgency & Time Pressure" },
    { key: "credentials", label: "Credential / OTP Request" },
    { key: "payment", label: "Upfront Payment or Advance Fee Demand" },
    { key: "reward", label: "Unsolicited Reward or Lottery Win" },
    { key: "impersonation", label: "Institution / Authority Impersonation" },
    { key: "suspicious_link", label: "Suspicious or Obfuscated Link" },
    { key: "task_job", label: "Task-Based Work-From-Home Lure" },
    { key: "ponzi_crypto", label: "Guaranteed High Daily Return / Crypto" }
  ];

  const detectedSignalLabels = [];
  const notDetectedSignalLabels = [];

  allPotentialSignals.forEach(sig => {
    let isPresent = false;
    if (sig.key === "urgency" && hasUrgency) isPresent = true;
    if (sig.key === "credentials" && hasSensitive) isPresent = true;
    if (sig.key === "payment" && hasPayment) isPresent = true;
    if (sig.key === "reward" && hasRewards) isPresent = true;
    if (sig.key === "suspicious_link" && hasLink) isPresent = true;
    if (sig.key === "task_job" && detectedIndicators.some(i => i.category.includes("Job"))) isPresent = true;
    if (sig.key === "ponzi_crypto" && detectedIndicators.some(i => i.category.includes("Investment"))) isPresent = true;
    if (sig.key === "impersonation" && detectedIndicators.some(i => i.category.includes("Impersonation"))) isPresent = true;

    if (isPresent) {
      detectedSignalLabels.push(sig.label);
    } else {
      notDetectedSignalLabels.push(sig.label);
    }
  });

  // Smart internal learning recommendations (Feature 10 & 26)
  const smartRecommendations = getSmartRecommendations(detectedIndicators, detectedTactics, type);

  // Context-aware "What Should I Do Now?" guidance
  const whatShouldIDoNow = getContextAwareAdvice({
    hasSensitive,
    hasPayment,
    hasLink,
    score: calculatedScore
  });

  const fingerprint = extractScamFingerprint(cleanText);
  const caseId = generateCaseId();

  return {
    caseId,
    rawText: cleanText,
    score: calculatedScore,
    riskLevel,
    confidence,
    summary,
    fingerprint,
    indicators: detectedIndicators,
    tactics: detectedTactics,
    signals: {
      detected: detectedSignalLabels,
      notDetected: notDetectedSignalLabels
    },
    smartRecommendations,
    recommendedActions,
    whatShouldIDoNow,
    contentType: type,
    evaluatedAt: new Date().toISOString()
  };
}

function getSmartRecommendations(indicators, tactics, type) {
  const recommendations = [];
  const indCats = indicators.map(i => i.category);

  if (indCats.some(c => c.includes("Sensitive")) || indCats.some(c => c.includes("Banking")) || type === "banking") {
    recommendations.push({
      title: "The Golden Rule of OTPs",
      category: "Sensitive Data",
      link: "/safety-guide",
      typeLabel: "Safety Guide"
    });
    recommendations.push({
      title: "OTP & PIN Verification Requests",
      category: "Pattern",
      link: "/patterns",
      typeLabel: "Pattern Library"
    });
  }

  if (indCats.some(c => c.includes("Payment")) || type === "payment") {
    recommendations.push({
      title: "Digital Wallet & QR Reverse Scams",
      category: "Scam Type",
      link: "/scam-types",
      typeLabel: "Scam Types"
    });
    recommendations.push({
      title: "Reverse QR Code & Accidental Transfer Traps",
      category: "Pattern",
      link: "/patterns",
      typeLabel: "Pattern Library"
    });
  }

  if (indCats.some(c => c.includes("Job")) || type === "job") {
    recommendations.push({
      title: "Job & Work From Home Scams",
      category: "Scam Type",
      link: "/scam-types",
      typeLabel: "Scam Types"
    });
    recommendations.push({
      title: "Simulate a Job Scam Scenario",
      category: "Training",
      link: "/training",
      typeLabel: "Simulation Training"
    });
  }

  if (indCats.some(c => c.includes("Investment")) || type === "investment") {
    recommendations.push({
      title: "High-Yield Investment & Ponzi Schemes",
      category: "Scam Type",
      link: "/scam-types",
      typeLabel: "Scam Types"
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Digital Safety Comprehensive Guide",
      category: "Guide",
      link: "/safety-guide",
      typeLabel: "Safety Guide"
    });
    recommendations.push({
      title: "Test Your Instincts on the Awareness Quiz",
      category: "Interactive",
      link: "/quiz",
      typeLabel: "Quiz"
    });
  }

  return recommendations.slice(0, 3);
}

function generateRecommendations(indicators, score) {
  const actions = [];
  const categories = indicators.map(i => i.category);

  if (categories.includes("Sensitive Information Request")) {
    actions.push("Never disclose your OTP, MPIN, ATM PIN, or banking passwords under any circumstance.");
  }
  if (categories.includes("Payment Pressure & Advance Fees")) {
    actions.push("Do not transfer money, registration fees, or advance deposits before independent verification.");
  }
  if (categories.includes("Artificial Urgency & Coercion")) {
    actions.push("Pause and ignore artificial deadlines. Legitimate institutions give formal notices and do not freeze accounts within hours.");
  }
  if (categories.includes("Suspicious Link & Redirect Methods")) {
    actions.push("Do not click links inside unsolicited SMS or chats. Navigate manually by typing the verified web address.");
  }
  if (categories.includes("Unrealistic Rewards & Lottery Claims")) {
    actions.push("Remember: real lotteries never ask winners to send advance tax money or processing fees.");
  }
  if (categories.includes("Job & Work-From-Home Task Trap")) {
    actions.push("Avoid paying upfront deposits to unlock tasks. Verify authentic job openings on registered company portals.");
  }

  // Universal safety fallbacks
  actions.push("Verify the sender independently through official published directories or phone numbers.");
  actions.push("When in doubt, consult a tech-savvy family member or contact your local police station.");

  return Array.from(new Set(actions)).slice(0, 5);
}

function getStandardAdvice() {
  return {
    notPaid: [
      "Stop communication immediately.",
      "Do not transfer any money, registration fees, or deposits.",
      "Independently verify the sender using official contact channels."
    ],
    sharedPassword: [
      "Immediately change the affected password from the official service website or app.",
      "Review connected sessions and log out of all unrecognized devices.",
      "Enable Two-Factor Authentication (2FA) using an authenticator app."
    ],
    sharedFinancial: [
      "Contact your bank or digital wallet (eSewa, Khalti) immediately via their official 24/7 hotline to freeze the card/account.",
      "Monitor your recent statement for unauthorized debit transactions.",
      "Do not provide additional verification codes if contacted again."
    ],
    clickedLink: [
      "Do not enter any personal credentials or passwords on the opened webpage.",
      "Immediately close the browser tab.",
      "If credentials were entered, reset them right away on the official application."
    ],
    sentMoney: [
      "Preserve transaction information (screenshots, reference number, recipient wallet/bank account).",
      "Contact the sending bank/wallet provider through official channels to dispute the transfer.",
      "File a formal report with Nepal Police Cyber Bureau (Bhotahiti, Kathmandu) or your local police office."
    ]
  };
}

function getContextAwareAdvice() {
  return getStandardAdvice();
}
