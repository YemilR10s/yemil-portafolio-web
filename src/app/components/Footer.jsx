// components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8">
        
        {/* Location Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Location</h4>
          <p>123 Main Street</p>
          <p>City, State, 12345</p>
          <p>Country</p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

            {/* Social Media and Info Section */}
            <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
        
        </div>
    </footer>
  );
}
