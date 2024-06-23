"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  LuArrowLeftRight,
  LuCalendar,
  LuCheckSquare,
  LuColumns,
  LuHourglass,
  LuInbox,
} from "react-icons/lu";

function Sidebar({ className }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("Orders");

  useEffect(() => {
    // Collapse the sidebar by default on smaller screens
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const sidebarItems = [
    { name: "Orders", icon: <LuInbox size={20} /> },
    { name: "Subscriptions", icon: <LuCheckSquare size={20} /> },
    { name: "Calendar", icon: <LuCalendar size={20} /> },
    { name: "Waitlist", icon: <LuHourglass size={20} /> },
  ];
  return (
    <aside
      className={`${className} transition-all duration-500 ease-in-out p-4 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div
        className="flex justify-between items-center transition-all duration-200 ease-in-out"
        onClick={toggleSidebar}
      >
        <div className="flex">
          <Image
            src="/logo.svg"
            height={32}
            width={32}
            alt="logo"
            style={{ marginLeft: "8px" }}
          />
          {isExpanded && (
            <h2 className="text-2xl font-medium p-2">Front-Desk</h2>
          )}
        </div>

        {isExpanded && <LuColumns size={20} />}
      </div>

      <nav>
        <ul>
          <li
            className="flex items-center justify-between p-2 my-4 mx-1 gap-2 rounded-lg cursor-pointer
                transition-all duration-200 ease-in-out bg-white shadow-md transform scale-105 hover:bg-gray-200"
          >
            {isExpanded && <span className="ml-2">Location Name</span>}
            <LuArrowLeftRight />
          </li>
          {sidebarItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center p-2 my-2 mx-1 gap-2 rounded-lg cursor-pointer
                transition-all duration-200 ease-in-out ${
                  activeItem === item.name
                    ? "bg-white shadow-md transform scale-105"
                    : "hover:bg-gray-200"
                }`}
              onClick={() => handleItemClick(item.name)}
            >
              {item.icon}
              {isExpanded && <span className="ml-2">{item.name}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
