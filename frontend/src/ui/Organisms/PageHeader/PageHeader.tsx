import * as React from 'react'

import {NavigationItems} from './../../Molecules'

import {ROUTES} from '../../../config/routes'
import {NavLink} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_USER} from '../../../apollo/queries/getUser'

export interface Props {
  className?: string
  hidden?: boolean
  scrolled?: boolean
}

const PageHeader = (props: Props) => {
  let items
  const {data} = useQuery(GET_USER)
  if (!data?.user?.token) {
    items = [
      {
        children: 'Login',
        href: `${ROUTES.AUTH}`,
      },
    ]
  } else {
    items = [
      {
        children: 'Logout',
        href: `${ROUTES.LOGOUT}`,
      },
    ]
  }

  return (
    <header
      className={[
        'pageHeader',
        props.hidden ? 'pageHeader--hidden' : '',
        props.className,
      ].join(' ')}
    >
      <NavLink
        className="pageHeader__logo"
        to={ROUTES.HOME}
        exact={true}
        activeClassName="active"
      />
      <NavigationItems items={items} />
    </header>
  )
}

export {PageHeader}
