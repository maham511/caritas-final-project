import React from 'react'

import Container from './container'
import Heading from './heading'
import Navigation from './navigation'

const Header = () => (
  <Container as="header">
    <Heading />
    <Navigation />
  </Container>
)

export default Header
