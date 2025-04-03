import React from 'react';

const NavLink = ({ href, icon, label }) => (
  <a href={href} className="flex items-center text-gray-700 hover:text-red-700 font-medium transition duration-300">
    <i className={`fas fa-${icon} mr-2`}></i>
    <span>{label}</span>
  </a>
);

export default NavLink;