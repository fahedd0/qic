import React from 'react';

const ProductCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full transform hover:-translate-y-1">
      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
        <i className={`fas fa-${icon} text-xl text-red-700`}></i>
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="mt-auto text-red-700 font-medium hover:text-red-800 transition duration-300 flex items-center">
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  );
};

export default ProductCard;