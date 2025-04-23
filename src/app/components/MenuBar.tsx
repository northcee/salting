import React from "react";
import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Salting</Link>
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link href="#over" className="hover:text-blue-600 transition">Over</Link>
              </li>
              <li>
                <Link href="#diensten" className="hover:text-blue-600 transition">Diensten</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
} 