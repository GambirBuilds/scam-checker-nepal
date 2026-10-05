import React from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export function Toast() {
  const { toast } = useApp();

  if (!toast.show) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div 
      className="fixed bottom-5 right-5 z-50 max-w-sm w-full transition-all duration-300 transform translate-y-0"
      role="status"
      aria-live="polite"
    >
      <div className={`p-4 rounded-xl shadow-lg border flex items-center gap-3 backdrop-blur-md ${
        isSuccess
          ? "bg-sky-900/95 text-white border-sky-700"
          : isError
          ? "bg-rose-900/95 text-white border-rose-700"
          : "bg-slate-900/95 text-white border-slate-700"
      }`}>
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
        ) : isError ? (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-slate-400 shrink-0" />
        )}
        <p className="text-xs font-medium flex-1">
          {toast.message}
        </p>
      </div>
    </div>
  );
}
