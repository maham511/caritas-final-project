import React from 'react'
import { navigate } from 'gatsby'

const CaseStudyButton = () => (
  <div>
    <button
      onClick={() => {
        navigate('/caseStudies/')
      }}
    >
      Back to Case Studies
    </button>
  </div>
)

export default CaseStudyButton
