import React from 'react'
import Links from './links'
import Privacy from './privacy'

const Footer = () => (
  <footer className="pt-4 pb-4 bg-gray-200 text-sm flex flex-col items-center w-full px-6 md:flex-row md:items-end md:place-content-between shadow-lg">
    <Privacy />
    <Links />
  </footer>
)

export default Footer
