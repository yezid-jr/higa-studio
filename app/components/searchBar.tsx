"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function SearchBar() {

  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Buscando:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 rounded-full px-4 py-2">
      <Search className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
      <input
        type="text"
        placeholder={isFocused ? "" : "Search products..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-transparent outline-none w-full text-sm text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500"
      />
    </div>
  );
}