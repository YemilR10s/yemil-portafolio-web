// components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto md:px-8">
            {/* Social Media and Info Section */}
        <div className='flex flex-col items-center justify-center'>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.instagram.com/yemil.r10s/" target='_blank' aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/yemil.r10s/" target='_blank' aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/yemil.r10s/" target='_blank' aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">
            © 2024 <a href="https://www.instagram.com/yemil.r10s/" target='_blank' className='text-orange-500'>Yemil Rios</a> All rights reserved.
          </p>
        </div>
        
        </div>
    </footer>
  );
}
