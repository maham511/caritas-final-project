import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, icon, onClick, className, type }) => {
  return (
    <div className="flex justify-center">
      <button
        className={className}
        onClick={(event) => onClick(event)}
        type={type}
      >
        <span className="pb-1.5">{text}</span>
        {icon}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
