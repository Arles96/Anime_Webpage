import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.jpg';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="head-page">
          <img  id="logo" src={logo} alt="Logo" />
          <h1>AnimeHN</h1>
        </header>
      </div>
    );
  }
}

export default App;
