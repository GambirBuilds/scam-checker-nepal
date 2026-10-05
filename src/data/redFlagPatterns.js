/**
 * Red Flag Highlighter Patterns & Explanations.
 * Maps specific phrase regexes to categories with clear educational explanations of why each is suspicious.
 */

export const RED_FLAG_CATEGORIES = {
  urgency: {
    id: "urgency",
    label: "Urgency",
    color: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800",
    badgeColor: "bg-amber-500 text-white"
  },
  payment: {
    id: "payment",
    label: "Payment Pressure",
    color: "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800",
    badgeColor: "bg-rose-600 text-white"
  },
  credentials: {
    id: "credentials",
    label: "Credential Request",
    color: "bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800",
    badgeColor: "bg-purple-600 text-white"
  },
  reward: {
    id: "reward",
    label: "Reward",
    color: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800",
    badgeColor: "bg-emerald-600 text-white"
  },
  threat: {
    id: "threat",
    label: "Threat / Fear",
    color: "bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-200 dark:border-red-800",
    badgeColor: "bg-red-700 text-white"
  },
  impersonation: {
    id: "impersonation",
    label: "Impersonation",
    color: "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800",
    badgeColor: "bg-blue-600 text-white"
  },
  link: {
    id: "link",
    label: "Suspicious Link",
    color: "bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800",
    badgeColor: "bg-cyan-600 text-white"
  },
  investment: {
    id: "investment",
    label: "Investment Promise",
    color: "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800",
    badgeColor: "bg-teal-600 text-white"
  },
  job_fee: {
    id: "job_fee",
    label: "Job Fee",
    color: "bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800",
    badgeColor: "bg-orange-600 text-white"
  },
  verification: {
    id: "verification",
    label: "Account Verification",
    color: "bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800",
    badgeColor: "bg-sky-600 text-white"
  }
};

export const RED_FLAG_RULES = [
  // Urgency
  {
    regex: /\b(immediately|urgent|act\s*now|within\s*\d+\s*(hours?|mins?)|expires\s*today|last\s*chance|today\s*only|tuntunt|aaja\s*nai|chado\s*garnus|तुरुन्त|आजै|तत्काल|अन्तिम\s*मौका)\b/gi,
    category: "urgency",
    title: "Artificial Urgency Trigger",
    explanation: "Scammers use immediate deadlines to rush you into making unverified financial or data decisions before you have time to consult others."
  },
  // Payment pressure
  {
    regex: /\b(send\s*(rs\.?|npr|\$)?\s*[\d,]+|transfer\s*(rs\.?|npr|\$)?\s*[\d,]+|pay\s*(rs\.?|npr|\$)?\s*[\d,]+|paisa\s*pathaunu|advance\s*dinus|fee\s*tirnu|पैसा\s*पठाउनुहोस्|शुल्क\s*बुझाउनुहोस्|रकम\s*जम्मा)\b/gi,
    category: "payment",
    title: "Direct Payment Pressure",
    explanation: "Demands to send money via digital wallets or bank transfer to an unverified recipient before delivering any confirmed service or prize."
  },
  // Credentials
  {
    regex: /\b(otp|one[\s-]?time[\s-]?password|mpin|pin|cvv|password|passcode|verification\s*code|security\s*code|otp\s*dinuhos|otp\s*dinus|pin\s*hannuhos|ओटिपी|पिन|पासवर्ड|गोप्य\s*कोड)\b/gi,
    category: "credentials",
    title: "Confidential Credential Request",
    explanation: "Legitimate institutions (banks, eSewa, Khalti) will never ask you to reveal your OTP, MPIN, or password. Anyone asking for this is attempting to take over your account."
  },
  // Reward
  {
    regex: /\b(won\s*a\s*prize|lucky\s*winner|lottery\s*winner|congratulations|selected\s*for\s*prize|bumper\s*prize|free\s*iphone|prize\s*jitnu\s*bhayo|lottery\s*paryo|बधाई\s*छ|चिठ्ठा\s*पर्यो|पुरस्कार\s*जित्नुभयो)\b/gi,
    category: "reward",
    title: "Unrealistic Reward or Prize Claim",
    explanation: "Fraudulent schemes announce unexpected winnings to entice you into paying advance 'release fees' or customs clearance charges."
  },
  // Threat
  {
    regex: /\b(account\s*(will\s*be)?\s*(blocked|suspended|closed|frozen)|arrest\s*warrant|police\s*case|legal\s*action|khata\s*block|खाता\s*बन्द|प्रहरी\s*पक्राउ|कारबाही)\b/gi,
    category: "threat",
    title: "Fear & Suspension Threat",
    explanation: "Threatening account suspension or legal arrest is intended to induce panic so that you bypass standard security verifications."
  },
  // Impersonation
  {
    regex: /\b(nepal\s*police|cyber\s*bureau|telecom\s*authority|nrb|esewa\s*support|khalti\s*care|bank\s*manager|customer\s*care\s*nepal|hr\s*department)\b/gi,
    category: "impersonation",
    title: "Claim of Institutional Identity",
    explanation: "Scammers frequently spoof names of reputable organizations to manufacture unearned trust. Always verify caller numbers independently."
  },
  // Suspicious link
  {
    regex: /\b(https?:\/\/[^\s]+|bit\.ly\/[^\s]+|tinyurl\.com\/[^\s]+|t\.co\/[^\s]+|click\s*here\s*to\s*verify)\b/gi,
    category: "link",
    title: "Unverified Web Link",
    explanation: "External links sent via SMS or chat can route to clone phishing websites that mimic real login forms to intercept entered credentials."
  },
  // Investment
  {
    regex: /\b(guaranteed\s*(return|profit)|zero\s*risk|100%\s*safe\s*investment|\d+%\s*daily\s*profit|crypto\s*arbitrage|forex\s*trading\s*bot|ग्यारेन्टी\s*नाफा|शून्य\s*जोखिम)\b/gi,
    category: "investment",
    title: "Guaranteed High Return Promise",
    explanation: "No legitimate financial instrument offers guaranteed high returns with zero risk. Such promises indicate Ponzi or fake investment platforms."
  },
  // Job fee
  {
    regex: /\b(registration\s*fee|training\s*fee|activation\s*fee|security\s*deposit|task\s*money|vip\s*deposit|दर्ता\s*शुल्क|धरौटी\s*रकम)\b/gi,
    category: "job_fee",
    title: "Upfront Employment Fee",
    explanation: "Genuine employers never demand money from applicants for job registration, interview materials, or home equipment."
  },
  // Account verification
  {
    regex: /\b(kyc\s*(update|verification|expired|pending)|verify\s*your\s*account|confirm\s*identity|reactivate\s*account|केवाइसी|प्रमाणीकरण)\b/gi,
    category: "verification",
    title: "Pretext Account Verification",
    explanation: "Fabricating an urgent need for KYC renewal or identity confirmation is a standard phishing lure to capture account login credentials."
  }
];
