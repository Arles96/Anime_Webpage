import React, {Component} from 'react';


export default class Millonaire extends Component{

  constructor(){
    super();
    this.state = {
      question:[
        "¿Como se llama el padre de Naruto?",
        "¿Como se llama la fusión canónica de goku y vegeta?",
        "¿Cual es el verdadero nombre del Kyubi?",
        "¿Como se llama el rey del todo en Dragon Ball Super?",
        "¿Como se llama el padre de Wiss?",
        "¿Quien es el asesino legendario del universo 6 en Dragon Ball Super?",
        "¿Cual es el nombre del Tercer Hokage en Naruto?",
        "¿Cual es fue el motivo de cuarta guerra ninja en Naruto?",
        "¿Cual es el nombre del Biju de 8 colas?",
        "¿Como se llama la transformación mas poderosa de Goku?"
      ],
      answer: [
        ["a) Minato", "b) Jiraiya", "c) Hiruzen", "d) Pain"],
        ["a) Gotenks", "b) Vegito", "c) Gogeta", "d) Broly"],
        ["a) Hachibi", "b) Matatabi", "c) Son Goku", "d) Kurama"],
        ["a) Wiss", "b) Bills", "c) Zeno", "d) DaiShinkan"],
        ["a) Vados", "b) DaiShinkan", "c) Bills", "d) Zeno"],
        ["a) Hit", "b) Cabba", "c) Frost", "d) Botamo"],
        ["a) Hashirama", "b) Tobirama", "c) Minato", "d) Hiruzen"],
        ["a) Obtener a kurama y Hachibi", "b) Por invasiones", "c) Por poder", "d) Ninguna de las anteriores"],
        ["a) kurama", "b) Hachibi", "c) Son Goku", "d) Matatabi"],
        ["a) Super Saiyajin", "b) Super Saiyajin 3", "c) Super Saiyajin Dios", "d) Super Saiyajin Dios Azul"]
      ],
      verification: true,
      account: 0
    };
    this.handleContentGame = this.handleContentGame.bind(this);
    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    this.handleButton3 = this.handleButton3.bind(this);
    this.handleButton4 = this.handleButton4.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
  }

  handleContentGame(){
    if (this.state.verification) {
      return (
        <div className="contentGame">
          <article className="question">
            <p id="question2">{this.state.question[this.state.account]}</p>
          </article>
          <article className="answer">
            <div>
              <button id="button1" className="button-answer" onClick={this.handleButton1}>
                {this.state.answer[this.state.account][0]}
              </button>
              <button id="button2" className="button-answer" onClick={this.handleButton2}>
                {this.state.answer[this.state.account][1]}

              </button>
            </div>
            <div>
              <button id="button3" className="button-answer" onClick={this.handleButton3}>
                {this.state.answer[this.state.account][2]}
              </button>
              <button id="button4" className="button-answer" onClick={this.handleButton4}>
                {this.state.answer[this.state.account][3]}
              </button>
            </div>
          </article>
        </div>
      );
    }
    else {
      return (
        <div className="contentGame">
          <h2>Ha fallado</h2>
          <h3>Desea continuar</h3>
          <button onClick={this.handleButtonReset}>Reiniciar</button>
        </div>
      );
    }
  }

  handleButton1(){
      if (this.state.account==0 || this.state.account==5 || this.state.account==7) {
      let account2 = this.state.account + 1;
      this.setState({
        verification: true,
        account: account2
      });
    }else {
      this.setState({
        verification: false
      })
    }
  }

  handleButton2(){
    if (this.state.account==1 || this.state.account==4 || this.state.account==8) {
      let account2 = this.state.account + 1;
      this.setState({
        verification: true,
        account: account2
      });
    }else {
      this.setState({
        verification: false
      });
    }
  }

  handleButton3(){
    if (this.state.account==3) {
      let account2 = this.state.account + 1;
      this.setState({
        verification: true,
        account: account2
      });
    }else {
      this.setState({
        verification: false
      });
    }
  }

  handleButton4(){
    if (this.state.account==2 || this.state.account==6 || this.state.account==9) {
      let account2 = this.state.account + 1;
      this.setState({
        verification: true,
        account: account2
      });
    }else {
      this.setState({
        verification: false
      });
    }
  }
  handleButtonReset(){
    this.setState({
      verification: true,
      account: 0
    });
  }

  render(){
    return (
      <section className="millonaire">
        {this.handleContentGame()}
      </section>
    );
  }
}
