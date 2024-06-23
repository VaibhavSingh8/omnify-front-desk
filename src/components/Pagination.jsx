import React from "react";

function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  totalResults,
}) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-2 py-1 rounded-md ${
          currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-sm text-gray-600">
        Displaying{" "}
        <input
          type="number"
          value={itemsPerPage}
          min={10}
          max={30}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded-md w-16 text-center mx-1"
        />{" "}
        out of {totalResults} results
      </div>
      <div className="flex items-center space-x-2">
        <button
          className={`text-sm text-gray-700 px-2 py-1 rounded-md ${
            currentPage === 1 ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage == 1}
        >
          &lt; Previous
        </button>
        {pages.map((page) => page)}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`text-sm text-gray-700 px-2 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200"
              : "bg-blue-500 text-white"
          }`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
