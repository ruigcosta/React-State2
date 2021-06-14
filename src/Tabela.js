
//TAbela.js

import React from "react";

class Tabela extends React.Component {
    render() {
        return (

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
        );
    };

}

export default Tabela;

