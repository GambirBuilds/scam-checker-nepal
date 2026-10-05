/**
 * 12 Psychological & Social Engineering Tactics
 * Powers the Scam Tactic Detector & Educational Explanation Engine.
 */

export const scamTactics = [
  {
    id: "urgency",
    name: "Urgency",
    nepaliName: "तुरुन्त गर्न दबाब (Urgency)",
    description: "The message creates artificial time pressure, giving victims minimal time to deliberate.",
    whySuspicious: "Legitimate organizations offer reasonable timeframes. Scammers create urgency to prevent victims from consulting family or verifying facts.",
    whyItWorks: "Time pressure triggers an adrenaline response that impairs analytical thinking and forces hurried, emotional decisions.",
    exampleIndicator: "'Your bank account will be blocked within 30 minutes! Act immediately!'",
    recommendedResponse: "Pause for 15 minutes. Step away from your phone and verify through an independent channel before doing anything.",
    patterns: [
      /\b(act\s*now|urgent|immediately|within\s*\d+\s*(mins?|hours?)|today\s*only|expires\s*today|last\s*chance)\b/i,
      /(तुरुन्त|आजै|तत्काल|अन्तिम\s*मौका|म्याद\s*सकिने)/u,
      /\b(tuntunt|aaja\s*nai|chado\s*garnus)\b/i
    ]
  },
  {
    id: "fear",
    name: "Fear & Coercion",
    nepaliName: "डर तथा धम्की (Fear)",
    description: "Threatens legal arrest, police charges, financial ruin, or social shame.",
    whySuspicious: "Law enforcement and legitimate financial regulators serve formal written notices, never instant threats over chat or phone.",
    whyItWorks: "Fear bypasses logical scrutiny by creating an intense survival panic where compliance feels like the only safe escape.",
    exampleIndicator: "'Arrest warrant issued against you for money laundering! Transfer funds or police will arrive today!'",
    recommendedResponse: "Hang up. Nepal Police officers NEVER demand wire transfers over phone calls to dismiss charges.",
    patterns: [
      /\b(arrest\s*warrant|police\s*case|court\s*summons|legal\s*action|frozen|jail|blacklisted)\b/i,
      /(पक्राउ\s*पुर्जी|प्रहरी\s*कारबाही|अदालत|थुनामा|कालोसूची)/u
    ]
  },
  {
    id: "authority",
    name: "Authority Exploitation",
    nepaliName: "प्रशासकीय अधिकारको दुरुपयोग (Authority)",
    description: "Claims to speak on behalf of respected or feared institutions like the Central Bank, Police, or Court.",
    whySuspicious: "Imposters rely on fake uniforms, simulated seals, and official jargon to command unquestioning obedience.",
    whyItWorks: "People are conditioned to respect authority figures and rarely question someone claiming official standing.",
    exampleIndicator: "'This is Inspector Thapa from Nepal Police Cyber Bureau Headquarters.'",
    recommendedResponse: "Request the official switchboard phone number, hang up, and call the verified police switchboard yourself.",
    patterns: [
      /\b(cyber\s*bureau|nepal\s*police|nepal\s*rastra\s*bank|customs\s*officer|high\s*court|inspector)\b/i,
      /(नेपाल\s*प्रहरी|साइबर\s*ब्युरो|नेपाल\s*राष्ट्र\s*बैंक|भन्सार\s*अधिकृत)/u
    ]
  },
  {
    id: "reward",
    name: "Unsolicited Reward",
    nepaliName: "अस्वभाविक उपहार तथा पुरस्कार (Reward)",
    description: "Claims the recipient has won a massive cash prize, car, smartphone, or lottery without entering.",
    whySuspicious: "You cannot win a competition or lottery you never bought a ticket for. Fraudsters invent prizes as bait.",
    whyItWorks: "The prospect of sudden good fortune creates excitement that blinds victims to procedural red flags.",
    exampleIndicator: "'Congratulations! You have won Rs. 25,00,000 in Kaun Banega Crorepati WhatsApp Lucky Draw!'",
    recommendedResponse: "Delete the message. Remember that real lotteries never ask winners to send money first to receive a prize.",
    patterns: [
      /\b(congratulations|lucky\s*winner|lottery\s*winner|won\s*(rs\.?|npr)?\s*\d+[\d,]*|free\s*iphone)\b/i,
      /(बधाई\s*छ|चिठ्ठा\s*पर्यो|पुरस्कार\s*जित्नुभयो|भाग्यशाली\s*विजेता)/u,
      /\b(prize\s*jitnu\s*bhayo|upahar\s*paryo)\b/i
    ]
  },
  {
    id: "greed",
    name: "Greed & Unrealistic Profit",
    nepaliName: "अस्वभाविक नाफा तथा लोभ (Greed)",
    description: "Promises guaranteed daily returns of 5%–10% or double money schemes with 'zero risk'.",
    whySuspicious: "No legitimate financial market can guarantee high returns without risk. These are Ponzi pyramid traps.",
    whyItWorks: "The desire for effortless wealth encourages people to overlook basic economic common sense.",
    exampleIndicator: "'Earn 4% daily guaranteed profit in AI crypto arbitrage. 100% safe, withdraw anytime!'",
    recommendedResponse: "If an investment sounds too good to be true, it is almost certainly a scam. Crypto trading is prohibited in Nepal.",
    patterns: [
      /\b(guaranteed\s*(return|profit)|zero\s*risk|100%\s*safe|\d+%\s*daily\s*profit|double\s*money)\b/i,
      /(ग्यारेन्टी\s*नाफा|शून्य\s*जोखिम|दैनिक\s*प्रतिफल|पैसा\s*दोब्बर)/u
    ]
  },
  {
    id: "emotional_manipulation",
    name: "Emotional Manipulation",
    nepaliName: "भावनात्मक ब्ल्याकमेल (Emotional Manipulation)",
    description: "Pretends a family member or friend is in critical danger, hospital emergency, or police lockup.",
    whySuspicious: "Fraudsters harvest family contacts to manufacture crises when victims are most psychologically vulnerable.",
    whyItWorks: "Empathy, familial love, and panic make victims act immediately without double-checking the facts.",
    exampleIndicator: "'Bhai, I had a motorcycle crash in Pokhara hospital. Send Rs. 15,000 to this medical shop eSewa now!'",
    recommendedResponse: "Always call the family member directly on their known normal phone number before sending emergency money.",
    patterns: [
      /\b(hospital|emergency|accident|sick|surgery|bail\s*money|bhai|dai|didi)\b/i,
      /(अस्पताल|दुर्घटना|आकस्मिक|उपचार|अपरेशन|दाइ|भाइ|दिदी)/u
    ]
  },
  {
    id: "payment_pressure",
    name: "Payment Pressure",
    nepaliName: "अग्रिम भुक्तानीको दबाब (Payment Pressure)",
    description: "Requires upfront cash transfer, processing fees, or registration deposits before delivery.",
    whySuspicious: "Scammers take advance payments and disappear. Legitimate businesses and employers do not work on blind advance fees.",
    whyItWorks: "Once victims have paid a small fee, the sunk-cost fallacy tempts them to send even more money to 'recover' previous fees.",
    exampleIndicator: "'Deposit Rs. 2,000 VIP onboarding fee before your job assignments can be dispatched.'",
    recommendedResponse: "Never send money to someone who promises you a job, prize, or loan.",
    patterns: [
      /\b(registration\s*fee|processing\s*fee|advance\s*payment|activation\s*fee|deposit\s*required)\b/i,
      /(दर्ता\s*शुल्क|अग्रिम\s*भुक्तानी|धरौटी|शुल्क\s*बुझाउनुहोस्)/u,
      /\b(paisa\s*pathaunu|advance\s*dinus)\b/i
    ]
  },
  {
    id: "credential_request",
    name: "Credential Harvesting",
    nepaliName: "गोप्य पासवर्ड तथा OTP माग (Credential Harvesting)",
    description: "Requests confidential security credentials: OTP, mobile banking PIN, ATM card CVV, or passwords.",
    whySuspicious: "Service providers have system access and NEVER need your private authorization codes.",
    whyItWorks: "Victims are misled into believing the code is needed to 'verify' identity or 'cancel a mistake'.",
    exampleIndicator: "'Read the 6-digit OTP just sent to your phone to reverse the erroneous debit.'",
    recommendedResponse: "Never share an OTP with anyone under any circumstance. Hang up immediately.",
    patterns: [
      /\b(otp|mpin|cvv|atm\s*pin|password|verification\s*code|passcode)\b/i,
      /(ओटिपी|पिन|पासवर्ड|गोप्य\s*कोड)/u,
      /\b(otp\s*dinuhos|code\s*pathaunu)\b/i
    ]
  },
  {
    id: "impersonation",
    name: "Impersonation",
    nepaliName: "परिचित संस्थाको नक्कली रूप (Impersonation)",
    description: "Presents forged logos, caller IDs, or cloned profiles mimicking genuine brands or colleagues.",
    whySuspicious: "Attackers exploit the existing trust you have in institutions like eSewa, Nepal Telecom, or your bank.",
    whyItWorks: "Familiar brand aesthetics lower human guard rails and create an immediate presumption of safety.",
    exampleIndicator: "'This is eSewa Nepal Customer Care Support helpline desk.'",
    recommendedResponse: "Never use phone numbers found in chat messages. Check the official company app or website directly.",
    patterns: [
      /\b(esewa\s*support|khalti\s*support|customer\s*care|technical\s*support|helpdesk)\b/i,
      /(ग्राहक\s*सेवा|सहयोग\s*कक्ष|सपोर्ट\s*डेस्क)/u
    ]
  },
  {
    id: "scarcity",
    name: "Scarcity & Exclusivity",
    nepaliName: "सिमित अवसरको भ्रम (Scarcity)",
    description: "Claims only 2 units remain, or an exclusive investment slot is closing in 15 minutes.",
    whySuspicious: "Artificial scarcity manufactures the 'Fear Of Missing Out' (FOMO) to override price skepticism.",
    whyItWorks: "When an item appears rare or expiring, human psychology automatically assigns it inflated value.",
    exampleIndicator: "'Only 2 pieces left at 80% discount! Offer closes in 10 minutes!'",
    recommendedResponse: "Pause and search the seller's business registration. Real businesses do not force 10-minute deadlines.",
    patterns: [
      /\b(only\s*\d+\s*(pieces?|units?|slots?)\s*left|limited\s*time|ending\s*soon|exclusive\s*offer)\b/i,
      /(सिमित\s*स्टक|केही\s*थान\s*मात्र|अन्तिम\s*अवसर)/u
    ]
  },
  {
    id: "social_pressure",
    name: "Social Pressure & Group Conformity",
    nepaliName: "समूहको दबाब (Social Pressure)",
    description: "Shows fabricated screenshots of other 'members' receiving payouts or urges sharing to groups.",
    whySuspicious: "Telegram and WhatsApp groups are often packed with bot accounts posting fake payment proofs.",
    whyItWorks: "People look to peers for validation; seeing others 'succeed' gives a false sense of security.",
    exampleIndicator: "'Share this link to 10 WhatsApp groups to activate your free recharge!'",
    recommendedResponse: "Recognize that group chat members can be fabricated bots. Never forward unverified viral chains.",
    patterns: [
      /\b(share\s*to\s*\d+\s*groups|everyone\s*is\s*earning|vip\s*group\s*proofs)\b/i,
      /(ग्रुपमा\s*शेयर\s*गर्नुहोस्|सबैले\s*पाएका\s*छन्)/u
    ]
  },
  {
    id: "secrecy",
    name: "Enforced Secrecy",
    nepaliName: "गोप्य राख्न दबाब (Enforced Secrecy)",
    description: "Explicitly commands the victim not to disclose the conversation to family, friends, or bank staff.",
    whySuspicious: "Scammers enforce secrecy because they know a second opinion will instantly expose the fraud.",
    whyItWorks: "Victims are intimidated into isolation, removing the safety net of their trusted social circle.",
    exampleIndicator: "'Do not tell anyone, not even your spouse or bank manager, or the prize will be revoked!'",
    recommendedResponse: "Any request for secrecy is a massive red flag. Immediately tell a trusted family member or friend.",
    patterns: [
      /\b(keep\s*this\s*secret|do\s*not\s*tell\s*anyone|confidential\s*investigation|do\s*not\s*hang\s*up)\b/i,
      /(कसैलाई\s*नभन्नुहोस्|गोप्य\s*राख्नुहोस्|फोन\nनकाट्नुहोस्)/u
    ]
  }
];

/**
 * Detect which psychological tactics are present in a given text
 */
export function detectTactics(text = "") {
  if (!text || !text.trim()) return [];

  const matched = [];
  scamTactics.forEach(tactic => {
    let triggered = false;
    for (const pattern of tactic.patterns) {
      if (pattern.test(text)) {
        triggered = true;
        break;
      }
    }
    if (triggered) {
      matched.push(tactic);
    }
  });

  return matched;
}
