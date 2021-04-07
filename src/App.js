import React from "react";
import { Route, Switch, Router } from "react-router";
import styled from 'styled-components'
import { history } from "./store";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./layouts";
import { AnimalsList } from './containers'
import { styles, routes } from './constants'
import { NotFound } from "./pages/NotFound";

const AppAside = styled.aside`
  width: 10%;
  border-right: solid 1px ${styles.HR_COLOR};
  font-weight: 550;
  margin-right: 20px;
`

const App = () => (
  <Layout>
    <Router history={history}>
      <AppAside><AnimalsList /></AppAside>
      <Switch>
        <Route exact path={routes.baseUrl} component={Animals} />
        <Route exact path={routes.animal} component={Animal} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Layout>
);

export default App;
