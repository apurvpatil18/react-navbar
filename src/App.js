import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Navbar/>
      </div>
    )
  }
}

export default App