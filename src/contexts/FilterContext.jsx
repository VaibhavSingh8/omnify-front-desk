import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedTab, setSelectedTab] = useState("Scheduled Date");

  return (
    <FilterContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
