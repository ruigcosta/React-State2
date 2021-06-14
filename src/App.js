//************************************************** */
//App.js
//************************************************** */


import React from "react";
//import Tabela from './Tabela';
//import Tabela2 from './Tabela2';
import Tabela4 from './Tabela4';

/**Componente principal do meu projecto
 * e é uma classe de react
 */
class App extends React.Component {

  state = {
    alunos : [
      {"nome":"Maria",
      "apelido":"Caldeirão"},
      {"nome":"Mário",
      "apelido":"Silva"},
      {"nome":"João",
      "apelido":"Castro"},
      {"nome":"Carlos",
      "apelido":"Costa"}
    ]
  }


  render() {
    //este método é obrigatório caso se trate de uma classe
    const {alunos} = this.state;

    return(
      <div className="container">
        <h1>Lista de Alunos</h1>
        <div className="row">
          <div className="col-4">
            <h4>Tabela 4 construída com componentes</h4>
            <Tabela4 parDadosAlunos={alunos}/>
            {/* parDadosAlunos é o parâmetro de input que existirá na Tabela3 */}
          </div>
        </div>
      </div>
    );
  };
}


export default App;
