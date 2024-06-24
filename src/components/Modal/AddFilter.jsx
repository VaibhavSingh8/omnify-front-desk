import React from "react";
import Modal from "./Modal";
import Filter from "./Filter";
import { LuFilter } from "react-icons/lu";
import { FilterProvider } from "@/contexts/FilterContext";

function AddFilter() {
  return (
    <Modal>
      <Modal.Open opens="filter">
        <button className="flex bg-gray-100 gap-4 m-2 ml-3 items-center px-4 py-2 justify-center rounded-lg">
          <LuFilter size={15} /> <span>Add Filter</span>
        </button>
      </Modal.Open>
      <Modal.Window name="filter">
        <FilterProvider>
          <Filter />
        </FilterProvider>
      </Modal.Window>
    </Modal>
  );
}

export default AddFilter;
