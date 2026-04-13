"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function SwitchTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita hydration mismatch — no renderiza hasta que el cliente sabe el tema
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-16 h-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="
        relative flex items-center
        w-16 h-8 px-1
        rounded-full border border-neutral-200 dark:border-neutral-700
        bg-neutral-100 dark:bg-neutral-800
        transition-colors duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD1E1E]
        cursor-pointer
      "
    >
      {/* Track con íconos */}
      <span className="absolute left-2 flex items-center justify-center w-4 h-4 transition-opacity duration-300">
        <Sun
          className={`w-3.5 h-3.5 text-amber-500 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}
        />
      </span>
      <span className="absolute right-2 flex items-center justify-center w-4 h-4">
        <Moon
          className={`w-3.5 h-3.5 text-neutral-400 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}
        />
      </span>

      {/* Thumb deslizante */}
      <span
        className={`
          relative z-10 w-6 h-6 rounded-full
          bg-white dark:bg-neutral-950
          border border-neutral-200 dark:border-neutral-600
          shadow-sm
          transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      />
    </button>
  );
}