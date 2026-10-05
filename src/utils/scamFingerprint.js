/**
 * Scam DNA & Fingerprint Analysis Utility.
 * Evaluates the sequential combinations of tactics present in a message or incident.
 * Educational risk assessment: does NOT prove fraud.
 */

import { FINGERPRINT_INDICATORS } from "../data/scamFingerprints.js";

// Specific regex detection for each fingerprint indicator
const INDICATOR_RULES = [
  {
    key: "IMPERSONATION",
    regex: /\b(nepal\s*police|cyber\s*bureau|telecom\s*authority|nrb|bank\s*manager|esewa\s*support|khalti\s*care|courier\s*manager|customer\s*service|dhl|fedex|nepal\s*post|hr\s*officer)\b/i
  },
  {
    key: "URGENCY",
    regex: /\b(urgent|immediately|act\s*now|within\s*\d+\s*(mins?|hours?)|today\s*only|expires\s*today|last\s*chance|tuntunt|aaja\s*nai|chado\s*garnus|तुरुन्त|आजै|तत्काल|अन्तिम\s*मौका)\b/i
  },
  {
    key: "PAYMENT_REQUEST",
    regex: /\b(send\s*(rs\.?|npr|\$)?\s*[\d,]+|transfer\s*(rs\.?|npr|\$)?\s*[\d,]+|pay\s*(rs\.?|npr|\$)?\s*[\d,]+|paisa\s*pathaunu|advance\s*dinus|fee\s*tirnu|पैसा\s*पठाउनुहोस्|शुल्क\s*बुझाउनुहोस्|रकम\s*जम्मा)\b/i
  },
  {
    key: "OTP_REQUEST",
    regex: /\b(otp|one[\s-]?time[\s-]?password|verification\s*code|auth\s*code|security\s*code|otp\s*dinuhos|otp\s*dinus|ओटिपी|कोड\s*भन्नुहोस्)\b/i
  },
  {
    key: "PASSWORD_REQUEST",
    regex: /\b(mpin|atm\s*pin|pin\s*code|password|passcode|secret\s*pin|pin\s*hannuhos|पिन|पासवर्ड|गोप्य\s*कोड)\b/i
  },
  {
    key: "ACCOUNT_VERIFICATION",
    regex: /\b(kyc\s*(update|verification|expired|pending)|verify\s*your\s*account|confirm\s*identity|reactivate\s*account|account\s*audit|केवाइसी|प्रमाणीकरण)\b/i
  },
  {
    key: "REWARD_PROMISE",
    regex: /\b(won\s*a\s*prize|lucky\s*winner|lottery\s*winner|congratulations|bumper\s*prize|free\s*iphone|prize\s*jitnu|lottery\s*paryo|बधाई\s*छ|चिठ्ठा|पुरस्कार)\b/i
  },
  {
    key: "INVESTMENT_PROMISE",
    regex: /\b(guaranteed\s*(return|profit)|zero\s*risk|100%\s*safe\s*investment|\d+%\s*daily\s*profit|crypto\s*arbitrage|forex\s*trading\s*bot|ग्यारेन्टी\s*नाफा|शून्य\s*जोखिम)\b/i
  },
  {
    key: "JOB_FEE",
    regex: /\b(registration\s*fee|training\s*fee|activation\s*fee|security\s*deposit|task\s*money|vip\s*deposit|दर्ता\s*शुल्क|धरौटी\s*रकम)\b/i
  },
  {
    key: "FEAR_TACTIC",
    regex: /\b(account\s*(will\s*be)?\s*(blocked|suspended|closed|frozen)|arrest\s*warrant|police\s*case|legal\s*action|court\s*summons|khata\s*block|खाता\s*बन्द|प्रहरी\s*पक्राउ|कारबाही)\b/i
  },
  {
    key: "AUTHORITY_CLAIM",
    regex: /\b(government\s*official|police\s*inspector|investigation\s*officer|revenue\s*officer|ministry\s*directive|सरकारी\s*निकाय|प्रहरी\s*अधिकृत)\b/i
  },
  {
    key: "SCARCITY",
    regex: /\b(only\s*\d+\s*(slots?|seats?|units?|items?)|limited\s*time|first\s*\d+\s*people|offer\s*ends\s*soon|सीमित\s*सिट|अन्तिम\s*अवसर)\b/i
  },
  {
    key: "SECRECY",
    regex: /\b(do\s*not\s*tell|keep\s*(this\s*)?secret|confidential\s*matter|don't\s*inform\s*(bank|family|police)|कसैलाई\s*नभन्नुहोस्|गोप्य\s*राख्नुहोस्)\b/i
  },
  {
    key: "SUSPICIOUS_LINK",
    regex: /\b(https?:\/\/[^\s]+|bit\.ly\/[^\s]+|tinyurl\.com\/[^\s]+|t\.co\/[^\s]+|click\s*here|link\s*kholnuhos|लिङ्क\s*खोल्नुहोस्)\b/i
  },
  {
    key: "EMOTIONAL_PRESSURE",
    regex: /\b(hospital\s*emergency|accident|in\s*trouble|help\s*me\s*please|save\s*my\s*life|urgent\s*help|बिरामी\s*छु|अस्पतालमा\s*छु|सहयोग\s*चाहियो)\b/i
  },
  {
    key: "REMOTE_ACCESS_REQUEST",
    regex: /\b(anydesk|teamviewer|quick\s*support|screen\s*share|install\s*app\s*for\s*refund|रिमोट\s*एक्सेस|स्क्रिन\s*सेयर)\b/i
  }
];

export function extractScamFingerprint(text = "") {
  if (!text || typeof text !== "string") {
    return {
      indicators: [],
      fingerprintSequence: "NO DETECTED TACTICS",
      summary: "No standard social-engineering fingerprint indicators were recognized in this text.",
      whyItMatters: "General vigilance is always recommended when dealing with unknown senders."
    };
  }

  const detectedKeys = [];

  INDICATOR_RULES.forEach(rule => {
    if (rule.regex.test(text)) {
      if (!detectedKeys.includes(rule.key)) {
        detectedKeys.push(rule.key);
      }
    }
  });

  const indicators = detectedKeys.map(key => FINGERPRINT_INDICATORS[key]).filter(Boolean);

  // Logical ordering of progression for the fingerprint chain
  const orderRank = [
    "IMPERSONATION",
    "AUTHORITY_CLAIM",
    "REWARD_PROMISE",
    "EMOTIONAL_PRESSURE",
    "INVESTMENT_PROMISE",
    "ACCOUNT_VERIFICATION",
    "URGENCY",
    "SCARCITY",
    "FEAR_TACTIC",
    "SUSPICIOUS_LINK",
    "REMOTE_ACCESS_REQUEST",
    "JOB_FEE",
    "OTP_REQUEST",
    "PASSWORD_REQUEST",
    "PAYMENT_REQUEST",
    "SECRECY"
  ];

  indicators.sort((a, b) => {
    const rankA = orderRank.indexOf(a.id);
    const rankB = orderRank.indexOf(b.id);
    return (rankA === -1 ? 99 : rankA) - (rankB === -1 ? 99 : rankB);
  });

  const fingerprintSequence = indicators.length > 0 
    ? indicators.map(i => i.label.toUpperCase()).join(" → ")
    : "NO PRIMARY TACTICS DETECTED";

  // Build human-readable explanation
  let whyItMatters = "";
  if (indicators.length === 0) {
    whyItMatters = "No established social engineering fingerprints were found. However, caution is always warranted with unsolicited communications.";
  } else if (indicators.some(i => i.id === "OTP_REQUEST" || i.id === "PASSWORD_REQUEST")) {
    whyItMatters = "The message combines tactical persuasion with direct requests for private credentials (OTP / PIN). Sharing these credentials allows an external party to authorize transactions or take over your account.";
  } else if (indicators.some(i => i.id === "PAYMENT_REQUEST") && indicators.some(i => i.id === "URGENCY")) {
    whyItMatters = "The message applies simultaneous time pressure and financial demands. Rushing a financial transfer is designed to bypass deliberate verification and prevent you from consulting family or bank staff.";
  } else if (indicators.some(i => i.id === "REWARD_PROMISE") && indicators.some(i => i.id === "PAYMENT_REQUEST")) {
    whyItMatters = "This matches the classic advance-fee reward structure: an attractive windfall is promised, but conditional upon paying an upfront fee first. Genuine prizes never require advance payment.";
  } else if (indicators.some(i => i.id === "IMPERSONATION") && indicators.some(i => i.id === "ACCOUNT_VERIFICATION")) {
    whyItMatters = "The message uses the prestige of a recognized organization or authority to demand immediate account verification. This pattern is commonly observed in phishing attempts.";
  } else {
    const names = indicators.map(i => i.label).join(", ");
    whyItMatters = `The message combines ${names}. These social engineering tactics work together to manufacture pressure and lower your critical scrutiny.`;
  }

  return {
    indicators,
    fingerprintSequence,
    summary: indicators.length > 0
      ? `Detected Fingerprint: ${indicators.map(i => i.label).join(" + ")}`
      : "No primary fingerprint detected.",
    whyItMatters
  };
}
