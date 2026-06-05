"use client";

import images from "../data/my-tattoos.json";
import { useFilters } from "./FiltersProvider";

export function useFilteredImages() {

  const { selectedFilters } =
    useFilters();

  const filteredImages =
    images.filter((img) => {

      return Object.entries(
        selectedFilters
      ).every(
        ([groupId, selectedOptions]) => {

          // Si no hay filtros activos
          if (
            !selectedOptions ||
            selectedOptions.length === 0
          )
            return true;

          const value =
            img[groupId as keyof typeof img];

          if (!value) return true;

          // Si es array
          if (Array.isArray(value)) {

            return value.some((v) =>
              selectedOptions.includes(v)
            );

          }

          // Si es string
          return selectedOptions.includes(
            value as string
          );

        }
      );

    });

  // Ordenar por `id` descendente para mostrar primero las imágenes más nuevas
  const sortedImages = filteredImages.sort((a, b) => {
    const idA = typeof a.id === "number" ? a.id : 0;
    const idB = typeof b.id === "number" ? b.id : 0;
    return idB - idA;
  });

  return sortedImages;

}