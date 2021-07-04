import React from 'react'
import {Helmet} from 'react-helmet'
import {HashRouter as Router} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'

import {ErrorBoundary} from '../../containers/ErrorBoundary'
import {Layout} from '../Layout/Layout'
import {Routes} from '../../containers/Routes'
import {client} from '../../apollo'

const Application: React.FC = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router>
        <>
          <Helmet
            titleTemplate="%s — Managment Tool"
            defaultTitle="Managment Tool"
          />
          <Layout />
          <Routes />
        </>
      </Router>
    </ApolloProvider>
  </ErrorBoundary>
)

export {Application}
