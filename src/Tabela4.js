
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
const CorpoTabela =(props)=>{

    //o map funciona como um foreach que irá iterar todos os items dos dados
    const linhas=props.dadosAlunos.map((linha, index) =>  {
      return(
        <tr key={index}>
          <td>{linha.nome}</td>
          <td>{linha.apelido}</td>
          <td>
            <button className="btn btn-danger"
              onClick={()=>props.outAlunoARemover(index)}>apagar</button>

          </td>
        </tr>
      );
    });

    return (
      <tbody> {linhas} </tbody>

    );
}




class Tabela4 extends React.Component {


    render() {

        const {inDadosAlunos, outTabelaAlunoParaRemover}=this.props;


        return (
            <table className="table">
              
              <CabecalhoTabela/>
              <CorpoTabela dadosAlunos={inDadosAlunos}
                  outAlunoARemover={outTabelaAlunoParaRemover}
               />

            </table>

        );
    };

}

export default Tabela4;

