'use client';

import React, { useState } from "react";
import Countries from "./Countries";
import Cities from "./Cities";
import Districts from "./Districts";

const Locations = () => {
  const [activeTab, setActiveTab] = useState("countries");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Locations</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`pb-2 ${activeTab === "countries" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("countries")}
        >
          Countries
        </button>
        <button
          className={`pb-2 ${activeTab === "cities" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("cities")}
        >
          Cities
        </button>
        <button
          className={`pb-2 ${activeTab === "districts" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("districts")}
        >
          Districts
        </button>
      </div>

      {/* Nội dung theo tab */}
      <div>
        {activeTab === "countries" && <Countries />}
        {activeTab === "cities" && <Cities />}
        {activeTab === "districts" && <Districts />}
      </div>
    </div>
  );
};

export default Locations;
