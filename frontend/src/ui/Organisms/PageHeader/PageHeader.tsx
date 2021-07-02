import * as React from 'react'

import {NavigationItems} from './../../Molecules'

import {getToken} from '../../../redux/authReducer/selectors'

import {ROUTES} from '../../../config/routes'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

export interface Props {
  className?: string
  hidden?: boolean
  scrolled?: boolean
}

const PageHeader = (props: Props) => {
  const token = useSelector(getToken)
  console.log(token)
  let items
  if (token === '') {
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
