"use client";

import { Drawer } from "vaul";
import { useState } from "react";
import filters from "../../data/filters.json";
import FilterChip from "./Chip";
import { useFilters } from "../../hooks/FiltersProvider";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FilterSheet({ open, onClose }: Props) {
  const { selectedFilters, toggleFilter, clearFilters } = useFilters();
  const [snap, setSnap] = useState<number | string | null>(0.7);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setSnap(0.7); // resetea el snap al cerrar
          onClose();
        }
      }}
      snapPoints={[0.5, 0.7, 0.95]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      noBodyStyles
      dismissible={snap !== 0.95}
    >
      <Drawer.Portal>

        {/* El overlay siempre cierra al hacer click, independiente del snap */}
        <Drawer.Overlay
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          onClick={() => {
            setSnap(0.7);
            onClose();
          }}
        />

        <Drawer.Content
          className="
            fixed bottom-0 left-0 right-0
            bg-white dark:bg-neutral-900
            rounded-t-3xl shadow-xl
            flex flex-col
            outline-none z-[60]
          "
          style={{ height: "95dvh" }}
        >
          {/* Handle + Título — fijos arriba */}
          <div className="shrink-0 px-4">
            <div className="mx-auto mt-3 mb-1 h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-600" />
            <Drawer.Title className="text-lg font-semibold mt-3 mb-4 text-neutral-900 dark:text-neutral-100">
              Filters
            </Drawer.Title>
          </div>

          {/* Filtros + Botones — todo scrolleable */}
          <div
            className="flex-1 overflow-y-auto px-4 pb-6"
            onPointerDownCapture={(e) => {
              if (snap === 0.95) {
                e.stopPropagation();
              }
            }}
          >
            <div className="flex flex-col gap-6">
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

            {/* Botones al final del scroll */}
            <div className="mt-6 pb-10">
              <button
                onClick={onClose}
                className="
                  w-full py-3 rounded-xl font-medium
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
            </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}