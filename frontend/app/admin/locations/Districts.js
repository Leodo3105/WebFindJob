'use client';

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDistricts } from "@/features/location/districtsSlice";
import { fetchCities } from "@/features/location/citiesSlice";

const Districts = () => {
  const dispatch = useDispatch();
  const { districts, loading: districtsLoading, error: districtsError } = useSelector((state) => state.districts);
  const { cities, loading: citiesLoading, error: citiesError } = useSelector((state) => state.cities);

  const [selectedCity, setSelectedCity] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchDistricts());
  }, [dispatch]);

  // Filter districts based on selected city
  const filteredDistricts = selectedCity
    ? districts.filter((district) => district.cityId === parseInt(selectedCity))
    : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Districts</h2>

      {/* Loading and Error States */}
      {(districtsLoading || citiesLoading) && <p>Loading...</p>}
      {(districtsError || citiesError) && (
        <p className="text-red-500">Error: {districtsError || citiesError}</p>
      )}

      {/* City Selector */}
      <div className="mb-4">
        <label htmlFor="citySelector" className="block text-sm font-medium mb-1">
          Select City:
        </label>
        <select
          id="citySelector"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="">All Cities</option>
          {Array.isArray(cities) &&
            cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
        </select>
      </div>

      {/* District List */}
      <ul className="border-t pt-2">
        {filteredDistricts.length > 0 ? (
          filteredDistricts.map((district) => (
            <li key={district.id} className="border-b pb-2">
              {district.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">
            {selectedCity
              ? "No districts available for the selected city"
              : "Please select a city to view districts"}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Districts;
