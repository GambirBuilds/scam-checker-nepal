import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Home, Search } from "lucide-react";
import { SEOHead } from "../components/SEOHead.jsx";

export function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
      <SEOHead 
        title="404 - Page Not Found" 
        description="The page you requested could not be located." 
      />

      <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 flex items-center justify-center mx-auto">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Error 404
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
          Looks like this page doesn't exist.
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          The link you followed may be broken or the URL might have been typed incorrectly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>RETURN HOME</span>
        </Link>
        <Link
          to="/check"
          className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>CHECK A SCAM</span>
        </Link>
      </div>
    </div>
  );
}
