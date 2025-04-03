// src/components/common/Footer.js
import React from 'react';
// Import with explicit .js extension
import FooterLink from './FooterLink.js';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">About QIC</h4>
            <ul className="space-y-2">
              <FooterLink href="/about" label="Company Profile" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/news" label="News & Media" />
              <FooterLink href="/partners" label="Partners" />
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <FooterLink href="/products/individual" label="Individual Insurance" />
              <FooterLink href="/products/business" label="Business Insurance" />
              <FooterLink href="/products/investment" label="Investment Solutions" />
              <FooterLink href="/products/claims" label="Claims Process" />
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <FooterLink href="/contact" label="Contact Us" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/find-branch" label="Find a Branch" />
              <FooterLink href="/feedback" label="Feedback" />
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Connect with Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/qicinsurance" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/qicinsurance" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/qicinsurance" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/qicinsurance" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div>
              <p className="mb-2">Contact Center:</p>
              <a href="tel:+97444496000" className="text-white font-semibold text-lg hover:text-red-400 transition duration-300">+974 4449 6000</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center">&copy; 2025 QIC Insurance Company. All rights reserved.</p>
          <p className="text-center text-sm mt-2 text-gray-500">Technology powered by Click To Secure Insurance Technology - Abu Dhabi - UAE</p>
          <div className="flex justify-center mt-4 space-x-6">
            <FooterLink href="/terms" label="Terms & Conditions" />
            <FooterLink href="/privacy" label="Privacy Policy" />
            <FooterLink href="/support" label="Support" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;