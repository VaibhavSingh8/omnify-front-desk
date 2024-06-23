// components/Filter.js

import { useState } from "react";
import ModalNav from "./ModalNav";
import ScheduledDateFilter from "./FilterTabs/ScheduledDateFilter";
import PeopleFilter from "./FilterTabs/PeopleFilter";
import ServicesFilter from "./FilterTabs/ServicesFilter";

const Filter = () => {
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

  return (
    <div className="flex h-full">
      <ModalNav onSelect={setSelectedTab} />
      <div className="w-3/4 p-4">{renderContent()}</div>
    </div>
  );
};

export default Filter;
