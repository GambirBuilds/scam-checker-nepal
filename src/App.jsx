import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { CookieBanner } from "./components/CookieBanner.jsx";
import { Toast } from "./components/Toast.jsx";
import { QuickCheckMenu } from "./components/QuickCheckMenu.jsx";

// Pages
import { Home } from "./pages/Home.jsx";
import { Checker } from "./pages/Checker.jsx";
import { Results } from "./pages/Results.jsx";
import { URLChecker } from "./pages/URLChecker.jsx";
import { JobChecker } from "./pages/JobChecker.jsx";
import { ShoppingChecker } from "./pages/ShoppingChecker.jsx";
import { DeliveryChecker } from "./pages/DeliveryChecker.jsx";
import { InvestmentChecker } from "./pages/InvestmentChecker.jsx";
import { BankingChecker } from "./pages/BankingChecker.jsx";
import { PaymentChecker } from "./pages/PaymentChecker.jsx";
import { QRChecker } from "./pages/QRChecker.jsx";
import { ScreenshotChecker } from "./pages/ScreenshotChecker.jsx";
import { EmailChecker } from "./pages/EmailChecker.jsx";
import { SocialChecker } from "./pages/SocialChecker.jsx";
import { ScamTypes } from "./pages/ScamTypes.jsx";
import { Patterns } from "./pages/Patterns.jsx";
import { Quiz } from "./pages/Quiz.jsx";
import { FamilyMode } from "./pages/FamilyMode.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { History } from "./pages/History.jsx";
import { Evidence } from "./pages/Evidence.jsx";
import { Report } from "./pages/Report.jsx";
import { Alerts } from "./pages/Alerts.jsx";
import { SafetyGuide } from "./pages/SafetyGuide.jsx";
import { Resources } from "./pages/Resources.jsx";
import { About } from "./pages/About.jsx";
import { Privacy } from "./pages/Privacy.jsx";
import { Terms } from "./pages/Terms.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// Advanced New Pages (Features 6, 7, 8, 9, 10, 11, 14, 15, 17, 20)
import { MessageComparison } from "./pages/MessageComparison.jsx";
import { Training } from "./pages/Training.jsx";
import { Dictionary } from "./pages/Dictionary.jsx";
import { TooGoodToBeTrue } from "./pages/TooGoodToBeTrue.jsx";
import { BeforeYouPay } from "./pages/BeforeYouPay.jsx";
import { RecoveryNavigator } from "./pages/RecoveryNavigator.jsx";
import { FamilyPack } from "./pages/FamilyPack.jsx";
import { StudentSafety } from "./pages/StudentSafety.jsx";
import { ScamEvolution } from "./pages/ScamEvolution.jsx";
import { VerifyChannel } from "./pages/VerifyChannel.jsx";

// Error Boundary for UI resilience
class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Scam Checker Nepal Error Boundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
          <div className="max-w-md w-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Something unexpected happened
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We encountered a client-side execution anomaly. Your data on this device has not been affected.
            </p>
            <button
              onClick={() => window.location.assign("/")}
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white cursor-pointer shadow-xs"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <GlobalErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900 dark:selection:text-sky-100 transition-colors">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Core & Checker Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/check" element={<Checker />} />
                <Route path="/results" element={<Results />} />
                <Route path="/check/url" element={<URLChecker />} />
                <Route path="/check/job" element={<JobChecker />} />
                <Route path="/check/shopping" element={<ShoppingChecker />} />
                <Route path="/check/delivery" element={<DeliveryChecker />} />
                <Route path="/check/investment" element={<InvestmentChecker />} />
                <Route path="/check/banking" element={<BankingChecker />} />
                <Route path="/check/payment" element={<PaymentChecker />} />
                <Route path="/check/qr" element={<QRChecker />} />
                <Route path="/check/screenshot" element={<ScreenshotChecker />} />
                <Route path="/check/email" element={<EmailChecker />} />
                <Route path="/check/social" element={<SocialChecker />} />

                {/* Advanced Decision & Comparison Tools */}
                <Route path="/compare" element={<MessageComparison />} />
                <Route path="/check/too-good-to-be-true" element={<TooGoodToBeTrue />} />
                <Route path="/before-you-pay" element={<BeforeYouPay />} />
                <Route path="/recovery" element={<RecoveryNavigator />} />
                <Route path="/verify-channel" element={<VerifyChannel />} />

                {/* Educational Learning & Defense */}
                <Route path="/scam-types" element={<ScamTypes />} />
                <Route path="/patterns" element={<Patterns />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/training" element={<Training />} />
                <Route path="/scam-evolution" element={<ScamEvolution />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/family-mode" element={<FamilyMode />} />
                <Route path="/family-pack" element={<FamilyPack />} />
                <Route path="/student-safety" element={<StudentSafety />} />
                <Route path="/safety-guide" element={<SafetyGuide />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/resources" element={<Resources />} />

                {/* Personal Case & Device Data */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/history" element={<History />} />
                <Route path="/evidence" element={<Evidence />} />
                <Route path="/report" element={<Report />} />

                {/* Informational Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <QuickCheckMenu />
            <CookieBanner />
            <Toast />
          </div>
        </BrowserRouter>
      </AppProvider>
    </GlobalErrorBoundary>
  );
}
