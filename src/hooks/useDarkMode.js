import { useEffect, useState } from "react";

const LS_KEY = "pw-theme"; // 'dark' | 'light' | null

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // pomocniczo: ustaw klasę i meta theme-color
  const applyTheme = (dark) => {
    const doc = document.documentElement;
    doc.classList.toggle("dark", dark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#000000" : "#ffffff");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) odczytaj preferencję: lokalna > systemowa
    const stored = localStorage.getItem(LS_KEY);
    const dark = stored ? stored === "dark" : true; // domyślnie dark

    setIsDarkMode(dark);
    applyTheme(dark);
    setHasMounted(true);

    // 2) jeśli użytkownik nie wymusił motywu (brak stored),
    //    reaguj na zmianę preferencji systemowej.
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      if (!localStorage.getItem(LS_KEY)) {
        setIsDarkMode(e.matches);
        applyTheme(e.matches);
      }
    };
    mql.addEventListener?.("change", onSystemChange);

    // 3) synchronizacja między kartami
    const onStorage = (e) => {
      if (e.key !== LS_KEY) return;
      const v = e.newValue; // 'dark' | 'light' | null
      const next = v ? v === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(next);
      applyTheme(next);
    };
    window.addEventListener("storage", onStorage);

    return () => {
      mql.removeEventListener?.("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggleDarkMode = () => {
    if (typeof window === "undefined") return;
    const next = !isDarkMode;
    setIsDarkMode(next);
    applyTheme(next);
    localStorage.setItem(LS_KEY, next ? "dark" : "light");
  };

  return { isDarkMode, toggleDarkMode, hasMounted };
}
