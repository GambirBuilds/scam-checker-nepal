/**
 * Scam DNA & Fingerprint Definitions for Scam Checker Nepal.
 * Defines the core tactics detected in social-engineering and fraud vectors.
 */

export const FINGERPRINT_INDICATORS = {
  IMPERSONATION: {
    id: "IMPERSONATION",
    label: "Impersonation",
    nepaliLabel: "नक्कली पहिचान / भेष",
    description: "Claims association with a known institution, bank, courier, employer, or authority figure.",
    severity: "High",
    icon: "UserX"
  },
  URGENCY: {
    id: "URGENCY",
    label: "Artificial Urgency",
    nepaliLabel: "कृत्रिम हतार / दबाब",
    description: "Imposes strict deadlines, countdowns, or immediate consequences to prevent deliberation.",
    severity: "Medium",
    icon: "Clock"
  },
  PAYMENT_REQUEST: {
    id: "PAYMENT_REQUEST",
    label: "Payment Pressure",
    nepaliLabel: "भुक्तानी माग",
    description: "Directly requests or demands funds transfer, wallet transfer, or cash voucher.",
    severity: "High",
    icon: "CreditCard"
  },
  OTP_REQUEST: {
    id: "OTP_REQUEST",
    label: "OTP Request",
    nepaliLabel: "ओटिपी (OTP) माग",
    description: "Asks for a one-time verification code sent to the victim's phone or email.",
    severity: "Critical",
    icon: "Key"
  },
  PASSWORD_REQUEST: {
    id: "PASSWORD_REQUEST",
    label: "Password / PIN Request",
    nepaliLabel: "पासवर्ड वा पिन माग",
    description: "Demands master passwords, MPIN, or account security answers.",
    severity: "Critical",
    icon: "Lock"
  },
  ACCOUNT_VERIFICATION: {
    id: "ACCOUNT_VERIFICATION",
    label: "Account Verification Lure",
    nepaliLabel: "खाता प्रमाणीकरण बहाना",
    description: "Claims an account will be blocked, suspended, or audited unless verified right now.",
    severity: "Medium",
    icon: "ShieldAlert"
  },
  REWARD_PROMISE: {
    id: "REWARD_PROMISE",
    label: "Reward Promise",
    nepaliLabel: "अवास्तविक पुरस्कार / उपहार",
    description: "Promises an unsolicited cash prize, lottery victory, vehicle, or electronics gift.",
    severity: "High",
    icon: "Gift"
  },
  INVESTMENT_PROMISE: {
    id: "INVESTMENT_PROMISE",
    label: "Guaranteed Return Lure",
    nepaliLabel: "ग्यारेन्टी नाफा / लगानी",
    description: "Promises high, guaranteed, or risk-free daily returns through crypto, forex, or schemes.",
    severity: "High",
    icon: "TrendingUp"
  },
  JOB_FEE: {
    id: "JOB_FEE",
    label: "Job Registration Fee",
    nepaliLabel: "जागिर दर्ता शुल्क",
    description: "Demands upfront payment for work-from-home tasks, equipment, training, or visa processing.",
    severity: "High",
    icon: "Briefcase"
  },
  FEAR_TACTIC: {
    id: "FEAR_TACTIC",
    label: "Fear & Threat Tactic",
    nepaliLabel: "डर तथा धम्की",
    description: "Threatens arrest, police summons, legal seizure, or public exposure.",
    severity: "High",
    icon: "AlertOctagon"
  },
  AUTHORITY_CLAIM: {
    id: "AUTHORITY_CLAIM",
    label: "Authority Claim",
    nepaliLabel: "प्रहरी वा निकायको दाबी",
    description: "Asserts power as a government inspector, telecom regulator, or law enforcement officer.",
    severity: "High",
    icon: "Award"
  },
  SCARCITY: {
    id: "SCARCITY",
    label: "Artificial Scarcity",
    nepaliLabel: "सीमित अवसरको बहाना",
    description: "Claims only 2 slots remain, or special offer ends in 10 minutes.",
    severity: "Medium",
    icon: "Hourglass"
  },
  SECRECY: {
    id: "SECRECY",
    label: "Secrecy Demand",
    nepaliLabel: "गोप्य राख्न दबाब",
    description: "Instructs the recipient not to inform bank staff, family, or police.",
    severity: "High",
    icon: "EyeOff"
  },
  SUSPICIOUS_LINK: {
    id: "SUSPICIOUS_LINK",
    label: "Suspicious Link",
    nepaliLabel: "शंकास्पद लिङ्क",
    description: "Directs victim to unverified shortened links, IP addresses, or lookalike portals.",
    severity: "High",
    icon: "Link2"
  },
  EMOTIONAL_PRESSURE: {
    id: "EMOTIONAL_PRESSURE",
    label: "Emotional Pressure",
    nepaliLabel: "भावनात्मक दबाब",
    description: "Appeals to sympathy (medical emergency, distressed relative, stranded friend).",
    severity: "Medium",
    icon: "HeartCrack"
  },
  REMOTE_ACCESS_REQUEST: {
    id: "REMOTE_ACCESS_REQUEST",
    label: "Remote Access Request",
    nepaliLabel: "रिमोट एक्सेस माग",
    description: "Asks victim to install AnyDesk, TeamViewer, or quick support screen sharing apps.",
    severity: "Critical",
    icon: "Monitor"
  }
};
