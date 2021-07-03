import {ReactiveVar, makeVar} from '@apollo/client'
import {User} from '../../models/User'

export const userInitialValue: User = {
  userId: null,
  email: null,
  token: null,
  tokenExpiration: null,
}

export const userVar: ReactiveVar<User> = makeVar<User>(userInitialValue)
