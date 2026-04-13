"use client";

import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

import FilterSheet from "./FilterSheet";
import { useFilters } from "../../hooks/FiltersProvider";
import filters from "../../data/filters.json";
import FilterChip from "./Chip";

export default function CategoryChips() {

  const categoryGroup = filters.find(
    (group) => group.id === "category"
  );

  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [showLeftGradient, setShowLeftGradient] = useState(true);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { selectedFilters, toggleFilter, clearFilters, totalSelected } = useFilters();

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const tolerance = 2;

    const isAtStart = scrollLeft <= tolerance;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - tolerance;

    setShowLeftGradient(!isAtStart);
    setShowRightGradient(!isAtEnd);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (

    <div className="relative flex gap-2">

      {/* LEFT GRADIENT */}
      <div
        className={`
          absolute left-0 h-full w-12 
          bg-gradient-to-r 
          from-white dark:from-neutral-950
          to-transparent 
          pointer-events-none 
          z-10
          transition-opacity duration-200
          ${showLeftGradient ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex gap-2
          overflow-x-auto
          no-scrollbar
          scroll-smooth
          pr-22
        "
      >
        <FilterChip
          label="All"
          selected={
            !selectedFilters.category ||
            selectedFilters.category.length === 0
          }
          variant="outline"
          onClick={() => clearFilters()}
        />

        {categoryGroup?.options.map((cat, index) => {
          const isSelected = selectedFilters.category?.includes(cat.id);

          return (
            <FilterChip
              key={cat.id}
              label={cat.label}
              selected={isSelected}
              variant="outline"
              onClick={() => {
                toggleFilter("category", cat.id);
                chipRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
            />
          );
        })}

      </div>

      {/* FILTER BUTTON */}
      <div className="absolute right-0 flex items-center">

        <button
          onClick={() => setIsFilterOpen(true)}
          className="
            px-3 py-0.5
            rounded-full
            bg-neutral-200 dark:bg-neutral-800
            text-neutral-400 dark:text-neutral-400
            hover:bg-neutral-300 dark:hover:bg-neutral-700
            hover:text-neutral-700 dark:hover:text-neutral-200
            text-sm
            z-20
            border-2
            border-transparent
          "
        >
          Filter
          <SlidersHorizontal className="w-4 h-4 inline-block ml-1" />
        </button>

        {/* RIGHT GRADIENT */}
        <div
          className={`
            absolute right-0 h-full w-46 
            bg-gradient-to-l 
            from-white dark:from-neutral-950
            to-transparent 
            pointer-events-none 
            z-10
            transition-opacity duration-200
            ${showRightGradient ? "opacity-100" : "opacity-0"}
          `}
        />

      </div>

      {/* FILTER SHEET */}
      <FilterSheet
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

    </div>
  );
}