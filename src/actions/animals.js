import { actionTypes } from '../constants'
import { api } from '../api'

export const loadAnimals = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOAD_ANIMALS })
  try {
    const { data } = await api.fetchAnimals()
    dispatch(loadAnimalsSuccess(data))
  } catch (err) {
    dispatch(loadAnimalsFailure(err))
  }
}

export const loadAnimalsSuccess = (payload) => (dispatch) => dispatch({
  type: actionTypes.LOAD_ANIMALS_SUCCESS,
  payload
})

export const loadAnimalsFailure = (error) => (dispatch) => dispatch({
  type: actionTypes.LOAD_ANIMALS_FAILURE,
  payload: error
})