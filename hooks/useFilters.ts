import { useState } from "react";

type Filters = {
  brand: string;
  model: string;
  page: number;
};

type FiltersParams = {
  brand?: string;
  model?: string;
  page?: number;
};

type Hook = () => {
  filters: Filters;
  setFilters: (filters: FiltersParams) => void;
  clearFilters: () => void;
};

const initialState = {
  brand: "",
  model: "",
  page: 1,
};

const useFilters: Hook = () => {
  const [filters, setFilters] = useState<Filters>(initialState);

  const handleSetFilters = (newFilters: FiltersParams) =>
    setFilters((oldFilters) => ({ ...oldFilters, ...newFilters }));

  const clearFilters = () => setFilters(initialState);

  return { filters, setFilters: handleSetFilters, clearFilters };
};

export default useFilters;
