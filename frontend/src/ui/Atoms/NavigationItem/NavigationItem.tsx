import React from 'react';
import { NavLink } from 'react-router-dom';
const NavigationItem = ( props: any ) => (
    <li className="navigationItem">
        <NavLink 
            to={props.href}
            exact={true}
            activeClassName="active">{props.children}</NavLink>
    </li>
);

export { NavigationItem };