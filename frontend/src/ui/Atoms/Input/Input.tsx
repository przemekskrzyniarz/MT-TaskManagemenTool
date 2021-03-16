import * as React from "react";

import { BaseProps as Props } from "./Input.types";

const Input: React.FunctionComponent<Props> = (props) => (
  <input
    type={props.type}
    className={["Input", props.className].join(" ")}
    placeholder={props.text}
    id={props.text}
    required
  >
    {props.children}
  </input>
);

export { Input };
