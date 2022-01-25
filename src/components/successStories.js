import React from 'react'
import Button from './button'
import { navigate } from 'gatsby'
import { CgArrowLongRight } from 'react-icons/cg'

const SuccessStories = () => {
  function handleClick(event) {
    event.preventDefault()
    {
      navigate('/caseStudies')
    }
  }
  return (
    <div className="m-2">
      <Button
        onClick={handleClick}
        text="See our success stories"
        icon={<CgArrowLongRight />}
      />
    </div>
  )
}

export default SuccessStories
