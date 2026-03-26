import { FilterGroup } from "../types/filters";

/**
 * Esto simula lo que mandaría tu backend
 */
export const mockFilters: FilterGroup[] = [
  {
    id: "category",
    title: "By Category",
    options: [
      { id: "red", label: "Red" },
      { id: "blackwork", label: "Blackwork" },
      { id: "japan", label: "Japan" },
      { id: "geometric", label: "Geometric" },
      { id: "watercolor", label: "Watercolor" },
      { id: "portrait", label: "Portrait" },
      { id: "traditional", label: "Traditional" },
      { id: "minimalist", label: "Minimalist" },
      { id: "tribal", label: "Tribal" },
    ],
  },

  {
    id: "size",
    title: "By Size",
    options: [
      { id: "small", label: "Small" },
      { id: "medium", label: "Medium" },
      { id: "large", label: "Large" },
    ],
  },

  {
    id: "topic",
    title: "By Topic",
    options: [
      { id: "animals", label: "Animals" },
      { id: "nature", label: "Nature" },
      { id: "skull", label: "Skull" },
      { id: "flowers", label: "Flowers" },
    ],
  },
];