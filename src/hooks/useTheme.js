import { useApp } from "../context/AppContext.jsx";

export function useTheme() {
  const { theme, setTheme } = useApp();
  return {
    theme,
    setTheme,
    isDark: theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  };
}
