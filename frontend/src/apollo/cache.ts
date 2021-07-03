import {InMemoryCache, ReactiveVar, makeVar} from '@apollo/client'
import {User} from './models/User'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userVar()
          },
        },
      },
    },
  },
})

/**
 * Set initial values when we create cache variables.
 */

export const userInitialValue: User = {
  userId: null,
  email: null,
  token: null,
  tokenExpiration: null,
}

export const userVar: ReactiveVar<User> = makeVar<User>(userInitialValue)
