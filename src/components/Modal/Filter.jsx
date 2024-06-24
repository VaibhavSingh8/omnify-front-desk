import { useState } from "react";
import ModalNav from "./ModalNav";
import ScheduledDateFilter from "./FilterTabs/ScheduledDateFilter";
import PeopleFilter from "./FilterTabs/PeopleFilter";
import ServicesFilter from "./FilterTabs/ServicesFilter";
import { useTableContext } from "@/contexts/TableContext";
useTableContext;

const Filter = () => {
  const { applyFilters, updatePendingFilter } = useTableContext();
  const [selectedTab, setSelectedTab] = useState("Scheduled Date");

  const renderContent = () => {
    switch (selectedTab) {
      case "Scheduled Date":
        return <ScheduledDateFilter />;
      case "People":
        return <PeopleFilter />;
      case "Services / Products":
        return <ServicesFilter />;
      default:
        return null;
    }
  };

  const handleApply = () => {
    applyFilters();
  };

  const handleReset = () => {
    updatePendingFilter("people", []);
    updatePendingFilter("scheduledDate", null);
    updatePendingFilter("services", []);

    applyFilters();
  };

  return (
    <>
      <div className="flex h-full rounded-md">
        <ModalNav onSelect={setSelectedTab} />
        <div className="w-3/4 p-4 border overflow-auto">{renderContent()}</div>
      </div>
      <div className="bg-white border flex justify-end gap-4 p-4 rounded-b-md">
        <button className="border py-1 px-3 rounded-md" onClick={handleReset}>
          Reset to Default
        </button>
        <button
          className="py-1 px-3 rounded-md bg-black text-white"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default Filter;
