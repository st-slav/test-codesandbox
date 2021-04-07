import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAnimals } from '../../store/modules/animals';
import { Animal as AnimalComponent } from '../../components'
import { getPathParamsByProps } from '../../utils'

export const Animal = withRouter(connect((state, ownProps) => ({
  animals: getAnimals(state),
  id: getPathParamsByProps(ownProps).id
}))(({ animals, id }) => {
  const animal = useMemo(() => animals.find((animal) => id === animal.id), [animals, id])

  if(animals.length > 0 && animal) {
    return <AnimalComponent name={animal.name} />
  } else if(animals.length > 0) {
    return <p>Животное не найдено</p>
  }

  return null
}))