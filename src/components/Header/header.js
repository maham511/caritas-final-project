import React from 'react'
import Heading from './heading'
import Navigation from './navigation'

const Header = () => (
  <header className="flex flex-col items-center bg-gray-200 w-full px-6 md:flex-row md:items-end md:place-content-between shadow-lg">
    <Heading />
    <Navigation />
  </header>
)

export default Header
