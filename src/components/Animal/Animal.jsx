import React from 'react'
import PropTypes from 'prop-types'

export const Animal = ({ name }) => <h2>{name}</h2>

Animal.propTypes = {
  name: PropTypes.string.isRequired
}