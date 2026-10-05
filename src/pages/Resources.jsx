import React from "react";
import { PhoneCall, ExternalLink, ShieldCheck, Mail, MapPin, AlertCircle } from "lucide-react";
import { officialResources } from "../data/officialResources.js";
import { SEOHead } from "../components/SEOHead.jsx";

export function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Verified Official Resources & Helplines in Nepal" 
        description="Official verified reporting contacts for Nepal Police Cyber Bureau, Nepal Rastra Bank, Nepal Telecommunications Authority, and Consumer Protection." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Authentic Directory</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Official Resource Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Verified directory of authorized regulatory agencies, law enforcement hotlines, and consumer grievance portals across Nepal.
        </p>
      </div>

      {/* Emergency Law Enforcement Spotlight */}
      <div className="p-6 rounded-2xl bg-sky-900 text-white space-y-3">
        <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <PhoneCall className="w-4 h-4" />
          <span>Primary Cybercrime Enforcement</span>
        </div>
        <h2 className="text-xl font-bold">
          Nepal Police Cyber Bureau (नेपाल प्रहरी साइबर ब्युरो)
        </h2>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
          If you have been defrauded of money or your identity/social accounts have been hijacked, report directly to the Cyber Bureau or your nearest district police office.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-100">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block mb-0.5">Telephone Hotline</span>
            <strong className="text-sm font-tabular">01-4412555 / 01-4412780</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block mb-0.5">National Emergency</span>
            <strong className="text-sm font-tabular">100 (Police Control)</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block mb-0.5">Physical Address</span>
            <strong className="text-sm">Bhotahiti, Kathmandu</strong>
          </div>
        </div>
      </div>

      {/* Verified Resource Cards */}
      <div className="space-y-5">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Regulatory Authorities & Reporting Portals
        </h3>

        {officialResources.map((res) => (
          <div
            key={res.id}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-0.5">
                  {res.category}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {res.organization}
                </h4>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0 self-start sm:self-auto">
                Verified Official Entity
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {res.description}
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <PhoneCall className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Phone: <strong className="font-tabular">{res.phone}</strong></span>
              </div>
              {res.email && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Email: <strong className="font-mono text-[11px]">{res.email}</strong></span>
                </div>
              )}
              {res.location && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Location: {res.location}</span>
                </div>
              )}
            </div>

            {/* Advice Callout */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-0.5">Guidance:</span>
              <p>{res.advice}</p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={res.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit Official Portal ({res.website.replace("https://", "")})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
