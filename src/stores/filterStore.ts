import { create } from "zustand";
import type { FilterState } from "../types";

interface FilterStore {
  filters: FilterState;

  // Actions
  setDateRange: (start: string, end: string) => void;
  clearDateRange: () => void;
  setType: (type: "all" | "income" | "expense") => void;
  setCategory: (category: string | null) => void;
  setMinimum: (minimum: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

const DEFAULT_FILTERS: FilterState = {
  dateRange: null,
  type: "all",
  category: null,
  minimum: "",
  searchQuery: "",
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: DEFAULT_FILTERS,

  setDateRange: (start, end) => {
    set((state) => ({
      filters: {
        ...state.filters,
        dateRange: { start, end },
      },
    }));
  },

  clearDateRange: () => {
    set((state) => ({
      filters: {
        ...state.filters,
        dateRange: null,
      },
    }));
  },

  setType: (type) => {
    set((state) => ({
      filters: {
        ...state.filters,
        type,
      },
    }));
  },

  setCategory: (category) => {
    set((state) => ({
      filters: {
        ...state.filters,
        category,
      },
    }));
  },

  setMinimum: (minimum) => {
    set((state) => ({
      filters: {
        ...state.filters,
        minimum,
      },
    }));
  },

  setSearchQuery: (query) => {
    set((state) => ({
      filters: {
        ...state.filters,
        searchQuery: query,
      },
    }));
  },

  resetFilters: () => {
    set({ filters: DEFAULT_FILTERS });
  },
}));
