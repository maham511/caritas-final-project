import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, icon, onClick, className, type }) => {
  return (
    <div data-testid="main-button" className="flex justify-center">
      <button
        className={className}
        onClick={(event) => onClick(event)}
        type={type}
      >
        {text}
        {icon}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Button
