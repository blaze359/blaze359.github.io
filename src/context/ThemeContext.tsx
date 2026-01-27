// src/context/ThemeContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  // Optional: keep toggle if you still want manual override later
  // toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // temporary default

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme
    setTheme(mediaQuery.matches ? "dark" : "light");

    // Listener for live OS changes
    const handleChange = (e: MediaQueryListEvent) => {
      console.log("System theme changed to:", e.matches ? "dark" : "light"); // for debugging
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []); // empty deps → only on mount

  // Optional: if you still want a manual toggle button (but it won't persist)
  // const toggleTheme = () => {
  //   setTheme(prev => prev === 'light' ? 'dark' : 'light');
  // };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Optional debug
    console.log("Applied class:", theme);
  }, [theme]); // runs whenever theme state changes

  return (
    <ThemeContext.Provider value={{ theme /*, toggleTheme */ }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
