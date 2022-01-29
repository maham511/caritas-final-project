import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/Caritas-logo.png'

const Heading = () => (
  <div>
    <Link to="/">
      <img src={logo} alt="Caritas logo" className="w-36 md:w-64 p-4"></img>
    </Link>
  </div>
)

export default Heading
