import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Studentlist from './studentlist';
import About from './about';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Studentlist} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;