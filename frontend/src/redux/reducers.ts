import { combineReducers } from "redux";

import authReducer from "./authReducer/reducer";

export const reducers = {
  authReducer,
};

export default combineReducers(reducers);
