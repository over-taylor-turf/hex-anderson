import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Home from './Home';
import All from './All';
import Budapest from './Budapest';
import Moonrise from './Moonrise';
import Chevalier from './Chevalier';
import Darjeeling from './Darjeeling';


function App() {
  return (
    <div id='page-container'>
      <div id='content-container'>

          <Switch>

          <Route path='/' exact component={Home}/>

          <Route path='/budapest' exact component={Budapest} />

          <Route path='/moonrise' exact component={Moonrise} />

          <Route path='/chevalier' exact component={Chevalier} />

          <Route path='/darjeeling' exact component={Darjeeling} />

          <Route path='/all' exact component={All} />

          <Redirect to='/' />
          
          </Switch>   

      </div>

    </div>
  );
}

export default App;
