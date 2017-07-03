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
      verification: false,
      word: null,
      numbers: []
    };
  }

  render(){
    return (
      <section className="millonaire">
        <article className="question">

        </article>
        <article className="answer">
          <div>
            <button className="button-answer"></button>
            <button className="button-answer"></button>
          </div>
          <div>
            <button className="button-answer"></button>
            <button className="button-answer"></button>
          </div>
        </article>
      </section>
    );
  }
}
