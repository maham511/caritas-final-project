import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, icon, onClick }) => {
  return (
    <div>
      <button onClick={(event) => onClick(event)}>
        {icon}
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
}

export default Button
