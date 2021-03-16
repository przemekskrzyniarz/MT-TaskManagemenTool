import { Dispatch } from "redux";

import { Action, AnyAction } from "redux";

export const LOGIN_ACTION = "AUTH_REDUCER/LOGIN";

export const loginAction = (dispatch: Dispatch): AnyAction =>
  dispatch({ type: LOGIN_ACTION, payload: "Token" });
