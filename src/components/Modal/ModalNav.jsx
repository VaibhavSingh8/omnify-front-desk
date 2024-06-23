import React, { useState } from "react";

function ModalNav({ onSelect }) {
  const [activeTab, setActiveTab] = useState("Scheduled Date");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelect(tab);
  };
  return (
    <div className="w-2/4 bg-gray-50 h-full p-4">
      <nav>
        <ul>
          <li
            className={`p-2 cursor-pointer whitespace-nowrap rounded-md ${
              activeTab === "Scheduled Date" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabClick("Scheduled Date")}
          >
            Scheduled Date
          </li>
          <li
            className={`p-2 cursor-pointer whitespace-nowrap rounded-md ${
              activeTab === "People" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabClick("People")}
          >
            People
          </li>
          <li
            className={`p-2 cursor-pointer whitespace-nowrap rounded-md ${
              activeTab === "Services / Products" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabClick("Services / Products")}
          >
            Services / Products
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ModalNav;
