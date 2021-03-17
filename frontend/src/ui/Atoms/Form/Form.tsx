import * as React from "react";

import { BaseProps as Props } from "./Form.types";

const Form: React.FunctionComponent<Props> = ({className, children, onSubmit}) => (
  <form onSubmit={onSubmit} className={["Form", className].join(" ")}>{children}</form>
);

export { Form };
