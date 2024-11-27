import React, { useState } from "react";

const PaymentMethod = ({ methods, onSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelection = (method) => {
    setSelectedMethod(method);
    onSelect(method); // Notify the parent component about the selection
  };

  return (
    <div className="space-y-4">
      <h2 className="text-md font-semibold text-gray-800">Payment Methods</h2>
      {methods.map((method) => (
        <label
          key={method.id}
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${
            selectedMethod === method.id ? "border-indigo-500" : "border-gray-300"
          }`}
          onClick={() => handleSelection(method.id)}
        >
          <input
            type="radio"
            name="payment-method"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => handleSelection(method.id)}
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <span className="ml-4">{method.name}</span>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethod;
