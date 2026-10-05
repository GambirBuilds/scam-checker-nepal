/**
 * Scam Evolution Progression Patterns for Scam Checker Nepal.
 * Details the sequential psychological and tactical stages of common frauds.
 */

export const scamEvolutionTypes = [
  {
    id: "job",
    name: "Work-From-Home Task & Job Scam",
    nepaliName: "घरमै बसी कमाउने कामको ठगी",
    overview: "Begins with low-friction tasks (YouTube likes, Google ratings) to build credibility before demanding escalating deposit fees to unlock frozen earnings.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Unsolicited Outreach",
        description: "Victim receives a WhatsApp, Telegram, or SMS offering Rs. 2,000–5,000 daily for simple part-time online tasks without experience.",
        warningSigns: ["Outreach from unknown international numbers (+84, +62, +44)", "Promises of high earnings for elementary tasks"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Micro-Reward Delivery",
        description: "Victim completes 3 simple tasks (e.g. subscribing to 3 channels) and genuinely receives Rs. 200–500 in their eSewa/Khalti wallet to establish trust.",
        warningSigns: ["Unusual payment directly to wallet for trivial effort", "Added to a busy Telegram VIP task group with enthusiastic 'members'"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Limited Time VIP Task",
        description: "The group admin announces a high-commission 'Prepaid Merchant Task' that expires in 15 minutes and requires a deposit of Rs. 5,000.",
        warningSigns: ["Pressure that other group members are taking all the slots", "Insistence on immediate wallet transfer"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Capital Injection Lure",
        description: "Victim is shown a fake dashboard showing their Rs. 5,000 has grown to Rs. 8,500, but they cannot withdraw without completing the 'combo order'.",
        warningSigns: ["Dashboard balance is unwithdrawable", "New prerequisite tasks invented on the spot"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "The Sunk Cost Trap",
        description: "Scammer claims a mistake was made, or the account is locked in audit. To unlock the accumulated Rs. 35,000, victim must deposit Rs. 20,000 more.",
        warningSigns: ["Demand for ever-increasing amounts to recover previous funds", "Threat that funds will be forfeited if not paid today"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure & Ghosting",
        tactic: "Extortion or Abandonment",
        description: "Once the victim exhausts their savings, the scammer either demands a final 'tax clearance fee' or immediately deletes the chat and blocks the victim.",
        warningSigns: ["Telegram group removes victim or is deleted", "No customer service contact exists"]
      }
    ]
  },
  {
    id: "investment",
    name: "Guaranteed High-Yield / Crypto Scam",
    nepaliName: "क्रिप्टो तथा ग्यारेन्टी नाफा लगानी ठगी",
    overview: "Leverages the illusion of complex algorithmic trading or foreign exchange to lure victims into transferring funds into unregulated offshore wallets.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Social Media Advertisement",
        description: "Target sees an advertisement on Facebook, Instagram, or TikTok showcasing luxury cars, financial freedom, and a 'secret' trading algorithm.",
        warningSigns: ["Claims of 200% return in 7 days", "Testimonial videos with unnatural script reading"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Personal Mentor Assignment",
        description: "Victim is connected to a friendly 'Senior Portfolio Analyst' who patiently guides them through creating an account on a cloned trading platform.",
        warningSigns: ["Platform domain is registered recently", "Analyst is very eager to spend hours chatting on Telegram"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Market Bull-Run Pretext",
        description: "The mentor alerts victim that a major market event or crypto arbitrage window is occurring right now and will close within 24 hours.",
        warningSigns: ["Pressure to borrow money or take gold loans to maximize investment", "Fake countdown tickers on portal"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Initial Deposit Request",
        description: "Victim starts with Rs. 10,000. Within days, the custom portal graphics display their portfolio value jumping to Rs. 45,000.",
        warningSigns: ["Fake profits shown inside non-regulated platform", "Cannot transfer the balance to an independent wallet"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Withdrawal Fee Extortion",
        description: "When victim requests a withdrawal, platform demands 25% 'Capital Gains Tax' or 'International Liquidity Fee' payable in advance.",
        warningSigns: ["Demands new money rather than deducting fees from current profits", "Claims the funds are frozen by Nepal Rastra Bank"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Secondary Recovery Scam",
        description: "After realizing the fraud, victim is contacted by a 'hacker' or 'recovery lawyer' claiming they can retrieve lost crypto for an advance fee.",
        warningSigns: ["Unsolicited messages offering funds recovery", "Demands for advance recovery retainer"]
      }
    ]
  },
  {
    id: "delivery",
    name: "Courier & Parcel Delivery Fee Scam",
    nepaliName: "पार्सल तथा डेलिभरी शुल्क ठगी",
    overview: "Exploits anxiety over an undelivered package or overseas gift to extract credit card details and customs fees.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Automated SMS Alert",
        description: "Victim receives an SMS: 'Your parcel NP-8842 cannot be delivered due to missing house number. Update immediately: https://courier-post-np.cc'",
        warningSigns: ["SMS sender is a private mobile number", "Urgent notice received even when victim ordered nothing"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Clone Tracking Portal",
        description: "Clicking link opens a realistic-looking Nepal Post, DHL, or Aramex tracking screen showing a package in transit at Kathmandu sorting hub.",
        warningSigns: ["Domain address does not end in official postal domain", "Generic tracking status identical for any tracking code"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Return to Sender Warning",
        description: "Website states package will be destroyed or returned to overseas sender within 12 hours unless redelivery fee of Rs. 150 is paid.",
        warningSigns: ["Extremely low fee (Rs. 100–150) designed to lower victim's suspicion", "Immediate return deadline"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Payment Gateway Capture",
        description: "Victim is asked to enter full credit/debit card numbers, expiry date, CVV, and billing address to pay the Rs. 150 fee.",
        warningSigns: ["Unencrypted or clone payment fields", "Full card details requested for a nominal sum"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Live OTP Interception",
        description: "The clone site requests the OTP sent to victim's phone. Behind the scenes, the attacker is authorizing an Rs. 50,000 international charge.",
        warningSigns: ["SMS OTP says Rs. 50,000 or foreign currency instead of Rs. 150", "Page displays 'processing' spinner while timer ticks"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Repeat OTP Prompting",
        description: "Page displays 'OTP Expired, please re-enter new OTP' to trick the victim into authorizing multiple consecutive fraudulent debits.",
        warningSigns: ["Repeated OTP requests in short succession", "Card balance drops sharply"]
      }
    ]
  },
  {
    id: "banking",
    name: "Urgent Bank Account & KYC Freeze",
    nepaliName: "बैंक खाता बन्द तथा केवाइसी ठगी",
    overview: "Weaponizes the fear of financial disconnection to bypass rational thought and extract master login credentials.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Account Freeze Alert",
        description: "Victim receives an SMS or robotic call: 'Dear customer, your bank mobile banking has expired today. Verify KYC now or account permanently closed.'",
        warningSigns: ["Severe threat of immediate account termination", "Link attached to message"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Official Branding Mimicry",
        description: "The link opens a pixel-perfect replica of the commercial bank's mobile banking login page with authentic logos and disclaimers.",
        warningSigns: ["URL domain is slightly altered (e.g. nabil-login-np.com instead of nabilbank.com)", "No official SSL certificate validation"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Session Expiry Countdown",
        description: "A prominent 5-minute timer flashes on screen warning that failing to submit documents will result in an Rs. 2,000 penalty and branch audit.",
        warningSigns: ["Flashing countdown clocks", "Language inciting fear of financial penalties"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Credential Harvesting",
        description: "Form asks victim to enter their mobile banking username, login password, and transaction PIN (MPIN).",
        warningSigns: ["Requesting transaction MPIN on a basic verification screen", "Asking for ATM card PIN"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Device Registration Hijack",
        description: "Attacker registers their personal smartphone as the victim's new authorized mobile banking device using the harvested credentials and OTP.",
        warningSigns: ["SMS notification stating: 'New device registered for your mobile banking'", "Victim logged out of their genuine bank app"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Rapid Funds Drain",
        description: "Attacker transfers balances via ConnectIPS or wallet transfers to multiple mule accounts across Nepal before victim notices.",
        warningSigns: ["Debit alerts received via SMS", "Incoming calls from unknown numbers to distract the victim"]
      }
    ]
  },
  {
    id: "marketplace",
    name: "Social Commerce & Fake Electronics Shop",
    nepaliName: "सामाजिक सञ्जाल सस्तो सामान ठगी",
    overview: "Uses stolen photos of luxury gadgets at 70% discounts on Instagram/TikTok to demand advance wallet transfers.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Clearance Sale Ad",
        description: "Sponsored post displays 'Nepal Customs Auction Clearance: iPhone 15 Pro for Rs. 42,000. Only 3 units remaining!'",
        warningSigns: ["Price far below realistic market value", "Newly created page with purchased followers"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Fake Reviews & Delivery Slips",
        description: "Page highlights story archives showing happy customer video testimonials and stamped courier dispatch slips.",
        warningSigns: ["Comments section disabled or restricted", "Customer photos are cropped from foreign accounts"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Competing Buyer Pressure",
        description: "Seller tells victim over WhatsApp that another buyer is already transferring money, so they must pay immediately to hold the unit.",
        warningSigns: ["Seller will not hold item for even 30 minutes", "Insistence on immediate wallet screenshot"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Advance Wallet Payment",
        description: "Seller insists on 100% upfront payment via eSewa or personal bank transfer, strictly rejecting Cash on Delivery (COD).",
        warningSigns: ["Wallet name does not match business name", "Refusal of in-person handoff even in Kathmandu"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Fake Courier Insurance Fee",
        description: "After receiving the gadget money, seller sends a fake courier receipt and claims courier demands Rs. 4,500 for 'transit insurance'.",
        warningSigns: ["New surprise fee invented right after first payment", "Promise that insurance fee is '100% refundable at doorstep'"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Block & Erase",
        description: "If victim questions the fee or refuses to pay more, seller instantly blocks their WhatsApp number and Instagram handle.",
        warningSigns: ["Messages show single tick", "Profile page becomes unavailable"]
      }
    ]
  },
  {
    id: "prize",
    name: "Lottery & KBC Bumper Lucky Draw",
    nepaliName: "चिट्ठा तथा २५ लाख पुरस्कार ठगी",
    overview: "Uses fabricated endorsements from famous game shows or telecom operators to demand tax deposits.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Congratulatory Message",
        description: "Victim receives a WhatsApp voice message or call with a KBC theme song: 'Congratulations! Your SIM number won Rs. 25 Lakhs!'",
        warningSigns: ["Winning a lottery you never entered", "Audio recording using celebrity voices"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Forged Certificates",
        description: "Scammer sends a photo of an official-looking certificate stamped with Government of Nepal seals and bank emblems.",
        warningSigns: ["Spelling errors in official English text", "Poorly aligned logos and fake notary stamps"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Tax Expiry Deadline",
        description: "Scammer warns that under Nepal financial law, unclaimed lottery funds are confiscated within 24 hours.",
        warningSigns: ["Demands that victim keep the prize secret from family", "Strict 24-hour forfeiture warning"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Government Tax Advance Fee",
        description: "Victim is instructed to transfer Rs. 25,000 (1% TDS tax) to a designated personal bank account to release the prize draft.",
        warningSigns: ["Real lotteries deduct taxes from winnings, never require advance cash", "Tax payment directed to personal account"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Customs & Clearing Charges",
        description: "Once Rs. 25,000 is sent, scammer invents an 'anti-money laundering clearance certificate' requiring another Rs. 50,000.",
        warningSigns: ["Endless progression of administrative fees", "Aggressive insistence that payout is guaranteed within 10 minutes of payment"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Threat of Legal Penalties",
        description: "If victim stops paying, scammer threatens that the Ministry of Finance will file a tax evasion lawsuit against them.",
        warningSigns: ["Threats of arrest for refusing to pay further lottery fees", "Intimidation tactics"]
      }
    ]
  },
  {
    id: "social",
    name: "Compromised Friend & Medical Emergency",
    nepaliName: "सामाजिक सञ्जाल साथीको नक्कली विपत्ति",
    overview: "Hijacks an acquaintance's account to solicit emergency funds from friends before the real owner recovers access.",
    stages: [
      {
        stageNumber: 1,
        title: "Initial Contact",
        tactic: "Casual Greeting",
        description: "A close friend or relative's Facebook Messenger asks: 'Namaste, are you free right now? I need a small favor.'",
        warningSigns: ["Unusual tone or language from someone who usually calls you", "Message received late at night or early morning"]
      },
      {
        stageNumber: 2,
        title: "Trust Building",
        tactic: "Pre-Existing Relationship",
        description: "Because the account belongs to a real friend, victim naturally drops their guard and responds positively.",
        warningSigns: ["Account owner refuses to answer voice calls, saying 'my mic is broken' or 'I am at hospital'"]
      },
      {
        stageNumber: 3,
        title: "Urgency Injection",
        tactic: "Fabricated Hospital Emergency",
        description: "Friend claims their mother is in surgery or their wallet was stolen, and hospital requires immediate Rs. 10,000 medicine fee.",
        warningSigns: ["Extreme distress story", "Promises to return funds by tomorrow morning"]
      },
      {
        stageNumber: 4,
        title: "The Request",
        tactic: "Third-Party Wallet Transfer",
        description: "Friend provides an eSewa/Khalti number belonging to a stranger, claiming 'this is the pharmacy doctor's number, send directly.'",
        warningSigns: ["Recipient name does not match the friend's name", "Hasty insistence on immediate transfer confirmation screenshot"]
      },
      {
        stageNumber: 5,
        title: "Payment Escalation",
        tactic: "Second Emergency Request",
        description: "Immediately after receiving Rs. 10,000, friend claims the hospital bill increased and asks for another Rs. 15,000.",
        warningSigns: ["Immediate follow-up request before any repayment", "Persistent pressure while victim is still processing"]
      },
      {
        stageNumber: 6,
        title: "Follow-Up Pressure",
        tactic: "Account Recovery Announcement",
        description: "Hours later, the genuine friend posts: 'My account was hacked yesterday! Do not send money to anyone messaging from this account.'",
        warningSigns: ["Real owner regains access after damage is done", "Financial loss already occurred"]
      }
    ]
  }
];
