/**
 * Nepal Scam Knowledge Graph.
 * Structured relational model connecting Scam Types, Platforms, Languages, Tactics, Target Audiences, Warning Signs, and Safety Lessons.
 */

export const scamKnowledgeGraph = [
  {
    id: "kg-job-scams",
    scamType: "Job & Work From Home Scams",
    nepaliType: "रोजगारी तथा घरमै बसी कमाउने कामको ठगी",
    platforms: ["Telegram", "WhatsApp", "Facebook Groups", "TikTok", "SMS"],
    languages: ["English", "Romanized Nepali", "Nepali"],
    tactics: [
      "Upfront Registration Fee",
      "Urgency & Limited Slots",
      "Fake Recruiter Persona",
      "Micro-Reward Trust Trap",
      "Guaranteed High Daily Income"
    ],
    targetAudience: [
      "College Students",
      "Stay-at-home Homemakers",
      "Unemployed Youth",
      "Overseas Job Aspirants"
    ],
    warningSigns: [
      "Job offered without interview or resume check",
      "Simple tasks like liking YouTube videos paying Rs. 3,000+ daily",
      "Requirement to deposit token money to withdraw earnings",
      "Recruiter insists on communicating strictly via Telegram VIP group"
    ],
    safetyLessons: [
      "Legitimate employers pay you for your work; they NEVER require you to pay them.",
      "Verify company registration independently on the Office of the Company Registrar (ocr.gov.np).",
      "Never pay upfront recruitment fees, visa deposits, or training charges to personal digital wallet accounts."
    ]
  },
  {
    id: "kg-banking-kyc",
    scamType: "Banking & KYC Suspension Scams",
    nepaliType: "मोबाइल बैंकिङ तथा केवाइसी म्याद ठगी",
    platforms: ["SMS", "WhatsApp", "Automated Voice Calls (Vishing)", "Lookalike Web Portals"],
    languages: ["English", "Nepali", "Romanized Nepali"],
    tactics: [
      "Account Blockage Threats",
      "Clone Bank Website Links",
      "OTP / MPIN Harvesting",
      "Caller ID Spoofing",
      "Device Registration Hijack"
    ],
    targetAudience: [
      "Commercial Bank Account Holders",
      "Older Adults & Non-Technical Citizens",
      "Small Shop Owners & Merchants"
    ],
    warningSigns: [
      "SMS from 10-digit unknown mobile number claiming to be a commercial bank",
      "Urgent threat that account will be blocked within 2 hours",
      "Attached link redirecting to non-official domain (e.g. nic-bank-kyc.cc)",
      "Form requesting transaction PIN, password, or OTP"
    ],
    safetyLessons: [
      "Never click links sent via SMS to update bank KYC; use only the official bank mobile application.",
      "Your OTP and MPIN are your personal digital signatures; never share them with anyone, including bank staff.",
      "Call your bank branch using the customer helpline printed on your ATM card or passbook."
    ]
  },
  {
    id: "kg-wallet-qr",
    scamType: "Digital Wallet & QR Payment Scams",
    nepaliType: "eSewa / Khalti तथा क्युआर कोड ठगी",
    platforms: ["Hamrobazar", "Facebook Marketplace", "Instagram DM", "Direct Mobile Calls"],
    languages: ["Nepali", "Romanized Nepali", "English"],
    tactics: [
      "Reverse QR Scam (Scan to Receive Lure)",
      "Fabricated Accidental Transfer SMS",
      "Fake Customer Care Support Number",
      "Screen Sharing / AnyDesk Installation Request"
    ],
    targetAudience: [
      "Online Sellers & Marketplace Advertisers",
      "Everyday Digital Wallet Users",
      "Remittance Recipients"
    ],
    warningSigns: [
      "Buyer asks you to scan a QR code or enter your MPIN to 'receive' money",
      "Caller claims they mistakenly sent money and demands immediate return before you check your balance",
      "Person claims to be wallet support and asks you to install AnyDesk or TeamViewer"
    ],
    safetyLessons: [
      "You NEVER need to enter your MPIN or scan a QR code to RECEIVE money.",
      "Always check your actual wallet statement inside the app, not just incoming SMS screenshots.",
      "Customer support will never ask for remote access to your smartphone."
    ]
  },
  {
    id: "kg-crypto-investment",
    scamType: "Illegal Crypto & Ponzi Investment Scams",
    nepaliType: "अवैध क्रिप्टो तथा पोंजी लगानी ठगी",
    platforms: ["Telegram Channels", "WhatsApp Groups", "YouTube Sponsored Videos", "Instagram Ads"],
    languages: ["English", "Hindi-influenced Nepali", "Romanized Nepali"],
    tactics: [
      "Guaranteed 10%–20% Daily Profits",
      "Fabricated Dashboard Balance Visuals",
      "Multi-Level Referral Downline Commission",
      "Withdrawal Release Tax Demands"
    ],
    targetAudience: [
      "Young Tech-Savvy Investors",
      "Crypto Enthusiasts",
      "Citizens Seeking Passive Income"
    ],
    warningSigns: [
      "Claims of 'zero risk' and guaranteed high daily returns",
      "Promoters pressure you to recruit family and friends for commission bonuses",
      "Platform requires advance payments in USDT or foreign currency to withdraw your initial deposit"
    ],
    safetyLessons: [
      "Cryptocurrency trading and unauthorized forex are illegal in Nepal under Nepal Rastra Bank directives.",
      "Guaranteed high returns with zero risk do not exist in genuine financial markets.",
      "Never invest savings in unregulated offshore web apps."
    ]
  },
  {
    id: "kg-courier-customs",
    scamType: "Courier Parcel & Customs Clearance Scams",
    nepaliType: "विदेशबाट आएको पार्सल तथा भन्सार महसुल ठगी",
    platforms: ["WhatsApp", "Facebook Messenger", "SMS", "Viber"],
    languages: ["English", "Nepali"],
    tactics: [
      "Fake Luxury Gift Delivery Notice",
      "Customs Duty Extortion",
      "Clone Courier Tracking Web Page",
      "Threat of Anti-Money Laundering Legal Prosecution"
    ],
    targetAudience: [
      "Citizens with Relatives Abroad",
      "Online Dating & Friendship Contacts",
      "General Public"
    ],
    warningSigns: [
      "An online friend you haven't met in person claims to have sent costly jewelry, dollars, or laptops",
      "Caller claiming to be customs officer at Tribhuvan International Airport demands tax via eSewa",
      "Payment requested into an individual's personal bank account rather than government customs revenue code"
    ],
    safetyLessons: [
      "Nepal Customs NEVER asks citizens to deposit customs duties into personal digital wallet accounts.",
      "Legitimate postal deliveries are collected with official government receipts at official customs posts.",
      "Never pay clearance fees for unsolicited parcels from internet acquaintances."
    ]
  },
  {
    id: "kg-social-marketplace",
    scamType: "Social Media 70% Discount Shopping Fraud",
    nepaliType: "इन्स्टाग्राम तथा फेसबुक सस्तो सपिङ ठगी",
    platforms: ["Instagram Pages", "TikTok Shop", "Facebook Pages"],
    languages: ["Nepali", "English"],
    tactics: [
      "Unbelievable Clearance Prices",
      "Stolen Customer Review Screenshots",
      "100% Upfront Advance Payment Demand",
      "Immediate Blocking After Payment Transfer"
    ],
    targetAudience: [
      "Teenagers & College Students",
      "Fashion & Electronics Shoppers"
    ],
    warningSigns: [
      "Latest flagship smartphones or brand sneakers offered at 70% off retail value",
      "Strict refusal to provide Cash on Delivery (COD) or in-person inspection",
      "Comments on page are disabled or heavily filtered"
    ],
    safetyLessons: [
      "Insist on Cash on Delivery (COD) for unverified online sellers.",
      "Cross-check seller VAT/PAN registration and physical shop location in Nepal.",
      "If a deal appears too good to be true, it almost certainly is."
    ]
  }
];
