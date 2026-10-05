# Scam Checker Nepal

> **"Think Before You Trust."**

Scam Checker Nepal is an open, community-first digital safety and fraud awareness platform built specifically for the people of Nepal. It empowers citizens—students, parents, small shop owners, and overseas workers—to identify warning signs in suspicious messages, links, employment pitches, online shopping deals, payment requests, and SMS alerts before parting with their money or confidential credentials.

---

## 1. Project Overview

With the rapid expansion of digital financial services across Nepal (eSewa, Khalti, ConnectIPS, and commercial mobile banking apps), thousands of families encounter social engineering schemes every week:
- Phishing SMS claiming mobile banking KYC will expire today or accounts will be blocked within 2 hours.
- Reverse QR code scams where victims are instructed to scan a QR code and type their MPIN under the false premise that they are "receiving" an accidental refund.
- Unsolicited Telegram/WhatsApp task jobs promising daily payouts of NPR 3,000–5,000 for liking YouTube videos, followed by demands for VIP prepaid task deposits.
- Counterfeit e-commerce stores on Instagram and TikTok advertising high-end electronics at 70% discounts requiring 100% advance wallet transfers.
- Bogus foreign employment consultancies demanding upfront visa processing charges.

Scam Checker Nepal provides an accessible, non-fear-based educational tool to sanity-check suspicious texts and verify entities independently.

---

## 2. Advanced Feature Highlights

### 1. Scam DNA (Tactical Fingerprint)
- **Module:** `src/components/ScamFingerprint.jsx` & `src/utils/scamFingerprint.js`
- **Function:** Deconstructs the specific sequence of social-engineering tactics present in a message (e.g. `IMPERSONATION → URGENCY → PAYMENT REQUEST`).
- **Explanation:** Provides a human-readable explanation of why that specific combination of tactics matters.
- **Ethics Notice:** Clearly states that the detected fingerprint highlights patterns and does NOT constitute forensic or legal proof of fraud.

### 2. Red Flag Phrase Highlighter
- **Module:** `src/components/RedFlagHighlighter.jsx` & `src/data/redFlagPatterns.js`
- **Function:** Inspects submitted text and visually highlights suspicious phrases (such as *"won a prize"*, *"Send Rs. 2,500"*, *"immediately"*, *"OTP"*).
- **Interactive Explanations:** Tapping any highlighted phrase opens a *"Why This May Be Suspicious"* breakdown.
- **Categories:** Urgency, Payment pressure, Credential request, Reward, Threat/Fear, Impersonation, Suspicious link, Investment promise, Job fee, Account verification.
- **No Fake AI:** Powered strictly by transparent, maintainable local regex rules.

### 3. Scam Journey (Psychological Progression Timeline)
- **Module:** `src/components/ScamJourney.jsx`
- **Function:** Maps how deceptive interactions evolve across 6 sequential stages:
  1. *Initial Contact* → 2. *Trust Building* → 3. *Urgency Injection* → 4. *Information Request* → 5. *Payment Request* → 6. *Follow-up Pressure*.
- **Active Stage Indicator:** Highlights where the interaction currently sits based on detected indicators and delivers stage-specific defensive instructions.

### 4. Trust vs. Risk Analysis
- **Module:** `src/components/TrustRiskComparison.jsx`
- **Function:** Replaces solitary risk scores with a balanced 3-column evaluation:
  - **Claims Made:** Claims of account suspension, deadlines, or prizes.
  - **Warning Indicators:** Urgency, credential requests, unverified links.
  - **What Can Be Verified:** Official phone numbers, registry entries, and passbook contacts.
- **Non-Probabilistic Score:** Scores are explicitly framed as rule-based indicator density rather than scientific probabilities.

### 5. "Why Not Just Trust It?" Plain-Language Section
- **Module:** `src/components/WhyBeCautious.jsx`
- **Function:** Explains why detected patterns warrant deliberate hesitation in simple, non-technical language.
- **Safer Next Step:** Emphasizes reaching out through an independently confirmed channel rather than contacts provided in the suspicious message.

### 6. Compare Two Messages
- **Route:** `/compare` (`src/pages/MessageComparison.jsx`)
- **Function:** Side-by-side comparative analysis of Message A vs. Message B.
- **Key Differences:** Flags differences in payment pressure, OTP demands, and urgency.
- **Careful Language:** Never labels an unverified message "safe"; uses *"Lower number of detected warning indicators"*.

### 7. "What Would You Do?" Training Mode
- **Route:** `/training` (`src/pages/Training.jsx`)
- **Function:** Interactive fictional cybersecurity scenarios categorized into *Beginner*, *Intermediate*, and *Advanced*.
- **Instant Explanation:** Explains why the safest choice is safer upon selection.
- **Local Progress:** Tracks completed training scenarios on the user's local device.

