import React, { Component } from 'react';
import './App.css';

import Converter from './components/converter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Money Converter</h1>
        <div className="row">
          <Converter moneyA="USD" moneyB="BRL"></Converter>
          <Converter moneyA="BRL" moneyB="USD"></Converter>
        </div>
        <div className="row">
          <Converter moneyA="CAD" moneyB="BRL"></Converter>
          <Converter moneyA="BRL" moneyB="CAD"></Converter>
        </div>
        <div className="row">
          <Converter moneyA="EUR" moneyB="BRL"></Converter>
          <Converter moneyA="BRL" moneyB="EUR"></Converter>
        </div>
      </div>
    );
  }
}

export default App;
