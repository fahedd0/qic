// src/components/common/FooterLink.js
import React from 'react';

const FooterLink = ({ href, label }) => (
  <li>
    <a href={href} className="hover:text-red-400 transition duration-300">{label}</a>
  </li>
);

export default FooterLink;