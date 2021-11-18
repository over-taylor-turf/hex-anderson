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

      <footer id="footer">
        <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
        <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
      </footer>
    </div>
  );
}

export default App;
