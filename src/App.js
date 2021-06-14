//************************************************** */
//App.js
//************************************************** */


import React from "react";
import Tabela from './Tabela';
import Tabela2 from './Tabela2';

/**Componente principal do meu projecto
 * e é uma classe de react
 */
class App extends React.Component {

  render() {
    //este método é obrigatório caso se trate de uma classe
    return(
      <div className="container">
        <h1>Lista de Alunos</h1>
        <div className="row">
          <div className="col-4">
            <h4>Tabela normal</h4>
            <Tabela />

          </div>
          <div className="col-4">
            <h4>Tabela construída com componentes</h4>
            <Tabela2 />

          </div>
        </div>
      </div>
    );
  };
}


export default App;
