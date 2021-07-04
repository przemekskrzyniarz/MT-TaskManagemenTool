import {gql} from '@apollo/client'

export const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      userId
      email
      token
      tokenExpiration
    }
  }
`
