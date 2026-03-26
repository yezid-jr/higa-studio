"use client";

import { Drawer } from "hiraki";
import { mockFilters } from "../../data/mockfilters";
import FilterChip from "./Chip";
import { useFilters } from "../../hooks/FiltersProvider";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FilterSheet({
  open,
  onClose,
}: Props) {

  // 🔥 Conectar filtros globales
  const {
    selectedFilters,
    toggleFilter,
    clearFilters,
  } = useFilters();

  return (

    <Drawer.Root
      open={open}
      onOpenChange={onClose}
      snapPoints={["50%", "70%", "95%"]}
    >

      <Drawer.Portal>

        {/* BACKDROP */}

        <Drawer.Overlay
          className="
            fixed inset-0 
            bg-black/40
            backdrop-blur-sm
          "
        />

        {/* SHEET */}

        <Drawer.Content
          className="
            fixed bottom-0 left-0 right-0
            bg-white
            rounded-t-3xl
            p-4
            shadow-xl
          "
        >

          {/* HANDLE */}

          <Drawer.Handle />
          
          {/* TITLE */}

          <Drawer.Title
            className="
              text-lg 
              font-semibold 
              mb-6
              mt-4
            "
          >

            Filters

          </Drawer.Title>

          {/* FILTER GROUPS */}

          <div className="flex flex-col gap-6 mb-6">

            {mockFilters.map((group) => (

              <div key={group.id}>

                <h3 className="font-semibold mb-3">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">

                  {group.options.map((option) => {

                    // Saber si está seleccionado
                    const isSelected =
                      selectedFilters[
                        group.id
                      ]?.includes(
                        option.id
                      );

                    return (

                      <FilterChip
                        key={option.id}

                        label={option.label}

                        selected={isSelected}

                        onClick={() =>
                          toggleFilter(
                            group.id,
                            option.id
                          )
                        }

                      />

                    );

                  })}

                </div>

              </div>

            ))}

          </div>

          {/* APPLY BUTTON */}

          <button
            onClick={onClose}
            className="
              w-full
              bg-[#CD1E1E]
              text-white
              py-3
              rounded-xl
              font-medium
              mt-6
            "
          >

            Apply Filters

          </button>

          {/* REMOVE FILTERS BUTTON */}

          <button
            onClick={() => {

              clearFilters();

              onClose();

            }}

            className="
              w-full
              bg-gray-200
              text-gray-700
              py-3
              rounded-xl
              font-medium
              mt-3
            "
          >

            Remove Filters

          </button>

        </Drawer.Content>

      </Drawer.Portal>

    </Drawer.Root>

  );

}