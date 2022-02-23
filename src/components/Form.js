import React, { Component } from 'react';
import { FiLink } from 'react-icons/fi';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <div className="box_form">
        <h1>Adicionar carta </h1>
        <form className="newcardForm">
          <Input name="nome" label="teste" tipo="text"/>
          <label htmlFor="nome">
            Nome:
            <input type="text" name="nome" id="nome" data-testid="name-input" />
          </label>
          <label htmlFor="Descricao">
            Descricao
            <input type="textarea" name="descricao" data-testid="description-input" />
          </label>
          <div className="inputAtributos">
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
          </div>
          <div className="inputUrl">
            <label htmlFor="imagem">
              Imagem
              <FiLink />
              <input type="number" name="imagem" id="imagem" data-testid="image-input" />
            </label>
          </div>
          <div className="inputRariade">
            <label htmlFor="raridade">
              <select name="raridade" id="raridade" data-testid="rare-input">
                <option value="normal">Normal</option>
                <option value="raro">Raro</option>
                <option value="muito raro">Muito Raro</option>
              </select>
            </label>
            <label htmlFor="trunf">
              <input type="checkbox" name="trunf" id="trunf" data-testid="trunfo-input" />
              Super Trunfo
            </label>
          </div>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;