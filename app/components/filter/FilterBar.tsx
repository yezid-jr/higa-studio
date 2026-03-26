"use client";

import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

import FilterSheet from "./FilterSheet";
import { useFilters } from "../../hooks/FiltersProvider";
import { mockFilters } from "../../data/mockfilters";
import FilterChip from "./Chip";

export default function CategoryChips() {

  // Obtener grupo category del mock
  const categoryGroup = mockFilters.find(
    (group) => group.id === "category"
  );

  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [showLeftGradient, setShowLeftGradient] =
    useState(true);

  const [showRightGradient, setShowRightGradient] =
    useState(false);

  const [isFilterOpen, setIsFilterOpen] =
    useState(false);

  // Estado global
  const { selectedFilters, toggleFilter, clearFilters, totalSelected } =
    useFilters();

  // Scroll detection
  const handleScroll = () => {

    if (!scrollRef.current) return;

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = scrollRef.current;

    const tolerance = 2;

    const isAtStart =
      scrollLeft <= tolerance;

    const isAtEnd =
      scrollLeft + clientWidth >=
      scrollWidth - tolerance;

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
          bg-linear-to-r 
          from-white 
          to-transparent 
          pointer-events-none 
          z-10
          transition-opacity duration-200
          ${showLeftGradient
            ? "opacity-100"
            : "opacity-0"
          }
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

        {categoryGroup?.options.map(
          (cat, index) => {

            const isSelected =
              selectedFilters.category?.includes(
                cat.id
              );

            return (

              <FilterChip
                key={cat.id}

                label={cat.label}

                selected={isSelected}

                variant="outline"

                onClick={() => {

                  toggleFilter(
                    "category",
                    cat.id
                  );

                  chipRefs.current[
                    index
                  ]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });

                }}
              />

            );

          }
        )}

      </div>

      {/* FILTER BUTTON */}

      <div className="absolute right-0 flex items-center">

        <button
          onClick={() =>
            setIsFilterOpen(true)
          }

          className="
            px-3 py-0.5
            rounded-full
            bg-gray-200 
            text-gray-400
            hover:bg-gray-300 
            hover:text-gray-700
            text-sm
            z-20
            border-2
            border-transparent
          "
        >

          Filter

          <SlidersHorizontal
            className="
              w-4 h-4
              inline-block
              ml-1
            "
          />

        </button>

        {/* RIGHT GRADIENT */}

        <div
          className={`
            absolute right-0 h-full w-46 
            bg-linear-to-l 
            from-white
            to-transparent 
            pointer-events-none 
            z-10
            transition-opacity duration-200
            ${showRightGradient
              ? "opacity-100"
              : "opacity-0"
            }
          `}
        />

      </div>

      {/* FILTER SHEET */}

      <FilterSheet
        open={isFilterOpen}
        onClose={() =>
          setIsFilterOpen(false)
        }
      />

    </div>

  );

}