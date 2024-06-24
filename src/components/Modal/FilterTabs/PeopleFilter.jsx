import React, { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { useTableContext } from "@/contexts/TableContext";

function PeopleFilter() {
  const { tableData, updatePendingFilter, pendingFilters } = useTableContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingNames, setMatchingNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState(
    pendingFilters.people || []
  );

  useEffect(() => {
    if (searchTerm.length >= 1) {
      const filtered = tableData
        .filter((item) =>
          item.payer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          // Sort selected names to the top
          if (
            selectedNames.includes(a.payer) &&
            !selectedNames.includes(b.payer)
          )
            return -1;
          if (
            !selectedNames.includes(a.payer) &&
            selectedNames.includes(b.payer)
          )
            return 1;
          return a.payer.localeCompare(b.payer);
        })
        .slice(0, 10);
      setMatchingNames(filtered);
    } else {
      setMatchingNames([]);
    }
  }, [searchTerm, tableData, selectedNames]);

  useEffect(() => {
    updatePendingFilter("people", selectedNames);
  }, [selectedNames, updatePendingFilter]);

  const handleCheckboxChange = (payer) => {
    setSelectedNames((prev) =>
      prev.includes(payer)
        ? prev.filter((name) => name !== payer)
        : [...prev, payer]
    );
  };

  return (
    <div className="relative mt-5">
      <input
        className="border border-gray-200 shadow-sm pl-10 pr-4 py-2 rounded-md w-full"
        placeholder="Search Payer or attendee name"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {/* Display selected names */}
      {/* <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {selectedNames.map((name, index) => (
            <div
              key={index}
              className="bg-gray-100 px-2 py-1 rounded-md flex items-center"
            >
              <span>{name}</span>
              <button
                onClick={() => handleCheckboxChange(name)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div> */}
      {matchingNames.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {matchingNames.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 flex items-center"
            >
              <input
                type="checkbox"
                checked={selectedNames.includes(item.payer)}
                onChange={() => handleCheckboxChange(item.payer)}
                className="mr-2"
              />
              <span className="font-medium">{item.payer}</span>
              <span className="ml-2 text-sm text-gray-500">{item.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PeopleFilter;
