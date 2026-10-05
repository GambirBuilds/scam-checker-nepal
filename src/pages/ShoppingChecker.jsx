import React, { useState } from "react";
import { ShoppingBag, AlertCircle, ShieldCheck } from "lucide-react";
import { analyzeContent } from "../utils/scamAnalyzer.js";
import { RiskAssessment } from "../components/RiskAssessment.jsx";
import { SEOHead } from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";

export function ShoppingChecker() {
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    productUrl: "",
    productName: "",
    advertisedPrice: "",
    seller: "",
    paymentMethod: "advance",
    returnPolicy: "no-returns",
    description: ""
  });

  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!formData.productName.trim() && !formData.description.trim()) {
      setError("Please provide at least a Product Name or Offer Description.");
      return;
    }

    setError(null);
    setLoading(true);

    const aggregated = `
Online Shopping Offer:
Product: ${formData.productName}
URL: ${formData.productUrl}
Price: ${formData.advertisedPrice}
Seller: ${formData.seller}
Payment Method: ${formData.paymentMethod}
Return Policy: ${formData.returnPolicy}
Description: ${formData.description}
    `.trim();

    setTimeout(() => {
      const assessment = analyzeContent(aggregated, "Shopping Deal");

      // Specific e-commerce risk weighting
      if (formData.paymentMethod === "advance" || formData.paymentMethod === "wallet-only") {
        assessment.score = Math.min(100, assessment.score + 25);
        assessment.indicators.push({
          category: "Payment Risk",
          title: "100% Advance Payment Demanded",
          description: "Seller insists on full advance payment via personal wallet transfer and refuses Cash on Delivery (COD).",
          severity: "High",
          weight: 25,
          matchedPhrases: ["advance payment", "no COD"]
        });
      }

      if (formData.returnPolicy === "no-returns") {
        assessment.score = Math.min(100, assessment.score + 15);
        assessment.indicators.push({
          category: "Consumer Rights",
          title: "No Return or Replacement Policy",
          description: "Absence of a verifiable return or refund mechanism makes dispute resolution virtually impossible.",
          severity: "Medium",
          weight: 15,
          matchedPhrases: ["no returns"]
        });
      }

      if (assessment.score >= 71) assessment.riskLevel = "HIGH RISK";
      else if (assessment.score >= 41) assessment.riskLevel = "SUSPICIOUS";
      else if (assessment.score >= 21) assessment.riskLevel = "NEEDS CAUTION";

      setResult(assessment);
      setLoading(false);
      showToast("Shopping deal assessment completed.", "info");
    }, 250);
  };

  const handleReset = () => {
    setFormData({
      productUrl: "",
      productName: "",
      advertisedPrice: "",
      seller: "",
      paymentMethod: "advance",
      returnPolicy: "no-returns",
      description: ""
    });
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Online Shopping Scam Checker" 
        description="Check suspicious social media shops, unrealistic discount deals, and advance-payment-only sellers in Nepal." 
      />

      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <ShoppingBag className="w-4 h-4" />
          <span>E-Commerce Risk Assessment</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Online Shopping Checker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Inspect Facebook, Instagram, or TikTok online stores advertising heavy clearance discounts, demanding advance wallet transfers, or refusing Cash on Delivery.
        </p>
      </div>

      <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleEvaluate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="e.g. iPhone 15 Pro Max 256GB / Nike Jacket"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Advertised Price
              </label>
              <input
                type="text"
                name="advertisedPrice"
                value={formData.advertisedPrice}
                onChange={handleChange}
                placeholder="e.g. NPR 38,000 (Market price: NPR 1,75,000)"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Seller / Page Name
              </label>
              <input
                type="text"
                name="seller"
                value={formData.seller}
                onChange={handleChange}
                placeholder="e.g. @nepal_gadgets_clearance on Instagram"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Store or Product Web URL
              </label>
              <input
                type="text"
                name="productUrl"
                value={formData.productUrl}
                onChange={handleChange}
                placeholder="e.g. https://instagram.com/deal_nepal"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Payment Method Offered
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value="advance">100% Advance Payment via eSewa / Bank</option>
                <option value="wallet-only">Personal Mobile Wallet Transfer Only</option>
                <option value="cod-available">Cash on Delivery (COD) Available</option>
                <option value="registered-gateway">Registered Payment Gateway / Card</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Return / Refund Policy
              </label>
              <select
                name="returnPolicy"
                value={formData.returnPolicy}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value="no-returns">No Returns / All Sales Final / Not Mentioned</option>
                <option value="conditional">Exchange Only within 2 Days</option>
                <option value="full-return">Standard 7-day Return with Receipt</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Offer Description / Caption *
            </label>
            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Paste the caption, post text, or chat transcript from the seller..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{loading ? "Analyzing Store..." : "Check Shopping Deal"}</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="pt-2 animate-in fade-in duration-300">
          <RiskAssessment result={result} onReset={handleReset} />
        </div>
      )}
    </div>
  );
}
