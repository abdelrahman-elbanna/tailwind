import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-700 py-10 px-30 flex justify-between items-center">
      <Link to="/" className="text-white text-3xl font-bold uppercase">
        start framework
      </Link>
      <ul className="flex gap-5 text-white">
        <li className="text-xl font-bold">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white p-2.5 bg-[#1ABC9C] rounded-2xl"
                : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li className="text-xl font-bold">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-white p-2.5 bg-[#1ABC9C] rounded-2xl"
                : "text-white"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="text-xl font-bold">
          <NavLink
            to="/contact"
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
  )
}
