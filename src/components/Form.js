import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="box_form">
        <h1>Adicionar carta </h1>
        <form className="newcardForm">
          <label htmlFor="nome">
            Nome:
            <input type="text" name="nome" id="nome" data-testid="name-input" />
          </label>
          <label htmlFor="Descricao">
            Descricao
            <input
              type="textarea"
              name="descricao"
              data-testid="description-input"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="atr1">
            Attr01
            <input type="number" name="atr1" id="atr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="atr2">
            Attr02
            <input type="number" name="atr2" id="atr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="atr3">
            Attr03
            <input type="number" name="atr3" id="atr3" data-testid="attr3-input" />
          </label>
          <p>Pontos restantes = 000</p>
          <label htmlFor="imagem">
            Imagem
            <input type="number" name="imagem" id="imagem" data-testid="image-input" />
          </label>
          <label htmlFor="raridade">
            <select id="raridade" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunf">
            <input type="checkbox" name="trunf" id="trunf" data-testid="trunfo-input" />
            Super Trunfo
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
