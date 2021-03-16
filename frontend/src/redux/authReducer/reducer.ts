import { AnyAction } from "redux";
import { LOGIN_ACTION } from "./actions";
import { AuthReducer } from "./typings";

const initialState: AuthReducer = {
  token: "",
};

// eslint-disable-next-line
export default function (
  state: AuthReducer = initialState,
  action: AnyAction,
): AuthReducer {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION:
      return {...state , token: payload};
    default:
      return state;
  }
}
