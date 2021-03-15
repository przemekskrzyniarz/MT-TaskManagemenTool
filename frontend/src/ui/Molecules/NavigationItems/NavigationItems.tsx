import React from "react";
import { NavigationItem } from "../../Atoms";
const NavigationItems = (props: any) => (
    <ul className="navigationItems">
      <React.Fragment>
      {props.items.map((item: any) => (
      <NavigationItem {...item} key={String(item.children).toLowerCase()} />
       ))}
      </React.Fragment>
    </ul>
);

export { NavigationItems };
