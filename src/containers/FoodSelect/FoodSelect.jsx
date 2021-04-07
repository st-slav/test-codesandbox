import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { getFood } from '../../store/modules/food';
import { loadFood } from '../../actions/food';
import { FoodSelect as FoodSelectComponent } from '../../components'

export const FoodSelect = connect(
  (state) => ({
    food: getFood(state)
  }),
  {
    loadFood
  }
)(({ food, loadFood }) => {
  useEffect(() => {
    loadFood()
  }, [loadFood])

  const mappedFood = useMemo(() => food.map(({ name: label, id: value }) => ({ label, value })), [food])

  return <FoodSelectComponent food={mappedFood} />
})
