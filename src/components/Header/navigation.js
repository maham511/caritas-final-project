import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <ul className="flex text-2xl text-gray-600 uppercase">
      <li className="text-base md:text-2xl px-4 py-2 m-1 rounded hover:text-white hover:bg-red-600 transition ease-out duration-500">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base md:text-2xl px-4 py-2 m-1 rounded hover:text-white hover:bg-red-600 transition ease-out duration-500">
        <Link to="/caseStudies/">Case Studies</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
