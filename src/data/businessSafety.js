/**
 * Small Business & Merchant Safety Guide (Feature 19)
 * Guidelines for retail shopkeepers, exporters, online sellers, and SMEs in Nepal.
 */

export const businessSafetyTopics = [
  {
    id: "fake-payment-screenshot",
    title: "Counterfeit Fonepay / eSewa Payment Screenshots",
    description: "Customers in retail shops showing an edited screenshot or simulated app showing 'Payment Successful' without the merchant receiving an SMS confirmation or soundbox alert.",
    warningSigns: [
      "Customer rushes to leave immediately after flashing their phone screen",
      "No real-time SMS or push alert received on your merchant device",
      "Soundbox does not announce the transaction"
    ],
    preventionChecklist: [
      "Always wait for soundbox voice announcement or in-app merchant notification before releasing goods.",
      "Never rely exclusively on the customer's phone display.",
      "Check your merchant statement if network delay is claimed."
    ]
  },
  {
    id: "fake-supplier-invoices",
    title: "Altered Supplier Bank Details (Vendor Email Compromise)",
    description: "An email appearing to come from an existing supplier stating: 'Our bank account has changed due to audit. Please remit payment to our new account.'",
    warningSigns: [
      "Sudden change in payment beneficiary details before an invoice settlement",
      "Slight typo in supplier email domain (e.g., supplier-nepal.com vs suppliernepal.com)",
      "Sense of urgency citing impending price hikes or container shipping delays"
    ],
    preventionChecklist: [
      "Establish an out-of-band verification policy: call your known supplier contact via a trusted phone number to verify any bank account change.",
      "Never update vendor bank accounts based solely on an email request.",
      "Require secondary internal approval for changes to payment beneficiaries."
    ]
  },
  {
    id: "employee-phishing",
    title: "Employee Tax / Salary Update Phishing Links",
    description: "Emails or WhatsApp messages sent to accounts or HR staff with attachments like 'Tax_Deduction_Update.exe' or links asking for email credentials.",
    warningSigns: [
      "Sender address claims to be internal management but uses a public Gmail or unfamiliar domain",
      "Encrypted ZIP or macro-enabled spreadsheet attachment",
      "Prompts employee to type Office 365 or Google Workspace login credentials"
    ],
    preventionChecklist: [
      "Train staff to verify internal corporate communications through voice or chat before opening attachments.",
      "Enable hardware-key or app-based Two-Factor Authentication on all business email accounts.",
      "Restrict software installation privileges on corporate accounting workstations."
    ]
  },
  {
    id: "fake-bulk-orders",
    title: "Fake Overseas Export Bulk Orders & Overpayment Scams",
    description: "An alleged overseas buyer places an abnormally large purchase order for Nepali handicrafts or carpets, sends a fake wire confirmation, and asks for a 'courier customs clearance fee' refund.",
    warningSigns: [
      "Buyer agrees to quoted prices without negotiation or sample inspection",
      "Claims to have overpaid and demands immediate refund of the excess via digital transfer",
      "Foreign wire transfer receipt contains inconsistent formatting or font irregularities"
    ],
    preventionChecklist: [
      "Verify foreign remittance clearance directly with your commercial bank's trade department before dispatching goods.",
      "Remember that international wire receipts do NOT equal cleared bank funds.",
      "Never refund 'overpayments' until funds have cleared and settled permanently."
    ]
  },
  {
    id: "qr-sticker-tampering",
    title: "Physical Merchant QR Code Sticker Tampering",
    description: "Malicious actors pasting a counterfeit sticker over your shop's official Fonepay or eSewa QR standee so customer payments route to the scammer's wallet.",
    warningSigns: [
      "Multiple customers report successful transfers but merchant balance does not update",
      "Edges of QR standee appear peeled or have double-layered paper"
    ],
    preventionChecklist: [
      "Inspect your physical QR standees every morning and evening for physical sticker overlays.",
      "Ensure your merchant name is clearly printed and visible to customers on the counter.",
      "Encourage customers to verify your shop name on their screen before hitting Send."
    ]
  }
];
