import * as React from "react";

import { BaseProps as Props } from "./Button.types";

const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  onClick,
}) => (
  <button onClick={onClick} className={["Button", className].join(" ")}>
    {children}
  </button>
);

export { Button };
