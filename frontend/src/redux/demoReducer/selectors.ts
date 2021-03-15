import { createSelector } from "reselect";

import { Reducers } from "./../../redux/typings";

const exampleSelectorFunction = (state: Reducers) => {
  return state;
};

export const exampleSelector = createSelector(
  exampleSelectorFunction,
  (f) => f,
);
