import {gql} from '@apollo/client'

export const GET_USER = gql`
  query getUser {
    user @client {
      userId
      email
      token
      tokenExpiration
    }
  }
`
