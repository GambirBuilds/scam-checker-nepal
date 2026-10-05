/**
 * Robust Input Validation for Scam Checker Nepal.
 * Prevents invalid submissions, excessive lengths, unsafe input formats, and oversized files.
 */

export function validateTextInput(text, minLength = 3, maxLength = 8000) {
  if (!text || !text.trim()) {
    return { isValid: false, error: "Please enter or paste suspicious content to evaluate." };
  }
  const clean = text.trim();
  if (clean.length < minLength) {
    return { isValid: false, error: `Content is too short (minimum ${minLength} characters required for analysis).` };
  }
  if (clean.length > maxLength) {
    return { isValid: false, error: `Input exceeds maximum allowed length of ${maxLength} characters.` };
  }
  return { isValid: true, error: null };
}

export function validateUrlInput(url) {
  if (!url || !url.trim()) {
    return { isValid: false, error: "Please provide a website URL." };
  }
  const clean = url.trim();
  if (clean.length > 2000) {
    return { isValid: false, error: "URL exceeds maximum length." };
  }
  let normalized = clean;
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = "https://" + normalized;
  }
  try {
    const parsed = new URL(normalized);
    if (!parsed.hostname || !parsed.hostname.includes(".")) {
      return { isValid: false, error: "Please enter a valid domain address (e.g. example.com)." };
    }
    return { isValid: true, error: null };
  } catch {
    return { isValid: false, error: "Invalid URL structure." };
  }
}

export function validateImageFile(file, maxMb = 5) {
  if (!file) {
    return { isValid: false, error: "No file was selected." };
  }
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  if (!allowedTypes.includes(file.type.toLowerCase())) {
    return { isValid: false, error: "Supported image formats are PNG, JPG, JPEG, and WEBP only." };
  }
  const maxBytes = maxMb * 1024 * 1024;
  if (file.size > maxBytes) {
    return { isValid: false, error: `Image file size exceeds the ${maxMb}MB limit.` };
  }
  return { isValid: true, error: null };
}

export function validateEmailInput(email) {
  if (!email || !email.trim()) {
    return { isValid: false, error: "Email address is required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: "Please enter a valid email format." };
  }
  return { isValid: true, error: null };
}
