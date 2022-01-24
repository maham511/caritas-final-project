import PropTypes from 'prop-types'
import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
