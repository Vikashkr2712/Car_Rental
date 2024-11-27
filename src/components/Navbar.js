import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchTerm) => {
    // Navigate to the search page when the search is triggered
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Name (linked to Home) */}
        <div>
          <Link to="/" className="text-lg font-bold text-blue-600">
            Car Rental
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <SearchBar onSearch={handleSearchSubmit} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
