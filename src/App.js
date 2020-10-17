import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Login from './compnent/login'
import {BrowserRouter as Router,Route,
  /*Redirect*/Switch} from 'react-router-dom';
import chart from '.component/chart.js'
//import sidebar from './compnent/sidebar'
//Redering the class below


export class App extends Component {
  render() {
    return (  
      <div>
        <Router>
          <div>
            <Switch>
//Routes are given below
            <Route path="/Login" component={Login} />
            <Route path="/chart" component = {chart}/>
            
          </Switch>
          </div>
       </Router>
      
      </div>
    )
  }
}


export default App;
