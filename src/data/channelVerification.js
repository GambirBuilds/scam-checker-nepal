/**
 * Independent Channel Verification Guide Data.
 * Teaches users how to independently verify organizations without relying on contact details supplied in suspicious messages.
 */

export const verificationGuides = [
  {
    id: "verify-banks",
    category: "Commercial Banks & Financial Institutions",
    target: "Commercial Banks (Class A, B, C)",
    officialRegistry: "Nepal Rastra Bank (NRB) Licensed Financial Institutions Directory",
    registryUrl: "https://www.nrb.org.np",
    steps: [
      "Check your physical ATM card or bank passbook for the official customer care telephone number.",
      "Never call phone numbers sent via SMS or displayed in sponsored Google search results.",
      "Verify the exact website URL: Licensed Nepali commercial banks use their registered `.com.np` or well-known corporate `.com` domain names with valid SSL certificates.",
      "Check the Nepal Rastra Bank website directory (nrb.org.np) under 'Licensed BFIs' to confirm the bank is a regulated financial institution.",
      "If a caller claims to be your branch manager, hang up and dial your local branch landline independently."
    ],
    redFlagsToSpot: [
      "Domain extensions like `.cc`, `.top`, `.xyz`, or `.tk`",
      "Customer support conducting official business over personal WhatsApp accounts",
      "Refusal to let you verify with your local physical branch"
    ]
  },
  {
    id: "verify-couriers",
    category: "Courier & Postal Services",
    target: "Nepal Post, DHL, Aramex, FedEx, Domestic Couriers",
    officialRegistry: "General Post Office Nepal / Department of Postal Services",
    registryUrl: "https://gpo.gov.np",
    steps: [
      "Open your original e-commerce receipt or merchant confirmation to retrieve your authentic tracking code.",
      "Navigate directly to the official courier portal by typing its address in your browser (e.g., dhl.com or gpo.gov.np).",
      "Paste your tracking code directly into the official portal; do not use links provided in suspicious text messages.",
      "Legitimate couriers in Nepal collect customs or delivery fees upon doorstep delivery with an official printed cash receipt, or via official merchant apps.",
      "Never enter your debit/credit card CVV on a courier tracking page to pay a nominal re-delivery fee."
    ],
    redFlagsToSpot: [
      "SMS from random 10-digit mobile numbers claiming a parcel cannot be delivered",
      "Demands to pay small fees (Rs. 100–250) via unverified links to 'release' a package",
      "Failure of the tracking code to work on the company's verified primary homepage"
    ]
  },
  {
    id: "verify-government",
    category: "Government Services & Law Enforcement",
    target: "Nepal Police, Department of Passport, NTA, Inland Revenue",
    officialRegistry: "Nepal Government National Portal (nepal.gov.np)",
    registryUrl: "https://nepal.gov.np",
    steps: [
      "All authentic Government of Nepal departmental websites end in the official government domain extension `.gov.np`.",
      "Inspect the domain carefully: any website ending in `.com`, `.org`, `.net`, or `.info` claiming to be a Nepal government ministry is fraudulent.",
      "Nepal Police does NOT issue arrest warrants via WhatsApp voice calls or demand bail deposits into personal eSewa or Khalti accounts.",
      "To verify any law enforcement inquiry, visit your nearest local police beat or contact the Nepal Police Cyber Bureau desk directly at 01-4412555 or emergency 100."
    ],
    redFlagsToSpot: [
      "Government agency communications originating from generic `@gmail.com` or `@outlook.com` addresses",
      "Demands for fines or taxes to be transferred to private individuals",
      "Callers threatening immediate imprisonment unless money is wired right away"
    ]
  },
  {
    id: "verify-universities",
    category: "Educational Institutions & Universities",
    target: "Tribhuvan University, Kathmandu University, Foreign Universities",
    officialRegistry: "University Grants Commission Nepal (UGC) / Ministry of Education (MoEST)",
    registryUrl: "https://ugcnepal.edu.np",
    steps: [
      "Verify the college or campus affiliation on the University Grants Commission Nepal (ugcnepal.edu.np) or official university register.",
      "For study-abroad consultants, confirm the educational consultancy is approved by the Ministry of Education, Science and Technology (MoEST) and registered with ECAN.",
      "Contact the university admissions office directly using the verified email published on their official `.edu` or `.edu.np` domain.",
      "Cross-check tuition fee payment accounts: Genuine academic fees are deposited into official institutional bank accounts, never into private personal accounts."
    ],
    redFlagsToSpot: [
      "Consultancies promising 100% full-ride scholarships with no English language tests or transcripts required",
      "Admission offers issued within 24 hours without academic documentation",
      "Cash deposit requirements into personal individual accounts for 'embassy visa guarantees'"
    ]
  },
  {
    id: "verify-employers",
    category: "Employers & Recruitment Agencies",
    target: "Domestic Employers & Foreign Employment Manpower Agencies",
    officialRegistry: "Department of Foreign Employment (DOFE) / Company Registrar (OCR)",
    registryUrl: "https://dofe.gov.np",
    steps: [
      "For overseas foreign employment, check the recruitment agency's active license on the Department of Foreign Employment portal (dofe.gov.np) and verify the official Job Demand (Lot Number).",
      "For domestic corporate jobs, verify the business registration on the Office of the Company Registrar portal (ocr.gov.np).",
      "Review the company's verified LinkedIn page, physical office location, and landline telephone.",
      "Conduct interviews in person at the registered office or through corporate video channels (Zoom/Teams), never exclusively through anonymous Telegram chat rooms."
    ],
    redFlagsToSpot: [
      "Recruiters requiring candidates to pay 'registration fees', 'training charges', or 'laptop deposits' before hiring",
      "Job offers communicated strictly through Telegram or WhatsApp without an official corporate email domain",
      "Unsolicited job offers for positions you never applied for"
    ]
  },
  {
    id: "verify-marketplaces",
    category: "Online Marketplaces & Social Sellers",
    target: "Instagram Shops, Facebook Pages, Hamrobazar Sellers",
    officialRegistry: "Department of Commerce, Supplies and Consumer Protection (doc.gov.np)",
    registryUrl: "https://doc.gov.np",
    steps: [
      "Check the seller's Permanent Account Number (PAN) or Value Added Tax (VAT) registration certificate.",
      "Look for an established physical shop or warehouse address in Nepal that can be visited in person.",
      "Check the page creation date under 'Page Transparency' on Facebook/Instagram. Scammers frequently re-name old stolen pages or operate brand new accounts.",
      "Read uncensored customer reviews on Google Maps or consumer forums; avoid relying solely on screenshots posted by the seller.",
      "Insist on Cash on Delivery (COD) or pay only upon personal handover and thorough inspection of the item."
    ],
    redFlagsToSpot: [
      "Prices discounted by 60%–80% compared to official market retail prices",
      "Comments on posts are disabled, hidden, or restricted",
      "Seller insists on 100% advance digital wallet transfer and refuses Cash on Delivery"
    ]
  },
  {
    id: "verify-social",
    category: "Social Media Accounts & Personal Contacts",
    target: "Friends, Relatives, Distressed Acquaintances on Messenger/WhatsApp",
    officialRegistry: "Direct Independent Contact / Face-to-Face Voice Verification",
    registryUrl: "",
    steps: [
      "When a friend or relative messages on social media asking for urgent money, treat the account as potentially compromised.",
      "Do NOT communicate only within the chat window where the request was made.",
      "Call the person immediately on their regular cellular telephone number.",
      "Ask a specific personal question that only your genuine friend would know (e.g., 'Where did we meet last month?' or 'What is your pet's name?').",
      "If the person refuses to answer your phone call claiming 'my microphone is broken' or 'I am in a meeting', DO NOT send money."
    ],
    redFlagsToSpot: [
      "Urgent pleas for emergency hospital, travel, or bail funds",
      "Requests to transfer money to a digital wallet number belonging to an unfamiliar third party",
      "Unusual spelling, grammar, or phrasing that does not match your acquaintance's usual style"
    ]
  }
];
