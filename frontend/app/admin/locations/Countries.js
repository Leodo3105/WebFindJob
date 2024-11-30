import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, addCountry, updateCountry, deleteCountry } from "@/features/location/countriesSlice";

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

  const [newCountryName, setNewCountryName] = useState(""); // State cho thêm quốc gia
  const [editCountryId, setEditCountryId] = useState(null); // State cho sửa quốc gia
  const [editCountryName, setEditCountryName] = useState(""); // State cho tên sửa quốc gia

  // Fetch countries on component mount
  useEffect(() => {
    console.log("Dispatching fetchCountries...");
    dispatch(fetchCountries());
  }, [dispatch]);

  // Add Country
  const handleAddCountry = () => {
    if (newCountryName.trim()) {
      dispatch(addCountry({ name: newCountryName })).then(() => {
        setNewCountryName("");
      });
    }
  };

  // Update Country
  const handleUpdateCountry = () => {
    if (editCountryName.trim()) {
      dispatch(updateCountry({ id: editCountryId, data: { name: editCountryName } })).then(() => {
        setEditCountryId(null); // Reset edit mode
        setEditCountryName("");
      });
    }
  };

  // Delete Country
  const handleDeleteCountry = (id) => {
    if (confirm("Are you sure you want to delete this country?")) {
      dispatch(deleteCountry(id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Countries</h2>

      {/* Loading and Error States */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Add Country Form */}
      <div className="mb-4">
        <input
          type="text"
          value={newCountryName}
          onChange={(e) => setNewCountryName(e.target.value)}
          placeholder="Enter country name"
          className="border px-2 py-1 rounded mr-2"
        />
        <button
          onClick={handleAddCountry}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Country
        </button>
      </div>

      {/* Country List */}
      <ul>
        {Array.isArray(countries) && countries.length > 0 ? (
          countries.map((country) => (
            <li key={country.id} className="border-b pb-2 flex justify-between items-center">
              {editCountryId === country.id ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editCountryName}
                    onChange={(e) => setEditCountryName(e.target.value)}
                    className="border px-2 py-1 rounded mr-2"
                  />
                  <button
                    onClick={handleUpdateCountry}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditCountryId(null)}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span>{country.name}</span>
                  <div>
                    <button
                      onClick={() => {
                        setEditCountryId(country.id);
                        setEditCountryName(country.name);
                      }}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCountry(country.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <li>No countries available</li>
        )}
      </ul>
    </div>
  );
};

export default Countries;
