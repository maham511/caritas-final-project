import React from 'react'
import AboutUs from './aboutUs'
import Container from './container'
import Services from './services'
import VideoSection from './videoSection'
import Statistics from './statistics'

const Home = () => (
  <Container>
    <div>
      <AboutUs />
      <Services />
      <VideoSection />
      <Statistics />
    </div>
  </Container>
)

export default Home
