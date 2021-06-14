//************************************************** */
//App.js
//************************************************** */


import React from "react";

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

        <table className="table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>José</td>
              <td>Lopes</td>
            </tr>
            <tr>
              <td>Manuel</td>
              <td>Silva</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  };
}


export default App;
