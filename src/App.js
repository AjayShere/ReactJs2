import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Que from './Que';
import Que2 from './Que2';
import Que1 from './Que1';
import Que3 from './Que3';
import Que4 from './Que4';
import cardss from './cardss';

import data from './data';
import {render} from "react-dom";
import {CSSTransition} from "react-transition-group";
//import {Router , Route , browserHistory} from "react-router";
import {Redirect} from 'react-router-dom';
import {BrowserRouter , Route ,Switch} from "react-router-dom";
import AskQue from './AskQue';
import {NavLink} from "react-router-dom";
import show from './show';
import upload from './upload';
import PhotoCapture from './PhotoCapture' ;
import Photo from './Photo'; 
import Menu from './Menu'; 
import StyleStats from './StyleStats';
import ContentTable from './ContentTable';
import NewMenu from './NewMenu';
import Example from './Example';
import DropdownPage from './DropdownPage';
import photophoto from './photophoto';
import photophotocapture from './photophotocapture';
import newdrop from './newdrop';

class App extends Component {
 render() {
    return (

<BrowserRouter>
<div>
  <NavLink to="/que1">Ask Questions</NavLink>
<Switch>

<Route path ="/upload" component = {upload}/>
<Route path ="/photocapture" component = {PhotoCapture}/>
<Route path ="/menu" component = {Menu}/>
<Route path ="/que1"  component = {show}/>
<Route path ="/que2"  component = {Que2}/>
<Route path ="/que3"  component = {Que3}/>
<Route path ="/que4"  component = {Que4}/>
<Route path ="/style"  component ={StyleStats}/>
<Route path ="/table"  component ={ContentTable}/>
<Route path ="/NewMenu" component ={NewMenu}/>
<Route path ="/Example" component = {Example}/>
<Route path ="/card" component = {cardss}/>
<Route path ="/dropdown" component = {DropdownPage}/>
<Route path ="/cap"  component = {photophotocapture}/>
<Route path ="/pho"  component = {photophoto}/>
<Route path ="/newdrop"  component = {newdrop}/>


</Switch>
</div>
</BrowserRouter>
        
    );
  }
}

export default App;
