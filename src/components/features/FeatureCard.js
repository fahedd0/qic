import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faBolt, 
  faMobileAlt, 
  faHandshake,
  faHeartbeat,
  faTooth,
  faPlaneDeparture,
  faBriefcase,
  faCar,
  faUserShield,
  faBuilding,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

// Icon mapping object
const iconMap = {
  'shield-alt': faShieldAlt,
  'bolt': faBolt,
  'mobile-alt': faMobileAlt,
  'handshake': faHandshake,
  'heartbeat': faHeartbeat,
  'tooth': faTooth,
  'plane-departure': faPlaneDeparture,
  'briefcase': faBriefcase,
  'car': faCar,
  'user-shield': faUserShield,
  'building': faBuilding,
  'user-tie': faUserTie
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
      <FontAwesomeIcon icon={iconMap[icon]} className="text-2xl text-red-700" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;