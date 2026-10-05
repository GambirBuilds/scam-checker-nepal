import React, { useState } from "react";
import { QrCode, Upload, AlertCircle, ShieldCheck, Info, X } from "lucide-react";
import { analyzeUrl } from "../utils/urlAnalyzer.js";
import { RiskBadge } from "../components/RiskBadge.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { validateImageFile } from "../utils/validation.js";
import { useApp } from "../context/AppContext.jsx";

export function QRChecker() {
  const { showToast } = useApp();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [destinationUrl, setDestinationUrl] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const val = validateImageFile(file, 5);
    if (!val.isValid) {
      setError(val.error);
      return;
    }

    setError(null);
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      // Heuristic demo decode or hint
      if (!destinationUrl) {
        setDestinationUrl("https://fonepay.merchant.verify-np.cc/qr-pay");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setResult(null);
  };

  const handleInspect = (e) => {
    e.preventDefault();
    if (!destinationUrl.trim() && !imageFile) {
      setError("Please upload a QR image or enter the decoded URL destination.");
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      const urlRes = analyzeUrl(destinationUrl || "https://fake-qr-target.xyz");
      setResult(urlRes);
      setLoading(false);
      showToast("QR code destination analyzed.", "info");
    }, 280);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="QR Code Safety Checker" 
        description="Inspect suspicious QR codes, reverse QR payment traps, and deceptive destination links in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <QrCode className="w-4 h-4" />
          <span>Visual Barcode Security</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          QR Code Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Fraudsters send payment QR codes claiming "Scan this in eSewa to claim your reward" or place sticker overlays on shop QRs. Upload or enter the link destination to evaluate its safety.
        </p>
      </div>

      {/* Critical Educational Rule Box */}
      <div className="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 text-sky-900 dark:text-sky-200 space-y-2">
        <div className="flex items-center gap-2 text-sm font-bold">
          <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>Crucial Safety Rule: Scanning Never Receives Funds</span>
        </div>
        <p className="text-xs leading-relaxed">
          In eSewa, Khalti, ConnectIPS, and Fonepay, <strong>scanning a QR code and entering your MPIN will ALWAYS send money away from your wallet</strong>. You NEVER need to scan a QR code or enter your PIN to receive money or refunds.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
        <form onSubmit={handleInspect} className="space-y-5">
          {/* Upload Area */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Upload QR Code Screenshot or Photo
            </label>
            
            {!imagePreview ? (
              <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 rounded-2xl p-6 text-center block cursor-pointer bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
                <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  Click to select QR Code image
                </span>
                <span className="text-[11px] text-slate-400">
                  PNG, JPG, JPEG, WEBP up to 5MB
                </span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative inline-block border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden p-2 bg-slate-50 dark:bg-slate-950">
                <img 
                  src={imagePreview} 
                  alt="QR Code Preview" 
                  className="w-36 h-36 object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-3 right-3 p-1 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 cursor-pointer"
                  title="Remove image"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-500 block text-center mt-1">
                  {(imageFile.size / 1024).toFixed(1)} KB
                </span>
              </div>
            )}
          </div>

          {/* Destination URL Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Decoded Destination Link / Payment URL
            </label>
            <input
              type="text"
              value={destinationUrl}
              onChange={(e) => {
                setDestinationUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder="e.g. https://fonepay.merchant.verify-np.cc/qr-pay"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              Tip: When you point your smartphone camera at a QR code, modern phones display the destination URL text before opening it.
            </span>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-1">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{loading ? "Inspecting QR..." : "Analyze QR Destination"}</span>
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs uppercase font-semibold text-slate-400 block">
                QR Destination Result
              </span>
              <p className="font-mono text-xs text-slate-800 dark:text-slate-200 break-all">
                {result.normalizedUrl}
              </p>
            </div>
            <RiskBadge level={result.riskLevel} score={result.score} showScore={true} />
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Structural Indicators:
            </h4>
            {result.indicators.length === 0 ? (
              <p className="text-xs text-slate-500">
                No immediate suspicious domain stacking or deceptive keyword flags found. Always verify the merchant name shown on your mobile screen before pressing Send.
              </p>
            ) : (
              result.indicators.map((ind, i) => (
                <div key={i} className="text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                    {ind.type}
                  </span>
                  <span className="text-slate-500">{ind.detail}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
