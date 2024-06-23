import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ScheduledDateFilter() {
  const [selectedRange, setSelectedRange] = useState("All");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleRangeChange = (e) => {
    const value = e.target.value;
    setSelectedRange(value);

    const today = new Date();
    switch (value) {
      case "Last 30 days":
        setStartDate(new Date(today.setDate(today.getDate() - 30)));
        setEndDate(new Date());
        break;
      case "This month":
        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        break;
      case "Last month":
        setStartDate(new Date(today.getFullYear(), today.getMonth() - 1, 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth(), 0));
        break;
      case "This quarter":
        const quarterStartMonth = Math.floor(today.getMonth() / 3) * 3;
        setStartDate(new Date(today.getFullYear(), quarterStartMonth, 1));
        setEndDate(new Date(today.getFullYear(), quarterStartMonth + 3, 0));
        break;
      case "2 quarters ago":
        const twoQuartersAgoStartMonth =
          Math.floor(today.getMonth() / 3) * 3 - 6;
        setStartDate(
          new Date(today.getFullYear(), twoQuartersAgoStartMonth, 1)
        );
        setEndDate(
          new Date(today.getFullYear(), twoQuartersAgoStartMonth + 3, 0)
        );
        break;
      case "Custom":
      case "All time":
      default:
        setStartDate(null);
        setEndDate(null);
    }
  };

  return (
    <div>
      <div className="relative mt-4">
        <label className="block mb-2">Show orders for:</label>
        <select
          className="border border-gray-300 rounded p-2 w-full shadow-sm"
          value={selectedRange}
          onChange={handleRangeChange}
        >
          <option>All time</option>
          <option>Custom</option>
          <option>Last 30 days</option>
          <option>This month</option>
          <option>Last month</option>
          <option>This quarter</option>
          <option>2 quarters ago</option>
        </select>
      </div>
      {selectedRange === "Custom" && (
        <div>
          <div className="mt-4 flex gap-4">
            <div>
              <label className="block mb-2">From</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="border border-gray-300 rounded p-2"
                placeholderText="Pick a date"
              />
            </div>
            <div>
              <label className="block mb-2">To</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="border border-gray-300 rounded p-2"
                placeholderText="Pick a date"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduledDateFilter;
