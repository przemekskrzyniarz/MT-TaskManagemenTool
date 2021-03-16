import * as React from "react";

import { BaseProps as Props } from "./AuthForm.types";

const AuthForm: React.FunctionComponent<Props> = (props) => (
  <div className={["Auth-Form", props.className].join("  ")}>{props.children}</div>
);

export { AuthForm };
