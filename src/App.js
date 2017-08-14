import React, { Component } from 'react';
import logo from './logo.svg';
import Sales from './Sales';
import './App.css';

class App extends Component {
  render() {
    let saleItems = [
      { name: 'Complete React development course', price: 100 },
      { name: 'Complete iOS development course', price: 200 },
      { name: 'Complete Cooking course', price: 300 },
      { name: 'Complete Yoga course', price: 400 },
      { name: 'Complete Delorean Driving skills course', price: 500 },
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sales items={saleItems} />
      </div>
    );
  }
}

export default App;
