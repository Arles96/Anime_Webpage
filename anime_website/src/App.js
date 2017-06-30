import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.jpg';
import Home from './Components/Home.js'

class App extends Component {

  constructor(){
    super();
    this.state = {
      home: true,
      bingo: false,
      millionaire: false,
      animes: false
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickBingo = this.handleClickBingo.bind(this);
    this.handleClickMillonaire = this.handleClickMillonaire.bind(this);
    this.handleClickAnimes = this.handleClickAnimes.bind(this);
  }

  handleContent(){
    if (this.state.home) {
      return (<Home/>);
    }else if (this.state.bingo) {
      return(<p>Hola Bingo</p>);
    }else if (this.state.millionaire) {
      return (<p>Hola millonario</p>);
    }else if (this.state.animes) {
      return(<p>Hola animes</p>);
    }
  }

  handleClickHome(){
    this.setState({
      home: true,
      bingo: false,
      millionaire: false,
      animes: false
    });
  }

  handleClickBingo(){
    this.setState({
      home: false,
      bingo: true,
      millionaire: false,
      animes: false
    });
  }

  handleClickMillonaire(){
    this.setState({
      home: false,
      bingo: false,
      millionaire: true,
      animes: false
    });
  }

  handleClickAnimes(){
    this.setState({
      home: false,
      bingo: false,
      millionaire: false,
      animes: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="head-page">
          <img  id="logo" src={logo} alt="Logo" />
          <h1>AnimeHN</h1>
        </header>
        <nav className="Nav-Menu">
          <button className="button-menu" onClick={this.handleClickHome} >Inicio</button>
          <button className="button-menu" onClick={this.handleClickBingo} >Bingo</button>
          <button className="button-menu" onClick={this.handleClickMillonaire} >Quien Quiere ser Millonario</button>
          <button className="button-menu" onClick={this.handleClickAnimes} >Animes</button>
        </nav>
        <section className="content">
          {this.handleContent()}
        </section>
      </div>
    );
  }
}

export default App;
