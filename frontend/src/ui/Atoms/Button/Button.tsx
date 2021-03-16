import * as React from "react";

import { BaseProps as Props } from "./Button.types";

const Button: React.FunctionComponent<Props> = (props) => (
  <button onClick={props.onClick} className={["Button", props.className].join(" ")}>{props.children}</button>
);

export { Button };
