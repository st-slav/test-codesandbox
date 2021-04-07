import React from 'react'
import PropTypes from 'prop-types'
import { Select } from '../../ui/Select'

export const FoodSelect = ({ food }) => (
  <>
    <h3>Еда для животного</h3>
    <Select options={food} />
  </>
)

FoodSelect.propTypes = {
  food: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}