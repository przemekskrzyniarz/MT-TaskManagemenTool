import { CombinedState } from "redux";

import { AuthReducer } from "../redux/authReducer/typings";

export type Reducers = CombinedState<{
  authReducer: AuthReducer;
}>;
