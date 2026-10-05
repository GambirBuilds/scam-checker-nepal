export const scamTypes = [
  {
    id: "job-scams",
    title: "Job & Work From Home Scams",
    nepaliTitle: "रोजगारी तथा घरमै बसी कमाउने स्क्याम",
    description: "Offers promising exorbitant daily pay for simple tasks like liking YouTube videos, rating hotels, or data entry, followed by a demand for 'training deposits' or 'registration fees'.",
    warningSigns: [
      "Guaranteed high daily salary (e.g. NPR 3,000–8,000/day for minimal effort)",
      "Recruiter reaches out via Telegram, WhatsApp, or unsolicited Viber text",
      "Demands upfront registration fees, security deposits, or VIP level purchases",
      "No formal interview or company registration details provided"
    ],
    example: "'Namaste! We are hiring part-time YouTube subscribers. Earn Rs. 4,500 daily. Just pay Rs. 1,000 VIP activation fee to receive tasks on Telegram.'",
    prevention: "Legitimate employers never demand payment to hire you or require advance deposits for basic work assignments.",
    whatToDo: "Cease all communication immediately. Block the recruiter on messaging apps. Never send money to unlock tasks or commissions."
  },
  {
    id: "banking-scams",
    title: "Banking & OTP Theft",
    nepaliTitle: "बैंकिङ तथा OTP चोरी",
    description: "Scammers claiming to be from your bank requesting your One-Time Password (OTP), mobile banking PIN, or claiming your account will be suspended today.",
    warningSigns: [
      "Caller urges you to read out an SMS code or OTP received on your phone",
      "Threatens immediate account freeze or KYC deadline expiration",
      "Sends unverified links claiming to be 'Mobile Banking Update Portal'",
      "Asks for ATM PIN or debit card CVV digits"
    ],
    example: "'Your bank account has been flagged for KYC expiry. To prevent immediate suspension within 2 hours, click here and verify with your 6-digit OTP.'",
    prevention: "Banks in Nepal NEVER ask for OTP, mobile banking MPIN, or transaction PIN over call, SMS, or WhatsApp.",
    whatToDo: "Hang up. Call your bank's official 24/7 card/support helpline found on the back of your ATM card or official website."
  },
  {
    id: "digital-payment-scams",
    title: "Digital Wallet & QR Payment Scams",
    nepaliTitle: "डिजिटल वालेट (eSewa / Khalti) तथा QR स्क्याम",
    description: "Tricking users on eSewa, Khalti, or ConnectIPS into sending funds by sending a 'Receive Money' QR code that actually charges you, or claiming accidental money transfers.",
    warningSigns: [
      "Sender tells you: 'Scan this QR code and type your PIN to receive prize/refund'",
      "Claims they accidentally sent NPR 20,000 to your wallet and sends a fake SMS screenshot",
      "Urges you to quickly refund without checking your real wallet app balance",
      "Requests screen sharing via AnyDesk or TeamViewer"
    ],
    example: "'I accidentally transferred Rs. 15,000 to your eSewa ID. Please send it back immediately or police will be informed!'",
    prevention: "You NEVER need to enter your wallet PIN or scan a payment QR to RECEIVE money. Always log directly into your wallet app to check statement balances.",
    whatToDo: "Do not scan QR codes to receive funds. Check wallet transaction history inside the official app. Block the coercive caller."
  },
  {
    id: "online-shopping-scams",
    title: "Online Shopping & Fake Pages",
    nepaliTitle: "अनलाइन किनमेल तथा नक्कली पेजहरू",
    description: "Fake Instagram and TikTok fashion or electronics boutiques advertising popular smartphones, jackets, or shoes at 70% discount requiring 100% advance payment.",
    warningSigns: [
      "New social page with comments disabled or heavily curated",
      "Prices unrealistically low (e.g. iPhone 15 Pro for NPR 35,000)",
      "Refusal of Cash on Delivery (COD) without genuine store credentials",
      "Personal wallet transfer demanded instead of registered merchant account"
    ],
    example: "'Mega clearance! Original iPhone 15 Pro Max only Rs. 40,000. 100% advance via eSewa required for flight delivery from Birgunj customs.'",
    prevention: "Look for physical store addresses, registered PAN/VAT receipts, and prefer Cash on Delivery (COD) for unverified sellers.",
    whatToDo: "Report the fake profile on Instagram/Facebook. Never send advance money to personal unverified numbers."
  },
  {
    id: "delivery-scams",
    title: "Parcel & Courier Delivery Scams",
    nepaliTitle: "डेलिभरी तथा नक्कली पार्सल सूचना",
    description: "SMS or WhatsApp messages asserting that a mystery parcel or overseas package is held at customs or courier warehouse and requires customs clearance fees.",
    warningSigns: [
      "SMS contains a shortened URL claiming your package address is missing",
      "Demands small customs duty or re-delivery fee of NPR 50–500 via an unknown gateway",
      "You did not order any international package recently",
      "Sender claims to be Nepal Post or DHL but uses an ordinary personal mobile number"
    ],
    example: "'Nepal Post: Your parcel #NP8941 cannot be delivered due to wrong house address. Update address and pay Rs. 85 within 24h at: bit.ly/nepal-pkg'",
    prevention: "Check official courier tracking websites directly. Legitimate postal carriers do not send strange shortened links requesting urgent card info.",
    whatToDo: "Delete the message. Do not open the link or enter banking information."
  },
  {
    id: "lottery-prize-scams",
    title: "Lottery & Lucky Winner Scams",
    nepaliTitle: "चिठ्ठा तथा पुरस्कार स्क्याम",
    description: "Notifications declaring you have won a lottery (often impersonating IMO, Kaun Banega Crorepati, WhatsApp Lucky Draw, or car giveaways) demanding tax clearance.",
    warningSigns: [
      "Claims you won millions in a contest you never entered",
      "Demands a 10%–20% 'tax deposit' or 'processing charge' before prize dispatch",
      "Displays forged certificates with fake government or lottery seals",
      "Insists on secrecy from family and friends"
    ],
    example: "'Congratulations! Your WhatsApp number was selected in KBC / IMO Lottery 2026 for 25 Lakhs cash. Contact Manager Rana on WhatsApp to claim after paying 25,000 tax.'",
    prevention: "Real lotteries deduct legal taxes at source; you are never asked to send your own money first to receive a genuine reward.",
    whatToDo: "Block and report. Never send funds or share ID documents like citizenship or passport."
  },
  {
    id: "investment-scams",
    title: "High-Yield Investment & Ponzi Schemes",
    nepaliTitle: "अस्वभाविक लगानी तथा पिरामिड योजना",
    description: "Schemes promising 20%–50% guaranteed weekly returns through automated algorithmic trading, solar projects, gold arbitrage, or referral pyramids.",
    warningSigns: [
      "Promises of zero-risk guaranteed profits far above bank interest rates",
      "Pressure to recruit friends and family for commission tiers",
      "Difficulty or excessive fees when attempting to withdraw initial capital",
      "No registration with SEBON (Securities Board of Nepal) or Company Registrar"
    ],
    example: "'Invest Rs. 50,000 today in global green energy arbitrage and get Rs. 3,500 daily passive income directly into your bank. 100% risk free!'",
    prevention: "High returns without risk do not exist. Always check if the company is licensed by SEBON or Nepal Rastra Bank.",
    whatToDo: "Do not invest further capital. Attempt to withdraw any remaining balance immediately without paying additional 'withdrawal fees'."
  },
  {
    id: "social-media-scams",
    title: "Social Media Impersonation & Cloned Accounts",
    nepaliTitle: "सामाजिक सञ्जालमा साथी/आफन्तको नक्कली प्रोफाइल",
    description: "Scammers duplicate a relative's or friend's Facebook or Instagram profile and send urgent messages claiming medical or travel emergencies needing immediate cash.",
    warningSigns: [
      "Sudden message from a familiar contact from a brand new secondary profile",
      "Desperate plea for quick emergency money transfer via eSewa or bank",
      "Avoids voice or video phone call when you try to verify",
      "Tone of writing feels unusual or hurried"
    ],
    example: "'Dai, I'm stuck in an emergency in Pokhara hospital and my wallet is blocked. Please send Rs. 10,000 to this eSewa number immediately, I will return tomorrow.'",
    prevention: "Always call the friend or family member on their known primary phone number before transferring any money.",
    whatToDo: "Report the cloned profile on Facebook/Instagram. Alert the real person immediately so they can notify mutual contacts."
  },
  {
    id: "account-takeover",
    title: "Account Takeover & Social Phishing",
    nepaliTitle: "खाता ह्याकिङ तथा नक्कली लगइन",
    description: "Messages stating 'Is this you in this video?' or fake copyright violation notices designed to steal your Facebook, Instagram, or email credentials.",
    warningSigns: [
      "Link directs to an external page mimicking Facebook or Instagram login",
      "Domain address has subtle typos (e.g. faceb00k-verify.net)",
      "Threatens immediate page deletion or copyright suspension",
      "Requests two-factor authentication recovery codes"
    ],
    example: "'Meta Support: Your page has violated copyright guidelines. Your account will be disabled in 24 hours. Confirm your password here: meta-appeal-security.biz'",
    prevention: "Never enter social media passwords on third-party links received via Messenger or Instagram DM. Look at the exact URL bar.",
    whatToDo: "If password was typed, immediately change your password from the official app and log out of all sessions. Enable 2FA."
  },
  {
    id: "impersonation",
    title: "Authority & Law Enforcement Impersonation",
    nepaliTitle: "प्रहरी वा सरकारी अधिकारीको नाममा ठगी",
    description: "Callers pretending to be Nepal Police Cyber Bureau officers or customs investigators claiming your documents were found in illegal packages or drug trafficking.",
    warningSigns: [
      "Caller claims you are facing an arrest warrant unless you pay an immediate fine",
      "Demands video call while showing fake badges or dressed in simulated uniforms",
      "Instructs you to stay on call and transfer funds to a 'safe verification account'",
      "Demands secrecy under official secrecy threats"
    ],
    example: "'This is Inspector Sharma from Cyber Bureau Kathmandu. Your citizenship was linked to a criminal money laundering ring. Transfer your savings to government audit vault to verify innocence.'",
    prevention: "Law enforcement officers in Nepal NEVER demand money transfers or fines over the phone to clear charges or cancel warrants.",
    whatToDo: "Hang up immediately. Visit your nearest local police station or contact Nepal Police Cyber Bureau through official numbers (01-4412555)."
  },
  {
    id: "fake-government-messages",
    title: "Fake Government Subsidies & Grants",
    nepaliTitle: "नक्कली सरकारी राहत तथा अनुदान",
    description: "Phishing links promoting fake Nepal Government youth subsidies, student laptop grants, Dashain-Tihar festival allowances, or relief funds.",
    warningSigns: [
      "Links hosted on free blog domains (.blogspot, .xyz, .top) instead of official .gov.np",
      "Demands sharing to 10 WhatsApp groups before unlocking the grant application",
      "Asks for sensitive personal citizenship and bank account numbers",
      "Sensationalist headlines promising free laptops or cash"
    ],
    example: "'Nepal Government Prime Minister Youth Grant 2026: Get free laptop + Rs. 25,000 allowance. Fill form and share to 5 groups to activate: nepal-relief-gov.xyz'",
    prevention: "All authentic Government of Nepal programs are hosted strictly on official '.gov.np' domains and announced via national gazette and mainstream news.",
    whatToDo: "Do not forward the message. Close the webpage and warn friends who shared it."
  },
  {
    id: "fake-customer-support",
    title: "Fake Customer Support & Helpline Numbers",
    nepaliTitle: "नक्कली ग्राहक सेवा तथा हेल्पलाइन",
    description: "Bogus support phone numbers posted in Facebook groups, comments, or Google Maps claiming to be official helpdesks for eSewa, airlines, or banks.",
    warningSigns: [
      "Support contact is a personal 10-digit mobile number on WhatsApp rather than toll-free or landline",
      "Agent instructs you to download remote desktop apps (AnyDesk, RustDesk)",
      "Agent asks you to initiate a fund transfer to 'test' transaction restoration",
      "Demands payment to resolve pending refund issues"
    ],
    example: "'Need eSewa transaction support? Call our 24/7 emergency customer officer on WhatsApp 98XXXXXXXX. We will refund failed amount immediately.'",
    prevention: "Only use customer support channels listed directly inside official apps or verified company domain websites.",
    whatToDo: "Never install remote control apps at the behest of an unknown caller. Terminate the conversation."
  },
  {
    id: "scholarship-scams",
    title: "Fake International Scholarships & Visas",
    nepaliTitle: "नक्कली विदेशी छात्रवृत्ति तथा भिसा",
    description: "Unregistered educational consultancies advertising '100% full-ride scholarships with no IELTS required' demanding upfront document processing payments.",
    warningSigns: [
      "Guarantees visa approval or offers fake embassy invitation letters",
      "Unregistered agency without Ministry of Education / ECAN accreditation",
      "Requires high fees paid in cash or to personal bank accounts before admission",
      "Promises guaranteed PR or job placement without qualifications"
    ],
    example: "'Study in Australia with 100% scholarship. No IELTS/PTE required. Visa guaranteed. Pay Rs. 75,000 registration fee before slots close this Friday.'",
    prevention: "Verify consultancy registration with the Ministry of Education, Science and Technology (MoEST) and verify scholarship programs on official university sites.",
    whatToDo: "Do not pay advance consultancy charges. Request registration paperwork and tax clearance proofs."
  },
  {
    id: "overseas-employment-scams",
    title: "Foreign Employment & Manpower Fraud",
    nepaliTitle: "वैदेशिक रोजगारी तथा नक्कली डिमाण्ड",
    description: "Fake foreign employment agents promising lucrative jobs in European nations, Dubai, or Poland on visit visas demanding lakhs in advance cash without labor permits.",
    warningSigns: [
      "Offer relies on Visit Visa or Tourist Visa with promise of conversion upon arrival",
      "No official Demand Letter verified by Department of Foreign Employment (DoFE)",
      "Demands cash payment without authentic legal receipt on authorized manpower letterhead",
      "Agent operates informally through hotel lobbies or messaging apps"
    ],
    example: "'Urgent demand for Poland & Croatia: Construction and hotel staff. Salary 1.8 Lakhs. Visit visa flight in 15 days. Advance Rs. 2 Lakhs required.'",
    prevention: "Check the LT (Lot) number and agency registration status on the official DoFE portal (dofe.gov.np) before parting with money.",
    whatToDo: "Never travel for foreign employment on a tourist/visit visa. Report unauthorized middlemen to the Department of Foreign Employment."
  },
  {
    id: "crypto-investment-fraud",
    title: "Illegal Crypto & Forex Trading Traps",
    nepaliTitle: "अवैध क्रिप्टोकरेन्सी तथा फोरेक्स ठगी",
    description: "Platforms promoting cryptocurrency investments, USDT mining, or binary options trading, which are illegal under Nepal Rastra Bank regulations and frequently exit-scams.",
    warningSigns: [
      "Promotes trading in Bitcoin, USDT, or Forex which are illegal under Nepali law",
      "Promises guaranteed daily percentage growth on USDT deposits",
      "Displays fake digital dashboards showing rapidly escalating fictitious profits",
      "Demands 'tax release fees' when you try to withdraw your funds"
    ],
    example: "'Earn 5% daily USDT return through automated AI crypto trading in Nepal. Minimum deposit 100 USDT via Binance P2P. Daily withdrawal guaranteed.'",
    prevention: "Cryptocurrency trading and unauthorized forex activities are illegal in Nepal as per Nepal Rastra Bank directives. These platforms almost always steal deposits.",
    whatToDo: "Do not send additional deposits. Understand that offshore unregulated crypto platforms offer zero legal protection in Nepal."
  }
];
