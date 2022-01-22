import React from 'react'
import AboutUs from './aboutUs'
import Container from './container'
import Services from './services'
import Statistics from './statistics'

const Home = () => (
  <Container>
    <div>
      <h1>This is the home page</h1>
      <AboutUs />
      <Services />
      <Statistics />
    </div>
  </Container>
)

export default Home
