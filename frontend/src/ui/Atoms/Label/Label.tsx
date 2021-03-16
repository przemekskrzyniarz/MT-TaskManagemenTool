import * as React from "react";

import { BaseProps as Props } from "./Label.types";

const Label: React.FunctionComponent<Props> = (props) => (
  <label htmlFor={props.text} className={["Label", props.className].join(" ")}>{props.text}</label>
);

export { Label };
