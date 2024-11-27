import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { car } = location.state || {}; // Retrieve car details passed via state

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow p-4">
        <h1 className="text-lg font-bold text-gray-800">Payment</h1>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {/* Car Details */}
        {car && (
          <section className="bg-white shadow rounded-lg p-4 space-y-4">
            <h2 className="text-md font-semibold text-gray-800">Car Details</h2>
            <div className="flex items-center">
              <img
                src={car.image}
                alt={car.name}
                className="w-24 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <p className="text-sm font-medium">{car.name}</p>
                <p className="text-sm text-gray-500">{car.price}</p>
              </div>
            </div>
          </section>
        )}

        {/* Payment Form (Already implemented earlier) */}
        <section className="bg-white shadow rounded-lg p-4 space-y-4">
          <h2 className="text-md font-semibold text-gray-800">Enter Payment Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-2 rounded shadow hover:bg-indigo-700"
            >
              Confirm Payment
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © 2024 Car Rental Service
      </footer>
    </div>
  );
};

export default Payment;
