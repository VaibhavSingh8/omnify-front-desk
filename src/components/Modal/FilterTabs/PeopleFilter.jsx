import React from "react";
import { LuSearch } from "react-icons/lu";

function PeopleFilter() {
  return (
    <div className="relative m-2">
      <input
        className="border border-gray-200 shadow-sm pl-10 pr-4 py-2 rounded-md w-full"
        placeholder="Search Payer or attendee name"
        aria-label="Search"
      />
      <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default PeopleFilter;
