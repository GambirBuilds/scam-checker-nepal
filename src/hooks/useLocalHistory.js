import { useApp } from "../context/AppContext.jsx";

export function useLocalHistory() {
  const { history, saveCurrentResult, deleteHistoryItem, clearHistory } = useApp();
  return {
    history,
    saveHistory: saveCurrentResult,
    deleteItem: deleteHistoryItem,
    clearAll: clearHistory
  };
}
