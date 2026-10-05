/**
 * Student Safety Topics, Scenarios, and Checklists for Nepal's Youth.
 * Focused specifically on scams targeting high school and university students.
 */

export const studentSafetyTopics = [
  {
    id: "fake-internships",
    title: "Fake Unpaid Internships with 'Certificate Fees'",
    description: "Companies promising corporate experience or remote IT training that demand Rs. 3,000–8,000 for 'orientation materials' or 'certificate issuance'.",
    warningSigns: [
      "Job/internship offer without any technical interview or portfolio review",
      "Demands payment to receive an internship completion certificate",
      "No registered physical office in Nepal"
    ],
    protection: "Legitimate internships pay you, or at minimum provide free training. Never pay training fees for internships. Verify company registration on ocr.gov.np."
  },
  {
    id: "fake-jobs",
    title: "Part-Time Remote 'YouTube Liker' & Data Entry Traps",
    description: "Telegram and WhatsApp recruiters offering Rs. 2,000–4,000 daily for liking videos or doing copy-paste tasks, followed by demands for VIP prepaid task deposits.",
    warningSigns: [
      "Recruitment conducted strictly on anonymous Telegram channels",
      "Salary seems impossibly high for simple copy-paste tasks",
      "Requirement to deposit your own money to unlock withdrawal tasks"
    ],
    protection: "Legitimate employment never requires advance cash deposits. Never deposit money to unlock your own salary."
  },
  {
    id: "fake-scholarships",
    title: "Bogus Overseas Study Grants (No IELTS Needed)",
    description: "Unaccredited consultancies promising 100% full-ride scholarships in Australia, Japan, or Europe requiring upfront visa application processing fees.",
    warningSigns: [
      "Guarantees visa grant regardless of academic background or test scores",
      "Demands high cash deposits into personal bank accounts before admission",
      "Not registered with the Ministry of Education, Science and Technology (MoEST)"
    ],
    protection: "Only consult agencies registered with MoEST and ECAN. Cross-verify scholarship opportunities directly on official university portals."
  },
  {
    id: "fake-certificates",
    title: "Online Fast-Track Degrees & Fake IELTS Certificates",
    description: "Promoters selling fake high-school diplomas, college transcripts, or IELTS certificates claiming they bypass verification.",
    warningSigns: [
      "Promises recognized diplomas in 7 days without attending classes or tests",
      "Demands payment via personal digital wallets",
      "Claims to have 'insider connections' in examination boards"
    ],
    protection: "Using counterfeit academic credentials is a serious criminal offense under the Muluki Criminal Code of Nepal. Genuine credentials require official institutional exams."
  },
  {
    id: "marketplace-scams",
    title: "Secondhand Laptop & Scooter Marketplace Traps",
    description: "Ads on Hamrobazar or Facebook Marketplace offering high-spec laptops or scooters at unbelievable prices, requiring 'token advance' before inspection.",
    warningSigns: [
      "Seller claims to be in another city (e.g. Pokhara, Biratnagar) and demands courier booking fee",
      "Refuses in-person inspection or meeting in a public daylight spot",
      "Pressures you to pay token advance to hold the item"
    ],
    protection: "Never send advance token money for secondhand marketplace purchases. Always inspect the item in person in a safe, public location."
  },
  {
    id: "gaming-scams",
    title: "Free PUBG / Free Fire UC & Diamonds Phishing",
    description: "Websites or Telegram bots claiming to provide free in-game credits, weapon skins, or UC recharges in exchange for your Gmail or social login.",
    warningSigns: [
      "Requires logging into your primary Google or Facebook account on a third-party site",
      "Promises thousands of free gaming diamonds or tokens",
      "Links shared in gaming WhatsApp or Discord communities"
    ],
    protection: "Never enter your social media or Google account credentials into external gaming gift sites. Enable 2-Factor Authentication on all gaming accounts."
  },
  {
    id: "social-account-scams",
    title: "'Is This You in This Video?' Messenger Phishing",
    description: "Compromised friend accounts sending links with video player icons that redirect to fake Facebook login pages to hijack your account.",
    warningSigns: [
      "Urgent message from a classmate asking 'Did you see this video of you?'",
      "Page asks you to type your Facebook or Instagram password again",
      "Domain address has subtle misspellings (e.g. facebook-play.cc)"
    ],
    protection: "Never re-enter your password after clicking a link in chat. If already typed, immediately reset your password and terminate all active sessions."
  },
  {
    id: "fake-giveaways",
    title: "Celebrity Instagram iPhone & Cash Giveaways",
    description: "Cloned accounts of popular Nepali creators or influencers announcing flash giveaways that demand delivery courier fees to claim.",
    warningSigns: [
      "Account handle has an underscore or extra letter (e.g. @siddhartha_gurung_)",
      "You are told you won even though you never commented or entered",
      "Demands Rs. 1,500 courier fee to dispatch your 'free' iPhone"
    ],
    protection: "Check the account handle and follower count. Real giveaways NEVER charge winners courier fees to claim a prize."
  },
  {
    id: "fake-online-courses",
    title: "High-Ticket 'Guaranteed Placement' Tech Bootcamps",
    description: "Unregistered online institutes promising guaranteed 1 Lakh/month placements after a 2-month crash course, requiring non-refundable upfront tuition.",
    warningSigns: [
      "Promises guaranteed high salaries with zero prerequisites",
      "Instructors have anonymous profiles or fake LinkedIn histories",
      "High-pressure sales calls claiming 'only 2 slots left at this price'"
    ],
    protection: "Review instructor credentials, student testimonials outside the company's website, and audit refund policies before paying."
  }
];

export const studentQuizQuestions = [
  {
    id: 1,
    question: "A company offers you a remote internship and says they will send your certificate only if you pay Rs. 4,000 for 'materials fee'. What should you do?",
    options: [
      { text: "Pay the Rs. 4,000 so your resume has corporate experience.", isCorrect: false },
      { text: "Decline and report. Legitimate internships never charge students to receive experience certificates.", isCorrect: true },
      { text: "Ask them to deduct the fee from your future salary.", isCorrect: false },
      { text: "Pay half the fee upfront.", isCorrect: false }
    ],
    explanation: "Charging students for certificates or training materials is a common exploitative trap. Genuine employers invest in interns rather than charging them."
  },
  {
    id: 2,
    question: "A gaming friend on Discord sends a link claiming you can claim 5,000 Free Fire diamonds if you log in with your Facebook account. What should you do?",
    options: [
      { text: "Log in quickly before the diamond promotion ends.", isCorrect: false },
      { text: "Never log into your Facebook on external third-party reward sites; it steals your account credentials.", isCorrect: true },
      { text: "Enter a fake password to test if it works.", isCorrect: false },
      { text: "Forward the link to your guild mates.", isCorrect: false }
    ],
    explanation: "Free gaming credit sites are almost universally credential-harvesting phishing portals designed to hijack social media and Google accounts."
  }
];

export const studentChecklistItems = [
  "I have 2-Factor Authentication (2FA) turned on for my Google and Facebook accounts.",
  "I never pay advance registration or certificate fees for job or internship applications.",
  "I never enter my account passwords on external links received in Discord, WhatsApp, or Messenger.",
  "I inspect the physical office or OCR registration of consultancies before paying study-abroad fees.",
  "I never purchase secondhand electronics without daylight in-person testing.",
  "I never download unofficial modded APK files from Telegram groups onto my smartphone."
];
