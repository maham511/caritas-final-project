import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <Link to="/">
      <span />
      <span>Caritas</span>
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/caseStudy/">Case Study</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
