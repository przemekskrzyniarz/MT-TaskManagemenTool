import React from "react";

import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { ErrorBoundary } from "../../containers/ErrorBoundary";
import { Layout } from "../Layout/Layout";
import { Routes } from "../../containers/Routes";

import store from "../../redux/store";

const Application: React.FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
        <Router>
          <React.Fragment>
            <Helmet titleTemplate="%s — Managment Tool" defaultTitle="Managment Tool" />
            <Layout/>
            <hr />
            <Routes />
          </React.Fragment>
        </Router>
    </Provider>
  </ErrorBoundary>
);

export { Application };
