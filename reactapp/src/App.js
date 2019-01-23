import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Que from './Que';
import Que2 from './Que2';
import Que1 from './Que1';
import Que3 from './Que3';
import Que4 from './Que4';
import data from './data';
import {render} from "react-dom";
import {CSSTransition} from "react-transition-group";
//import {Router , Route , browserHistory} from "react-router";
import {Redirect} from 'react-router-dom';
import {BrowserRouter , Route ,Switch} from "react-router-dom";
import AskQue from './AskQue';
import {NavLink} from "react-router-dom";

class App extends Component {
 render() {
    return (

<BrowserRouter>
<div>
  <NavLink to="/que1">Ask Questions</NavLink>
<Switch>

<Route path ="/que1"  component = {Que1}/>
<Route path ="/que2"  component = {Que2}/>
<Route path ="/que3"  component = {Que3}/>
<Route path ="/que4"  component = {Que4}/>
</Switch>
</div>
</BrowserRouter>
        
    );
  }
}

export default App;
