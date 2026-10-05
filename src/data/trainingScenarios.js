/**
 * Scam Simulation Training Scenarios
 * Fictional educational interactive scenarios for digital defense practice.
 */

export const trainingScenarios = [
  {
    id: "scen-01",
    level: "BEGINNER",
    title: "The Unsolicited Job Offer with Upfront Fee",
    context: "You receive an unsolicited WhatsApp message from an unknown number with a company logo.",
    message: "Namaste! You have been selected for online data review with a salary of Rs. 65,000/month. No prior experience is needed. Before receiving your laptop and task link, you must pay Rs. 2,000 registration fee to our HR eSewa account.",
    question: "What is the safest and most prudent action to take?",
    options: [
      {
        id: "A",
        text: "Pay the Rs. 2,000 fee quickly so you do not miss out on a high-paying opportunity.",
        isCorrect: false,
        feedback: "Incorrect. Paying advance fees is how job scammers steal your money. Legitimate companies never charge candidates to work."
      },
      {
        id: "B",
        text: "Send photos of your citizenship certificate and academic transcripts first to prove you are qualified.",
        isCorrect: false,
        feedback: "Incorrect. Never send copies of your citizenship or passport to unverified numbers on WhatsApp; these can be used for identity theft."
      },
      {
        id: "C",
        text: "Do not pay anything. Block the sender and verify job vacancies only through official company websites.",
        isCorrect: true,
        feedback: "Correct! Legitimate employers in Nepal pay you for your work—they never require candidates to transfer registration or equipment fees upfront."
      },
      {
        id: "D",
        text: "Ask for a 50% discount on the registration fee.",
        isCorrect: false,
        feedback: "Incorrect. Even paying a smaller amount still results in financial loss and marks your number as vulnerable to further scams."
      }
    ],
    tacticIdentified: "Payment Pressure + Unrealistic Reward",
    lesson: "Legitimate employment NEVER requires advance cash deposits."
  },
  {
    id: "scen-02",
    level: "BEGINNER",
    title: "The Urgent Bank KYC Expiration Warning",
    context: "You receive an SMS from an alphanumeric sender that resembles your commercial bank.",
    message: "URGENT: Your mobile banking account will be deactivated within 2 hours due to pending KYC update. Click link immediately to verify OTP and prevent blockage: http://nic-bank-kyc.cc/login",
    question: "What should you do immediately upon receiving this message?",
    options: [
      {
        id: "A",
        text: "Click the link and quickly submit your OTP so your bank account is not frozen.",
        isCorrect: false,
        feedback: "Incorrect. The link leads to an unencrypted phishing website designed to steal your credentials and authorize fraudulent transfers."
      },
      {
        id: "B",
        text: "Ignore the link. Open your official banking app independently or call your local branch to verify.",
        isCorrect: true,
        feedback: "Correct! Commercial banks in Nepal do not freeze accounts within hours via SMS links. Always navigate independently through official apps."
      },
      {
        id: "C",
        text: "Reply to the SMS asking if your ATM card is also affected.",
        isCorrect: false,
        feedback: "Incorrect. SMS shortcodes and spoofed senders cannot receive replies, or replies will confirm your phone number is active to attackers."
      },
      {
        id: "D",
        text: "Forward the SMS to 5 friends so they can test if the website works.",
        isCorrect: false,
        feedback: "Incorrect. Never forward phishing links, as this spreads the risk to your friends and family."
      }
    ],
    tacticIdentified: "Artificial Urgency + Credential Request",
    lesson: "Never click verification links inside SMS messages."
  },
  {
    id: "scen-03",
    level: "INTERMEDIATE",
    title: "The Accidental eSewa Money Transfer Call",
    context: "You receive a hurried phone call from a distressed stranger.",
    message: "'Hello brother, I mistakenly transferred Rs. 15,000 to your eSewa account instead of my sister in the hospital. I just sent a refund QR code to your Viber. Please scan it and type your MPIN immediately to send it back!'",
    question: "What is the correct protocol in this situation?",
    options: [
      {
        id: "A",
        text: "Scan the QR code and type your PIN right away because it is a hospital emergency.",
        isCorrect: false,
        feedback: "Incorrect. In mobile wallets, scanning a QR code and typing your MPIN will transfer money OUT of your wallet, not into it."
      },
      {
        id: "B",
        text: "Open your eSewa app independently to check your real balance. Never scan a QR code or enter your PIN to return money.",
        isCorrect: true,
        feedback: "Correct! Scammers use fake screenshots and reverse QR codes to rob you. Always verify your real statement balance independently inside the official app."
      },
      {
        id: "C",
        text: "Give the caller your ATM card number so their bank can retrieve the funds.",
        isCorrect: false,
        feedback: "Incorrect. Never disclose debit card digits or CVVs to unknown callers under any pretext."
      },
      {
        id: "D",
        text: "Transfer half the money first to be kind.",
        isCorrect: false,
        feedback: "Incorrect. If no money was actually received in your account, sending even Rs. 1 is an outright loss."
      }
    ],
    tacticIdentified: "Emotional Manipulation + Reverse QR Payment Trap",
    lesson: "You NEVER need to enter a PIN to receive or refund money."
  },
  {
    id: "scen-04",
    level: "INTERMEDIATE",
    title: "The 75% Clearance Sale on Social Media",
    context: "You see an Instagram sponsored post advertising a new iPhone 15 for NPR 39,000.",
    message: "Festival Clearance Sale! Original iPhone 15 128GB only Rs. 39,000! Only 3 units left. 100% advance payment via eSewa required for flight dispatch from customs. No Cash on Delivery. Order in DM now!",
    question: "How should you evaluate this promotional offer?",
    options: [
      {
        id: "A",
        text: "Pay immediately via eSewa before the remaining 3 units sell out.",
        isCorrect: false,
        feedback: "Incorrect. High-value electronics sold at 75% discounts with advance-only payments are classic counterfeit or non-delivery traps."
      },
      {
        id: "B",
        text: "Send a 50% deposit and ask for the remaining 50% upon delivery.",
        isCorrect: false,
        feedback: "Incorrect. The fraudulent page will still pocket your 50% deposit and block your profile on Instagram."
      },
      {
        id: "C",
        text: "Recognize the extreme discount, lack of Cash on Delivery, and personal wallet payment as critical scam flags. Avoid advance payment.",
        isCorrect: true,
        feedback: "Correct! Legitimate retailers in Nepal have registered PAN certificates, physical showroom locations, and offer Cash on Delivery (COD) for consumer peace of mind."
      },
      {
        id: "D",
        text: "Ask the seller to send a photo of their citizenship as guarantee.",
        isCorrect: false,
        feedback: "Incorrect. Scammers frequently possess stolen photos of other victims' citizenship documents to establish fake trust."
      }
    ],
    tacticIdentified: "Scarcity + Greed + Payment Pressure",
    lesson: "Never make advance wallet transfers to unknown social media sellers."
  },
  {
    id: "scen-05",
    level: "ADVANCED",
    title: "The Simulated Cyber Bureau Officer Video Call",
    context: "You receive a WhatsApp video call from a user displaying the Nepal Police crest as their avatar.",
    message: "A man in a simulated police uniform states: 'Your citizenship card was recovered from a seized parcel containing narcotics in Birgunj. A formal warrant is registered against you. To prove your innocence, transfer your savings to the Nepal Rastra Bank verification escrow within 1 hour. Do not inform your family or you will face immediate arrest.'",
    question: "How should an informed citizen respond to this situation?",
    options: [
      {
        id: "A",
        text: "Comply immediately and transfer the money to clear your name from the narcotics case.",
        isCorrect: false,
        feedback: "Incorrect. Law enforcement agencies in Nepal never demand funds, bail, or escrow transfers over WhatsApp video calls."
      },
      {
        id: "B",
        text: "Terminate the call immediately. Do not transfer any money. Visit your local police station or contact Nepal Police Cyber Bureau directly at 01-4412555.",
        isCorrect: true,
        feedback: "Correct! This is a known cross-border extortion scam ('digital arrest'). Legitimate police officers will never demand online money transfers or threaten you into secrecy."
      },
      {
        id: "C",
        text: "Ask the officer if you can pay in cash tomorrow at the station.",
        isCorrect: false,
        feedback: "Incorrect. Engaging further only gives extortionists more time to intimidate you emotionally."
      },
      {
        id: "D",
        text: "Send photos of your bank passbook to prove you have modest savings.",
        isCorrect: false,
        feedback: "Incorrect. Revealing your account numbers and balances provides attackers with leverage to calibrate higher extortion demands."
      }
    ],
    tacticIdentified: "Fear + Authority Impersonation + Enforced Secrecy",
    lesson: "Police in Nepal NEVER ask for money transfers over phone calls."
  },
  {
    id: "scen-06",
    level: "ADVANCED",
    title: "The European Visit Visa Foreign Employment Guarantee",
    context: "A travel agent in Kathmandu offers you a lucrative construction opportunity in Poland.",
    message: "Poland urgent demand: Rs. 1,80,000 monthly salary. No IELTS, no interview. You fly on a 3-month Visit Visa, and our partner company in Warsaw converts it to a work permit on arrival. Pay Rs. 2,00,000 cash advance today for flight ticket booking.",
    question: "What is the critical legal and safety issue with this arrangement?",
    options: [
      {
        id: "A",
        text: "The salary is slightly lower than standard European rates.",
        isCorrect: false,
        feedback: "Incorrect. The main danger is not the salary rate—it is the outright illegality and trafficking trap of traveling on a tourist/visit visa for employment."
      },
      {
        id: "B",
        text: "Traveling on a visit visa for foreign employment is strictly illegal under Nepali law and leaves workers vulnerable to deportation, detention, or abandonment without legal protection.",
        isCorrect: true,
        feedback: "Correct! Legitimate foreign employment in Nepal requires a verified Lot (LT) number approved by the Department of Foreign Employment (DoFE) and an authentic pre-departure work visa."
      },
      {
        id: "C",
        text: "It is safe as long as the agent gives you a handwritten paper receipt.",
        isCorrect: false,
        feedback: "Incorrect. Handwritten receipts from unauthorized middlemen provide zero legal recourse once you depart Nepal."
      },
      {
        id: "D",
        text: "You should accept the offer if the agent promises free food.",
        isCorrect: false,
        feedback: "Incorrect. Secondary perks do not offset the severe legal and personal peril of illegal migration."
      }
    ],
    tacticIdentified: "Unrealistic Reward + Human Trafficking Vector",
    lesson: "Never accept foreign employment offers on tourist or visit visas."
  }
];
