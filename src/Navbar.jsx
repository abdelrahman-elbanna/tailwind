import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-700 px-6 py-8 flex items-center justify-between relative">
      <Link to="/" className="text-white text-2xl sm:text-3xl font-bold uppercase">
        start framework
      </Link>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Nav Links */}
      <ul className={`sm:flex gap-5 text-white font-bold absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-700 sm:bg-transparent transition-all duration-300 ${isOpen ? 'flex flex-col items-center py-4' : 'hidden sm:flex'}`}>
        <li className="text-xl">
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white p-2.5 bg-[#1ABC9C] rounded-2xl"
                : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li className="text-xl">
          <NavLink
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white p-2.5 bg-[#1ABC9C] rounded-2xl"
                : "text-white"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="text-xl">
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white p-2.5 bg-[#1ABC9C] rounded-2xl"
                : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
