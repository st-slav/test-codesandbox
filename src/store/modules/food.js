import { combineReducers } from 'redux'
import { actionTypes } from '../../constants'

const listReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_FOOD_SUCCESS:
      return action.payload

    default:
      return state
  }
}

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FOOD:
      return true

    case actionTypes.LOAD_FOOD_SUCCESS:
    case actionTypes.LOAD_FOOD_FAILURE:
      return false

    default:
      return state
  }
}

const errorInitialState = null

const errorReducer = (state = errorInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FOOD_FAILURE:
      return action.payload

    case actionTypes.GET_FOOD:
      return errorInitialState

    default:
      return state
  }
}

export const food = combineReducers({
  list: listReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
})

const getState = (state) => state.food
export const isLoading = (state) => getState(state).isLoading
export const getFood = (state) => getState(state).list
export const getErrorMessage = (state) => {
  const { error } = getState(state)
  return error && error.message ? error.message : null
} 