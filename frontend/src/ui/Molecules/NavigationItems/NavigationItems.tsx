import React from 'react'
import {NavigationItem} from '../../Atoms'

const NavigationItems = (props: any) => (
  <ul className="navigationItems">
    {props.items.map((item: any) => (
      <NavigationItem {...item} key={String(item.children).toLowerCase()} />
    ))}
  </ul>
)

export {NavigationItems}
