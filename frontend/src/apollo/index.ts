import {ApolloClient} from '@apollo/client'
import {cache} from './cache'

const env = process.env.NODE_ENV || 'development'
let uri: string
if (env === 'development') {
  uri = 'http://localhost:5000/graphql'
} else {
  uri = 'https://task-managemen-tool.herokuapp.com/graphql'
}

export const client = new ApolloClient({
  uri,
  cache,
})
