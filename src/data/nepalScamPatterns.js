/**
 * Comprehensive Nepal-specific scam linguistic patterns.
 * Supports English, Devanagari Nepali, Romanized Nepali, and mixed code-switching.
 */

export const nepalLinguisticPatterns = [
  {
    category: "OTP & Credential Demands",
    tactic: "OTP_REQUEST",
    description: "Requesting one-time password or security verification codes",
    patterns: [
      /\b(otp|mpin|pin|cvv|password|passcode)\b/i,
      /\b(otp\s*(dinuhos|dinus|bhanuhos|pathaunus|pathaunu|hannuhos|enter\s*garnus))\b/i,
      /\b(code\s*(dinuhos|dinus|pathaunu|bhanidinu))\b/i,
      /(ओटिपी|पिन|पासवर्ड|गोप्य\s*कोड|ओ\.टि\.पि)/u,
      /(otp\s*दिनुहोस्|पासवर्ड\s*दिनुहोस्|पिन\s*हान्नुहोस्|कोड\s*भन्नुहोस्)/u,
      /\b(6[\s-]?digit\s*code|sms\s*code|verification\s*code)\b/i
    ]
  },
  {
    category: "Payment Pressure & Advance Fees",
    tactic: "PAYMENT_REQUEST",
    description: "Demanding money transfer, token fee, or registration payment",
    patterns: [
      /\b(paisa\s*(pathaunu|tirnu|halnu|transfer\s*garnu)\s*(parcha|parne|hos)?)\b/i,
      /\b(advance\s*(payment|fee|token|amount|paisa))\b/i,
      /\b(registration\s*fee|processing\s*fee|activation\s*charge|service\s*charge)\b/i,
      /\b(turuntai\s*payment|aaja\s*nai\s*paisa|aile\s*transfer)\b/i,
      /(पैसा\s*पठाउनुहोस्|दर्ता\s*शुल्क|अग्रिम\s*भुक्तानी|धरौटी|रकम\s*जम्मा)/u,
      /(पैसा\s*तिर्नुपर्छ|तुरुन्तै\s*payment\s*गर्नुहोस्|चार्ज\s*लाग्छ)/u
    ]
  },
  {
    category: "Urgency & Intimidation",
    tactic: "URGENCY",
    description: "Creating panic about account blocking, expiration, or police action",
    patterns: [
      /\b(urgent|immediately|act\s*now|within\s*\d+\s*(mins?|hours?)|today\s*only|expires\s*today)\b/i,
      /\b(khata\s*(block|bhanda|freeze)\s*hunchha)\b/i,
      /\b(aaja\s*nai\s*garnu|chado\s*garnus|aile\s*nagara\s*block)\b/i,
      /(तुरुन्त|आजै|तत्काल|अन्तिम\s*मौका|खाता\s*बन्द\s*हुने|म्याद\s*सकिने)/u,
      /(कारबाही\s*हुने|प्रहरी\s*पक्राउ\s*गर्ने)/u,
      /\b(arrest\s*warrant|police\s*case|legal\s*action|police\s*aipugcha)\b/i
    ]
  },
  {
    category: "Unrealistic Reward & Lottery",
    tactic: "REWARD_PROMISE",
    description: "Promises of free prizes, lottery jackpots, or unexpected cash",
    patterns: [
      /\b(prize\s*(jitnu\s*bhayo|paryo|payo)|lottery\s*(paryo|jitnu))\b/i,
      /\b(congratulations|lucky\s*winner|lucky\s*draw|selected\s*for\s*prize)\b/i,
      /\b(25\s*lakhs?|50\s*lakhs?|bumper\s*upahar|free\s*iphone)\b/i,
      /(बधाई\s*छ|चिठ्ठा\s*पर्यो|पुरस्कार\s*जित्नुभयो|भाग्यशाली\s*विजेता|निःशुल्क\s*उपहार)/u,
      /(लाख\s*रुपैयाँ\s*जित्नुभयो|उपहार\s*पाउनुभयो)/u
    ]
  },
  {
    category: "Job & Task Fraud",
    tactic: "JOB_FEE",
    description: "Simple online tasks or foreign employment requiring payment",
    patterns: [
      /\b(youtube\s*(like|subscribe)|hotel\s*review|google\s*map\s*rating|telegram\s*task)\b/i,
      /\b(earn\s*(rs\.?|npr)\s*\d+[\d,]*\s*(daily|per\s*day)|part[\s-]?time\s*income)\b/i,
      /\b(gharmai\s*basi|online\s*kam|task\s*gareko\s*paisa)\b/i,
      /\b(visit\s*visa\s*ma\s*poland|croatia\s*work\s*permit|token\s*advance)\b/i,
      /(घरमै\s*बसी\s*कमाउनुहोस्|दैनिक\s*आम्दानी|कुनै\s*अन्तर्वार्ता\s*नचाहिने)/u
    ]
  },
  {
    category: "Impersonation & Authority",
    tactic: "IMPERSONATION",
    description: "Pretending to represent banks, police, or digital wallets",
    patterns: [
      /\b(esewa\s*(support|helpdesk|officer)|khalti\s*support|bank\s*officer)\b/i,
      /\b(nepal\s*police|cyber\s*bureau|inspector\s*thapa|cid\s*officer)\b/i,
      /\b(nepal\s*post|dhl\s*express|customs\s*officer)\b/i,
      /(नेपाल\s*प्रहरी|साइबर\s*ब्युरो|बैंक\s*प्रबन्धक|ग्राहक\s*सेवा)/u
    ]
  },
  {
    category: "Reverse QR & Accidental Transfer",
    tactic: "REMOTE_ACCESS_REQUEST",
    description: "Tricking user into scanning a payment QR code or giving remote control",
    patterns: [
      /\b(qr\s*(scan\s*garnus|pathaeko\s*chu|code\s*ma\s*pin\s*hannus))\b/i,
      /\b(galti\s*le\s*paisa\s*gayo|mistake\s*le\s*transfer\s*bhayo|refund\s*garnus)\b/i,
      /\b(anydesk|teamviewer|rustdesk|screen\s*share\s*garnus)\b/i,
      /(क्युआर\s*स्क्यान\s*गर्नुहोस्|झुक्किएर\s*पैसा\s*गयो|रिफन्ड\s*गर्नुहोस्)/u
    ]
  }
];
