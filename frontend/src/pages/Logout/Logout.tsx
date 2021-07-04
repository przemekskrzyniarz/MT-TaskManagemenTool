import React, {FunctionComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {userInitialValue, userVar} from '../../apollo/reactivities/user'

export const Logout: FunctionComponent<{}> = () => {
  React.useEffect(() => {
    userVar(userInitialValue)
  }, [])

  return <Redirect to="/" />
}
