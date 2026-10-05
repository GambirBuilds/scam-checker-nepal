import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Users, 
  MessageSquare, 
  Link2, 
  Briefcase, 
  CreditCard, 
  HelpCircle, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Globe
} from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function FamilyMode() {
  const { language, setLanguage } = useApp();
  const navigate = useNavigate();
  const [showEmergencyHelp, setShowEmergencyHelp] = useState(false);

  const isNepali = language === "ne";

  const actions = [
    {
      title: isNepali ? "१. कुनै शंकास्पद सन्देश वा SMS आएको छ?" : "1. Check a Suspicious Message or SMS",
      desc: isNepali ? "मोबाइलमा आएको बैंक, चिट्ठा वा पुरस्कारको म्यासेज जाँच्नुहोस्।" : "Paste SMS, WhatsApp, or Viber message to see if it is safe.",
      icon: MessageSquare,
      to: "/check",
      color: "bg-sky-600"
    },
    {
      title: isNepali ? "२. कसैले पठाएको वेबसाइट लिङ्क खोल्न भनिएको छ?" : "2. Check an Unknown Web Link",
      desc: isNepali ? "क्लिक गर्नु अघि वेबसाइट सुरक्षित छ कि छैन जाँच्नुहोस्।" : "Inspect the website address before opening or typing passwords.",
      icon: Link2,
      to: "/check/url",
      color: "bg-indigo-600"
    },
    {
      title: isNepali ? "३. अनलाइन काम वा रोजगारीको अफर छ?" : "3. Check a Work-From-Home Job Offer",
      desc: isNepali ? "पैसा मागेको वा युट्युब लाइक गरेर दैनिक कमाउने अफर जाँच्नुहोस्।" : "Check if a part-time job or overseas visa offer is legitimate.",
      icon: Briefcase,
      to: "/check/job",
      color: "bg-emerald-600"
    },
    {
      title: isNepali ? "४. eSewa वा बैंकबाट पैसा पठाउन भनिएको छ?" : "4. Check a Payment or QR Code Request",
      desc: isNepali ? "झुक्किएर पैसा पठाएको दाबी वा QR स्क्यान गर्न भनिएको छ?" : "Verify accidental money transfer claims or QR scan requests.",
      icon: CreditCard,
      to: "/check/payment",
      color: "bg-amber-600"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEOHead 
        title="Family Safety Mode" 
        description="Simplified digital protection designed for parents, older adults, and everyday families across Nepal." 
      />

      {/* Header with Language Switch */}
      <div className="p-6 sm:p-8 rounded-3xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
            <Users className="w-4 h-4" />
            <span>{isNepali ? "पारिवारिक सुरक्षा मोड" : "Family Protection Mode"}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {isNepali ? "विश्वास गर्नु अघि एक पटक जाँच्नुहोस्" : "Think Before You Trust"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            {isNepali 
              ? "आमाबुवा तथा परिवारका लागि सजिलो भाषामा बनाइएको सुरक्षा पाना। कुनै पनि शंका लाग्ने कुरा तल छानेर जाँच्नुहोस्।"
              : "Clear, large buttons and simple instructions designed for parents and non-technical family members."}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setLanguage(isNepali ? "en" : "ne")}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Globe className="w-4 h-4" />
              <span>{isNepali ? "Switch to English" : "नेपालीमा हेर्नुहोस्"}</span>
            </button>
          </div>
        </div>

        {/* Family Safety Visual Illustration */}
        <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden border border-sky-200 dark:border-sky-800 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800">
          <img 
            src="/src/assets/images/family_safety_nepal_1791171692464.jpg" 
            alt="Family digital safety guidance in Nepal"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Big Action Buttons */}
      <div className="grid grid-cols-1 gap-4">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <Link
              key={idx}
              to={act.to}
              className="p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${act.color} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {act.desc}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-sky-600 dark:text-sky-400 font-bold text-xs shrink-0">
                <span>{isNepali ? "खोल्नुहोस्" : "Open"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Emergency Guidance Help Box */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {isNepali ? "मलाई केही गडबड लागेको छ, के गरुँ?" : "What should I do right now?"}
            </h2>
          </div>
          <button
            onClick={() => setShowEmergencyHelp(!showEmergencyHelp)}
            className="text-xs text-sky-600 dark:text-sky-400 font-semibold hover:underline cursor-pointer"
          >
            {showEmergencyHelp ? (isNepali ? "बन्द गर्नुहोस्" : "Hide") : (isNepali ? "नियमहरू पढ्नुहोस्" : "Show 3 Rules")}
          </button>
        </div>

        {showEmergencyHelp && (
          <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>१. OTP वा गोप्य कोड कसैलाई नभन्नुहोस्:</strong> फोनमा आएको ६ अंकको कोड कसैलाई पनि सुनाउनु हुँदैन।
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>२. हतारमा पैसा नपठाउनुहोस्:</strong> खाता बन्द हुने डर देखाए पनि तुरुन्त पैसा नपठाउनुहोस्।
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong>३. परिवारमा सल्लाह लिनुहोस्:</strong> कुनै शंका लाग्नेबित्तिकै छोराछोरी वा साथीभाइलाई सोध्नुहोस्।
            </div>
          </div>
        )}
      </div>

      {/* Verified Police Contact Card */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            {isNepali ? "नेपाल प्रहरी साइबर ब्युरो" : "Nepal Police Cyber Bureau"}
          </p>
          <p className="text-base font-bold">
            {isNepali ? "आपतकालीन सोधपुछ तथा उजुरी" : "Emergency Cybercrime Hotline"}
          </p>
          <p className="text-xs text-slate-300">
            {isNepali ? "काठमाडौं भोटाहिटी | टेलिफोन: ०१-४४१२५५५" : "Bhotahiti, Kathmandu | Phone: 01-4412555 / 100"}
          </p>
        </div>
        <Link
          to="/resources"
          className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors whitespace-nowrap"
        >
          {isNepali ? "आधिकारिक सम्पर्कहरू हेर्नुहोस्" : "View Official Contacts"}
        </Link>
      </div>
    </div>
  );
}
