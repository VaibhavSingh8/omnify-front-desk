import React, { createContext, useState, useContext } from "react";
import tableData from "../data/table_data.json";

const TableContext = createContext();

export function TableProvider({ children }) {
  const [filteredData, setFilteredData] = useState(tableData);
  const [pendingFilters, setPendingFilters] = useState({});

  const applyFilters = () => {
    let newFilteredData = tableData;
    if (pendingFilters.people) {
      newFilteredData = newFilteredData.filter((item) =>
        pendingFilters.people.includes(item.payer)
      );
    }

    setFilteredData(newFilteredData);
  };

  const updatePendingFilter = (filterName, filterValue) => {
    setPendingFilters((prev) => ({ ...prev, [filterName]: filterValue }));
  };

  return (
    <TableContext.Provider
      value={{
        filteredData,
        tableData,
        applyFilters,
        updatePendingFilter,
        pendingFilters,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export function useTableContext() {
  return useContext(TableContext);
}