### 8. Scam Vocabulary Dictionary
- **Route:** `/dictionary` (`src/pages/Dictionary.jsx`)
- **Function:** Educational dictionary defining 17 key fraud terms:
  *Phishing, Smishing, Vishing, Social Engineering, Impersonation, Spoofing, OTP Scam, QR Scam, Payment Scam, Investment Scam, Job Scam, Marketplace Scam, Account Takeover, Credential Theft, Fake Support Scam, Romance Scam, Advance Fee Scam.*
- **Structure:** Term definition, practical mechanism, warning signs, and what users can do.

### 9. "Is This Too Good To Be True?" Checker
- **Route:** `/check/too-good-to-be-true` (`src/pages/TooGoodToBeTrue.jsx`)
- **Function:** 6-question decision flow assessing unrealistic rewards, upfront payments, guaranteed returns, urgency, and sensitive info requests.
- **Levels:** Lower Concern, Needs Caution, Suspicious, High Concern.

### 10. Before You Pay Checklist
- **Route:** `/before-you-pay` (`src/pages/BeforeYouPay.jsx`)
- **Function:** 8-point verification gate before users send funds via eSewa, Khalti, or mobile banking.
- **Status:** Produces a prominent *"PAUSE AND VERIFY"* status if red flags are detected.
- **Zero Credential Collection:** Never asks users for cards, PINs, passwords, or OTPs.

### 11. Scam Recovery Navigator
- **Route:** `/recovery` (`src/pages/RecoveryNavigator.jsx`)
- **Function:** Structured triage steps for users who already sent money, shared passwords, gave OTPs, or clicked links.
- **Strict Ethics:** Clearly states it is NOT an official recovery service and warns against secondary recovery scammers.

### 12. Local Scam Case ID
- **Module:** `src/utils/caseId.js` & `src/components/CaseIdCard.jsx`
- **Format:** Generates identifiers like `SCN-2026-A82F4`.
- **Privacy Rule:** Retains only metadata (date, type, risk level, score, fingerprint) and never stores passwords, OTPs, or full private messages.

### 13. Chronological Evidence Timeline
- **Route:** `/evidence` (`src/pages/Evidence.jsx`)
- **Function:** Allows victims to log a chronological sequence of events (e.g. 10:15 AM Message received → 10:22 AM Payment requested → 10:30 AM Communication stopped).
- **Export:** Generates an incident dossier formatted for Nepal Police Cyber Bureau reporting.

### 14. Family Safety Pack
- **Route:** `/family-pack` (`src/pages/FamilyPack.jsx`)
- **Function:** Printable/shareable defense checklist designed for households, parents, and older adults.
- **Bilingual:** Full support for English and Devanagari Nepali (नेपाली).

### 15. Student & Campus Safety Mode
- **Route:** `/student-safety` (`src/pages/StudentSafety.jsx`)
- **Function:** Covers 9 youth-targeted scams: fake internships, task jobs, scholarships, certificates, marketplaces, gaming phishing, social accounts, fake giveaways, and courses.
- **4 Modules:** Learn, Quick Quiz, Campus Defense Checklist, and Practice.

### 16. Educational Digital Safety Score
- **Route:** `/dashboard` (`src/pages/Dashboard.jsx`)
- **Function:** Measures completed lessons, training scenarios, quizzes, and safety checklists (e.g. 72 / 100).
- **Clarification:** Distinctly labeled as an educational preparedness score, not a measure of victim probability.

### 17. Scam Evolution Tracker
- **Route:** `/scam-evolution` (`src/pages/ScamEvolution.jsx`)
- **Function:** Visualizes the 6-stage lifecycle for 7 threat categories (Job, Investment, Delivery, Banking, Marketplace, Prize, Social Media).

### 18. Nepal-Specific Linguistic Engine
- **Module:** `src/data/nepalScamPatterns.js` & `src/utils/scamAnalyzer.js`
- **Supported Dialects:** English, Devanagari Nepali, Romanized Nepali (e.g. *OTP dinuhos*, *paisa pathaunu parcha*, *khata block hunchha*), and code-switching.

### 19. Nepal Scam Knowledge Graph
- **Module:** `src/data/scamKnowledgeGraph.js`
- **Data Model:** Relational schema connecting Scam Type, Platforms, Languages, Tactics, Target Audiences, Warning Signs, and Safety Lessons.

### 20. Official Channel Verification Guide
- **Route:** `/verify-channel` (`src/pages/VerifyChannel.jsx`)
- **Function:** Step-by-step instructions on how to independently verify banks, couriers, government ministries, universities, employers, and sellers.

---

## 3. Feature Status Matrix

