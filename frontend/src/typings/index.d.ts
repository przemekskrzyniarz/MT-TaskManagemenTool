/* eslint-disable @typescript-eslint/no-empty-interface */
import { Action } from "redux";

import { ITheme } from "@ui/theme";

export type ReduxAction<T = never> = Action &
  ([T] extends [never] ? { payload?: T } : { payload: T });
