import * as React from "react";

import { BaseProps as Props } from "./Button.types";
import "./button.styles.scss";

const Button: React.FunctionComponent<Props> = (props) => (
  <button className={props.className}>{props.children}</button>
);

export { Button };
