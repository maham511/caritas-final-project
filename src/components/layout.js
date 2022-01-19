import PropTypes from 'prop-types'
import React from 'react'

// import Navigation from './navigation'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
