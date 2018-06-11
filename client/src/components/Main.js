import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Studentlist from './studentlist';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Studentlist} />
    </Switch>
  </main>
)

export default Main;