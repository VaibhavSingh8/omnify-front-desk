"use client";

import React, { useState } from "react";
import tableData from "../data/table_data.json";
import Pagination from "./Pagination";
import { LuCalendar, LuCircleDot, LuUser } from "react-icons/lu";
import { format } from "date-fns";

function Table() {
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSelect = (e, id) => {
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((item) => item !== id));
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(tableData.map((item) => item.id));
    } else {
      setSelected([]);
    }
  };

  const statusClasses = {
    Lead: "bg-blue-100 text-blue-800",
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "eee, dd MMM yyyy h:mm a");
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const currentItems = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleItemsPerPageChange = (inputItemsPerPage) => {
    if (inputItemsPerPage >= 10 && inputItemsPerPage <= 30) {
      setItemsPerPage(inputItemsPerPage);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-x-auto m-4 rounded-md flex-grow">
        <table className="min-w-full bg-white border border-gray-200 overflow-y-auto">
          <thead>
            <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="px-4 py-3 border-b">
                <input
                  type="checkbox"
                  checked={selected.length === tableData.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-3 border-b">
                <div className="flex items-center whitespace-nowrap">
                  <LuCalendar className="mr-2" /> Created On
                </div>
              </th>
              <th className="px-4 py-3 border-b">
                <div className="flex items-center whitespace-nowrap">
                  <LuUser className="mr-2" /> Payer
                </div>
              </th>
              <th className="px-4 py-3 border-b">
                <div className="flex items-center whitespace-nowrap">
                  <LuCircleDot className="mr-2" /> Status
                </div>
              </th>
              <th className="px-4 py-3 border-b"># Email</th>
              <th className="px-4 py-3 border-b"># Payer Phone</th>
              <th className="px-4 py-3 border-b"># Services</th>
              <th className="px-4 py-3 border-b">
                <div className="flex items-center whitespace-nowrap">
                  <LuCalendar className="mr-2" /> Scheduled
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={(event) => handleSelect(event, item.id)}
                  />
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {formatDate(item.createdOn)}
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {item.payer}
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusClasses[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {item.email}
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {item.phone}
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {item.services}
                </td>
                <td className="px-4 py-3 border-b whitespace-nowrap">
                  {formatDate(item.scheduled)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        onPageChange={handlePageChange}
        totalResults={tableData.length}
      />
    </div>
  );
}

export default Table;
