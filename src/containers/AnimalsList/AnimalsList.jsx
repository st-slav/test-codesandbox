import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { getAnimals } from '../../store/modules/animals';
import { loadAnimals } from '../../actions/animals'
import { AnimalsList as AnimalsListComponent } from '../../components'
import { routes } from '../../constants'
import { replaceRouteId } from '../../utils'

export const AnimalsList = connect((state) => ({
  animals: getAnimals(state)
}),
{
  loadAnimals
}
)(({ loadAnimals, animals }) => {
  useEffect(() => {
    loadAnimals()
  }, [loadAnimals])
  const animalsLinks = useMemo(() => animals.map(({ id, name }) => ({ label: name, link: replaceRouteId(routes.animal, id) })), [animals])
  return <AnimalsListComponent animals={animalsLinks} />
})