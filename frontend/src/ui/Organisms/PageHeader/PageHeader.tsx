import * as React from "react";

import { NavigationItems } from "./../../Molecules";

import { ROUTES } from "../../../config/routes";
import { NavLink } from "react-router-dom";

export interface Props {
  className?: string;
  hidden?: boolean;
  scrolled?: boolean;
}

const PageHeader = (props: Props) => {
  const items = [
    {
      children: "Login",
      href: `${ROUTES.AUTH}`,
    }
  ];

  return (
    <header
      className={[
        "pageHeader",
        props.hidden ? "pageHeader--hidden" : "",
        props.className,
      ].join(" ")}
    >
      <NavLink className="pageHeader__logo" to={ROUTES.HOME} exact={true} activeClassName="active"></NavLink>
      <NavigationItems items={items} />
    </header>
  );
};

export { PageHeader };
