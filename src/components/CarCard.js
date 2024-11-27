import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Link to={`/details/${car.id}`} className="block">
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-32 object-cover rounded"
        />
        <h3 className="font-bold text-lg mt-4">{car.name}</h3>
        <p className="text-gray-600">{car.price}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded">
            View Details
          </button>
          <span className="text-red-500">&#10084;</span>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
