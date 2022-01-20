import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ value, icon, onClick }) => {
  return (
    <div>
      <button onClick={(event) => onClick(event)}>
        {icon}
        {value}
      </button>
    </div>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
}

export default Button
