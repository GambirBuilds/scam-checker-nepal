import React, { useState } from "react";
import { 
  FolderLock, 
  Plus, 
  Trash2, 
  Download, 
  ShieldCheck, 
  AlertCircle, 
  Clock,
  Calendar,
  Hash,
  ArrowDown,
  Sparkles,
  Info
} from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { exportEvidenceDossier } from "../utils/storage.js";
import { SEOHead } from "../components/SEOHead.jsx";
import { generateCaseId } from "../utils/caseId.js";
import { PrivacyWarning } from "../components/PrivacyWarning.jsx";

export function Evidence() {
  const { evidence, addEvidence, deleteEvidence, showToast } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toISOString().slice(0, 10),
    platform: "WhatsApp",
    sender: "",
    url: "",
    caseId: generateCaseId(),
    description: "",
    notes: ""
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSaveIncident = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      setError("Please provide an Event Title and Evidence Description.");
      return;
    }

    addEvidence({
      title: form.title,
      time: form.time || "12:00 PM",
      date: form.date ? new Date(form.date).toISOString() : new Date().toISOString(),
      platform: form.platform,
      sender: form.sender,
      url: form.url,
      caseId: form.caseId || generateCaseId(),
      description: form.description,
      notes: form.notes
    });

    setForm({
      title: "",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString().slice(0, 10),
      platform: "WhatsApp",
      sender: "",
      url: "",
      caseId: generateCaseId(),
      description: "",
      notes: ""
    });
    setShowAddForm(false);
    showToast("Timeline event logged to local device.", "success");
  };

  const handleExport = () => {
    if (evidence.length === 0) {
      showToast("No evidence records to export.", "info");
      return;
    }
    exportEvidenceDossier();
    showToast("Incident dossier downloaded as text file.", "success");
  };

  // Sort evidence by date/time ascending for the chronological timeline
  const sortedEvidence = [...evidence].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Incident Evidence Timeline" 
        description="Organize chronological evidence, timestamps, and notes locally to prepare for formal police or bank reporting in Nepal." 
      />

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <FolderLock className="w-4 h-4" />
          <span>Case Timeline & Dossier Organizer</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Evidence Timeline
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              When reporting fraud to the Nepal Police Cyber Bureau or your bank, an accurate chronological timeline of events is crucial. Organize timestamps and facts locally on your device.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showAddForm ? "Cancel" : "Add Event"}</span>
            </button>
            {evidence.length > 0 && (
              <button
                onClick={handleExport}
                className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Dossier</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <PrivacyWarning />

      {/* Add Event Form */}
      {showAddForm && (
        <div className="p-6 rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/30 dark:bg-sky-950/20 shadow-xs space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-sky-200/60 dark:border-sky-900/60 pb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Log Timeline Event</span>
            </h3>
            <span className="text-[11px] font-mono text-sky-700 dark:text-sky-300 bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded border border-sky-200 dark:border-sky-800">
              {form.caseId}
            </span>
          </div>

          <form onSubmit={handleSaveIncident} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Received suspicious SMS"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Time of Day
                </label>
                <input
                  type="text"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  placeholder="e.g. 10:15 AM"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Platform / Channel
                </label>
                <select
                  name="platform"
                  value={form.platform}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Viber">Viber</option>
                  <option value="Messenger">Facebook Messenger</option>
                  <option value="Telegram">Telegram</option>
                  <option value="SMS">SMS Message</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                  <option value="Instagram / TikTok">Instagram / TikTok</option>
                  <option value="Bank / Wallet">Bank / Wallet App</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Sender Phone / Username
                </label>
                <input
                  type="text"
                  name="sender"
                  value={form.sender}
                  onChange={handleChange}
                  placeholder="e.g. +977-9801XXXXXX"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Case ID Reference
                </label>
                <input
                  type="text"
                  name="caseId"
                  value={form.caseId}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Evidence Description *
              </label>
              <textarea
                rows={2}
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Detail what occurred at this moment: e.g. Sender sent a QR code demanding Rs. 2,500 refund payment."
                className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Personal Notes & Reaction
              </label>
              <input
                type="text"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="e.g. User stopped communication and called bank branch."
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs text-rose-600 p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white cursor-pointer shadow-xs"
              >
                Add Timeline Entry
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Timeline Representation */}
      {sortedEvidence.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
            No chronological timeline events logged yet.
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Click "Add Event" to record how the interaction progressed (e.g., 10:15 AM: Received message → 10:22 AM: Sender requested payment → 10:30 AM: Stopped communication).
          </p>
        </div>
      ) : (
        <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-300 dark:border-sky-800 space-y-6 my-4">
          {sortedEvidence.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white dark:border-slate-950 shadow-xs" />

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
                      {item.time || "12:00 PM"}
                    </span>
                    <span className="text-xs text-slate-400 font-tabular">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {item.platform}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.caseId && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.caseId}
                      </span>
                    )}
                    <button
                      onClick={() => deleteEvidence(item.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors cursor-pointer"
                      title="Delete event"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {item.notes && (
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Reaction / Action: </span>
                    <span>{item.notes}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
