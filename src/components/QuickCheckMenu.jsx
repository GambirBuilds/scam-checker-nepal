import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Zap, 
  MessageSquare, 
  Link2, 
  Camera, 
  Briefcase, 
  CreditCard, 
  Truck, 
  QrCode, 
  PhoneCall, 
  MessageCircle,
  X 
} from "lucide-react";

export function QuickCheckMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const quickLinks = [
    { to: "/check", label: "Message", icon: MessageSquare, color: "bg-sky-600" },
    { to: "/check/url", label: "Link", icon: Link2, color: "bg-blue-600" },
    { to: "/check/screenshot", label: "Screenshot", icon: Camera, color: "bg-indigo-600" },
    { to: "/check/job", label: "Job", icon: Briefcase, color: "bg-emerald-600" },
    { to: "/check/payment", label: "Payment", icon: CreditCard, color: "bg-amber-600" },
    { to: "/check/delivery", label: "Delivery", icon: Truck, color: "bg-orange-600" },
    { to: "/check/qr", label: "QR Code", icon: QrCode, color: "bg-teal-600" },
    { to: "/check/call", label: "Call", icon: PhoneCall, color: "bg-purple-600" },
    { to: "/check/conversation", label: "Timeline", icon: MessageCircle, color: "bg-rose-600" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      {/* Expanded Quick Drawer */}
      {isOpen && (
        <div className="mb-3 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl w-72 sm:w-80 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Quick Check Tools
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all ${
                    isActive
                      ? "border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 font-bold"
                      : "border-slate-100 dark:border-slate-800 hover:border-sky-300 bg-slate-50/70 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:text-sky-600"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${item.color} text-white flex items-center justify-center shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium truncate w-full">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/30 flex items-center gap-2 text-xs font-bold transition-transform active:scale-95 cursor-pointer"
        aria-label="Toggle Quick Check Tools Menu"
      >
        <Zap className="w-4 h-4 fill-white" />
        <span>Quick Check</span>
      </button>
    </div>
  );
}
