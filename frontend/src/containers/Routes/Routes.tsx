import * as React from 'react'

import {Switch, Route} from 'react-router-dom'

import {index, auth, logout} from '../../config/routes'

const Routes: React.FunctionComponent = () => (
  <main>
    <Switch>
      <Route {...index} />
      <Route {...auth} />
      <Route {...logout} />
    </Switch>
  </main>
)

export {Routes}
