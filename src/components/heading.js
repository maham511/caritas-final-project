import React from 'react'
import { Link } from 'gatsby'
// import { logo } from ../assets/Caritas-logo.png
// import { logo } from '../assets/Caritas-logo.png'
import logo from '../assets/Caritas-logo.png'


console.log(logo);

const Heading = () => (
  <div>
    <Link to="/">
      <img src={logo} className='h-32 p-4'></img>
    </Link>
  </div>
)

export default Heading
