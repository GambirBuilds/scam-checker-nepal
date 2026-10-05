/**
 * Scam Vocabulary Dictionary for Scam Checker Nepal.
 * Provides accessible, student-friendly cybersecurity explanations for common fraud terminology.
 */

export const scamDictionaryTerms = [
  {
    id: "phishing",
    term: "Phishing",
    nepaliTerm: "फिसिङ (नक्कली लिङ्क वा इमेल)",
    category: "Technical Fraud",
    definition: "A deceptive tactic where attackers impersonate trusted institutions via email, website clones, or messages to trick victims into revealing sensitive information like passwords and credit card numbers.",
    howItWorks: "You receive an official-looking message asking you to click a link to verify your account or claim a reward. The link opens a clone website that saves whatever you type.",
    warningSigns: [
      "Mismatched domain names (e.g. nabil-bank-secure.cc instead of official bank portal)",
      "Urgent threats of account termination",
      "Generic greetings like 'Dear Customer' instead of your name",
      "Requests for passwords or OTPs"
    ],
    whatToDo: [
      "Never click links sent via unsolicited messages.",
      "Navigate to the service independently by typing the official address in your browser.",
      "Check browser address bar for official HTTPS domain."
    ]
  },
  {
    id: "smishing",
    term: "Smishing (SMS Phishing)",
    nepaliTerm: "स्मिसिङ (SMS मार्फत ठगी)",
    category: "Messaging Fraud",
    definition: "Phishing carried out specifically through Short Message Service (SMS) text messages on mobile phones.",
    howItWorks: "An SMS arrives claiming your mobile banking KYC expired or a delivery courier cannot deliver your package without immediate link verification.",
    warningSigns: [
      "SMS from unknown 10-digit mobile numbers claiming to represent national banks",
      "Links with shortened URLs like bit.ly or tinyurl",
      "Panic-inducing language about account blockages"
    ],
    whatToDo: [
      "Do not tap on links in SMS messages.",
      "Call your bank or courier service directly using numbers from official passbooks or verified websites.",
      "Delete or block the suspicious sender."
    ]
  },
  {
    id: "vishing",
    term: "Vishing (Voice Phishing)",
    nepaliTerm: "भिसिङ (फोन कल मार्फत ठगी)",
    category: "Voice Fraud",
    definition: "Phone call scams where fraudsters pose as police officers, bank representatives, lottery organizers, or tech support to extract private information or money.",
    howItWorks: "A caller claims your bank account is compromised or you won a prize, pressuring you while on the call to read aloud an OTP sent to your phone.",
    warningSigns: [
      "Caller demands that you stay on the line and not disconnect",
      "Caller asks you to read aloud an SMS verification code",
      "Background call-center noise used to fake legitimacy"
    ],
    whatToDo: [
      "Hang up immediately.",
      "Never read an OTP over the phone to anyone, even if they claim to work for the bank.",
      "Initiate a return call to the official helpline published on your bank card."
    ]
  },
  {
    id: "social-engineering",
    term: "Social Engineering",
    nepaliTerm: "सामाजिक इन्जिनियरिङ (मानसिक छलछाम)",
    category: "Psychological Manipulation",
    definition: "The psychological manipulation of people into performing actions or divulging confidential information, exploiting human traits like trust, fear, curiosity, or greed.",
    howItWorks: "Rather than hacking technical firewalls, attackers manipulate the human. They pretend to be a distressed friend or authority to bypass security skepticism.",
    warningSigns: [
      "Appeals to extreme urgency, emergency, or secrecy",
      "Offers that sound disproportionately lucrative",
      "Insistence that standard verification procedures be skipped"
    ],
    whatToDo: [
      "Pause and take a breath. Do not make rushed decisions under pressure.",
      "Discuss the request with a family member or trusted colleague.",
      "Always verify through an independent channel before transferring funds or data."
    ]
  },
  {
    id: "impersonation",
    term: "Impersonation",
    nepaliTerm: "नक्कली पहिचान धारण",
    category: "Identity Fraud",
    definition: "Pretending to be someone else—such as a company executive, police officer, government official, or family member—to gain illicit advantage or funds.",
    howItWorks: "A scammer sets their WhatsApp or Facebook profile photo to match an official police logo or a relative's photo and messages you requesting immediate financial help.",
    warningSigns: [
      "New, unfamiliar phone number claiming to belong to a known friend or relative",
      "Grammar and phrasing that does not sound like the person you know",
      "Requests to transfer money to a third-party wallet name"
    ],
    whatToDo: [
      "Call the person on their known, original phone number to verify.",
      "Ask a personal question only the real individual could answer.",
      "Do not send money until voice or face confirmation is established."
    ]
  },
  {
    id: "spoofing",
    term: "Spoofing",
    nepaliTerm: "स्पूफिङ (नक्कली कलर वा प्रेषक देखाउने)",
    category: "Technical Fraud",
    definition: "Falsifying caller ID, sender name, or website headers so that a communication appears to originate from an authentic trusted source.",
    howItWorks: "Using online VoIP spoofing tools, an attacker makes their outgoing phone call or SMS display 'NEPAL_POLICE' or 'BANK_ALERT' on your phone screen.",
    warningSigns: [
      "A caller ID showing a government name, but the caller speaks informally or demands cash transfer",
      "Incoming SMS appearing in the same thread as legitimate alerts, but linking to an obscure foreign domain",
      "Inability to return a call to the displayed number"
    ],
    whatToDo: [
      "Remember that caller IDs and SMS sender headers can be technically falsified.",
      "Hang up and independently dial the organization's verified phone number."
    ]
  },
  {
    id: "otp-scam",
    term: "OTP Scam",
    nepaliTerm: "ओटिपी (OTP) चोरी ठगी",
    category: "Credential Theft",
    definition: "Tricking a user into disclosing a One-Time Password (OTP) sent to their device, enabling the scammer to authorize unauthorized financial transactions or account takeovers.",
    howItWorks: "The attacker initiates a password reset or funds transfer on your eSewa, bank, or Gmail, then calls you saying: 'We sent a verification code to check your KYC, please read it to me.'",
    warningSigns: [
      "Any person asking you to read, share, or forward an SMS code",
      "SMS explicitly stating 'Do not share this code with anyone, including bank staff'",
      "Pressure to act before the 60-second OTP timer runs out"
    ],
    whatToDo: [
      "Treat your OTP as your signature: NEVER share it with anyone under any circumstances.",
      "Carefully read the SMS containing the code—it often says what action is being authorized."
    ]
  },
  {
    id: "qr-scam",
    term: "QR Scam (Reverse QR Fraud)",
    nepaliTerm: "क्युआर (QR) कोड ठगी",
    category: "Payment Fraud",
    definition: "Tricking victims into scanning a merchant or payment QR code under the false pretense of 'receiving' money or prizes, which actually debits funds from their account.",
    howItWorks: "A buyer on Hamrobazar or Facebook Marketplace sends you a QR code claiming 'Scan this to receive your advance payment.' When you scan and enter your MPIN, money leaves your wallet.",
    warningSigns: [
      "Being told you must scan a QR code to receive money",
      "Being asked to enter your MPIN or PIN to collect funds",
      "Sender claiming their system requires a reverse verification scan"
    ],
    whatToDo: [
      "Fundamental Rule: You NEVER need to enter your PIN or scan a QR code to RECEIVE money.",
      "To receive funds, simply provide your phone number or account number."
    ]
  },
  {
    id: "payment-scam",
    term: "Payment Scam",
    nepaliTerm: "डिजिटल वालेट तथा भुक्तानी ठगी",
    category: "Financial Fraud",
    definition: "Deceiving someone into transferring funds via digital wallets (eSewa, Khalti, ConnectIPS) using fabricated stories such as accidental deposits or escrow deposits.",
    howItWorks: "A caller sends a fake SMS screenshot showing Rs. 15,000 sent to your number, claiming it was an error and begging you to send it back before you check your actual balance.",
    warningSigns: [
      "Claim of accidental transfer accompanied by frantic emotional begging",
      "Notification came via ordinary SMS from a personal number rather than the official wallet sender",
      "Your actual wallet balance has not increased"
    ],
    whatToDo: [
      "Always open your official wallet app and check transaction history directly.",
      "If money truly arrived accidentally, ask the sender to file a dispute with wallet customer service."
    ]
  },
  {
    id: "investment-scam",
    term: "Investment Scam",
    nepaliTerm: "अवैध तथा नक्कली लगानी ठगी",
    category: "Financial Fraud",
    definition: "Fraudulent schemes promising guaranteed high returns, zero-risk profits, or automated crypto/forex trading bots.",
    howItWorks: "You are added to a Telegram VIP trading channel where fake members post screenshots of daily profits. You invest a small amount and see fake dashboard gains, but when you try to withdraw, you are asked for huge 'release fees'.",
    warningSigns: [
      "Promises of 5%–20% daily or weekly profit",
      "Statements like '100% risk-free' or 'guaranteed returns'",
      "Inability to withdraw your initial investment without paying extra taxes"
    ],
    whatToDo: [
      "Understand that high return without risk does not exist.",
      "Cryptocurrency trading and unauthorized forex are illegal in Nepal under Nepal Rastra Bank directives.",
      "Invest only in registered mutual funds and SEBON-approved entities."
    ]
  },
  {
    id: "job-scam",
    term: "Job Scam",
    nepaliTerm: "रोजगारी तथा कामको बहानामा ठगी",
    category: "Employment Fraud",
    definition: "Fraudulent employment offers targeting students and jobseekers with promises of lucrative remote work in exchange for advance registration, training, or equipment fees.",
    howItWorks: "You are offered Rs. 3,000/day for liking YouTube videos or rating Google Maps. After earning a few small credits, you are told to deposit Rs. 10,000 to unlock VIP payout tasks.",
    warningSigns: [
      "Job offer without formal resume submission or interview",
      "Requirement to pay registration or processing fees upfront",
      "Communication conducted entirely over Telegram or WhatsApp"
    ],
    whatToDo: [
      "Legitimate employers pay you; they NEVER ask you to pay them for a job.",
      "Verify company existence through the Department of Labor or official portals."
    ]
  },
  {
    id: "marketplace-scam",
    term: "Marketplace Scam",
    nepaliTerm: "अनलाइन खरिदबिक्री ठगी",
    category: "E-Commerce Fraud",
    definition: "Scams conducted on peer-to-peer marketplaces (Hamrobazar, Instagram pages, Facebook Marketplace) where goods are advertised at unrealistic discounts with advance payment demands.",
    howItWorks: "An Instagram shop displays iPhones or branded shoes at 70% discount. When you order, they insist on 100% advance payment via eSewa, then block your profile once money is sent.",
    warningSigns: [
      "Unrealistically cheap prices (e.g. iPhone 15 for Rs. 35,000)",
      "Strict refusal of Cash on Delivery (COD) or in-person pickup",
      "Page has disabled comments and newly registered profile date"
    ],
    whatToDo: [
      "Prefer Cash on Delivery (COD) whenever possible.",
      "For second-hand goods, meet the seller in a safe, public place and inspect the item before paying."
    ]
  },
  {
    id: "account-takeover",
    term: "Account Takeover (ATO)",
    nepaliTerm: "खाता कब्जा (Account Takeover)",
    category: "Cybersecurity Threat",
    definition: "When an unauthorized person gains full access to a victim's email, social media, or banking account by stealing credentials or bypassing authentication.",
    howItWorks: "The attacker obtains your login credentials from a data leak or phishing page, logs into your Facebook, changes the recovery email, and messages your friends for urgent money.",
    warningSigns: [
      "Receiving unexpected password reset emails",
      "Security notifications of logins from unknown cities or devices",
      "Friends informing you that your account is messaging them weird requests"
    ],
    whatToDo: [
      "Enable Two-Factor Authentication (2FA) using an Authenticator app rather than SMS where possible.",
      "Use strong, unique passwords for every service.",
      "Regularly review 'Active Sessions' in account settings."
    ]
  },
  {
    id: "credential-theft",
    term: "Credential Theft",
    nepaliTerm: "गोप्य विवरण तथा पासवर्ड चोरी",
    category: "Identity Fraud",
    definition: "The acquisition of confidential login data (usernames, passwords, security keys) through phishing, malware, keyloggers, or database breaches.",
    howItWorks: "Malicious software or fake login forms record your keystrokes when you log into public Wi-Fi or download unauthorized APK files.",
    warningSigns: [
      "Sudden slow performance after installing third-party apps (.apk)",
      "Unprompted login prompts while browsing ordinary sites",
      "Account security warnings"
    ],
    whatToDo: [
      "Never install unverified Android APKs from WhatsApp or Telegram.",
      "Use a password manager to generate and store complex credentials.",
      "Never log into sensitive accounts on shared public computers."
    ]
  },
  {
    id: "fake-support-scam",
    term: "Fake Support Scam",
    nepaliTerm: "नक्कली ग्राहक सेवा ठगी",
    category: "Customer Service Fraud",
    definition: "Criminals publishing fake customer support telephone numbers on Google Search, Facebook, or WhatsApp claiming to represent eSewa, banks, or flight booking agencies.",
    howItWorks: "You search Google for 'eSewa customer care phone' and call a sponsored fake number. The person instructs you to install AnyDesk to 'refund' your failed transaction.",
    warningSigns: [
      "Customer support agent asking you to install remote access apps (AnyDesk, TeamViewer)",
      "Representative asking for your PIN, OTP, or password to assist you",
      "Representative demanding an advance test fee to release funds"
    ],
    whatToDo: [
      "Find customer care contacts ONLY inside the official mobile app or verified official website.",
      "Never trust search engine ads for bank or wallet customer care numbers."
    ]
  },
  {
    id: "romance-scam",
    term: "Romance Scam",
    nepaliTerm: "प्रेम वा सम्बन्धको बहानामा ठगी",
    category: "Emotional Fraud",
    definition: "Fraudsters establishing fake emotional relationships online over weeks or months, culminating in requests for money for travel, customs clearance, or emergencies.",
    howItWorks: "A supposed overseas doctor or military officer chats with you, declares love, and claims to have sent expensive jewelry or cash gifts that are now 'stuck at Kathmandu customs'.",
    warningSigns: [
      "Online acquaintance professes deep love very quickly without meeting in person",
      "Claims to have sent a luxury parcel that requires you to pay 'customs release fees' to a personal Nepali bank account",
      "Constant excuses why video calls are impossible"
    ],
    whatToDo: [
      "Never send money or pay customs fees on behalf of an online contact you have never met in person.",
      "Customs duties in Nepal are paid through official customs declarations, never to personal eSewa accounts."
    ]
  },
  {
    id: "advance-fee-scam",
    term: "Advance Fee Scam (419 Fraud)",
    nepaliTerm: "अग्रिम शुल्क ठगी",
    category: "Financial Fraud",
    definition: "A broad category of fraud where the victim is promised a significant sum of money, job, prize, or loan, but must first pay a small upfront fee to facilitate the transaction.",
    howItWorks: "The scammer invents administrative hurdles—notary fees, currency conversion charges, or delivery taxes—requiring repeated payments while the promised benefit never materializes.",
    warningSigns: [
      "Having to pay money in order to receive money",
      "Each payment is supposedly the 'final step', followed by yet another unexpected fee demand",
      "Payment requested through untraceable peer-to-peer digital wallets"
    ],
    whatToDo: [
      "Recognize the pattern: If you have to pay money to claim your own money, it is a scam.",
      "Cut off all contact and do not send additional funds hoping to recoup prior losses."
    ]
  }
];
