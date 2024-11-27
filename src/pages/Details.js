import React from "react";
import { useParams, Link } from "react-router-dom";
import { popularCars, recommendedCars } from "../data/mockData";

const Details = () => {
  const { id } = useParams();
  const allCars = [...popularCars, ...recommendedCars];
  const car = allCars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="container mx-auto text-center my-10">Car not found!</div>;
  }

  return (
    <div className="container mx-auto my-10">
      {/* Car Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-5">{car.name}</h1>

      {/* Image and Info Section */}
      <div className="grid grid-cols-2 gap-10 mb-10">
        <div className="rounded-lg overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">{car.price}</p>
          <p className="text-gray-600 mb-6">
            This is a detailed description of the car, including its unique features and
            specifications. It's perfect for both short and long-term rentals.
          </p>

          <ul className="mb-6 space-y-2">
            <li>
              <strong>Fuel Type:</strong> Petrol
            </li>
            <li>
              <strong>Seats:</strong> 5
            </li>
            <li>
              <strong>Transmission:</strong> Automatic
            </li>
            <li>
              <strong>Mileage:</strong> 15 km/l
            </li>
          </ul>

          <div className="flex space-x-4">
  <Link
    to="/"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
  >
    Back to Home
  </Link>

  <Link
    to="/payment"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
  >
    Rent Now
  </Link>
</div>

        </div>
      </div>

      {/* Gallery Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcmElMjBjYXJ8ZW58MHx8MHx8fDA%3D"
            alt="Gallery 1"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcmElMjBjYXJ8ZW58MHx8MHx8fDA%3D"
            alt="Gallery 2"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1669396770712-416b14f214c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cHJhJTIwY2FyfGVufDB8fDB8fHww"
            alt="Gallery 3"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recommended Cars</h2>
        <div className="grid grid-cols-4 gap-4">
          {recommendedCars.slice(0, 4).map((recCar) => (
            <Link
              to={`/car/${recCar.id}`}
              key={recCar.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={recCar.image}
                alt={recCar.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{recCar.name}</h3>
                <p className="text-gray-600">{recCar.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Details;
