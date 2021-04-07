import React from 'react'
import PropTypes from 'prop-types'
import { Link  } from 'react-router-dom'
import styled from 'styled-components'

const AnimalsListLi = styled.li`
  padding-bottom: 5px;
  
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.3s;
    }
  }
`

const AnimalsListUl = styled.ul`
  padding: 0;
  list-style: none;
`

export const AnimalsList = ({ animals = [] }) => (
  <AnimalsListUl>
    {animals.map(({ label, link }) => (<AnimalsListLi key={link + label}><Link  to={link}>{label}</Link ></AnimalsListLi>))}
  </AnimalsListUl>
)

AnimalsList.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, link: PropTypes.string }))
}