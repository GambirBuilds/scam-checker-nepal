export const scamPatterns = [
  {
    id: "otp-request",
    name: "OTP & PIN Verification Requests",
    nepaliName: "OTP र पिन माग्ने संकेत",
    category: "Sensitive Data",
    whatItMeans: "The sender requests the one-time passcode (OTP), transaction PIN, or SMS code sent to your mobile phone.",
    whyItIsSuspicious: "An OTP is the final authorization step protecting your bank account, digital wallet, or social media. Legitimate financial institutions and companies will NEVER ask you to speak or text an OTP.",
    example: "'Namaste, I am calling from eSewa / Bank technical desk. Your transaction failed. Please read the 6-digit code just arrived on your mobile to complete refund.'",
    warningSigns: [
      "Any request to read, forward, or screenshot an SMS code",
      "Claiming the OTP is required to 'cancel a mistake' or 'issue a refund'",
      "High urgency saying the code expires in seconds"
    ],
    protectionTips: [
      "Never share an OTP with anyone, including friends, family, or supposed bank staff.",
      "Read the SMS carefully: notice whether it says 'authorized transfer' or 'login'.",
      "Treat your OTP like your ATM card password."
    ],
    keywords: ["otp", "pin", "verification code", "code dinuhos", "otp dinus", "पिन", "ओटिपी"]
  },
  {
    id: "registration-fee",
    name: "Registration or Processing Fee Demands",
    nepaliName: "दर्ता शुल्क वा अग्रिम भुक्तानी माग",
    category: "Payment Pressure",
    whatItMeans: "Being asked to pay a fee before receiving a job, prize, loan, grant, or service.",
    whyItIsSuspicious: "Real companies and legitimate services do not require job applicants or prize winners to pay cash upfront. In genuine prize setups, any applicable taxes are deducted from the prize itself.",
    example: "'Congratulations, your CV is selected for Kathmandu International Airport baggage supervisor! Deposit NPR 4,500 for uniform and medical test before joining.'",
    warningSigns: [
      "Advance payment required before an interview or contract is issued",
      "Payments directed to personal digital wallets (personal eSewa/Khalti numbers)",
      "Promises that the fee will be refunded with the first paycheck"
    ],
    protectionTips: [
      "Never pay money to get a job.",
      "Check with the official company HR department directly through verified channels.",
      "Legitimate foreign employment demands should be verified on dofe.gov.np."
    ],
    keywords: ["registration fee", "processing fee", "advance payment", "uniform fee", "दर्ता शुल्क", "पैसा पठाउनुहोस्"]
  },
  {
    id: "lottery-prize",
    name: "Unsolicited Lottery & Lucky Draw Winner",
    nepaliName: "नचिताएको चिट्ठा तथा भाग्यशाली विजेता",
    category: "Unrealistic Rewards",
    whatItMeans: "A message claiming you have won a lottery, smartphone, car, or cash sum from a contest you never entered.",
    whyItIsSuspicious: "You cannot win a contest or lottery that you never bought a ticket for or entered. Fraudsters invent winners to collect 'tax fees' or personal documentation.",
    example: "'Dear customer, your mobile SIM was selected as 1st prize winner of Rs. 25,00,000 in IMO Lucky Draw 2026. Contact our officer Rana on WhatsApp.'",
    warningSigns: [
      "You never bought a ticket or entered the competition",
      "Contact must be made via WhatsApp or personal mobile numbers",
      "Demands advance tax payment or custom duty"
    ],
    protectionTips: [
      "Ignore and block the sender.",
      "Never transmit photos of your citizenship or passport.",
      "Remember: no genuine organization awards random phone numbers without prior participation."
    ],
    keywords: ["lottery", "prize", "lucky draw", "25 lakhs", "पुरस्कार", "विजेता"]
  },
  {
    id: "work-from-home-youtube",
    name: "YouTube Likes & Telegram Task Scams",
    nepaliName: "यूट्यूब लाइक तथा टेलिग्राम टास्क ठगी",
    category: "Job Scam",
    whatItMeans: "Offers to earn high daily payments simply by watching YouTube videos, following Instagram profiles, or reviewing hotels on Google Maps.",
    whyItIsSuspicious: "The scam begins with a small actual payout (e.g. NPR 200–500) to build false confidence, followed by moving you to a Telegram group where you must deposit large sums into 'prepaid tasks' to unlock higher earnings, which you can never withdraw.",
    example: "'Part-time work: Like 5 YouTube videos, earn Rs. 500 per task. Join our Telegram VIP channel now. Daily income up to Rs. 15,000.'",
    warningSigns: [
      "Unsolicited invitations via WhatsApp or Viber from foreign or unknown numbers (+91, +62, +84, etc.)",
      "Pressure to join private Telegram channels",
      "Requests to buy 'crypto tasks' or deposit funds to withdraw earned commission"
    ],
    protectionTips: [
      "Do not engage with unsolicited task job invitations.",
      "Never deposit your personal money to unlock virtual earnings.",
      "Report and leave the Telegram group immediately."
    ],
    keywords: ["youtube like", "hotel review", "telegram task", "daily income", "part time job", "घरमै बसी"]
  },
  {
    id: "guaranteed-profit-ponzi",
    name: "Guaranteed High Return Investment Schemes",
    nepaliName: "अस्वभाविक नाफा तथा ग्यारेन्टी प्रतिफल",
    category: "Investment Scam",
    whatItMeans: "Platforms or individuals promising guaranteed returns of 10%–50% per month with 'zero risk' via automated trading, crypto, or solar projects.",
    whyItIsSuspicious: "No legitimate financial market or investment vehicle can guarantee high risk-free returns. These operate as Ponzi schemes where early deposits pay fake dividends until founders vanish.",
    example: "'Deposit Rs. 30,000 and earn Rs. 1,200 every day automatically in our AI forex trading engine. 100% principal safe. Withdraw anytime.'",
    warningSigns: [
      "Claims of 'guaranteed zero risk' coupled with unusually high yields",
      "Heavy emphasis on recruiting friends to unlock tier commissions",
      "Sudden lock-up periods or 'maintenance fees' when attempting withdrawals"
    ],
    protectionTips: [
      "Always check if the institution is registered with SEBON or Nepal Rastra Bank.",
      "Remember that crypto and informal forex trading are illegal under Nepali law.",
      "If it sounds too good to be true, it is almost certainly a scam."
    ],
    keywords: ["guaranteed return", "daily profit", "zero risk", "crypto trading", "forex", "नाफा"]
  },
  {
    id: "account-suspension-urgency",
    name: "Urgent Account Suspension & KYC Threat",
    nepaliName: "खाता बन्द हुने डर तथा तत्काल प्रमाणीकरण",
    category: "Urgency / Impersonation",
    whatItMeans: "Messages threatening that your bank account, digital wallet, or social media profile will be suspended or permanently deleted today unless you click a link.",
    whyItIsSuspicious: "Scammers manufacture artificial panic so you react emotionally rather than thinking critically. Real banks give formal written notices and do not lock accounts within a 1-hour SMS window.",
    example: "'URGENT: Your mobile banking service has been stopped due to pending KYC update. Click link immediately to reactivate or account will be suspended today: bank-kyc-np.org'",
    warningSigns: [
      "Extreme urgency: 'Within 2 hours', 'Today only', 'Immediate suspension'",
      "Suspicious shortened or misspelled domain name",
      "Page asks for mobile number, password, and incoming OTP"
    ],
    protectionTips: [
      "Take a breath and pause. Do not click the link.",
      "Open your banking app directly through its official application or contact your branch.",
      "Banks in Nepal handle official KYC through branch visits or secure in-app forms."
    ],
    keywords: ["account blocked", "kyc update", "urgent", "immediate suspension", "तुरुन्त", "खाता बन्द"]
  },
  {
    id: "parcel-redirection-link",
    name: "Courier Parcel Address & Customs Duty Links",
    nepaliName: "पार्सल तथा डेलिभरी ठेगाना लिङ्क",
    category: "Delivery Scam",
    whatItMeans: "An SMS claiming your package cannot be delivered due to an incorrect house number, directing you to click an unverified link and pay a tiny re-delivery fee.",
    whyItIsSuspicious: "The tiny fee (e.g. NPR 80) is just bait to trick you into typing your credit/debit card numbers or mobile banking credentials on a phishing page.",
    example: "'Nepal Post: Your item NP-4820 delivery is on hold. Incomplete address. Please confirm your street and pay delivery charge of Rs. 65 at https://nepal-postal-track.cc'",
    warningSigns: [
      "You have not ordered any recent shipment",
      "Shortened link or unofficial domain (.cc, .top, .buzz)",
      "Unsolicited SMS from an unknown personal mobile sender"
    ],
    protectionTips: [
      "Never click tracking links inside unexpected SMS messages.",
      "Check tracking on the official merchant site where you placed your order.",
      "Legitimate postal carriers do not charge small fees through random card portals."
    ],
    keywords: ["parcel", "delivery", "nepal post", "dhl", "customs fee", "डेलिभरी", "पार्सल"]
  },
  {
    id: "qr-payment-trap",
    name: "Reverse QR Code & Accidental Transfer Traps",
    nepaliName: "उल्टो QR कोड तथा झुक्किएर पैसा पठाउने दाबी",
    category: "Payment Trap",
    whatItMeans: "A fraudster sends a QR code claiming 'Scan this to receive your payment/refund' or claims they accidentally sent money to your wallet.",
    whyItIsSuspicious: "Scanning a merchant or personal QR code in eSewa, Khalti, or mobile banking and typing your PIN will SEND money from your balance, never receive it.",
    example: "'To claim your cashback of Rs. 2,000 from the dashain offer, scan this official QR code in your eSewa app and enter your MPIN.'",
    warningSigns: [
      "Being told that entering your PIN is necessary to receive incoming funds",
      "Fake screenshot showing a supposed transfer to your phone number",
      "Aggressive phone calls demanding instant return without letting you verify your statement"
    ],
    protectionTips: [
      "Rule: You NEVER need to scan a QR code or type your PIN to RECEIVE funds.",
      "To receive money, you only provide your phone number or account number.",
      "Open your wallet app independently to inspect your actual transaction history."
    ],
    keywords: ["qr code", "scan qr", "accidental transfer", "receive money", "पिन हान्नुहोस्", "क्युआर"]
  },
  {
    id: "cloned-profile-emergency",
    name: "Cloned Relative Social Media Emergency",
    nepaliName: "आफन्तको नक्कली प्रोफाइलबाट आकस्मिक पैसा माग",
    category: "Impersonation",
    whatItMeans: "A Facebook or Instagram profile duplicating your cousin, uncle, or friend reaches out claiming an urgent medical emergency and needs quick cash.",
    whyItIsSuspicious: "Fraudsters harvest publicly visible family photos and friends lists to create duplicate accounts, targeting people when they are emotionally vulnerable.",
    example: "'Namaste bhai, my phone fell down and wallet is lost. My sister is in hospital in Chitwan. Please send Rs. 15,000 to this medical pharmacy eSewa urgently. I will call you tonight.'",
    warningSigns: [
      "Contact from an existing friend who seems to have a brand-new profile",
      "Urgent request for money through non-traditional means",
      "Excuses why they cannot speak on a regular voice or video call"
    ],
    protectionTips: [
      "Always call the relative or friend on their known standard phone number.",
      "Ask a personal question only the real person would know.",
      "Report the imposter profile to Facebook or Instagram immediately."
    ],
    keywords: ["emergency", "hospital", "bhai", "dai", "urgent money", "आकस्मिक", "अस्पताल"]
  }
];
