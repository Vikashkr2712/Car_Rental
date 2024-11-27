
import React from "react";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";
import { popularCars, recommendedCars } from "../data/mockData";

const Home = () => {
  return (
    <div className="container mx-auto my-10">
      {/* Header Section */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
          <h2 className="text-lg font-bold">Promotional Section 1</h2>
        </div>
        <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
          <h2 className="text-lg font-bold">Promotional Section 2</h2>
        </div>
      </div>

      {/* Popular Cars Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-4">Popular Cars</h3>
        <div className="grid grid-cols-4 gap-4">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section>
        <h3 className="text-xl font-bold mb-4">Recommended Cars</h3>
        <div className="grid grid-cols-4 gap-4">
          {recommendedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <Link to="/search" className="text-blue-500 underline">
            Go to Search Page
          </Link>
      </section>
    </div>
  );
};

export default Home;


