import * as React from "react";

import { BaseProps as Props } from "./Form.types";

const Form: React.FunctionComponent<Props> = (props) => (
  <form className={["Form", props.className].join(" ")}>{props.children}</form>
);

export { Form };
