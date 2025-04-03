// src/components/hero/HeroSection.js
import React from 'react';

function HeroSection() {
  function handleGetQuote() {
    window.alert("Get a Quote button clicked");
    console.log("Get a Quote button clicked");
  }

  function handleExplorePlans() {
    window.alert("Explore Plans button clicked");
    console.log("Explore Plans button clicked");
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-red-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Protection, <span className="text-red-700">Our Commitment</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Insurance made simple. Secure your future in just a few clicks with Qatar's most trusted insurance provider.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-6 py-3 bg-red-700 text-white font-medium rounded-lg hover:bg-red-800 transition duration-300 shadow-md"
              onClick={handleGetQuote}
            >
              Get a Quote
            </button>
            <button 
              className="px-6 py-3 bg-white border-2 border-red-700 text-red-700 font-medium rounded-lg hover:bg-red-50 transition duration-300 shadow-md"
              onClick={handleExplorePlans}
            >
              Explore Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;