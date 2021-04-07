import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

export const Select = ({ options, id = '', ...restProps }) => {
  const [inputValue, setInputValue] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(null) // пусть пока хранится здесь

  const optionByLabel = useMemo(() => {
    const mappedOptions = options.reduce((acc, option) => {
      const { label } = option
      return {
        ...acc,
        [label]: option
      }
    }, {})
    return mappedOptions
  }, [options])

  const handleChange = useCallback((e) => {
    const value = optionByLabel[e.target.value]
    if(value) {
      setSelected(value)
    } else {
      setSelected(null)
    }
    setInputValue(e.target.value)
  },[setInputValue, setSelected, optionByLabel])

  const renderedOptions = useMemo(() => options.map(({ label, value }) => <option key={`select-datalist-option-${value}`} value={label} />), [options])
  
  return (
    <>
      <input id={`select-input-${id}`} list={`select-datalist-${id}`} value={inputValue} {...restProps} onChange={handleChange} />
      <datalist id={`select-datalist-${id}`}>
        {renderedOptions}
      </datalist>
    </>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}