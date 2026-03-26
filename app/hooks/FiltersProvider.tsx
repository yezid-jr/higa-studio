"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import { SelectedFilters } from "../types/filters";

interface FiltersContextType {

  selectedFilters: SelectedFilters;

  toggleFilter: (
    groupId: string,
    optionId: string
  ) => void;

  clearFilters: () => void;

  totalSelected: number;

}

const FiltersContext =
  createContext<
    FiltersContextType | undefined
  >(undefined);

export function FiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    selectedFilters,
    setSelectedFilters,
  ] = useState<SelectedFilters>({});

  const toggleFilter = (
    groupId: string,
    optionId: string
  ) => {

    setSelectedFilters((prev) => {

      const group =
        prev[groupId] || [];

      const exists =
        group.includes(optionId);

      const updatedGroup = exists
        ? group.filter(
            (id) => id !== optionId
          )
        : [...group, optionId];

      return {
        ...prev,
        [groupId]: updatedGroup,
      };

    });

  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const totalSelected =
    Object.values(
      selectedFilters
    ).flat().length;

  return (

    <FiltersContext.Provider
      value={{
        selectedFilters,
        toggleFilter,
        clearFilters,
        totalSelected,
      }}
    >

      {children}

    </FiltersContext.Provider>

  );

}

// Hook global

export function useFilters() {

  const context =
    useContext(FiltersContext);

  if (!context) {

    throw new Error(
      "useFilters must be used inside FiltersProvider"
    );

  }

  return context;

}