"use client";

import { Drawer } from "hiraki";
import filters from "../../data/filters.json";
import FilterChip from "./Chip";
import { useFilters } from "../../hooks/FiltersProvider";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FilterSheet({ open, onClose }: Props) {
  const { selectedFilters, toggleFilter, clearFilters } = useFilters();

  return (
    <Drawer.Root
      open={open}
      onOpenChange={onClose}
      snapPoints={["50%", "70%", "95%"]}
    >
      <Drawer.Portal>

        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        <Drawer.Content
          className="
            fixed bottom-0 left-0 right-0
            bg-white dark:bg-neutral-900
            rounded-t-3xl
            p-4
            shadow-xl
          "
        >
          <Drawer.Handle />

          <Drawer.Title
            className="
              text-lg font-semibold mb-6 mt-4
              text-neutral-900 dark:text-neutral-100
            "
          >
            Filters
          </Drawer.Title>

          <div className="flex flex-col gap-6 mb-6">
            {filters.map((group) => (
              <div key={group.id}>

                <h3 className="font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.options.map((option) => {
                    const isSelected = selectedFilters[group.id]?.includes(option.id);
                    return (
                      <FilterChip
                        key={option.id}
                        label={option.label}
                        selected={isSelected}
                        onClick={() => toggleFilter(group.id, option.id)}
                      />
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="
              w-full py-3 rounded-xl font-medium mt-6
              bg-[#CD1E1E] text-white
              hover:bg-[#b01919] transition-colors
            "
          >
            Apply Filters
          </button>

          <button
            onClick={() => { clearFilters(); onClose(); }}
            className="
              w-full py-3 rounded-xl font-medium mt-3
              bg-neutral-200 dark:bg-neutral-800
              text-neutral-700 dark:text-neutral-300
              hover:bg-neutral-300 dark:hover:bg-neutral-700
              transition-colors
            "
          >
            Remove Filters
          </button>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}