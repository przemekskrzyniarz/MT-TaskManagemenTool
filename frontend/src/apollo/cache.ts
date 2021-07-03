import {userVar} from './reactivities/user'
import {InMemoryCache} from '@apollo/client'

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
