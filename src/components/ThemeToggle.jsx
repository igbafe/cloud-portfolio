import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

function readTheme() {
  try {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // Continue with the theme selected by the document bootstrap.
  }
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#090b10" : "#f5f8f9");
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works for this visit if storage is unavailable.
    }
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-checked={theme === "light"}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
      <span className="theme-toggle-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
      <span className="switch-track" aria-hidden="true"><i /></span>
    </button>
  );
}
