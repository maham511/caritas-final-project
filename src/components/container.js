import PropTypes from 'prop-types'
import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as
  return <Tag>{children}</Tag>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
}

export default Container
