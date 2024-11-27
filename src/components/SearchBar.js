import React, { useState } from "react";
import { FaHeart, FaBell, FaCog, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 shadow-md rounded-lg">
      {/* Search Input */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/2"
      >
        <div className="h-3 w-3 bg-gray-400 rounded-full mr-2"></div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <FaHeart className="text-gray-600 cursor-pointer hover:text-gray-800" />
        <FaBell className="text-gray-600 cursor-pointer hover:text-gray-800" />
        <FaCog className="text-gray-600 cursor-pointer hover:text-gray-800" />
        <FaUser className="text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  );
};

export default SearchBar;
