import {Dispatch, AnyAction} from 'redux'

export const LOGIN_ACTION = 'AUTH_REDUCER/LOGIN'
export const LOGOUT_ACTION = 'AUTH_REDUCER/LOGOUT'

export const login = (dispatch: Dispatch): AnyAction =>
  dispatch({type: LOGIN_ACTION, payload: 'Token'})

export const logout = (dispatch: Dispatch): AnyAction =>
  dispatch({type: LOGOUT_ACTION, payload: ''})
