import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <ul className="flex text-base text-gray-600 uppercase">
      <li className="md:text-xl font-bold px-2 md:px-4 py-2 m-1 border-t-8 border-transparent hover:border-red-600 transition ease-out duration-500">
        <Link to="/studentWall/">Student Wall</Link>
      </li>
      <li className="md:text-xl font-bold px-2 md:px-4 py-2 m-1 border-t-8 border-transparent hover:border-red-600 transition ease-out duration-500">
        <Link to="/caseStudies/">Case Studies</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
