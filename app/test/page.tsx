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

      // fetch a API
      // fetch(`/api/search?q=${debouncedQuery}`)
    }
  }, [debouncedQuery]);


  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
            type="text"
            placeholder={isFocused ? "" : "Search products..."}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
    </div>
  );
}