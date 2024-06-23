"use client";

import React, { useState } from "react";
import tableData from "../data/table_data.json";
import { LuCalendar, LuCircleDot, LuUser } from "react-icons/lu";
import { format } from "date-fns";

function Table() {
  const [selected, setSelected] = useState([]);

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

  return (
    <div className="overflow-x-auto m-4 rounded-md max-h-screen">
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
          {tableData.map((item) => (
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
              <td className="px-4 py-3 border-b">{item.payer}</td>
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
  );
}

export default Table;
