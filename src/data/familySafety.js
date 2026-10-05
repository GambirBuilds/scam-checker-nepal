/**
 * Family Safety Pack Data & Checklists.
 * Dual-language simple rules and printable defense guidelines for Nepali households.
 */

export const familySafetyPackData = {
  titleEn: "Nepal Household Digital Defense Pack",
  titleNe: "नेपाली परिवार डिजिटल सुरक्षा हातेपुस्तिका",
  descriptionEn: "Essential rules for parents, children, and elders to defend against mobile financial fraud.",
  descriptionNe: "मोबाइल बैंकिङ तथा डिजिटल ठगीबाट जोगिन परिवारका सबै सदस्यले जान्नैपर्ने आधारभूत नियमहरू।",
  rules: [
    {
      id: "rule-otp",
      titleEn: "1. The Golden Rule: Never Share Your OTP",
      titleNe: "१. सुनौलो नियम: आफ्नो ओटिपी (OTP) कसैलाई नभन्नुहोस्",
      bodyEn: "The 6-digit code sent to your phone is your personal digital signature. Legitimate bank staff, police, or eSewa agents will NEVER ask for it.",
      bodyNe: "तपाईंको फोनमा आउने ६ अंकको गोप्य कोड तपाईंको हस्ताक्षर सरह हो। बैंकका कर्मचारी वा प्रहरीले पनि यो कोड कहिल्यै माग्दैनन्। कसैलाई नसुनाउनुहोस्।",
      actionEn: "If anyone asks for a code sent to your phone, hang up immediately.",
      actionNe: "यदि कसैले फोनमा आएको कोड माग्यो भने तुरुन्त फोन काटिदिनुहोस्।"
    },
    {
      id: "rule-payment",
      titleEn: "2. Verify Unexpected Payment Requests",
      titleNe: "२. आकस्मिक पैसा माग्ने सन्देशमा दोहोरो पुष्टि गर्नुहोस्",
      bodyEn: "If a friend, relative, or boss messages on Facebook or WhatsApp asking for urgent medical or travel money, do not send it immediately.",
      bodyNe: "आफन्त वा साथीको फेसबुकबाट 'अस्पतालमा छु, तुरुन्त पैसा चाहियो' भन्ने मेसेज आएमा हतारिएर पैसा नपठाउनुहोस्। उनीहरूको खाता ह्याक भएको हुन सक्छ।",
      actionEn: "Call them on their regular phone number to hear their voice before sending a single rupee.",
      actionNe: "पैसा पठाउनु अघि उनीहरूको पुरानो फोन नम्बरमा कल गरेर आवाज सुन्नुहोस्।"
    },
    {
      id: "rule-prize",
      titleEn: "3. Be Careful with Prize & Lottery Messages",
      titleNe: "३. चिट्ठा र पुरस्कारको मेसेजमा सचेत हुनुहोस्",
      bodyEn: "You cannot win a lottery you never entered. Messages claiming you won Rs. 25 Lakhs or a free car are advance-fee traps.",
      bodyNe: "तपाईंले टिकट नै नकाटेको चिठ्ठा कहिल्यै पर्न सक्दैन। पुरस्कार पाउनका लागि अग्रिम कर वा शुल्क तिर्नुपर्छ भन्नु नै ठगीको मुख्य संकेत हो।",
      actionEn: "Never pay advance processing charges or taxes to claim a prize.",
      actionNe: "पुरस्कार दाबी गर्न कसैलाई पनि अग्रिम शुल्क वा कर नतिर्नुहोस्।"
    },
    {
      id: "rule-urgency",
      titleEn: "4. Be Cautious with Urgent Threats",
      titleNe: "४. 'खाता आजै बन्द हुन्छ' भन्ने धम्कीबाट नडराउनुहोस्",
      bodyEn: "Scammers create false panic by claiming your mobile banking will be blocked within 2 hours unless you click an attached link.",
      bodyNe: "ठगहरूले तपाईंलाई डराएर तुरुन्त निर्णय गराउन '२ घण्टाभित्र खाता रोकिन्छ' भन्दै डर देखाउँछन्। आत्तिनु पर्दैन।",
      actionEn: "Never click links in SMS. Visit your local bank branch calmly or open the official bank app directly.",
      actionNe: "मेसेजको लिङ्क नखोल्नुहोस्। ढुक्क भएर नजिकको बैंक शाखामा जानुहोस् वा बैंकको आधिकारिक एप खोल्नुहोस्।"
    },
    {
      id: "rule-callers",
      titleEn: "5. Verify Callers Independently",
      titleNe: "५. फोन गर्ने व्यक्तिको पहिचान आफ्नै तर्फबाट जाँच्नुहोस्",
      bodyEn: "Caller ID can be manipulated. If someone claims to be from the Nepal Police Cyber Bureau or telecom office, do not accept it blindly.",
      bodyNe: "मोबाइलमा देखिने नाम वा नम्बर सजिलै नक्कली बनाउन सकिन्छ। प्रहरी वा सरकारी कार्यालयबाट बोलेको भन्दैमा तुरुन्त विश्वास नगर्नुहोस्।",
      actionEn: "Ask for their official desk extension, hang up, and call the official public bureau number independently.",
      actionNe: "फोन काट्नुहोस् र प्रहरीको आधिकारिक फोन नम्बर १०० वा ०१-४४१२५५५ मा आफैं डायल गर्नुहोस्।"
    },
    {
      id: "rule-links",
      titleEn: "6. Do Not Trust Links Automatically",
      titleNe: "६. अपरिचित लिङ्कहरूमा कहिल्यै क्लिक नगर्नुहोस्",
      bodyEn: "Links sent via Viber, WhatsApp, or SMS can lead to forged login pages that capture your username and passwords.",
      bodyNe: "भाइबर, ह्वाट्सएप वा एसएमएसमा आउने उपहार वा कामको लिङ्कले तपाईंको फोन र फेसबुकको पासवर्ड चोर्न सक्छ।",
      actionEn: "Never enter your banking passwords or wallet PINs on any website opened from a chat link.",
      actionNe: "च्याटबाट खुलेको कुनै पनि वेबसाइटमा आफ्नो पासवर्ड वा पिन कहिल्यै नहाल्नुहोस्।"
    }
  ],
  emergencyContacts: [
    { label: "Nepal Police Cyber Bureau", phone: "01-4412555", alt: "100" },
    { label: "Nepal Police Control", phone: "100", alt: "Toll Free" },
    { label: "Nepal Rastra Bank Grievance", phone: "01-4419804", alt: "gunaso@nrb.org.np" }
  ]
};
