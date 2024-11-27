import React from "react";
import CarCard from "../components/CarCard";
import { recommendedCars,popularCars } from "../data/mockData";

const Search = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-gray-100 h-screen">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        
        {/* Type Filter */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Type</h3>
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="mr-2" /> Sedan
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" /> SUV
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" /> Hatchback
              </label>
            </li>
          </ul>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Category</h3>
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="mr-2" /> Luxury
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="mr-2" /> Economy
              </label>
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
          />
          <div className="text-right">Max: $100.00</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Search Bar */}
        <div className="mb-6 flex items-center bg-gray-100 rounded-lg p-3 shadow-sm">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full p-2 rounded-lg outline-none"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>

        {/* Car Listings */}
        <div className="grid grid-cols-3 gap-4">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
          {recommendedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;
