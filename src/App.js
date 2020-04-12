import React from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hellow'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Greet name='Henry'/>
        <Welcome />
        <Hello />
      </div>
    )
  }
}
export default App;
