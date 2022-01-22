import React from 'react'
import AboutUs from './aboutUs'
import Container from './container'
import Services from './services'
import VideoSection from './videoSection'

const Home = () => (
  <Container>
    <div>
      <h1>This is the home page</h1>
      <AboutUs />
      <Services />
      <VideoSection />
    </div>
  </Container>
)

export default Home
