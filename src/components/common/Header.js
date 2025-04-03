// src/components/common/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/qic-logo.jpg" 
            alt="QIC Insurance" 
            className="h-16 object-contain"
            onError={(e) => {
              console.error("Logo failed to load");
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback text logo (hidden by default) */}
          <div className="h-16 flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-red-700">QIC</span>
              <span className="text-gray-800"> Insurance</span>
            </span>
          </div>
        </div>
        
        {/* Right side with contact and login */}
        <div className="flex items-center space-x-6">
          {/* Contact button - now with red border */}
          <a 
            href="/contact" 
            className="flex items-center py-2 px-4 border-2 border-red-700 text-red-700 rounded-lg hover:bg-red-50 font-medium transition duration-300"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <span>Contact</span>
          </a>
          
          {/* Login button */}
          <a 
            href="/login" 
            className="flex items-center py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>Login</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;