import React from "react";

function Pagination({ currentPage, totalPages, onPageChange, totalResults }) {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-sm text-gray-600">
        Displaying{" "}
        <input
          type="number"
          value={currentPage}
          min={1}
          max={totalPages}
          onChange={(e) => onPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded-md w-16 text-center mx-1"
        />{" "}
        out of {totalResults} results
      </div>
      <div className="flex items-center space-x-2"></div>
    </div>
  );
}

export default Pagination;
