import { useEffect } from "react";

export function SEOHead({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Scam Checker Nepal`;
    }
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
    }
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
}
