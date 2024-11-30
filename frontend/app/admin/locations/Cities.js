'use client';

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "@/features/location/citiesSlice";
import { fetchCountries } from "@/features/location/countriesSlice";

const Cities = () => {
  const dispatch = useDispatch();
  const { cities, loading: citiesLoading, error: citiesError } = useSelector((state) => state.cities);
  const { countries, loading: countriesLoading, error: countriesError } = useSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCities());
  }, [dispatch]);

  // Filter cities based on selected country
  const filteredCities = selectedCountry
    ? cities.filter((city) => city.countryId === parseInt(selectedCountry))
    : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Cities</h2>

      {/* Loading and Error States */}
      {(countriesLoading || citiesLoading) && <p>Loading...</p>}
      {(countriesError || citiesError) && (
        <p className="text-red-500">Error: {countriesError || citiesError}</p>
      )}

      {/* Country Selector */}
      <div className="mb-4">
        <label htmlFor="countrySelector" className="block text-sm font-medium mb-1">
          Select Country:
        </label>
        <select
          id="countrySelector"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="">All Countries</option>
          {Array.isArray(countries) &&
            countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
        </select>
      </div>

      {/* City List */}
      <ul className="border-t pt-2">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <li key={city.id} className="border-b pb-2">
              {city.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">
            {selectedCountry
              ? "No cities available for the selected country"
              : "Please select a country to view cities"}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Cities;
