// src/components/common/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/qic-logo.jpg" alt="QIC Insurance" className="h-16" />
        </div>
        
        {/* Right side with contact and login */}
        <div className="flex items-center space-x-6">
          {/* Contact button */}
          <a href="/contact" className="flex items-center text-gray-700 hover:text-red-700 font-medium transition duration-300">
            <i className="fas fa-phone-alt mr-2"></i>
            <span>Contact</span>
          </a>
          
          {/* Login button */}
          <a href="/login" className="flex items-center py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-lg transition duration-300">
            <i className="fas fa-user mr-2"></i>
            <span>Login</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;