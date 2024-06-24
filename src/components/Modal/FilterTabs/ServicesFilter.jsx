import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

function ServicesFilter() {
  const [selectedOption, setSelectedOption] = useState("Search by name");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update selected radio button
  };
  return (
    <>
      <div className="flex justify-between m-2 p-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Search by name"
            checked={selectedOption === "Search by name"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-black"
          />
          <span className="ml-2">Search by name</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Search by tags"
            checked={selectedOption === "Search by tags"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-black"
          />
          <span className="ml-2">Search by tags</span>
        </label>
      </div>
      {selectedOption === "Search by name" && (
        <div className="relative m-2">
          <input
            className="border border-gray-200 shadow-sm pl-10 pr-4 py-2 rounded-md w-full"
            placeholder="Search service name"
            aria-label="Search"
          />
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      )}
    </>
  );
}

export default ServicesFilter;
