import { actionTypes } from '../constants'
import { api } from '../api'

export const loadFood = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOAD_FOOD })
  try {
    const { data } = await api.fetchFood()
    dispatch(loadFoodSuccess(data))
  } catch (err) {
    dispatch(loadFoodFailure(err))
  }
}

export const loadFoodSuccess = (payload) => (dispatch) => dispatch({
  type: actionTypes.LOAD_FOOD_SUCCESS,
  payload
})

export const loadFoodFailure = (error) => (dispatch) => dispatch({
  type: actionTypes.LOAD_FOOD_FAILURE,
  payload: error
})