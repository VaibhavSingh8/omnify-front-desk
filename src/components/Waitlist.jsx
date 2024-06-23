"use client";
import React, { useState } from "react";
import Table from "./Table";
import { LuColumns, LuDownload, LuRefreshCcw, LuSearch } from "react-icons/lu";
import AddFilter from "./Modal/AddFilter";

function Waitlist() {
  return (
    <section className="flex flex-col h-full">
      <h2 className="text-2xl font-medium p-4">Waitlist</h2>
      <div className="grid grid-cols-12 gap-4 m-2 ml-3">
        <div className="border border-gray-700 col-span-3 rounded-md p-3 text-left items-center font-semibold text-sm">
          All Waitlists
        </div>
        <div className="border border-gray-200 col-span-3 rounded-md p-3 text-left items-center font-semibold text-sm">
          Newly Added
        </div>
        <div className="border border-gray-200 col-span-3 rounded-md p-3 text-left items-center font-semibold text-sm">
          Leads
        </div>
      </div>
      <div className="flex justify-between my-5">
        <AddFilter />
        <div className="flex mx-6 items-center gap-4">
          <div className="relative m-2">
            <input
              className="border border-gray-200 shadow-md pl-10 pr-4 py-2 rounded-md w-full"
              placeholder="Search client"
              aria-label="Search"
            />
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <span className="p-2">
            <LuRefreshCcw size={20} color="gray" />
          </span>
          <span className="p-2">
            <LuDownload size={20} color="gray" />
          </span>
          <span className="p-2">
            <LuColumns size={20} color="gray" />
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Table />
      </div>
    </section>
  );
}

export default Waitlist;
