/**
 * Nepal Scam Intelligence Dataset
 * Comprehensive threat intelligence on common fraud schemes operating in Nepal.
 * Educational / Demo data clearly labeled.
 */

export const nepalScamIntelligence = [
  {
    id: "intel-job-01",
    title: "Telegram VIP Video-Like Task Recruitment",
    category: "Fake Job Offers",
    riskLevel: "HIGH",
    commonPlatforms: ["Telegram", "WhatsApp", "Viber", "SMS"],
    warningSigns: [
      "Unsolicited greeting offering NPR 3,000–8,000 daily for liking YouTube videos",
      "Initial token payment of NPR 200–500 given to create false credibility",
      "Demands upfront 'VIP deposit' or 'prepaid task' to unlock accumulated commissions",
      "Communication moved from WhatsApp to anonymous Telegram group channels"
    ],
    typicalTactics: [
      "Artificial Reward",
      "Bait-and-Switch",
      "Payment Pressure",
      "Urgency"
    ],
    howToStaySafe: "Never deposit your own money to unlock work commissions. Legitimate employers never ask employees to pay for task assignments.",
    lastUpdated: "October 2026",
    source: "Nepal Threat Intelligence Analysis",
    verificationStatus: "Verified Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-shop-02",
    title: "Counterfeit Instagram Electronics & Clearance Boutiques",
    category: "Online Shopping Fraud",
    riskLevel: "HIGH",
    commonPlatforms: ["Instagram", "Facebook Pages", "TikTok"],
    warningSigns: [
      "High-end smartphones (iPhone 15/16) or laptops advertised at 70% below retail",
      "Comments on all social media posts disabled to suppress victim warnings",
      "Refusal of Cash on Delivery (COD); demands 100% advance transfer to personal eSewa",
      "No physical showroom address or registered PAN/VAT invoice provided"
    ],
    typicalTactics: [
      "Unrealistic Reward",
      "Scarcity ('Only 3 units left')",
      "Advance Payment Pressure"
    ],
    howToStaySafe: "Insist on Cash on Delivery (COD) for unverified social media sellers. Verify physical store registration and PAN before sending funds.",
    lastUpdated: "October 2026",
    source: "Consumer Protection Advisory",
    verificationStatus: "Verified Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-bank-03",
    title: "Urgent Mobile Banking KYC Expiration Phishing",
    category: "Banking Scams",
    riskLevel: "CRITICAL",
    commonPlatforms: ["SMS", "Automated Voice Calls", "WhatsApp"],
    warningSigns: [
      "SMS claiming mobile banking or ATM card will be blocked within 2–4 hours",
      "Directs user to lookalike domain (e.g., nic-asia-verify.xyz, nepal-bank-kyc.cc)",
      "Fake website asks for mobile banking username, MPIN, and incoming SMS OTP",
      "Aggressive follow-up phone calls urging immediate compliance"
    ],
    typicalTactics: [
      "Fear",
      "Artificial Urgency",
      "Authority Impersonation",
      "Credential Request"
    ],
    howToStaySafe: "Banks in Nepal never send SMS links to update KYC within hours. Navigate directly inside your official bank app or visit your local branch.",
    lastUpdated: "September 2026",
    source: "Banking Fraud Heuristics",
    verificationStatus: "Active Threat Wave",
    isDemo: true
  },
  {
    id: "intel-wallet-04",
    title: "Accidental Money Transfer & Reverse QR Code Coercion",
    category: "Digital Wallet Scams",
    riskLevel: "HIGH",
    commonPlatforms: ["Phone Call", "eSewa", "Khalti", "WhatsApp"],
    warningSigns: [
      "Caller claims they mistakenly sent NPR 10,000–25,000 to your mobile wallet",
      "Sends a QR code and asks you to scan it and enter your PIN to 'refund' them",
      "Sends fake SMS screenshot showing simulated wallet deduction",
      "Threatens to file an immediate police complaint if you hesitate"
    ],
    typicalTactics: [
      "Emotional Manipulation",
      "Fear of Police Action",
      "Reverse Payment Trap"
    ],
    howToStaySafe: "You NEVER scan a QR code or type your MPIN to receive money. Always check your actual statement balance inside your official wallet app first.",
    lastUpdated: "September 2026",
    source: "Fintech Safety Bulletin",
    verificationStatus: "Verified Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-social-05",
    title: "Cloned Family Profile Urgent Medical Emergency",
    category: "Social Media Scams",
    riskLevel: "HIGH",
    commonPlatforms: ["Facebook Messenger", "Instagram DM", "WhatsApp"],
    warningSigns: [
      "Sudden message from a close relative from a newly created secondary profile",
      "Claims urgent hospital admission in another city and asks for NPR 10,000–20,000",
      "Refuses voice or video calls with excuses about hospital network or damaged microphone",
      "Urges immediate transfer to a third-party pharmacy wallet number"
    ],
    typicalTactics: [
      "Emotional Manipulation",
      "Urgency",
      "Identity Cloning",
      "Secrecy"
    ],
    howToStaySafe: "Always call the family member directly on their known regular phone number before sending any emergency money.",
    lastUpdated: "August 2026",
    source: "Cyber Bureau Case Pattern",
    verificationStatus: "Active Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-gov-06",
    title: "Fake Prime Minister Youth Laptop & Festival Grant Links",
    category: "Fake Government Messages",
    riskLevel: "MEDIUM",
    commonPlatforms: ["WhatsApp Viral Chains", "Facebook Groups"],
    warningSigns: [
      "Links hosted on free blog domains (.blogspot, .top, .xyz) rather than .gov.np",
      "Promises free laptops, mobile recharges, or Dashain allowances",
      "Requires sharing link to 5–10 WhatsApp groups to 'unlock' application",
      "Collects citizenship scans and date of birth details"
    ],
    typicalTactics: [
      "Reward",
      "Authority Impersonation",
      "Viral Social Engineering"
    ],
    howToStaySafe: "All authentic Government of Nepal relief programs are hosted exclusively on verified '.gov.np' domains and announced in official news gazettes.",
    lastUpdated: "August 2026",
    source: "Government Portal Advisory",
    verificationStatus: "Recurring Seasonal Scam",
    isDemo: true
  },
  {
    id: "intel-lottery-07",
    title: "IMO & WhatsApp Lucky Draw Cash Prize Winner",
    category: "Lottery & Prize Scams",
    riskLevel: "HIGH",
    commonPlatforms: ["IMO", "WhatsApp", "Viber"],
    warningSigns: [
      "Notification declaring you won 25 Lakhs in Kaun Banega Crorepati or IMO lottery",
      "Demands 10%–20% 'tax clearance fee' or 'processing charge' before cheque dispatch",
      "Displays forged certificates featuring fake government and lottery seals",
      "Urges you not to discuss the winning with friends or family"
    ],
    typicalTactics: [
      "Unrealistic Reward",
      "Advance-Fee Fraud",
      "Secrecy",
      "Greed"
    ],
    howToStaySafe: "Real lotteries deduct applicable legal taxes at source. You are never asked to pay money upfront to receive legitimate winnings.",
    lastUpdated: "July 2026",
    source: "Telecom Security Advisory",
    verificationStatus: "Verified Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-overseas-08",
    title: "European Visit Visa Conversion Foreign Employment Trap",
    category: "Overseas Employment Scams",
    riskLevel: "CRITICAL",
    commonPlatforms: ["Informal Agents", "Facebook Ads", "TikTok Videos"],
    warningSigns: [
      "Promises guaranteed factory or hotel jobs in Poland, Croatia, or Dubai on visit visa",
      "Claims visit visa will be converted to a work permit upon arrival",
      "Demands cash advances of NPR 1.5–3 Lakhs without verified manpower license",
      "No official Lot (LT) demand verification number from Department of Foreign Employment"
    ],
    typicalTactics: [
      "Unrealistic Reward",
      "False Guarantees",
      "Human Trafficking Risk"
    ],
    howToStaySafe: "Never travel abroad for work on a visit visa. Verify demand letter LT numbers on the official Department of Foreign Employment portal (dofe.gov.np).",
    lastUpdated: "July 2026",
    source: "DoFE Public Notice",
    verificationStatus: "Critical Advisory",
    isDemo: true
  },
  {
    id: "intel-invest-09",
    title: "Automated AI Crypto Arbitrage & USDT Staking Ponzi",
    category: "Investment Scams",
    riskLevel: "CRITICAL",
    commonPlatforms: ["Telegram Channels", "Facebook Groups"],
    warningSigns: [
      "Promises 3%–5% guaranteed daily profit with 'zero risk' using automated bots",
      "Heavy commission bonuses for referring friends and family into tier downlines",
      "Crypto trading and USDT mining are prohibited in Nepal under NRB directives",
      "Withdrawal requests blocked by demands for extra 'tax clearance deposits'"
    ],
    typicalTactics: [
      "Greed",
      "Zero-Risk Fallacy",
      "Pyramid Multi-Level Marketing"
    ],
    howToStaySafe: "High returns without risk do not exist. Crypto trading and unauthorized forex activities are illegal in Nepal and offer zero legal recovery avenues.",
    lastUpdated: "June 2026",
    source: "Nepal Rastra Bank Directives",
    verificationStatus: "Prohibited Financial Activity",
    isDemo: true
  },
  {
    id: "intel-impersonate-10",
    title: "Fake Cyber Bureau Officer Arrest Warrant Extortion",
    category: "Impersonation Scams",
    riskLevel: "CRITICAL",
    commonPlatforms: ["WhatsApp Video Calls", "Direct Phone Calls"],
    warningSigns: [
      "Caller shows fake police ID badges claiming your citizenship was found in drug parcels",
      "Threatens immediate arrest warrant execution unless money is transferred to 'audit account'",
      "Forces you to remain on call and forbids telling family or seeking legal counsel",
      "Demands full disclosure of bank balances and mobile banking MPINs"
    ],
    typicalTactics: [
      "Fear",
      "Authority Coercion",
      "Secrecy",
      "Urgency"
    ],
    howToStaySafe: "Police officers in Nepal never demand money transfers over phone calls to cancel warrants. Hang up and contact your local police station or Cyber Bureau directly.",
    lastUpdated: "June 2026",
    source: "Nepal Police Cyber Bureau",
    verificationStatus: "Active Extortion Modus Operandi",
    isDemo: true
  },
  {
    id: "intel-delivery-11",
    title: "Nepal Post Incomplete Address Phishing Link SMS",
    category: "Delivery Scams",
    riskLevel: "HIGH",
    commonPlatforms: ["SMS"],
    warningSigns: [
      "SMS stating package delivery failed due to missing street address",
      "Shortened link (bit.ly/nepal-pkg) leads to fake card payment portal",
      "Demands small NPR 65–120 re-dispatch fee to harvest credit/debit card numbers",
      "Recipient has not ordered any international courier shipment recently"
    ],
    typicalTactics: [
      "Curiosity",
      "Small Fee Lure",
      "Credential Harvesting"
    ],
    howToStaySafe: "Delete unprompted postal SMS messages. Real courier carriers do not collect card numbers via random SMS shortened links.",
    lastUpdated: "May 2026",
    source: "Postal Security Advisory",
    verificationStatus: "Active Phishing Wave",
    isDemo: true
  },
  {
    id: "intel-scholar-12",
    title: "Fake 100% Full-Ride International Scholarship Consultancies",
    category: "Scholarship Scams",
    riskLevel: "HIGH",
    commonPlatforms: ["Social Media Ads", "Unregistered Consultancies"],
    warningSigns: [
      "Guarantees 100% full tuition scholarships in Australia/Canada with no IELTS/PTE required",
      "Demands NPR 50,000–1,00,000 advance document processing fees upfront",
      "Unregistered with Ministry of Education, Science and Technology (MoEST)",
      "Refuses to provide written university admission offer letters before receiving cash"
    ],
    typicalTactics: [
      "Unrealistic Reward",
      "False Guarantee",
      "Advance-Fee Trap"
    ],
    howToStaySafe: "Verify educational consultancies on the MoEST approved registry. Verify scholarships directly on verified university websites.",
    lastUpdated: "May 2026",
    source: "Education Ministry Advisory",
    verificationStatus: "Verified Modus Operandi",
    isDemo: true
  }
];
