import React, {Component} from 'react';

export default class Home extends Component {

  render(){
    return (
      <article id="About-us">
        <h2 className="text-center">
          ¿Quienes somos?
        </h2>
        <br/>
        <p className="text-justify">
          Bienvenido a AnimeHN, la presente pagina esta hecha por fines didacticos
          y no comerciales. Hecho por alumnos de la universidad Tecnologica de
          Honduras (UNITEC) por los ingenieros Arles Cerrato y Jorge Alvares.
        </p>
        <br/>
        <p className="text-justify">
          Esta página presentará dos juegos e información de los animes mas
          populares del mundo. Los juegos que presenta son: Bingo y Quien quiere
          quiere ser millonario.
        </p>
        <br/>
        <p className="text-center">
          Esperamos que disfruten la pagina.
        </p>
      </article>
    );
  }

}
