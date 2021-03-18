import * as React from "react";

import { BaseProps as Props } from "./Modal.types";

const Modal: React.FunctionComponent<Props> = (props) => (
  <div className={["Modal", props.className].join("  ")}>{props.children}</div>
);

export { Modal };