| Feature | Status | Implementation Details |
|---|---|---|
| Universal Scam Checker | **IMPLEMENTED** | Local rule-based heuristic analyzer (`src/utils/scamAnalyzer.js`) |
| Scam DNA & Fingerprint | **IMPLEMENTED** | Tactical sequence builder & explanation (`src/utils/scamFingerprint.js`) |
| Red Flag Highlighter | **IMPLEMENTED** | Clickable category phrase highlights (`src/components/RedFlagHighlighter.jsx`) |
| Scam Journey Timeline | **IMPLEMENTED** | 6-stage psychological progression (`src/components/ScamJourney.jsx`) |
| Trust vs. Risk Analysis | **IMPLEMENTED** | 3-column verification balance (`src/components/TrustRiskComparison.jsx`) |
| "Why Be Cautious" Section | **IMPLEMENTED** | Plain-language reasons & safer next step (`src/components/WhyBeCautious.jsx`) |
| Compare Two Messages | **IMPLEMENTED** | Side-by-side indicator differencing (`/compare`) |
| "What Would You Do?" Training | **IMPLEMENTED** | Fictional scenarios with Beginner/Inter/Adv tracks (`/training`) |
| Scam Vocabulary Dictionary | **IMPLEMENTED** | 17+ searchable cybersecurity definitions (`/dictionary`) |
| "Too Good To Be True" Checker | **IMPLEMENTED** | 6-question decision flow (`/check/too-good-to-be-true`) |
| Before You Pay Checklist | **IMPLEMENTED** | 8-point pre-payment defense gate (`/before-you-pay`) |
| Scam Recovery Navigator | **IMPLEMENTED** | Step-by-step incident triage protocols (`/recovery`) |
| Case ID Generation | **IMPLEMENTED** | Safe local reference IDs (`SCN-YYYY-XXXXX`) |
| Evidence Timeline | **IMPLEMENTED** | Chronological event logs & dossier export (`/evidence`) |
| Family Safety Pack | **IMPLEMENTED** | Bilingual printable poster (`/family-pack`) |
| Student Safety Mode | **IMPLEMENTED** | 9 youth threat topics, quiz, and checklist (`/student-safety`) |
| Digital Safety Score | **IMPLEMENTED** | Educational preparedness score (`/dashboard`) |
| Scam Evolution Tracker | **IMPLEMENTED** | 6-stage lifecycle for 7 fraud categories (`/scam-evolution`) |
| Nepal Linguistic Engine | **IMPLEMENTED** | Multi-lingual patterns for Nepali & Romanized Nepali |
| Official Channel Verification | **IMPLEMENTED** | Independent verification guide (`/verify-channel`) |
| Specialized Threat Checkers | **IMPLEMENTED** | URL, Job, Shopping, Delivery, Payment, QR, Screenshot, etc. |
| Live Bank/Police API Verification | **FUTURE BACKEND** | Requires official government/banking API integration |
| Community Crowdsourced Database | **LOCAL/DEMO** | Currently stored locally in browser `localStorage` |

---

## 4. Privacy & Security Architecture

- **Zero-Storage Privacy:** Analysis runs entirely inside the client browser. No messages, text inputs, or phone numbers are transmitted to remote servers.
- **Zero Credential Policy:** The application strictly never requests passwords, OTPs, MPINs, ATM card PINs, CVVs, or unredacted citizenship certificates.
- **Sanitized Local Storage:** Local history and case references persist only non-sensitive operational metadata (`id`, `date`, `type`, `riskLevel`, `score`, `caseId`).
- **No Client Secrets:** No third-party API keys or sensitive credentials are embedded in the frontend bundle.
- **Safe Link Handling:** External links open with `rel="noopener noreferrer"` and visible destination previews.

---

## 5. Technology Stack

- **Framework:** React 19 + Vite 8
- **Language:** JavaScript (ESNext / JSX)
- **Styling:** Tailwind CSS (Modern Sky / Light Blue design system)
- **Icons:** Lucide React
- **Routing:** React Router DOM (v7)
- **Storage:** Safe browser `localStorage` with error handling

---

## 6. Installation & Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Run linter
npm run lint
```

The application runs locally on `http://localhost:3000`.

---

## 7. Known Limitations

- **Heuristic Rule-Based Nature:** Scam Checker Nepal uses transparent rule-based heuristics. It does not possess a live telecommunications or banking network tap.
- **Emerging Scams:** Attackers continually invent new wordings and pretexts. Absence of warning indicators does not constitute absolute proof of safety.
- **No Automatic Fund Retrieval:** Neither this tool nor any third party can magically reverse completed cryptocurrency or bank transfers.

---

## 8. Disclaimer

> **Educational Notice:** Scam Checker Nepal provides educational, rule-based risk indicators. Results are not legal or forensic proof that an individual, organization, website, message, or transaction is fraudulent. Always independently verify important communications through trusted, official channels before transferring funds or credentials.
"# scam-checker-nepal" 
