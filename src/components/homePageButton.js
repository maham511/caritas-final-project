import React from 'react'
import { navigate } from 'gatsby'

const HomePageButton = () => (
  <div>
    <button
      onClick={() => {
        navigate('/')
      }}
    >
      Back to Home Page
    </button>
  </div>
)

export default HomePageButton
