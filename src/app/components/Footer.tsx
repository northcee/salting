import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-4 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-between border-b border-gray-700 pb-8">
          {/* Menu */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <nav>
              <ul className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/menu" className="hover:underline">Menu</Link></li>
                <li><Link href="/famillie-en-vrienden" className="hover:underline">Familie & Vrienden</Link></li>
                <li><Link href="/zakelijk" className="hover:underline">Zakelijk</Link></li>
                <li><Link href="/agenda" className="hover:underline">Agenda</Link></li>
                <li><Link href="/vacatures" className="hover:underline">Vacatures</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
          </div>
          {/* Socials */}
          <div className="md:w-1/3 flex md:justify-end items-center gap-4">
            <a href="https://www.facebook.com/paviljoensalt" target="_blank" rel="noopener noreferrer" title="Volg op Facebook" className="hover:text-blue-400 transition"><FaFacebookF size={20} /></a>
            <a href="https://www.instagram.com/paviljoensalt" target="_blank" rel="noopener noreferrer" title="Volg op Instagram" className="hover:text-pink-400 transition"><FaInstagram size={20} /></a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 text-sm">
          {/* Openingstijden */}
          <div>
            <h3 className="font-semibold mb-2">Openingstijden</h3>
            <ul>
              <li>Maandag : 10:00 – 21:00 uur</li>
              <li>Dinsdag: 10:00 – 21:00 uur</li>
              <li>Woensdag: 10:00 – 22:00 uur</li>
              <li>Donderdag: 10:00 – 22:00 uur</li>
              <li>Vrijdag: 10:00 – 22:00 uur</li>
              <li>Zaterdag: 10:00 – 22:00 uur</li>
              <li>Zondag: 10:00 – 22:00 uur</li>
            </ul>
          </div>
          {/* Highlights */}
          <div>
            <h3 className="font-semibold mb-2">Iets te vieren?</h3>
            <ul>
              <li>Babyshower / borrel</li>
              <li><Link href="/particulier" className="hover:underline">Familie dag</Link></li>
              <li><Link href="/groepsactiviteiten" className="hover:underline">Groepsactiviteiten aan het water</Link></li>
              <li>Trouwen</li>
              <li><Link href="/zakelijk" className="hover:underline">Zakelijk arrangementen</Link></li>
            </ul>
          </div>
          {/* Actueel */}
          <div>
            <h3 className="font-semibold mb-2">Actueel bij salt</h3>
            <ul>
              <li><Link href="/agenda" className="hover:underline">Agenda 2024</Link></li>
            </ul>
          </div>
          {/* Adres */}
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <ul>
              <li>Paviljoen Salt</li>
              <li>Utbuorren 50</li>
              <li>8493 MA Terherne</li>
              <li><a href="mailto:info@paviljoensalt.nl" className="hover:underline">info@paviljoensalt.nl</a></li>
              <li>0566 689280</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          Copyright © 2023 – Paviljoen Salt – Yodi Regelt
        </div>
      </div>
    </footer>
  );
} 