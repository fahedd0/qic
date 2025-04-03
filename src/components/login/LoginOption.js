import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserShield, 
  faBuilding, 
  faUserTie 
} from '@fortawesome/free-solid-svg-icons';

// Icon mapping object
const iconMap = {
  'user-shield': faUserShield,
  'building': faBuilding,
  'user-tie': faUserTie
};

const LoginOption = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-8 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={iconMap[icon]} className="text-3xl text-red-700" />
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 mt-auto">
        Login Now
      </button>
    </div>
  );
};

export default LoginOption;