import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faInfoCircle, 
  faShoppingCart, 
  faPhone, 
  faUser
} from '@fortawesome/free-solid-svg-icons';

// Icon mapping object
const iconMap = {
  'home': faHome,
  'info-circle': faInfoCircle,
  'shopping-cart': faShoppingCart,
  'phone': faPhone,
  'user': faUser
};

const NavLink = ({ href, icon, label }) => (
  <a href={href} className="flex items-center text-gray-700 hover:text-red-700 font-medium transition duration-300">
    <FontAwesomeIcon icon={iconMap[icon]} className="mr-2" />
    <span>{label}</span>
  </a>
);

export default NavLink;