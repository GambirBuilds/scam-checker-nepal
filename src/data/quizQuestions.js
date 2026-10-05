export const quizQuestions = [
  {
    id: 1,
    category: "Phishing",
    question: "You receive an SMS saying your mobile banking KYC will expire today and your account will be blocked unless you verify via an attached link. What should you do?",
    options: [
      { text: "Click the link immediately so your bank account doesn't get blocked.", isCorrect: false },
      { text: "Do not click the link. Open your bank's official app or call your branch directly to verify.", isCorrect: true },
      { text: "Reply to the SMS asking if it is really your bank.", isCorrect: false },
      { text: "Forward the SMS to all your family members as a warning.", isCorrect: false }
    ],
    explanation: "Banks in Nepal never suspend accounts through arbitrary SMS links within hours. Urgency is manufactured to prevent you from thinking critically. Always verify through the bank's official app or published customer helpline."
  },
  {
    id: 2,
    category: "Payment Scams",
    question: "A stranger calls saying they accidentally transferred NPR 10,000 to your eSewa account. They send a QR code and ask you to scan it and enter your PIN to return the money. What should you do?",
    options: [
      { text: "Scan the QR code and type your PIN quickly because it is good karma to return money.", isCorrect: false },
      { text: "Open your eSewa app independently to check your statement balance. Never scan a QR or enter your PIN to receive or refund money.", isCorrect: true },
      { text: "Send half the money first to test if they are honest.", isCorrect: false },
      { text: "Give them your debit card number so they can retrieve it.", isCorrect: false }
    ],
    explanation: "Scanning a QR code and typing your PIN will SEND funds out of your account, not receive them! Always log into your wallet independently to verify if money actually arrived."
  },
  {
    id: 3,
    category: "Job Scams",
    question: "You are invited to a Telegram group offering NPR 5,000 daily to like YouTube videos and rate hotels. To unlock the highest-paying tasks, they ask for a NPR 2,000 'VIP activation fee'. What is this?",
    options: [
      { text: "A great work-from-home opportunity to start earning extra income.", isCorrect: false },
      { text: "A standard job onboarding fee common in digital marketing.", isCorrect: false },
      { text: "A classic task-based advance-fee scam. Legitimate employers never ask candidates to pay for tasks.", isCorrect: true },
      { text: "A government-sponsored youth employment project.", isCorrect: false }
    ],
    explanation: "Task scams lure victims with tiny initial payouts and then demand increasing 'prepaid deposits' that can never be withdrawn. Real companies never charge employees to work."
  },
  {
    id: 4,
    category: "Social Engineering",
    question: "Your cousin's Facebook profile sends you a Messenger text saying they had a motorcycle accident in Pokhara and need you to urgently transfer NPR 15,000 to an unknown pharmacy number. What is the safest first step?",
    options: [
      { text: "Transfer the money immediately because family emergencies come first.", isCorrect: false },
      { text: "Call your cousin on their real phone number to verify their voice and situation before taking action.", isCorrect: true },
      { text: "Ask for a photo of the motorcycle damage over Messenger.", isCorrect: false },
      { text: "Send NPR 5,000 first just in case.", isCorrect: false }
    ],
    explanation: "Scammers frequently clone or hack social media accounts to manufacture urgent medical emergencies. Always call your relative directly on their known phone number before transferring funds."
  },
  {
    id: 5,
    category: "Investment Scams",
    question: "A friend invites you to an automated online platform promising 3% daily guaranteed returns in automated crypto arbitrage, with bonuses for recruiting new members. What does this indicate?",
    options: [
      { text: "A modern financial breakthrough in decentralized blockchain algorithms.", isCorrect: false },
      { text: "A classic high-risk Ponzi / pyramid scheme, and cryptocurrency trading is prohibited in Nepal under NRB rules.", isCorrect: true },
      { text: "A safe alternative to commercial bank fixed deposits.", isCorrect: false },
      { text: "An approved investment regulated by SEBON.", isCorrect: false }
    ],
    explanation: "Guaranteed high returns with zero risk are the hallmark of Ponzi schemes. Furthermore, cryptocurrency trading and unauthorized foreign exchange investments are illegal under Nepal Rastra Bank regulations."
  },
  {
    id: 6,
    category: "Shopping Scams",
    question: "An Instagram page with 15,000 followers is selling an iPhone 15 Pro Max for NPR 42,000 with 100% advance payment required via personal eSewa. The comments on all posts are disabled. What should you deduce?",
    options: [
      { text: "It is an authentic customs clearance warehouse sale.", isCorrect: false },
      { text: "It is extremely suspicious. Disabled comments, absurdly low pricing, and no Cash on Delivery are major warning signs.", isCorrect: true },
      { text: "They disabled comments to prevent spam, so it is safe to buy.", isCorrect: false },
      { text: "Pay immediately before other customers buy out the stock.", isCorrect: false }
    ],
    explanation: "Scammers disable comments so previous victims cannot warn new buyers. Unrealistic discounts and refusal of COD are near-guarantees of fraud."
  },
  {
    id: 7,
    category: "Sensitive Data",
    question: "Someone calling from a 'Nepal Telecom technical support team' asks for the 6-digit verification code you just received on SMS so they can upgrade your 4G SIM to 5G. What should you do?",
    options: [
      { text: "Read them the code quickly so your internet speed increases.", isCorrect: false },
      { text: "Never share the code. Telecoms and service providers never ask for your SMS verification code over phone calls.", isCorrect: true },
      { text: "Read only the first 3 digits to be safe.", isCorrect: false },
      { text: "Ask them to send an email first.", isCorrect: false }
    ],
    explanation: "The verification code is likely a password reset or SIM swap authorization for your primary digital accounts. Never share OTPs or verification codes with anyone under any circumstances."
  },
  {
    id: 8,
    category: "Delivery Scams",
    question: "You receive an SMS stating: 'Nepal Post: Item NP-7820 delivery failed due to missing street address. Update within 24h at bit.ly/nepal-pkg-fee and pay NPR 85 re-dispatch fee.' You haven't ordered any overseas parcel. What should you do?",
    options: [
      { text: "Pay the NPR 85 since it is a tiny amount and might be a gift from someone.", isCorrect: false },
      { text: "Ignore and delete the message. It is a credential harvesting phishing link.", isCorrect: true },
      { text: "Click the link to see what the mystery parcel is.", isCorrect: false },
      { text: "Reply to the SMS with your home address.", isCorrect: false }
    ],
    explanation: "The small fee is lure bait to steal your credit card, debit card, or mobile banking login credentials. Legitimate postal carriers do not send generic shortened links for unaddressed parcels."
  }
];
