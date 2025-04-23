import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Socials */}
        <ul className="flex gap-4 mb-2 sm:mb-0">
          <li>
            <a
              href="https://www.facebook.com/PaviljoenSalt/"
              className="text-gray-600 hover:text-blue-600 transition"
              title="Volg op Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={18} />
              <span className="sr-only">Volg op Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/paviljoensalt/"
              className="text-gray-600 hover:text-pink-500 transition"
              title="Volg op Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
              <span className="sr-only">Volg op Instagram</span>
            </a>
          </li>
        </ul>
        {/* Contact info */}
        <div className="text-gray-700 text-center sm:text-right">
          <a href="mailto:info@paviljoensalt.nl" className="hover:underline">info@paviljoensalt.nl</a>
          <span className="mx-2">–</span>
          <a href="tel:0566689280" className="hover:underline">0566 689280</a>
        </div>
      </div>
    </div>
  );
} 