
//TAbela.js

import React from "react";


function CabecalhoTabela() {
    return (
        <thead>
            <tr>
            <th>Nome</th>
            <th>Apelido</th>
            </tr>
        </thead>
    );
}

/**Componente que representa o Corpo da Tabela
 * Isto é uma arrow function
 */
const CorpoTabela =()=>{
    return (
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

    );
}



class Tabela2 extends React.Component {
    render() {
        return (
            <table className="table">
              
              <CabecalhoTabela/>
              <CorpoTabela/>

            </table>

        );
    };

}

export default Tabela2;

